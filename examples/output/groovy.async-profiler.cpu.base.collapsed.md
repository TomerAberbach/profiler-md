# Sampling profile

Collected 5,918 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 44.4% |   2,628 |
| Native            | 28.7% |   1,701 |
| Standard library  | 24.6% |   1,457 |
| Ours              |  1.1% |      64 |
| JIT               |  1.0% |      58 |
| Garbage collector |  0.1% |       6 |
| Unknown           |  0.1% |       4 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location    |
| ---: | ------: | ------------------------------------------- | ----------- |
| 1.8% |     105 | `PhaseChaitin::Split`                       | `<unknown>` |
| 1.7% |     102 | `Node::dominates`                           | `<unknown>` |
| 1.0% |      57 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |
| 0.9% |      54 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| 0.8% |      45 | `PhaseChaitin::elide_copy`                  | `<unknown>` |
| 0.7% |      42 | `PhaseAggressiveCoalesce::insert_copies`    | `<unknown>` |
| 0.7% |      42 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |
| 0.7% |      42 | `PhaseChaitin::gather_lrg_masks`            | `<unknown>` |
| 0.6% |      34 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| 0.5% |      31 | `PhaseChaitin::post_allocate_copy_removal`  | `<unknown>` |
| 0.5% |      31 | `PhaseIdealLoop::build_loop_early`          | `<unknown>` |
| 0.5% |      30 | `PhaseLive::compute`                        | `<unknown>` |
| 0.5% |      30 | `PhaseLive::add_liveout`                    | `<unknown>` |
| 0.5% |      29 | `PhaseIdealLoop::Dominators`                | `<unknown>` |
| 0.5% |      29 | `PhaseIdealLoop::is_dominator`              | `<unknown>` |
| 0.5% |      27 | `Node::set_req_X`                           | `<unknown>` |
| 0.4% |      26 | `Matcher::xform`                            | `<unknown>` |
| 0.4% |      25 | `Compile::identify_useful_nodes`            | `<unknown>` |
| 0.4% |      24 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| 0.4% |      23 | `Unique_Node_List::remove`                  | `<unknown>` |

##### Ours

|     % | Samples | Function                        | Location                                                                            |
| ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
|  0.1% |       3 | `collectViolations`             | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                      |
| <0.1% |       2 | `applyTo`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                          |
| <0.1% |       2 | `flexibleCheckForCorrectColumn` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                |
| <0.1% |       2 | `getMetaClass`                  | `org.codenarc.rule.convention.VariableTypeRequiredRule`                             |
| <0.1% |       1 | `doCall`                        | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`          |
| <0.1% |       1 | `visitExpressionStatement`      | `org.codenarc.rule.unnecessary.UnnecessaryDefInVariableDeclarationAstVisitor`       |
| <0.1% |       1 | `getMetaClass`                  | `org.codenarc.rule.unused.UnusedVariableRule`                                       |
| <0.1% |       1 | `applyTo`                       | `org.codenarc.rule.unused.UnusedVariableRule`                                       |
| <0.1% |       1 | `getLines`                      | `org.codenarc.source.AbstractSourceCode`                                            |
| <0.1% |       1 | `findFirstNonAnnotationLine`    | `org.codenarc.util.AstUtil`                                                         |
| <0.1% |       1 | `visitBlockStatement`           | `org.codenarc.rule.convention.IfStatementCouldBeTernaryAstVisitor`                  |
| <0.1% |       1 | `lineNumberForMethod`           | `org.gmetrics.metric.AbstractMethodMetric`                                          |
| <0.1% |       1 | `visitBlockStatement`           | `org.codenarc.rule.formatting.IndentationAstVisitor`                                |
| <0.1% |       1 | `getMetaClass`                  | `org.codenarc.rule.design.LocaleSetDefaultAstVisitor`                               |
| <0.1% |       1 | `visitConstantExpression`       | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                        |
| <0.1% |       1 | `getAstVisitorClass`            | `org.codenarc.rule.formatting.SpaceInsideParenthesesRule`                           |
| <0.1% |       1 | `resolveLabelIndent`            | `org.codenarc.rule.formatting.IndentationAstVisitor`                                |
| <0.1% |       1 | `visitVariableExpression`       | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                            |
| <0.1% |       1 | `doCall`                        | `org.codenarc.rule.unused.UnusedPrivateFieldRule$_collectAllPrivateFields_closure3` |
| <0.1% |       1 | `visitBinaryExpression`         | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`                 |

