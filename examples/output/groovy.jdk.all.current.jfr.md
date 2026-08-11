# Sampling profile

Collected 311 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 98.4% |     306 |
| Ours             |  1.6% |       5 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                        | Location                                                             |
| ---: | ------: | ----------------------------------------------- | -------------------------------------------------------------------- |
| 0.6% |       2 | `getClass()`                                    | `java.lang.Object`                                                   |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                       |
| 0.3% |       1 | `charUnbox(Object)`                             | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
| 0.3% |       1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractFieldVisitor`                             |
| 0.3% |       1 | `$getStaticMetaClass()`                         | `org.gmetrics.result.NumberMetricResult`                             |
| 0.3% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`      |
| 0.3% |       1 | `handleMapExpression(MapEntryExpression)`       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`    |
| 0.3% |       1 | `intUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

#### Categories

##### Ours

|    % | Samples | Function                                        | Location                                                          |
| ---: | ------: | ----------------------------------------------- | ----------------------------------------------------------------- |
| 0.3% |       1 | `collectViolations(SourceCode, RuleSet)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                    |
| 0.3% |       1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractFieldVisitor`                          |
| 0.3% |       1 | `$getStaticMetaClass()`                         | `org.gmetrics.result.NumberMetricResult`                          |
| 0.3% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`   |
| 0.3% |       1 | `handleMapExpression(MapEntryExpression)`       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor` |

##### Standard library

|    % | Samples | Function            | Location                                                             |
| ---: | ------: | ------------------- | -------------------------------------------------------------------- |
| 0.6% |       2 | `getClass()`        | `java.lang.Object`                                                   |
| 0.3% |       1 | `charUnbox(Object)` | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
| 0.3% |       1 | `intUnbox(Object)`  | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |

##### `charUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation:72` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractFieldVisitor:36` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor:55` |

##### `handleMapExpression(MapEntryExpression)` (`org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor:65` |

##### `intUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation:82` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `getClass()` (`java.lang.Object`)

|     % | Samples | Caller                  | Location                                                         |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------- |
| 50.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`  |
| 50.0% |       1 | `$getStaticMetaClass()` | `org.codenarc.rule.groovyism.ExplicitCallToPlusMethodAstVisitor` |

##### `charUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `normalizePath(String)` | `org.codenarc.source.AbstractSourceCode` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractFieldVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `$getStaticMetaClass()` (`org.gmetrics.result.NumberMetricResult`)

|      % | Samples | Caller                                           | Location                                 |
| -----: | ------: | ------------------------------------------------ | ---------------------------------------- |
| 100.0% |       1 | `<init>(Metric, MetricLevel, Map, Integer, int)` | `org.gmetrics.result.NumberMetricResult` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`)

|      % | Samples | Caller                    | Location                                          |
| -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `intUnbox(Object)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

|      % | Samples | Caller                 | Location                              |
| -----: | ------: | ---------------------- | ------------------------------------- |
| 100.0% |       1 | `call(Object, Object)` | `org.gmetrics.source.SourceCode$line` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                 | Location                                                                   |
| ----: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| 69.1% |     215 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
| 37.3% |     116 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                         |
| 31.8% |      99 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 28.0% |      87 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 26.7% |      83 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
| 24.1% |      75 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                           |
| 21.2% |      66 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 20.6% |      64 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                                   |
| 17.7% |      55 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 17.4% |      54 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 16.4% |      51 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 13.8% |      43 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.2% |      41 | `getAst()`                                               | `org.codenarc.source.AbstractSourceCode`                                   |
| 13.2% |      41 | `visitMethod(MethodNode)`                                | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 12.9% |      40 | `init()`                                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 12.5% |      39 | `visitMethod(MethodNode)`                                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.9% |      37 | `isRuleSuppressed(Rule)`                                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
| 11.9% |      37 | `visitBlockStatement(BlockStatement)`                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.9% |      37 | `visitConstructorOrMethod(MethodNode, boolean)`          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  6.1% |      19 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |

#### Categories

##### Ours

|     % | Samples | Function                                         | Location                                                                    |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 31.8% |      99 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 28.0% |      87 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 24.1% |      75 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 21.2% |      66 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 20.6% |      64 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| 17.7% |      55 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 17.4% |      54 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 16.4% |      51 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 13.2% |      41 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| 13.2% |      41 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 12.9% |      40 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 11.9% |      37 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  4.2% |      13 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  3.9% |      12 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  1.9% |       6 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                     |
|  1.6% |       5 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  1.3% |       4 | `<init>(Reader)`                                 | `org.codenarc.ruleset.XmlReaderRuleSet`                                     |
|  1.3% |       4 | `calculateForClass(ClassNode, SourceCode)`       | `org.gmetrics.metric.AbstractMethodMetric`                                  |
|  1.3% |       4 | `super$3$applyTo(SourceCode, List)`              | `org.codenarc.rule.formatting.IndentationRule`                              |
|  1.3% |       4 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |

