# Sampling profile

Collected 367 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 97.5% |     358 |
| Ours             |  2.5% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                             | Location                                                        |
| ---: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 0.8% |       3 | `getClass()`                                         | `java.lang.Object`                                              |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object)`             | `java.lang.invoke.Invokers$Holder`                              |
| 0.3% |       1 | `visitClass(ClassNode)`                              | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
| 0.3% |       1 | `doCall(Object)`                                     | `org.codenarc.util.WildcardPattern$_closure1`                   |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                  |
| 0.3% |       1 | `visitPropertyExpression(PropertyExpression)`        | `org.codehaus.groovy.ast.CodeVisitorSupport`                    |
| 0.3% |       1 | `visitImports(ModuleNode)`                           | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`     |
| 0.3% |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)`    | `org.gmetrics.metric.abc.result.AbcMetricResult`                |
| 0.3% |       1 | `handleExpressionContainingOperation(Expression)`    | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| 0.3% |       1 | `visitMethod(MethodNode)`                            | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| 0.3% |       1 | `isMethodCallOnObject(Expression, String)`           | `org.codenarc.util.AstUtil`                                     |
| 0.3% |       1 | `isOdd(int)`                                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| 0.3% |       1 | `sourceLinesBetween(SourceCode, int, int, int, int)` | `org.codenarc.util.SourceCodeUtil`                              |

#### Categories

##### Ours

|    % | Samples | Function                                             | Location                                                        |
| ---: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 0.3% |       1 | `doCall(Object)`                                     | `org.codenarc.util.WildcardPattern$_closure1`                   |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                  |
| 0.3% |       1 | `visitImports(ModuleNode)`                           | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`     |
| 0.3% |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)`    | `org.gmetrics.metric.abc.result.AbcMetricResult`                |
| 0.3% |       1 | `handleExpressionContainingOperation(Expression)`    | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| 0.3% |       1 | `visitMethod(MethodNode)`                            | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| 0.3% |       1 | `isMethodCallOnObject(Expression, String)`           | `org.codenarc.util.AstUtil`                                     |
| 0.3% |       1 | `isOdd(int)`                                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| 0.3% |       1 | `sourceLinesBetween(SourceCode, int, int, int, int)` | `org.codenarc.util.SourceCodeUtil`                              |

##### Standard library

|    % | Samples | Function                                      | Location                                          |
| ---: | ------: | --------------------------------------------- | ------------------------------------------------- |
| 0.8% |       3 | `getClass()`                                  | `java.lang.Object`                                |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                |
| 0.3% |       1 | `visitClass(ClassNode)`                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| 0.3% |       1 | `visitPropertyExpression(PropertyExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`      |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:51` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_closure1`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.util.WildcardPattern$_closure1:55` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:340` |

##### `visitImports(ModuleNode)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor:47` |

##### `<init>(Metric, MetricLevel, AbcVector, Integer)` (`org.gmetrics.metric.abc.result.AbcMetricResult`)

|      % | Samples | Location                                            |
| -----: | ------: | --------------------------------------------------- |
| 100.0% |       1 | `org.gmetrics.metric.abc.result.AbcMetricResult:40` |

##### `handleExpressionContainingOperation(Expression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.gmetrics.metric.abc.AbcAstVisitor:141` |

##### `visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.gmetrics.metric.abc.AbcAstVisitor:47` |

##### `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `org.codenarc.util.AstUtil:273` |

##### `isOdd(int)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor:98` |

##### `sourceLinesBetween(SourceCode, int, int, int, int)` (`org.codenarc.util.SourceCodeUtil`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `org.codenarc.util.SourceCodeUtil:64` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `getClass()` (`java.lang.Object`)

|     % | Samples | Caller                  | Location                                                       |
| ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 33.3% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.groovyism.ExplicitCallToOrMethodAstVisitor` |
| 33.3% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.basic.RemoveAllOnSelfAstVisitor`            |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller           | Location                                                                          |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `doCall(Object)` | `org.codenarc.source.AbstractSourceCode$_getLineNumberForCharacterIndex_closure2` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Caller                       | Location                                  |
| -----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% |       1 | `getMethodCalls(ModuleNode)` | `org.codenarc.source.ExpressionCollector` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Caller                                                | Location                                                      |
| -----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `super$2$visitPropertyExpression(PropertyExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryDotClassAstVisitor` |

##### `visitImports(ModuleNode)` (`org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`)

|      % | Samples | Caller                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethod(MethodNode)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|      % | Samples | Caller                 | Location                                                 |
| -----: | ------: | ---------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `call(Object, Object)` | `org.codehaus.groovy.ast.GroovyClassVisitor$visitMethod` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                   |
| ----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 68.9% |     253 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 41.4% |     152 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                         |
| 29.7% |     109 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.3% |     104 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                           |
| 26.4% |      97 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 25.3% |      93 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 22.3% |      82 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
| 22.3% |      82 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 21.5% |      79 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 19.6% |      72 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 18.5% |      68 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 16.1% |      59 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                   |
| 16.1% |      59 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 15.8% |      58 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.7% |      54 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 14.4% |      53 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 14.4% |      53 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.2% |      52 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.8% |      47 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  9.5% |      35 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 29.7% |     109 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 28.3% |     104 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 25.3% |      93 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 22.3% |      82 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| 22.3% |      82 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 21.5% |      79 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 18.5% |      68 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 16.1% |      59 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| 16.1% |      59 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 14.7% |      54 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 14.4% |      53 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 12.8% |      47 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  5.2% |      19 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  3.3% |      12 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  2.2% |       8 | `applyVisitor(AstVisitor, SourceCode)`           | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
|  2.2% |       8 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |
|  1.6% |       6 | `checkDeclaration(ASTNode, String, String)`      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|  1.6% |       6 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|  1.6% |       6 | `visitBlockStatement(BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|  1.6% |       6 | `addViolationIfDuplicate(Expression, boolean)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |

##### Standard library

|     % | Samples | Function                                                         | Location                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| 68.9% |     253 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
| 41.4% |     152 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
| 26.4% |      97 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| 19.6% |      72 | `visitClass(ClassNode)`                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 15.8% |      58 | `visitMethod(MethodNode)`                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.4% |      53 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.2% |      52 | `visitBlockStatement(BlockStatement)`                            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  9.5% |      35 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  8.2% |      30 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  4.4% |      16 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.8% |      14 | `visitArgumentlistExpression(ArgumentListExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.5% |      13 | `visitBinaryExpression(BinaryExpression)`                        | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.3% |      12 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00` |
|  3.0% |      11 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00` |
|  2.7% |      10 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`          |
|  2.7% |      10 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  2.7% |      10 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  1.9% |       7 | `loadClass(String)`                                              | `java.lang.ClassLoader`                             |
|  1.9% |       7 | `<init>(Object, Object)`                                         | `groovy.lang.Closure`                               |
|  1.9% |       7 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 84.4% |      92 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 15.6% |      17 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                 |
| ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 80.8% |      84 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  7.7% |       8 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  2.9% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  1.9% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.ImportFromSamePackageRule`    |
|  1.9% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 79.6% |      74 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  6.5% |       6 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  5.4% |       5 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.3% |       4 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  1.1% |       1 | `getClasses()`          | `org.codehaus.groovy.ast.ModuleNode`                    |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 84.1% |      69 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| 12.2% |      10 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  3.7% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 85.4% |      70 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  4.9% |       4 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.2% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.2% |       1 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`    |
|  1.2% |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.groovyism.GetterMethodCouldBePropertyAstVisitor` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 65.8% |      52 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 15.2% |      12 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00` |
| 12.7% |      10 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  6.3% |       5 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000040138b000` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.4% |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |
| 1.4% |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 1.4% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                            | Location                                                                    |
| ----: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
| 83.8% |      57 | `visitMethod(MethodNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  4.4% |       3 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|  2.9% |       2 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor`                   |
|  1.5% |       1 | `visitMethodComplete(MethodNode)` | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor` |
|  1.5% |       1 | `visitMethodEx(MethodNode)`       | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`         |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      59 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 79.7% |      47 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 18.6% |      11 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                                    |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 87.9% |      51 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  5.2% |       3 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |
|  3.4% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  1.7% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|  1.7% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      54 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.1% |      52 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.9% |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      47 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Callee                                                   | Location                           |
| -----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 100.0% |      19 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      12 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|      % | Samples | Callee                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       8 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|      % | Samples | Callee                                 | Location                                         |
| -----: | ------: | -------------------------------------- | ------------------------------------------------ |
| 100.0% |       8 | `applyVisitor(AstVisitor, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |       6 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|     % | Samples | Callee                                            | Location                                                         |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------- |
| 33.3% |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`    |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`     |
| 16.7% |       1 | `getMethodCallExpressions()`                      | `org.codenarc.source.AbstractSourceCode`                         |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.RemoveAllOnSelfAstVisitor`              |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryCollectCallAstVisitor` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|     % | Samples | Callee                                                        | Location                                            |
| ----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 66.7% |       4 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| 50.0% |       3 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 50.0% |       3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 33.3% |       2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 16.7% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% |      25 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                  |
| 5.2% |      19 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.3% |      12 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                      |
| 3.0% |      11 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                     |
| 2.7% |      10 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                        |
| 2.7% |      10 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                |
| 2.5% |       9 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401392c00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) |
| 1.9% |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)                                                                                                                                                                                                                                                             |
| 1.6% |       6 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                              |
| 1.6% |       6 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)     |
| 1.6% |       6 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                          |
| 1.4% |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                      |
| 1.4% |       5 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000040138b000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)         |
| 1.1% |       4 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                      |
| 1.1% |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                              |
| 1.1% |       4 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                              |
| 0.8% |       3 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401392c00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                   |
| 0.5% |       2 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.5% |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000040112cc00`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                    |
| 0.5% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                             |

# Allocated heap profile

Allocated 11.9 GiB over 6,323 samples (1.93 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.1% | 11.8 GiB |   6,223 |
| Ours             |  0.9% |  106 MiB |      53 |
| Unknown          | <0.1% | 34.4 KiB |      47 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  0.6% | 68.5 MiB |      57 | `iterator()`                                                  | `java.util.ArrayList`                                                      |
|  0.2% | 25.9 MiB |      14 | `<init>()`                                                    | `java.util.HashSet`                                                        |
|  0.1% |   17 MiB |      13 | `toString()`                                                  | `java.lang.StringBuilder`                                                  |
|  0.1% |   14 MiB |       7 | `createRange(Object, Object, boolean, boolean)`               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  0.1% |   10 MiB |       5 | `isCase(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  0.1% |    8 MiB |       4 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  0.1% |    8 MiB |       3 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| <0.1% |    6 MiB |       3 | `record(Object, int)`                                         | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`                    |
| <0.1% |    6 MiB |       2 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| <0.1% |    6 MiB |       3 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% | 5.99 MiB |       3 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| <0.1% |    4 MiB |       2 | `addViolation(ASTNode, String)`                               | `org.codenarc.rule.AbstractAstVisitor`                                     |
| <0.1% |    4 MiB |       2 | `sourceLineAndNumberForNonStarImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                             |
| <0.1% |    4 MiB |       2 | `<init>(String, boolean)`                                     | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| <0.1% |    4 MiB |       2 | `filter(Predicate)`                                           | `java.util.stream.ReferencePipeline`                                       |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| <0.1% |    2 MiB |       1 | `<init>()`                                                    | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`      |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`          |
| <0.1% |    2 MiB |       1 | `visitBlockStatement(BlockStatement)`                         | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`            |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                        | Location                                                |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
|  0.6% | 68.5 MiB |      57 | `iterator()`                                    | `java.util.ArrayList`                                   |
|  0.2% | 25.9 MiB |      14 | `<init>()`                                      | `java.util.HashSet`                                     |
|  0.1% |   17 MiB |      13 | `toString()`                                    | `java.lang.StringBuilder`                               |
|  0.1% |   14 MiB |       7 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  0.1% |   10 MiB |       5 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    6 MiB |       3 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
| <0.1% |    4 MiB |       2 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                    |
| <0.1% |    2 MiB |       1 | `<init>()`                                      | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  0.1% |    8 MiB |       4 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  0.1% |    8 MiB |       3 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| <0.1% |    6 MiB |       2 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| <0.1% |    6 MiB |       3 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% | 5.99 MiB |       3 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| <0.1% |    4 MiB |       2 | `addViolation(ASTNode, String)`                               | `org.codenarc.rule.AbstractAstVisitor`                                     |
| <0.1% |    4 MiB |       2 | `sourceLineAndNumberForNonStarImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                             |
| <0.1% |    4 MiB |       2 | `<init>(String, boolean)`                                     | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| <0.1% |    2 MiB |       1 | `<init>()`                                                    | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`      |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`          |
| <0.1% |    2 MiB |       1 | `visitBlockStatement(BlockStatement)`                         | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`            |
| <0.1% |    2 MiB |       1 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                      |
| <0.1% |    2 MiB |       1 | `processParameters(Parameter[], String)`                      | `org.codenarc.rule.naming.ParameterNameAstVisitor`                         |
| <0.1% |    2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`                   |
| <0.1% |    2 MiB |       1 | `visitClosureExpression(ClosureExpression)`                   | `org.codenarc.rule.ClassReferenceAstVisitor`                               |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`             |
| <0.1% |    2 MiB |       1 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`    |
| <0.1% |    2 MiB |       1 | `removeAnyViolationsForSameLine(int)`                         | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`             |

#### Lines

Lines ranked by contribution to each function's self size.

##### `iterator()` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                   |
| -----: | -------: | ------: | -------------------------- |
| 100.0% | 68.5 MiB |      57 | `java.util.ArrayList:1029` |

##### `<init>()` (`java.util.HashSet`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 25.9 MiB |      14 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |   Size | Samples | Location                      |
| -----: | -----: | ------: | ----------------------------- |
| 100.0% | 17 MiB |      13 | `java.lang.StringBuilder:475` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |   Size | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 14 MiB |       7 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |   Size | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 10 MiB |       5 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 50.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:36` |
| 50.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |  Size | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 75.0% | 6 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |
| 25.0% | 2 MiB |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:39` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:36` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 6 MiB |       2 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|     % |  Size | Samples | Location                               |
| ----: | ----: | ------: | -------------------------------------- |
| 66.7% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern:75` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 5.99 MiB |       3 | `org.codenarc.rule.AbstractRule:141` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |  Size | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:107` |

##### `sourceLineAndNumberForNonStarImport(SourceCode, ImportNode)` (`org.codenarc.util.ImportUtil`)

|      % |  Size | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.ImportUtil:97` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|     % |  Size | Samples | Location                               |
| ----: | ----: | ------: | -------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.util.WildcardPattern:39` |
| 50.0% | 2 MiB |       1 | `org.codenarc.util.WildcardPattern:54` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `filter(Predicate)` (`java.util.stream.ReferencePipeline`)

|      % |  Size | Samples | Location                                 |
| -----: | ----: | ------: | ---------------------------------------- |
| 100.0% | 4 MiB |       2 | `java.util.stream.ReferencePipeline:166` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor:42` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`)

