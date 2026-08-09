# Sampling profile

Collected 368 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 96.7% |     356 |
| Ours             |  3.3% |      12 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                         | Location                                                                                 |
| ---: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0.3% |       1 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.3% |       1 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                                       |
| 0.3% |       1 | `getMetaClass()`                                                 | `org.codenarc.rule.unnecessary.UnnecessaryCastRule`                                      |
| 0.3% |       1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| 0.3% |       1 | `super$2$visitClosureExpression(ClosureExpression)`              | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                         |
| 0.3% |       1 | `findMethodHandleType(Class, Class[])`                           | `java.lang.invoke.MethodHandleNatives`                                                   |
| 0.3% |       1 | `getName()`                                                      | `org.codenarc.rule.basic.ConstantTernaryExpressionRule`                                  |
| 0.3% |       1 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                  |
| 0.3% |       1 | `visit(GroovyCodeVisitor)`                                       | `org.codehaus.groovy.ast.expr.ConstantExpression`                                        |
| 0.3% |       1 | `getClass()`                                                     | `java.lang.Object`                                                                       |
| 0.3% |       1 | `<init>(Object, Object)`                                         | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
| 0.3% |       1 | `getMetaClass()`                                                 | `org.codenarc.rule.basic.DuplicateMapKeyRule`                                            |
| 0.3% |       1 | `super$4$visitClassEx(ClassNode)`                                | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                    |
| 0.3% |       1 | `call(Object)`                                                   | `java_util_Map$isEmpty`                                                                  |
| 0.3% |       1 | `visitNotExpression(NotExpression)`                              | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`                               |

#### Categories

##### Ours

|    % | Samples | Function                                                         | Location                                                                                 |
| ---: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0.3% |       1 | `init()`                                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.3% |       1 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
| 0.3% |       1 | `getMetaClass()`                                                 | `org.codenarc.rule.unnecessary.UnnecessaryCastRule`                                      |
| 0.3% |       1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                     |
| 0.3% |       1 | `super$2$visitClosureExpression(ClosureExpression)`              | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`                         |
| 0.3% |       1 | `getName()`                                                      | `org.codenarc.rule.basic.ConstantTernaryExpressionRule`                                  |
| 0.3% |       1 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                  |
| 0.3% |       1 | `<init>(Object, Object)`                                         | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
| 0.3% |       1 | `getMetaClass()`                                                 | `org.codenarc.rule.basic.DuplicateMapKeyRule`                                            |
| 0.3% |       1 | `super$4$visitClassEx(ClassNode)`                                | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                    |
| 0.3% |       1 | `call(Object)`                                                   | `java_util_Map$isEmpty`                                                                  |
| 0.3% |       1 | `visitNotExpression(NotExpression)`                              | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`                               |

##### Standard library

|    % | Samples | Function                                         | Location                                          |
| ---: | ------: | ------------------------------------------------ | ------------------------------------------------- |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                |
| 0.3% |       1 | `findMethodHandleType(Class, Class[])`           | `java.lang.invoke.MethodHandleNatives`            |
| 0.3% |       1 | `visit(GroovyCodeVisitor)`                       | `org.codehaus.groovy.ast.expr.ConstantExpression` |
| 0.3% |       1 | `getClass()`                                     | `java.lang.Object`                                |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:97` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitorRule:95` |

##### `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:377` |

##### `findMethodHandleType(Class, Class[])` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `java.lang.invoke.MethodHandleNatives:386` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor:55` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.ConstantExpression`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.expr.ConstantExpression:82` |

##### `visitNotExpression(NotExpression)` (`org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor:56` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                   | Location                                    |
| -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                | Location                         |
| -----: | ------: | --------------------- | -------------------------------- |
| 100.0% |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |

##### `findMethodHandleType(Class, Class[])` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Caller                   | Location                                                                       |
| -----: | ------: | ------------------------ | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `doCall(Object, Object)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor$_checkMethods_closure1` |

##### `getName()` (`org.codenarc.rule.basic.ConstantTernaryExpressionRule`)

