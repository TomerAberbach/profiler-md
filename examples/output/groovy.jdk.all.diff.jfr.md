# Sampling profile diff

367 samples → 311 samples (-56 samples, -15.3%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library | -14.5% |   -52 | 97.5% → 98.4% | 358 → 306 |
| Ours             | -44.4% |    -4 |   2.5% → 1.6% |     9 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                        | Location                                                             |
| -----: | ----: | ----------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractFieldVisitor`                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `charUnbox(Object)`                             | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getStaticMetaClass()`                         | `org.gmetrics.result.NumberMetricResult`                             |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`      |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `handleMapExpression(MapEntryExpression)`       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`    |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `intUnbox(Object)`                              | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### Ours

| Change | Delta |           % | Samples | Function                                        | Location                                                          |
| -----: | ----: | ----------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractFieldVisitor`                          |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `$getStaticMetaClass()`                         | `org.gmetrics.result.NumberMetricResult`                          |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`   |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `handleMapExpression(MapEntryExpression)`       | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor` |

##### Standard library

| Change | Delta |           % | Samples | Function            | Location                                                             |
| -----: | ----: | ----------: | ------: | ------------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `charUnbox(Object)` | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|    new |    +1 | 0.0% → 0.3% |   0 → 1 | `intUnbox(Object)`  | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                             | Location                                                        |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`             | `java.lang.invoke.Invokers$Holder`                              |
|  -33.3% |    -1 | 0.8% → 0.6% |   3 → 2 | `getClass()`                                         | `java.lang.Object`                                              |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClass(ClassNode)`                              | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.util.WildcardPattern$_closure1`                   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitPropertyExpression(PropertyExpression)`        | `org.codehaus.groovy.ast.CodeVisitorSupport`                    |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitImports(ModuleNode)`                           | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Metric, MetricLevel, AbcVector, Integer)`    | `org.gmetrics.metric.abc.result.AbcMetricResult`                |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `handleExpressionContainingOperation(Expression)`    | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                            | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isMethodCallOnObject(Expression, String)`           | `org.codenarc.util.AstUtil`                                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isOdd(int)`                                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `sourceLinesBetween(SourceCode, int, int, int, int)` | `org.codenarc.util.SourceCodeUtil`                              |

##### Ours

|  Change | Delta |           % | Samples | Function                                             | Location                                                        |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `doCall(Object)`                                     | `org.codenarc.util.WildcardPattern$_closure1`                   |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitImports(ModuleNode)`                           | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `<init>(Metric, MetricLevel, AbcVector, Integer)`    | `org.gmetrics.metric.abc.result.AbcMetricResult`                |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `handleExpressionContainingOperation(Expression)`    | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitMethod(MethodNode)`                            | `org.gmetrics.metric.abc.AbcAstVisitor`                         |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isMethodCallOnObject(Expression, String)`           | `org.codenarc.util.AstUtil`                                     |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `isOdd(int)`                                         | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `sourceLinesBetween(SourceCode, int, int, int, int)` | `org.codenarc.util.SourceCodeUtil`                              |

##### Standard library