|      % |  Size | Samples | Location                                                            |
| -----: | ----: | ------: | ------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor:100` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.design.LocaleSetDefaultAstVisitor`)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor:41` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`)

|      % |  Size | Samples | Location                                                    |
| -----: | ----: | ------: | ----------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor:44` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % |  Size | Samples | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.ClassReferenceAstVisitor:118` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|      % |  Size | Samples | Location                                                          |
| -----: | ----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor:71` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`)

|      % |  Size | Samples | Location                                                                   |
| -----: | ----: | ------: | -------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor:50` |

##### `<init>()` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:29` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `iterator()` (`java.util.ArrayList`)

|    % |  Size | Samples | Caller                                              | Location                                      |
| ---: | ----: | ------: | --------------------------------------------------- | --------------------------------------------- |
| 2.9% | 2 MiB |       1 | `visitDeclarationExpression(DeclarationExpression)` | `org.codenarc.analyzer.SuppressionAnalyzer$1` |

##### `<init>()` (`java.util.HashSet`)

|     % |   Size | Samples | Caller     | Location                               |
| ----: | -----: | ------: | ---------- | -------------------------------------- |
| 46.4% | 12 MiB |       6 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                   | Location                                    |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 23.5% | 4 MiB |       2 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                                       | Location                                                     |
| ----: | ----: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 28.6% | 4 MiB |       2 | `isCollectMethodCall(Expression)`                            | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`     |
| 28.6% | 4 MiB |       2 | `endsWithSemicolon(String, int)`                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`     |
| 14.3% | 2 MiB |       1 | `checkAssignmentWithinDeclaration(BinaryExpression, String)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
| 14.3% | 2 MiB |       1 | `packageNameForImport(ImportNode)`                           | `org.codenarc.util.ImportUtil`                               |
| 14.3% | 2 MiB |       1 | `visitVariableExpression(VariableExpression)`                | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`     |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                                        |
| ----: | ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 40.0% | 4 MiB |       2 | `doCall(Object)`                              | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 20.0% | 2 MiB |       1 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`              |
| 20.0% | 2 MiB |       1 | `checkType(String, ASTNode)`                  | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |
| 20.0% | 2 MiB |       1 | `visitPropertyExpression(PropertyExpression)` | `org.codenarc.rule.FieldReferenceAstVisitor`                                    |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller     | Location                                                           |
| ----: | ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 25.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.naming.ParameterNameAstVisitor`                 |
| 25.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor`       |
| 25.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.formatting.SpaceAfterNotOperatorRuleAstVisitor` |
| 25.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`  |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|     % |  Size | Samples | Caller                                            | Location                                         |
| ----: | ----: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 33.3% | 2 MiB |       1 | `<init>(Metric, MetricLevel, Object, Integer)`    | `org.gmetrics.result.SingleNumberMetricResult`   |
| 33.3% | 2 MiB |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)` | `org.gmetrics.metric.abc.result.AbcMetricResult` |
| 33.3% | 2 MiB |       1 | `<init>(int, int, int)`                           | `org.gmetrics.metric.abc.AbcVector`              |