##### Standard library

|     % | Samples | Function                                                      | Location                                                |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| 69.1% |     215 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                      |
| 37.3% |     116 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                      |
| 26.7% |      83 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                      |
| 13.8% |      43 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 12.5% |      39 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 11.9% |      37 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 11.9% |      37 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  6.1% |      19 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                      |
|  5.8% |      18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  4.8% |      15 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  4.2% |      13 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  3.5% |      11 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`              |
|  3.2% |      10 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`     |
|  2.6% |       8 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000700138b800`     |
|  2.3% |       7 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`     |
|  1.9% |       6 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  1.6% |       5 | `<init>(Object, Object)`                                      | `groovy.lang.Closure`                                   |
|  1.6% |       5 | `callCurrent(GroovyObject, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
|  1.6% |       5 | `newInstance()`                                               | `java.lang.Class`                                       |
|  1.6% |       5 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001448800`     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 72.7% |      72 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 27.3% |      27 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 67.8% |      59 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 14.9% |      13 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  9.2% |       8 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700138b800` |
|  8.0% |       7 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001393400` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                        |
| ----: | ------: | --------------------------- | --------------------------------------------------------------- |
| 82.7% |      62 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`                      |
|  4.0% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`                  |
|  4.0% |       3 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`                |
|  2.7% |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule` |
|  1.3% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`       |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 77.3% |      51 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  9.1% |       6 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  7.6% |       5 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  4.5% |       3 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  1.5% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 92.2% |      59 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  6.3% |       4 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.6% |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                                                   |
| ----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
| 80.0% |      44 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                         |
|  9.1% |       5 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                         |
|  7.3% |       4 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                         |
|  1.8% |       1 | `<init>(Object, Object, Reference)`              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure2` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                            |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 75.9% |      41 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.6% |       3 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  3.7% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  3.7% |       2 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`   |
|  3.7% |       2 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 96.1% |      49 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  3.9% |       2 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      41 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                            |
| ----: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 90.2% |      37 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  4.9% |       2 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.design.ImplementationAsTypeAstVisitor`           |
|  2.4% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  2.4% |       1 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      40 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                        |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------- |
| 79.5% |      31 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  5.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`        |
|  5.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`    |
|  2.6% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor` |
|  2.6% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`      |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee   | Location                                    |
| -----: | ------: | -------- | ------------------------------------------- |
| 100.0% |      37 | `init()` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % | Samples | Callee                                                   | Location                           |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 92.3% |      12 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  7.7% |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |      12 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|     % | Samples | Callee                                            | Location                                                         |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------- |
| 50.0% |       3 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`     |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryCollectCallAstVisitor` |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.RemoveAllOnSelfAstVisitor`              |
| 16.7% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.BooleanGetBooleanAstVisitor`            |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Callee          | Location          |
| -----: | ------: | --------------- | ----------------- |
| 100.0% |       5 | `newInstance()` | `java.lang.Class` |

##### `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       4 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `calculateForClass(ClassNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)

|     % | Samples | Callee                                              | Location                                                |
| ----: | ------: | --------------------------------------------------- | ------------------------------------------------------- |
| 75.0% |       3 | `callCurrent(GroovyObject, Object, Object, Object)` | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| 25.0% |       1 | `callCurrent(GroovyObject, Object)`                 | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

|      % | Samples | Callee                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       4 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|     % | Samples | Callee                                 | Location                                          |
| ----: | ------: | -------------------------------------- | ------------------------------------------------- |
| 75.0% |       3 | `applyVisitor(AstVisitor, SourceCode)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`  |
| 25.0% |       1 | `getAstVisitor(SourceCode)`            | `org.codenarc.rule.unused.UnusedPrivateFieldRule` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.4% |      23 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                      |
| 7.1% |      22 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                  |
| 6.4% |      20 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 4.2% |      13 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                |
| 2.6% |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)                                              |
| 2.6% |       8 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                        |
| 2.6% |       8 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700138b800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)         |
| 1.3% |       4 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                     |
| 1.3% |       4 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001393400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)     |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)                                                                                                                                                                                                                                                             |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                          |
| 1.0% |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |       3 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001448800`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)`                                                                                                                                                                      |
| 0.6% |       2 | `<init>(Object, Object)` (`groovy.lang.Closure`) ← … ← `<clinit>()` ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>(Reader)` (`org.codenarc.ruleset.XmlReaderRuleSet`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlFileRuleSet$_closure1`)                                                                                                                                                                                                                                                                                          |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                          |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                              |
| 0.6% |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                              |
| 0.6% |       2 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                          |

# Allocated heap profile

