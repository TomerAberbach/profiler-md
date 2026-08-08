# Profile

Collected 309 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 98.7% |     305 |
| Ours             |  1.3% |       4 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                          | Location                                          |
| ---: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 0.3% |       1 | `linkToCallSite(Object, Object)`                  | `java.lang.invoke.Invokers$Holder`                |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                |
| 0.3% |       1 | `visitBinaryExpression(BinaryExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`      |
| 0.3% |       1 | `getText()`                                       | `org.codenarc.source.SourceFile`                  |
| 0.3% |       1 | `getViolations(AstVisitor, SourceCode)`           | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |
| 0.3% |       1 | `valueOf(int)`                                    | `java.lang.Integer`                               |
| 0.3% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.gmetrics.metric.abc.AbcAstVisitor`           |
| 0.3% |       1 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`            |

#### Categories

##### Standard library

|    % | Samples | Function                                  | Location                                     |
| ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 0.3% |       1 | `linkToCallSite(Object, Object)`          | `java.lang.invoke.Invokers$Holder`           |
| 0.3% |       1 | `linkToCallSite(Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`           |
| 0.3% |       1 | `visitBinaryExpression(BinaryExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |
| 0.3% |       1 | `valueOf(int)`                            | `java.lang.Integer`                          |

##### Ours

|    % | Samples | Function                                          | Location                                          |
| ---: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 0.3% |       1 | `getText()`                                       | `org.codenarc.source.SourceFile`                  |
| 0.3% |       1 | `getViolations(AstVisitor, SourceCode)`           | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |
| 0.3% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.gmetrics.metric.abc.AbcAstVisitor`           |
| 0.3% |       1 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`            |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `visitBinaryExpression(BinaryExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codehaus.groovy.ast.CodeVisitorSupport:201` |

##### `getText()` (`org.codenarc.source.SourceFile`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `org.codenarc.source.SourceFile:64` |

##### `getViolations(AstVisitor, SourceCode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unused.UnusedPrivateFieldRule:76` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `java.lang.Integer:1081` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.gmetrics.metric.abc.AbcAstVisitor`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `org.gmetrics.metric.abc.AbcAstVisitor:69` |

##### `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `org.codenarc.report.TextReportWriter:77` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                | Location                                                       |
| -----: | ------: | ------------------------------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `removeAnyViolationsForSameLine(int)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                              | Location                                            |
| -----: | ------: | ----------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `visitMapExpression(MapExpression)` | `org.codenarc.rule.basic.DuplicateMapKeyAstVisitor` |

##### `getViolations(AstVisitor, SourceCode)` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

|      % | Samples | Caller                      | Location                                         |
| -----: | ------: | --------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `valueOf(int)` (`java.lang.Integer`)

|      % | Samples | Caller                          | Location                                  |
| -----: | ------: | ------------------------------- | ----------------------------------------- |
| 100.0% |       1 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractMethodVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                   |
| ----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 72.8% |     225 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 46.9% |     145 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                         |
| 29.1% |      90 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 25.9% |      80 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 24.9% |      77 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
| 24.6% |      76 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                           |
| 23.0% |      71 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 22.7% |      70 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.1% |      59 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 18.4% |      57 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 17.5% |      54 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 17.5% |      54 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                   |
| 16.8% |      52 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 16.8% |      52 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 15.5% |      48 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% |      42 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% |      42 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% |      42 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 13.3% |      41 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 10.4% |      32 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |

#### Categories

##### Standard library

|     % | Samples | Function                                                         | Location                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| 72.8% |     225 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
| 46.9% |     145 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
| 25.9% |      80 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
| 15.5% |      48 | `visitClass(ClassNode)`                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.6% |      42 | `visitBlockStatement(BlockStatement)`                            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.6% |      42 | `visitMethod(MethodNode)`                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.3% |      41 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 10.4% |      32 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  8.1% |      25 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  4.2% |      13 | `visitBinaryExpression(BinaryExpression)`                        | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.9% |      12 | `getMetaClass()`                                                 | `org.codehaus.groovy.reflection.ClassInfo`          |
|  3.2% |      10 | `newInstance()`                                                  | `java.lang.Class`                                   |
|  3.2% |      10 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |
|  2.9% |       9 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |
|  2.9% |       9 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.6% |       8 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.3% |       7 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.9% |       6 | `visitArgumentlistExpression(ArgumentListExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  1.6% |       5 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                  |
|  1.3% |       4 | `findRegex(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### Ours

|     % | Samples | Function                                         | Location                                                                                     |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 29.1% |      90 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
| 24.9% |      77 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                                     |
| 24.6% |      76 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                                             |
| 23.0% |      71 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
| 22.7% |      70 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
| 19.1% |      59 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                                       |
| 18.4% |      57 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |
| 17.5% |      54 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                             |
| 17.5% |      54 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                                     |
| 16.8% |      52 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
| 16.8% |      52 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
| 13.6% |      42 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  6.1% |      19 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                  |
|  3.6% |      11 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`                   |
|  3.2% |      10 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  2.3% |       7 | `writeFileViolations(Writer, FileResults)`       | `org.codenarc.report.TextReportWriter`                                                       |
|  1.6% |       5 | `getText()`                                      | `org.codenarc.source.SourceFile`                                                             |
|  1.3% |       4 | `doCall(Object)`                                 | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|  1.3% |       4 | `addViolationIfDuplicate(Expression, boolean)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  1.3% |       4 | `addViolationIfDuplicate(Expression)`            | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                                                                             |
| ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| 75.6% |      68 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
| 23.3% |      21 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
|  1.1% |       1 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 84.4% |      65 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  9.1% |       7 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  6.5% |       5 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                  |
| ----: | ------: | --------------------------- | --------------------------------------------------------- |
| 85.5% |      65 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  3.9% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  3.9% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  2.6% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |
|  2.6% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                                             |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------- |
| 64.8% |      46 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                   |
| 14.1% |      10 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                   |
| 14.1% |      10 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                  |
|  5.6% |       4 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801390400`                  |
|  1.4% |       1 | `longUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 80.0% |      56 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 14.3% |      10 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.3% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  1.4% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 79.7% |      47 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.1% |       3 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  3.4% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  3.4% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  1.7% |       1 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.ClassSizeAstVisitor`                        |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 68.4% |      39 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 24.6% |      14 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  5.3% |       3 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  1.8% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 98.1% |      53 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.9% |       1 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      54 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      52 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      52 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.1% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 4.8% |       2 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                     |
| ----: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 83.3% |      35 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  9.5% |       4 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  4.8% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.size.ParameterCountAstVisitor`            |
|  2.4% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`     |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                          |
| ----: | ------: | --------------------------- | ----------------------------------------------------------------- |
| 95.2% |      40 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                 |
|  2.4% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor`      |
|  2.4% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 2.4% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| 2.4% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 94.7% |      18 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  5.3% |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      11 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Callee          | Location          |
| -----: | ------: | --------------- | ----------------- |
| 100.0% |      10 | `newInstance()` | `java.lang.Class` |

##### `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 85.7% |       6 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getText()` (`org.codenarc.source.SourceFile`)

|     % | Samples | Callee                           | Location                           |
| ----: | ------: | -------------------------------- | ---------------------------------- |
| 80.0% |       4 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 50.0% |       2 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 50.0% |       2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 50.0% |       2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
| 50.0% |       2 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % | Samples | Callee                                         | Location                                           |
| -----: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% |       4 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.7% |      30 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 7.1% |      22 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 6.1% |      19 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.6% |      11 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.2% |      10 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.9% |       9 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.3% |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.9% |       6 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.3% |       4 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |       4 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getText()` (`org.codenarc.source.SourceFile`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |       4 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |       3 | `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |       3 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkParametersCount(MethodNode)` (`org.codenarc.rule.size.ParameterCountAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.size.ParameterCountAstVisitor`) ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()` ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `suppressException(Class, Closure)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Allocated heap profile

Allocated 11.9 GiB over 6,276 samples (1.94 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.2% | 11.8 GiB |   6,172 |
| Ours             |  0.8% | 99.7 MiB |      51 |
| Unknown          | <0.1% | 40.1 KiB |      53 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                               | Location                                                                              |
| ----: | -------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  0.5% | 60.7 MiB |      28 | `compile(String)`                                      | `java.util.regex.Pattern`                                                             |
|  0.1% | 16.6 MiB |      12 | `toString()`                                           | `java.lang.StringBuilder`                                                             |
|  0.1% |   12 MiB |       6 | `<init>()`                                             | `java.util.HashSet`                                                                   |
|  0.1% |   10 MiB |       5 | `writeViolation(Writer, Violation, String)`            | `org.codenarc.report.TextReportWriter`                                                |
|  0.1% |    8 MiB |       4 | `isCase(Object, Object)`                               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                   |
|  0.1% |  7.7 MiB |       4 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`            |
|  0.1% | 6.74 MiB |       4 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                                   |
| <0.1% |    4 MiB |       2 | `<init>()`                                             | `org.codenarc.rule.AbstractAstVisitor`                                                |
| <0.1% |    4 MiB |       2 | `processParameters(Parameter[], String)`               | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                    |
| <0.1% |    4 MiB |       2 | `shouldApplyThisRuleTo(SourceCode)`                    | `org.codenarc.rule.AbstractRule`                                                      |
| <0.1% |    4 MiB |       2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
| <0.1% |    4 MiB |       2 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                        |
| <0.1% | 3.35 MiB |       2 | `doCall(Object)`                                       | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
| <0.1% |    2 MiB |       1 | `checkForCorrectColumn(ASTNode, String, int)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                  |
| <0.1% |    2 MiB |       1 | `visitClass(ClassNode)`                                | `org.codenarc.rule.AbstractFieldVisitor`                                              |
| <0.1% |    2 MiB |       1 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
| <0.1% |    2 MiB |       1 | `<init>(AbstractAstVisitor)`                           | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                        |
| <0.1% |    2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                         |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`                     |
| <0.1% |    2 MiB |       1 | `getViolations(AstVisitor, SourceCode)`                | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                    |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                        | Location                                                |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
|  0.5% | 60.7 MiB |      28 | `compile(String)`                               | `java.util.regex.Pattern`                               |
|  0.1% | 16.6 MiB |      12 | `toString()`                                    | `java.lang.StringBuilder`                               |
|  0.1% |   12 MiB |       6 | `<init>()`                                      | `java.util.HashSet`                                     |
|  0.1% |    8 MiB |       4 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    2 MiB |       1 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
| <0.1% |    2 MiB |       1 | `createPojoWrapper(Object, Class)`              | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    2 MiB |       1 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    2 MiB |       1 | `asType(Object, Class)`                         | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| <0.1% |    2 MiB |       1 | `<init>()`                                      | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|     % |     Size | Samples | Function                                               | Location                                                                              |
| ----: | -------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  0.1% |   10 MiB |       5 | `writeViolation(Writer, Violation, String)`            | `org.codenarc.report.TextReportWriter`                                                |
|  0.1% |  7.7 MiB |       4 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`            |
|  0.1% | 6.74 MiB |       4 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                                   |
| <0.1% |    4 MiB |       2 | `<init>()`                                             | `org.codenarc.rule.AbstractAstVisitor`                                                |
| <0.1% |    4 MiB |       2 | `processParameters(Parameter[], String)`               | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                    |
| <0.1% |    4 MiB |       2 | `shouldApplyThisRuleTo(SourceCode)`                    | `org.codenarc.rule.AbstractRule`                                                      |
| <0.1% |    4 MiB |       2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
| <0.1% |    4 MiB |       2 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                        |
| <0.1% | 3.35 MiB |       2 | `doCall(Object)`                                       | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
| <0.1% |    2 MiB |       1 | `checkForCorrectColumn(ASTNode, String, int)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                  |
| <0.1% |    2 MiB |       1 | `visitClass(ClassNode)`                                | `org.codenarc.rule.AbstractFieldVisitor`                                              |
| <0.1% |    2 MiB |       1 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                   |
| <0.1% |    2 MiB |       1 | `<init>(AbstractAstVisitor)`                           | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                        |
| <0.1% |    2 MiB |       1 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`                         |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`                     |
| <0.1% |    2 MiB |       1 | `getViolations(AstVisitor, SourceCode)`                | `org.codenarc.rule.unused.UnusedPrivateMethodRule`                                    |
| <0.1% |    2 MiB |       1 | `<init>()`                                             | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`                     |
| <0.1% |    2 MiB |       1 | `getViolationLocationString(Violation, String)`        | `org.codenarc.report.TextReportWriter`                                                |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.AbstractAstVisitorRule`                                            |
| <0.1% |    2 MiB |       1 | `visitMethodComplete(MethodNode)`                      | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`        |

#### Lines

Lines ranked by contribution to each function's self size.

##### `compile(String)` (`java.util.regex.Pattern`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 60.7 MiB |      28 | `java.util.regex.Pattern:1101` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 16.6 MiB |      12 | `java.lang.StringBuilder:475` |

##### `<init>()` (`java.util.HashSet`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 12 MiB |       6 | `java.util.HashSet:107` |

##### `writeViolation(Writer, Violation, String)` (`org.codenarc.report.TextReportWriter`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 40.0% | 4 MiB |       2 | `org.codenarc.report.TextReportWriter:90` |
| 40.0% | 4 MiB |       2 | `org.codenarc.report.TextReportWriter:91` |
| 20.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:92` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 8 MiB |       4 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |    Size | Samples | Location                                                                      |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 7.7 MiB |       4 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|     % |  Size | Samples | Location                               |
| ----: | ----: | ------: | -------------------------------------- |
| 29.7% | 2 MiB |       1 | `org.codenarc.util.WildcardPattern:75` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Location                                  |
| ----: | ----: | ------: | ----------------------------------------- |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitor:36` |
| 50.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `processParameters(Parameter[], String)` (`org.codenarc.rule.naming.ParameterNameAstVisitor`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.naming.ParameterNameAstVisitor:77` |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractRule:253` |

##### `markVariableAsReferenced(String, VariableExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:158` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % |  Size | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `doCall(Object)` (`org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3`)

|      % |     Size | Samples | Location                                                                                  |
| -----: | -------: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% | 3.35 MiB |       2 | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3:142` |

##### `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|      % |  Size | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.formatting.IndentationAstVisitor:351` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|      % |  Size | Samples | Location                                    |
| -----: | ----: | ------: | ------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractFieldVisitor:29` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:154` |

##### `<init>(AbstractAstVisitor)` (`org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`)

|      % |  Size | Samples | Location                                                          |
| -----: | ----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor:50` |

##### `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor`)

|      % |  Size | Samples | Location                                                          |
| -----: | ----: | ------: | ----------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.PrivateFieldCouldBeFinalAstVisitor:106` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor:52` |

##### `getViolations(AstVisitor, SourceCode)` (`org.codenarc.rule.unused.UnusedPrivateMethodRule`)

|      % |  Size | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedPrivateMethodRule:62` |

##### `<init>()` (`org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`)

|      % |  Size | Samples | Location                                                             |
| -----: | ----: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor:30` |

##### `getViolationLocationString(Violation, String)` (`org.codenarc.report.TextReportWriter`)

|      % |  Size | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.report.TextReportWriter:97` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:36` |

##### `createPojoWrapper(Object, Class)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:633` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % |  Size | Samples | Location                                                                          |
| -----: | ----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor:61` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `asType(Object, Class)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:609` |

##### `<init>()` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codehaus.groovy.runtime.powerassert.ValueRecorder:29` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>()` (`java.util.HashSet`)

|     % |   Size | Samples | Caller     | Location                               |
| ----: | -----: | ------: | ---------- | -------------------------------------- |
| 83.3% | 10 MiB |       5 | `<init>()` | `org.codenarc.rule.AbstractAstVisitor` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                            | Location                                                                        |
| ----: | ----: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| 25.0% | 2 MiB |       1 | `isNotWhitespace(String, int)`                    | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`               |
| 25.0% | 2 MiB |       1 | `statementForcesMethodReturn(Statement)`          | `org.codenarc.rule.basic.DeadCodeAstVisitor`                                    |
| 25.0% | 2 MiB |       1 | `doCall(Object)`                                  | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 25.0% | 2 MiB |       1 | `handleExpressionContainingOperation(Expression)` | `org.gmetrics.metric.abc.AbcAstVisitor`                                         |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller     | Location                                                            |
| ----: | ----: | ------: | ---------- | ------------------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.exceptions.MissingNewInThrowStatementAstVisitor` |
| 50.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.EmptyCatchBlockAstVisitor`                 |

##### `shouldApplyThisRuleTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 4 MiB |       2 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|      % |  Size | Samples | Caller                      | Location                                   |
| -----: | ----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% | 2 MiB |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.OptionalCollectionReturnTypeAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getViolations(AstVisitor, SourceCode)` (`org.codenarc.rule.unused.UnusedPrivateMethodRule`)

|      % |  Size | Samples | Caller                      | Location                                         |
| -----: | ----: | ------: | --------------------------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |

##### `<init>()` (`org.codenarc.rule.unused.AbstractLastStatementInBlockAstVisitor`)

|      % |  Size | Samples | Caller     | Location                                         |
| -----: | ----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.unused.UnusedArrayAstVisitor` |

##### `record(Object, int)` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Caller                  | Location                            |
| -----: | ----: | ------: | ----------------------- | ----------------------------------- |
| 100.0% | 2 MiB |       1 | `<init>(int, int, int)` | `org.gmetrics.metric.abc.AbcVector` |

##### `createPojoWrapper(Object, Class)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Caller                         | Location                                                          |
| -----: | ----: | ------: | ------------------------------ | ----------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `isNotWhitespace(String, int)` | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 2 MiB |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitMethodComplete(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Caller                             | Location                       |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------ |
| 100.0% | 2 MiB |       1 | `packageNameForImport(ImportNode)` | `org.codenarc.util.ImportUtil` |

##### `asType(Object, Class)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 2 MiB |       1 | `<init>()` | `org.gmetrics.metric.AbstractAstVisitor` |

##### `<init>()` (`org.codehaus.groovy.runtime.powerassert.ValueRecorder`)

|      % |  Size | Samples | Caller                                            | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `<init>(Metric, MetricLevel, AbcVector, Integer)` | `org.gmetrics.metric.abc.result.AbcMetricResult` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 64.6% | 7.67 GiB |   4,001 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.8% |  5.2 GiB |   2,690 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 37.9% |  4.5 GiB |   2,311 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 33.8% | 4.02 GiB |   2,075 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 29.7% | 3.52 GiB |   1,835 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.5% | 3.38 GiB |   1,752 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 26.4% | 3.14 GiB |   1,580 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 22.2% | 2.64 GiB |   1,385 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 20.9% | 2.48 GiB |   1,303 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 18.3% | 2.18 GiB |   1,129 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 16.2% | 1.93 GiB |     999 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 15.5% | 1.84 GiB |     949 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 13.8% | 1.64 GiB |     842 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.1% | 1.55 GiB |     802 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.7% | 1.51 GiB |     776 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 12.1% | 1.44 GiB |     743 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.3% | 1.34 GiB |     684 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|  8.5% | 1.01 GiB |     514 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000`                        |
|  8.0% |  968 MiB |     494 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  6.8% |  825 MiB |     404 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                      | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 64.6% | 7.67 GiB |   4,001 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 43.8% |  5.2 GiB |   2,690 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 26.4% | 3.14 GiB |   1,580 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 16.2% | 1.93 GiB |     999 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.8% | 1.64 GiB |     842 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.1% | 1.55 GiB |     802 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.7% | 1.51 GiB |     776 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 12.1% | 1.44 GiB |     743 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 11.3% | 1.34 GiB |     684 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|  8.5% | 1.01 GiB |     514 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |
|  6.8% |  825 MiB |     404 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  5.8% |  710 MiB |     355 | `compile(String)`                                             | `java.util.regex.Pattern`                           |
|  5.8% |  700 MiB |     346 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x0000000801390400` |
|  4.2% |  507 MiB |     244 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  4.2% |  505 MiB |     255 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.8% |  462 MiB |     230 | `matches(String)`                                             | `java.lang.String`                                  |
|  3.6% |  437 MiB |     208 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.9% |  349 MiB |     158 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  2.9% |  349 MiB |     156 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801449000` |
|  2.9% |  348 MiB |     176 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |

##### Ours

|     % |     Size | Samples | Function                                          | Location                                                                            |
| ----: | -------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 37.9% |  4.5 GiB |   2,311 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| 33.8% | 4.02 GiB |   2,075 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| 29.7% | 3.52 GiB |   1,835 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`          |
| 28.5% | 3.38 GiB |   1,752 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                                    |
| 22.2% | 2.64 GiB |   1,385 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                    |
| 20.9% | 2.48 GiB |   1,303 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
| 18.3% | 2.18 GiB |   1,129 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                              |
| 15.5% | 1.84 GiB |     949 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                              |
|  8.0% |  968 MiB |     494 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                            |
|  6.7% |  812 MiB |     416 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`         |
|  3.8% |  467 MiB |     239 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`          |
|  3.6% |  439 MiB |     224 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                            |
|  3.1% |  382 MiB |     197 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|  3.1% |  381 MiB |     191 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|  3.1% |  374 MiB |     187 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                  |
|  3.0% |  366 MiB |     188 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|  2.8% |  336 MiB |     149 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                  |
|  2.8% |  336 MiB |     149 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                                  |
|  2.7% |  330 MiB |     146 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|  2.3% |  282 MiB |     122 | `doCall(Object)`                                  | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.8% | 2.33 GiB |   1,206 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 22.4% | 1.01 GiB |     514 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801394000` |
| 15.2% |  700 MiB |     346 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x0000000801390400` |
| 10.5% |  484 MiB |     243 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |    2 MiB |       1 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 83.2% | 3.34 GiB |   1,724 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.2% |  421 MiB |     215 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  6.5% |  266 MiB |     134 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 72.1% | 2.54 GiB |   1,332 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 27.6% |  997 MiB |     499 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 99.9% | 3.37 GiB |   1,749 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.1% | 4.73 MiB |       3 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                  |
| ----: | -------: | ------: | --------------------------- | --------------------------------------------------------- |
| 82.9% | 2.19 GiB |   1,156 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                |
|  4.9% |  131 MiB |      66 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`  |
|  4.2% |  113 MiB |      59 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`          |
|  2.4% | 63.9 MiB |      29 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`            |
|  1.4% | 36.9 MiB |      18 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 81.9% | 2.03 GiB |   1,053 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 11.1% |  281 MiB |     142 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  3.2% | 82.3 MiB |      58 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.3% | 57.2 MiB |      29 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.3% | 7.48 MiB |       4 | `getAstVisitor()`       | `org.codenarc.rule.convention.HashtableIsObsoleteRule`  |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 87.6% | 1.91 GiB |     987 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.9% |  131 MiB |      60 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.3% | 28.7 MiB |      16 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.6% |   14 MiB |       8 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.convention.CompileStaticlVisitor`                |
|  0.5% |   12 MiB |       6 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                            | Location                                                              |
| ---: | -----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.5% | 10 MiB |       6 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.3% |  6 MiB |       3 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 83.7% | 1.54 GiB |     794 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.3% |  101 MiB |      49 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  2.1% |   40 MiB |      20 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  1.0% |   18 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`    |
|  1.0% |   18 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`     |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                      | Location                                                       |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------- |
| 4.5% | 75 MiB |      39 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                                    |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 87.8% | 1.36 GiB |     701 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  2.9% | 46.8 MiB |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  2.1% |   33 MiB |      17 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                  |
|  1.6% |   26 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|  1.4% | 21.9 MiB |      12 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |  Size | Samples | Callee                            | Location                                                              |
| ---: | ----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.4% | 6 MiB |       3 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                      | Location                                                       |
| ---: | ------: | ------: | --------------------------- | -------------------------------------------------------------- |
| 7.1% | 105 MiB |      53 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 95.6% |  926 MiB |     472 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  2.6% | 25.3 MiB |      13 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  1.8% |   17 MiB |       9 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |     Size | Samples | Callee                                                   | Location                           |
| ----: | -------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.1% |  805 MiB |     412 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.5% |    4 MiB |       2 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.4% | 3.02 MiB |       2 | `linkToCallSite(Object, int, Object)`                    | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 99.3% |  463 MiB |     237 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.7% | 3.31 MiB |       2 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 439 MiB |     224 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |    Size | Samples | Callee     | Location                                 |
| -----: | ------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 382 MiB |     197 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 70.7% |  270 MiB |     136 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 25.1% | 95.7 MiB |      47 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  2.1% |    8 MiB |       4 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801134800` |
|  1.6% |    6 MiB |       3 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |    2 MiB |       1 | `compareEqual(Object, Object)`                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % |    Size | Samples | Callee                                         | Location                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% | 374 MiB |     187 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 96.2% | 352 MiB |     181 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  1.6% |   6 MiB |       3 | `toString()`     | `java.lang.StringBuilder`                   |
|  1.1% |   4 MiB |       2 | `append(String)` | `java.lang.StringBuilder`                   |
|  0.5% |   2 MiB |       1 | `<init>()`       | `java.lang.StringBuilder`                   |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                            | Location                                                              |
| ---: | -----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 4.6% | 16 MiB |       7 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                        | Location                                            |
| -----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 100.0% | 336 MiB |     149 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801449000` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                            | Location                           |
| -----: | ------: | ------: | ------------------------------------------------- | ---------------------------------- |
| 100.0% | 336 MiB |     149 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 330 MiB |     146 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 282 MiB |     122 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.7% |  934 MiB |     467 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 5.8% |  700 MiB |     346 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801390400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.7% |  568 MiB |     290 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 4.4% |  534 MiB |     277 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.3% |  526 MiB |     261 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.2% |  508 MiB |     253 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801394000`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.0% |  484 MiB |     243 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.9% |  478 MiB |     244 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.2% |  395 MiB |     203 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.7% |  324 MiB |     170 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.2% |  272 MiB |     117 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801449000`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.2% |  265 MiB |     135 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.1% |  253 MiB |     127 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.5% |  186 MiB |      44 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 75.3 MiB |      37 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`) ← `addViolationIfDuplicate(Expression)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor$_visitArgumentlistExpression_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 71.3 MiB |      34 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.6% | 70.8 MiB |      35 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008013b9000`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |   68 MiB |      34 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.5% | 57.1 MiB |      29 | `compile(String)` (`java.util.regex.Pattern`) ← … ← `matches(String)` (`java.lang.String`) ← `isMethodCallOnObject(Expression, String)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `isMethodCall(MethodCallExpression, String)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor$_visitMethodCallExpression_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |   54 MiB |      25 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Retained heap profile

Retained 325 KiB over 117 samples (2.78 KiB per sample).

| Category         |      % |    Size | Samples |
| ---------------- | -----: | ------: | ------: |
| Standard library | 100.0% | 325 KiB |     117 |

## Hottest functions

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                         | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 99.4% |  324 KiB |      87 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 87.1% |  283 KiB |      24 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                   |
| 12.1% | 39.2 KiB |      48 | `getMetaClass()`                                 | `org.codehaus.groovy.reflection.ClassInfo`                                 |
| 11.8% | 38.5 KiB |      33 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
| 11.8% | 38.4 KiB |      31 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 11.7% | 38.1 KiB |      24 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 11.5% | 37.3 KiB |      13 | `newInstance()`                                  | `java.lang.Class`                                                          |
| 11.5% | 37.3 KiB |      13 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  9.8% |   32 KiB |       2 | `$getStaticMetaClass()`                          | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
|  9.8% |   32 KiB |       2 | `<init>()`                                       | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`              |
|  8.6% |   28 KiB |      35 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
|  8.3% | 27.1 KiB |      16 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|  1.4% | 4.56 KiB |      13 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  1.4% | 4.51 KiB |      12 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  1.3% | 4.11 KiB |       4 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  1.2% | 4.04 KiB |       2 | `$getStaticMetaClass()`                          | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`      |
|  1.2% | 4.04 KiB |       2 | `<init>(String, int)`                            | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  1.2% | 4.04 KiB |       2 | `<init>(String)`                                 | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  1.2% | 4.04 KiB |       2 | `<init>()`                                       | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`      |
|  0.4% | 1.29 KiB |      15 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 283 KiB |      24 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 99.7% | 38.4 KiB |      31 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  0.2% |     64 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  0.1% |     48 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                               |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 97.1% | 37.3 KiB |      13 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`                             |
|  2.1% |    816 B |      15 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                                 |
|  0.5% |    192 B |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`                              |
|  0.2% |     88 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.exceptions.CatchArrayIndexOutOfBoundsExceptionRule` |
|  0.1% |     56 B |       1 | `getAstVisitor()`       | `org.codenarc.rule.groovyism.ExplicitLinkedHashMapInstantiationRule`   |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 38.1 KiB |      24 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |     Size | Samples | Callee          | Location          |
| -----: | -------: | ------: | --------------- | ----------------- |
| 100.0% | 37.3 KiB |      13 | `newInstance()` | `java.lang.Class` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

|      % |   Size | Samples | Callee           | Location                                   |
| -----: | -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 32 KiB |       2 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `<init>()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`)

|      % |   Size | Samples | Callee                  | Location                                                      |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------- |
| 100.0% | 32 KiB |       2 | `$getStaticMetaClass()` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |     Size | Samples | Callee                           | Location                           |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 27.1 KiB |      16 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee     | Location                                 |
| -----: | -------: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 4.56 KiB |      13 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Callee   | Location                                    |
| -----: | -------: | ------: | -------- | ------------------------------------------- |
| 100.0% | 4.51 KiB |      12 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 4.11 KiB |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`)

|      % |     Size | Samples | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `<init>(String, int)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % |     Size | Samples | Callee                  | Location                                                              |
| -----: | -------: | ------: | ----------------------- | --------------------------------------------------------------------- |
| 100.0% | 4.04 KiB |       2 | `$getStaticMetaClass()` | `org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % |     Size | Samples | Callee                | Location                                                     |
| -----: | -------: | ------: | --------------------- | ------------------------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `<init>(String, int)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

##### `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`)

|      % |     Size | Samples | Callee           | Location                                                     |
| -----: | -------: | ------: | ---------------- | ------------------------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `<init>(String)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.8% |  256 KiB |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  9.8% |   32 KiB |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                           |
|  6.9% | 22.5 KiB |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% | 4.11 KiB |       4 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                                                                                                                                                                                                                                                                        |
|  1.2% | 4.04 KiB |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`) ← `<init>(String, int)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `<init>(String)` ← `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToLeftShiftMethodAstVisitor`) ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                 |
|  0.3% |  1.1 KiB |      19 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |    528 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.naming.PackageNameAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                        |
|  0.1% |    376 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.basic.AssertWithinFinallyBlockAstVisitor`) ← `<init>()` (`org.codenarc.rule.basic.AbstractFinallyAstVisitor`) ← `<init>()` (`org.codenarc.rule.basic.AssertWithinFinallyBlockAstVisitor`) ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                          |
|  0.1% |    352 B |       7 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |    336 B |       2 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkStatementIndent(Statement, BlockStatement)` (`org.codenarc.rule.formatting.IndentationAstVisitor`)                                                                                                                                                                                                                              |
|  0.1% |    192 B |       1 | `format(String, Object[])` (`java.lang.String`) ← `addViolation(MethodNode, String)` (`org.codenarc.rule.AbstractMethodVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.naming.MethodNameAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                             |
|  0.1% |    168 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitAssertStatement(AssertStatement)` (`org.codenarc.rule.basic.ConstantAssertExpressionAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| <0.1% |    160 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String, int)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkForCorrectColumn(ASTNode, String)` (`org.codenarc.rule.formatting.IndentationAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |    144 B |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getLines()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `line(int)` (`org.codenarc.source.AbstractSourceCode`) ← `sourceLineTrimmed(ASTNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `addViolation(ASTNode, String)` ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.convention.CompileStaticlVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)                                                                 |
| <0.1% |    128 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |    112 B |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801134800`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% |    112 B |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                     |
| <0.1% |    104 B |       3 | `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |    104 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `addViolationIfDoubleQuoted(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`) ← `doCall()`                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