##### `filter(Predicate)` (`java.util.stream.ReferencePipeline`)

|     % |  Size | Samples | Caller                                 | Location                    |
| ----: | ----: | ------: | -------------------------------------- | --------------------------- |
| 50.0% | 2 MiB |       1 | `getAnnotation(AnnotatedNode, String)` | `org.codenarc.util.AstUtil` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 2 MiB |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>()` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Caller                                         | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `<init>(Metric, MetricLevel, Object, Integer)` | `org.gmetrics.result.SingleNumberMetricResult` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 64.2% | 7.65 GiB |   4,047 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.3% | 5.16 GiB |   2,660 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 37.1% | 4.42 GiB |   2,284 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.5% | 3.99 GiB |   2,049 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 30.3% | 3.61 GiB |   1,892 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.6% | 3.41 GiB |   1,753 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 26.0% |  3.1 GiB |   1,567 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 22.8% | 2.72 GiB |   1,431 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 21.4% | 2.55 GiB |   1,344 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.2% | 2.28 GiB |   1,187 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 16.8% |    2 GiB |   1,036 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.4% | 1.95 GiB |   1,002 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.6% | 1.74 GiB |     891 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.4% | 1.71 GiB |     876 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% | 1.62 GiB |     830 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.7% | 1.51 GiB |     730 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
| 12.7% | 1.51 GiB |     770 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  8.6% | 1.02 GiB |     527 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00`                        |
|  8.2% | 1002 MiB |     507 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  7.2% |  875 MiB |     425 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                      | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 64.2% | 7.65 GiB |   4,047 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 43.3% | 5.16 GiB |   2,660 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 26.0% |  3.1 GiB |   1,567 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 16.8% |    2 GiB |   1,036 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.6% | 1.74 GiB |     891 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.4% | 1.71 GiB |     876 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.6% | 1.62 GiB |     830 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.7% | 1.51 GiB |     730 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
| 12.7% | 1.51 GiB |     770 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  8.6% | 1.02 GiB |     527 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00` |
|  7.2% |  875 MiB |     425 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  5.7% |  693 MiB |     341 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000040138b000` |
|  4.4% |  532 MiB |     250 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.7% |  447 MiB |     219 | `matches(String)`                                             | `java.lang.String`                                  |
|  3.6% |  436 MiB |     213 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.1% |  379 MiB |     189 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  3.1% |  378 MiB |     187 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.7% |  331 MiB |     166 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  2.5% |  308 MiB |     128 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000401441c00` |
|  2.4% |  287 MiB |     140 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000004013bc400` |

