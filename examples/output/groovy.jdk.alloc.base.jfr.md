# Profile

Collected 300 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 97.0% |     291 |
| Ours             |  3.0% |       9 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                        | Location                                                          |
| ---: | ------: | ----------------------------------------------- | ----------------------------------------------------------------- |
| 0.3% |       1 | `getAstVisitor()`                               | `org.codenarc.rule.AbstractAstVisitorRule`                        |
| 0.3% |       1 | `visitMethodEx(MethodNode)`                     | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`    |
| 0.3% |       1 | `getMetaClass()`                                | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`          |
| 0.3% |       1 | `visitClosureExpression(ClosureExpression)`     | `org.codenarc.rule.formatting.IndentationAstVisitor`              |
| 0.3% |       1 | `lastSourceLine(ASTNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                            |
| 0.3% |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| 0.3% |       1 | `<init>()`                                      | `org.gmetrics.metric.AbstractMethodMetric`                        |
| 0.3% |       1 | `getClass()`                                    | `java.lang.Object`                                                |
| 0.3% |       1 | `getSuppressionsByLineNumber(ModuleNode)`       | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| 0.3% |       1 | `setSourceCode(SourceCode)`                     | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor` |

#### Categories

##### Ours

|    % | Samples | Function                                        | Location                                                          |
| ---: | ------: | ----------------------------------------------- | ----------------------------------------------------------------- |
| 0.3% |       1 | `getAstVisitor()`                               | `org.codenarc.rule.AbstractAstVisitorRule`                        |
| 0.3% |       1 | `visitMethodEx(MethodNode)`                     | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`    |
| 0.3% |       1 | `getMetaClass()`                                | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`          |
| 0.3% |       1 | `visitClosureExpression(ClosureExpression)`     | `org.codenarc.rule.formatting.IndentationAstVisitor`              |
| 0.3% |       1 | `lastSourceLine(ASTNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                            |
| 0.3% |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| 0.3% |       1 | `<init>()`                                      | `org.gmetrics.metric.AbstractMethodMetric`                        |
| 0.3% |       1 | `getSuppressionsByLineNumber(ModuleNode)`       | `org.codenarc.analyzer.SuppressionAnalyzer`                       |
| 0.3% |       1 | `setSourceCode(SourceCode)`                     | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor` |

##### Standard library

|    % | Samples | Function     | Location           |
| ---: | ------: | ------------ | ------------------ |
| 0.3% |       1 | `getClass()` | `java.lang.Object` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitorRule:81` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor:69` |

