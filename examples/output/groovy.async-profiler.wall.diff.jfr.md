# Profile diff

14,309 samples → 26,323 samples (+12,014 samples, +84.0%).

| Category          |  Change |   Delta |             % |         Samples |
| ----------------- | ------: | ------: | ------------: | --------------: |
| Native            |  +85.6% | +11,498 | 93.9% → 94.7% | 13,436 → 24,934 |
| Compiler          |  +38.4% |    +207 |   3.8% → 2.8% |       539 → 746 |
| Standard library  |  +89.3% |    +267 |   2.1% → 2.2% |       299 → 566 |
| Ours              |  +65.0% |     +13 |          0.1% |         20 → 33 |
| JIT               |  +50.0% |      +7 |          0.1% |         14 → 21 |
| Unknown           |     new |     +21 |   0.0% → 0.1% |          0 → 21 |
| Garbage collector | +100.0% |      +1 |         <0.1% |           1 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Compiler

|  Change | Delta |            % | Samples | Function                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| +400.0% |   +12 | <0.1% → 0.1% |  3 → 15 | `Node::set_req_X`                    | `libjvm.dylib` |
|  +43.5% |   +10 |  0.2% → 0.1% | 23 → 33 | `PhaseChaitin::Split`                | `libjvm.dylib` |
| +250.0% |   +10 | <0.1% → 0.1% |  4 → 14 | `PhaseChaitin::gather_lrg_masks`     | `libjvm.dylib` |
|     new |    +8 | 0.0% → <0.1% |   0 → 8 | `IntervalWalker::walk_to`            | `libjvm.dylib` |
| +700.0% |    +7 |        <0.1% |   1 → 8 | `ConnectionGraph::compute_escape`    | `libjvm.dylib` |
| +600.0% |    +6 |        <0.1% |   1 → 7 | `PhiNode::Ideal`                     | `libjvm.dylib` |
| +120.0% |    +6 |        <0.1% |  5 → 11 | `ciObjectFactory::get_metadata`      | `libjvm.dylib` |
| +200.0% |    +6 |        <0.1% |   3 → 9 | `PhaseIterGVN::subsume_node`         | `libjvm.dylib` |
|     new |    +6 | 0.0% → <0.1% |   0 → 6 | `LinearScan::assign_reg_num`         | `libjvm.dylib` |
|  +55.6% |    +5 |         0.1% |  9 → 14 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
| +125.0% |    +5 |        <0.1% |   4 → 9 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| +125.0% |    +5 |        <0.1% |   4 → 9 | `Type::cmp`                          | `libjvm.dylib` |
| +500.0% |    +5 |        <0.1% |   1 → 6 | `Compile::find_alias_type`           | `libjvm.dylib` |
|  +66.7% |    +4 |        <0.1% |  6 → 10 | `PhaseOutput::BuildOopMaps`          | `libjvm.dylib` |
|  +80.0% |    +4 |        <0.1% |   5 → 9 | `PhaseLive::compute`                 | `libjvm.dylib` |
| +200.0% |    +4 |        <0.1% |   2 → 6 | `PhaseChaitin::build_ifg_virtual`    | `libjvm.dylib` |
| +133.3% |    +4 |        <0.1% |   3 → 7 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |
|  +80.0% |    +4 |        <0.1% |   5 → 9 | `PhaseIdealLoop::is_dominator`       | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhiNode::Value`                     | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhaseCFG::hoist_to_cheaper_block`   | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                           | Location                                                                                            |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `applyTo(SourceCode, List)`                        | `org.codenarc.rule.AbstractAstVisitorRule`                                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode)`                              | `org.codenarc.rule.AbstractRule`                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClass(ClassNode)`                            | `org.codenarc.rule.AbstractMethodVisitor`                                                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Statement)`                                | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor$_visitBlockStatement_closure2` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)`  | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                        | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(Metric, MetricLevel, Collection, Integer)` | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                          | `org.codenarc.rule.exceptions.ExceptionExtendsThrowableAstVisitor`                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                   | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                          | `org.codenarc.rule.ClassReferenceAstVisitor`                                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getName()`                                        | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx(ClassNode)`                          | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitorClass()`                             | `org.codenarc.rule.groovyism.GStringAsMapKeyRule`                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getMetaClass()`                                   | `org.codenarc.rule.formatting.BlockStartsWithBlankLineRule`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitorClass()`                             | `org.codenarc.rule.basic.EmptySynchronizedStatementRule`                                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAstVisitorClass()`                             | `org.codenarc.rule.formatting.SpaceAfterCatchRule`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                         | `org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `isReady()`                                        | `org.codenarc.rule.AbstractRule`                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `hasAnyAnnotation(AnnotatedNode, String[])`        | `org.codenarc.util.AstUtil`                                                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                         | `org.codenarc.rule.AbstractAstVisitor`                                                              |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  +50.0% |    +3 |        <0.1% |   6 → 9 | `itable stub`             | `<unknown>` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xba)`  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `zero_blocks`             | `<unknown>` |

