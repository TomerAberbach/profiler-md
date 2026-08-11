# Sampling profile

Collected 26,323 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 94.7% |  24,934 |
| Compiler          |  2.8% |     746 |
| Standard library  |  2.2% |     566 |
| Ours              |  0.1% |      33 |
| JIT               |  0.1% |      21 |
| Unknown           |  0.1% |      21 |
| Garbage collector | <0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                 | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
|  0.1% |      33 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.1% |      15 | `Node::dominates`                        | `libjvm.dylib` |
|  0.1% |      15 | `Node::set_req_X`                        | `libjvm.dylib` |
|  0.1% |      14 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  0.1% |      14 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|  0.1% |      14 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| <0.1% |      11 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
| <0.1% |      10 | `PhaseOutput::BuildOopMaps`              | `libjvm.dylib` |
| <0.1% |      10 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
| <0.1% |       9 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIdealLoop::build_loop_late`        | `libjvm.dylib` |
| <0.1% |       9 | `PhaseLive::compute`                     | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIdealLoop::is_dominator`           | `libjvm.dylib` |
| <0.1% |       9 | `Type::cmp`                              | `libjvm.dylib` |
| <0.1% |       9 | `itable stub`                            | `<unknown>`    |
| <0.1% |       8 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
| <0.1% |       8 | `ConnectionGraph::compute_escape`        | `libjvm.dylib` |
| <0.1% |       8 | `IntervalWalker::walk_to`                | `libjvm.dylib` |
| <0.1% |       7 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |

#### Categories

##### Compiler

|     % | Samples | Function                                 | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
|  0.1% |      33 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  0.1% |      15 | `Node::dominates`                        | `libjvm.dylib` |
|  0.1% |      15 | `Node::set_req_X`                        | `libjvm.dylib` |
|  0.1% |      14 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  0.1% |      14 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|  0.1% |      14 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| <0.1% |      11 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
| <0.1% |      10 | `PhaseOutput::BuildOopMaps`              | `libjvm.dylib` |
| <0.1% |      10 | `PhaseChaitin::elide_copy`               | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIterGVN::subsume_node`             | `libjvm.dylib` |
| <0.1% |       9 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIdealLoop::build_loop_late`        | `libjvm.dylib` |
| <0.1% |       9 | `PhaseLive::compute`                     | `libjvm.dylib` |
| <0.1% |       9 | `PhaseIdealLoop::is_dominator`           | `libjvm.dylib` |
| <0.1% |       9 | `Type::cmp`                              | `libjvm.dylib` |
| <0.1% |       8 | `Node_Backward_Iterator::next`           | `libjvm.dylib` |
| <0.1% |       8 | `ConnectionGraph::compute_escape`        | `libjvm.dylib` |
| <0.1% |       8 | `IntervalWalker::walk_to`                | `libjvm.dylib` |
| <0.1% |       7 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| <0.1% |       7 | `PhiNode::Ideal`                         | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                          | Location                                                                                            |
| ----: | ------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <0.1% |       2 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                                          |
| <0.1% |       1 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                                                    |
| <0.1% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                 |
| <0.1% |       1 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodVisitor`                                                           |
| <0.1% |       1 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.ClassReferenceAstVisitor`                                                        |
| <0.1% |       1 | `getName()`                                       | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule`                                              |
| <0.1% |       1 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                                            |
| <0.1% |       1 | `visitClassEx(ClassNode)`                         | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`                                    |
| <0.1% |       1 | `getAstVisitorClass()`                            | `org.codenarc.rule.groovyism.GStringAsMapKeyRule`                                                   |
| <0.1% |       1 | `getMetaClass()`                                  | `org.codenarc.rule.formatting.BlockStartsWithBlankLineRule`                                         |
| <0.1% |       1 | `doCall(Statement)`                               | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor$_visitBlockStatement_closure2` |
| <0.1% |       1 | `getAstVisitorClass()`                            | `org.codenarc.rule.basic.EmptySynchronizedStatementRule`                                            |
| <0.1% |       1 | `getAstVisitorClass()`                            | `org.codenarc.rule.formatting.SpaceAfterCatchRule`                                                  |
| <0.1% |       1 | `<init>()`                                        | `org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor`                       |
| <0.1% |       1 | `isReady()`                                       | `org.codenarc.rule.AbstractRule`                                                                    |
| <0.1% |       1 | `hasAnyAnnotation(AnnotatedNode, String[])`       | `org.codenarc.util.AstUtil`                                                                         |
| <0.1% |       1 | `<init>()`                                        | `org.codenarc.rule.AbstractAstVisitor`                                                              |
| <0.1% |       1 | `getAstVisitorClass()`                            | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementRule`                                          |
| <0.1% |       1 | `getMetaClass()`                                  | `org.codenarc.rule.basic.EmptyWhileStatementRule`                                                   |
| <0.1% |       1 | `line(int)`                                       | `org.codenarc.source.AbstractSourceCode`                                                            |