Allocated 11.8 GiB over 6,315 samples (1.91 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 99.2% | 11.7 GiB |   6,219 |
| Ours             |  0.8% | 97.2 MiB |      50 |
| Unknown          | <0.1% |   34 KiB |      46 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                               | Location                                                                        |
| ----: | -------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
|  0.6% | 71.1 MiB |      61 | `iterator()`                                           | `java.util.ArrayList`                                                           |
|  0.2% |   26 MiB |      12 | `<init>()`                                             | `java.util.HashSet`                                                             |
|  0.2% | 20.7 MiB |      12 | `toString()`                                           | `java.lang.StringBuilder`                                                       |
|  0.1% |   16 MiB |       8 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
|  0.1% |    8 MiB |       4 | `doCall(Object)`                                       | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| <0.1% |    6 MiB |       3 | `isCase(Object, Object)`                               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
| <0.1% | 5.97 MiB |       4 | `isRuleSuppressed(Rule)`                               | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
| <0.1% |    4 MiB |       2 | `<init>()`                                             | `org.codenarc.rule.AbstractAstVisitor`                                          |
| <0.1% |    4 MiB |       2 | `createRange(Object, Object, boolean, boolean)`        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                             |
| <0.1% |    4 MiB |       2 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| <0.1% | 3.99 MiB |       2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
| <0.1% |    2 MiB |       1 | `lineNumberForMethod(MethodNode, SourceCode)`          | `org.gmetrics.metric.AbstractMethodMetric`                                      |
| <0.1% |    2 MiB |       1 | `<init>(String, boolean)`                              | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.AbstractAstVisitorRule`                                      |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                                |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
| <0.1% |    2 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.convention.NoDefAstVisitor`                                  |
| <0.1% |    2 MiB |       1 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
| <0.1% |    2 MiB |       1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                        | Location                                            |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------------------------- |
|  0.6% | 71.1 MiB |      61 | `iterator()`                                    | `java.util.ArrayList`                               |
|  0.2% |   26 MiB |      12 | `<init>()`                                      | `java.util.HashSet`                                 |
|  0.2% | 20.7 MiB |      12 | `toString()`                                    | `java.lang.StringBuilder`                           |
| <0.1% |    6 MiB |       3 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| <0.1% |    4 MiB |       2 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### Ours

|     % |     Size | Samples | Function                                               | Location                                                                        |
| ----: | -------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
|  0.1% |   16 MiB |       8 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
|  0.1% |    8 MiB |       4 | `doCall(Object)`                                       | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| <0.1% | 5.97 MiB |       4 | `isRuleSuppressed(Rule)`                               | `org.codenarc.analyzer.SuppressionAnalyzer`                                     |
| <0.1% |    4 MiB |       2 | `<init>()`                                             | `org.codenarc.rule.AbstractAstVisitor`                                          |
| <0.1% |    4 MiB |       2 | `matches(String)`                                      | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    4 MiB |       2 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`      |
| <0.1% | 3.99 MiB |       2 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
| <0.1% |    2 MiB |       1 | `lineNumberForMethod(MethodNode, SourceCode)`          | `org.gmetrics.metric.AbstractMethodMetric`                                      |
| <0.1% |    2 MiB |       1 | `<init>(String, boolean)`                              | `org.codenarc.util.WildcardPattern`                                             |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode, List)`                            | `org.codenarc.rule.AbstractAstVisitorRule`                                      |
| <0.1% |    2 MiB |       1 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                                |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
| <0.1% |    2 MiB |       1 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.convention.NoDefAstVisitor`                                  |
| <0.1% |    2 MiB |       1 | `processMethodOrConstructorCall(MethodCall)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
| <0.1% |    2 MiB |       1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
| <0.1% |    2 MiB |       1 | `visitPropertyExpression(PropertyExpression)`          | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`     |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
| <0.1% |    2 MiB |       1 | `afterBlock()`                                         | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
| <0.1% |    2 MiB |       1 | `visitConstantExpression(ConstantExpression)`          | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`           |
| <0.1% |    2 MiB |       1 | `visitMethodEx(MethodNode)`                            | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |

#### Lines

Lines ranked by contribution to each function's self size.

##### `iterator()` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                   |
| -----: | -------: | ------: | -------------------------- |
| 100.0% | 71.1 MiB |      61 | `java.util.ArrayList:1029` |

##### `<init>()` (`java.util.HashSet`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 26 MiB |      12 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

|      % |     Size | Samples | Location                      |
| -----: | -------: | ------: | ----------------------------- |
| 100.0% | 20.7 MiB |      12 | `java.lang.StringBuilder:475` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|      % |   Size | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 16 MiB |       8 | `org.codenarc.analyzer.AbstractSourceAnalyzer:44` |

##### `doCall(Object)` (`org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3`)

|      % |  Size | Samples | Location                                                                            |
| -----: | ----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% | 8 MiB |       4 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3:112` |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 6 MiB |       3 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:717` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 5.97 MiB |       4 | `org.codenarc.analyzer.SuppressionAnalyzer:37` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |  Size | Samples | Location                                  |
| -----: | ----: | ------: | ----------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.rule.AbstractAstVisitor:39` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:673` |

##### `matches(String)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.util.WildcardPattern:75` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |  Size | Samples | Location                                                                      |
| -----: | ----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% | 4 MiB |       2 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3:47` |

##### `lineNumberForMethod(MethodNode, SourceCode)` (`org.gmetrics.metric.AbstractMethodMetric`)

|      % |  Size | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.gmetrics.metric.AbstractMethodMetric:79` |

##### `<init>(String, boolean)` (`org.codenarc.util.WildcardPattern`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.util.WildcardPattern:39` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractAstVisitorRule:102` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.AbstractRule:141` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % |  Size | Samples | Location                                                                          |
| -----: | ----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor:54` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.convention.NoDefAstVisitor`)