|  Change | Delta |           % | Samples | Function                                      | Location                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | ------------------------------------------------- |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                |
|  -33.3% |    -1 | 0.8% → 0.6% |   3 → 2 | `getClass()`                                  | `java.lang.Object`                                |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitClass(ClassNode)`                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| removed |    -1 | 0.3% → 0.0% |   1 → 0 | `visitPropertyExpression(PropertyExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport`      |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                | Location                                                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|     new |   +10 |   0.0% → 3.2% |  0 → 10 | `linkToCallSite(Object, Object)`                                        | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                            |
|  +10.1% |    +8 | 21.5% → 28.0% | 79 → 87 | `measureRuleProcessingTime(Rule, Closure)`                              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                 |
|     new |    +8 |   0.0% → 2.6% |   0 → 8 | `linkToCallSite(Object, long, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000700138b800`                            |
|     new |    +7 |   0.0% → 2.3% |   0 → 7 | `linkToCallSite(Object, Object, long, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`                            |
|     new |    +5 |   0.0% → 1.6% |   0 → 5 | `linkToCallSite(Object, int, Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x0000007001448800`                            |
|     new |    +4 |   0.0% → 1.3% |   0 → 4 | `linkToCallSite(Object, Object, Object, int, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x00000070013b9400`                            |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `doCall(Object)`                                                        | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1` |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int, boolean)`                       | `org.codenarc.results.FileResults`                                             |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int)`                                | `org.codenarc.results.FileResults`                                             |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `linkToCallSite(Object, Object, int, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000700113ac00`                            |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                           |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `isSpockMethod(MethodCallExpression)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                    |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                    |
| +100.0% |    +2 |   0.5% → 1.3% |   2 → 4 | `<init>(Reader)`                                                        | `org.codenarc.ruleset.XmlReaderRuleSet`                                        |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `doCall(Object)`                                                        | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                |
|  +15.4% |    +2 |   3.5% → 4.8% | 13 → 15 | `visitBinaryExpression(BinaryExpression)`                               | `org.codehaus.groovy.ast.CodeVisitorSupport`                                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitIfElse(IfStatement)`                                              | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                              |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitClassEx(ClassNode)`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                        |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                       |

##### Ours

|  Change | Delta |             % | Samples | Function                                                                | Location                                                                                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|  +10.1% |    +8 | 21.5% → 28.0% | 79 → 87 | `measureRuleProcessingTime(Rule, Closure)`                              | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                                 |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `doCall(Object)`                                                        | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                                 |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int, boolean)`                       | `org.codenarc.results.FileResults`                                                                             |
| +300.0% |    +3 |   0.3% → 1.3% |   1 → 4 | `getNumberOfViolationsWithPriority(int)`                                | `org.codenarc.results.FileResults`                                                                             |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `recordMethodColumnAndSourceLineForClosureBlocks(MethodCallExpression)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                           |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `isSpockMethod(MethodCallExpression)`                                   | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
|     new |    +3 |   0.0% → 1.0% |   0 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                                    |
| +100.0% |    +2 |   0.5% → 1.3% |   2 → 4 | `<init>(Reader)`                                                        | `org.codenarc.ruleset.XmlReaderRuleSet`                                                                        |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `doCall(Object)`                                                        | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                                                                |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitMethodCallExpression(MethodCallExpression)`                       | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`                                                   |
| +200.0% |    +2 |   0.3% → 1.0% |   1 → 3 | `visitClassEx(ClassNode)`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`                                                        |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`                         | `org.codenarc.rule.formatting.BracesForMethodAstVisitor`                                                       |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitPropertyExpression(PropertyExpression)`                           | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                                          |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `checkType(String, ASTNode)`                                            | `org.codenarc.rule.ClassReferenceAstVisitor`                                                                   |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitVariableExpression(VariableExpression)`                           | `org.codenarc.rule.ClassReferenceAstVisitor`                                                                   |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`                 | `org.codenarc.rule.ClassReferenceAstVisitor`                                                                   |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `checkIfThereIsBlankLineAfterOpeningBrace(ClassNode)`                   | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                                              |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitClassComplete(ClassNode)`                                         | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                                              |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `doCall(Object)`                                                        | `org.codenarc.rule.formatting.IndentationAstVisitor$_recordMethodColumnAndSourceLineForClosureBlocks_closure6` |
|     new |    +2 |   0.0% → 0.6% |   0 → 2 | `visitBinaryExpression(BinaryExpression)`                               | `org.codenarc.rule.unnecessary.UnnecessaryToStringAstVisitor`                                                  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------- |
|     new |   +10 | 0.0% → 3.2% |  0 → 10 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                  |
|     new |    +8 | 0.0% → 2.6% |   0 → 8 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000700138b800`                  |
|     new |    +7 | 0.0% → 2.3% |   0 → 7 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`                  |
|     new |    +5 | 0.0% → 1.6% |   0 → 5 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001448800`                  |
|     new |    +4 | 0.0% → 1.3% |   0 → 4 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013b9400`                  |
|     new |    +3 | 0.0% → 1.0% |   0 → 3 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700113ac00`                  |
|  +15.4% |    +2 | 3.5% → 4.8% | 13 → 15 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`                         |
| +200.0% |    +2 | 0.3% → 1.0% |   1 → 3 | `visitIfElse(IfStatement)`                                    | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|     new |    +2 | 0.0% → 0.6% |   0 → 2 | `booleanUnbox(Object)`                                        | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|  +10.0% |    +1 | 2.7% → 3.5% | 10 → 11 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`                           |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `call(Object)`                                                | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `charUnbox(Object)`                                           | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `linkToCallSite(Object, int, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001458c00`                  |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `callConstructor(Object, Object)`                             | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `callGetProperty(Object)`                                     | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001469c00`                  |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `callGroovyObjectGetProperty(Object)`                         | `org.codehaus.groovy.runtime.callsite.AbstractCallSite`              |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `intUnbox(Object)`                                            | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `visitField(FieldNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                    |
|     new |    +1 | 0.0% → 0.3% |   0 → 1 | `contains(Object)`                                            | `java.util.ArrayList`                                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -15.0% |   -38 | 68.9% → 69.1% | 253 → 215 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                                         |
|  -23.7% |   -36 | 41.4% → 37.3% | 152 → 116 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                         |
|  -27.9% |   -29 | 28.3% → 24.1% |  104 → 75 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                           |
|  -40.3% |   -29 | 19.6% → 13.8% |   72 → 43 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -34.1% |   -28 | 22.3% → 17.4% |   82 → 54 | `visitClass(ClassNode)`                                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -29.0% |   -27 | 25.3% → 21.2% |   93 → 66 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|  -39.7% |   -27 | 18.5% → 13.2% |   68 → 41 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -32.8% |   -19 | 15.8% → 12.5% |   58 → 39 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -22.0% |   -18 | 22.3% → 20.6% |   82 → 64 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                   |
|  -30.5% |   -18 | 16.1% → 13.2% |   59 → 41 | `getAst()`                                                    | `org.codenarc.source.AbstractSourceCode`                                   |
|  -45.7% |   -16 |   9.5% → 6.1% |   35 → 19 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                         |
|  -30.2% |   -16 | 14.4% → 11.9% |   53 → 37 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -28.8% |   -15 | 14.2% → 11.9% |   52 → 37 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
|  -25.9% |   -14 | 14.7% → 12.9% |   54 → 40 | `init()`                                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|  -14.4% |   -14 | 26.4% → 26.7% |   97 → 83 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                         |
|  -40.0% |   -12 |   8.2% → 5.8% |   30 → 18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                        |
| removed |   -12 |   3.3% → 0.0% |    12 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00`                        |
| removed |   -11 |   3.0% → 0.0% |    11 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                        |
|   -9.2% |   -10 | 29.7% → 31.8% |  109 → 99 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  -21.3% |   -10 | 12.8% → 11.9% |   47 → 37 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                |

##### Ours

|  Change | Delta |             % |  Samples | Function                                       | Location                                                                                     |
| ------: | ----: | ------------: | -------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -27.9% |   -29 | 28.3% → 24.1% | 104 → 75 | `applyTo(SourceCode)`                          | `org.codenarc.rule.AbstractRule`                                                             |
|  -34.1% |   -28 | 22.3% → 17.4% |  82 → 54 | `visitClass(ClassNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  -29.0% |   -27 | 25.3% → 21.2% |  93 → 66 | `applyTo(SourceCode, List)`                    | `org.codenarc.rule.AbstractAstVisitorRule`                                                   |
|  -39.7% |   -27 | 18.5% → 13.2% |  68 → 41 | `visitMethod(MethodNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                                                       |
|  -22.0% |   -18 | 22.3% → 20.6% |  82 → 64 | `init()`                                       | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -30.5% |   -18 | 16.1% → 13.2% |  59 → 41 | `getAst()`                                     | `org.codenarc.source.AbstractSourceCode`                                                     |
|  -25.9% |   -14 | 14.7% → 12.9% |  54 → 40 | `init()`                                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|   -9.2% |   -10 | 29.7% → 31.8% | 109 → 99 | `doCall(Object)`                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                   |
|  -21.3% |   -10 | 12.8% → 11.9% |  47 → 37 | `isRuleSuppressed(Rule)`                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                                  |
|  -31.6% |    -6 |   5.2% → 4.2% |  19 → 13 | `doCall(Object)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`                  |
|  -62.5% |    -5 |   2.2% → 1.0% |    8 → 3 | `applyVisitor(AstVisitor, SourceCode)`         | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
|  -83.3% |    -5 |   1.6% → 0.3% |    6 → 1 | `visitBlockStatement(BlockStatement)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
|  -83.3% |    -5 |   1.6% → 0.3% |    6 → 1 | `addViolationIfDuplicate(Expression, boolean)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
|  -83.3% |    -5 |   1.6% → 0.3% |    6 → 1 | `addViolationIfDuplicate(Expression)`          | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                           |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `doCall(Object)`                               | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`                           |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `doCall(Object)`                               | `org.codenarc.util.WildcardPattern$_closure1`                                                |
| removed |    -4 |   1.1% → 0.0% |    4 → 0 | `<init>(String, boolean)`                      | `org.codenarc.util.WildcardPattern`                                                          |
|  -80.0% |    -4 |   1.4% → 0.3% |    5 → 1 | `doCall(Object)`                               | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
|  -66.7% |    -4 |   1.6% → 0.6% |    6 → 2 | `checkDeclaration(ASTNode, String, String)`    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                          |
|   -6.8% |    -4 | 16.1% → 17.7% |  59 → 55 | `collectViolations(SourceCode, RuleSet)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                               |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                         | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------- |
|  -15.0% |   -38 | 68.9% → 69.1% | 253 → 215 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
|  -23.7% |   -36 | 41.4% → 37.3% | 152 → 116 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
|  -40.3% |   -29 | 19.6% → 13.8% |   72 → 43 | `visitClass(ClassNode)`                                          | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -32.8% |   -19 | 15.8% → 12.5% |   58 → 39 | `visitMethod(MethodNode)`                                        | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -45.7% |   -16 |   9.5% → 6.1% |   35 → 19 | `linkToCallSite(Object, Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -30.2% |   -16 | 14.4% → 11.9% |   53 → 37 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -28.8% |   -15 | 14.2% → 11.9% |   52 → 37 | `visitBlockStatement(BlockStatement)`                            | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -14.4% |   -14 | 26.4% → 26.7% |   97 → 83 | `linkToCallSite(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  -40.0% |   -12 |   8.2% → 5.8% |   30 → 18 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| removed |   -12 |   3.3% → 0.0% |    12 → 0 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00` |
| removed |   -11 |   3.0% → 0.0% |    11 → 0 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00` |
|  -50.0% |    -7 |   3.8% → 2.3% |    14 → 7 | `visitArgumentlistExpression(ArgumentListExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  -70.0% |    -7 |   2.7% → 1.0% |    10 → 3 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  -85.7% |    -6 |   1.9% → 0.3% |     7 → 1 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                  |
|  -71.4% |    -5 |   1.9% → 0.6% |     7 → 2 | `loadClass(String)`                                              | `java.lang.ClassLoader`                             |
| removed |    -5 |   1.4% → 0.0% |     5 → 0 | `linkToCallSite(Object, Object, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000040113ac00` |
|  -50.0% |    -5 |   2.7% → 1.6% |    10 → 5 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -5 |   1.4% → 0.0% |     5 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000004013bc400` |
| removed |    -5 |   1.4% → 0.0% |     5 → 0 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000040138b000` |
|  -60.0% |    -3 |   1.4% → 0.6% |     5 → 2 | `<clinit>()`                                                     | `groovy.lang.Closure`                               |

# Allocated heap profile diff

Allocated 11.9 GiB → 11.8 GiB (-141.696 MiB, -1.2%) over 6,323 samples → 6,315 samples (1.93 MiB → 1.91 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -1.1% | -132.669 MiB | 99.1% → 99.2% | 11.8 GiB → 11.7 GiB | 6,223 → 6,219 |
| Ours             |  -8.5% |   -9.026 MiB |   0.9% → 0.8% |  106 MiB → 97.2 MiB |       53 → 50 |
| Unknown          |  -1.3% |       -464 B |         <0.1% |   34.4 KiB → 34 KiB |       47 → 46 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |                Size | Samples | Function                                                         | Location                                                                        |
| ------: | ---------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|     new | +7.996 MiB |  0.0% → 0.1% |         0 B → 8 MiB |   0 → 4 | `doCall(Object)`                                                 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| +100.0% | +7.995 MiB |         0.1% |      8 MiB → 16 MiB |   3 → 8 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
|     new |  +3.99 MiB | 0.0% → <0.1% |      0 B → 3.99 MiB |   0 → 2 | `markVariableAsReferenced(String, VariableExpression)`           | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|  +21.9% | +3.728 MiB |  0.1% → 0.2% |   17 MiB → 20.7 MiB | 13 → 12 | `toString()`                                                     | `java.lang.StringBuilder`                                                       |
|   +3.8% | +2.618 MiB |         0.6% | 68.5 MiB → 71.1 MiB | 57 → 61 | `iterator()`                                                     | `java.util.ArrayList`                                                           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `processMethodOrConstructorCall(MethodCall)`                     | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `afterBlock()`                                                   | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitPropertyExpression(PropertyExpression)`                    | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`     |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `setDisabledRulesByLine(int)`                                    | `org.codenarc.plugin.disablerules.LookupTable`                                  |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.abc.AbcMetric`                                             |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)`              | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `getNumberOfViolationsWithPriority(int, boolean)`                | `org.codenarc.results.FileResults`                                              |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`                     |
|     new | +1.999 MiB | 0.0% → <0.1% |         0 B → 2 MiB |   0 → 1 | `visitStatement(Statement)`                                      | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |

##### Standard library

| Change |        Delta |           % |                Size | Samples | Function     | Location                  |
| -----: | -----------: | ----------: | ------------------: | ------: | ------------ | ------------------------- |
| +21.9% |   +3.728 MiB | 0.1% → 0.2% |   17 MiB → 20.7 MiB | 13 → 12 | `toString()` | `java.lang.StringBuilder` |
|  +3.8% |   +2.618 MiB |        0.6% | 68.5 MiB → 71.1 MiB | 57 → 61 | `iterator()` | `java.util.ArrayList`     |
|  +0.4% | +118.484 KiB |        0.2% |   25.9 MiB → 26 MiB | 14 → 12 | `<init>()`   | `java.util.HashSet`       |

##### Ours

|  Change |      Delta |            % |           Size | Samples | Function                                                         | Location                                                                        |
| ------: | ---------: | -----------: | -------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|     new | +7.996 MiB |  0.0% → 0.1% |    0 B → 8 MiB |   0 → 4 | `doCall(Object)`                                                 | `org.codenarc.util.WildcardPattern$_convertStringWithWildcardsToRegex_closure3` |
| +100.0% | +7.995 MiB |         0.1% | 8 MiB → 16 MiB |   3 → 8 | `collectViolations(SourceCode, RuleSet)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                  |
|     new |  +3.99 MiB | 0.0% → <0.1% | 0 B → 3.99 MiB |   0 → 2 | `markVariableAsReferenced(String, VariableExpression)`           | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `processMethodOrConstructorCall(MethodCall)`                     | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                        |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                    |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`                |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `afterBlock()`                                                   | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                             |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitConstantExpression(ConstantExpression)`                    | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`           |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitPropertyExpression(PropertyExpression)`                    | `org.codenarc.rule.unnecessary.UnnecessarySafeNavigationOperatorAstVisitor`     |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `setDisabledRulesByLine(int)`                                    | `org.codenarc.plugin.disablerules.LookupTable`                                  |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitMethodEx(MethodNode)`                                      | `org.codenarc.rule.design.AssignmentToStaticFieldFromInstanceMethodAstVisitor`  |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.abc.AbcMetric`                                             |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `flexibleCheckForCorrectColumn(ASTNode, String, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`                            |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)`              | `org.codenarc.rule.naming.VariableNameAstVisitor`                               |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `getNumberOfViolationsWithPriority(int, boolean)`                | `org.codenarc.results.FileResults`                                              |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `calculate(MethodNode, SourceCode)`                              | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`                     |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitStatement(Statement)`                                      | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                  |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitClassEx(ClassNode)`                                        | `org.codenarc.rule.exceptions.ExceptionExtendsErrorAstVisitor`                  |
|     new | +1.999 MiB | 0.0% → <0.1% |    0 B → 2 MiB |   0 → 1 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codenarc.rule.convention.MethodParameterTypeRequiredAstVisitor`            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |      Delta |            % |             Size | Samples | Function                                                      | Location                                                                |
| ------: | ---------: | -----------: | ---------------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -71.4% | -9.995 MiB | 0.1% → <0.1% |   14 MiB → 4 MiB |   7 → 2 | `createRange(Object, Object, boolean, boolean)`               | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                     |
| removed | -5.997 MiB | <0.1% → 0.0% |      6 MiB → 0 B |   3 → 0 | `record(Object, int)`                                         | `org.codehaus.groovy.runtime.powerassert.ValueRecorder`                 |
|  -50.0% | -3.998 MiB | 0.1% → <0.1% |    8 MiB → 4 MiB |   4 → 2 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                  |
| removed | -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `addViolation(ASTNode, String)`                               | `org.codenarc.rule.AbstractAstVisitor`                                  |
|  -40.0% | -3.998 MiB | 0.1% → <0.1% |   10 MiB → 6 MiB |   5 → 3 | `isCase(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                     |
| removed | -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `sourceLineAndNumberForNonStarImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                          |
| removed | -3.997 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `filter(Predicate)`                                           | `java.util.stream.ReferencePipeline`                                    |
|  -66.7% | -3.995 MiB |        <0.1% | 5.99 MiB → 2 MiB |   3 → 1 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                        |
|  -33.3% | -1.999 MiB |        <0.1% |    6 MiB → 4 MiB |   3 → 2 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                                     |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `<init>()`                                                    | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`   |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`       |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBlockStatement(BlockStatement)`                         | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`         |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                   |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `processParameters(Parameter[], String)`                      | `org.codenarc.rule.naming.ParameterNameAstVisitor`                      |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`                |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitClosureExpression(ClosureExpression)`                   | `org.codenarc.rule.ClassReferenceAstVisitor`                            |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`          |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor` |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `removeAnyViolationsForSameLine(int)`                         | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`          |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitField(FieldNode)`                                       | `org.codenarc.rule.design.FinalClassWithProtectedMemberAstVisitor`      |

##### Standard library

|  Change |      Delta |            % |           Size | Samples | Function                                        | Location                                                |
| ------: | ---------: | -----------: | -------------: | ------: | ----------------------------------------------- | ------------------------------------------------------- |
|  -71.4% | -9.995 MiB | 0.1% → <0.1% | 14 MiB → 4 MiB |   7 → 2 | `createRange(Object, Object, boolean, boolean)` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| removed | -5.997 MiB | <0.1% → 0.0% |    6 MiB → 0 B |   3 → 0 | `record(Object, int)`                           | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |
|  -40.0% | -3.998 MiB | 0.1% → <0.1% | 10 MiB → 6 MiB |   5 → 3 | `isCase(Object, Object)`                        | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| removed | -3.997 MiB | <0.1% → 0.0% |    4 MiB → 0 B |   2 → 0 | `filter(Predicate)`                             | `java.util.stream.ReferencePipeline`                    |
| removed | -1.999 MiB | <0.1% → 0.0% |    2 MiB → 0 B |   1 → 0 | `<init>()`                                      | `org.codehaus.groovy.runtime.powerassert.ValueRecorder` |

##### Ours

|  Change |      Delta |            % |             Size | Samples | Function                                                      | Location                                                                              |
| ------: | ---------: | -----------: | ---------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -50.0% | -3.998 MiB | 0.1% → <0.1% |    8 MiB → 4 MiB |   4 → 2 | `<init>()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                                |
| removed | -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `addViolation(ASTNode, String)`                               | `org.codenarc.rule.AbstractAstVisitor`                                                |
| removed | -3.998 MiB | <0.1% → 0.0% |      4 MiB → 0 B |   2 → 0 | `sourceLineAndNumberForNonStarImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                                        |
|  -66.7% | -3.995 MiB |        <0.1% | 5.99 MiB → 2 MiB |   3 → 1 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                                      |
|  -33.3% | -1.999 MiB |        <0.1% |    6 MiB → 4 MiB |   3 → 2 | `matches(String)`                                             | `org.codenarc.util.WildcardPattern`                                                   |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `<init>()`                                                    | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`                 |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.convention.MethodReturnTypeRequiredAstVisitor`                     |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBlockStatement(BlockStatement)`                         | `org.codenarc.rule.formatting.SpaceAfterClosingBraceAstVisitor`                       |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                                 |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `processParameters(Parameter[], String)`                      | `org.codenarc.rule.naming.ParameterNameAstVisitor`                                    |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`                              |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitClosureExpression(ClosureExpression)`                   | `org.codenarc.rule.ClassReferenceAstVisitor`                                          |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                        |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`               |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `removeAnyViolationsForSameLine(int)`                         | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                        |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitField(FieldNode)`                                       | `org.codenarc.rule.design.FinalClassWithProtectedMemberAstVisitor`                    |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBinaryExpression(BinaryExpression)`                     | `org.gmetrics.metric.abc.AbcAstVisitor`                                               |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `doCall(Object)`                                              | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3` |
| removed | -1.999 MiB | <0.1% → 0.0% |      2 MiB → 0 B |   1 → 0 | `visitBlockStatement(BlockStatement)`                         | `org.codenarc.rule.size.NestedBlockDepthAstVisitor`                                   |
|  -50.0% | -1.999 MiB |        <0.1% |    4 MiB → 2 MiB |   2 → 1 | `<init>(String, boolean)`                                     | `org.codenarc.util.WildcardPattern`                                                   |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |   +1.022 GiB |   0.0% → 8.7% |      0 B → 1.02 GiB |       0 → 526 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000007001393400`                                 |
|     new | +646.695 MiB |   0.0% → 5.4% |       0 B → 647 MiB |       0 → 328 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000700138b800`                                 |
|     new | +325.744 MiB |   0.0% → 2.7% |       0 B → 326 MiB |       0 → 149 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001448800`                                 |
|     new | +270.857 MiB |   0.0% → 2.2% |       0 B → 271 MiB |       0 → 131 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070013b9400`                                 |
|     new |  +257.41 MiB |   0.0% → 2.1% |       0 B → 257 MiB |       0 → 191 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                                 |
|   +4.0% | +128.343 MiB | 26.0% → 27.4% |  3.1 GiB → 3.22 GiB | 1,567 → 1,623 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                                                  |
| +492.3% | +127.936 MiB |   0.2% → 1.3% |    26 MiB → 154 MiB |       13 → 12 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`                |
|  +63.7% | +101.948 MiB |   1.3% → 2.2% |   160 MiB → 262 MiB |       80 → 66 | `writeFileViolations(Writer, FileResults)`                    | `org.codenarc.report.TextReportWriter`                                              |
|     new |   +84.43 MiB |   0.0% → 0.7% |      0 B → 84.4 MiB |        0 → 41 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001469c00`                                 |
|  +18.9% |   +82.38 MiB |   3.6% → 4.3% |   436 MiB → 518 MiB |     213 → 259 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|     new |  +52.728 MiB |   0.0% → 0.4% |      0 B → 52.7 MiB |        0 → 30 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001402800`                                 |
| +325.0% |  +51.974 MiB |   0.1% → 0.6% |     16 MiB → 68 MiB |        8 → 12 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`             |
|  +14.8% |  +48.945 MiB |   2.7% → 3.2% |   331 MiB → 380 MiB |     166 → 193 | `findRegex(Object, Object)`                                   | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                 |
|  +38.2% |  +44.351 MiB |   1.0% → 1.3% |   116 MiB → 160 MiB |       59 → 75 | `checkNode(ASTNode)`                                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                      |
|  +25.6% |  +43.975 MiB |   1.4% → 1.8% |   172 MiB → 216 MiB |      86 → 107 | `doCall(Object)`                                              | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|  +11.3% |  +42.609 MiB |   3.1% → 3.5% |   378 MiB → 421 MiB |     187 → 210 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|   +7.8% |  +41.281 MiB |   4.4% → 4.8% |   532 MiB → 573 MiB |     250 → 287 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`                                        |
|   +9.8% |  +39.073 MiB |   3.3% → 3.6% |   401 MiB → 440 MiB |     199 → 213 | `isRuleSuppressed(Rule)`                                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|   +3.8% |  +38.538 MiB |   8.2% → 8.6% | 1002 MiB → 1.02 GiB |     507 → 523 | `init()`                                                      | `org.codenarc.source.AbstractSourceCode`                                            |
|     new |  +35.279 MiB |   0.0% → 0.3% |      0 B → 35.3 MiB |        0 → 19 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700113ac00`                                 |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                         | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------- | --------------------------------------------------- |
|     new |   +1.022 GiB |   0.0% → 8.7% |      0 B → 1.02 GiB |       0 → 526 | `linkToCallSite(Object, Object, long, Object)`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001393400` |
|     new | +646.695 MiB |   0.0% → 5.4% |       0 B → 647 MiB |       0 → 328 | `linkToCallSite(Object, long, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000700138b800` |
|     new | +325.744 MiB |   0.0% → 2.7% |       0 B → 326 MiB |       0 → 149 | `linkToCallSite(Object, int, Object, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x0000007001448800` |
|     new | +270.857 MiB |   0.0% → 2.2% |       0 B → 271 MiB |       0 → 131 | `linkToCallSite(Object, Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x00000070013b9400` |
|     new |  +257.41 MiB |   0.0% → 2.1% |       0 B → 257 MiB |       0 → 191 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00` |
|   +4.0% | +128.343 MiB | 26.0% → 27.4% |  3.1 GiB → 3.22 GiB | 1,567 → 1,623 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
|     new |   +84.43 MiB |   0.0% → 0.7% |      0 B → 84.4 MiB |        0 → 41 | `linkToCallSite(Object, Object, Object, Object, int, Object)`    | `java.lang.invoke.LambdaForm$MH.0x0000007001469c00` |
|  +18.9% |   +82.38 MiB |   3.6% → 4.3% |   436 MiB → 518 MiB |     213 → 259 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|     new |  +52.728 MiB |   0.0% → 0.4% |      0 B → 52.7 MiB |        0 → 30 | `linkToCallSite(Object, Object, int, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$MH.0x0000007001402800` |
|  +14.8% |  +48.945 MiB |   2.7% → 3.2% |   331 MiB → 380 MiB |     166 → 193 | `findRegex(Object, Object)`                                      | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  +11.3% |  +42.609 MiB |   3.1% → 3.5% |   378 MiB → 421 MiB |     187 → 210 | `visitArgumentlistExpression(ArgumentListExpression)`            | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|   +7.8% |  +41.281 MiB |   4.4% → 4.8% |   532 MiB → 573 MiB |     250 → 287 | `visitBinaryExpression(BinaryExpression)`                        | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|     new |  +35.279 MiB |   0.0% → 0.3% |      0 B → 35.3 MiB |        0 → 19 | `linkToCallSite(Object, Object, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000700113ac00` |
| +113.4% |  +31.058 MiB |   0.2% → 0.5% | 27.4 MiB → 58.4 MiB |       15 → 21 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   +2.0% |  +30.972 MiB | 12.7% → 13.1% | 1.51 GiB → 1.54 GiB |     770 → 784 | `visitExpressionStatement(ExpressionStatement)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  +29.4% |  +24.249 MiB |   0.7% → 0.9% |  82.6 MiB → 107 MiB |       40 → 55 | `iterator()`                                                     | `java.util.AbstractSequentialList`                  |
|   +7.7% |  +21.934 MiB |   2.3% → 2.6% |   286 MiB → 308 MiB |     141 → 151 | `visitClosureExpression(ClosureExpression)`                      | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +51.0% |  +20.255 MiB |   0.3% → 0.5% |   39.7 MiB → 60 MiB |       22 → 29 | `matchRegex(Object, Object)`                                     | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|  +23.3% |  +14.456 MiB |   0.5% → 0.6% | 62.1 MiB → 76.6 MiB |       36 → 46 | `add(Object)`                                                    | `java.util.HashSet`                                 |
|  +21.0% |  +10.224 MiB |   0.4% → 0.5% |   48.8 MiB → 59 MiB |            35 | `toString()`                                                     | `java.lang.StringBuilder`                           |

##### Ours

|  Change |        Delta |           % |                Size |   Samples | Function                                          | Location                                                                            |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| +492.3% | +127.936 MiB | 0.2% → 1.3% |    26 MiB → 154 MiB |   13 → 12 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure4`                |
|  +63.7% | +101.948 MiB | 1.3% → 2.2% |   160 MiB → 262 MiB |   80 → 66 | `writeFileViolations(Writer, FileResults)`        | `org.codenarc.report.TextReportWriter`                                              |
| +325.0% |  +51.974 MiB | 0.1% → 0.6% |     16 MiB → 68 MiB |    8 → 12 | `doCall(Object)`                                  | `org.codenarc.report.TextReportWriter$_writePackageViolations_closure2`             |
|  +38.2% |  +44.351 MiB | 1.0% → 1.3% |   116 MiB → 160 MiB |   59 → 75 | `checkNode(ASTNode)`                              | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                      |
|  +25.6% |  +43.975 MiB | 1.4% → 1.8% |   172 MiB → 216 MiB |  86 → 107 | `doCall(Object)`                                  | `org.codenarc.results.DirectoryResults$_getNumberOfViolationsWithPriority_closure3` |
|   +9.8% |  +39.073 MiB | 3.3% → 3.6% |   401 MiB → 440 MiB | 199 → 213 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
|   +3.8% |  +38.538 MiB | 8.2% → 8.6% | 1002 MiB → 1.02 GiB | 507 → 523 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                            |
|  +16.9% |  +33.432 MiB | 1.6% → 1.9% |   197 MiB → 231 MiB |  98 → 111 | `visitStatement(Statement)`                       | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                      |
|   +6.8% |    +31.5 MiB | 3.8% → 4.1% |   461 MiB → 492 MiB | 231 → 240 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                            |
|  +11.0% |  +27.228 MiB | 2.0% → 2.3% |   247 MiB → 275 MiB | 127 → 137 | `checkDeclaration(ASTNode, String, String)`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|  +94.0% |  +27.076 MiB | 0.2% → 0.5% | 28.8 MiB → 55.9 MiB |   15 → 30 | `findReference(SourceCode, String, String)`       | `org.codenarc.rule.imports.UnusedImportRule`                                        |
|  +11.5% |  +26.353 MiB | 1.9% → 2.1% |   229 MiB → 256 MiB | 118 → 127 | `findLineWithDeclaration(ASTNode, String)`        | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|   +9.7% |  +25.974 MiB | 2.2% → 2.4% |   267 MiB → 292 MiB | 131 → 142 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodCallExpressionVisitor`                             |
|   +8.2% |  +23.985 MiB | 2.4% → 2.6% |   294 MiB → 318 MiB | 121 → 145 | `doCall(Object)`                                  | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`      |
|   +7.4% |  +21.986 MiB | 2.4% → 2.7% |   298 MiB → 320 MiB | 123 → 146 | `getNumberOfViolationsWithPriority(int, boolean)` | `org.codenarc.results.FileResults`                                                  |
|   +7.4% |  +21.986 MiB | 2.4% → 2.7% |   298 MiB → 320 MiB | 123 → 146 | `getNumberOfViolationsWithPriority(int)`          | `org.codenarc.results.FileResults`                                                  |
|  +16.0% |  +21.577 MiB | 1.1% → 1.3% |   135 MiB → 156 MiB |   69 → 79 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                 |
|   +5.2% |  +21.368 MiB | 3.3% → 3.6% |   408 MiB → 430 MiB | 205 → 207 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                         |
| +106.9% |  +21.154 MiB | 0.2% → 0.3% | 19.8 MiB → 40.9 MiB |   10 → 22 | `doCall(Object)`                                  | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`                |
|  +35.7% |   +19.99 MiB | 0.5% → 0.6% |     56 MiB → 76 MiB |   28 → 37 | `isViolationDisabled(LookupTable, Violation)`     | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`                     |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                                                    |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed |    -1.02 GiB |   8.6% → 0.0% |      1.02 GiB → 0 B |       527 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00`                         |
| removed | -692.925 MiB |   5.7% → 0.0% |       693 MiB → 0 B |       341 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000040138b000`                         |
| removed | -307.847 MiB |   2.5% → 0.0% |       308 MiB → 0 B |       128 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000401441c00`                         |
| removed | -287.253 MiB |   2.4% → 0.0% |       287 MiB → 0 B |       140 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000004013bc400`                         |
| removed | -219.294 MiB |   1.8% → 0.0% |       219 MiB → 0 B |       176 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                         |
|   -5.6% | -193.927 MiB | 28.6% → 27.4% | 3.41 GiB → 3.22 GiB | 1,753 → 1,691 | `processFile(String, DirectoryResults, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   -3.5% | -129.264 MiB | 30.3% → 29.6% | 3.61 GiB → 3.48 GiB | 1,892 → 1,839 | `doCall(Object)`                                              | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|   -2.7% | -111.935 MiB | 33.5% → 32.9% | 3.99 GiB → 3.88 GiB | 2,049 → 2,024 | `collectViolations(SourceCode, RuleSet)`                      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -7.0% |  -107.76 MiB | 12.7% → 11.9% |  1.51 GiB → 1.4 GiB |     730 → 734 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                                          |
|  -47.7% | -103.946 MiB |   1.8% → 0.9% |   218 MiB → 114 MiB |            57 | `writeViolation(Writer, Violation, String)`                   | `org.codenarc.report.TextReportWriter`                                      |
|  -46.8% | -101.947 MiB |   1.8% → 1.0% |   218 MiB → 116 MiB |       57 → 58 | `doCall(Object)`                                              | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`        |
|   -2.1% |  -94.911 MiB | 37.1% → 36.8% | 4.42 GiB → 4.33 GiB | 2,284 → 2,250 | `measureRuleProcessingTime(Rule, Closure)`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   -1.6% |  -82.021 MiB | 43.3% → 43.1% | 5.16 GiB → 5.08 GiB | 2,660 → 2,629 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                          |
| removed |  -73.218 MiB |   0.6% → 0.0% |      73.2 MiB → 0 B |        37 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401462400`                         |
|  -18.4% |  -62.245 MiB |   2.8% → 2.3% |   338 MiB → 276 MiB |     160 → 143 | `visitBinaryExpression(BinaryExpression)`                     | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  -13.8% |  -61.209 MiB |   3.6% → 3.2% |   442 MiB → 381 MiB |     209 → 196 | `addViolationIfDuplicate(Expression, boolean)`                | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  -13.6% |   -59.21 MiB |   3.6% → 3.1% |   436 MiB → 377 MiB |     206 → 194 | `addViolationIfDuplicate(Expression)`                         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|   -3.0% |  -52.809 MiB | 14.4% → 14.1% | 1.71 GiB → 1.66 GiB |     876 → 863 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|   -6.1% |  -52.495 MiB |   7.1% → 6.7% |   864 MiB → 811 MiB |     435 → 418 | `doCall(Object)`                                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   -1.6% |  -44.875 MiB | 22.8% → 22.7% | 2.72 GiB → 2.67 GiB | 1,431 → 1,418 | `applyTo(SourceCode)`                                         | `org.codenarc.rule.AbstractRule`                                            |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                      | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------------- |
| removed |    -1.02 GiB |   8.6% → 0.0% |      1.02 GiB → 0 B |       527 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x0000000401392c00` |
| removed | -692.925 MiB |   5.7% → 0.0% |       693 MiB → 0 B |       341 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000040138b000` |
| removed | -307.847 MiB |   2.5% → 0.0% |       308 MiB → 0 B |       128 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000401441c00` |
| removed | -287.253 MiB |   2.4% → 0.0% |       287 MiB → 0 B |       140 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000004013bc400` |
| removed | -219.294 MiB |   1.8% → 0.0% |       219 MiB → 0 B |       176 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00` |
|   -7.0% |  -107.76 MiB | 12.7% → 11.9% |  1.51 GiB → 1.4 GiB |     730 → 734 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|   -1.6% |  -82.021 MiB | 43.3% → 43.1% | 5.16 GiB → 5.08 GiB | 2,660 → 2,629 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
| removed |  -73.218 MiB |   0.6% → 0.0% |      73.2 MiB → 0 B |        37 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401462400` |
|   -3.0% |  -52.809 MiB | 14.4% → 14.1% | 1.71 GiB → 1.66 GiB |     876 → 863 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -44.9% |   -43.31 MiB |   0.8% → 0.4% | 96.6 MiB → 53.3 MiB |       50 → 27 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |
| removed |  -37.311 MiB |   0.3% → 0.0% |      37.3 MiB → 0 B |        19 → 0 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000401402400` |
|   -2.0% |  -36.104 MiB | 14.6% → 14.5% | 1.74 GiB → 1.71 GiB |     891 → 874 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| removed |   -30.52 MiB |   0.3% → 0.0% |      30.5 MiB → 0 B |        16 → 0 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000040113ac00` |
|  -50.0% |  -29.985 MiB |   0.5% → 0.2% |     60 MiB → 30 MiB |       30 → 15 | `visitPropertyExpression(PropertyExpression)`                 | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|   -7.9% |  -29.909 MiB |   3.1% → 2.9% |   379 MiB → 349 MiB |     189 → 177 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|   -0.4% |  -28.807 MiB | 64.2% → 64.7% | 7.65 GiB → 7.62 GiB | 4,047 → 4,031 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  -25.1% |  -23.731 MiB |   0.8% → 0.6% | 94.6 MiB → 70.9 MiB |       63 → 54 | `newInstance()`                                               | `java.lang.Class`                                   |
|   -4.4% |  -19.572 MiB |   3.7% → 3.5% |   447 MiB → 428 MiB |     219 → 211 | `matches(String)`                                             | `java.lang.String`                                  |
|   -1.1% |   -18.84 MiB |         13.6% | 1.62 GiB → 1.61 GiB |     830 → 825 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|  -53.3% |  -15.991 MiB |   0.2% → 0.1% |     30 MiB → 14 MiB |        11 → 7 | `visitListExpression(ListExpression)`                         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |

##### Ours

| Change |        Delta |             % |                Size |       Samples | Function                                               | Location                                                                    |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------ | --------------------------------------------------------------------------- |
|  -5.6% | -193.927 MiB | 28.6% → 27.4% | 3.41 GiB → 3.22 GiB | 1,753 → 1,691 | `processFile(String, DirectoryResults, RuleSet)`       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  -3.5% | -129.264 MiB | 30.3% → 29.6% | 3.61 GiB → 3.48 GiB | 1,892 → 1,839 | `doCall(Object)`                                       | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  -2.7% | -111.935 MiB | 33.5% → 32.9% | 3.99 GiB → 3.88 GiB | 2,049 → 2,024 | `collectViolations(SourceCode, RuleSet)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -47.7% | -103.946 MiB |   1.8% → 0.9% |   218 MiB → 114 MiB |            57 | `writeViolation(Writer, Violation, String)`            | `org.codenarc.report.TextReportWriter`                                      |
| -46.8% | -101.947 MiB |   1.8% → 1.0% |   218 MiB → 116 MiB |       57 → 58 | `doCall(Object)`                                       | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure6`        |
|  -2.1% |  -94.911 MiB | 37.1% → 36.8% | 4.42 GiB → 4.33 GiB | 2,284 → 2,250 | `measureRuleProcessingTime(Rule, Closure)`             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| -18.4% |  -62.245 MiB |   2.8% → 2.3% |   338 MiB → 276 MiB |     160 → 143 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| -13.8% |  -61.209 MiB |   3.6% → 3.2% |   442 MiB → 381 MiB |     209 → 196 | `addViolationIfDuplicate(Expression, boolean)`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
| -13.6% |   -59.21 MiB |   3.6% → 3.1% |   436 MiB → 377 MiB |     206 → 194 | `addViolationIfDuplicate(Expression)`                  | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|  -6.1% |  -52.495 MiB |   7.1% → 6.7% |   864 MiB → 811 MiB |     435 → 418 | `doCall(Object)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  -1.6% |  -44.875 MiB | 22.8% → 22.7% | 2.72 GiB → 2.67 GiB | 1,431 → 1,418 | `applyTo(SourceCode)`                                  | `org.codenarc.rule.AbstractRule`                                            |
| -10.4% |  -26.576 MiB |   2.1% → 1.9% |   256 MiB → 230 MiB |     124 → 111 | `isMethodNamed(MethodCallExpression, String, Integer)` | `org.codenarc.util.AstUtil`                                                 |
| -48.1% |  -25.975 MiB |   0.4% → 0.2% |     54 MiB → 28 MiB |       26 → 14 | `buildLookupTable()`                                   | `org.codenarc.plugin.disablerules.LookupTable`                              |
|  -1.3% |    -25.8 MiB |         16.4% | 1.95 GiB → 1.93 GiB | 1,002 → 1,004 | `visitMethod(MethodNode)`                              | `org.codenarc.rule.AbstractAstVisitor`                                      |
| -25.0% |  -23.988 MiB |   0.8% → 0.6% |     96 MiB → 72 MiB |       48 → 36 | `doCall(Object)`                                       | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`        |
| -25.1% |  -23.731 MiB |   0.8% → 0.6% | 94.6 MiB → 70.9 MiB |       63 → 54 | `getAstVisitor()`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| -50.0% |  -21.986 MiB |   0.4% → 0.2% |     44 MiB → 22 MiB |       21 → 11 | `doCall(Object, Object)`                               | `org.codenarc.plugin.disablerules.LookupTable$_buildLookupTable_closure1`   |
| -21.9% |  -19.296 MiB |   0.7% → 0.6% |   88 MiB → 68.7 MiB |       43 → 34 | `isMethodNamed(MethodCallExpression, String)`          | `org.codenarc.util.AstUtil`                                                 |
| -27.1% |  -18.855 MiB |   0.6% → 0.4% | 69.6 MiB → 50.7 MiB |       35 → 28 | `doCall(List)`                                         | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1` |
| -80.9% |   -18.75 MiB |  0.2% → <0.1% | 23.2 MiB → 4.42 MiB |        12 → 3 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unnecessary.UnnecessaryModOneAstVisitor`                 |

# Retained heap profile diff

Retained 267 KiB → 82.3 KiB (-184.742 KiB, -69.2%) over 118 objects → 111 objects (2.26 KiB → 759 B per object).

| Category         |  Change |        Delta |            % |               Size |   Objects |
| ---------------- | ------: | -----------: | -----------: | -----------------: | --------: |
| Standard library |  -69.2% | -184.679 KiB |       100.0% | 267 KiB → 82.3 KiB | 116 → 111 |
| Ours             | removed |        -64 B | <0.1% → 0.0% |         64 B → 0 B |     2 → 0 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Ours

|  Change | Delta |            % |       Size | Objects | Function                        | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------------- | -------------------------------------- |
| removed | -64 B | <0.1% → 0.0% | 64 B → 0 B |   2 → 0 | `addViolation(ASTNode, String)` | `org.codenarc.rule.AbstractAstVisitor` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |       Delta |             % |                Size | Objects | Function                                        | Location                                                                   |
| --------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | -------------------------------------------------------------------------- |
|  +2042.5% | +67.976 KiB |  1.2% → 86.7% | 3.33 KiB → 71.3 KiB | 16 → 19 | `doCall(Object)`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +1880.5% | +67.875 KiB |  1.4% → 86.9% | 3.61 KiB → 71.5 KiB | 20 → 22 | `applyTo(SourceCode)`                           | `org.codenarc.rule.AbstractRule`                                           |
|  +1856.9% | +67.601 KiB |  1.4% → 86.6% | 3.64 KiB → 71.2 KiB | 21 → 19 | `applyTo(SourceCode, List)`                     | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +75500.0% | +64.882 KiB | <0.1% → 79.0% |       88 B → 65 KiB |   2 → 9 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +31884.6% | +64.765 KiB |  0.1% → 79.0% |      208 B → 65 KiB |   3 → 9 | `visitMethod(MethodNode)`                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +31884.6% | +64.765 KiB |  0.1% → 79.0% |      208 B → 65 KiB |   3 → 9 | `visitMethod(MethodNode)`                       | `org.codenarc.rule.AbstractAstVisitor`                                     |
| +21223.1% | +64.664 KiB |  0.1% → 79.0% |      312 B → 65 KiB |   5 → 9 | `visitClass(ClassNode)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |
| +13776.7% | +64.578 KiB |  0.2% → 79.0% |      480 B → 65 KiB |  9 → 11 | `visitClass(ClassNode)`                         | `org.codenarc.rule.AbstractAstVisitor`                                     |
|       new | +64.015 KiB |  0.0% → 77.8% |        0 B → 64 KiB |   0 → 1 | `visitForLoop(ForStatement)`                    | `org.codenarc.rule.design.NestedForLoopAstVisitor`                         |
|   +502.9% |  +5.343 KiB |   0.4% → 7.8% | 1.06 KiB → 6.41 KiB | 10 → 11 | `newInstance()`                                 | `java.lang.Class`                                                          |
|   +502.9% |  +5.343 KiB |   0.4% → 7.8% | 1.06 KiB → 6.41 KiB | 10 → 11 | `getAstVisitor()`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `$getStaticMetaClass()`                         | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>(String, int)`                           | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>(String)`                                | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|       new |  +4.039 KiB |   0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>()`                                      | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|    +34.3% |  +2.679 KiB |  2.9% → 12.8% | 7.81 KiB → 10.5 KiB | 65 → 54 | `getMetaClass()`                                | `org.codehaus.groovy.reflection.ClassInfo`                                 |
|       new |  +2.578 KiB |   0.0% → 3.1% |      0 B → 2.58 KiB |  0 → 22 | `linkToCallSite(Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700112cc00`                        |
|       new |   +2.07 KiB |   0.0% → 2.5% |      0 B → 2.07 KiB |   0 → 2 | `$getStaticMetaClass()`                         | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|       new |   +2.07 KiB |   0.0% → 2.5% |      0 B → 2.07 KiB |   0 → 2 | `<init>()`                                      | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|   +693.3% |      +832 B |  <0.1% → 1.1% |       120 B → 952 B |   3 → 7 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                          |

##### Ours

|    Change |       Delta |            % |                Size | Objects | Function                                         | Location                                                                   |
| --------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------- |
|  +2042.5% | +67.976 KiB | 1.2% → 86.7% | 3.33 KiB → 71.3 KiB | 16 → 19 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
|  +1880.5% | +67.875 KiB | 1.4% → 86.9% | 3.61 KiB → 71.5 KiB | 20 → 22 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                           |
|  +1856.9% | +67.601 KiB | 1.4% → 86.6% | 3.64 KiB → 71.2 KiB | 21 → 19 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
| +31884.6% | +64.765 KiB | 0.1% → 79.0% |      208 B → 65 KiB |   3 → 9 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                     |
| +13776.7% | +64.578 KiB | 0.2% → 79.0% |      480 B → 65 KiB |  9 → 11 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                     |
|       new | +64.015 KiB | 0.0% → 77.8% |        0 B → 64 KiB |   0 → 1 | `visitForLoop(ForStatement)`                     | `org.codenarc.rule.design.NestedForLoopAstVisitor`                         |
|   +502.9% |  +5.343 KiB |  0.4% → 7.8% | 1.06 KiB → 6.41 KiB | 10 → 11 | `getAstVisitor()`                                | `org.codenarc.rule.AbstractAstVisitorRule`                                 |
|       new |  +4.039 KiB |  0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `$getStaticMetaClass()`                          | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|       new |  +4.039 KiB |  0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>(String, int)`                            | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|       new |  +4.039 KiB |  0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>(String)`                                 | `org.codenarc.rule.groovyism.ExplicitCallToMethodAstVisitor`               |
|       new |  +4.039 KiB |  0.0% → 4.9% |      0 B → 4.04 KiB |   0 → 2 | `<init>()`                                       | `org.codenarc.rule.groovyism.ExplicitCallToGetAtMethodAstVisitor`          |
|       new |   +2.07 KiB |  0.0% → 2.5% |      0 B → 2.07 KiB |   0 → 2 | `$getStaticMetaClass()`                          | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|       new |   +2.07 KiB |  0.0% → 2.5% |      0 B → 2.07 KiB |   0 → 2 | `<init>()`                                       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`        |
|       new |      +528 B |  0.0% → 0.6% |         0 B → 528 B |   0 → 1 | `visitBinaryExpression(BinaryExpression)`        | `org.codenarc.rule.design.InstanceofAstVisitor`                            |
|    +84.9% |      +360 B |  0.2% → 0.9% |       424 B → 784 B | 11 → 18 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                   |
|    +91.8% |      +360 B |  0.1% → 0.9% |       392 B → 752 B | 10 → 17 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|    +65.3% |      +256 B |  0.1% → 0.8% |       392 B → 648 B | 10 → 15 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|       new |      +192 B |  0.0% → 0.2% |         0 B → 192 B |   0 → 2 | `applyVisitor(AstVisitor, SourceCode)`           | `org.codenarc.rule.AbstractSharedAstVisitorRule`                           |
|       new |      +192 B |  0.0% → 0.2% |         0 B → 192 B |   0 → 2 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractSharedAstVisitorRule`                           |
|       new |      +136 B |  0.0% → 0.2% |         0 B → 136 B |   0 → 3 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Objects | Function                                                 | Location                                                           |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------ |
|  -99.2% | -254.617 KiB |  96.1% → 2.5% |  257 KiB → 2.05 KiB | 18 → 23 | `init()`                                                 | `org.codenarc.source.AbstractSourceCode`                           |
|  -71.1% | -188.625 KiB | 99.4% → 93.3% |  265 KiB → 76.8 KiB | 91 → 81 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                 |
| removed |   -3.679 KiB |   1.4% → 0.0% |      3.68 KiB → 0 B |  36 → 0 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000040112cc00`                |
|  -92.0% |   -2.617 KiB |   1.1% → 0.3% |    2.84 KiB → 232 B |  14 → 4 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                 |
| removed |   -2.015 KiB |   0.8% → 0.0% |      2.02 KiB → 0 B |   1 → 0 | `getAstVisitor()`                                        | `org.codenarc.rule.convention.HashtableIsObsoleteRule`             |
|  -29.9% |   -1.101 KiB |   1.4% → 3.1% | 3.68 KiB → 2.58 KiB | 36 → 22 | `assertClassImplementsRuleInterface(Class)`              | `org.codenarc.ruleset.RuleSetUtil`                                 |
|  -29.3% |   -1.054 KiB |   1.3% → 3.1% |  3.6 KiB → 2.55 KiB | 35 → 21 | `doCall(Object)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |
| removed |       -456 B |   0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `$getStaticMetaClass()`                                  | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`            |
| removed |       -456 B |   0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `<init>()`                                               | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`            |
| removed |       -456 B |   0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `<init>()`                                               | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`            |
|  -78.1% |       -400 B |   0.2% → 0.1% |       512 B → 112 B |   5 → 2 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                 |
| removed |       -392 B |   0.1% → 0.0% |         392 B → 0 B |   7 → 0 | `addViolation(ASTNode, String)`                          | `org.codenarc.rule.AbstractAstVisitor`                             |
| removed |       -368 B |   0.1% → 0.0% |         368 B → 0 B |   3 → 0 | `validateXml(String)`                                    | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
| removed |       -344 B |   0.1% → 0.0% |         344 B → 0 B |   3 → 0 | `checkForCorrectColumn(ASTNode, String, int)`            | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -344 B |   0.1% → 0.0% |         344 B → 0 B |   3 → 0 | `checkForCorrectColumn(ASTNode, String)`                 | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -328 B |   0.1% → 0.0% |         328 B → 0 B |   5 → 0 | `line(int)`                                              | `org.codenarc.source.AbstractSourceCode`                           |
| removed |       -328 B |   0.1% → 0.0% |         328 B → 0 B |   5 → 0 | `sourceLineTrimmed(ASTNode)`                             | `org.codenarc.rule.AbstractAstVisitor`                             |
| removed |       -280 B |   0.1% → 0.0% |         280 B → 0 B |   3 → 0 | `checkStatementIndent(Statement, BlockStatement)`        | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -168 B |   0.1% → 0.0% |         168 B → 0 B |   3 → 0 | `<init>(Reader)`                                         | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  -86.4% |       -152 B |  0.1% → <0.1% |        176 B → 24 B |       1 | `$getStaticMetaClass()`                                  | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`         |

##### Ours

|  Change |        Delta |            % |                Size | Objects | Function                                          | Location                                                           |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
|  -99.2% | -254.617 KiB | 96.1% → 2.5% |  257 KiB → 2.05 KiB | 18 → 23 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                           |
| removed |   -2.015 KiB |  0.8% → 0.0% |      2.02 KiB → 0 B |   1 → 0 | `getAstVisitor()`                                 | `org.codenarc.rule.convention.HashtableIsObsoleteRule`             |
|  -29.9% |   -1.101 KiB |  1.4% → 3.1% | 3.68 KiB → 2.58 KiB | 36 → 22 | `assertClassImplementsRuleInterface(Class)`       | `org.codenarc.ruleset.RuleSetUtil`                                 |
|  -29.3% |   -1.054 KiB |  1.3% → 3.1% |  3.6 KiB → 2.55 KiB | 35 → 21 | `doCall(Object)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2` |
| removed |       -456 B |  0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `$getStaticMetaClass()`                           | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`            |
| removed |       -456 B |  0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `<init>()`                                        | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`            |
| removed |       -456 B |  0.2% → 0.0% |         456 B → 0 B |   1 → 0 | `<init>()`                                        | `org.codenarc.rule.size.CyclomaticComplexityAstVisitor`            |
| removed |       -392 B |  0.1% → 0.0% |         392 B → 0 B |   7 → 0 | `addViolation(ASTNode, String)`                   | `org.codenarc.rule.AbstractAstVisitor`                             |
| removed |       -368 B |  0.1% → 0.0% |         368 B → 0 B |   3 → 0 | `validateXml(String)`                             | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
| removed |       -344 B |  0.1% → 0.0% |         344 B → 0 B |   3 → 0 | `checkForCorrectColumn(ASTNode, String, int)`     | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -344 B |  0.1% → 0.0% |         344 B → 0 B |   3 → 0 | `checkForCorrectColumn(ASTNode, String)`          | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -328 B |  0.1% → 0.0% |         328 B → 0 B |   5 → 0 | `line(int)`                                       | `org.codenarc.source.AbstractSourceCode`                           |
| removed |       -328 B |  0.1% → 0.0% |         328 B → 0 B |   5 → 0 | `sourceLineTrimmed(ASTNode)`                      | `org.codenarc.rule.AbstractAstVisitor`                             |
| removed |       -280 B |  0.1% → 0.0% |         280 B → 0 B |   3 → 0 | `checkStatementIndent(Statement, BlockStatement)` | `org.codenarc.rule.formatting.IndentationAstVisitor`               |
| removed |       -168 B |  0.1% → 0.0% |         168 B → 0 B |   3 → 0 | `<init>(Reader)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet`                            |
|  -86.4% |       -152 B | 0.1% → <0.1% |        176 B → 24 B |       1 | `$getStaticMetaClass()`                           | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`         |
|  -86.4% |       -152 B | 0.1% → <0.1% |        176 B → 24 B |       1 | `<init>()`                                        | `org.codenarc.rule.basic.MultipleUnaryOperatorsAstVisitor`         |
| removed |       -136 B | <0.1% → 0.0% |         136 B → 0 B |   1 → 0 | `buildRuleSet()`                                  | `org.codenarc.CodeNarcRunner`                                      |
| removed |       -136 B | <0.1% → 0.0% |         136 B → 0 B |   3 → 0 | `getLines()`                                      | `org.codenarc.source.AbstractSourceCode`                           |
| removed |       -136 B | <0.1% → 0.0% |         136 B → 0 B |   3 → 0 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.convention.CompileStaticlVisitor`               |