##### JIT

|     % | Samples | Function                     | Location    |
| ----: | ------: | ---------------------------- | ----------- |
|  0.4% |      22 | `itable stub`                | `<unknown>` |
|  0.2% |       9 | `vtable stub`                | `<unknown>` |
|  0.2% |       9 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
|  0.1% |       7 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
|  0.1% |       3 | `zero_blocks`                | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xba)`     | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbabaa)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbbb)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |     105 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     102 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      57 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 27.8% |      15 | `PhaseChaitin::build_ifg_physical` | `<unknown>` |
| 14.8% |       8 | `PhaseLive::add_liveout`           | `<unknown>` |
| 11.1% |       6 | `PhaseIFG::remove_node`            | `<unknown>` |
|  9.3% |       5 | `PhaseIFG::SquareUp`               | `<unknown>` |
|  7.4% |       4 | `PhaseIFG::re_insert`              | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 93.3% |      42 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
|  6.7% |       3 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      42 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      42 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      42 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 23.5% |       8 | `ciEnv::get_klass_by_index_impl`       | `<unknown>` |
| 20.6% |       7 | `ciBytecodeStream::get_method`         | `<unknown>` |
| 11.8% |       4 | `ciEnv::get_klass_by_name_impl`        | `<unknown>` |
| 11.8% |       4 | `ciMethod::ensure_method_data`         | `<unknown>` |
| 11.8% |       4 | `ciObjectFactory::create_new_metadata` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      31 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      31 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      30 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 86.7% |      26 | `PhaseLive::compute`              | `<unknown>` |
| 13.3% |       4 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      29 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 89.7% |      26 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `<unknown>` |
|  3.4% |       1 | `ConstraintCastNode::dominating_cast`              | `<unknown>` |
|  3.4% |       1 | `PhaseIdealLoop::compute_early_ctrl`               | `<unknown>` |
|  3.4% |       1 | `PhaseIdealLoop::loop_predication_follow_branches` | `<unknown>` |

##### `Node::set_req_X` (`<unknown>`)

|     % | Samples | Caller                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 81.5% |      22 | `Node::replace_edge`  | `<unknown>` |
| 14.8% |       4 | `MergeMemNode::Ideal` | `<unknown>` |
|  3.7% |       1 | `RegionNode::Ideal`   | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |      26 | `Matcher::match` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

|     % | Samples | Caller                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 80.0% |      20 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| 20.0% |       5 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      24 | `PhaseIdealLoop::build_loop_late` | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      23 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 11.1% |       1 | `visitExpressionStatement` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |
| 11.1% |       1 | `visitConstructorOrMethod` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller   | Location                                                                   |
| ----: | ------: | -------- | -------------------------------------------------------------------------- |
| 11.1% |       1 | `doCall` | `org.codenarc.rule.basic.DeadCodeAstVisitor$_visitBlockStatement_closure1` |

##### `applyTo` (`org.codenarc.rule.AbstractAstVisitorRule`)

|      % | Samples | Caller            | Location                                       |
| -----: | ------: | ----------------- | ---------------------------------------------- |
| 100.0% |       2 | `super$3$applyTo` | `org.codenarc.rule.formatting.IndentationRule` |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|     % | Samples | Caller         | Location                                                          |
| ----: | ------: | -------------- | ----------------------------------------------------------------- |
| 50.0% |       1 | `visitClassEx` | `org.codenarc.rule.formatting.BracesForTryCatchFinallyAstVisitor` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Caller   | Location                                                                                 |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------- |
| 50.0% |       1 | `<init>` | `org.codenarc.rule.design.StatelessSingletonAstVisitor$_hasSingletonAnnotation_closure4` |

##### `applyTo` (`org.codenarc.rule.unused.UnusedVariableRule`)

|      % | Samples | Caller    | Location                         |
| -----: | ------: | --------- | -------------------------------- |
| 100.0% |       1 | `applyTo` | `org.codenarc.rule.AbstractRule` |

##### `getMetaClass` (`org.codenarc.rule.design.LocaleSetDefaultAstVisitor`)

|      % | Samples | Caller                 | Location                                            |
| -----: | ------: | ---------------------- | --------------------------------------------------- |
| 100.0% |       1 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `getAstVisitorClass` (`org.codenarc.rule.formatting.SpaceInsideParenthesesRule`)

|      % | Samples | Caller          | Location                                   |
| -----: | ------: | --------------- | ------------------------------------------ |
| 100.0% |       1 | `getAstVisitor` | `org.codenarc.rule.AbstractAstVisitorRule` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                                    |
| ----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------- |
| 57.7% |   3,417 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                                                 |
| 57.0% |   3,375 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                                                 |
| 46.7% |   2,762 | `C2Compiler::compile_method`               | `<unknown>`                                                                 |
| 46.6% |   2,757 | `Compile::Compile`                         | `<unknown>`                                                                 |
| 36.4% |   2,152 | `main`                                     | `org.codenarc.CodeNarc`                                                     |
| 36.3% |   2,150 | `linkToCallSite`                           | `java.lang.invoke.Invokers$Holder`                                          |
| 36.1% |   2,139 | `execute`                                  | `org.codenarc.CodeNarc`                                                     |
| 35.9% |   2,123 | `execute`                                  | `org.codenarc.CodeNarcRunner`                                               |
| 33.5% |   1,984 | `analyze`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.5% |   1,983 | `doCall`                                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.5% |   1,983 | `processDirectory`                         | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.4% |   1,978 | `processFile`                              | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.2% |   1,967 | `collectViolations`                        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.7% |   1,638 | `measureRuleProcessingTime`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 22.1% |   1,308 | `Compile::Code_Gen`                        | `<unknown>`                                                                 |
| 21.8% |   1,290 | `doCall`                                   | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 20.0% |   1,185 | `applyTo`                                  | `org.codenarc.rule.AbstractRule`                                            |
| 18.1% |   1,070 | `Compile::Optimize`                        | `<unknown>`                                                                 |
| 16.3% |     964 | `applyTo`                                  | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 15.6% |     923 | `visitClass`                               | `org.codenarc.rule.AbstractAstVisitor`                                      |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 57.7% |   3,417 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 57.0% |   3,375 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 46.7% |   2,762 | `C2Compiler::compile_method`               | `<unknown>` |
| 46.6% |   2,757 | `Compile::Compile`                         | `<unknown>` |
| 22.1% |   1,308 | `Compile::Code_Gen`                        | `<unknown>` |
| 18.1% |   1,070 | `Compile::Optimize`                        | `<unknown>` |
| 12.7% |     753 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| 10.1% |     595 | `Compilation::Compilation`                 | `<unknown>` |
| 10.0% |     594 | `Compilation::compile_method`              | `<unknown>` |
|  9.0% |     534 | `Compilation::compile_java_method`         | `<unknown>` |
|  8.1% |     481 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  6.7% |     395 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|  6.7% |     395 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  6.6% |     390 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  6.2% |     369 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  3.7% |     220 | `Compilation::build_hir`                   | `<unknown>` |
|  3.6% |     215 | `Matcher::match`                           | `<unknown>` |
|  3.3% |     196 | `Compilation::emit_lir`                    | `<unknown>` |
|  3.0% |     179 | `Compile::optimize_loops`                  | `<unknown>` |
|  2.8% |     167 | `GraphBuilder::GraphBuilder`               | `<unknown>` |

##### Ours

|     % | Samples | Function                    | Location                                                                    |
| ----: | ------: | --------------------------- | --------------------------------------------------------------------------- |
| 36.4% |   2,152 | `main`                      | `org.codenarc.CodeNarc`                                                     |
| 36.1% |   2,139 | `execute`                   | `org.codenarc.CodeNarc`                                                     |
| 35.9% |   2,123 | `execute`                   | `org.codenarc.CodeNarcRunner`                                               |
| 33.5% |   1,984 | `analyze`                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.5% |   1,983 | `doCall`                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 33.5% |   1,983 | `processDirectory`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.4% |   1,978 | `processFile`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
| 33.2% |   1,967 | `collectViolations`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 27.7% |   1,638 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
| 21.8% |   1,290 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 20.0% |   1,185 | `applyTo`                   | `org.codenarc.rule.AbstractRule`                                            |
| 16.3% |     964 | `applyTo`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| 15.6% |     923 | `visitClass`                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| 11.9% |     703 | `visitMethod`               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  4.3% |     253 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|  3.9% |     233 | `isRuleSuppressed`          | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  3.9% |     229 | `init`                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  3.9% |     228 | `init`                      | `org.codenarc.source.AbstractSourceCode`                                    |
|  3.9% |     228 | `getAst`                    | `org.codenarc.source.AbstractSourceCode`                                    |
|  1.4% |      81 | `applyTo`                   | `org.codenarc.rule.AbstractSharedAstVisitorRule`                            |

##### JIT

|     % | Samples | Function                     | Location    |
| ----: | ------: | ---------------------------- | ----------- |
|  0.4% |      22 | `itable stub`                | `<unknown>` |
|  0.2% |       9 | `vtable stub`                | `<unknown>` |
|  0.2% |       9 | `I2C/C2I adapters(0xb)`      | `<unknown>` |
|  0.1% |       7 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
|  0.1% |       3 | `I2C/C2I adapters(0xbbb)`    | `<unknown>` |
|  0.1% |       3 | `zero_blocks`                | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
| <0.1% |       2 | `I2C/C2I adapters(0xba)`     | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbba)`    | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbabaa)`  | `<unknown>` |
| <0.1% |       1 | `I2C/C2I adapters(0xbbbbbb)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 98.8% |   3,375 | `CompileBroker::invoke_compiler_on_method`     | `<unknown>` |
|  1.2% |      40 | `CompileQueue::get`                            | `<unknown>` |
| <0.1% |       1 | `CompileBroker::possibly_add_compiler_threads` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 81.8% |   2,762 | `C2Compiler::compile_method`        | `<unknown>` |
|  0.2% |       7 | `ciEnv::~ciEnv`                     | `<unknown>` |
|  0.1% |       4 | `CompilationLog::log_compile`       | `<unknown>` |
|  0.1% |       2 | `CompileBroker::collect_statistics` | `<unknown>` |
|  0.1% |       2 | `ciEnv::get_method_from_handle`     | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee              | Location    |
| ----: | ------: | ------------------- | ----------- |
| 99.8% |   2,757 | `Compile::Compile`  | `<unknown>` |
|  0.1% |       2 | `Compile::~Compile` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 47.4% |   1,308 | `Compile::Code_Gen`                      | `<unknown>` |
| 38.8% |   1,070 | `Compile::Optimize`                      | `<unknown>` |
|  0.8% |      22 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.2% |       5 | `Compile::inline_string_calls`           | `<unknown>` |
| <0.1% |       1 | `ciMethod::ensure_method_data`           | `<unknown>` |

