# Sampling profile diff

Collected 6,010 samples → 6,091 samples (+81 samples, +1.3%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  -0.8% |   -21 | 44.1% → 43.2% | 2,650 → 2,629 |
| Native            |  +6.8% |  +111 | 27.1% → 28.6% | 1,630 → 1,741 |
| Standard library  |  +0.4% |    +6 | 26.1% → 25.8% | 1,568 → 1,574 |
| Ours              |  -1.3% |    -1 |          1.3% |       80 → 79 |
| JIT               | -16.7% |   -13 |   1.3% → 1.1% |       78 → 65 |
| Unknown           | -33.3% |    -1 |         <0.1% |         3 → 2 |
| Garbage collector |   0.0% |     0 |         <0.1% |             1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                                                                       | Location                        |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------- | ------------------------------- |
| +160.0% |   +40 |  0.4% → 1.1% |   25 → 65 | `__psynch_cvwait`                                                                              | `<unknown>`                     |
|  +75.0% |   +18 |  0.4% → 0.7% |   24 → 42 | `__psynch_mutexwait`                                                                           | `<unknown>`                     |
| +120.0% |   +18 |  0.2% → 0.5% |   15 → 33 | `PhaseLive::compute`                                                                           | `<unknown>`                     |
|  +68.2% |   +15 |  0.4% → 0.6% |   22 → 37 | `Compile::identify_useful_nodes`                                                               | `<unknown>`                     |
|  +28.0% |   +14 |  0.8% → 1.1% |   50 → 64 | `IndexSetIterator::advance_and_next`                                                           | `<unknown>`                     |
|  +10.5% |   +11 |  1.7% → 1.9% | 105 → 116 | `cast`                                                                                         | `java.lang.Class`               |
| +100.0% |   +10 |  0.2% → 0.3% |   10 → 20 | `G1ParScanThreadState::trim_queue_to_threshold`                                                | `<unknown>`                     |
|  +40.0% |   +10 |  0.4% → 0.6% |   25 → 35 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>`                     |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `type`                                                                                         | `java.lang.invoke.MethodHandle` |
|  +81.8% |    +9 |  0.2% → 0.3% |   11 → 20 | `Matcher::match_tree`                                                                          | `<unknown>`                     |
| +100.0% |    +9 |  0.1% → 0.3% |    9 → 18 | `nmethodBucket::next_not_unloading`                                                            | `<unknown>`                     |
| +300.0% |    +9 | <0.1% → 0.2% |    3 → 12 | `PhaseIFG::SquareUp`                                                                           | `<unknown>`                     |
|  +88.9% |    +8 |  0.1% → 0.3% |    9 → 17 | `DebugInformationRecorder::describe_scope`                                                     | `<unknown>`                     |
|  +66.7% |    +8 |  0.2% → 0.3% |   12 → 20 | `vtable stub`                                                                                  | `<unknown>`                     |
| +266.7% |    +8 | <0.1% → 0.2% |    3 → 11 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                       | `<unknown>`                     |
|  +33.3% |    +8 |  0.4% → 0.5% |   24 → 32 | `G1ParScanThreadState::do_copy_to_survivor_space`                                              | `<unknown>`                     |
| +200.0% |    +8 |  0.1% → 0.2% |    4 → 12 | `RelocIterator::set_limits`                                                                    | `<unknown>`                     |
|     new |    +8 |  0.0% → 0.1% |     0 → 8 | `copyOfRange`                                                                                  | `java.util.Arrays`              |
| +200.0% |    +8 |  0.1% → 0.2% |    4 → 12 | `PcDescContainer::find_pc_desc_internal`                                                       | `<unknown>`                     |
| +160.0% |    +8 |  0.1% → 0.2% |    5 → 13 | `Node::Node`                                                                                   | `<unknown>`                     |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
| +120.0% |   +18 |  0.2% → 0.5% | 15 → 33 | `PhaseLive::compute`                       | `<unknown>` |
|  +68.2% |   +15 |  0.4% → 0.6% | 22 → 37 | `Compile::identify_useful_nodes`           | `<unknown>` |
|  +28.0% |   +14 |  0.8% → 1.1% | 50 → 64 | `IndexSetIterator::advance_and_next`       | `<unknown>` |
|  +81.8% |    +9 |  0.2% → 0.3% | 11 → 20 | `Matcher::match_tree`                      | `<unknown>` |
| +300.0% |    +9 | <0.1% → 0.2% |  3 → 12 | `PhaseIFG::SquareUp`                       | `<unknown>` |
|  +88.9% |    +8 |  0.1% → 0.3% |  9 → 17 | `DebugInformationRecorder::describe_scope` | `<unknown>` |
| +200.0% |    +8 |  0.1% → 0.2% |  4 → 12 | `RelocIterator::set_limits`                | `<unknown>` |
| +160.0% |    +8 |  0.1% → 0.2% |  5 → 13 | `Node::Node`                               | `<unknown>` |
| +100.0% |    +7 |  0.1% → 0.2% |  7 → 14 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  +28.0% |    +7 |  0.4% → 0.5% | 25 → 32 | `PhaseIdealLoop::Dominators`               | `<unknown>` |
| +350.0% |    +7 | <0.1% → 0.1% |   2 → 9 | `PhaseIdealLoop::compute_lca_of_uses`      | `<unknown>` |
|  +50.0% |    +6 |  0.2% → 0.3% | 12 → 18 | `Compile::find_alias_type`                 | `<unknown>` |
|  +33.3% |    +6 |  0.3% → 0.4% | 18 → 24 | `NodeHash::hash_find_insert`               | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `Matcher::Label_Root`                      | `<unknown>` |
|  +83.3% |    +5 |  0.1% → 0.2% |  6 → 11 | `PhaseIdealLoop::get_early_ctrl`           | `<unknown>` |
|  +55.6% |    +5 |  0.1% → 0.2% |  9 → 14 | `PhaseIdealLoop::split_if_with_blocks`     | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `LinearScanWalker::activate_current`       | `<unknown>` |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `Scheduling::ComputeUseCount`              | `<unknown>` |
| +125.0% |    +5 |         0.1% |   4 → 9 | `MergeMemNode::Ideal`                      | `<unknown>` |
|  +55.6% |    +5 |  0.1% → 0.2% |  9 → 14 | `LIR_OpVisitState::visit`                  | `<unknown>` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +160.0% |   +40 |  0.4% → 1.1% | 25 → 65 | `__psynch_cvwait`                                                                                                            | `<unknown>` |
|  +75.0% |   +18 |  0.4% → 0.7% | 24 → 42 | `__psynch_mutexwait`                                                                                                         | `<unknown>` |
| +100.0% |   +10 |  0.2% → 0.3% | 10 → 20 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                              | `<unknown>` |
|  +40.0% |   +10 |  0.4% → 0.6% | 25 → 35 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                               | `<unknown>` |
| +100.0% |    +9 |  0.1% → 0.3% |  9 → 18 | `nmethodBucket::next_not_unloading`                                                                                          | `<unknown>` |
| +266.7% |    +8 | <0.1% → 0.2% |  3 → 11 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                     | `<unknown>` |
|  +33.3% |    +8 |  0.4% → 0.5% | 24 → 32 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `<unknown>` |
| +200.0% |    +8 |  0.1% → 0.2% |  4 → 12 | `PcDescContainer::find_pc_desc_internal`                                                                                     | `<unknown>` |
| +233.3% |    +7 | <0.1% → 0.2% |  3 → 10 | `G1CardSet::add_card`                                                                                                        | `<unknown>` |
| +140.0% |    +7 |  0.1% → 0.2% |  5 → 12 | `nmethod::is_unloading`                                                                                                      | `<unknown>` |
|  +35.0% |    +7 |  0.3% → 0.4% | 20 → 27 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                       | `<unknown>` |
| +350.0% |    +7 | <0.1% → 0.1% |   2 → 9 | `__psynch_cvbroad`                                                                                                           | `<unknown>` |
| +350.0% |    +7 | <0.1% → 0.1% |   2 → 9 | `_qsort`                                                                                                                     | `<unknown>` |
|  +37.5% |    +6 |  0.3% → 0.4% | 16 → 22 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |
|  +35.3% |    +6 |  0.3% → 0.4% | 17 → 23 | `frame::sender_for_compiled_frame`                                                                                           | `<unknown>` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `void G1CMTask::process_grey_task_entry<true>`                                                                               | `<unknown>` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                       | `<unknown>` |
| +100.0% |    +6 |  0.1% → 0.2% |  6 → 12 | `semaphore_wait_trap`                                                                                                        | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `pthread_mutex_lock`                                                                                                         | `<unknown>` |
|  +36.4% |    +4 |         0.2% | 11 → 15 | `Dict::Insert`                                                                                                               | `<unknown>` |

##### Standard library

|  Change | Delta |            % |   Samples | Function                      | Location                                            |
| ------: | ----: | -----------: | --------: | ----------------------------- | --------------------------------------------------- |
|  +10.5% |   +11 |  1.7% → 1.9% | 105 → 116 | `cast`                        | `java.lang.Class`                                   |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `type`                        | `java.lang.invoke.MethodHandle`                     |
|     new |    +8 |  0.0% → 0.1% |     0 → 8 | `copyOfRange`                 | `java.util.Arrays`                                  |
|     new |    +7 |  0.0% → 0.1% |     0 → 7 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
|  +23.3% |    +7 |  0.5% → 0.6% |   30 → 37 | `collector`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001031800` |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `divideOneWord`               | `java.math.MutableBigInteger`                       |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `newArray`                    | `java.lang.reflect.Array`                           |
| +166.7% |    +5 | <0.1% → 0.1% |     3 → 8 | `makePairwiseConvertByEditor` | `java.lang.invoke.MethodHandleImpl`                 |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `guardWithCatch`              | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `visitBlockStatement`         | `org.codehaus.groovy.ast.CodeVisitorSupport`        |
|  +16.0% |    +4 |  0.4% → 0.5% |   25 → 29 | `invokeStatic`                | `java.lang.invoke.DirectMethodHandle$Holder`        |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `binarySort`                  | `java.util.TimSort`                                 |
| +133.3% |    +4 | <0.1% → 0.1% |     3 → 7 | `equals`                      | `java.lang.invoke.MethodType`                       |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `makeImpl`                    | `java.lang.invoke.MethodType`                       |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `charAt`                      | `java.lang.String`                                  |
| +133.3% |    +4 | <0.1% → 0.1% |     3 → 7 | `coerceArgumentsToClasses`    | `org.codehaus.groovy.reflection.ParameterTypes`     |

##### Ours

| Change | Delta |            % | Samples | Function                      | Location                                                                                           |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → <0.1% |   0 → 3 | `isEmptyBlock`                | `org.codenarc.util.AstUtil`                                                                        |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitMethodEx`               | `org.codenarc.rule.AbstractAstVisitor`                                                             |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                      | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`                 |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`                      | `org.codenarc.util.WildcardPattern`                                                                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClass`                  | `org.codenarc.rule.AbstractMethodVisitor`                                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAst`                      | `org.codenarc.source.AbstractSourceCode`                                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isMethodNode`                | `org.codenarc.util.AstUtil`                                                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstantExpression`     | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `sourceLineOrEmpty`           | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassComplete`          | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression`   | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `checkNode`                   | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo`                     | `org.codenarc.rule.imports.DuplicateImportRule`                                                    |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isNotWhitespace`             | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                      | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin$_processViolationsForFile_closure1` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `createAggregateMetricResult` | `org.gmetrics.result.MetricResultBuilder`                                                          |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`                      | `org.codenarc.rule.naming.ObjectOverrideMisspelledMethodNameAstVisitor`                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression`       | `org.codenarc.rule.basic.BrokenNullCheckAstVisitor`                                                |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                      | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx`                | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`                                |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  +66.7% |    +8 |  0.2% → 0.3% | 12 → 20 | `vtable stub`             | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `zero_blocks`             | `<unknown>` |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  +25.0% |    +1 |         0.1% |   4 → 5 | `I2C/C2I adapters(0xb)`   | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                                             |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -26.6% |   -33 |  2.1% → 1.5% | 124 → 91 | `Node::dominates`                                                                                                                                        | `<unknown>`                                          |
|  -52.5% |   -21 |  0.7% → 0.3% |  40 → 19 | `PhaseIdealLoop::is_dominator`                                                                                                                           | `<unknown>`                                          |
|  -43.9% |   -18 |  0.7% → 0.4% |  41 → 23 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `<unknown>`                                          |
|  -15.7% |   -13 |  1.4% → 1.1% |  83 → 70 | `Arena::contains`                                                                                                                                        | `<unknown>`                                          |
|  -23.1% |   -12 |  0.9% → 0.7% |  52 → 40 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `<unknown>`                                          |
| removed |   -11 |  0.2% → 0.0% |   11 → 0 | `invoke`                                                                                                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000700148e800`  |
|  -33.3% |   -11 |  0.5% → 0.4% |  33 → 22 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>`                                          |
|  -39.3% |   -11 |  0.5% → 0.3% |  28 → 17 | `PhaseLive::add_liveout`                                                                                                                                 | `<unknown>`                                          |
|  -50.0% |   -10 |  0.3% → 0.2% |  20 → 10 | `I2C/C2I adapters(0xbb)`                                                                                                                                 | `<unknown>`                                          |
|  -66.7% |   -10 |  0.2% → 0.1% |   15 → 5 | `PhaseIFG::effective_degree`                                                                                                                             | `<unknown>`                                          |
|  -23.7% |    -9 |  0.6% → 0.5% |  38 → 29 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `<unknown>`                                          |
|  -15.3% |    -9 |  1.0% → 0.8% |  59 → 50 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>`                                          |
|  -32.0% |    -8 |  0.4% → 0.3% |  25 → 17 | `invokeStatic`                                                                                                                                           | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  -11.4% |    -8 |  1.2% → 1.0% |  70 → 62 | `newInstance`                                                                                                                                            | `java.lang.reflect.Array`                            |
|  -28.6% |    -8 |  0.5% → 0.3% |  28 → 20 | `collector`                                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |
|  -15.7% |    -8 |  0.8% → 0.7% |  51 → 43 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>`                                          |
|  -80.0% |    -8 | 0.2% → <0.1% |   10 → 2 | `Node::add_req`                                                                                                                                          | `<unknown>`                                          |
|  -21.6% |    -8 |  0.6% → 0.5% |  37 → 29 | `PhaseChaitin::elide_copy`                                                                                                                               | `<unknown>`                                          |
|  -13.3% |    -8 |  1.0% → 0.9% |  60 → 52 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>`                                          |
| removed |    -8 |  0.1% → 0.0% |    8 → 0 | `ShouldNotReachHereNode::is_block_proj`                                                                                                                  | `<unknown>`                                          |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                      | Location    |
| ------: | ----: | -----------: | -------: | --------------------------------------------- | ----------- |
|  -26.6% |   -33 |  2.1% → 1.5% | 124 → 91 | `Node::dominates`                             | `<unknown>` |
|  -52.5% |   -21 |  0.7% → 0.3% |  40 → 19 | `PhaseIdealLoop::is_dominator`                | `<unknown>` |
|  -43.9% |   -18 |  0.7% → 0.4% |  41 → 23 | `PhaseIdealLoop::build_loop_early`            | `<unknown>` |
|  -23.1% |   -12 |  0.9% → 0.7% |  52 → 40 | `PhaseAggressiveCoalesce::insert_copies`      | `<unknown>` |
|  -39.3% |   -11 |  0.5% → 0.3% |  28 → 17 | `PhaseLive::add_liveout`                      | `<unknown>` |
|  -66.7% |   -10 |  0.2% → 0.1% |   15 → 5 | `PhaseIFG::effective_degree`                  | `<unknown>` |
|  -23.7% |    -9 |  0.6% → 0.5% |  38 → 29 | `PhaseIdealLoop::build_loop_late_post_work`   | `<unknown>` |
|  -15.3% |    -9 |  1.0% → 0.8% |  59 → 50 | `PhaseChaitin::build_ifg_physical`            | `<unknown>` |
|  -80.0% |    -8 | 0.2% → <0.1% |   10 → 2 | `Node::add_req`                               | `<unknown>` |
|  -21.6% |    -8 |  0.6% → 0.5% |  37 → 29 | `PhaseChaitin::elide_copy`                    | `<unknown>` |
| removed |    -8 |  0.1% → 0.0% |    8 → 0 | `ShouldNotReachHereNode::is_block_proj`       | `<unknown>` |
|  -18.9% |    -7 |  0.6% → 0.5% |  37 → 30 | `Node::set_req_X`                             | `<unknown>` |
|  -50.0% |    -7 |  0.2% → 0.1% |   14 → 7 | `PhaseChaitin::Select`                        | `<unknown>` |
|  -41.2% |    -7 |  0.3% → 0.2% |  17 → 10 | `PhaseCFG::partial_latency_of_defs`           | `<unknown>` |
|  -20.0% |    -6 |  0.5% → 0.4% |  30 → 24 | `Matcher::xform`                              | `<unknown>` |
|  -46.2% |    -6 |  0.2% → 0.1% |   13 → 7 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|  -35.3% |    -6 |  0.3% → 0.2% |  17 → 11 | `Node::is_CFG`                                | `<unknown>` |
|  -27.3% |    -6 |  0.4% → 0.3% |  22 → 16 | `Unique_Node_List::remove`                    | `<unknown>` |
|  -66.7% |    -6 | 0.1% → <0.1% |    9 → 3 | `RegMask::is_misaligned_pair`                 | `<unknown>` |
|  -60.0% |    -6 |  0.2% → 0.1% |   10 → 4 | `PhaseCFG::schedule_pinned_nodes`             | `<unknown>` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                 | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -15.7% |   -13 |  1.4% → 1.1% | 83 → 70 | `Arena::contains`                                                                                                                                        | `<unknown>` |
|  -33.3% |   -11 |  0.5% → 0.4% | 33 → 22 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
|  -15.7% |    -8 |  0.8% → 0.7% | 51 → 43 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
|  -13.3% |    -8 |  1.0% → 0.9% | 60 → 52 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>` |
|  -87.5% |    -7 | 0.1% → <0.1% |   8 → 1 | `__open`                                                                                                                                                 | `<unknown>` |
|  -38.9% |    -7 |  0.3% → 0.2% | 18 → 11 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `Interval::add_use_pos`                                                                                                                                  | `<unknown>` |
|  -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `Parse::do_one_bytecode`                                                                                                                                 | `<unknown>` |
|   -7.6% |    -6 |  1.3% → 1.2% | 79 → 73 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
|  -21.4% |    -6 |  0.5% → 0.4% | 28 → 22 | `vmSymbols::find_sid`                                                                                                                                    | `<unknown>` |
|  -28.6% |    -6 |  0.3% → 0.2% | 21 → 15 | `BacktraceBuilder::push`                                                                                                                                 | `<unknown>` |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `nmethod::fix_oop_relocations`                                                                                                                           | `<unknown>` |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `iRegPNoSpOper::type`                                                                                                                                    | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `JavaFrameAnchor::make_walkable`                                                                                                                         | `<unknown>` |
|  -12.5% |    -4 |         0.5% | 32 → 28 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `InstanceKlass::find_local_field`                                                                                                                        | `<unknown>` |
|  -30.8% |    -4 |  0.2% → 0.1% |  13 → 9 | `_platform_bzero`                                                                                                                                        | `<unknown>` |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `ResourceBitMap::ResourceBitMap`                                                                                                                         | `<unknown>` |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                                                    | `<unknown>` |
|  -40.0% |    -4 |  0.2% → 0.1% |  10 → 6 | `mach_absolute_time`                                                                                                                                     | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                 | Location                                                |
| ------: | ----: | -----------: | ------: | ------------------------ | ------------------------------------------------------- |
| removed |   -11 |  0.2% → 0.0% |  11 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000700148e800`     |
|  -32.0% |    -8 |  0.4% → 0.3% | 25 → 17 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`    |
|  -11.4% |    -8 |  1.2% → 1.0% | 70 → 62 | `newInstance`            | `java.lang.reflect.Array`                               |
|  -28.6% |    -8 |  0.5% → 0.3% | 28 → 20 | `collector`              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`     |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `getOptimizedTransition` | `groovyjarjarantlr4.v4.runtime.atn.ATNState`            |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `lambdaFormEditor`       | `java.lang.invoke.LambdaFormEditor`                     |
|  -14.3% |    -6 |  0.7% → 0.6% | 42 → 36 | `invokeBasic`            | `java.lang.invoke.MethodHandle`                         |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014e6c00`     |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `removeStaleReferences`  | `jdk.internal.util.ReferencedKeyMap`                    |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `of`                     | `java.lang.invoke.LambdaFormEditor$TransformKey`        |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `uncustomize`            | `java.lang.invoke.LambdaForm`                           |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x00000070014ad400`     |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `guard`                  | `java.lang.invoke.LambdaForm$MH.0x00000070010db400`     |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001121000`     |
|  -50.0% |    -4 |         0.1% |   8 → 4 | `putVal`                 | `java.util.HashMap`                                     |
|  -50.0% |    -4 |         0.1% |   8 → 4 | `getMethods`             | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `computeIfAbsent`        | `java.util.concurrent.ConcurrentHashMap`                |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `getLexerActionExecutor` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`           |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `<init>`                 | `java.util.stream.AbstractPipeline`                     |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `doMethodInvoke`         | `groovy.lang.MetaMethod`                                |

##### Ours

|  Change | Delta |            % | Samples | Function                           | Location                                                              |
| ------: | ----: | -----------: | ------: | ---------------------------------- | --------------------------------------------------------------------- |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `collectViolations`                | `org.codenarc.analyzer.AbstractSourceAnalyzer`                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `writeViolation`                   | `org.codenarc.report.TextReportWriter`                                |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getName`                          | `org.codenarc.rule.formatting.BlockStartsWithBlankLineRule`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `checkStatementIndent`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAstVisitor`                    | `org.codenarc.rule.AbstractAstVisitorRule`                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName`                          | `org.codenarc.rule.basic.BooleanGetBooleanRule`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `$getStaticMetaClass`              | `org.codenarc.rule.ClassReferenceAstVisitor`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodCallExpression`        | `org.codenarc.rule.groovyism.CollectAllIsDeprecatedAstVisitor`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitStatement`                   | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodEx`                    | `org.codenarc.rule.FieldReferenceAstVisitor`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo`                          | `org.codenarc.rule.imports.NoWildcardImportsRule`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitField`                       | `org.codenarc.rule.design.PublicInstanceFieldAstVisitor`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `findFirstNonAnnotationLine`       | `org.codenarc.util.AstUtil`                                           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitDeclarationExpression`       | `org.codenarc.rule.convention.VariableTypeRequiredAstVisitor`         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processSourceLine`                | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>`                           | `org.codenarc.rule.basic.EqualsOverloadedAstVisitor`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `lineNumberForMethod`              | `org.gmetrics.metric.AbstractMethodMetric`                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`                     | `org.codenarc.rule.groovyism.ExplicitTreeSetInstantiationRule`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getCatchOnSameLineAsOpeningBrace` | `org.codenarc.rule.formatting.BracesForTryCatchFinallyRule`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call`                             | `org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult` |

##### JIT

|  Change | Delta |            % | Samples | Function                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|  -50.0% |   -10 |  0.3% → 0.2% | 20 → 10 | `I2C/C2I adapters(0xbb)`         | `<unknown>` |
|  -36.8% |    -7 |  0.3% → 0.2% | 19 → 12 | `itable stub`                    | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `I2C/C2I adapters(0xbbbb)`       | `<unknown>` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `I2C/C2I adapters(0xbbbbaabaab)` | `<unknown>` |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xaab)`        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call_stub`                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xa)`          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbbb)`     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbabaaaaa)`  | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |             % |   Samples | Function                                    | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ----------- |
| +185.0% |   +37 |   0.3% → 0.9% |   20 → 57 | `CompileQueue::get`                         | `<unknown>` |
|   +4.2% |   +25 | 10.0% → 10.2% | 598 → 623 | `Compilation::Compilation`                  | `<unknown>` |
|   +4.0% |   +24 | 10.0% → 10.2% | 598 → 622 | `Compilation::compile_method`               | `<unknown>` |
|  +31.0% |   +22 |   1.2% → 1.5% |   71 → 93 | `ciEnv::register_method`                    | `<unknown>` |
|  +13.3% |   +19 |   2.4% → 2.7% | 143 → 162 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| +100.0% |   +18 |   0.3% → 0.6% |   18 → 36 | `PhaseOutput::Process_OopMap_Node`          | `<unknown>` |
|  +12.2% |   +18 |   2.4% → 2.7% | 147 → 165 | `PhaseOutput::Output`                       | `<unknown>` |
|  +11.6% |   +17 |   2.4% → 2.7% | 147 → 164 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
|  +11.9% |   +16 |   2.2% → 2.5% | 135 → 151 | `GraphBuilder::invoke`                      | `<unknown>` |
|  +28.6% |   +16 |   0.9% → 1.2% |   56 → 72 | `PhaseOutput::fill_buffer`                  | `<unknown>` |
|  +72.7% |   +16 |   0.4% → 0.6% |   22 → 38 | `Compile::identify_useful_nodes`            | `<unknown>` |
|   +9.8% |   +15 |   2.5% → 2.8% | 153 → 168 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
|  +45.2% |   +14 |   0.5% → 0.7% |   31 → 45 | `ciEnv::get_klass_by_index_impl`            | `<unknown>` |
|  +28.0% |   +14 |   0.8% → 1.1% |   50 → 64 | `IndexSetIterator::advance_and_next`        | `<unknown>` |
| +155.6% |   +14 |   0.1% → 0.4% |    9 → 23 | `PhaseIFG::SquareUp`                        | `<unknown>` |
|  +39.4% |   +13 |   0.5% → 0.8% |   33 → 46 | `Matcher::Label_Root`                       | `<unknown>` |
|   +2.4% |   +13 |   9.0% → 9.1% | 540 → 553 | `Compilation::compile_java_method`          | `<unknown>` |
| +433.3% |   +13 |  <0.1% → 0.3% |    3 → 16 | `CompileBroker::compile_method`             | `<unknown>` |
| +260.0% |   +13 |   0.1% → 0.3% |    5 → 18 | `PhaseBlockLayout::PhaseBlockLayout`        | `<unknown>` |
| +133.3% |   +12 |   0.1% → 0.3% |    9 → 21 | `CompilationPolicy::event`                  | `<unknown>` |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                           | Location    |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------- | ----------- |
|  +32.8% |   +81 |   4.1% → 5.4% |     247 → 328 | `WorkerThread::run`                                                                | `<unknown>` |
|   +1.7% |   +63 | 61.7% → 61.9% | 3,706 → 3,769 | `Thread::call_run`                                                                 | `<unknown>` |
|   +1.7% |   +63 | 61.7% → 61.9% | 3,706 → 3,769 | `thread_native_entry`                                                              | `<unknown>` |
|   +1.7% |   +62 | 61.7% → 61.9% | 3,707 → 3,769 | `_pthread_start`                                                                   | `<unknown>` |
|   +1.7% |   +62 | 61.7% → 61.9% | 3,707 → 3,769 | `thread_start`                                                                     | `<unknown>` |
| +160.0% |   +40 |   0.4% → 1.1% |       25 → 65 | `__psynch_cvwait`                                                                  | `<unknown>` |
| +134.5% |   +39 |   0.5% → 1.1% |       29 → 68 | `PlatformMonitor::wait`                                                            | `<unknown>` |
| +200.0% |   +38 |   0.3% → 0.9% |       19 → 57 | `Monitor::wait`                                                                    | `<unknown>` |
|  +77.3% |   +34 |   0.7% → 1.3% |       44 → 78 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`  | `<unknown>` |
|  +75.6% |   +34 |   0.7% → 1.3% |       45 → 79 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `<unknown>` |
|  +71.7% |   +33 |   0.8% → 1.3% |       46 → 79 | `G1RebuildRSAndScrubTask::work`                                                    | `<unknown>` |
|  +72.1% |   +31 |   0.7% → 1.2% |       43 → 74 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`           | `<unknown>` |
|  +60.0% |   +30 |   0.8% → 1.3% |       50 → 80 | `G1CMConcurrentMarkingTask::work`                                                  | `<unknown>` |
|  +58.0% |   +29 |   0.8% → 1.3% |       50 → 79 | `G1CMTask::do_marking_step`                                                        | `<unknown>` |
|  +50.9% |   +27 |   0.9% → 1.3% |       53 → 80 | `HeapRegionManager::par_iterate`                                                   | `<unknown>` |
|   +4.3% |   +26 | 10.0% → 10.2% |     598 → 624 | `Compiler::compile_method`                                                         | `<unknown>` |
|  +35.5% |   +22 |   1.0% → 1.4% |       62 → 84 | `nmethod::new_nmethod`                                                             | `<unknown>` |
| +133.3% |   +20 |   0.2% → 0.6% |       15 → 35 | `G1CMTask::drain_local_queue`                                                      | `<unknown>` |
|  +45.5% |   +20 |   0.7% → 1.1% |       44 → 64 | `void G1CMTask::process_grey_task_entry<true>`                                     | `<unknown>` |
| +172.7% |   +19 |   0.2% → 0.5% |       11 → 30 | `DependencyContext::add_dependent_nmethod`                                         | `<unknown>` |