##### JIT

|     % | Samples | Function                  | Location    |
| ----: | ------: | ------------------------- | ----------- |
| <0.1% |       9 | `itable stub`             | `<unknown>` |
| <0.1% |       3 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| <0.1% |       3 | `vtable stub`             | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| <0.1% |       1 | `zero_blocks`             | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xba)`  | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                         | Location                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| <0.1% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |       2 | `visitConstructorOrMethod(MethodNode, boolean)`                  | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`   |
| <0.1% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`              |
| <0.1% |       1 | `<init>(Object, Object)`                                         | `groovy.lang.Closure`                               |
| <0.1% |       1 | `newInstance()`                                                  | `java.lang.Class`                                   |
| <0.1% |       1 | `linkToCallSite(Object, int, Object)`                            | `java.lang.invoke.Invokers$Holder`                  |
| <0.1% |       1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])`    | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       2 | `org.codenarc.rule.AbstractAstVisitorRule:90` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Location                                              |
| ----: | ------: | ----------------------------------------------------- |
| 50.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:116` |
| 50.0% |       1 | `org.codehaus.groovy.ast.ClassCodeVisitorSupport:114` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractRule:143` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.unused.UnusedVariableAstVisitor:150` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractMethodVisitor:31` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.ClassReferenceAstVisitor:130` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule:41` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor:53` |

##### `doCall(Statement)` (`org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor$_visitBlockStatement_closure2`)

|      % | Samples | Location                                                                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor$_visitBlockStatement_closure2:61` |

##### `isReady()` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `org.codenarc.rule.AbstractRule:168` |

##### `hasAnyAnnotation(AnnotatedNode, String[])` (`org.codenarc.util.AstUtil`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `org.codenarc.util.AstUtil:500` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `org.codenarc.rule.AbstractAstVisitor:36` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Location                                    |
| -----: | ------: | ------------------------------------------- |
| 100.0% |       1 | `org.codenarc.source.AbstractSourceCode:75` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `java.lang.invoke.MethodHandleNatives:234` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `groovy.lang.Closure:220` |

##### `newInstance()` (`java.lang.Class`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `java.lang.Class:692` |

##### `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter:142` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      33 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      15 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 80.0% |      12 | `Node::replace_edge`          | `libjvm.dylib` |
| 13.3% |       2 | `MergeMemNode::Ideal`         | `libjvm.dylib` |
|  6.7% |       1 | `PhaseIdealLoop::do_split_if` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                                                             | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
| 35.7% |       5 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
| 21.4% |       3 | `PhaseLive::add_liveout`                                           | `libjvm.dylib` |
| 14.3% |       2 | `PhaseIFG::effective_degree`                                       | `libjvm.dylib` |
|  7.1% |       1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|  7.1% |       1 | `PhaseChaitin::compute_initial_block_pressure`                     | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 27.3% |       3 | `ciBytecodeStream::get_method`   | `libjvm.dylib` |
| 18.2% |       2 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |
| 18.2% |       2 | `ciObjectFactory::get`           | `libjvm.dylib` |
|  9.1% |       1 | `ciEnv::get_klass_by_name_impl`  | `libjvm.dylib` |
|  9.1% |       1 | `ciMethod::ensure_method_data`   | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      10 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 88.9% |       8 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 11.1% |       1 | `RegionNode::Ideal`           | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 88.9% |       8 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
| 11.1% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