##### `main` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                               |
| ----: | ------: | ---------------- | -------------------------------------- |
| 99.9% |   2,150 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`     |
|  0.1% |       2 | `linkCallSite`   | `java.lang.invoke.MethodHandleNatives` |

##### `execute` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee           | Location                                            |
| ----: | ------: | ---------------- | --------------------------------------------------- |
| 99.5% |   2,128 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|  0.5% |      11 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x0000007001958c00` |

##### `execute` (`org.codenarc.CodeNarcRunner`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   2,123 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   1,984 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   1,983 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   1,983 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |   1,978 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee           | Location                           |
| ----: | ------: | ---------------- | ---------------------------------- |
| 99.8% |   1,963 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |
|  0.1% |       1 | `<init>`         | `groovy.lang.Reference`            |

##### `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|     % | Samples | Callee           | Location                                                             |
| ----: | ------: | ---------------- | -------------------------------------------------------------------- |
| 82.3% |   1,348 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                                   |
| 16.7% |     274 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x0000007001322800`                  |
|  0.8% |      13 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000700131ac00`                  |
|  0.2% |       3 | `longUnbox`      | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 57.6% |     753 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 16.4% |     215 | `Matcher::match`                  | `<unknown>` |
| 11.2% |     146 | `PhaseOutput::Output`             | `<unknown>` |
| 10.6% |     138 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  1.8% |      24 | `PhaseOutput::install_code`       | `<unknown>` |