##### Ours

|     % |     Size | Samples | Function                                          | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| 37.1% | 4.42 GiB |   2,284 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| 33.5% | 3.99 GiB |   2,049 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| 30.3% | 3.61 GiB |   1,892 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
| 28.6% | 3.41 GiB |   1,753 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
| 22.8% | 2.72 GiB |   1,431 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                               |
| 21.4% | 2.55 GiB |   1,344 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
| 19.2% | 2.28 GiB |   1,187 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                         |
| 16.4% | 1.95 GiB |   1,002 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  8.2% | 1002 MiB |     507 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                       |
|  7.1% |  864 MiB |     435 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
|  3.9% |  478 MiB |     238 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
|  3.8% |  461 MiB |     231 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                       |
|  3.6% |  442 MiB |     209 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  3.6% |  436 MiB |     206 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  3.3% |  408 MiB |     205 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  3.3% |  401 MiB |     199 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  2.8% |  338 MiB |     160 | `visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  2.4% |  298 MiB |     123 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                             |
|  2.4% |  298 MiB |     123 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                             |
|  2.4% |  294 MiB |     121 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 52.3% | 2.31 GiB |   1,201 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 23.1% | 1.02 GiB |     527 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00` |
| 15.3% |  693 MiB |     341 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000040138b000` |
|  9.3% |  419 MiB |     212 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% |    4 MiB |       2 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 82.6% | 3.29 GiB |   1,699 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.9% |  443 MiB |     216 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  6.3% |  258 MiB |     131 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |    Size | Samples | Callee                                   | Location                           |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 74.8% | 2.7 GiB |   1,415 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 25.1% | 928 MiB |     475 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.9% | 3.41 GiB |   1,751 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.1% |    4 MiB |       2 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 83.4% | 2.27 GiB |   1,197 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  4.8% |  133 MiB |      66 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  4.7% |  130 MiB |      64 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  2.3% | 63.4 MiB |      32 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  1.1% |   30 MiB |      15 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 82.6% | 2.11 GiB |   1,099 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 10.2% |  267 MiB |     131 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  3.6% | 94.6 MiB |      63 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.2% | 57.9 MiB |      31 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.2% |    6 MiB |       3 | `addAll(Collection)`    | `java.util.ArrayList`                                   |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 87.2% | 1.99 GiB |   1,030 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.7% |  133 MiB |      68 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.1% | 25.7 MiB |      14 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.9% | 21.4 MiB |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  0.8% | 18.7 MiB |      10 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                     | Location                                                    |
| ---: | -------: | ------: | -------------------------- | ----------------------------------------------------------- |
| 0.3% |    6 MiB |       3 | `visitImports(ModuleNode)` | `org.codenarc.rule.ClassReferenceAstVisitor`                |
| 0.3% | 5.33 MiB |       4 | `visitImports(ModuleNode)` | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor` |
| 0.1% |    2 MiB |       1 | `visitImports(ModuleNode)` | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`     |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 86.2% | 1.68 GiB |     861 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.0% |  121 MiB |      62 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.1% |   22 MiB |      10 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  0.8% | 15.3 MiB |       8 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`      |
|  0.6% |   12 MiB |       6 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                      | Location                                                       |
| ---: | ------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 5.8% | 103 MiB |      50 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                     |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 85.2% | 1.46 GiB |     748 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  2.6% | 45.2 MiB |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                 |
|  2.5% | 44.3 MiB |      23 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  2.0% | 34.6 MiB |      17 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`   |
|  1.9% | 33.2 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`     |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.0% | 16.6 MiB |       9 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                       |
| ---: | -------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 4.4% | 68.8 MiB |      35 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 96.6% |  968 MiB |     488 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  2.1% | 21.1 MiB |      11 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.0% | 10.1 MiB |       5 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.2% | 2.22 MiB |       2 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.1% |  547 KiB |       1 | `loadClass(String)`                                              | `java.lang.ClassLoader`            |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |    Size | Samples | Callee                                                   | Location                           |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.1% | 856 MiB |     431 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.5% |   4 MiB |       2 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder` |
|  0.5% |   4 MiB |       2 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 478 MiB |     238 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 461 MiB |     231 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 72.5% |  321 MiB |     159 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 25.5% |  113 MiB |      48 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  1.5% | 6.61 MiB |       1 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00` |
|  0.5% |    2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % |    Size | Samples | Callee                                         | Location                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% | 436 MiB |     206 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee                                    | Location                                    |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 99.5% | 406 MiB |     204 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  0.5% |   2 MiB |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 94.5% | 379 MiB |     190 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  2.0% |   8 MiB |       3 | `<init>()`       | `java.lang.StringBuilder`                   |
|  1.5% |   6 MiB |       3 | `toString()`     | `java.lang.StringBuilder`                   |
|  0.5% |   2 MiB |       1 | `append(String)` | `java.lang.StringBuilder`                   |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |  Size | Samples | Callee                            | Location                                                              |
| ---: | ----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.1% | 4 MiB |       2 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |     Size | Samples | Callee                                                        | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 88.2% |  298 MiB |     141 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 26.4% | 89.3 MiB |      34 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  2.4% |    8 MiB |       4 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                        | Location                                            |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% | 298 MiB |     123 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401441c00` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                            | Location                           |
| -----: | ------: | ------: | ------------------------------------------------- | ---------------------------------- |
| 100.0% | 298 MiB |     123 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 294 MiB |     121 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.1% |  864 MiB |     443 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.7% |  693 MiB |     341 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000040138b000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.8% |  581 MiB |     293 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.7% |  578 MiB |     291 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401392c00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.5% |  548 MiB |     279 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.1% |  506 MiB |     253 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.8% |  468 MiB |     239 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.8% |  467 MiB |     236 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401392c00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.4% |  419 MiB |     212 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.9% |  358 MiB |     178 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.4% |  296 MiB |     145 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.0% |  250 MiB |     126 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% |  166 MiB |      83 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401441c00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |  128 MiB |      26 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |   92 MiB |      46 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% | 91.4 MiB |      47 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.7% |   88 MiB |      19 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401441c00`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% | 85.3 MiB |      41 | `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000004013bc400`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.7% | 84.3 MiB |      43 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% |   72 MiB |      34 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# Retained heap profile