|      % |  Size | Samples | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.NoDefAstVisitor:86` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

|      % |  Size | Samples | Location                                                        |
| -----: | ----: | ------: | --------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor:45` |

##### `visitPropertyExpression(PropertyExpression)` (`org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`)

|      % |  Size | Samples | Location                                                                       |
| -----: | ----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor:46` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`)

|      % |  Size | Samples | Location                                                            |
| -----: | ----: | ------: | ------------------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor:57` |

##### `afterBlock()` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|      % |  Size | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:126` |

##### `visitConstantExpression(ConstantExpression)` (`org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`)

|      % |  Size | Samples | Location                                                                 |
| -----: | ----: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor:51` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|      % |  Size | Samples | Location                                                                 |
| -----: | ----: | ------: | ------------------------------------------------------------------------ |
| 100.0% | 2 MiB |       1 | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor:95` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `iterator()` (`java.util.ArrayList`)

|    % |    Size | Samples | Caller                     | Location                                                |
| ---: | ------: | ------: | -------------------------- | ------------------------------------------------------- |
| 2.8% |   2 MiB |       1 | `visitClass(ClassNode)`    | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
| 1.3% | 972 KiB |       1 | `visitImports(ModuleNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |

##### `<init>()` (`java.util.HashSet`)

|     % |   Size | Samples | Caller                                          | Location                                    |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 46.2% | 12 MiB |       5 | `<init>()`                                      | `org.codenarc.rule.AbstractAstVisitor`      |
|  7.7% |  2 MiB |       1 | `getSuppressWarningsAnnotations(AnnotatedNode)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `toString()` (`java.lang.StringBuilder`)

|    % |  Size | Samples | Caller                   | Location                                          |
| ---: | ----: | ------: | ------------------------ | ------------------------------------------------- |
| 9.6% | 2 MiB |       1 | `getText()`              | `org.codehaus.groovy.ast.expr.PropertyExpression` |
| 9.6% | 2 MiB |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer`       |

##### `isCase(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                                        | Location                                                                        |
| ----: | ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 33.3% | 2 MiB |       1 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.convention.LongLiteralWithLowerCaseLAstVisitor`              |
| 33.3% | 2 MiB |       1 | `doCall(Object)`                              | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| 33.3% | 2 MiB |       1 | `isNotWhitespace(String, int)`                | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`               |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |  Size | Samples | Caller     | Location                                                 |
| ----: | ----: | ------: | ---------- | -------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.EmptyElseBlockAstVisitor`       |
| 50.0% | 2 MiB |       1 | `<init>()` | `org.codenarc.rule.basic.ConstantIfExpressionAstVisitor` |

##### `createRange(Object, Object, boolean, boolean)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|     % |  Size | Samples | Caller                            | Location                                                          |
| ----: | ----: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| 50.0% | 2 MiB |       1 | `isCollectMethodCall(Expression)` | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`          |
| 50.0% | 2 MiB |       1 | `isNotWhitespace(String, int)`    | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |  Size | Samples | Caller                | Location                         |
| -----: | ----: | ------: | --------------------- | -------------------------------- |
| 100.0% | 2 MiB |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codenarc.rule.convention.NoDefAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                                          |
| -----: | ----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`)