##### `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

|     % | Samples | Callee           | Location                                                                             |
| ----: | ------: | ---------------- | ------------------------------------------------------------------------------------ |
| 99.9% |   1,289 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                                                   |
|  0.1% |       1 | `<init>`         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `applyTo` (`org.codenarc.rule.AbstractRule`)

|     % | Samples | Callee    | Location                                                 |
| ----: | ------: | --------- | -------------------------------------------------------- |
| 72.7% |     861 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|  6.8% |      81 | `applyTo` | `org.codenarc.rule.AbstractSharedAstVisitorRule`         |
|  6.4% |      76 | `applyTo` | `org.codenarc.rule.formatting.IndentationRule`           |
|  2.9% |      34 | `applyTo` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|  2.4% |      29 | `applyTo` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 28.2% |     302 | `PhaseIdealLoop::optimize`      | `<unknown>` |
| 20.2% |     216 | `PhaseIterGVN::optimize`        | `<unknown>` |
| 16.7% |     179 | `Compile::optimize_loops`       | `<unknown>` |
|  7.3% |      78 | `Compile::inline_incrementally` | `<unknown>` |
|  6.2% |      66 | `ConnectionGraph::do_analysis`  | `<unknown>` |

##### `applyTo` (`org.codenarc.rule.AbstractAstVisitorRule`)