##### `visitClosureExpression(ClosureExpression)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % | Samples | Location                                                 |
| -----: | ------: | -------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:178` |

##### `lastSourceLine(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:81` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:238` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:143` |

##### `setSourceCode(SourceCode)` (`org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor:50` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|      % | Samples | Caller                    | Location                               |
| -----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getSuppressWarningsAnnotations(AnnotatedNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller                                  | Location                                    |
| -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `getSuppressedRuleNames(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `<init>()` (`org.gmetrics.metric.AbstractMethodMetric`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       1 | `<init>()` | `org.gmetrics.metric.abc.AbcMetric` |

##### `getClass()` (`java.lang.Object`)

|      % | Samples | Caller                  | Location                                                    |
| -----: | ------: | ----------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.exceptions.ExceptionNotThrownAstVisitor` |

##### `getSuppressionsByLineNumber(ModuleNode)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Caller   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |       1 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `setSourceCode(SourceCode)` (`org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                   |
| ----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 72.7% |     218 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 36.7% |     110 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                         |
| 28.3% |      85 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 25.0% |      75 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 23.3% |      70 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                           |
| 22.3% |      67 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 22.0% |      66 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
| 21.3% |      64 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 18.0% |      54 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.7% |      53 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 17.0% |      51 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 14.0% |      42 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                   |
| 13.7% |      41 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 13.3% |      40 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.0% |      39 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 13.0% |      39 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 11.0% |      33 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  9.7% |      29 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  9.0% |      27 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  6.7% |      20 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 28.3% |      85 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 25.0% |      75 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 23.3% |      70 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 22.0% |      66 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| 21.3% |      64 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 18.0% |      54 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 17.7% |      53 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 17.0% |      51 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 14.0% |      42 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| 13.7% |      41 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 13.0% |      39 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 13.0% |      39 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  4.7% |      14 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  3.7% |      11 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  2.0% |       6 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  2.0% |       6 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|  1.7% |       5 | `doCall(Object)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`          |
|  1.7% |       5 | `doCall(Object, Object)`                         | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`   |
|  1.3% |       4 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
|  1.3% |       4 | `visitBlockStatement(BlockStatement)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |

##### Standard library

|     % | Samples | Function                                                         | Location                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| 72.7% |     218 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
| 36.7% |     110 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
| 22.3% |      67 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| 13.3% |      40 | `visitClass(ClassNode)`                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 11.0% |      33 | `visitMethod(MethodNode)`                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  9.7% |      29 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  9.0% |      27 | `visitBlockStatement(BlockStatement)`                            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  6.7% |      20 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  5.0% |      15 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000e801134800` |
|  4.7% |      14 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  3.3% |      10 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.7% |       8 | `visitBinaryExpression(BinaryExpression)`                        | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.3% |       7 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`          |
|  2.0% |       6 | `loadClass(String)`                                              | `java.lang.ClassLoader`                             |
|  1.7% |       5 | `newInstance()`                                                  | `java.lang.Class`                                   |
|  1.3% |       4 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000e80144e000` |
|  1.0% |       3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.0% |       3 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                  |
|  1.0% |       3 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000e801390400` |
|  0.7% |       2 | `<init>(Object, Object)`                                         | `groovy.lang.Closure`                               |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 75.3% |      64 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 24.7% |      21 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 73.3% |      55 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 20.0% |      15 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  4.0% |       3 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801390400` |
|  2.7% |       2 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000e801394000` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                |
| ----: | ------: | --------------------------- | ------------------------------------------------------- |
| 85.7% |      60 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.3% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`          |
|  2.9% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`        |
|  1.4% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.MisorderedStaticImportsRule` |
|  1.4% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.imports.UnusedImportRule`            |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 95.5% |      63 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  3.0% |       2 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.5% |       1 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                      | Location                                                          |
| ----: | ------: | --------------------------- | ----------------------------------------------------------------- |
| 76.6% |      49 | `visitClass(ClassNode)`     | `org.codenarc.rule.AbstractAstVisitor`                            |
|  9.4% |       6 | `getAstVisitor()`           | `org.codenarc.rule.AbstractAstVisitorRule`                        |
|  9.4% |       6 | `visitClass(ClassNode)`     | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`           |
|  3.1% |       2 | `visitClass(ClassNode)`     | `org.codenarc.rule.AbstractMethodVisitor`                         |
|  1.6% |       1 | `setSourceCode(SourceCode)` | `org.codenarc.rule.convention.ImplicitClosureParameterAstVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                        |
| ----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 74.1% |      40 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  5.6% |       3 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
|  3.7% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`        |
|  3.7% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor` |
|  3.7% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`         |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                                                   |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 75.5% |      40 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
| 11.3% |       6 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
|  9.4% |       5 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
|  1.9% |       1 | `<init>(Object)`                                 | `groovy.lang.Reference`                                                    |
|  1.9% |       1 | `<init>(Object, Object)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure4` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |      51 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      42 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                                    | Location                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 95.1% |      39 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`    |
|  2.4% |       1 | `getSuppressedRuleNames(AnnotatedNode)`   | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  2.4% |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.5% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      39 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                            |
| ----: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 82.1% |      32 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.1% |       2 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`      |
|  5.1% |       2 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |
|  2.6% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  2.6% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                        |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 78.8% |      26 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  6.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`        |
|  6.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                    |
|  3.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |
|  3.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`    |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 92.9% |      13 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  7.1% |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      11 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee          | Location          |
| ----: | ------: | --------------- | ----------------- |
| 83.3% |       5 | `newInstance()` | `java.lang.Class` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|     % | Samples | Callee                                            | Location                                                                                 |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 33.3% |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ClosureAsLastMethodParameterAstVisitor`                     |
| 33.3% |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                             |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryCollectionCallAstVisitor`                      |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryParenthesesForMethodCallWithClosureAstVisitor` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 80.0% |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 20.0% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object, Object)` (`org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 80.0% |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 20.0% |       1 | `linkToCallSite(Object, int, Object)`    | `java.lang.invoke.Invokers$Holder` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitBlockStatement(BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|     % | Samples | Callee                                                        | Location                                            |
| ----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 50.0% |       2 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| 50.0% |       2 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 25.0% |       1 | `linkToCallSite(int, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.0% |      27 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 7.3% |      22 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 7.0% |      21 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.0% |      15 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.7% |      14 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.0% |       6 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.0% |       6 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |       3 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |       3 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |       3 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e80144e000`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |       2 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |       2 | `loadClass(String)` (`java.lang.ClassLoader`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRuleElements(Node)` (`org.codenarc.ruleset.XmlReaderRuleSet`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |       2 | `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassComplete(ClassNode)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                             |
| 0.7% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.BracesForMethodAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) |
| 0.7% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Allocated heap profile

Allocated 12 GiB over 6,288 samples (1.96 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.4% |   12 GiB |   6,195 |
| Ours             |  0.6% | 76.5 MiB |      39 |
| Unknown          | <0.1% | 35.8 KiB |      54 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                                         | Location                                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  0.8% |  104 MiB |      67 | `iterator()`                                                     | `java.util.ArrayList`                                                      |
|  0.6% |   77 MiB |      39 | `matcher(CharSequence)`                                          | `java.util.regex.Pattern`                                                  |
|  0.1% | 14.9 MiB |       8 | `<init>()`                                                       | `java.util.HashSet`                                                        |
|  0.1% | 12.3 MiB |       7 | `toString()`                                                     | `java.lang.StringBuilder`                                                  |
|  0.1% | 11.4 MiB |       6 | `valueOf(int)`                                                   | `java.lang.Integer`                                                        |
|  0.1% |   10 MiB |       5 | `isCase(Object, Object)`                                         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
|  0.1% | 9.99 MiB |       4 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  0.1% |    8 MiB |       4 | `matches(String)`                                                | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% | 5.26 MiB |       3 | `<init>(String, boolean)`                                        | `org.codenarc.util.WildcardPattern`                                        |
| <0.1% |    4 MiB |       2 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                       |
| <0.1% |    4 MiB |       2 | `<init>()`                                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| <0.1% |    4 MiB |       2 | `shouldApplyThisRuleTo(SourceCode)`                              | `org.codenarc.rule.AbstractRule`                                           |
| <0.1% |    4 MiB |       2 | `createRange(Object, Object, boolean, boolean)`                  | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| <0.1% |    4 MiB |       2 | `applyTo(SourceCode)`                                            | `org.codenarc.rule.AbstractRule`                                           |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| <0.1% |    2 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                 |
| <0.1% |    2 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                   |
| <0.1% |    2 MiB |       1 | `getText()`                                                      | `org.codehaus.groovy.ast.expr.PropertyExpression`                          |
| <0.1% |    2 MiB |       1 | `isViolationSuppressed(Violation)`                               | `org.codenarc.analyzer.SuppressionAnalyzer`                                |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                        | Location                                            |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
|  0.8% |  104 MiB |      67 | `iterator()`                                    | `java.util.ArrayList`                               |
|  0.6% |   77 MiB |      39 | `matcher(CharSequence)`                         | `java.util.regex.Pattern`                           |
|  0.1% | 14.9 MiB |       8 | `<init>()`                                      | `java.util.HashSet`                                 |
|  0.1% | 12.3 MiB |       7 | `toString()`                                    | `java.lang.StringBuilder`                           |
|  0.1% | 11.4 MiB |       6 | `valueOf(int)`                                  | `java.lang.Integer`                                 |
|  0.1% |   10 MiB |       5 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| <0.1% |    4 MiB |       2 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| <0.1% |    2 MiB |       1 | `getText()`                                     | `org.codehaus.groovy.ast.expr.PropertyExpression`   |

##### Ours

|     % |     Size | Samples | Function                                                         | Location                                                                       |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  0.1% | 9.99 MiB |       4 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|  0.1% |    8 MiB |       4 | `matches(String)`                                                | `org.codenarc.util.WildcardPattern`                                            |
| <0.1% | 5.26 MiB |       3 | `<init>(String, boolean)`                                        | `org.codenarc.util.WildcardPattern`                                            |
| <0.1% |    4 MiB |       2 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
| <0.1% |    4 MiB |       2 | `<init>()`                                                       | `org.codenarc.rule.AbstractAstVisitor`                                         |
| <0.1% |    4 MiB |       2 | `shouldApplyThisRuleTo(SourceCode)`                              | `org.codenarc.rule.AbstractRule`                                               |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
| <0.1% |    4 MiB |       2 | `applyTo(SourceCode)`                                            | `org.codenarc.rule.AbstractRule`                                               |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
| <0.1% |    2 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                     |
| <0.1% |    2 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                       |
| <0.1% |    2 MiB |       1 | `isViolationSuppressed(Violation)`                               | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
| <0.1% |    2 MiB |       1 | `writeViolation(Writer, Violation, String)`                      | `org.codenarc.report.TextReportWriter`                                         |
| <0.1% |    2 MiB |       1 | `methodReturnsCollection(MethodNode)`                            | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`   |
| <0.1% |    2 MiB |       1 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor` |
| <0.1% |    2 MiB |       1 | `addViolationIfDoubleQuoted(ConstantExpression)`                 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                   |
| <0.1% |    2 MiB |       1 | `visitDeclarationExpression(DeclarationExpression)`              | `org.codenarc.rule.convention.NoDefAstVisitor`                                 |
| <0.1% |    2 MiB |       1 | `visitStatement(Statement)`                                      | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor`                |
| <0.1% |    2 MiB |       1 | `visitField(FieldNode)`                                          | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor`                      |
| <0.1% |    2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`                        | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`            |

#### Lines

Lines ranked by contribution to each function's self size.

##### `iterator()` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                   |
| -----: | ------: | ------: | -------------------------- |
| 100.0% | 104 MiB |      67 | `java.util.ArrayList:1029` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|      % |   Size | Samples | Location                       |
| -----: | -----: | ------: | ------------------------------ |
| 100.0% | 77 MiB |      39 | `java.util.regex.Pattern:1180` |

##### `<init>()` (`java.util.HashSet`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 14.9 MiB |       8 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 12.3 MiB |       7 | `java.lang.StringBuilder:475` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 11.4 MiB |       6 | `java.lang.Integer:1083` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |   Size | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 10 MiB |       5 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 9.99 MiB |       4 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|     % |  Size | Samples | Location                               |
| ----: | ----: | ------: | -------------------------------------- |
| 75.0% | 6 MiB |       3 | `org.codenarc.util.WildcardPattern:75` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|     % |     Size | Samples | Location                               |
| ----: | -------: | ------: | -------------------------------------- |
| 76.0% |    4 MiB |       2 | `org.codenarc.util.WildcardPattern:54` |
| 24.0% | 1.26 MiB |       1 | `org.codenarc.util.WildcardPattern:53` |

##### `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|     % |  Size | Samples | Location                                                 |
| ----: | ----: | ------: | -------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:380` |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:375` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |  Size | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:36` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractRule:253` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractRule:141` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor:60` |

##### `getText()` (`org.codehaus.groovy.ast.expr.PropertyExpression`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.ast.expr.PropertyExpression:84` |

##### `isViolationSuppressed(Violation)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.analyzer.SuppressionAnalyzer:83` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|      % |  Size | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:92` |

##### `methodReturnsCollection(MethodNode)` (`org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor`)

|      % |  Size | Samples | Location                                                                        |
| -----: | ----: | ------: | ------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor:86` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % |  Size | Samples | Location                                                                          |
| -----: | ----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor:46` |

##### `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|      % |  Size | Samples | Location                                                        |
| -----: | ----: | ------: | --------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:54` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codenarc.rule.convention.NoDefAstVisitor`)

|      % |  Size | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.NoDefAstVisitor:75` |

##### `visitStatement(Statement)` (`org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor`)

|      % |  Size | Samples | Location                                                           |
| -----: | ----: | ------: | ------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor:71` |

##### `visitField(FieldNode)` (`org.codenarc.rule.design.ImplementationAsTypeAstVisitor`)

|      % |  Size | Samples | Location                                                      |
| -----: | ----: | ------: | ------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor:129` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`)

|      % |  Size | Samples | Location                                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor:53` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `iterator()` (`java.util.ArrayList`)

|    % |  Size | Samples | Caller                  | Location                                 |
| ---: | ----: | ------: | ----------------------- | ---------------------------------------- |
| 3.9% | 4 MiB |       2 | `addAll(Collection)`    | `java.util.AbstractCollection`           |
| 1.9% | 2 MiB |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor` |

##### `matcher(CharSequence)` (`java.util.regex.Pattern`)

|    % |  Size | Samples | Caller                                                  | Location                    |
| ---: | ----: | ------: | ------------------------------------------------------- | --------------------------- |
| 2.6% | 2 MiB |       1 | `findClassDeclarationLineNumber(ClassNode, SourceCode)` | `org.codenarc.util.AstUtil` |

##### `<init>()` (`java.util.HashSet`)

|     % |  Size | Samples | Caller     | Location                               |
| ----: | ----: | ------: | ---------- | -------------------------------------- |
| 26.8% | 4 MiB |       2 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `toString()` (`java.lang.StringBuilder`)

|     % |  Size | Samples | Caller                   | Location                                    |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------- |
| 32.6% | 4 MiB |       2 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `valueOf(int)` (`java.lang.Integer`)

|     % |  Size | Samples | Caller                      | Location                                                 |
| ----: | ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 17.5% | 2 MiB |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                                        |
| ----: | ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 40.0% | 4 MiB |       2 | `doCall(Object)`                              | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 20.0% | 2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`     | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`          |
| 20.0% | 2 MiB |       1 | `doCall(Object)`                              | `org.codenarc.rule.imports.UnnecessaryGroovyImportRule$_applyTo_closure1`       |
| 20.0% | 2 MiB |       1 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`              |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller     | Location                                                             |
| ----: | ----: | ------: | ---------- | -------------------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.EmptyWhileStatementAstVisitor`              |
| 50.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 4 MiB |       2 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                 |
| ----: | ----: | ------: | --------------------------------------------- | -------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `visitVariableExpression(VariableExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor` |
| 50.0% | 2 MiB |       1 | `endsWithSemicolon(String, int)`              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 2 MiB |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                                          |
| -----: | ----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                                          |
| -----: | ----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `getText()` (`org.codehaus.groovy.ast.expr.PropertyExpression`)

|      % |  Size | Samples | Caller                                     | Location                    |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------- |
| 100.0% | 2 MiB |       1 | `isMethodCallOnObject(Expression, String)` | `org.codenarc.util.AstUtil` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % |  Size | Samples | Caller                  | Location                               |
| -----: | ----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitStatement(Statement)` (`org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor`)

|      % |  Size | Samples | Caller                                | Location                                          |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                 | Location                                                                    |
| ----: | -------: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 65.0% | 7.83 GiB |   4,012 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| 43.5% | 5.23 GiB |   2,671 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| 37.3% | 4.49 GiB |   2,301 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 33.9% | 4.08 GiB |   2,068 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 29.3% | 3.53 GiB |   1,846 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 28.0% | 3.37 GiB |   1,715 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 27.0% | 3.25 GiB |   1,584 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| 22.3% | 2.69 GiB |   1,417 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
| 21.3% | 2.57 GiB |   1,347 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 19.1% | 2.29 GiB |   1,190 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 17.0% | 2.05 GiB |   1,058 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 16.5% | 1.98 GiB |   1,025 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 14.4% | 1.74 GiB |     889 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 14.0% | 1.69 GiB |     868 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 13.7% | 1.65 GiB |     846 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 12.8% | 1.54 GiB |     784 | `visitExpressionStatement(ExpressionStatement)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 10.9% | 1.31 GiB |     678 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  9.9% |  1.2 GiB |     601 | `linkToCallSite(Object, Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801394000`                         |
|  8.3% | 1020 MiB |     522 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                    |
|  6.6% |  808 MiB |     405 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                      | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 65.0% | 7.83 GiB |   4,012 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 43.5% | 5.23 GiB |   2,671 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 27.0% | 3.25 GiB |   1,584 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 17.0% | 2.05 GiB |   1,058 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.4% | 1.74 GiB |     889 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.0% | 1.69 GiB |     868 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.7% | 1.65 GiB |     846 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.8% | 1.54 GiB |     784 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 10.9% | 1.31 GiB |     678 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|  9.9% |  1.2 GiB |     601 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000e801394000` |
|  6.2% |  768 MiB |     387 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  4.9% |  602 MiB |     302 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000e801390400` |
|  4.2% |  521 MiB |     250 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  4.1% |  508 MiB |     261 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.6% |  448 MiB |     224 | `matches(String)`                                             | `java.lang.String`                                  |
|  3.5% |  430 MiB |     203 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.4% |  419 MiB |     139 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000e80144e000` |
|  3.3% |  407 MiB |     206 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  2.9% |  363 MiB |     182 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  2.6% |  324 MiB |     157 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e8013c0800` |

##### Ours

|     % |     Size | Samples | Function                                          | Location                                                                            |
| ----: | -------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 37.3% | 4.49 GiB |   2,301 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| 33.9% | 4.08 GiB |   2,068 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| 29.3% | 3.53 GiB |   1,846 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
| 28.0% | 3.37 GiB |   1,715 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
| 22.3% | 2.69 GiB |   1,417 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                    |
| 21.3% | 2.57 GiB |   1,347 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
| 19.1% | 2.29 GiB |   1,190 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                              |
| 16.5% | 1.98 GiB |   1,025 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                              |
|  8.3% | 1020 MiB |     522 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                            |
|  6.6% |  808 MiB |     405 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`         |
|  3.9% |  484 MiB |     247 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                            |
|  3.9% |  484 MiB |     230 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`          |
|  3.5% |  437 MiB |     223 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|  3.4% |  417 MiB |     213 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|  3.3% |  408 MiB |     196 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|  3.3% |  406 MiB |     132 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                  |
|  3.3% |  406 MiB |     132 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                                  |
|  3.2% |  400 MiB |     193 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|  3.2% |  398 MiB |     128 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|  2.7% |  330 MiB |      94 | `doCall(Object)`                                  | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 50.5% | 2.27 GiB |   1,171 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 26.7% |  1.2 GiB |     601 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000e801394000` |
| 13.1% |  602 MiB |     302 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000e801390400` |
|  9.6% |  441 MiB |     225 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |    2 MiB |       1 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.0% | 3.39 GiB |   1,724 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.9% |  454 MiB |     215 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  5.9% |  247 MiB |     125 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 74.4% | 2.62 GiB |   1,379 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 25.5% |  922 MiB |     465 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % |     Size | Samples | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 3.37 GiB |   1,714 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  <0.1% |  746 KiB |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 84.6% | 2.27 GiB |   1,198 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  4.6% |  126 MiB |      63 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  4.1% |  112 MiB |      61 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  1.8% | 49.4 MiB |      24 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
|  0.8% | 23.2 MiB |      13 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 83.9% | 2.15 GiB |   1,114 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  9.9% |  261 MiB |     131 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.8% | 74.9 MiB |      39 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  2.3% | 59.3 MiB |      47 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  0.2% |    6 MiB |       3 | `addAll(Collection)`    | `java.util.ArrayList`                                   |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 87.8% | 2.01 GiB |   1,039 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.1% |  119 MiB |      62 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  0.9% | 20.3 MiB |      11 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |
|  0.9% | 20.1 MiB |      11 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.7% | 16.7 MiB |      10 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                            | Location                                                |
| ---: | ------: | ------: | --------------------------------- | ------------------------------------------------------- |
| 0.5% |  10 MiB |       5 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`            |
| 0.2% |   4 MiB |       2 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.1% | 1.4 MiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 83.9% | 1.66 GiB |     858 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.8% |  117 MiB |      59 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.7% |   34 MiB |      17 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  1.1% | 21.3 MiB |      12 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`     |
|  1.0% |   20 MiB |      10 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`     |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                      | Location                                                        |
| ---: | -------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 4.9% | 86.4 MiB |      43 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
| 0.1% |    2 MiB |       1 | `visitStatement(Statement)` | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                                    |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 87.7% | 1.48 GiB |     761 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  2.8% | 48.3 MiB |      23 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  1.7% |   29 MiB |      15 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  1.7% | 28.8 MiB |      15 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|  1.4% |   24 MiB |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`           |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.1% |   36 MiB |      18 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.8% | 12.8 MiB |       7 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                      | Location                                                       |
| ---: | ------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 6.9% | 108 MiB |      54 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 96.2% |  981 MiB |     503 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  1.9% | 18.9 MiB |      10 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.8% | 17.9 MiB |       8 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  0.2% |    2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |    Size | Samples | Callee                                                   | Location                           |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.3% | 802 MiB |     402 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.5% |   4 MiB |       2 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 484 MiB |     247 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % |    Size | Samples | Callee                                   | Location                                            |
| ----: | ------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 98.9% | 479 MiB |     227 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.1% | 5.5 MiB |       3 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801134800` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee                                    | Location                                       |
| ----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------- |
| 99.1% | 433 MiB |     221 | `getAst()`                                | `org.codenarc.source.AbstractSourceCode`       |
|  0.5% |   2 MiB |       1 | `addAll(Collection)`                      | `java.util.Collections$SynchronizedCollection` |
|  0.5% |   2 MiB |       1 | `getSuppressionsByLineNumber(ModuleNode)` | `org.codenarc.analyzer.SuppressionAnalyzer`    |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |     Size | Samples | Callee           | Location                                    |
| ----: | -------: | ------: | ---------------- | ------------------------------------------- |
| 95.0% |  396 MiB |     202 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  1.9% |    8 MiB |       4 | `<init>()`       | `java.lang.StringBuilder`                   |
|  1.7% | 7.02 MiB |       4 | `toString()`     | `java.lang.StringBuilder`                   |
|  1.4% |    6 MiB |       3 | `append(String)` | `java.lang.StringBuilder`                   |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 77.1% |  315 MiB |     148 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 21.9% | 89.3 MiB |      46 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |    2 MiB |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000e801134800` |
|  0.5% |    2 MiB |       1 | `compareEqual(Object, Object)`           | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |  Size | Samples | Callee                            | Location                                                              |
| ---: | ----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.0% | 8 MiB |       4 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                        | Location                                            |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% | 406 MiB |     132 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e80144e000` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                            | Location                           |
| -----: | ------: | ------: | ------------------------------------------------- | ---------------------------------- |
| 100.0% | 406 MiB |     132 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % |    Size | Samples | Callee                                         | Location                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% | 400 MiB |     193 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 398 MiB |     128 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 330 MiB |      94 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|   0.6% |   2 MiB |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.9% |  855 MiB |     429 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.3% |  656 MiB |     328 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.9% |  602 MiB |     302 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.6% |  569 MiB |     273 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.5% |  551 MiB |     268 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.4% |  542 MiB |     272 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 3.7% |  452 MiB |     231 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.6% |  441 MiB |     225 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.6% |  440 MiB |     224 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.7% |  336 MiB |     155 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.6% |  318 MiB |      88 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e80144e000`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.5% |  304 MiB |     153 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.9% |  233 MiB |     117 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.3% |  158 MiB |      59 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% | 89.3 MiB |      43 | `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e8013c0800`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.7% |   82 MiB |      15 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% | 80.9 MiB |      30 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |   80 MiB |      40 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% | 76.6 MiB |      39 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.5% | 61.8 MiB |      32 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← … ← `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitBlockStatement(BlockStatement)` ← … ← `visitConstructorOrMethod(MethodNode, boolean)` ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                                                                                                         |

# Retained heap profile

Retained 55.7 KiB over 109 samples (523 B per sample).

| Category         |      % |     Size | Samples |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 55.7 KiB |     109 |

## Hottest functions

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                                                    | Location                                                                   |
| ----: | -------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 92.3% | 51.4 KiB |      78 | `linkToCallSite(Object, Object, Object)`                                    | `java.lang.invoke.Invokers$Holder`                                         |
| 58.0% | 32.3 KiB |       4 | `main(String[])`                                                            | `org.codenarc.CodeNarc`                                                    |
| 33.5% | 18.7 KiB |      31 | `linkToCallSite(Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                                         |
| 14.9% | 8.32 KiB |       1 | `getFormattedTimestamp()`                                                   | `org.codenarc.report.AbstractReportWriter`                                 |
| 14.9% | 8.32 KiB |       1 | `writeTitle(Writer)`                                                        | `org.codenarc.report.TextReportWriter`                                     |
| 14.9% | 8.32 KiB |       1 | `writeReport(Writer, AnalysisContext, Results)`                             | `org.codenarc.report.TextReportWriter`                                     |
| 14.1% | 7.88 KiB |      25 | `init()`                                                                    | `org.codenarc.source.AbstractSourceCode`                                   |
| 12.9% | 7.21 KiB |      13 | `getAst()`                                                                  | `org.codenarc.source.AbstractSourceCode`                                   |
| 12.9% | 7.21 KiB |      13 | `init()`                                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 12.9% | 7.18 KiB |      12 | `isRuleSuppressed(Rule)`                                                    | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  4.5% | 2.51 KiB |      38 | `getMetaClass()`                                                            | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  4.4% | 2.47 KiB |       6 | `linkToCallSite(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                                         |
|  3.9% | 2.16 KiB |       1 | `getLines()`                                                                | `org.codenarc.source.AbstractSourceCode`                                   |
|  3.9% | 2.16 KiB |       1 | `line(int)`                                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
|  3.9% | 2.16 KiB |       1 | `sourceLineTrimmed(ASTNode)`                                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  3.9% | 2.16 KiB |       1 | `addViolation(ASTNode, String)`                                             | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  3.9% | 2.16 KiB |       1 | `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`               |
|  2.6% | 1.44 KiB |      22 | `applyTo(SourceCode)`                                                       | `org.codenarc.rule.AbstractRule`                                           |
|  2.5% | 1.39 KiB |      21 | `doCall(Object)`                                                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  2.5% | 1.38 KiB |      21 | `applyTo(SourceCode, List)`                                                 | `org.codenarc.rule.AbstractAstVisitorRule`                                 |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`org.codenarc.CodeNarc`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 32.3 KiB |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getFormattedTimestamp()` (`org.codenarc.report.AbstractReportWriter`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 8.32 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeTitle(Writer)` (`org.codenarc.report.TextReportWriter`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 8.32 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `writeReport(Writer, AnalysisContext, Results)` (`org.codenarc.report.TextReportWriter`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 8.32 KiB |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.8% | 7.78 KiB |      24 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  1.2% |     96 B |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 7.21 KiB |      13 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 7.21 KiB |      13 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee   | Location                                    |
| -----: | -------: | ------: | -------- | ------------------------------------------- |
| 100.0% | 7.18 KiB |      12 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `getLines()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 2.16 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 2.16 KiB |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |     Size | Samples | Callee      | Location                                 |
| -----: | -------: | ------: | ----------- | ---------------------------------------- |
| 100.0% | 2.16 KiB |       1 | `line(int)` | `org.codenarc.source.AbstractSourceCode` |

##### `addViolation(ASTNode, String)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |     Size | Samples | Callee                       | Location                               |
| -----: | -------: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% | 2.16 KiB |       1 | `sourceLineTrimmed(ASTNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)

|      % |     Size | Samples | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.16 KiB |       1 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                          |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------- |
| 96.2% | 1.38 KiB |      21 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`        |
|  3.8% |     56 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.convention.NoTabCharacterRule` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 1.39 KiB |      21 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |  Size | Samples | Callee                  | Location                                                       |
| ----: | ----: | ------: | ----------------------- | -------------------------------------------------------------- |
| 55.9% | 792 B |       8 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                     |
| 33.3% | 472 B |      10 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                         |
|  6.2% |  88 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule` |
|  4.5% |  64 B |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`                      |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.0% | 32.3 KiB |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 14.9% | 8.32 KiB |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getFormattedTimestamp()` (`org.codenarc.report.AbstractReportWriter`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeTitle(Writer)` (`org.codenarc.report.TextReportWriter`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeReport(Writer, AnalysisContext, Results)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 12.6% | 7.03 KiB |       9 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.9% | 2.16 KiB |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfBothAreConstantsOrLiterals(ASTNode, Expression, Expression)` (`org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor`)                                                                                                                                                                                                                                                                                                |
|  1.9% | 1.05 KiB |      17 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.0% |    584 B |       8 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% |    536 B |       9 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.9% |    528 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |    312 B |       1 | `<init>(Object[], String[])` (`org.codehaus.groovy.runtime.GStringImpl`) ← `<clinit>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.ruleregistry.RuleRegistryInitializer`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                         |
|  0.3% |    144 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |    128 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<init>(Object, Object, Reference)` (`org.codenarc.CodeNarcRunner$_applyPluginsProcessViolationsForFile_closure5`) ← `applyPluginsProcessViolationsForFile(FileResults)` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `applyPluginsProcessViolationsForAllFiles(Results)` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.CodeNarcRunner$_applyPluginsProcessViolationsForAllFiles_closure4`)                                                                                                                                                                                                                    |
|  0.2% |     96 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRules()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule$1`) ← `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitTypeInstantiationAstVisitor`) ← `<init>(ExplicitHashMapInstantiationRule, Object)` (`org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule$1`) ← `getAstVisitor()` (`org.codenarc.rule.groovyism.ExplicitHashMapInstantiationRule`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                               |
|  0.2% |     88 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |     72 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.rule.formatting.SpaceAfterCommaRule`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |     64 B |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `visitImports(ModuleNode)` (`org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`) ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                          |
|  0.1% |     56 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.ForLoopShouldBeWhileLoopAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |     56 B |       1 | `linkToCallSite(Object, int, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processMethodNode(MethodNode)` (`org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