Retained 267 KiB over 118 objects (2.26 KiB per object).

| Category         |      % |    Size | Objects |
| ---------------- | -----: | ------: | ------: |
| Standard library | 100.0% | 267 KiB |     116 |
| Ours             |  <0.1% |    64 B |       2 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Size | Objects | Function                        | Location                               |
| ----: | ---: | ------: | ------------------------------- | -------------------------------------- |
| <0.1% | 64 B |       2 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Size | Objects | Location                                   |
| -----: | ---: | ------: | ------------------------------------------ |
| 100.0% | 64 B |       2 | `org.codenarc.rule.AbstractAstVisitor:107` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                                                 | Location                                                                   |
| ----: | -------: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 99.4% |  265 KiB |      91 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 96.1% |  257 KiB |      18 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
|  2.9% | 7.81 KiB |      65 | `getMetaClass()`                                         | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  1.4% | 3.68 KiB |      36 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                        |
|  1.4% | 3.68 KiB |      36 | `assertClassImplementsRuleInterface(Class)`              | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  1.4% | 3.64 KiB |      21 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  1.4% | 3.61 KiB |      20 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                           |
|  1.3% |  3.6 KiB |      35 | `doCall(Object)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  1.2% | 3.33 KiB |      16 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  1.1% | 2.84 KiB |      14 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
|  0.8% | 2.02 KiB |       1 | `getAstVisitor()`                                        | `org.codenarc.rule.convention.HashtableIsObsoleteRule`                     |
|  0.6% | 1.62 KiB |      31 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                         |
|  0.4% | 1.06 KiB |      10 | `newInstance()`                                          | `java.lang.Class`                                                          |
|  0.4% | 1.06 KiB |      10 | `getAstVisitor()`                                        | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  0.2% |    512 B |       5 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  0.2% |    480 B |       9 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  0.2% |    456 B |       1 | `$getStaticMetaClass()`                                  | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`                    |
|  0.2% |    456 B |       1 | `<init>()`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                    |
|  0.2% |    456 B |       1 | `<init>()`                                               | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`                    |
|  0.2% |    424 B |      11 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                   |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                      | Location                                                                   |
| ----: | -------: | ------: | --------------------------------------------- | -------------------------------------------------------------------------- |
| 96.1% |  257 KiB |      18 | `init()`                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  1.4% | 3.68 KiB |      36 | `assertClassImplementsRuleInterface(Class)`   | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  1.4% | 3.64 KiB |      21 | `applyTo(SourceCode, List)`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  1.4% | 3.61 KiB |      20 | `applyTo(SourceCode)`                         | `org.codenarc.rule.AbstractRule`                                           |
|  1.3% |  3.6 KiB |      35 | `doCall(Object)`                              | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  1.2% | 3.33 KiB |      16 | `doCall(Object)`                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  0.8% | 2.02 KiB |       1 | `getAstVisitor()`                             | `org.codenarc.rule.convention.HashtableIsObsoleteRule`                     |
|  0.4% | 1.06 KiB |      10 | `getAstVisitor()`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  0.2% |    480 B |       9 | `visitClass(ClassNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  0.2% |    456 B |       1 | `$getStaticMetaClass()`                       | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`                    |
|  0.2% |    456 B |       1 | `<init>()`                                    | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                    |
|  0.2% |    456 B |       1 | `<init>()`                                    | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`                    |
|  0.2% |    424 B |      11 | `getAst()`                                    | `org.codenarc.source.AbstractSourceCode`                                   |
|  0.1% |    392 B |      10 | `init()`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  0.1% |    392 B |      10 | `isRuleSuppressed(Rule)`                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  0.1% |    392 B |       7 | `addViolation(ASTNode, String)`               | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  0.1% |    368 B |       3 | `validateXml(String)`                         | `org.codenarc.ruleset.XmlReaderRuleSet`                                    |
|  0.1% |    344 B |       3 | `checkForCorrectColumn(ASTNode, String, int)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|  0.1% |    344 B |       3 | `checkForCorrectColumn(ASTNode, String)`      | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
|  0.1% |    328 B |       5 | `line(int)`                                   | `org.codenarc.source.AbstractSourceCode`                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Objects | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 257 KiB |      16 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  <0.1% |    40 B |       2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |     Size | Objects | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 3.68 KiB |      36 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Objects | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 55.4% | 2.02 KiB |       1 | `getAstVisitor()`       | `org.codenarc.rule.convention.HashtableIsObsoleteRule`  |
| 29.2% | 1.06 KiB |      10 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
| 12.9% |    480 B |       9 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  2.6% |     96 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |     Size | Objects | Callee                      | Location                                   |
| -----: | -------: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% | 3.61 KiB |      20 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|      % |    Size | Objects | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 3.6 KiB |      35 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Objects | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 3.33 KiB |      16 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.convention.HashtableIsObsoleteRule`)