|     % | Samples | Callee          | Location                                                |
| ----: | ------: | --------------- | ------------------------------------------------------- |
| 87.4% |     843 | `visitClass`    | `org.codenarc.rule.AbstractAstVisitor`                  |
|  5.9% |      57 | `getAstVisitor` | `org.codenarc.rule.AbstractAstVisitorRule`              |
|  2.9% |      28 | `visitClass`    | `org.codenarc.rule.AbstractMethodVisitor`               |
|  2.7% |      26 | `visitClass`    | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|  0.2% |       2 | `getAstVisitor` | `org.codenarc.rule.convention.VectorIsObsoleteRule`     |

##### `visitClass` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee               | Location                                                            |
| ----: | ------: | -------------------- | ------------------------------------------------------------------- |
| 81.8% |     755 | `visitClass`         | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                   |
|  4.2% |      39 | `visitClassEx`       | `org.codenarc.rule.size.AbstractMethodMetricAstVisitor`             |
|  2.8% |      26 | `visitClassComplete` | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`     |
|  1.6% |      15 | `visitClassEx`       | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`            |
|  1.0% |       9 | `visitClassEx`       | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 22.0% |     166 | `PhaseChaitin::Split`                      | `<unknown>` |
| 14.9% |     112 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 11.0% |      83 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| 10.5% |      79 | `PhaseLive::compute`                       | `<unknown>` |
|  8.5% |      64 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |

##### `visitMethod` (`org.codenarc.rule.AbstractAstVisitor`)

|     % | Samples | Callee          | Location                                                                     |
| ----: | ------: | --------------- | ---------------------------------------------------------------------------- |
| 85.5% |     601 | `visitMethod`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                            |
|  2.1% |      15 | `visitMethodEx` | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`               |
|  1.7% |      12 | `visitMethodEx` | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`          |
|  0.9% |       6 | `visitMethodEx` | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
|  0.7% |       5 | `visitMethodEx` | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |

##### `Compilation::Compilation` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 99.8% |     594 | `Compilation::compile_method`                        | `<unknown>` |
|  0.2% |       1 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 89.9% |     534 | `Compilation::compile_java_method` | `<unknown>` |
|  9.4% |      56 | `ciEnv::register_method`           | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 41.2% |     220 | `Compilation::build_hir`       | `<unknown>` |
| 36.7% |     196 | `Compilation::emit_lir`        | `<unknown>` |
| 21.0% |     112 | `Compilation::emit_code_body`  | `<unknown>` |
|  1.1% |       6 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 82.1% |     395 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 17.7% |      85 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 35.9% |     142 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 15.7% |      62 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 12.2% |      48 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
| 10.6% |      42 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.6% |      34 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |     395 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 94.1% |     367 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  0.8% |       3 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  0.8% |       3 | `CProjNode::hash`                         | `<unknown>` |
|  0.3% |       1 | `ConNode::hash`                           | `<unknown>` |
|  0.3% |       1 | `CmpNode::Identity`                       | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 19.5% |      72 | `StoreNode::Ideal`           | `<unknown>` |
| 13.6% |      50 | `PhaseIterGVN::subsume_node` | `<unknown>` |
| 11.1% |      41 | `RegionNode::Ideal`          | `<unknown>` |
|  8.7% |      32 | `PhiNode::Ideal`             | `<unknown>` |
|  7.0% |      26 | `LoadNode::Ideal`            | `<unknown>` |