##### Standard library

|     Change |  Delta |             % |       Samples | Function        | Location                                             |
| ---------: | -----: | ------------: | ------------: | --------------- | ---------------------------------------------------- |
| +219200.0% | +2,192 | <0.1% → 36.0% |     1 → 2,193 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
|  +23833.3% | +2,145 |  0.1% → 35.4% |     9 → 2,154 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800`  |
|  +25214.3% | +1,765 |  0.1% → 29.1% |     7 → 1,772 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070011e1000`  |
|   +5927.6% | +1,719 |  0.5% → 28.7% |    29 → 1,748 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001369000`  |
|    +548.9% | +1,504 |  4.6% → 29.2% |   274 → 1,778 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x00000070011ea400` |
|  +17200.0% | +1,376 |  0.1% → 22.7% |     8 → 1,384 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001369400`  |
|  +26940.0% | +1,347 |  0.1% → 22.2% |     5 → 1,352 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001361400`  |
|     +56.4% |   +759 | 22.4% → 34.5% | 1,345 → 2,104 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001288800`  |
|  +61600.0% |   +616 | <0.1% → 10.1% |       1 → 617 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001290800`  |
|     +34.7% |   +581 | 27.8% → 37.0% | 1,673 → 2,254 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|     +33.8% |   +566 | 27.8% → 36.8% | 1,673 → 2,239 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
|     +33.8% |   +565 | 27.8% → 36.7% | 1,673 → 2,238 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
|   +6200.0% |   +496 |   0.1% → 8.3% |       8 → 504 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000`  |
|     +23.7% |   +410 | 28.8% → 35.1% | 1,729 → 2,139 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001288400`  |
|     +27.0% |   +391 | 24.1% → 30.2% | 1,448 → 1,839 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700159c000`  |
|     +22.1% |   +305 | 22.9% → 27.6% | 1,379 → 1,684 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001673800`  |
|   +1034.6% |   +269 |   0.4% → 4.8% |      26 → 295 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00`  |
|     +14.5% |   +265 | 30.4% → 34.3% | 1,827 → 2,092 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001282000`  |
|  +12750.0% |   +255 |  <0.1% → 4.2% |       2 → 257 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001322400`  |
|    +750.0% |   +255 |   0.6% → 4.7% |      34 → 289 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001031400`  |

