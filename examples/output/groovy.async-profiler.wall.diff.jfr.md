# Sampling profile diff

14,309 samples → 26,323 samples (+12,014 samples, +84.0%).

| Category          |  Change |   Delta |             % |         Samples |
| ----------------- | ------: | ------: | ------------: | --------------: |
| native            |  +83.9% | +11,726 | 97.7% → 97.6% | 13,975 → 25,701 |
| stdlib            |  +89.3% |    +267 |   2.1% → 2.2% |       299 → 566 |
| ours              |  +65.0% |     +13 |          0.1% |         20 → 33 |
| jit               |  +50.0% |      +7 |          0.1% |         14 → 21 |
| garbage collector | +100.0% |      +1 |         <0.1% |           1 → 2 |

Hidden functions account for 99.7% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change |  Delta |             % |        Samples | Function                                                         | Location                                                                                            |
| ------: | -----: | ------------: | -------------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +83.7% | +5,452 |         45.5% | 6,517 → 11,969 | `__psynch_cvwait`                                                | `libsystem_kernel.dylib`                                                                            |
|  +90.1% | +5,005 | 38.8% → 40.1% | 5,556 → 10,561 | `semaphore_wait_trap`                                            | `libsystem_kernel.dylib`                                                                            |
|  +50.0% |     +3 |         <0.1% |          6 → 9 | `itable stub`                                                    | `<unknown>`                                                                                         |
|     new |     +2 |  0.0% → <0.1% |          0 → 2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                                                                  |
| +200.0% |     +2 |         <0.1% |          1 → 3 | `I2C/C2I adapters(0xb)`                                          | `<unknown>`                                                                                         |
|     new |     +2 |  0.0% → <0.1% |          0 → 2 | `I2C/C2I adapters(0xbbb)`                                        | `<unknown>`                                                                                         |
|     new |     +2 |  0.0% → <0.1% |          0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                                   |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                                              |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `I2C/C2I adapters(0xba)`                                         | `<unknown>`                                                                                         |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `newInstance()`                                                  | `java.lang.Class`                                                                                   |
| +100.0% |     +1 |         <0.1% |          1 → 2 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                                          |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `applyTo(SourceCode)`                                            | `org.codenarc.rule.AbstractRule`                                                                    |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `visitClass(ClassNode)`                                          | `org.codenarc.rule.AbstractMethodVisitor`                                                           |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                                 |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `doCall(Statement)`                                              | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor$_visitBlockStatement_closure2` |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `BarrierSetNMethod::nmethod_stub_entry_barrier`                  | `libjvm.dylib`                                                                                      |
| +100.0% |     +1 |         <0.1% |          1 → 2 | `g1_post_barrier_slow`                                           | `<unknown>`                                                                                         |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `visitMethodCallExpression(MethodCallExpression)`                | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                 |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                                                                  |
|     new |     +1 |  0.0% → <0.1% |          0 → 1 | `applyTo(SourceCode, List)`                                      | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                                            |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                       | Location                                                                                    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `vtable stub`                                                  | `<unknown>`                                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`                       | `java.lang.invoke.Invokers$Holder`                                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `collectViolations(SourceCode, RuleSet)`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitExpressionStatement(ExpressionStatement)`                | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                | `org.codenarc.rule.ClassReferenceAstVisitor`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getClass()`                                                   | `java.lang.Object`                                                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement(BlockStatement)`                          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isFirstVisit(Object)`                                         | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `counter_overflow Runtime1 stub`                               | `<unknown>`                                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                               | `org.codenarc.rule.convention.NoDefRule`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getRule()`                                                    | `org.codenarc.rule.AbstractAstVisitor`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName()`                                                    | `org.codenarc.rule.naming.ClassNameRule`                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getLastLineOfNodeText(ASTNode, SourceCode)`                   | `org.codenarc.util.AstUtil`                                                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference)`                 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_visitConstructorOrMethod_closure1` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodComplete(MethodNode)`                              | `org.codenarc.rule.convention.StaticMethodsBeforeInstanceMethodsAstVisitor`                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isClosureParameterOutsideParentheses(Expression, Expression)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAstVisitorClass()`                                         | `org.codenarc.rule.groovyism.ExplicitCallToCompareToMethodRule`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processParameters(Parameter[], String)`                       | `org.codenarc.rule.design.OptionalMethodParameterAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference, Reference)`                 | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_visitMapExpression_closure5`       |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change |  Delta |             % |        Samples | Function                                                 | Location                                                                    |
| ------: | -----: | ------------: | -------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +83.7% | +5,452 |         45.5% | 6,517 → 11,969 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`                                                    |
|  +90.1% | +5,005 | 38.8% → 40.1% | 5,556 → 10,561 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`                                                    |
|  +87.2% |   +407 |          3.3% |      467 → 874 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|  +87.3% |   +407 |          3.3% |      466 → 873 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  +87.7% |   +407 |   3.2% → 3.3% |      464 → 871 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  +88.1% |   +407 |   3.2% → 3.3% |      462 → 869 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  +88.0% |   +405 |   3.2% → 3.3% |      460 → 865 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  +92.0% |   +401 |   3.0% → 3.2% |      436 → 837 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  +89.8% |   +398 |   3.1% → 3.2% |      443 → 841 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  +92.0% |   +390 |   3.0% → 3.1% |      424 → 814 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +91.5% |   +389 |   3.0% → 3.1% |      425 → 814 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +90.2% |   +387 |   3.0% → 3.1% |      429 → 816 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +90.2% |   +387 |   3.0% → 3.1% |      429 → 816 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +89.8% |   +386 |   3.0% → 3.1% |      430 → 816 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +105.8% |   +362 |   2.4% → 2.7% |      342 → 704 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +107.0% |   +276 |   1.8% → 2.0% |      258 → 534 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +104.2% |   +247 |   1.7% → 1.8% |      237 → 484 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
| +100.0% |   +200 |   1.4% → 1.5% |      200 → 400 | `applyTo(SourceCode, List)`                              | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +102.2% |   +187 |   1.3% → 1.4% |      183 → 370 | `visitClass(ClassNode)`                                  | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +99.4% |   +155 |   1.1% → 1.2% |      156 → 311 | `visitClass(ClassNode)`                                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                      | Location                                                                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| removed |   -65 |  0.5% → 0.0% |  65 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a001320400`                                             |
| removed |   -21 |  0.1% → 0.0% |  21 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000a0010c8400`                                             |
| removed |    -8 |  0.1% → 0.0% |   8 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a0013d9800`                                             |
|  -63.6% |    -7 | 0.1% → <0.1% |  11 → 4 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                                                              |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000a0013f5000`                                             |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a00134c800`                                             |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a0010d6400`                                             |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `visitConstructorCallExpression(ConstructorCallExpression)`   | `org.codehaus.groovy.ast.CodeVisitorSupport`                                                    |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                                       |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                        |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `isSpockMethod(MethodCallExpression)`                         | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                     |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `visitMethodEx(MethodNode)`                                   | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`                                   |
|  -14.3% |    -2 | 0.1% → <0.1% | 14 → 12 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`                                                      |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `assertClassImplementsRuleInterface(Class)`                   | `org.codenarc.ruleset.RuleSetUtil`                                                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `doCall(Object)`                                              | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3$_closure4` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `<init>(MethodNode)`                                          | `org.gmetrics.result.MethodKey`                                                                 |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitMethod(MethodNode)`                                     | `org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor`                           |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `vtable stub`                                                 | `<unknown>`                                                                                     |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `processLine(String)`                                         | `org.codenarc.util.MultilineCommentChecker`                                                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001392c00`                                             |