##### `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

|     % | Samples | Callee           | Location                           |
| ----: | ------: | ---------------- | ---------------------------------- |
| 99.6% |     252 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `isRuleSuppressed` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee     | Location                                                     |
| ----: | ------: | ---------- | ------------------------------------------------------------ |
| 98.3% |     229 | `init`     | `org.codenarc.analyzer.SuppressionAnalyzer`                  |
|  0.9% |       2 | `contains` | `java.util.Collections$SynchronizedCollection`               |
|  0.4% |       1 | `getName`  | `org.codenarc.rule.basic.ThrowExceptionFromFinallyBlockRule` |
|  0.4% |       1 | `toString` | `java.lang.StringBuilder`                                    |

##### `init` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|     % | Samples | Callee                   | Location                                    |
| ----: | ------: | ------------------------ | ------------------------------------------- |
| 99.6% |     228 | `getAst`                 | `org.codenarc.source.AbstractSourceCode`    |
|  0.4% |       1 | `getSuppressedRuleNames` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `init` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     228 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `getAst` (`org.codenarc.source.AbstractSourceCode`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     228 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `Matcher::match` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 70.2% |     151 | `Matcher::xform`                              | `<unknown>` |
| 12.6% |      27 | `Matcher::find_shared`                        | `<unknown>` |
|  6.5% |      14 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |
|  1.4% |       3 | `ProjNode::Opcode`                            | `<unknown>` |
|  0.9% |       2 | `IfFalseNode::Opcode`                         | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 78.6% |     154 | `LinearScan::do_linear_scan` | `<unknown>` |
| 20.9% |      41 | `BlockList::iterate_forward` | `<unknown>` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     179 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 93.4% |     156 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  5.4% |       9 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
|  0.6% |       1 | `GraphBuilder::setup_start_block`    | `<unknown>` |
|  0.6% |       1 | `BlockBegin::iterate_preorder`       | `<unknown>` |

##### `applyTo` (`org.codenarc.rule.AbstractSharedAstVisitorRule`)

|     % | Samples | Callee          | Location                                           |
| ----: | ------: | --------------- | -------------------------------------------------- |
| 79.0% |      64 | `applyVisitor`  | `org.codenarc.rule.AbstractSharedAstVisitorRule`   |
|  9.9% |       8 | `getAstVisitor` | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |
|  4.9% |       4 | `getAstVisitor` | `org.codenarc.rule.unused.UnusedPrivateFieldRule`  |
|  3.7% |       3 | `getViolations` | `org.codenarc.rule.unused.UnusedPrivateMethodRule` |
|  2.5% |       2 | `isValid`       | `org.codenarc.source.AbstractSourceCode`           |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame. `…` stands for frames the entry filter hides.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.6% |     156 | `linkToCallSite` (`java.lang.invoke.LambdaForm$MH.0x0000007001322800`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                              |
| 1.8% |     105 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |      96 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `init` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `getAst` (`org.codenarc.source.AbstractSourceCode`) ← `init` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed` ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `call` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`) |
| 1.6% |      95 | `linkToCallSite` (`java.lang.invoke.LambdaForm$MH.0x0000007001322800`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |      87 | `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.1% |      63 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |      57 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `init` (`org.codenarc.source.AbstractSourceCode`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `getAst` (`org.codenarc.source.AbstractSourceCode`) ← `init` (`org.codenarc.analyzer.SuppressionAnalyzer`) ← `isRuleSuppressed` ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`) ← … ← `call` (`org.codehaus.groovy.runtime.callsite.AbstractCallSite`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                          |
| 0.9% |      55 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                           |
| 0.7% |      44 | `ciEnv::register_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← … ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% |      43 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |      42 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |      42 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |      40 | `CompileQueue::get` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |      37 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.6% |      34 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% |      32 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.5% |      31 | `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarcRunner`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `execute` (`org.codenarc.CodeNarc`) ← … ← `linkToCallSite` (`java.lang.invoke.Invokers$Holder`) ← `main` (`org.codenarc.CodeNarc`)                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |      31 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |      30 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |      25 | `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
