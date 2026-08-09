# Sampling profile

Collected 342 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 96.8% |     331 |
| Ours             |  3.2% |      11 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                              | Location                                                                                 |
| ---: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0.3% |       1 | `init()`                                              | `org.codenarc.source.AbstractSourceCode`                                                 |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                           |
| 0.3% |       1 | `visitExpressionStatement(ExpressionStatement)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                        |
| 0.3% |       1 | `visitConstructorOrMethod(MethodNode, boolean)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                        |
| 0.3% |       1 | `visitMethod(MethodNode)`                             | `org.codenarc.rule.AbstractAstVisitor`                                                   |
| 0.3% |       1 | `addViolationIfDuplicate(Expression, boolean)`        | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
| 0.3% |       1 | `visitObjectInitializerStatements(ClassNode)`         | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`                             |
| 0.3% |       1 | `<init>()`                                            | `org.gmetrics.metric.AbstractAstVisitor`                                                 |
| 0.3% |       1 | `doCall(AnnotationNode)`                              | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
| 0.3% |       1 | `applyTo(SourceCode, List)`                           | `org.codenarc.rule.formatting.BracesForClassRule`                                        |
| 0.3% |       1 | `visitPropertyExpression(PropertyExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                             |
| 0.3% |       1 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                                             |
| 0.3% |       1 | `visitClassEx(ClassNode)`                             | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`                           |
| 0.3% |       1 | `getClass()`                                          | `java.lang.Object`                                                                       |
| 0.3% |       1 | `getSuppressionsByLineNumber(ModuleNode)`             | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.3% |       1 | `getMetaClass()`                                      | `org.codenarc.rule.braces.WhileStatementBracesRule`                                      |

#### Categories

##### Ours

|    % | Samples | Function                                       | Location                                                                                 |
| ---: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0.3% |       1 | `init()`                                       | `org.codenarc.source.AbstractSourceCode`                                                 |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                           |
| 0.3% |       1 | `visitMethod(MethodNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                                   |
| 0.3% |       1 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                       |
| 0.3% |       1 | `visitObjectInitializerStatements(ClassNode)`  | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`                             |
| 0.3% |       1 | `<init>()`                                     | `org.gmetrics.metric.AbstractAstVisitor`                                                 |
| 0.3% |       1 | `doCall(AnnotationNode)`                       | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5` |
| 0.3% |       1 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.formatting.BracesForClassRule`                                        |
| 0.3% |       1 | `visitClassEx(ClassNode)`                      | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`                           |
| 0.3% |       1 | `getSuppressionsByLineNumber(ModuleNode)`      | `org.codenarc.analyzer.SuppressionAnalyzer`                                              |
| 0.3% |       1 | `getMetaClass()`                               | `org.codenarc.rule.braces.WhileStatementBracesRule`                                      |

##### Standard library

|    % | Samples | Function                                              | Location                                          |
| ---: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 0.3% |       1 | `visitExpressionStatement(ExpressionStatement)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| 0.3% |       1 | `visitConstructorOrMethod(MethodNode, boolean)`       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| 0.3% |       1 | `visitPropertyExpression(PropertyExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`      |
| 0.3% |       1 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`      |
| 0.3% |       1 | `getClass()`                                          | `java.lang.Object`                                |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:112` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:203` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Location                                              |
| -----: | ------: | ----------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:115` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:156` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Location                                               |
| -----: | ------: | ------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor:132` |

##### `visitObjectInitializerStatements(ClassNode)` (`org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor:37` |

##### `<init>()` (`org.gmetrics.metric.AbstractAstVisitor`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.gmetrics.metric.AbstractAstVisitor:33` |

##### `doCall(AnnotationNode)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor$_visitClassComplete_closure5:57` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.BracesForClassRule`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.BracesForClassRule:39` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:340` |

##### `visitArgumentlistExpression(ArgumentListExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:367` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor:38` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:143` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Caller                    | Location                                          |
| -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Caller                                | Location                                           |
| -----: | ------: | ------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `addViolationIfDuplicate(Expression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitObjectInitializerStatements(ClassNode)` (`org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor`)

|      % | Samples | Caller                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `<init>()` (`org.gmetrics.metric.AbstractAstVisitor`)

|      % | Samples | Caller     | Location                                                        |
| -----: | ------: | ---------- | --------------------------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.BracesForClassRule`)

|      % | Samples | Caller                | Location                         |
| -----: | ------: | --------------------- | -------------------------------- |
| 100.0% |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.naming.ClassNameSameAsSuperclassAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getClass()` (`java.lang.Object`)

|      % | Samples | Caller                  | Location                                        |
| -----: | ------: | ----------------------- | ----------------------------------------------- |
| 100.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.design.InstanceofAstVisitor` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |       1 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                         | Location                                                                   |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 72.8% |     249 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 37.7% |     129 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 32.7% |     112 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 29.5% |     101 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
| 27.5% |      94 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
| 24.9% |      85 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 24.6% |      84 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 21.9% |      75 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 19.0% |      65 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 17.3% |      59 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 17.0% |      58 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 16.7% |      57 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 16.4% |      56 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.3% |      49 | `visitMethod(MethodNode)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.9% |      44 | `visitConstructorOrMethod(MethodNode, boolean)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.6% |      43 | `visitBlockStatement(BlockStatement)`            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.0% |      41 | `visitExpressionStatement(ExpressionStatement)`  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.7% |      40 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 11.4% |      39 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 11.4% |      39 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 32.7% |     112 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 29.5% |     101 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 24.9% |      85 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 24.6% |      84 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 21.9% |      75 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 19.0% |      65 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| 17.0% |      58 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 16.7% |      57 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 16.4% |      56 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 11.7% |      40 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 11.4% |      39 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| 11.4% |      39 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  5.8% |      20 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  3.8% |      13 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  2.6% |       9 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|  2.6% |       9 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
|  2.0% |       7 | `applyVisitor(AstVisitor, SourceCode)`           | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
|  1.8% |       6 | `addViolationIfDuplicate(Expression, boolean)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  1.8% |       6 | `addViolationIfDuplicate(Expression)`            | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  1.8% |       6 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                    |

##### Standard library

|     % | Samples | Function                                                      | Location                                                |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| 72.8% |     249 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                      |
| 37.7% |     129 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                      |
| 27.5% |      94 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                      |
| 17.3% |      59 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 14.3% |      49 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 12.9% |      44 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 12.6% |      43 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 12.0% |      41 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  7.9% |      27 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                      |
|  7.3% |      25 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  4.1% |      14 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`     |
|  4.1% |      14 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  4.1% |      14 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  3.5% |      12 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  2.9% |      10 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`     |
|  2.3% |       8 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`              |
|  2.3% |       8 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  1.5% |       5 | `newInstance()`                                               | `java.lang.Class`                                       |
|  1.5% |       5 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`     |
|  1.2% |       4 | `callCurrent(GroovyObject, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 81.3% |      91 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 18.8% |      21 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                 |
| ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 73.3% |      74 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  8.9% |       9 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  5.9% |       6 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  3.0% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`   |
|  2.0% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 71.8% |      61 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 11.8% |      10 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801390400` |
| 10.6% |       9 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  5.9% |       5 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 78.6% |      66 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 10.7% |       9 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  6.0% |       5 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.8% |       4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                    | Location                                                            |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------- |
| 78.7% |      59 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  4.0% |       3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`       |
|  2.7% |       2 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor`                |
|  2.7% |       2 | `visitClassEx(ClassNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.3% |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 89.2% |      58 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  4.6% |       3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  3.1% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.5% |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                                        | Location                                                     |
| ---: | ------: | --------------------------------------------- | ------------------------------------------------------------ |
| 1.7% |       1 | `visitObjectInitializerStatements(ClassNode)` | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 93.1% |      54 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  6.9% |       4 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 73.7% |      42 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 21.1% |      12 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  3.5% |       2 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                    |
| ----: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
| 87.5% |      49 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  1.8% |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
|  1.8% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`            |
|  1.8% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`            |
|  1.8% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`             |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                        |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 73.5% |      36 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  6.1% |       3 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`        |
|  6.1% |       3 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.convention.NoDefAstVisitor`                  |
|  4.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`        |
|  4.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 2.3% |       1 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 2.4% |       1 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                                    | Location                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 97.5% |      39 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  2.5% |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      39 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      39 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 85.0% |      17 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.0% |       2 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  5.0% |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      13 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|     % | Samples | Callee                                            | Location                                                                                 |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 44.4% |       4 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                             |
| 22.2% |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |
| 11.1% |       1 | `getMethodCallExpressions()`                      | `org.codenarc.source.AbstractSourceCode`                                                 |
| 11.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`                            |
| 11.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ClosureAsLastMethodParameterAstVisitor`                     |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|     % | Samples | Callee                                 | Location                                           |
| ----: | ------: | -------------------------------------- | -------------------------------------------------- |
| 77.8% |       7 | `applyVisitor(AstVisitor, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`   |
| 11.1% |       1 | `isValid()`                            | `org.codenarc.source.AbstractSourceCode`           |
| 11.1% |       1 | `getAstVisitor(SourceCode)`            | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|      % | Samples | Callee                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       7 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 50.0% |       3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 16.7% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 16.7% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Callee                                         | Location                                           |
| -----: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% |       6 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

|     % | Samples | Callee                                                        | Location                                            |
| ----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 83.3% |       5 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| 16.7% |       1 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% |      23 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 6.7% |      23 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5.6% |      19 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.5% |      12 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.6% |       9 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.6% |       9 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.3% |       8 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.5% |       5 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% |       4 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`) ← … ← `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitExpressionStatement(ExpressionStatement)` ← … ← `visitBlockStatement(BlockStatement)` ← … ← `visitConstructorOrMethod(MethodNode, boolean)` ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryFinalOnPrivateMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                       |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                       |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.source.AbstractSourceCode`) ← `<init>(File)` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Allocated heap profile

Allocated 11.8 GiB over 6,264 samples (1.92 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.2% | 11.7 GiB |   6,165 |
| Ours             |  0.8% | 97.6 MiB |      50 |
| Unknown          | <0.1% | 33.8 KiB |      49 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                          | Location                                                                        |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
|  0.4% |   54 MiB |      26 | `compile(String)`                                 | `java.util.regex.Pattern`                                                       |
|  0.2% | 24.7 MiB |      16 | `toString()`                                      | `java.lang.StringBuilder`                                                       |
|  0.2% |   22 MiB |      11 | `<init>()`                                        | `java.util.HashSet`                                                             |
|  0.1% | 11.9 MiB |       6 | `valueOf(int)`                                    | `java.lang.Integer`                                                             |
|  0.1% |   10 MiB |       5 | `isCase(Object, Object)`                          | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
|  0.1% |    8 MiB |       4 | `matches(String)`                                 | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    6 MiB |       3 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                          |
| <0.1% |    6 MiB |       2 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| <0.1% |    6 MiB |       3 | `writeViolation(Writer, Violation, String)`       | `org.codenarc.report.TextReportWriter`                                          |
| <0.1% | 4.18 MiB |       3 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
| <0.1% |    4 MiB |       2 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
| <0.1% |    4 MiB |       2 | `createRange(Object, Object, boolean, boolean)`   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
| <0.1% |    4 MiB |       1 | `isSpockMethod(MethodCallExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                     |
| <0.1% |    4 MiB |       2 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`          |
| <0.1% |    4 MiB |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                    |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| <0.1% | 3.91 MiB |       2 | `shouldApplyThisRuleTo(SourceCode)`               | `org.codenarc.rule.AbstractRule`                                                |
| <0.1% | 3.34 MiB |       2 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                      |
| <0.1% |    2 MiB |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                           |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                       | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`                   |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                        | Location                                                |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
|  0.4% |   54 MiB |      26 | `compile(String)`                               | `java.util.regex.Pattern`                               |
|  0.2% | 24.7 MiB |      16 | `toString()`                                    | `java.lang.StringBuilder`                               |
|  0.2% |   22 MiB |      11 | `<init>()`                                      | `java.util.HashSet`                                     |
|  0.1% | 11.9 MiB |       6 | `valueOf(int)`                                  | `java.lang.Integer`                                     |
|  0.1% |   10 MiB |       5 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    4 MiB |       2 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    2 MiB |       1 | `<init>()`                                      | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
| <0.1% |    2 MiB |       1 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|     % |     Size | Samples | Function                                                                | Location                                                                               |
| ----: | -------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
|  0.1% |    8 MiB |       4 | `matches(String)`                                                       | `org.codenarc.util.WildcardPattern`                                                    |
| <0.1% |    6 MiB |       3 | `<init>()`                                                              | `org.codenarc.rule.AbstractAstVisitor`                                                 |
| <0.1% |    6 MiB |       2 | `doCall(Object)`                                                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`             |
| <0.1% |    6 MiB |       3 | `writeViolation(Writer, Violation, String)`                             | `org.codenarc.report.TextReportWriter`                                                 |
| <0.1% | 4.18 MiB |       3 | `collectViolations(SourceCode, RuleSet)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                         |
| <0.1% |    4 MiB |       2 | `isRuleSuppressed(Rule)`                                                | `org.codenarc.analyzer.SuppressionAnalyzer`                                            |
| <0.1% |    4 MiB |       1 | `isSpockMethod(MethodCallExpression)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                            |
| <0.1% |    4 MiB |       2 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`                 |
| <0.1% |    4 MiB |       2 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`                           |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                                        | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`        |
| <0.1% | 3.91 MiB |       2 | `shouldApplyThisRuleTo(SourceCode)`                                     | `org.codenarc.rule.AbstractRule`                                                       |
| <0.1% | 3.34 MiB |       2 | `applyTo(SourceCode, List)`                                             | `org.codenarc.rule.AbstractAstVisitorRule`                                             |
| <0.1% |    2 MiB |       1 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                                  |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                                             | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`                          |
| <0.1% |    2 MiB |       1 | `visitBlockStatement(BlockStatement)`                                   | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`                        |
| <0.1% |    2 MiB |       1 | `visitConstantExpression(ConstantExpression)`                           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                           |
| <0.1% |    2 MiB |       1 | `visitBlockStatement(BlockStatement)`                                   | `org.codenarc.rule.size.NestedBlockDepthAstVisitor`                                    |
| <0.1% |    2 MiB |       1 | `doCall(Object)`                                                        | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
| <0.1% |    2 MiB |       1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)`        | `org.codenarc.rule.formatting.IndentationAstVisitor`                                   |
| <0.1% |    2 MiB |       1 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `compile(String)` (`java.util.regex.Pattern`)

|      % |   Size | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 54 MiB |      26 | `java.util.regex.Pattern:1101` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 24.7 MiB |      16 | `java.lang.StringBuilder:475` |

##### `<init>()` (`java.util.HashSet`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 22 MiB |      11 | `java.util.HashSet:107` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 11.9 MiB |       6 | `java.lang.Integer:1083` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |   Size | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 10 MiB |       5 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|     % |  Size | Samples | Location                               |
| ----: | ----: | ------: | -------------------------------------- |
| 50.0% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern:75` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 66.7% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:39` |
| 33.3% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitor:36` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 6 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 66.7% | 4 MiB |       2 | `org.codenarc.report.TextReportWriter:92` |
| 33.3% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:90` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 4.18 MiB |       3 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `isSpockMethod(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`)

|      % |  Size | Samples | Location                                                       |
| -----: | ----: | ------: | -------------------------------------------------------------- |
| 100.0% | 4 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor:68` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`)

|     % |  Size | Samples | Location                                                                  |
| ----: | ----: | ------: | ------------------------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor:69` |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor:71` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

|      % |  Size | Samples | Location                                                        |
| -----: | ----: | ------: | --------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor:63` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

|      % |  Size | Samples | Location                                                                            |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3:112` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 3.91 MiB |       2 | `org.codenarc.rule.AbstractRule:253` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 3.34 MiB |       2 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.design.LocaleSetDefaultAstVisitor`)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor:41` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`)

|      % |  Size | Samples | Location                                                         |
| -----: | ----: | ------: | ---------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor:73` |

##### `<init>()` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:29` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`)

|      % |  Size | Samples | Location                                                           |
| -----: | ----: | ------: | ------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor:76` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|      % |  Size | Samples | Location                                                        |
| -----: | ----: | ------: | --------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:45` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.size.NestedBlockDepthAstVisitor`)

|      % |  Size | Samples | Location                                               |
| -----: | ----: | ------: | ------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.size.NestedBlockDepthAstVisitor:75` |

##### `doCall(Object)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3`)

|      % |  Size | Samples | Location                                                                                   |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3:159` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:36` |

##### `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:382` |

##### `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:218` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `compile(String)` (`java.util.regex.Pattern`)

|    % |  Size | Samples | Caller                         | Location           |
| ---: | ----: | ------: | ------------------------------ | ------------------ |
| 3.7% | 2 MiB |       1 | `replaceFirst(String, String)` | `java.lang.String` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |   Size | Samples | Caller                   | Location                                    |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 40.4% | 10 MiB |       5 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `<init>()` (`java.util.HashSet`)

|     % |  Size | Samples | Caller                                          | Location                                    |
| ----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 27.3% | 6 MiB |       3 | `<init>()`                                      | `org.codenarc.rule.AbstractAstVisitor`      |
|  9.1% | 2 MiB |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `valueOf(int)` (`java.lang.Integer`)

|     % |  Size | Samples | Caller                      | Location                                                 |
| ----: | ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 16.7% | 2 MiB |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                                        |
| ----: | ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 40.0% | 4 MiB |       2 | `doCall(Object)`                              | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 20.0% | 2 MiB |       1 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`              |
| 20.0% | 2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`     | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`          |
| 20.0% | 2 MiB |       1 | `statementForcesMethodReturn(Statement)`      | `org.codenarc.rule.basic.DeadCodeAstVisitor`                                    |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller     | Location                                                         |
| ----: | ----: | ------: | ---------- | ---------------------------------------------------------------- |
| 33.3% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.size.MethodCountAstVisitor`                   |
| 33.3% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.design.CollectionReturnTracker`               |
| 33.3% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.BitwiseOperatorInConditionalAstVisitor` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                 |
| ----: | ----: | ------: | --------------------------------------------- | -------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `visitVariableExpression(VariableExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |
| 50.0% | 2 MiB |       1 | `lineNumberForMethod(MethodNode, SourceCode)` | `org.gmetrics.metric.AbstractMethodMetric`               |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`)

|      % |  Size | Samples | Caller                     | Location                                        |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------- |
| 100.0% | 4 MiB |       2 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |     Size | Samples | Caller                | Location                         |
| -----: | -------: | ------: | --------------------- | -------------------------------- |
| 100.0% | 3.91 MiB |       2 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |     Size | Samples | Caller                | Location                         |
| -----: | -------: | ------: | --------------------- | -------------------------------- |
| 100.0% | 3.34 MiB |       2 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>()` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Caller                                            | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)` | `org.gmetrics.metric.abc.result.AbcMetricResult` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Caller                                      | Location                            |
| -----: | ----: | ------: | ------------------------------------------- | ----------------------------------- |
| 100.0% | 2 MiB |       1 | `convertStringWithWildcardsToRegex(String)` | `org.codenarc.util.WildcardPattern` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                 | Location                                                                    |
| ----: | -------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 63.8% | 7.51 GiB |   3,938 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| 43.5% | 5.12 GiB |   2,654 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| 37.7% | 4.44 GiB |   2,307 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 33.8% | 3.98 GiB |   2,059 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 29.5% | 3.48 GiB |   1,843 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 27.9% | 3.28 GiB |   1,697 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 26.3% |  3.1 GiB |   1,552 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| 22.3% | 2.63 GiB |   1,399 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
| 21.1% | 2.49 GiB |   1,321 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 18.4% | 2.17 GiB |   1,140 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 15.8% | 1.86 GiB |     975 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 15.1% | 1.78 GiB |     932 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 13.1% | 1.54 GiB |     801 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 12.7% | 1.49 GiB |     782 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 12.1% | 1.42 GiB |     742 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 11.6% | 1.37 GiB |     695 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| 11.6% | 1.37 GiB |     714 | `visitExpressionStatement(ExpressionStatement)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  9.2% | 1.09 GiB |     564 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                         |
|  8.4% | 1009 MiB |     510 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  6.5% |  781 MiB |     401 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                      | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 63.8% | 7.51 GiB |   3,938 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 43.5% | 5.12 GiB |   2,654 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 26.3% |  3.1 GiB |   1,552 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 15.8% | 1.86 GiB |     975 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.1% | 1.54 GiB |     801 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.7% | 1.49 GiB |     782 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.1% | 1.42 GiB |     742 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 11.6% | 1.37 GiB |     695 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
| 11.6% | 1.37 GiB |     714 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  9.2% | 1.09 GiB |     564 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |
|  6.4% |  774 MiB |     398 | `compile(String)`                                             | `java.util.regex.Pattern`                           |
|  6.3% |  754 MiB |     381 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  6.0% |  729 MiB |     357 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000801390400` |
|  5.6% |  672 MiB |     337 | `visit(GroovyCodeVisitor)`                                    | `org.codehaus.groovy.ast.expr.BinaryExpression`     |
|  4.1% |  492 MiB |     253 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.8% |  458 MiB |     229 | `matches(String)`                                             | `java.lang.String`                                  |
|  3.8% |  457 MiB |     226 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.1% |  377 MiB |     186 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.0% |  358 MiB |     186 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  3.0% |  357 MiB |     181 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### Ours

|     % |     Size | Samples | Function                                          | Location                                                                            |
| ----: | -------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 37.7% | 4.44 GiB |   2,307 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| 33.8% | 3.98 GiB |   2,059 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| 29.5% | 3.48 GiB |   1,843 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
| 27.9% | 3.28 GiB |   1,697 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
| 22.3% | 2.63 GiB |   1,399 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                    |
| 21.1% | 2.49 GiB |   1,321 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
| 18.4% | 2.17 GiB |   1,140 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                              |
| 15.1% | 1.78 GiB |     932 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                              |
|  8.4% | 1009 MiB |     510 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                            |
|  6.5% |  781 MiB |     401 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`         |
|  4.0% |  482 MiB |     241 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                            |
|  3.9% |  473 MiB |     237 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`          |
|  3.6% |  432 MiB |     216 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|  3.5% |  427 MiB |     214 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|  3.5% |  420 MiB |     204 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|  3.5% |  418 MiB |     203 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|  2.6% |  316 MiB |     136 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                  |
|  2.6% |  316 MiB |     136 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                                  |
|  2.6% |  314 MiB |     135 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|  2.2% |  260 MiB |     108 | `doCall(Object)`                                  | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 50.1% | 2.23 GiB |   1,164 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 24.5% | 1.09 GiB |     564 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |
| 16.0% |  729 MiB |     357 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801390400` |
|  9.2% |  420 MiB |     219 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% | 3.39 MiB |       2 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.9% | 3.34 GiB |   1,729 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.4% |  425 MiB |     211 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  5.5% |  225 MiB |     116 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 74.4% | 2.59 GiB |   1,384 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 25.4% |  904 MiB |     457 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.6% | 3.27 GiB |   1,690 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.4% | 12.7 MiB |       7 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 84.3% | 2.21 GiB |   1,181 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  5.0% |  133 MiB |      68 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  4.0% |  107 MiB |      55 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  1.5% |   41 MiB |      21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |
|  1.5% | 39.6 MiB |      21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 81.8% | 2.03 GiB |   1,067 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 10.1% |  257 MiB |     129 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  3.9% | 98.7 MiB |      51 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  2.9% | 74.4 MiB |      55 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  0.2% |  6.1 MiB |       4 | `getAst()`              | `org.codenarc.source.AbstractSourceCode`                |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 85.0% | 1.85 GiB |     969 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.0% |  133 MiB |      67 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.2% | 25.8 MiB |      13 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.0% |   22 MiB |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.convention.CompileStaticlVisitor`                |
|  1.0% | 21.3 MiB |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |    Size | Samples | Callee                            | Location                                                              |
| ----: | ------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
|  0.4% |   8 MiB |       4 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
|  0.1% |   2 MiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`               |
|  0.1% |   2 MiB |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| <0.1% | 880 KiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 82.7% | 1.47 GiB |     771 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.6% |  121 MiB |      59 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.8% | 32.2 MiB |      17 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  1.0% | 17.3 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`     |
|  0.8% |   14 MiB |       7 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                        |
| ---: | -------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 5.7% | 89.4 MiB |      43 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
| 0.1% |    2 MiB |       1 | `visitStatement(Statement)` | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                                    |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 87.6% | 1.31 GiB |     680 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  2.2% |   34 MiB |      19 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |
|  1.9% | 29.4 MiB |      15 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  1.6% | 24.8 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|  1.6% | 24.8 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.7% | 9.99 MiB |       5 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                       |
| ---: | -------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 5.5% | 76.9 MiB |      40 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 94.9% |  958 MiB |     483 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  2.4% |   24 MiB |      13 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  2.3% | 23.3 MiB |      12 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  0.4% |    4 MiB |       2 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |    Size | Samples | Callee                                                   | Location                           |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.7% | 779 MiB |     400 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.3% |   2 MiB |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  0.3% |   2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.BinaryExpression`)

|     % |     Size | Samples | Callee                                    | Location                                                            |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------------------------------------------- |
| 33.6% |  226 MiB |     109 | `visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                  |
| 31.1% |  209 MiB |     105 | `visitBinaryExpression(BinaryExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`                        |
|  5.7% | 38.4 MiB |      20 | `visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`        |
|  2.8% |   19 MiB |      10 | `visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor` |
|  2.7% |   18 MiB |       9 | `visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`            |

##### `visitBinaryExpression(BinaryExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|     % |     Size | Samples | Callee                     | Location                                        |
| ----: | -------: | ------: | -------------------------- | ----------------------------------------------- |
| 11.1% | 54.6 MiB |      28 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 482 MiB |     241 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 98.9% |  467 MiB |     234 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.1% | 5.39 MiB |       3 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee                                    | Location                                    |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 99.5% | 430 MiB |     215 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  0.5% |   2 MiB |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 93.5% | 399 MiB |     200 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  4.2% |  18 MiB |       9 | `toString()`     | `java.lang.StringBuilder`                   |
|  0.9% |   4 MiB |       2 | `append(String)` | `java.lang.StringBuilder`                   |
|  0.5% |   2 MiB |       1 | `<init>()`       | `java.lang.StringBuilder`                   |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 70.0% |  294 MiB |     144 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 28.7% |  121 MiB |      57 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  1.0% |    4 MiB |       2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |
|  0.3% | 1.32 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % |    Size | Samples | Callee                                         | Location                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% | 418 MiB |     203 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |  Size | Samples | Callee                            | Location                                                              |
| ---: | ----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.1% | 4 MiB |       2 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                        | Location                                            |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% | 316 MiB |     136 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801449800` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                            | Location                           |
| -----: | ------: | ------: | ------------------------------------------------- | ---------------------------------- |
| 100.0% | 316 MiB |     136 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 314 MiB |     135 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)

|     % |    Size | Samples | Callee                                   | Location                           |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 99.2% | 258 MiB |     107 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  2.3% |   6 MiB |       3 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 6.9% |  837 MiB |     425 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 6.0% |  729 MiB |     357 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.8% |  579 MiB |     295 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.5% |  545 MiB |     279 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.4% |  534 MiB |     269 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.2% |  511 MiB |     259 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.9% |  471 MiB |     242 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.8% |  461 MiB |     239 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.5% |  420 MiB |     219 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.7% |  321 MiB |     157 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.5% |  297 MiB |     144 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.1% |  252 MiB |     104 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801449800`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |  213 MiB |     110 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.4% |  164 MiB |      36 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.8% | 98.5 MiB |      48 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.7% | 84.6 MiB |      41 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 69.8 MiB |      37 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.5% | 63.3 MiB |      32 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008013c0800`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% |   60 MiB |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 51.9 MiB |      26 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `matches(String)` (`java.lang.String`) ← `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `isMethodCall(MethodCallExpression, String)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor$_visitMethodCallExpression_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Retained heap profile

Retained 9.88 KiB over 105 samples (96.4 B per sample).

| Category         |      % |     Size | Samples |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 9.88 KiB |     105 |

## Hottest functions

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                         | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 86.1% | 8.51 KiB |      80 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 56.7% |  5.6 KiB |      32 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 50.2% | 4.96 KiB |      21 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 48.2% | 4.77 KiB |      16 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
| 48.2% | 4.77 KiB |      16 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 48.2% | 4.77 KiB |      16 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 42.2% | 4.17 KiB |       4 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
| 26.5% | 2.62 KiB |      45 | `getMetaClass()`                                 | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| 16.0% | 1.58 KiB |      24 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801134800`                        |
| 16.0% | 1.58 KiB |      24 | `assertClassImplementsRuleInterface(Class)`      | `org.codenarc.ruleset.RuleSetUtil`                                         |
| 15.7% | 1.55 KiB |      23 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
| 15.3% | 1.52 KiB |      22 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 15.3% | 1.52 KiB |      22 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
| 11.5% | 1.13 KiB |      18 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 10.2% | 1.01 KiB |      14 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  8.5% |    856 B |      11 | `visitClass(ClassNode)`                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  8.1% |    816 B |      10 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  7.0% |    704 B |      12 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  6.3% |    640 B |       7 | `visitMethod(MethodNode)`                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  4.1% |    416 B |       7 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                    |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 98.3% | 4.88 KiB |      19 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  0.9% |     48 B |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.8% |     40 B |       1 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 4.77 KiB |      16 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 4.77 KiB |      16 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee   | Location                                    |
| -----: | -------: | ------: | -------- | ------------------------------------------- |
| 100.0% | 4.77 KiB |      16 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 4.17 KiB |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |     Size | Samples | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 1.58 KiB |      24 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.55 KiB |      23 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                               |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 66.5% | 1.01 KiB |      14 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                                 |
| 25.8% |    400 B |       6 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                             |
|  4.1% |     64 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                |
|  3.6% |     56 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                       |
| ----: | -------: | ------: | --------------------------- | ---------------------------------------------- |
| 96.9% | 1.47 KiB |      21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`     |
|  3.1% |     48 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.13 KiB |      18 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                    | Location                                             |
| ----: | ----: | ------: | ------------------------- | ---------------------------------------------------- |
| 82.9% | 856 B |      11 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`    |
| 17.1% | 176 B |       3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Callee                      | Location                                                          |
| ----: | ----: | ------: | --------------------------- | ----------------------------------------------------------------- |
| 78.4% | 640 B |       7 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                 |
|  8.8% |  72 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor` |
|  6.9% |  56 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`  |
|  5.9% |  48 B |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`              |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |  Size | Samples | Callee                                          | Location                                                        |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 18.8% | 120 B |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.size.MethodSizeAstVisitor`                   |
| 11.3% |  72 B |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % |  Size | Samples | Callee                                   | Location                           |
| ----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 92.3% | 384 B |       6 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  7.7% |  32 B |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.7% | 4.13 KiB |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 15.7% | 1.55 KiB |      23 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.7% |    480 B |      10 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% |    256 B |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.1% |    216 B |       3 | `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.7% |    176 B |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |    152 B |       1 | `implementsInterface(ClassNode)` (`org.codehaus.groovy.ast.ClassNode`) ← `classNodeImplementsType(ClassNode, Class)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMapEntryExpression(MapEntryExpression)` (`org.codenarc.rule.groovyism.GStringAsMapKeyAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                                                            |
|  1.2% |    120 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.size.MethodSizeAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                             |
|  1.2% |    120 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitThrowStatement(ThrowStatement)` (`org.codenarc.rule.exceptions.CommonThrowAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                            |
|  1.0% |    104 B |       1 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.0% |    104 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                                                                                                  |
|  0.9% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.9% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`) ← `<init>()` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`) ← `<init>()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`) ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                 |
|  0.7% |     72 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.EmptyCatchBlockAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.7% |     72 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                         |
|  0.7% |     72 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `checkForViolations(ASTNode)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
|  0.7% |     72 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `isIgnoredOneElementList(ListExpression)` (`org.codenarc.rule.convention.TrailingCommaAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitListExpression(ListExpression)` (`org.codenarc.rule.convention.TrailingCommaAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                             |
|  0.6% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(List)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