##### Ours

|   Change | Delta |             % |       Samples | Function                            | Location                                                                    |
| -------: | ----: | ------------: | ------------: | ----------------------------------- | --------------------------------------------------------------------------- |
|    +2.0% |   +34 | 28.2% → 28.4% | 1,693 → 1,727 | `measureRuleProcessingTime`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|    +2.5% |   +30 | 20.2% → 20.5% | 1,216 → 1,246 | `applyTo`                           | `org.codenarc.rule.AbstractRule`                                            |
|    +2.1% |   +28 | 22.3% → 22.4% | 1,339 → 1,367 | `doCall`                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|    +1.0% |   +20 | 34.2% → 34.1% | 2,054 → 2,074 | `collectViolations`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|    +0.9% |   +19 | 36.9% → 36.7% | 2,219 → 2,238 | `execute`                           | `org.codenarc.CodeNarcRunner`                                               |
|    +0.9% |   +19 | 37.2% → 37.0% | 2,235 → 2,254 | `execute`                           | `org.codenarc.CodeNarc`                                                     |
|    +0.9% |   +18 | 34.4% → 34.2% | 2,066 → 2,084 | `processFile`                       | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|    +0.8% |   +18 | 37.4% → 37.2% | 2,250 → 2,268 | `main`                              | `org.codenarc.CodeNarc`                                                     |
|    +0.8% |   +16 | 34.5% → 34.3% | 2,076 → 2,092 | `processDirectory`                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +160.0% |   +16 |   0.2% → 0.4% |       10 → 26 | `eachImportLine`                    | `org.codenarc.rule.imports.AbstractImportRule`                              |
|    +0.7% |   +15 | 34.5% → 34.3% | 2,076 → 2,091 | `doCall`                            | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|    +0.7% |   +15 | 34.6% → 34.3% | 2,077 → 2,092 | `analyze`                           | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|    +2.0% |   +15 | 12.5% → 12.6% |     752 → 767 | `visitMethod`                       | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +144.4% |   +13 |   0.1% → 0.4% |        9 → 22 | `applyTo`                           | `org.codenarc.rule.imports.DuplicateImportRule`                             |
| +1300.0% |   +13 |  <0.1% → 0.2% |        1 → 14 | `super$2$visitMethodCallExpression` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                         |
|   +38.7% |   +12 |   0.5% → 0.7% |       31 → 43 | `visitMethodCallExpression`         | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
|  +600.0% |   +12 |  <0.1% → 0.2% |        2 → 14 | `visitMethodCallExpression`         | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                         |
|  +133.3% |   +12 |   0.1% → 0.3% |        9 → 21 | `processMethodOrConstructorCall`    | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                    |
|    +1.1% |   +11 | 17.3% → 17.2% | 1,037 → 1,048 | `applyTo`                           | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|   +21.6% |   +11 |   0.8% → 1.0% |       51 → 62 | `visitBlockStatement`               | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  +66.7% |    +8 |  0.2% → 0.3% | 12 → 20 | `vtable stub`             | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `zero_blocks`             | `<unknown>` |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  +25.0% |    +1 |         0.1% |   4 → 5 | `I2C/C2I adapters(0xb)`   | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |       Samples | Function                                    | Location    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------- | ----------- |
|  -3.0% |   -83 | 46.8% → 44.8% | 2,811 → 2,728 | `C2Compiler::compile_method`                | `<unknown>` |
|  -2.9% |   -81 | 46.7% → 44.8% | 2,807 → 2,726 | `Compile::Compile`                          | `<unknown>` |
|  -5.7% |   -65 | 18.8% → 17.5% | 1,132 → 1,067 | `Compile::Optimize`                         | `<unknown>` |
|  -1.7% |   -59 | 56.9% → 55.2% | 3,421 → 3,362 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
|  -7.3% |   -55 | 12.5% → 11.4% |     752 → 697 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
| -12.1% |   -45 |   6.2% → 5.4% |     371 → 326 | `PhaseIterGVN::transform_old`               | `<unknown>` |
| -25.8% |   -32 |   2.1% → 1.5% |      124 → 92 | `Node::dominates`                           | `<unknown>` |
|  -6.4% |   -30 |   7.8% → 7.2% |     468 → 438 | `PhaseIdealLoop::build_and_optimize`        | `<unknown>` |
|  -6.4% |   -30 |   7.8% → 7.2% |     468 → 438 | `PhaseIdealLoop::PhaseIdealLoop`            | `<unknown>` |
|  -5.3% |   -29 |   9.2% → 8.6% |     552 → 523 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
| -22.0% |   -29 |   2.2% → 1.7% |     132 → 103 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  -7.3% |   -28 |   6.4% → 5.9% |     386 → 358 | `PhaseIterGVN::optimize`                    | `<unknown>` |
| -24.1% |   -28 |   1.9% → 1.4% |      116 → 88 | `InitializeNode::can_capture_store`         | `<unknown>` |
| -22.4% |   -28 |   2.1% → 1.6% |      125 → 97 | `MemNode::all_controls_dominate`            | `<unknown>` |
|  -2.1% |   -27 | 21.7% → 21.0% | 1,304 → 1,277 | `Compile::Code_Gen`                         | `<unknown>` |
| -23.7% |   -27 |   1.9% → 1.4% |      114 → 87 | `InitializeNode::detect_init_independence`  | `<unknown>` |
| -27.0% |   -24 |   1.5% → 1.1% |       89 → 65 | `PhaseIterGVN::subsume_node`                | `<unknown>` |
| -24.7% |   -24 |   1.6% → 1.2% |       97 → 73 | `Compile::inline_incrementally`             | `<unknown>` |
| -20.2% |   -24 |   2.0% → 1.6% |      119 → 95 | `StoreNode::Ideal`                          | `<unknown>` |
| -13.2% |   -23 |   2.9% → 2.5% |     174 → 151 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                                                                 | Location    |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -0.7% |   -23 | 57.4% → 56.2% | 3,447 → 3,424 | `JavaThread::thread_main_inner`                                                                                                                          | `<unknown>` |
|  -15.7% |   -13 |   1.4% → 1.1% |       83 → 70 | `Arena::contains`                                                                                                                                        | `<unknown>` |
|  -33.3% |   -11 |   0.5% → 0.4% |       33 → 22 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
|  -37.0% |   -10 |   0.4% → 0.3% |       27 → 17 | `LinkResolver::resolve_static_call`                                                                                                                      | `<unknown>` |
|  -64.3% |    -9 |   0.2% → 0.1% |        14 → 5 | `InlineTree::check_can_parse`                                                                                                                            | `<unknown>` |
|  -64.3% |    -9 |   0.2% → 0.1% |        14 → 5 | `CallGenerator::for_inline`                                                                                                                              | `<unknown>` |
|  -40.9% |    -9 |   0.4% → 0.2% |       22 → 13 | `Parse::do_checkcast`                                                                                                                                    | `<unknown>` |
|  -40.9% |    -9 |   0.4% → 0.2% |       22 → 13 | `LinkResolver::linktime_resolve_static_method`                                                                                                           | `<unknown>` |
|  -20.5% |    -8 |   0.6% → 0.5% |       39 → 31 | `LinkResolver::resolve_method`                                                                                                                           | `<unknown>` |
|  -72.7% |    -8 |  0.2% → <0.1% |        11 → 3 | `Parse::do_exceptions`                                                                                                                                   | `<unknown>` |
|  -33.3% |    -8 |   0.4% → 0.3% |       24 → 16 | `nmethod::oops_do_process_weak`                                                                                                                          | `<unknown>` |
|  -33.3% |    -8 |   0.4% → 0.3% |       24 → 16 | `G1CodeBlobClosure::do_code_blob`                                                                                                                        | `<unknown>` |
|  -58.3% |    -7 |   0.2% → 0.1% |        12 → 5 | `ClassHierarchyIterator::next`                                                                                                                           | `<unknown>` |
|  -23.3% |    -7 |   0.5% → 0.4% |       30 → 23 | `InstanceKlass::uncached_lookup_method`                                                                                                                  | `<unknown>` |
|  -13.7% |    -7 |   0.8% → 0.7% |       51 → 44 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
|  -10.3% |    -7 |   1.1% → 1.0% |       68 → 61 | `Parse::do_field_access`                                                                                                                                 | `<unknown>` |
|  -87.5% |    -7 |  0.1% → <0.1% |         8 → 1 | `__open`                                                                                                                                                 | `<unknown>` |
|  -87.5% |    -7 |  0.1% → <0.1% |         8 → 1 | `handleOpen`                                                                                                                                             | `<unknown>` |
|  -38.9% |    -7 |   0.3% → 0.2% |       18 → 11 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| removed |    -7 |   0.1% → 0.0% |         7 → 0 | `Interval::add_use_pos`                                                                                                                                  | `<unknown>` |