##### Standard library

| Change | Delta |            % | Samples | Function                                                         | Location                                            |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `newInstance()`                                                  | `java.lang.Class`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -51.6% |   -16 |  0.2% → 0.1% | 31 → 15 | `Node::dominates`                             | `libjvm.dylib` |
|  -35.7% |    -5 | 0.1% → <0.1% |  14 → 9 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
|  -37.5% |    -3 | 0.1% → <0.1% |   8 → 5 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIterGVN::remove_globally_dead_node`     | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `RegionNode::is_unreachable_from_root`        | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `decodeHeapOopNode::rule`                     | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `Node::set_req`                               | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Matcher::pd_clone_node`                      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ValueStack::ValueStack`                      | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `TypeInterfaces::union_with`                  | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `RegMask::is_misaligned_pair`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::DoScheduling`                    | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `CallStaticJavaNode::Opcode`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::AddNodeToAvailableList`          | `libjvm.dylib` |
|  -50.0% |    -2 |        <0.1% |   4 → 2 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  -28.6% |    -2 |        <0.1% |   7 → 5 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `RegMask::Size`                               | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                       | Location                                                                                    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `collectViolations(SourceCode, RuleSet)`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod(MethodNode, boolean)`                | `org.codenarc.rule.ClassReferenceAstVisitor`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement(BlockStatement)`                          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isFirstVisit(Object)`                                         | `org.codenarc.rule.AbstractAstVisitor`                                                      |
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
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getRegex()`                                                   | `org.codenarc.rule.naming.MethodNameRule`                                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                               | `org.codenarc.rule.formatting.SpaceAroundOperatorRule`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                               | `org.codenarc.results.FileResults`                                                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                                               | `org.codenarc.rule.convention.CompileStaticRule`                                            |

##### JIT

| Change | Delta |     % | Samples | Function      | Location    |
| -----: | ----: | ----: | ------: | ------------- | ----------- |
| -40.0% |    -2 | <0.1% |   5 → 3 | `vtable stub` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                        | Location                                          |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)`        | `java.lang.invoke.Invokers$Holder`                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitExpressionStatement(ExpressionStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getClass()`                                    | `java.lang.Object`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getClasses()`                                  | `org.codehaus.groovy.ast.ModuleNode`              |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % |       Samples | Function                                                 | Location                                                                    |
| ------: | ----: | -----------: | ------------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
|  +50.8% |  +830 | 11.4% → 9.4% | 1,633 → 2,463 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                                              |
|  +54.7% |  +490 |  6.3% → 5.3% |   896 → 1,386 | `CompileQueue::get`                                      | `libjvm.dylib`                                                              |
|  +87.2% |  +407 |         3.3% |     467 → 874 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
|  +87.3% |  +407 |         3.3% |     466 → 873 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
|  +87.7% |  +407 |  3.2% → 3.3% |     464 → 871 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
|  +88.1% |  +407 |  3.2% → 3.3% |     462 → 869 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
|  +88.0% |  +405 |  3.2% → 3.3% |     460 → 865 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
|  +92.0% |  +401 |  3.0% → 3.2% |     436 → 837 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
|  +89.8% |  +398 |  3.1% → 3.2% |     443 → 841 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
|  +92.0% |  +390 |  3.0% → 3.1% |     424 → 814 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +91.5% |  +389 |  3.0% → 3.1% |     425 → 814 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +90.2% |  +387 |  3.0% → 3.1% |     429 → 816 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +90.2% |  +387 |  3.0% → 3.1% |     429 → 816 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +89.8% |  +386 |  3.0% → 3.1% |     430 → 816 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +105.8% |  +362 |  2.4% → 2.7% |     342 → 704 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +45.7% |  +336 |  5.1% → 4.1% |   736 → 1,072 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                                              |
| +107.0% |  +276 |  1.8% → 2.0% |     258 → 534 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +104.2% |  +247 |  1.7% → 1.8% |     237 → 484 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |
|  +39.4% |  +238 |  4.2% → 3.2% |     604 → 842 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                                              |
|  +38.9% |  +235 |  4.2% → 3.2% |     604 → 839 | `Compile::Compile`                                       | `libjvm.dylib`                                                              |

##### Compiler

|  Change | Delta |            % |       Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------------: | ------------------------------------------- | -------------- |
|  +50.8% |  +830 | 11.4% → 9.4% | 1,633 → 2,463 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +54.7% |  +490 |  6.3% → 5.3% |   896 → 1,386 | `CompileQueue::get`                         | `libjvm.dylib` |
|  +45.7% |  +336 |  5.1% → 4.1% |   736 → 1,072 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  +39.4% |  +238 |  4.2% → 3.2% |     604 → 842 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  +38.9% |  +235 |  4.2% → 3.2% |     604 → 839 | `Compile::Compile`                          | `libjvm.dylib` |
|  +49.3% |  +106 |  1.5% → 1.2% |     215 → 321 | `Compile::Optimize`                         | `libjvm.dylib` |
|  +32.0% |   +94 |  2.1% → 1.5% |     294 → 388 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  +62.6% |   +82 |  0.9% → 0.8% |     131 → 213 | `Compilation::compile_method`               | `libjvm.dylib` |
|  +62.6% |   +82 |  0.9% → 0.8% |     131 → 213 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  +65.5% |   +74 |  0.8% → 0.7% |     113 → 187 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| +113.2% |   +43 |         0.3% |       38 → 81 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  +52.6% |   +41 |         0.5% |      78 → 119 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  +53.3% |   +40 |  0.5% → 0.4% |      75 → 115 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| +257.1% |   +36 |  0.1% → 0.2% |       14 → 50 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  +20.7% |   +35 |  1.2% → 0.8% |     169 → 204 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| +100.0% |   +33 |  0.2% → 0.3% |       33 → 66 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| +100.0% |   +31 |         0.2% |       31 → 62 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +100.0% |   +31 |         0.2% |       31 → 62 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  +96.8% |   +30 |         0.2% |       31 → 61 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
| +155.6% |   +28 |  0.1% → 0.2% |       18 → 46 | `ciBytecodeStream::get_method`              | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % |   Samples | Function                                         | Location                                                                    |
| ------: | ----: | -----------: | --------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
|  +87.2% |  +407 |         3.3% | 467 → 874 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
|  +87.7% |  +407 |  3.2% → 3.3% | 464 → 871 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
|  +88.0% |  +405 |  3.2% → 3.3% | 460 → 865 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
|  +92.0% |  +390 |  3.0% → 3.1% | 424 → 814 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +91.5% |  +389 |  3.0% → 3.1% | 425 → 814 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +90.2% |  +387 |  3.0% → 3.1% | 429 → 816 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +90.2% |  +387 |  3.0% → 3.1% | 429 → 816 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +89.8% |  +386 |  3.0% → 3.1% | 430 → 816 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| +105.8% |  +362 |  2.4% → 2.7% | 342 → 704 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| +107.0% |  +276 |  1.8% → 2.0% | 258 → 534 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| +104.2% |  +247 |  1.7% → 1.8% | 237 → 484 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| +100.0% |  +200 |  1.4% → 1.5% | 200 → 400 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +102.2% |  +187 |  1.3% → 1.4% | 183 → 370 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +100.0% |  +142 |  1.0% → 1.1% | 142 → 284 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +46.3% |   +25 |  0.4% → 0.3% |   54 → 79 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  +41.7% |   +25 |  0.4% → 0.3% |   60 → 85 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  +45.3% |   +24 |  0.4% → 0.3% |   53 → 77 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
|  +45.3% |   +24 |  0.4% → 0.3% |   53 → 77 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
|  +45.3% |   +24 |  0.4% → 0.3% |   53 → 77 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +950.0% |   +19 | <0.1% → 0.1% |    2 → 21 | `addViolationIfDuplicate(Expression, boolean)`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  +50.0% |    +3 |        <0.1% |   6 → 9 | `itable stub`             | `<unknown>` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xba)`  | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `zero_blocks`             | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                                      | Location                                            |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------- | --------------------------------------------------- |
|  +87.3% |  +407 |         3.3% | 466 → 873 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                  |
|  +88.1% |  +407 |  3.2% → 3.3% | 462 → 869 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                  |
|  +92.0% |  +401 |  3.0% → 3.2% | 436 → 837 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                  |
|  +89.8% |  +398 |  3.1% → 3.2% | 443 → 841 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                  |
|  +99.4% |  +155 |  1.1% → 1.2% | 156 → 311 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +104.2% |  +125 |  0.8% → 0.9% | 120 → 245 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
|     new |  +121 |  0.0% → 0.5% |   0 → 121 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700131dc00` |
| +110.6% |  +115 |  0.7% → 0.8% | 104 → 219 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +100.0% |   +96 |         0.7% |  96 → 192 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +114.5% |   +95 |  0.6% → 0.7% |  83 → 178 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +113.8% |   +66 |  0.4% → 0.5% |  58 → 124 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| +118.2% |   +39 |  0.2% → 0.3% |   33 → 72 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|     new |   +35 |  0.0% → 0.1% |    0 → 35 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |
| +125.0% |   +30 |         0.2% |   24 → 54 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
| +160.0% |   +24 |         0.1% |   15 → 39 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| +214.3% |   +15 | <0.1% → 0.1% |    7 → 22 | `newInstance()`                                               | `java.lang.Class`                                   |
|  +60.0% |   +15 |         0.2% |   25 → 40 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|     new |   +14 |  0.0% → 0.1% |    0 → 14 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d6800` |
|  +85.7% |   +12 |         0.1% |   14 → 26 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|     new |   +12 | 0.0% → <0.1% |    0 → 12 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d6400` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                              | Location                                            |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | --------------------------------------------------- |
| removed |   -65 |  0.5% → 0.0% |  65 → 0 | `linkToCallSite(Object, Object, long, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a001320400` |
| removed |   -21 |  0.1% → 0.0% |  21 → 0 | `linkToCallSite(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000a0010c8400` |
|  -53.1% |   -17 |  0.2% → 0.1% | 32 → 15 | `Node::dominates`                                     | `libjvm.dylib`                                      |
|  -51.5% |   -17 |  0.2% → 0.1% | 33 → 16 | `MemNode::all_controls_dominate`                      | `libjvm.dylib`                                      |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::detect_init_independence`            | `libjvm.dylib`                                      |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::can_capture_store`                   | `libjvm.dylib`                                      |
|  -51.7% |   -15 |  0.2% → 0.1% | 29 → 14 | `StoreNode::Ideal`                                    | `libjvm.dylib`                                      |
| removed |    -8 |  0.1% → 0.0% |   8 → 0 | `linkToCallSite(Object, int, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a0013d9800` |
|  -25.9% |    -7 |  0.2% → 0.1% | 27 → 20 | `PhaseGVN::transform_no_reclaim`                      | `libjvm.dylib`                                      |
|  -63.6% |    -7 | 0.1% → <0.1% |  11 → 4 | `linkToCallSite(Object, int, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  -50.0% |    -5 | 0.1% → <0.1% |  10 → 5 | `GraphKit::store_to_memory`                           | `libjvm.dylib`                                      |
|  -55.6% |    -5 | 0.1% → <0.1% |   9 → 4 | `Compile::remove_speculative_types`                   | `libjvm.dylib`                                      |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `linkToCallSite(Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a0013f5000` |
|  -57.1% |    -4 |        <0.1% |   7 → 3 | `MemNode::find_previous_store`                        | `libjvm.dylib`                                      |
|  -44.4% |    -4 | 0.1% → <0.1% |   9 → 5 | `PhaseOutput::Process_OopMap_Node`                    | `libjvm.dylib`                                      |
|  -40.0% |    -4 | 0.1% → <0.1% |  10 → 6 | `RegionNode::Ideal`                                   | `libjvm.dylib`                                      |
|  -33.3% |    -4 | 0.1% → <0.1% |  12 → 8 | `PhaseLive::add_liveout`                              | `libjvm.dylib`                                      |
|  -80.0% |    -4 |        <0.1% |   5 → 1 | `MethodLiveness::BasicBlock::get_liveness_at`         | `libjvm.dylib`                                      |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `Matcher::pd_clone_node`                              | `libjvm.dylib`                                      |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a00134c800` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -53.1% |   -17 |  0.2% → 0.1% | 32 → 15 | `Node::dominates`                             | `libjvm.dylib` |
|  -51.5% |   -17 |  0.2% → 0.1% | 33 → 16 | `MemNode::all_controls_dominate`              | `libjvm.dylib` |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::detect_init_independence`    | `libjvm.dylib` |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::can_capture_store`           | `libjvm.dylib` |
|  -51.7% |   -15 |  0.2% → 0.1% | 29 → 14 | `StoreNode::Ideal`                            | `libjvm.dylib` |
|  -25.9% |    -7 |  0.2% → 0.1% | 27 → 20 | `PhaseGVN::transform_no_reclaim`              | `libjvm.dylib` |
|  -50.0% |    -5 | 0.1% → <0.1% |  10 → 5 | `GraphKit::store_to_memory`                   | `libjvm.dylib` |
|  -55.6% |    -5 | 0.1% → <0.1% |   9 → 4 | `Compile::remove_speculative_types`           | `libjvm.dylib` |
|  -57.1% |    -4 |        <0.1% |   7 → 3 | `MemNode::find_previous_store`                | `libjvm.dylib` |
|  -44.4% |    -4 | 0.1% → <0.1% |   9 → 5 | `PhaseOutput::Process_OopMap_Node`            | `libjvm.dylib` |
|  -40.0% |    -4 | 0.1% → <0.1% |  10 → 6 | `RegionNode::Ideal`                           | `libjvm.dylib` |
|  -33.3% |    -4 | 0.1% → <0.1% |  12 → 8 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
|  -80.0% |    -4 |        <0.1% |   5 → 1 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `Matcher::pd_clone_node`                      | `libjvm.dylib` |
|  -27.3% |    -3 | 0.1% → <0.1% |  11 → 8 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `PhaseIFG::re_insert`                         | `libjvm.dylib` |
|  -30.0% |    -3 | 0.1% → <0.1% |  10 → 7 | `LoadNode::Ideal`                             | `libjvm.dylib` |
|  -11.1% |    -3 |  0.2% → 0.1% | 27 → 24 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `Node_Array::grow`                            | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ConstraintCastNode::hash`                    | `libjvm.dylib` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                  | Location                                                                                        |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                                       |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `visitConstructorOrMethod(MethodNode, boolean)`           | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                        |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `isSpockMethod(MethodCallExpression)`                     | `org.codenarc.rule.unnecessary.UnnecessaryGetterAstVisitor`                                     |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `visitMethodEx(MethodNode)`                               | `org.codenarc.rule.basic.RandomDoubleCoercedToZeroAstVisitor`                                   |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `assertClassImplementsRuleInterface(Class)`               | `org.codenarc.ruleset.RuleSetUtil`                                                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `doCall(Object)`                                          | `org.codenarc.source.AbstractSourceCode$_removeGrabTransformation_closure1$_closure3$_closure4` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `<init>(MethodNode)`                                      | `org.gmetrics.result.MethodKey`                                                                 |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitMethod(MethodNode)`                                 | `org.codenarc.rule.unnecessary.UnnecessaryOverridingMethodAstVisitor`                           |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `processLine(String)`                                     | `org.codenarc.util.MultilineCommentChecker`                                                     |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `doCall(Object)`                                          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`  |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `doCall()`                                                | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor$_visitConstantExpression_closure1`  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `parentPackageName(String)`                               | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                           |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `checkType(String, ASTNode)`                              | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                           |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitConstantExpression(ConstantExpression)`             | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor`                           |
|  -50.0% |    -2 |        <0.1% |   4 → 2 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`                                          |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `super$2$visitPropertyExpression(PropertyExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                        |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                        |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `super$3$visitConstructorOrMethod(MethodNode, boolean)`   | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitPropertyExpression(PropertyExpression)`             | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor`                           |
|  -50.0% |    -2 |        <0.1% |   4 → 2 | `visitImports(ModuleNode)`                                | `org.codenarc.rule.ClassReferenceAstVisitor`                                                    |

##### JIT

| Change | Delta |     % | Samples | Function      | Location    |
| -----: | ----: | ----: | ------: | ------------- | ----------- |
| -40.0% |    -2 | <0.1% |   5 → 3 | `vtable stub` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                      | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| removed |   -65 |  0.5% → 0.0% |  65 → 0 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a001320400`     |
| removed |   -21 |  0.1% → 0.0% |  21 → 0 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x000000a0010c8400`     |
| removed |    -8 |  0.1% → 0.0% |   8 → 0 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a0013d9800`     |
|  -63.6% |    -7 | 0.1% → <0.1% |  11 → 4 | `linkToCallSite(Object, int, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `linkToCallSite(Object, int, int, Object)`                    | `java.lang.invoke.LambdaForm$MH.0x000000a0013f5000`     |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, Object, int, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a00134c800`     |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `linkToCallSite(Object, Object, int, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a0010d6400`     |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `visitConstructorCallExpression(ConstructorCallExpression)`   | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
|  -14.3% |    -2 | 0.1% → <0.1% | 14 → 12 | `getMetaClass()`                                              | `org.codehaus.groovy.reflection.ClassInfo`              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, int, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001392c00`     |
|  -33.3% |    -2 |        <0.1% |   6 → 4 | `visitPropertyExpression(PropertyExpression)`                 | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `linkToCallSite(Object, Object, int, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x000000a001970400`     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getPropertySpreadSafe(Class, Object, String)`                | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `callConstructor(Object, Object)`                             | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(int, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object, Object, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a0013fc000`     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `replaceFirst(String, String)`                                | `java.lang.String`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `bitwiseNegate(Object)`                                       | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `linkToCallSite(Object, long, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a00131c800`     |