|     % | Samples | Caller                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 11.1% |       1 | `ConstraintCastNode::higher_equal_types` | `libjvm.dylib` |
| 11.1% |       1 | `Type::hashcons`                         | `libjvm.dylib` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                                                        | Location                                            |
| ----: | ------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 11.1% |       1 | `applyTo(SourceCode, List)`                                   | `org.codenarc.rule.AbstractAstVisitorRule`          |
| 11.1% |       1 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 62.5% |       5 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 37.5% |       3 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       8 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       8 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhiNode::Ideal` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 71.4% |       5 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| 14.3% |       1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                      | Location                                   |
| ----: | ------: | --------------------------- | ------------------------------------------ |
| 33.3% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller                | Location                         |
| -----: | ------: | --------------------- | -------------------------------- |
| 100.0% |       2 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                                        | Location                                                     |
| ----: | ------: | --------------------------------------------- | ------------------------------------------------------------ |
| 50.0% |       1 | `isUnnecessaryCast(CastExpression)`           | `org.codenarc.rule.unnecessary.UnnecessaryCastAstVisitor`    |
| 50.0% |       1 | `visitObjectInitializerStatements(ClassNode)` | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Caller                                                  | Location                                                                    |
| ----: | ------: | ------------------------------------------------------- | --------------------------------------------------------------------------- |
| 50.0% |       1 | `visitMethod(MethodNode)`                               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
| 50.0% |       1 | `super$3$visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractMethodVisitor`)

|      % | Samples | Caller                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |       1 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getName()` (`org.codenarc.rule.naming.ClassNameSameAsFilenameRule`)

|      % | Samples | Caller                   | Location                                    |
| -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% |       1 | `isRuleSuppressed(Rule)` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`)

|      % | Samples | Caller                | Location                         |
| -----: | ------: | --------------------- | -------------------------------- |
| 100.0% |       1 | `applyTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `visitClassEx(ClassNode)` (`org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`)