##### Standard library

| Change |  Delta |             % |       Samples | Function         | Location                                             |
| -----: | -----: | ------------: | ------------: | ---------------- | ---------------------------------------------------- |
| -99.8% | -2,231 |  37.2% → 0.1% |     2,235 → 4 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001755000`  |
| -98.3% | -2,183 |  36.9% → 0.6% |    2,220 → 37 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001379000`  |
| -98.5% | -2,045 |  34.5% → 0.5% |    2,076 → 31 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001662400`  |
| -88.8% | -1,984 |  37.2% → 4.1% |   2,234 → 250 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001369800`  |
| -88.7% | -1,982 |  37.2% → 4.2% |   2,235 → 253 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001326000`  |
| -99.8% | -1,739 |  29.0% → 0.1% |     1,743 → 4 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001398400` |
| -38.6% |   -858 | 36.9% → 22.4% | 2,220 → 1,362 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070017fa000`  |
| -31.7% |   -690 | 36.2% → 24.4% | 2,176 → 1,486 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
| -82.1% |   -612 |  12.4% → 2.2% |     745 → 133 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
| -99.5% |   -587 |  9.8% → <0.1% |       590 → 3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070014d9400`  |
| -40.6% |   -536 | 21.9% → 12.9% |   1,319 → 783 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700128dc00`  |
| -19.5% |   -433 | 36.9% → 29.3% | 2,215 → 1,782 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001268800`  |
| -85.9% |   -427 |   8.3% → 1.1% |      497 → 70 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700118a000`  |
| -97.3% |   -291 |   5.0% → 0.1% |       299 → 8 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001362400`  |
| -96.8% |   -270 |   4.6% → 0.1% |       279 → 9 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070014ad400`  |
| -99.6% |   -251 |  4.2% → <0.1% |       252 → 1 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001546c00`  |
| -98.0% |   -250 |   4.2% → 0.1% |       255 → 5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001535000`  |
| -98.8% |   -248 |  4.2% → <0.1% |       251 → 3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070014cd800`  |
| -96.5% |   -248 |   4.3% → 0.1% |       257 → 9 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x00000070013f8000`  |
| -99.6% |   -248 |  4.1% → <0.1% |       249 → 1 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001626c00`  |