|      % | Samples | Caller                   | Location                                    |
| -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.ConstantExpression`)

|      % | Samples | Caller                    | Location                               |
| -----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getClass()` (`java.lang.Object`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.basic.DuplicateCaseStatementAstVisitor` |

##### `<init>(Object, Object)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5`)

|      % | Samples | Caller                          | Location                                                    |
| -----: | ------: | ------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor` |

##### `call(Object)` (`java_util_Map$isEmpty`)

|      % | Samples | Caller                                     | Location                                   |
| -----: | ------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% |       1 | `calculateForClass(ClassNode, SourceCode)` | `org.gmetrics.metric.AbstractMethodMetric` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                      | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 72.3% |     266 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 37.2% |     137 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 34.2% |     126 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 31.5% |     116 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 28.5% |     105 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 28.0% |     103 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 23.4% |      86 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 22.8% |      84 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
| 20.7% |      76 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 19.6% |      72 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 17.9% |      66 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.0% |      59 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 15.8% |      58 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 14.9% |      55 | `getAst()`                                                    | `org.codenarc.source.AbstractSourceCode`                                   |
| 14.1% |      52 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 14.1% |      52 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.9% |      51 | `init()`                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 12.0% |      44 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.7% |      43 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  6.8% |      25 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

#### Categories

##### Ours

|     % | Samples | Function                                          | Location                                                                           |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 34.2% |     126 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`         |
| 31.5% |     116 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                     |
| 28.0% |     103 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                   |
| 23.4% |      86 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                         |
| 22.8% |      84 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                           |
| 20.7% |      76 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                             |
| 19.6% |      72 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                     |
| 16.0% |      59 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                             |
| 15.8% |      58 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                   |
| 14.9% |      55 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                           |
| 14.1% |      52 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                        |
| 13.9% |      51 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                        |
|  3.3% |      12 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`         |
|  3.0% |      11 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`        |
|  1.9% |       7 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                   |
|  1.6% |       6 | `doCall(Object)`                                  | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7` |
|  1.4% |       5 | `super$3$applyTo(SourceCode, List)`               | `org.codenarc.rule.formatting.IndentationRule`                                     |
|  1.4% |       5 | `doCall(Object, Object)`                          | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`          |
|  1.4% |       5 | `buildLookupTable()`                              | `org.codenarc.plugin.disablerules.LookupTable`                                     |
|  1.1% |       4 | `checkStatementIndent(Statement, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                               |

##### Standard library

|     % | Samples | Function                                                      | Location                                                |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| 72.3% |     266 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                      |
| 37.2% |     137 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                      |
| 28.5% |     105 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                      |
| 17.9% |      66 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 14.1% |      52 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 12.0% |      44 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 11.7% |      43 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  6.8% |      25 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  6.3% |      23 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                      |
|  3.8% |      14 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  3.3% |      12 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801390800`     |
|  3.0% |      11 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`     |
|  2.4% |       9 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  2.2% |       8 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801394400`     |
|  1.4% |       5 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
|  1.4% |       5 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  1.1% |       4 | `callCurrent(GroovyObject, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  1.1% |       4 | `newInstance()`                                               | `java.lang.Class`                                       |
|  0.8% |       3 | `callCurrent(GroovyObject, Object)`                           | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  0.8% |       3 | `callGetProperty(Object)`                                     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 76.2% |      96 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 23.8% |      30 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 71.6% |      83 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 11.2% |      13 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 10.3% |      12 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801390800` |
|  6.9% |       8 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801394400` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                              | Location                                                 |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 77.7% |      80 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  6.8% |       7 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  3.9% |       4 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.formatting.IndentationRule`           |
|  1.9% |       2 | `shouldApplyThisRuleTo(SourceCode)` | `org.codenarc.rule.AbstractRule`                         |
|  1.9% |       2 | `applyTo(SourceCode, List)`         | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 84.9% |      73 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  4.7% |       4 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.7% |       4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  1.2% |       1 | `getAst()`              | `org.codenarc.source.AbstractSourceCode`                |
|  1.2% |       1 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.ThrowExceptionRule`       |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 94.0% |      79 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  3.6% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  2.4% |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 85.5% |      65 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  3.9% |       3 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  2.6% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.3% |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.groovyism.GetterMethodCouldBePropertyAstVisitor` |
|  1.3% |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`     |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 76.4% |      55 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 13.9% |      10 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  8.3% |       6 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  1.4% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                     | Location                                     |
| ---: | ------: | -------------------------- | -------------------------------------------- |
| 1.5% |       1 | `visitImports(ModuleNode)` | `org.codenarc.rule.ClassReferenceAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                    |
| ----: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
| 83.1% |      49 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  5.1% |       3 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|  1.7% |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
|  1.7% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`             |
|  1.7% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`            |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.3% |      57 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.7% |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      55 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee             | Location                                                |
| ----: | ------: | ------------------ | ------------------------------------------------------- |
| 96.2% |      50 | `init()`           | `org.codenarc.analyzer.SuppressionAnalyzer`             |
|  1.9% |       1 | `getName()`        | `org.codenarc.rule.basic.ConstantTernaryExpressionRule` |
|  1.9% |       1 | `contains(Object)` | `java.util.Collections$SynchronizedCollection`          |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                                    |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 76.9% |      40 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  5.8% |       3 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  3.8% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  3.8% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|  3.8% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`             |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee     | Location                                 |
| ----: | ------: | ---------- | ---------------------------------------- |
| 98.0% |      50 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.3% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      12 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Callee                                                   | Location                           |
| -----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 100.0% |      11 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|     % | Samples | Callee                                  | Location                                           |
| ----: | ------: | --------------------------------------- | -------------------------------------------------- |
| 42.9% |       3 | `applyVisitor(AstVisitor, SourceCode)`  | `org.codenarc.rule.AbstractSharedAstVisitorRule`   |
| 28.6% |       2 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateFieldRule`  |
| 14.3% |       1 | `getAstVisitor(SourceCode)`             | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |
| 14.3% |       1 | `getViolations(AstVisitor, SourceCode)` | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 66.7% |       4 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 33.3% |       2 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

|      % | Samples | Callee                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       5 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `doCall(Object, Object)` (`org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 60.0% |       3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 40.0% |       2 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder` |

##### `buildLookupTable()` (`org.codenarc.plugin.disablerules.LookupTable`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       5 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 75.0% |       3 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 25.0% |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.5% |      35 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 7.9% |      29 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 6.8% |      25 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.5% |      13 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.3% |      12 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801390800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.0% |      11 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.9% |       7 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |       4 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.1% |       4 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |       3 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.8% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |       3 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.8% |       3 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       2 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |       2 | `matchRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `doCall(Object)` (`org.codenarc.util.WildcardPattern$_matches_closure2`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `matches(String)` (`org.codenarc.util.WildcardPattern`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `matches(SourceCode)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`) ← … ← `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitConstructorOrMethod(MethodNode, boolean)` ← `super$3$visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`) ← … ← `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |

# Allocated heap profile

Allocated 12 GiB over 6,318 samples (1.94 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.1% | 11.9 GiB |   6,212 |
| Ours             |  0.9% |  107 MiB |      55 |
| Unknown          | <0.1% | 37.4 KiB |      51 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                        | Location                                                                               |
| ----: | -------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
|  0.6% | 70.5 MiB |      35 | `matcher(CharSequence)`                         | `java.util.regex.Pattern`                                                              |
|  0.5% | 61.4 MiB |      32 | `compile(String)`                               | `java.util.regex.Pattern`                                                              |
|  0.1% |   14 MiB |       7 | `<init>()`                                      | `java.util.HashSet`                                                                    |
|  0.1% | 13.1 MiB |       9 | `toString()`                                    | `java.lang.StringBuilder`                                                              |
|  0.1% |   12 MiB |       5 | `<init>()`                                      | `org.codenarc.rule.AbstractAstVisitor`                                                 |
|  0.1% | 11.3 MiB |       6 | `valueOf(int)`                                  | `java.lang.Integer`                                                                    |
|  0.1% | 9.34 MiB |       5 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                    |
|  0.1% |    8 MiB |       4 | `doCall(Object)`                                | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`        |
| <0.1% |    6 MiB |       3 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                             |
| <0.1% |    6 MiB |       3 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                                       |
| <0.1% |    6 MiB |       3 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`                                |
| <0.1% |    4 MiB |       2 | `visitBinaryExpression(BinaryExpression)`       | `org.codenarc.rule.unnecessary.ConsecutiveStringConcatenationAstVisitor`               |
| <0.1% |    4 MiB |       2 | `processMethodOrConstructorCall(MethodCall)`    | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                               |
| <0.1% |    4 MiB |       2 | `getViolationLocationString(Violation, String)` | `org.codenarc.report.TextReportWriter`                                                 |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| <0.1% |    4 MiB |       2 | `processParameters(Parameter[], String)`        | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                     |
| <0.1% |    4 MiB |       2 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                                                   |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`             |
| <0.1% |    4 MiB |       2 | `matches(String)`                               | `org.codenarc.util.WildcardPattern`                                                    |
| <0.1% |    4 MiB |       2 | `writeViolation(Writer, Violation, String)`     | `org.codenarc.report.TextReportWriter`                                                 |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                        | Location                                                |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
|  0.6% | 70.5 MiB |      35 | `matcher(CharSequence)`                         | `java.util.regex.Pattern`                               |
|  0.5% | 61.4 MiB |      32 | `compile(String)`                               | `java.util.regex.Pattern`                               |
|  0.1% |   14 MiB |       7 | `<init>()`                                      | `java.util.HashSet`                                     |
|  0.1% | 13.1 MiB |       9 | `toString()`                                    | `java.lang.StringBuilder`                               |
|  0.1% | 11.3 MiB |       6 | `valueOf(int)`                                  | `java.lang.Integer`                                     |
|  0.1% | 9.34 MiB |       5 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    6 MiB |       3 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
| <0.1% |    4 MiB |       2 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                    |
| <0.1% |    2 MiB |       1 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    2 MiB |       1 | `createPojoWrapper(Object, Class)`              | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |

##### Ours

|     % |     Size | Samples | Function                                        | Location                                                                               |
| ----: | -------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
|  0.1% |   12 MiB |       5 | `<init>()`                                      | `org.codenarc.rule.AbstractAstVisitor`                                                 |
|  0.1% |    8 MiB |       4 | `doCall(Object)`                                | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`        |
| <0.1% |    6 MiB |       3 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                             |
| <0.1% |    6 MiB |       3 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                                       |
| <0.1% |    4 MiB |       2 | `visitBinaryExpression(BinaryExpression)`       | `org.codenarc.rule.unnecessary.ConsecutiveStringConcatenationAstVisitor`               |
| <0.1% |    4 MiB |       2 | `processMethodOrConstructorCall(MethodCall)`    | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                               |
| <0.1% |    4 MiB |       2 | `getViolationLocationString(Violation, String)` | `org.codenarc.report.TextReportWriter`                                                 |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| <0.1% |    4 MiB |       2 | `processParameters(Parameter[], String)`        | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                     |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`             |
| <0.1% |    4 MiB |       2 | `matches(String)`                               | `org.codenarc.util.WildcardPattern`                                                    |
| <0.1% |    4 MiB |       2 | `writeViolation(Writer, Violation, String)`     | `org.codenarc.report.TextReportWriter`                                                 |
| <0.1% | 2.04 MiB |       2 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                         |
| <0.1% |    2 MiB |       1 | `isRuleSuppressed(Rule)`                        | `org.codenarc.analyzer.SuppressionAnalyzer`                                            |
| <0.1% |    2 MiB |       1 | `getAnonymousClasses()`                         | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                             |
| <0.1% |    2 MiB |       1 | `<init>(Metric, MetricLevel, Object, Integer)`  | `org.gmetrics.result.SingleNumberMetricResult`                                         |
| <0.1% |    2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`       | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                |
| <0.1% |    2 MiB |       1 | `<init>()`                                      | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                      |
| <0.1% |    2 MiB |       1 | `visitBlockStatement(BlockStatement)`           | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                      |
| <0.1% |    2 MiB |       1 | `visitExpressionStatement(ExpressionStatement)` | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                               |

#### Lines

Lines ranked by contribution to each function's self size.

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 70.5 MiB |      35 | `java.util.regex.Pattern:1180` |

##### `compile(String)` (`java.util.regex.Pattern`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 61.4 MiB |      32 | `java.util.regex.Pattern:1101` |

##### `<init>()` (`java.util.HashSet`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 14 MiB |       7 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 13.1 MiB |       9 | `java.lang.StringBuilder:475` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 66.7% | 8 MiB |       3 | `org.codenarc.rule.AbstractAstVisitor:36` |
| 33.3% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 11.3 MiB |       6 | `java.lang.Integer:1083` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |     Size | Samples | Location                                                |
| -----: | -------: | ------: | ------------------------------------------------------- |
| 100.0% | 9.34 MiB |       5 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

|      % |  Size | Samples | Location                                                                            |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 8 MiB |       4 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3:112` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 6 MiB |       3 | `org.codenarc.rule.AbstractRule:141` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:36` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.ConsecutiveStringConcatenationAstVisitor`)

|      % |  Size | Samples | Location                                                                    |
| -----: | ----: | ------: | --------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.unnecessary.ConsecutiveStringConcatenationAstVisitor:62` |

##### `processMethodOrConstructorCall(MethodCall)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|     % |  Size | Samples | Location                                                    |
| ----: | ----: | ------: | ----------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor:87` |

##### `getViolationLocationString(Violation, String)` (`org.codenarc.report.TextReportWriter`)

|      % |  Size | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.report.TextReportWriter:97` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3`)

|      % |  Size | Samples | Location                                                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3:159` |

##### `processParameters(Parameter[], String)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.naming.ParameterNameAstVisitor:77` |

##### `filter(Predicate)` (`java.util.stream.ReferencePipeline`)

|      % |  Size | Samples | Location                                 |
| -----: | ----: | ------: | ---------------------------------------- |
| 100.0% | 4 MiB |       2 | `java.util.stream.ReferencePipeline:166` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern:75` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:91` |
| 50.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:90` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 2.04 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `getAnonymousClasses()` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:75` |

##### `<init>(Metric, MetricLevel, Object, Integer)` (`org.gmetrics.result.SingleNumberMetricResult`)

|      % |  Size | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.gmetrics.result.SingleNumberMetricResult:43` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|      % |  Size | Samples | Location                                                                   |
| -----: | ----: | ------: | -------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor:63` |

##### `<init>()` (`org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor:30` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor:41` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`)

|      % |  Size | Samples | Location                                                    |
| -----: | ----: | ------: | ----------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor:71` |

##### `createPojoWrapper(Object, Class)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:633` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|    % |  Size | Samples | Caller                                                  | Location                    |
| ---: | ----: | ------: | ------------------------------------------------------- | --------------------------- |
| 2.8% | 2 MiB |       1 | `findClassDeclarationLineNumber(ClassNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `<init>()` (`java.util.HashSet`)

|     % |  Size | Samples | Caller     | Location                               |
| ----: | ----: | ------: | ---------- | -------------------------------------- |
| 57.1% | 8 MiB |       4 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                   | Location                                    |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 15.3% | 2 MiB |       1 | `repeat(char, int)`      | `org.codenarc.util.AstUtil`                 |
| 15.3% | 2 MiB |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller                        | Location                                                            |
| ----: | ----: | ------: | ----------------------------- | ------------------------------------------------------------------- |
| 33.3% | 4 MiB |       1 | `<init>()`                    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
| 16.7% | 2 MiB |       1 | `<init>(Map, List)`           | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`            |
| 16.7% | 2 MiB |       1 | `<init>()`                    | `org.codenarc.rule.basic.EmptyTryBlockAstVisitor`                   |
| 16.7% | 2 MiB |       1 | `<init>(Class, List, String)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationAstVisitor`  |
| 16.7% | 2 MiB |       1 | `<init>()`                    | `org.codenarc.rule.unnecessary.UnnecessaryCastAstVisitor`           |

##### `valueOf(int)` (`java.lang.Integer`)

|     % |  Size | Samples | Caller                      | Location                                                 |
| ----: | ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 17.6% | 2 MiB |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |     Size | Samples | Caller                                            | Location                                                                        |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| 42.8% |    4 MiB |       2 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 21.4% |    2 MiB |       1 | `statementForcesMethodReturn(Statement)`          | `org.codenarc.rule.basic.DeadCodeAstVisitor`                                    |
| 21.4% |    2 MiB |       1 | `handleExpressionContainingOperation(Expression)` | `org.gmetrics.metric.abc.AbcAstVisitor`                                         |
| 14.4% | 1.35 MiB |       1 | `checkType(String, ASTNode)`                      | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 6 MiB |       3 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|     % |  Size | Samples | Caller                                              | Location                                                  |
| ----: | ----: | ------: | --------------------------------------------------- | --------------------------------------------------------- |
| 33.3% | 2 MiB |       1 | `<init>(Metric, MetricLevel, Collection, Integer)`  | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult` |
| 33.3% | 2 MiB |       1 | `visitMethod(MethodNode)`                           | `org.codenarc.rule.naming.MethodNameAstVisitor`           |
| 33.3% | 2 MiB |       1 | `visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.rule.naming.VariableNameAstVisitor`         |

##### `filter(Predicate)` (`java.util.stream.ReferencePipeline`)

|      % |  Size | Samples | Caller                                 | Location                    |
| -----: | ----: | ------: | -------------------------------------- | --------------------------- |
| 100.0% | 4 MiB |       2 | `getAnnotation(AnnotatedNode, String)` | `org.codenarc.util.AstUtil` |

##### `<init>()` (`org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`)

|      % |  Size | Samples | Caller     | Location                                         |
| -----: | ----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.unused.UnusedArrayAstVisitor` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Caller                           | Location                                                 |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `endsWithSemicolon(String, int)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `createPojoWrapper(Object, Class)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Caller                         | Location                                                          |
| -----: | ----: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `isNotWhitespace(String, int)` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 64.7% | 7.74 GiB |   4,042 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.7% | 5.23 GiB |   2,691 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 37.8% | 4.52 GiB |   2,327 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.8% | 4.04 GiB |   2,078 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 30.5% | 3.64 GiB |   1,899 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.6% | 3.42 GiB |   1,756 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 26.3% | 3.15 GiB |   1,618 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 23.0% | 2.75 GiB |   1,430 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 22.2% | 2.65 GiB |   1,374 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.5% | 2.33 GiB |   1,196 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 16.7% |    2 GiB |   1,028 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.4% | 1.96 GiB |   1,007 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.7% | 1.76 GiB |     900 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.1% | 1.69 GiB |     865 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% | 1.62 GiB |     831 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.7% | 1.52 GiB |     779 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.5% |  1.5 GiB |     747 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|  8.9% | 1.07 GiB |     551 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801394400`                        |
|  7.9% |  971 MiB |     495 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  6.9% |  850 MiB |     418 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                      | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 64.7% | 7.74 GiB |   4,042 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 43.7% | 5.23 GiB |   2,691 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 26.3% | 3.15 GiB |   1,618 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 16.7% |    2 GiB |   1,028 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.7% | 1.76 GiB |     900 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.1% | 1.69 GiB |     865 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.6% | 1.62 GiB |     831 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.7% | 1.52 GiB |     779 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.5% |  1.5 GiB |     747 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|  8.9% | 1.07 GiB |     551 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801394400` |
|  6.9% |  850 MiB |     418 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  6.6% |  805 MiB |     407 | `compile(String)`                                             | `java.util.regex.Pattern`                           |
|  5.5% |  676 MiB |     336 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801390800` |
|  4.2% |  509 MiB |     262 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  4.1% |  503 MiB |     251 | `matches(String)`                                             | `java.lang.String`                                  |
|  4.0% |  487 MiB |     232 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.5% |  425 MiB |     201 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.1% |  383 MiB |     190 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  3.1% |  376 MiB |     190 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  2.7% |  337 MiB |     170 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |

##### Ours

|     % |     Size | Samples | Function                                          | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| 37.8% | 4.52 GiB |   2,327 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| 33.8% | 4.04 GiB |   2,078 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| 30.5% | 3.64 GiB |   1,899 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
| 28.6% | 3.42 GiB |   1,756 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
| 23.0% | 2.75 GiB |   1,430 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                               |
| 22.2% | 2.65 GiB |   1,374 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
| 19.5% | 2.33 GiB |   1,196 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                         |
| 16.4% | 1.96 GiB |   1,007 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  7.9% |  971 MiB |     495 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                       |
|  6.7% |  826 MiB |     420 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
|  3.9% |  480 MiB |     243 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                       |
|  3.8% |  461 MiB |     233 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  3.6% |  439 MiB |     225 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
|  3.5% |  429 MiB |     216 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  3.5% |  428 MiB |     211 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  3.4% |  420 MiB |     207 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  2.6% |  316 MiB |     147 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                             |
|  2.6% |  316 MiB |     147 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                             |
|  2.5% |  304 MiB |     141 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |
|  2.5% |  302 MiB |      78 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`                                         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.9% | 2.35 GiB |   1,211 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 23.6% | 1.07 GiB |     551 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a801394400` |
| 14.6% |  676 MiB |     336 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000a801390800` |
|  9.9% |  458 MiB |     228 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |  509 KiB |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.9% | 3.39 GiB |   1,735 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.3% |  424 MiB |     218 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  5.8% |  239 MiB |     123 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 73.3% | 2.67 GiB |   1,383 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 26.6% |  992 MiB |     514 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.8% | 3.41 GiB |   1,751 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% | 8.07 MiB |       5 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 86.0% | 2.37 GiB |   1,226 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  4.4% |  124 MiB |      62 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  3.2% | 91.3 MiB |      49 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  2.0% | 55.2 MiB |      28 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  0.9% |   26 MiB |      12 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule`  |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 83.2% | 2.21 GiB |   1,131 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 11.1% |  300 MiB |     148 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.8% | 76.2 MiB |      52 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  1.9% | 52.3 MiB |      28 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.1% |    4 MiB |       2 | `addAll(Collection)`    | `java.util.ArrayList`                                   |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                    | Location                                                            |
| ----: | -------: | ------: | ------------------------- | ------------------------------------------------------------------- |
| 85.2% | 1.98 GiB |   1,020 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.9% |  163 MiB |      81 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.4% | 32.7 MiB |      14 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  0.9% |   22 MiB |      11 | `visitClassEx(ClassNode)` | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |
|  0.9% | 20.5 MiB |      11 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.6% |   12 MiB |       6 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.3% | 7.14 MiB |       4 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 83.7% | 1.64 GiB |     843 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.2% |  124 MiB |      62 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.5% | 29.4 MiB |      14 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  0.9% |   18 MiB |       7 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`    |
|  0.7% |   14 MiB |       7 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`      |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                       |
| ---: | -------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 5.0% | 90.7 MiB |      45 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                                    |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 88.6% | 1.49 GiB |     763 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  2.4% | 41.1 MiB |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |
|  2.1% | 36.7 MiB |      19 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  1.6% | 27.3 MiB |      14 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |
|  1.2% | 20.3 MiB |      11 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.4% | 7.35 MiB |       4 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                       |
| ---: | -------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 5.9% | 92.6 MiB |      47 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 95.0% |  922 MiB |     469 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  2.8% | 26.8 MiB |      14 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  2.1% | 20.1 MiB |      11 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% |    2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |     Size | Samples | Callee                                                   | Location                                            |
| ----: | -------: | ------: | -------------------------------------------------------- | --------------------------------------------------- |
| 99.4% |  821 MiB |     417 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% |    2 MiB |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801134800` |
|  0.2% |    2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% |    2 MiB |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% | 1.02 MiB |       1 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder`                  |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 480 MiB |     243 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |    Size | Samples | Callee     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 461 MiB |     233 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 99.2% |  436 MiB |     223 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.8% | 3.43 MiB |       2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a801134800` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 96.3% | 413 MiB |     208 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  1.4% |   6 MiB |       3 | `toString()`     | `java.lang.StringBuilder`                   |
|  0.9% |   4 MiB |       2 | `<init>()`       | `java.lang.StringBuilder`                   |
|  0.9% |   4 MiB |       2 | `append(String)` | `java.lang.StringBuilder`                   |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |    Size | Samples | Callee                                   | Location                                            |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 73.6% | 315 MiB |     153 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 25.5% | 109 MiB |      56 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  0.9% |   4 MiB |       2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a801134800` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % |    Size | Samples | Callee                                         | Location                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% | 420 MiB |     207 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |  Size | Samples | Callee                            | Location                                                              |
| ---: | ----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.6% | 6 MiB |       2 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                        | Location                                            |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% | 316 MiB |     147 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80144dc00` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                            | Location                           |
| -----: | ------: | ------: | ------------------------------------------------- | ---------------------------------- |
| 100.0% | 316 MiB |     147 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 304 MiB |     141 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 302 MiB |      78 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.6% |  926 MiB |     479 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5.5% |  676 MiB |     336 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801390800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.8% |  588 MiB |     295 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.7% |  573 MiB |     282 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4.6% |  569 MiB |     285 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.1% |  505 MiB |     256 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801394400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.7% |  458 MiB |     228 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.6% |  446 MiB |     219 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.2% |  395 MiB |     203 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.7% |  329 MiB |     165 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.7% |  329 MiB |     168 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.9% |  236 MiB |     107 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80144dc00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.9% |  229 MiB |     118 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.5% |  178 MiB |      42 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.9% |  106 MiB |      52 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.7% | 84.6 MiB |      42 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8013b8c00`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.7% | 80.7 MiB |      41 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% | 72.7 MiB |      35 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |   58 MiB |       3 | `<init>(Object[], String[])` (`org.codehaus.groovy.runtime.GStringImpl`) ← `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% | 56.8 MiB |      27 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← … ← `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitBlockStatement(BlockStatement)` ← … ← `visitConstructorOrMethod(MethodNode, boolean)` ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                             |

# Retained heap profile

Retained 263 KiB over 105 objects (2.5 KiB per object).

| Category         |      % |    Size | Objects |
| ---------------- | -----: | ------: | ------: |
| Standard library | 100.0% | 263 KiB |     104 |
| Ours             |  <0.1% |    96 B |       1 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Size | Objects | Function   | Location                |
| ----: | ---: | ------: | ---------- | ----------------------- |
| <0.1% | 96 B |       1 | `<init>()` | `org.codenarc.CodeNarc` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `<init>()` (`org.codenarc.CodeNarc`)

|      % | Size | Objects | Location                    |
| -----: | ---: | ------: | --------------------------- |
| 100.0% | 96 B |       1 | `org.codenarc.CodeNarc:158` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                                                 | Location                                                                                 |
| ----: | -------: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 99.0% |  260 KiB |      69 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                                       |
| 97.8% |  257 KiB |      20 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                                 |
|  1.0% | 2.55 KiB |      40 | `getMetaClass()`                                         | `org.codehaus.groovy.reflection.ClassInfo`                                               |
|  0.7% | 1.85 KiB |      22 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                                         |
|  0.7% | 1.79 KiB |      28 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                                       |
|  0.6% | 1.68 KiB |      19 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
|  0.6% | 1.59 KiB |      18 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`               |
|  0.4% | 1.11 KiB |      21 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801134800`                                      |
|  0.4% | 1.04 KiB |      20 | `assertClassImplementsRuleInterface(Class)`              | `org.codenarc.ruleset.RuleSetUtil`                                                       |
|  0.4% |   1000 B |      18 | `doCall(Object)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`                       |
|  0.4% |    992 B |      14 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                                 |
|  0.4% |    992 B |      14 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
|  0.4% |    992 B |      14 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
|  0.3% |    776 B |       3 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                       |
|  0.3% |    680 B |      10 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                                   |
|  0.2% |    648 B |       2 | `visitMethodCallExpression(MethodCallExpression)`        | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |
|  0.2% |    648 B |       2 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                  |
|  0.2% |    624 B |       7 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                       |
|  0.2% |    488 B |       7 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                                   |
|  0.2% |    488 B |       7 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                        |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                                                                 |
| ----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 97.8% |  257 KiB |      20 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                                 |
|  0.7% | 1.85 KiB |      22 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                         |
|  0.6% | 1.68 KiB |      19 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
|  0.6% | 1.59 KiB |      18 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`               |
|  0.4% | 1.04 KiB |      20 | `assertClassImplementsRuleInterface(Class)`       | `org.codenarc.ruleset.RuleSetUtil`                                                       |
|  0.4% |   1000 B |      18 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`                       |
|  0.4% |    992 B |      14 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                                 |
|  0.4% |    992 B |      14 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
|  0.4% |    992 B |      14 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
|  0.3% |    680 B |      10 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                                   |
|  0.2% |    648 B |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |
|  0.2% |    648 B |       2 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                                  |
|  0.2% |    488 B |       7 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                                   |
|  0.2% |    456 B |       7 | `<clinit>()`                                      | `org.codenarc.CodeNarc`                                                                  |
|  0.2% |    456 B |       8 | `getAstVisitor()`                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                               |
|  0.1% |    288 B |       3 | `<init>(Reader)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet`                                                  |
|  0.1% |    264 B |       2 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                          |
|  0.1% |    224 B |       2 | `validateXml(String)`                             | `org.codenarc.ruleset.XmlReaderRuleSet`                                                  |
|  0.1% |    216 B |       3 | `line(int)`                                       | `org.codenarc.source.AbstractSourceCode`                                                 |
|  0.1% |    216 B |       3 | `sourceLineTrimmed(ASTNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Objects | Callee                                                           | Location                           |
| -----: | ------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 100.0% | 257 KiB |      18 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  <0.1% |   128 B |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Objects | Callee                      | Location                                         |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------ |
| 90.7% | 1.68 KiB |      19 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`       |
|  6.3% |    120 B |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |
|  3.0% |     56 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`    |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |  Size | Objects | Callee                  | Location                                                               |
| ----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 37.7% | 648 B |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                |
| 32.6% | 560 B |       8 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                                 |
| 26.5% | 456 B |       8 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                             |
|  3.3% |  56 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Objects | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.59 KiB |      18 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |     Size | Objects | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 1.04 KiB |      20 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801134800` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|      % |   Size | Objects | Callee                                   | Location                           |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1000 B |      18 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |  Size | Objects | Callee                           | Location                           |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 992 B |      14 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Objects | Callee     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 992 B |      14 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Objects | Callee   | Location                                    |
| -----: | ----: | ------: | -------- | ------------------------------------------- |
| 100.0% | 992 B |      14 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Objects | Callee                    | Location                                                              |
| ----: | ----: | ------: | ------------------------- | --------------------------------------------------------------------- |
| 71.8% | 488 B |       7 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 18.8% | 128 B |       2 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                  |
|  9.4% |  64 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`)

|     % |  Size | Objects | Callee                                                   | Location                           |
| ----: | ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 81.5% | 528 B |       1 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 18.5% | 120 B |       1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|      % |  Size | Objects | Callee                                            | Location                                                                                 |
| -----: | ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 648 B |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Objects | Callee                      | Location                                                         |
| ----: | ----: | ------: | --------------------------- | ---------------------------------------------------------------- |
| 82.0% | 400 B |       6 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                |
| 18.0% |  88 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor` |

##### `<clinit>()` (`org.codenarc.CodeNarc`)

|     % |  Size | Objects | Callee                   | Location                                   |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------ |
| 75.4% | 344 B |       6 | `<clinit>()`             | `groovy.lang.Closure`                      |
| 24.6% | 112 B |       1 | `<init>(Object, Object)` | `org.codenarc.CodeNarc$__clinit__closure4` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Objects | Callee          | Location          |
| -----: | ----: | ------: | --------------- | ----------------- |
| 100.0% | 456 B |       8 | `newInstance()` | `java.lang.Class` |

##### `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|      % |  Size | Objects | Callee                                   | Location                           |
| -----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 288 B |       3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)

|      % |  Size | Objects | Callee                                   | Location                           |
| -----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 264 B |       2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|      % |  Size | Objects | Callee                                   | Location                           |
| -----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 224 B |       2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|      % |  Size | Objects | Callee                           | Location                           |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 216 B |       3 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |  Size | Objects | Callee      | Location                                 |
| -----: | ----: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 216 B |       3 | `line(int)` | `org.codenarc.source.AbstractSourceCode` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |    Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.4% | 256 KiB |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |  1000 B |      18 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.3% |   840 B |      11 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |   528 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                            |
|  0.1% |   344 B |       6 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |   208 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |   200 B |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   128 B |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                                    |
| <0.1% |   128 B |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <0.1% |   120 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.size.MethodSizeAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                               |
| <0.1% |   120 B |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   112 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<init>(Object, Object)` (`org.codenarc.CodeNarc$__clinit__closure4`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |   112 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   112 B |       1 | `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `statementForcesMethodReturn(Statement)` (`org.codenarc.rule.basic.DeadCodeAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.basic.DeadCodeAstVisitor$_visitBlockStatement_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |   104 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   104 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |    96 B |       1 | `<init>()` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |    96 B |       1 | `callGetProperty(Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `<init>(MethodNode)` (`org.gmetrics.result.MethodKey`) ← … ← `callConstructor(Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `doCall(Object)` (`org.gmetrics.metric.AbstractMethodMetric$_addMethodsToMetricResults_closure4`) ← … ← `call(Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `addMethodsToMetricResults(SourceCode, ClassNode, Map)` (`org.gmetrics.metric.AbstractMethodMetric`) ← … ← `callCurrent(GroovyObject, Object, Object, Object)` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)                                                                                                                                                                                                                            |
| <0.1% |    88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                                                                                                           |
| <0.1% |    88 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