|      % |     Size | Objects | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.02 KiB |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |     Size | Objects | Callee          | Location          |
| -----: | -------: | ------: | --------------- | ----------------- |
| 100.0% | 1.06 KiB |      10 | `newInstance()` | `java.lang.Class` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Objects | Callee                    | Location                                             |
| ----: | ----: | ------: | ------------------------- | ---------------------------------------------------- |
| 65.0% | 312 B |       5 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`    |
| 28.3% | 136 B |       3 | `visitClassEx(ClassNode)` | `org.codenarc.rule.convention.CompileStaticlVisitor` |
|  6.7% |  32 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.basic.EmptyClassAstVisitor`       |

##### `$getStaticMetaClass()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`)

|      % |  Size | Objects | Callee           | Location                                   |
| -----: | ----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 456 B |       1 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `<init>()` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`)

|      % |  Size | Objects | Callee                  | Location                                                |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 100.0% | 456 B |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor` |

##### `<init>()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`)

|      % |  Size | Objects | Callee     | Location                                                |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------- |
| 100.0% | 456 B |       1 | `<init>()` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |  Size | Objects | Callee                           | Location                           |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 424 B |      11 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Objects | Callee     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 392 B |      10 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Objects | Callee   | Location                                    |
| -----: | ----: | ------: | -------- | ------------------------------------------- |
| 100.0% | 392 B |      10 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Objects | Callee                       | Location                               |
| ----: | ----: | ------: | ---------------------------- | -------------------------------------- |
| 83.7% | 328 B |       5 | `sourceLineTrimmed(ASTNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|      % |  Size | Objects | Callee                                   | Location                           |
| -----: | ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 368 B |       3 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % |  Size | Objects | Callee                                           | Location                           |
| -----: | ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 344 B |       3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % |  Size | Objects | Callee                                                   | Location                           |
| -----: | ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 100.0% | 344 B |       3 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|      % |  Size | Objects | Callee                           | Location                           |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 328 B |       5 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 95.9% |  256 KiB |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.3% |  3.6 KiB |      35 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000040112cc00`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% | 2.02 KiB |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAstVisitor()` (`org.codenarc.rule.convention.HashtableIsObsoleteRule`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |    456 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`) ← `<init>()` (`org.codenarc.rule.size.AbstractMethodMetricAstVisitor`) ← `<init>()` (`org.codenarc.rule.size.CyclomaticComplexityAstVisitor`) ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                               |
|  0.1% |    352 B |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |    272 B |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `validateXml(String)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |    264 B |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |    192 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `<init>()` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `createSourceAnalyzer()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |    176 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |    176 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |    168 B |       4 | `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |    136 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(List)` (`org.codenarc.ruleset.ListRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `buildRuleSet()` (`org.codenarc.CodeNarcRunner`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |    136 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |    120 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `lastButOneCodeLine(ASTNode)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForViolations(ASTNode)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) |
| <0.1% |    112 B |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                                                                                                                |
| <0.1% |    112 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object, Object)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor$_afterBlock_closure2`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `afterBlock()` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |     96 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                        |
| <0.1% |     96 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.naming.InterfaceNameSameAsSuperInterfaceAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |     88 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