##### Ours

|  Change | Delta |            % |   Samples | Function                           | Location                                                                   |
| ------: | ----: | -----------: | --------: | ---------------------------------- | -------------------------------------------------------------------------- |
|   -5.7% |   -14 |  4.1% → 3.8% | 244 → 230 | `isRuleSuppressed`                 | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|   -5.0% |   -12 |  4.0% → 3.7% | 239 → 227 | `init`                             | `org.codenarc.analyzer.SuppressionAnalyzer`                                |
|   -3.7% |   -10 |  4.5% → 4.3% | 271 → 261 | `doCall`                           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|   -4.2% |   -10 |  3.9% → 3.7% | 237 → 227 | `init`                             | `org.codenarc.source.AbstractSourceCode`                                   |
|   -3.8% |    -9 |  4.0% → 3.8% | 238 → 229 | `getAst`                           | `org.codenarc.source.AbstractSourceCode`                                   |
|  -22.5% |    -9 |  0.7% → 0.5% |   40 → 31 | `applyTo`                          | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                   |
|  -56.3% |    -9 |  0.3% → 0.1% |    16 → 7 | `super$3$visitConstructorOrMethod` | `org.codenarc.rule.ClassReferenceAstVisitor`                               |
|  -72.7% |    -8 | 0.2% → <0.1% |    11 → 3 | `getAstVisitor`                    | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                          |
|  -14.8% |    -8 |  0.9% → 0.8% |   54 → 46 | `visitBinaryExpression`            | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                         |
|  -53.3% |    -8 |  0.2% → 0.1% |    15 → 7 | `getText`                          | `org.codenarc.source.SourceFile`                                           |
|  -38.1% |    -8 |  0.3% → 0.2% |   21 → 13 | `visitMethodCallExpression`        | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`      |
|  -42.1% |    -8 |  0.3% → 0.2% |   19 → 11 | `suppressException`                | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`               |
|  -70.0% |    -7 | 0.2% → <0.1% |    10 → 3 | `collectAllPrivateFields`          | `org.codenarc.rule.unused.UnusedPrivateFieldRule`                          |
|  -21.2% |    -7 |  0.5% → 0.4% |   33 → 26 | `visitConstantExpression`          | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`               |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `checkLastLineForSemicolon`        | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                   |
|  -70.0% |    -7 | 0.2% → <0.1% |    10 → 3 | `addViolation`                     | `org.codenarc.rule.AbstractAstVisitor`                                     |
|  -58.3% |    -7 |  0.2% → 0.1% |    12 → 5 | `visitVariableExpression`          | `org.codenarc.rule.ClassReferenceAstVisitor`                               |
|  -23.3% |    -7 |  0.5% → 0.4% |   30 → 23 | `visitBinaryExpression`            | `org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`               |
|  -26.9% |    -7 |  0.4% → 0.3% |   26 → 19 | `visitVariableExpression`          | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                   |
|  -50.0% |    -7 |  0.2% → 0.1% |    14 → 7 | `visitConstructorOrMethod`         | `org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`            |

##### JIT

|  Change | Delta |            % | Samples | Function                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------- | ----------- |
|  -50.0% |   -10 |  0.3% → 0.2% | 20 → 10 | `I2C/C2I adapters(0xbb)`         | `<unknown>` |
|  -36.8% |    -7 |  0.3% → 0.2% | 19 → 12 | `itable stub`                    | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `I2C/C2I adapters(0xbbbb)`       | `<unknown>` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `I2C/C2I adapters(0xbbbbaabaab)` | `<unknown>` |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `I2C/C2I adapters(0xba)`         | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xaab)`        | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call_stub`                      | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xa)`          | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbbbb)`     | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbabaaaaa)`  | `<unknown>` |