|      % |  Size | Samples | Caller                    | Location                               |
| -----: | ----: | ------: | ------------------------- | -------------------------------------- |
| 100.0% | 2 MiB |       1 | `visitMethod(MethodNode)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                                      | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 64.7% | 7.62 GiB |   4,031 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
| 43.1% | 5.08 GiB |   2,629 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
| 36.8% | 4.33 GiB |   2,250 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 32.9% | 3.88 GiB |   2,024 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| 29.6% | 3.48 GiB |   1,839 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 27.4% | 3.22 GiB |   1,691 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
| 27.4% | 3.22 GiB |   1,623 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
| 22.7% | 2.67 GiB |   1,418 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
| 21.8% | 2.57 GiB |   1,356 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 19.4% | 2.28 GiB |   1,197 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 17.0% |    2 GiB |   1,042 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 16.4% | 1.93 GiB |   1,004 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 14.5% | 1.71 GiB |     874 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 14.1% | 1.66 GiB |     863 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.6% | 1.61 GiB |     825 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 13.1% | 1.54 GiB |     784 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 11.9% |  1.4 GiB |     734 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|  8.7% | 1.02 GiB |     526 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`                        |
|  8.6% | 1.02 GiB |     523 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  7.3% |  875 MiB |     447 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                      | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 64.7% | 7.62 GiB |   4,031 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
| 43.1% | 5.08 GiB |   2,629 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| 27.4% | 3.22 GiB |   1,623 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
| 17.0% |    2 GiB |   1,042 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.5% | 1.71 GiB |     874 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 14.1% | 1.66 GiB |     863 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.6% | 1.61 GiB |     825 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 13.1% | 1.54 GiB |     784 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| 11.9% |  1.4 GiB |     734 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|  8.7% | 1.02 GiB |     526 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001393400` |
|  7.3% |  875 MiB |     447 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  5.4% |  647 MiB |     328 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000700138b800` |
|  4.8% |  573 MiB |     287 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  4.3% |  518 MiB |     259 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.5% |  428 MiB |     211 | `matches(String)`                                             | `java.lang.String`                                  |
|  3.5% |  421 MiB |     210 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  3.2% |  380 MiB |     193 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  2.9% |  349 MiB |     177 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  2.7% |  326 MiB |     149 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001448800` |
|  2.6% |  308 MiB |     151 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |

##### Ours

|     % |     Size | Samples | Function                                          | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------ |
| 36.8% | 4.33 GiB |   2,250 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| 32.9% | 3.88 GiB |   2,024 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
| 29.6% | 3.48 GiB |   1,839 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`     |
| 27.4% | 3.22 GiB |   1,691 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                               |
| 22.7% | 2.67 GiB |   1,418 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                               |
| 21.8% | 2.57 GiB |   1,356 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                     |
| 19.4% | 2.28 GiB |   1,197 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractAstVisitor`                                         |
| 16.4% | 1.93 GiB |   1,004 | `visitMethod(MethodNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                         |
|  8.6% | 1.02 GiB |     523 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                       |
|  6.7% |  811 MiB |     418 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`    |
|  4.1% |  492 MiB |     240 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                       |
|  3.9% |  471 MiB |     239 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`     |
|  3.6% |  440 MiB |     213 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  3.6% |  430 MiB |     207 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                    |
|  3.2% |  381 MiB |     196 | `addViolationIfDuplicate(Expression, boolean)`    | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  3.1% |  377 MiB |     194 | `addViolationIfDuplicate(Expression)`             | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                             |
|  2.7% |  320 MiB |     146 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                             |
|  2.7% |  320 MiB |     146 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                             |
|  2.6% |  318 MiB |     145 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |
|  2.4% |  292 MiB |     142 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                                            |
| ----: | -------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 51.6% | 2.23 GiB |   1,165 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 23.6% | 1.02 GiB |     526 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000007001393400` |
| 14.6% |  647 MiB |     328 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700138b800` |
| 10.2% |  451 MiB |     229 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.1% | 3.14 MiB |       2 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % |     Size | Samples | Callee                                           | Location                           |
| ----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 81.9% | 3.17 GiB |   1,651 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 10.4% |  414 MiB |     218 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  7.3% |  290 MiB |     147 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % |     Size | Samples | Callee                                   | Location                           |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 72.6% | 2.53 GiB |   1,338 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
| 27.3% |  971 MiB |     499 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|     % |     Size | Samples | Callee                                                   | Location                           |
| ----: | -------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 99.8% | 3.22 GiB |   1,685 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  0.2% | 5.08 MiB |       4 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |
| <0.1% | 1.34 MiB |       2 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 83.7% | 2.24 GiB |   1,191 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  4.5% |  124 MiB |      63 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  4.5% |  122 MiB |      63 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  2.0% | 55.7 MiB |      29 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  1.5% | 40.8 MiB |      16 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                                |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------------------- |
| 82.7% | 2.12 GiB |   1,112 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
| 11.1% |  292 MiB |     142 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  2.6% | 67.5 MiB |      52 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.0% | 53.1 MiB |      28 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.2% |    6 MiB |       3 | `getAstVisitor()`       | `org.codenarc.rule.convention.VectorIsObsoleteRule`     |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                          | Location                                                            |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------------------- |
| 86.2% | 1.97 GiB |   1,030 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  6.6% |  154 MiB |      78 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.0% |   24 MiB |      12 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`     |
|  0.8% | 18.9 MiB |      10 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  0.8% | 17.7 MiB |       9 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |     Size | Samples | Callee                            | Location                                                              |
| ---: | -------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.8% | 16.9 MiB |       9 | `visitImports(ModuleNode)`        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| 0.6% | 11.3 MiB |       6 | `visitImports(ModuleNode)`        | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| 0.2% |    4 MiB |       2 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |
| 0.1% |    2 MiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`               |
| 0.1% |    2 MiB |       1 | `visitImports(ModuleNode)`        | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`           |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |     Size | Samples | Callee                      | Location                                                            |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------- |
| 84.8% | 1.64 GiB |     850 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  5.7% |  112 MiB |      56 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |
|  1.8% | 35.1 MiB |      18 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                |
|  0.9% |   18 MiB |       9 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`    |
|  0.8% |   16 MiB |       7 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`    |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                      | Location                                                       |
| ---: | -----: | ------: | --------------------------- | -------------------------------------------------------------- |
| 5.0% | 88 MiB |      44 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % |     Size | Samples | Callee                                          | Location                                                     |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| 86.6% | 1.44 GiB |     746 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`            |
|  2.4% | 41.3 MiB |      22 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`   |
|  2.3% | 39.4 MiB |      20 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor` |
|  2.2% |   37 MiB |      19 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                 |
|  1.7% | 28.1 MiB |      13 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`     |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |   Size | Samples | Callee                            | Location                                                              |
| ---: | -----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 1.2% | 20 MiB |       9 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |    Size | Samples | Callee                      | Location                                                        |
| ---: | ------: | ------: | --------------------------- | --------------------------------------------------------------- |
| 8.4% | 133 MiB |      62 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`  |
| 0.1% |   2 MiB |       1 | `visitStatement(Statement)` | `org.codenarc.rule.convention.CouldBeSwitchStatementAstVisitor` |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % |     Size | Samples | Callee                                                           | Location                           |
| ----: | -------: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 93.4% |  973 MiB |     494 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|  3.7% | 38.5 MiB |      12 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  2.9% | 29.7 MiB |      16 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
| <0.1% |  229 KiB |       1 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|     % |    Size | Samples | Callee                                                   | Location                                            |
| ----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------------- |
| 99.5% | 807 MiB |     416 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00` |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  0.2% |   2 MiB |       1 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 492 MiB |     240 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|      % |    Size | Samples | Callee                                   | Location                           |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 471 MiB |     239 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 91.8% | 404 MiB |     194 | `init()`         | `org.codenarc.analyzer.SuppressionAnalyzer` |
|  3.6% |  16 MiB |       8 | `toString()`     | `java.lang.StringBuilder`                   |
|  2.7% |  12 MiB |       6 | `append(String)` | `java.lang.StringBuilder`                   |
|  0.5% |   2 MiB |       1 | `<init>()`       | `java.lang.StringBuilder`                   |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % |    Size | Samples | Callee                               | Location                                    |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------- |
| 99.5% | 428 MiB |     206 | `getAst()`                           | `org.codenarc.source.AbstractSourceCode`    |
|  0.5% |   2 MiB |       1 | `getSuppressedRuleNames(Collection)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `addViolationIfDuplicate(Expression, boolean)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|     % |     Size | Samples | Callee                                   | Location                                            |
| ----: | -------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 73.1% |  278 MiB |     142 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| 24.8% | 94.6 MiB |      50 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  1.6% |    6 MiB |       3 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00` |
|  0.5% |    2 MiB |       1 | `compareEqual(Object, Object)`           | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `addViolationIfDuplicate(Expression)` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

|      % |    Size | Samples | Callee                                         | Location                                           |
| -----: | ------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| 100.0% | 377 MiB |     194 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor` |

##### `visitDeclarationExpression(DeclarationExpression)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % |  Size | Samples | Callee                            | Location                                                              |
| ---: | ----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.6% | 2 MiB |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`)

|     % |    Size | Samples | Callee                                        | Location                                            |
| ----: | ------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| 99.4% | 318 MiB |     145 | `linkToCallSite(Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001448800` |

##### `getNumberOfViolationsWithPriority(int)` (`org.codenarc.results.FileResults`)

|      % |    Size | Samples | Callee                                            | Location                           |
| -----: | ------: | ------: | ------------------------------------------------- | ---------------------------------- |
| 100.0% | 320 MiB |     146 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults` |

##### `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

|      % |    Size | Samples | Callee                           | Location                           |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% | 318 MiB |     145 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`)

|     % |     Size | Samples | Callee                                            | Location                                                                     |
| ----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 43.0% |  126 MiB |      62 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                 |
|  8.2% |   24 MiB |      11 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ClassForNameAstVisitor`                             |
|  6.8% |   20 MiB |      10 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.groovyism.ClosureAsLastMethodParameterAstVisitor`         |
|  6.8% |   20 MiB |       7 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryInstantiationToGetClassAstVisitor` |
|  6.8% | 19.8 MiB |      10 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ExplicitGarbageCollectionAstVisitor`                |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.7% |  930 MiB |     478 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 5.4% |  647 MiB |     328 | `linkToCallSite(Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700138b800`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 4.6% |  553 MiB |     274 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001393400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 4.2% |  509 MiB |     263 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 4.2% |  504 MiB |     255 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.1% |  494 MiB |     252 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001393400`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.7% |  451 MiB |     229 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 3.6% |  436 MiB |     223 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.3% |  395 MiB |     201 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.8% |  334 MiB |     174 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% |  296 MiB |     146 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |  274 MiB |     139 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.7% |  210 MiB |     104 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001448800`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |  104 MiB |       9 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |  102 MiB |      52 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitClassEx(ClassNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                          |
| 0.6% |   76 MiB |      38 | `matches(String)` (`java.lang.String`) ← `isMethodNamed(MethodCallExpression, String, Integer)` (`org.codenarc.util.AstUtil`) ← … ← `linkToCallSite(Object, Object, Object, int, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070013b9400`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodCallExpressionVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |   76 MiB |      37 | `findRegex(Object, Object)` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`) ← `findLineWithDeclaration(ASTNode, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `checkDeclaration(ASTNode, String, String)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodEx(MethodNode)` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
| 0.5% |   66 MiB |      20 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`) ← … ← `linkToCallSite(Object, int, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001448800`) ← `getNumberOfViolationsWithPriority(int, boolean)` (`org.codenarc.results.FileResults`) ← `getNumberOfViolationsWithPriority(int)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% |   64 MiB |      32 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `writeFileViolations(Writer, FileResults)` (`org.codenarc.report.TextReportWriter`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% | 61.4 MiB |      31 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

# Retained heap profile

Retained 82.3 KiB over 111 samples (759 B per sample).

| Category         |      % |     Size | Samples |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 82.3 KiB |     111 |

## Hottest functions

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                    | Location                                                                   |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------- |
| 93.3% | 76.8 KiB |      81 | `linkToCallSite(Object, Object, Object)`    | `java.lang.invoke.Invokers$Holder`                                         |
| 86.9% | 71.5 KiB |      22 | `applyTo(SourceCode)`                       | `org.codenarc.rule.AbstractRule`                                           |
| 86.7% | 71.3 KiB |      19 | `doCall(Object)`                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| 86.6% | 71.2 KiB |      19 | `applyTo(SourceCode, List)`                 | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| 79.0% |   65 KiB |      11 | `visitClass(ClassNode)`                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 79.0% |   65 KiB |       9 | `visitMethod(MethodNode)`                   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 79.0% |   65 KiB |       9 | `visitMethod(MethodNode)`                   | `org.codenarc.rule.AbstractAstVisitor`                                     |
| 79.0% |   65 KiB |       9 | `visitClass(ClassNode)`                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| 77.8% |   64 KiB |       1 | `visitForLoop(ForStatement)`                | `org.codenarc.rule.design.NestedForLoopAstVisitor`                         |
| 12.8% | 10.5 KiB |      54 | `getMetaClass()`                            | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|  7.8% | 6.41 KiB |      11 | `newInstance()`                             | `java.lang.Class`                                                          |
|  7.8% | 6.41 KiB |      11 | `getAstVisitor()`                           | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  4.9% | 4.04 KiB |       2 | `$getStaticMetaClass()`                     | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|  4.9% | 4.04 KiB |       2 | `<init>(String, int)`                       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  4.9% | 4.04 KiB |       2 | `<init>(String)`                            | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|  4.9% | 4.04 KiB |       2 | `<init>()`                                  | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|  3.1% | 2.58 KiB |      22 | `linkToCallSite(Object, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                        |
|  3.1% | 2.58 KiB |      22 | `assertClassImplementsRuleInterface(Class)` | `org.codenarc.ruleset.RuleSetUtil`                                         |
|  3.1% | 2.55 KiB |      21 | `doCall(Object)`                            | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`         |
|  2.8% | 2.31 KiB |      37 | `linkToCallSite(Object, Object)`            | `java.lang.invoke.Invokers$Holder`                                         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % |     Size | Samples | Callee                      | Location                                         |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------------ |
| 99.7% | 71.2 KiB |      19 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`       |
|  0.3% |    192 B |       2 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule` |
|  0.1% |     56 B |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`    |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 71.3 KiB |      19 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % |     Size | Samples | Callee                  | Location                                   |
| ----: | -------: | ------: | ----------------------- | ------------------------------------------ |
| 91.0% | 64.8 KiB |       8 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`     |
|  9.0% | 6.41 KiB |      11 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % |   Size | Samples | Callee                    | Location                                                |
| ----: | -----: | ------: | ------------------------- | ------------------------------------------------------- |
| 99.9% | 65 KiB |       9 | `visitClass(ClassNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
|  0.1% |   56 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.naming.AbstractTypeNameAstVisitor`   |
| <0.1% |   24 B |       1 | `visitClassEx(ClassNode)` | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|      % |   Size | Samples | Callee                    | Location                                          |
| -----: | -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% | 65 KiB |       9 | `visitMethod(MethodNode)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitForLoop(ForStatement)` (`org.codenarc.rule.design.NestedForLoopAstVisitor`)

|      % |   Size | Samples | Callee                                   | Location                           |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 64 KiB |       1 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % |     Size | Samples | Callee          | Location          |
| -----: | -------: | ------: | --------------- | ----------------- |
| 100.0% | 6.41 KiB |      11 | `newInstance()` | `java.lang.Class` |

##### `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`)

|      % |     Size | Samples | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `getMetaClass()` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `<init>(String, int)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % |     Size | Samples | Callee                  | Location                                                          |
| -----: | -------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| 100.0% | 4.04 KiB |       2 | `$getStaticMetaClass()` | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor` |

##### `<init>(String)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`)

|      % |     Size | Samples | Callee                | Location                                                     |
| -----: | -------: | ------: | --------------------- | ------------------------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `<init>(String, int)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

##### `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`)

|      % |     Size | Samples | Callee           | Location                                                     |
| -----: | -------: | ------: | ---------------- | ------------------------------------------------------------ |
| 100.0% | 4.04 KiB |       2 | `<init>(String)` | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor` |

##### `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`)

|      % |     Size | Samples | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.58 KiB |      22 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00` |

##### `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)

|      % |     Size | Samples | Callee                                   | Location                           |
| -----: | -------: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% | 2.55 KiB |      21 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.8% |   64 KiB |       1 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitForLoop(ForStatement)` (`org.codenarc.rule.design.NestedForLoopAstVisitor`) ← … ← `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                             |
|  4.9% | 4.04 KiB |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`) ← `<init>(String, int)` (`org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`) ← `<init>(String)` ← `<init>()` (`org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`) ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                        |
|  3.1% | 2.55 KiB |      21 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700112cc00`) ← `assertClassImplementsRuleInterface(Class)` (`org.codenarc.ruleset.RuleSetUtil`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% | 2.07 KiB |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                    |
|  1.6% | 1.28 KiB |       5 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.7% |    584 B |      13 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.6% |    528 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.design.InstanceofAstVisitor`) ← … ← `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) |
|  0.3% |    280 B |       5 | `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% |    192 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← `<init>()` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `createSourceAnalyzer()` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |    128 B |       3 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.1% |    120 B |       1 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitBinaryExpression(BinaryExpression)` (`org.codenarc.rule.basic.BrokenOddnessCheckAstVisitor`) ← … ← `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                              |
|  0.1% |    120 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.FieldReferenceAstVisitor`) ← … ← `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                 |
|  0.1% |    112 B |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← `$getStaticMetaClass()` (`org.codenarc.rule.naming.PackageNameAstVisitor`) ← `<init>()` ← … ← `newInstance()` (`java.lang.Class`) ← `getAstVisitor()` (`org.codenarc.rule.AbstractAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |    112 B |       2 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |    104 B |       2 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |     88 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `loadRules()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<init>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |     72 B |       1 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `visitPropertyExpression(PropertyExpression)` (`org.codenarc.rule.FieldReferenceAstVisitor`) ← … ← `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← … ← `visitMethod(MethodNode)` ← `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← … ← `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`) ← `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`) ← `applyVisitor(AstVisitor, SourceCode)` (`org.codenarc.rule.AbstractSharedAstVisitorRule`) ← `applyTo(SourceCode, List)` ← `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)                     |
|  0.1% |     64 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `registerPluginForClassName(String)` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.CodeNarcRunner$_registerPluginsForClassNames_closure1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |     56 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `<init>(Object[], String[])` (`org.codehaus.groovy.runtime.GStringImpl`) ← `<clinit>()` (`org.codenarc.ruleregistry.PropertiesFileRuleRegistry`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.ruleregistry.RuleRegistryInitializer`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `initializeRuleRegistry()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`)                                                                                                                                                                                                                                                                                |
|  0.1% |     56 B |       1 | `getMetaClass()` (`org.codehaus.groovy.reflection.ClassInfo`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `<clinit>()` (`org.codenarc.rule.dry.DuplicateNumberLiteralRule`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