|      % | Samples | Caller                  | Location                               |
| -----: | ------: | ----------------------- | -------------------------------------- |
| 100.0% |       1 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `getAstVisitorClass()` (`org.codenarc.rule.groovyism.GStringAsMapKeyRule`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor()` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getAstVisitorClass()` (`org.codenarc.rule.basic.EmptySynchronizedStatementRule`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor()` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getAstVisitorClass()` (`org.codenarc.rule.formatting.SpaceAfterCatchRule`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor()` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `isReady()` (`org.codenarc.rule.AbstractRule`)

|      % | Samples | Caller                              | Location                         |
| -----: | ------: | ----------------------------------- | -------------------------------- |
| 100.0% |       1 | `shouldApplyThisRuleTo(SourceCode)` | `org.codenarc.rule.AbstractRule` |

##### `<init>()` (`org.codenarc.rule.AbstractAstVisitor`)

|      % | Samples | Caller     | Location                                                         |
| -----: | ------: | ---------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `<init>()` | `org.codenarc.rule.unnecessary.UnnecessaryIfStatementAstVisitor` |

##### `getAstVisitorClass()` (`org.codenarc.rule.unnecessary.UnnecessaryIfStatementRule`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor()` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `line(int)` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Caller                       | Location                               |
| -----: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% |       1 | `sourceLineTrimmed(ASTNode)` | `org.codenarc.rule.AbstractAstVisitor` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|      % | Samples | Caller                              | Location                                                                                     |
| -----: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `<init>(Object, Object, Reference)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor$_visitMethodCallExpression_closure2` |

##### `newInstance()` (`java.lang.Class`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor()` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `linkToCallSite(Object, int, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                       | Location                                                 |
| -----: | ------: | ------------------------------------------------------------ | -------------------------------------------------------- |
| 100.0% |       1 | `getMethodCallParameterThatIsAClosure(MethodCallExpression)` | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor` |

##### `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|      % | Samples | Caller                            | Location                                                              |
| -----: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|    % | Samples | Function                                                 | Location                                                                    |
| ---: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 9.4% |   2,463 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib`                                                              |
| 5.3% |   1,386 | `CompileQueue::get`                                      | `libjvm.dylib`                                                              |
| 4.1% |   1,072 | `CompileBroker::invoke_compiler_on_method`               | `libjvm.dylib`                                                              |
| 3.3% |     874 | `main(String[])`                                         | `org.codenarc.CodeNarc`                                                     |
| 3.3% |     873 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                                          |
| 3.3% |     871 | `execute(String[])`                                      | `org.codenarc.CodeNarc`                                                     |
| 3.3% |     869 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                                          |
| 3.3% |     865 | `execute()`                                              | `org.codenarc.CodeNarcRunner`                                               |
| 3.2% |     842 | `C2Compiler::compile_method`                             | `libjvm.dylib`                                                              |
| 3.2% |     841 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                          |
| 3.2% |     839 | `Compile::Compile`                                       | `libjvm.dylib`                                                              |
| 3.2% |     837 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                          |
| 3.1% |     816 | `doCall(Object)`                                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 3.1% |     816 | `processDirectory(String, RuleSet)`                      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 3.1% |     816 | `analyze(RuleSet)`                                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 3.1% |     814 | `collectViolations(SourceCode, RuleSet)`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 3.1% |     814 | `processFile(String, DirectoryResults, RuleSet)`         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 2.7% |     704 | `measureRuleProcessingTime(Rule, Closure)`               | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 2.0% |     534 | `doCall(Object)`                                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 1.8% |     484 | `applyTo(SourceCode)`                                    | `org.codenarc.rule.AbstractRule`                                            |

#### Categories

##### Compiler

|    % | Samples | Function                                   | Location       |
| ---: | ------: | ------------------------------------------ | -------------- |
| 9.4% |   2,463 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| 5.3% |   1,386 | `CompileQueue::get`                        | `libjvm.dylib` |
| 4.1% |   1,072 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| 3.2% |     842 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| 3.2% |     839 | `Compile::Compile`                         | `libjvm.dylib` |
| 1.5% |     388 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| 1.2% |     321 | `Compile::Optimize`                        | `libjvm.dylib` |
| 0.8% |     213 | `Compilation::compile_method`              | `libjvm.dylib` |
| 0.8% |     213 | `Compilation::Compilation`                 | `libjvm.dylib` |
| 0.8% |     204 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| 0.7% |     187 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| 0.5% |     125 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| 0.5% |     119 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| 0.4% |     115 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| 0.4% |     106 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| 0.4% |     106 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| 0.3% |      81 | `Compilation::build_hir`                   | `libjvm.dylib` |
| 0.3% |      76 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| 0.3% |      68 | `Matcher::match`                           | `libjvm.dylib` |
| 0.3% |      66 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                         | Location                                                                    |
| ---: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 3.3% |     874 | `main(String[])`                                 | `org.codenarc.CodeNarc`                                                     |
| 3.3% |     871 | `execute(String[])`                              | `org.codenarc.CodeNarc`                                                     |
| 3.3% |     865 | `execute()`                                      | `org.codenarc.CodeNarcRunner`                                               |
| 3.1% |     816 | `doCall(Object)`                                 | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 3.1% |     816 | `processDirectory(String, RuleSet)`              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 3.1% |     816 | `analyze(RuleSet)`                               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 3.1% |     814 | `collectViolations(SourceCode, RuleSet)`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 3.1% |     814 | `processFile(String, DirectoryResults, RuleSet)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 2.7% |     704 | `measureRuleProcessingTime(Rule, Closure)`       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 2.0% |     534 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 1.8% |     484 | `applyTo(SourceCode)`                            | `org.codenarc.rule.AbstractRule`                                            |
| 1.5% |     400 | `applyTo(SourceCode, List)`                      | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 1.4% |     370 | `visitClass(ClassNode)`                          | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 1.1% |     284 | `visitMethod(MethodNode)`                        | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 0.3% |      85 | `doCall(Object)`                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| 0.3% |      79 | `isRuleSuppressed(Rule)`                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 0.3% |      77 | `init()`                                         | `org.codenarc.source.AbstractSourceCode`                                    |
| 0.3% |      77 | `getAst()`                                       | `org.codenarc.source.AbstractSourceCode`                                    |
| 0.3% |      77 | `init()`                                         | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| 0.1% |      27 | `super$3$applyTo(SourceCode, List)`              | `org.codenarc.rule.formatting.IndentationRule`                              |

##### JIT

|     % | Samples | Function                  | Location    |
| ----: | ------: | ------------------------- | ----------- |
| <0.1% |       9 | `itable stub`             | `<unknown>` |
| <0.1% |       3 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| <0.1% |       3 | `vtable stub`             | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| <0.1% |       1 | `zero_blocks`             | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xba)`  | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                      | Location                                                |
| ---: | ------: | ------------------------------------------------------------- | ------------------------------------------------------- |
| 3.3% |     873 | `linkToCallSite(Object, Object, Object)`                      | `java.lang.invoke.Invokers$Holder`                      |
| 3.3% |     869 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                      |
| 3.2% |     841 | `linkToCallSite(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                      |
| 3.2% |     837 | `linkToCallSite(Object, Object, Object, Object, Object)`      | `java.lang.invoke.Invokers$Holder`                      |
| 1.2% |     311 | `visitClass(ClassNode)`                                       | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.9% |     245 | `visitMethod(MethodNode)`                                     | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.8% |     219 | `visitConstructorOrMethod(MethodNode, boolean)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.7% |     192 | `visitBlockStatement(BlockStatement)`                         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.7% |     178 | `visitExpressionStatement(ExpressionStatement)`               | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.5% |     124 | `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`     |
| 0.5% |     121 | `linkToCallSite(Object, Object, long, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000700131dc00`     |
| 0.3% |      72 | `visitBinaryExpression(BinaryExpression)`                     | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| 0.2% |      54 | `visitMethodCallExpression(MethodCallExpression)`             | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| 0.2% |      40 | `visitArgumentlistExpression(ArgumentListExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| 0.1% |      39 | `visitDeclarationExpression(DeclarationExpression)`           | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`       |
| 0.1% |      35 | `linkToCallSite(Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400`     |
| 0.1% |      26 | `visitClosureExpression(ClosureExpression)`                   | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| 0.1% |      22 | `newInstance()`                                               | `java.lang.Class`                                       |
| 0.1% |      14 | `callCurrent(GroovyObject, Object, Object)`                   | `org.codehaus.groovy.runtime.callsite.AbstractCallSite` |
| 0.1% |      14 | `linkToCallSite(Object, int, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070013d6800`     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 56.3% |   1,386 | `CompileQueue::get`                            | `libjvm.dylib` |
| 43.5% |   1,072 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
|  0.1% |       3 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |
| <0.1% |       1 | `AbstractCompiler::on_empty_queue`             | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|    % | Samples | Callee                           | Location       |
| ---: | ------: | -------------------------------- | -------------- |
| 0.1% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 78.5% |     842 | `C2Compiler::compile_method`    | `libjvm.dylib` |
|  0.9% |      10 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.4% |       4 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.1% |       1 | `ciEnv::cache_jvmti_state`      | `libjvm.dylib` |
|  0.1% |       1 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 99.9% |     873 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  0.1% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder` |

##### `execute(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                             | Location                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| 99.3% |     865 | `linkToCallSite(Object, Object)`                   | `java.lang.invoke.Invokers$Holder`                  |
|  0.6% |       5 | `linkToCallSite(Object, Object, int, int, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001929000` |
|  0.1% |       1 | `linkToCallSite(Object, Object, Object)`           | `java.lang.invoke.Invokers$Holder`                  |

##### `execute()` (`org.codenarc.CodeNarcRunner`)

|     % | Samples | Callee                                           | Location                           |
| ----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 96.1% |     831 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  2.7% |      23 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  1.3% |      11 | `linkToCallSite(Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     839 | `Compile::Compile`  | `libjvm.dylib` |
|  0.2% |       2 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 46.2% |     388 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 38.3% |     321 | `Compile::Optimize`                      | `libjvm.dylib` |
|  1.3% |      11 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.1% |       1 | `Type::Initialize`                       | `libjvm.dylib` |
|  0.1% |       1 | `Compile::Init`                          | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Callee                                                   | Location                           |
| -----: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 100.0% |     816 | `linkToCallSite(Object, Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder` |
|  99.8% |     814 | `linkToCallSite(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|   0.1% |       1 | `linkToCallSite(Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
|   0.1% |       1 | `linkToCallSite(Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder` |

##### `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     816 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     816 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                                               | Location                                                                   |
| ----: | ------: | -------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 88.7% |     722 | `linkToCallSite(Object, Object, Object, Object)`                     | `java.lang.invoke.Invokers$Holder`                                         |
| 10.4% |      85 | `linkToCallSite(Object, Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                                         |
|  0.7% |       6 | `linkToCallSite(Object, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                         |
|  0.1% |       1 | `<init>(Object, Object, Reference, Reference, Reference, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |

##### `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     814 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 79.1% |     557 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
| 17.2% |     121 | `linkToCallSite(Object, Object, long, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700131dc00` |
|  1.8% |      13 | `linkToCallSite(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.0% |       7 | `linkToCallSite(Object, long, Object)`           | `java.lang.invoke.LambdaForm$MH.0x000000700131a000` |
|  0.4% |       3 | `linkToCallSite(long, long, Object)`             | `java.lang.invoke.Invokers$Holder`                  |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee                                   | Location                                                                             |
| ----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| 93.6% |     500 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                                   |
|  6.2% |      33 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.Invokers$Holder`                                                   |
|  0.2% |       1 | `<init>(Object, Object, Reference)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `applyTo(SourceCode)` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee                      | Location                                                 |
| ----: | ------: | --------------------------- | -------------------------------------------------------- |
| 75.2% |     364 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  5.6% |      27 | `applyTo(SourceCode, List)` | `org.codenarc.rule.formatting.IndentationRule`           |
|  5.4% |      26 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  2.5% |      12 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  2.3% |      11 | `applyTo(SourceCode, List)` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `applyTo(SourceCode, List)` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee                  | Location                                                |
| ----: | ------: | ----------------------- | ------------------------------------------------------- |
| 85.3% |     341 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractAstVisitor`                  |
|  6.3% |      25 | `getAstVisitor()`       | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  3.5% |      14 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  1.8% |       7 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractMethodVisitor`               |
|  0.5% |       2 | `visitClass(ClassNode)` | `org.codenarc.rule.AbstractFieldVisitor`                |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 52.6% |     204 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 17.5% |      68 | `Matcher::match`                  | `libjvm.dylib` |
| 14.2% |      55 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 11.3% |      44 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  2.1% |       8 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                          | Location                                                        |
| ----: | ------: | ------------------------------- | --------------------------------------------------------------- |
| 83.8% |     310 | `visitClass(ClassNode)`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`               |
|  5.4% |      20 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`         |
|  1.4% |       5 | `visitClassComplete(ClassNode)` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor` |
|  1.4% |       5 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.formatting.IndentationAstVisitor`            |
|  1.1% |       4 | `visitClassEx(ClassNode)`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`        |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 23.7% |      76 | `PhaseIdealLoop::optimize`      | `libjvm.dylib` |
| 22.7% |      73 | `PhaseIterGVN::optimize`        | `libjvm.dylib` |
| 15.3% |      49 | `Compile::optimize_loops`       | `libjvm.dylib` |
| 10.9% |      35 | `ConnectionGraph::do_analysis`  | `libjvm.dylib` |
|  6.9% |      22 | `Compile::inline_incrementally` | `libjvm.dylib` |

##### `visitClass(ClassNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                                        | Location                                                     |
| ---: | ------: | --------------------------------------------- | ------------------------------------------------------------ |
| 0.6% |       2 | `visitImports(ModuleNode)`                    | `org.codenarc.rule.ClassReferenceAstVisitor`                 |
| 0.6% |       2 | `visitImports(ModuleNode)`                    | `org.codenarc.rule.groovyism.GroovyLangImmutableAstVisitor`  |
| 0.3% |       1 | `visitObjectInitializerStatements(ClassNode)` | `org.codenarc.rule.basic.EmptyInstanceInitializerAstVisitor` |

##### `visitMethod(MethodNode)` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee                      | Location                                                           |
| ----: | ------: | --------------------------- | ------------------------------------------------------------------ |
| 85.2% |     242 | `visitMethod(MethodNode)`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                  |
|  1.8% |       5 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.SpaceBeforeClosingBraceAstVisitor`   |
|  1.4% |       4 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.naming.ParameterNameAstVisitor`                 |
|  1.4% |       4 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.unnecessary.UnnecessaryReturnKeywordAstVisitor` |
|  1.4% |       4 | `visitMethodEx(MethodNode)` | `org.codenarc.rule.formatting.IndentationAstVisitor`               |

##### `visitMethod(MethodNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|     % | Samples | Callee                                          | Location                                                                    |
| ----: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| 78.8% |     193 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                           |
|  3.7% |       9 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`                |
|  3.3% |       8 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.ClassReferenceAstVisitor`                                |
|  3.3% |       8 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`             |
|  2.4% |       6 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |

##### `visitConstructorOrMethod(MethodNode, boolean)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                            | Location                                                              |
| ---: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| 0.5% |       1 | `visitAnnotations(AnnotatedNode)` | `org.codenarc.rule.groovyism.GStringExpressionWithinStringAstVisitor` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 87.8% |     187 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 11.7% |      25 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     213 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 27.0% |      55 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 12.3% |      25 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 10.3% |      21 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.8% |      18 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  7.8% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 0.5% |       1 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.3% |      81 | `Compilation::build_hir`       | `libjvm.dylib` |
| 40.6% |      76 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 13.9% |      26 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  2.1% |       4 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `visitExpressionStatement(ExpressionStatement)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|    % | Samples | Callee                      | Location                                                       |
| ---: | ------: | --------------------------- | -------------------------------------------------------------- |
| 2.8% |       5 | `visitStatement(Statement)` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 84.8% |     106 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 12.8% |      16 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `invokeMethodOnSuperN(Class, GroovyObject, String, Object[])` (`org.codehaus.groovy.runtime.ScriptBytecodeAdapter`)

|    % | Samples | Callee        | Location    |
| ---: | ------: | ------------- | ----------- |
| 0.8% |       1 | `itable stub` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 96.6% |     115 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
|  1.7% |       2 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|  0.8% |       1 | `LoadNode::Value`                         | `libjvm.dylib` |
|  0.8% |       1 | `CProjNode::hash`                         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 18.3% |      21 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
| 10.4% |      12 | `PhiNode::Ideal`             | `libjvm.dylib` |
|  7.8% |       9 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  6.1% |       7 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  6.1% |       7 | `CallDynamicJavaNode::Ideal` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 32.1% |      34 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 28.3% |      30 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 10.4% |      11 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  7.5% |       8 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  2.8% |       3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     106 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % | Samples | Callee                                   | Location                                            |
| ----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 98.8% |      84 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  1.2% |       1 | `linkToCallSite(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |

##### `isRuleSuppressed(Rule)` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 97.5% |      77 | `init()`    | `org.codenarc.analyzer.SuppressionAnalyzer`            |
|  1.3% |       1 | `getName()` | `org.codenarc.rule.naming.ClassNameSameAsFilenameRule` |
|  1.3% |       1 | `getName()` | `org.codenarc.rule.formatting.SpaceAfterWhileRule`     |

##### `init()` (`org.codenarc.source.AbstractSourceCode`)

|     % | Samples | Callee                                                           | Location                           |
| ----: | ------: | ---------------------------------------------------------------- | ---------------------------------- |
| 77.9% |      60 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder` |
| 18.2% |      14 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder` |
|  3.9% |       3 | `linkToCallSite(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `getAst()` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee                           | Location                           |
| -----: | ------: | -------------------------------- | ---------------------------------- |
| 100.0% |      77 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|      % | Samples | Callee     | Location                                 |
| -----: | ------: | ---------- | ---------------------------------------- |
| 100.0% |      77 | `getAst()` | `org.codenarc.source.AbstractSourceCode` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 80.3% |      61 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 19.7% |      15 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 79.4% |      54 | `Matcher::xform`                              | `libjvm.dylib` |
|  8.8% |       6 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  2.9% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  1.5% |       1 | `AddINode::Opcode`                            | `libjvm.dylib` |
|  1.5% |       1 | `InitializeNode::Opcode`                      | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 93.9% |      62 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  3.0% |       2 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|  1.5% |       1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  1.5% |       1 | `GraphBuilder::state_at_entry`       | `libjvm.dylib` |

##### `super$3$applyTo(SourceCode, List)` (`org.codenarc.rule.formatting.IndentationRule`)

|      % | Samples | Callee                      | Location                                   |
| -----: | ------: | --------------------------- | ------------------------------------------ |
| 100.0% |      27 | `applyTo(SourceCode, List)` | `org.codenarc.rule.AbstractAstVisitorRule` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  5.3% |   1,385 | `CompileQueue::get` (`libjvm.dylib`) ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |      64 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700131dc00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |      51 | `linkToCallSite(Object, Object, long, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700131dc00`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |      35 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |      29 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`) |
|  0.1% |      23 | `Matcher::xform` (`libjvm.dylib`) ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |      22 | `ciEnv::register_method` (`libjvm.dylib`) ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |      16 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |      16 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                 |
|  0.1% |      16 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `init()` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `getAst()` (`org.codenarc.source.AbstractSourceCode`) ← `init()` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed(Rule)` ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |      14 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |      12 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <0.1% |      12 | `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |      11 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |      11 | `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |      10 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |      10 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <0.1% |      10 | `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime(Rule, Closure)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processFile(String, DirectoryResults, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `doCall(Object)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory(String, RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `analyze(RuleSet)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute()` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `execute(String[])` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `main(String[])` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <0.1% |      10 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |       9 | `ConnectionGraph::compute_escape` (`libjvm.dylib`) ← `ConnectionGraph::do_analysis` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
