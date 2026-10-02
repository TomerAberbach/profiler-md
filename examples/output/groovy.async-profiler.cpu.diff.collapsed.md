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

|  Change | Delta |            % |   Samples | Function                      | Location                                                                                                |
| ------: | ----: | -----------: | --------: | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
|  +10.5% |   +11 |  1.7% → 1.9% | 105 → 116 | `cast`                        | `java.lang.Class`                                                                                       |
| +500.0% |   +10 | <0.1% → 0.2% |    2 → 12 | `type`                        | `java.lang.invoke.MethodHandle`                                                                         |
|     new |    +8 |  0.0% → 0.1% |     0 → 8 | `copyOfRange`                 | `java.util.Arrays`                                                                                      |
|     new |    +7 |  0.0% → 0.1% |     0 → 7 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000c00128d400 → java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
|  +23.3% |    +7 |  0.5% → 0.6% |   30 → 37 | `collector`                   | `java.lang.invoke.LambdaForm$MH.0x000000c0010a1000 → java.lang.invoke.LambdaForm$MH.0x0000007001031800` |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `divideOneWord`               | `java.math.MutableBigInteger`                                                                           |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000c001188000 → java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000c0010d8000 → java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `newArray`                    | `java.lang.reflect.Array`                                                                               |
| +166.7% |    +5 | <0.1% → 0.1% |     3 → 8 | `makePairwiseConvertByEditor` | `java.lang.invoke.MethodHandleImpl`                                                                     |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `guardWithCatch`              | `java.lang.invoke.LambdaForm$MH.0x000000c0010aa000 → java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `visitBlockStatement`         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                                            |
|  +16.0% |    +4 |  0.4% → 0.5% |   25 → 29 | `invokeStatic`                | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `binarySort`                  | `java.util.TimSort`                                                                                     |
| +133.3% |    +4 | <0.1% → 0.1% |     3 → 7 | `equals`                      | `java.lang.invoke.MethodType`                                                                           |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `makeImpl`                    | `java.lang.invoke.MethodType`                                                                           |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000c0014a9400 → java.lang.invoke.LambdaForm$MH.0x000000700109a400` |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `invoke`                      | `java.lang.invoke.LambdaForm$MH.0x000000c001398800 → java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
| +400.0% |    +4 | <0.1% → 0.1% |     1 → 5 | `charAt`                      | `java.lang.String`                                                                                      |
| +133.3% |    +4 | <0.1% → 0.1% |     3 → 7 | `coerceArgumentsToClasses`    | `org.codehaus.groovy.reflection.ParameterTypes`                                                         |

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

|  Change | Delta |            % |  Samples | Function                                                                                                                                                 | Location                                                                                                  |
| ------: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  -26.6% |   -33 |  2.1% → 1.5% | 124 → 91 | `Node::dominates`                                                                                                                                        | `<unknown>`                                                                                               |
|  -52.5% |   -21 |  0.7% → 0.3% |  40 → 19 | `PhaseIdealLoop::is_dominator`                                                                                                                           | `<unknown>`                                                                                               |
|  -43.9% |   -18 |  0.7% → 0.4% |  41 → 23 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `<unknown>`                                                                                               |
|  -15.7% |   -13 |  1.4% → 1.1% |  83 → 70 | `Arena::contains`                                                                                                                                        | `<unknown>`                                                                                               |
|  -23.1% |   -12 |  0.9% → 0.7% |  52 → 40 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `<unknown>`                                                                                               |
| removed |   -11 |  0.2% → 0.0% |   11 → 0 | `invoke`                                                                                                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000c00102ac00 → java.lang.invoke.LambdaForm$MH.0x000000700148e800`   |
|  -33.3% |   -11 |  0.5% → 0.4% |  33 → 22 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>`                                                                                               |
|  -39.3% |   -11 |  0.5% → 0.3% |  28 → 17 | `PhaseLive::add_liveout`                                                                                                                                 | `<unknown>`                                                                                               |
|  -50.0% |   -10 |  0.3% → 0.2% |  20 → 10 | `I2C/C2I adapters(0xbb)`                                                                                                                                 | `<unknown>`                                                                                               |
|  -66.7% |   -10 |  0.2% → 0.1% |   15 → 5 | `PhaseIFG::effective_degree`                                                                                                                             | `<unknown>`                                                                                               |
|  -23.7% |    -9 |  0.6% → 0.5% |  38 → 29 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                                              | `<unknown>`                                                                                               |
|  -15.3% |    -9 |  1.0% → 0.8% |  59 → 50 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `<unknown>`                                                                                               |
|  -32.0% |    -8 |  0.4% → 0.3% |  25 → 17 | `invokeStatic`                                                                                                                                           | `java.lang.invoke.LambdaForm$DMH.0x000000c001088800 → java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  -11.4% |    -8 |  1.2% → 1.0% |  70 → 62 | `newInstance`                                                                                                                                            | `java.lang.reflect.Array`                                                                                 |
|  -28.6% |    -8 |  0.5% → 0.3% |  28 → 20 | `collector`                                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c001031800 → java.lang.invoke.LambdaForm$MH.0x00000070010a1000`   |
|  -15.7% |    -8 |  0.8% → 0.7% |  51 → 43 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>`                                                                                               |
|  -80.0% |    -8 | 0.2% → <0.1% |   10 → 2 | `Node::add_req`                                                                                                                                          | `<unknown>`                                                                                               |
|  -21.6% |    -8 |  0.6% → 0.5% |  37 → 29 | `PhaseChaitin::elide_copy`                                                                                                                               | `<unknown>`                                                                                               |
|  -13.3% |    -8 |  1.0% → 0.9% |  60 → 52 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `<unknown>`                                                                                               |
| removed |    -8 |  0.1% → 0.0% |    8 → 0 | `ShouldNotReachHereNode::is_block_proj`                                                                                                                  | `<unknown>`                                                                                               |

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

|  Change | Delta |            % | Samples | Function                 | Location                                                                                                  |
| ------: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| removed |   -11 |  0.2% → 0.0% |  11 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000c00102ac00 → java.lang.invoke.LambdaForm$MH.0x000000700148e800`   |
|  -32.0% |    -8 |  0.4% → 0.3% | 25 → 17 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x000000c001088800 → java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  -11.4% |    -8 |  1.2% → 1.0% | 70 → 62 | `newInstance`            | `java.lang.reflect.Array`                                                                                 |
|  -28.6% |    -8 |  0.5% → 0.3% | 28 → 20 | `collector`              | `java.lang.invoke.LambdaForm$MH.0x000000c001031800 → java.lang.invoke.LambdaForm$MH.0x00000070010a1000`   |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `getOptimizedTransition` | `groovyjarjarantlr4.v4.runtime.atn.ATNState`                                                              |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `lambdaFormEditor`       | `java.lang.invoke.LambdaFormEditor`                                                                       |
|  -14.3% |    -6 |  0.7% → 0.6% | 42 → 36 | `invokeBasic`            | `java.lang.invoke.MethodHandle`                                                                           |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000c00109a400 → java.lang.invoke.LambdaForm$MH.0x00000070014e6c00`   |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `removeStaleReferences`  | `jdk.internal.util.ReferencedKeyMap`                                                                      |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `of`                     | `java.lang.invoke.LambdaFormEditor$TransformKey`                                                          |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `uncustomize`            | `java.lang.invoke.LambdaForm`                                                                             |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000c001031400 → java.lang.invoke.LambdaForm$MH.0x00000070014ad400`   |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `guard`                  | `java.lang.invoke.LambdaForm$MH.0x000000c0010cb400 → java.lang.invoke.LambdaForm$MH.0x00000070010db400`   |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000c0010ab000 → java.lang.invoke.LambdaForm$MH.0x0000007001121000`   |
|  -50.0% |    -4 |         0.1% |   8 → 4 | `putVal`                 | `java.util.HashMap`                                                                                       |
|  -50.0% |    -4 |         0.1% |   8 → 4 | `getMethods`             | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                                                   |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `computeIfAbsent`        | `java.util.concurrent.ConcurrentHashMap`                                                                  |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `getLexerActionExecutor` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                                                             |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `<init>`                 | `java.util.stream.AbstractPipeline`                                                                       |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `doMethodInvoke`         | `groovy.lang.MetaMethod`                                                                                  |

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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                      | Location    |
| ------: | ----: | -------------: | ------: | --------------------------- | ----------- |
| +156.0% |   +39 | 100.0% → 98.5% | 25 → 64 | `PlatformMonitor::wait`     | `<unknown>` |
|     new |    +1 |    0.0% → 1.5% |   0 → 1 | `PlatformEvent::park_nanos` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +75.0% |   +18 | 100.0% | 24 → 42 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +120.0% |   +18 | 100.0% | 15 → 33 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +87.5% |   +14 | 72.7% → 81.1% | 16 → 30 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
| +16.7% |    +1 | 27.3% → 18.9% |   6 → 7 | `Matcher::specialize_generic_vector_operands` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| +166.7% |    +5 |  6.0% → 12.5% |   3 → 8 | `PhaseChaitin::Simplify`                       | `<unknown>` |
|  -29.4% |    -5 | 34.0% → 18.8% | 17 → 12 | `PhaseChaitin::build_ifg_physical`             | `<unknown>` |
|     new |    +5 |   0.0% → 7.8% |   0 → 5 | `PhaseChaitin::compute_initial_block_pressure` | `<unknown>` |
|  +50.0% |    +3 | 12.0% → 14.1% |   6 → 9 | `PhaseLive::add_liveout`                       | `<unknown>` |
|  +75.0% |    +3 |  8.0% → 10.9% |   4 → 7 | `PhaseIFG::remove_node`                        | `<unknown>` |

##### `cast` (`java.lang.Class`)

|  Change | Delta |              % |   Samples | Caller          | Location                                                      |
| ------: | ----: | -------------: | --------: | --------------- | ------------------------------------------------------------- |
|  +11.5% |   +12 | 99.0% → 100.0% | 104 → 116 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`                  |
| removed |    -1 |    1.0% → 0.0% |     1 → 0 | `set`           | `java.lang.invoke.VarHandleReferences$FieldInstanceReadWrite` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
| +116.7% |    +7 | 60.0% → 65.0% |  6 → 13 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
|     new |    +2 |  0.0% → 10.0% |   0 → 2 | `G1ParEvacuateFollowersClosure::do_void`                            | `<unknown>` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)2, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                         | Location    |
| -----: | ----: | -------------: | ------: | ---------------------------------------------- | ----------- |
| +36.0% |    +9 | 100.0% → 97.1% | 25 → 34 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |
|    new |    +1 |    0.0% → 2.9% |   0 → 1 | `G1CMTask::drain_local_queue`                  | `<unknown>` |

##### `type` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |              % | Samples | Caller                  | Location                                                  |
| ------: | ----: | -------------: | ------: | ----------------------- | --------------------------------------------------------- |
| +400.0% |    +8 | 100.0% → 83.3% |  2 → 10 | `checkExactType`        | `java.lang.invoke.Invokers`                               |
|     new |    +1 |    0.0% → 8.3% |   0 → 1 | `addExceptionHandler`   | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|     new |    +1 |    0.0% → 8.3% |   0 → 1 | `makeSpecializedTarget` | `jdk.internal.reflect.MethodHandleAccessorFactory`        |

##### `Matcher::match_tree` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
|  +66.7% |    +6 | 81.8% → 75.0% |  9 → 15 | `Matcher::xform`      | `<unknown>` |
| +150.0% |    +3 | 18.2% → 25.0% |   2 → 5 | `Matcher::match_sfpt` | `<unknown>` |

##### `nmethodBucket::next_not_unloading` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +150.0% |    +9 | 66.7% → 83.3% |  6 → 15 | `DependencyContext::add_dependent_nmethod` | `<unknown>` |

##### `PhaseIFG::SquareUp` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                            | Location    |
| ------: | ----: | -----: | ------: | --------------------------------- | ----------- |
| +300.0% |    +9 | 100.0% |  3 → 12 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `DebugInformationRecorder::describe_scope` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| +200.0% |    +4 | 22.2% → 35.3% |   2 → 6 | `NonSafepointEmitter::emit_non_safepoint`        | `<unknown>` |
| +100.0% |    +1 | 11.1% → 11.8% |   1 → 2 | `LIR_Assembler::record_non_safepoint_debug_info` | `<unknown>` |
|  +25.0% |    +1 | 44.4% → 29.4% |   4 → 5 | `IRScopeDebugInfo::record_debug_info`            | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `NonSafepointEmitter::observe_instruction`       | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `PhaseOutput::fill_buffer`                       | `<unknown>` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                           | Location                                      |
| ------: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------- |
|     new |    +2 | 0.0% → 10.0% |   0 → 2 | `asType`                         | `java.lang.invoke.MethodHandle`               |
|     new |    +2 | 0.0% → 10.0% |   0 → 2 | `visitTupleExpression`           | `org.codehaus.groovy.ast.CodeVisitorSupport`  |
|  -50.0% |    -1 | 16.7% → 5.0% |   2 → 1 | `transform`                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `dropArgumentsTrusted`           | `java.lang.invoke.MethodHandles`              |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `visitConstructorCallExpression` | `org.codehaus.groovy.ast.CodeVisitorSupport`  |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
| +400.0% |    +8 | 66.7% → 90.9% |  2 → 10 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
|  +21.7% |    +5 | 95.8% → 87.5% | 23 → 28 | `G1ParScanThreadState::trim_queue_to_threshold`                     | `<unknown>` |
|     new |    +2 |   0.0% → 6.3% |   0 → 2 | `G1ParScanThreadState::steal_and_trim_queue`                        | `<unknown>` |
|     new |    +2 |   0.0% → 6.3% |   0 → 2 | `G1ScanHRForRegionClosure::scan_memregion`                          | `<unknown>` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `<unknown>` |

##### `RelocIterator::set_limits` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                           | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| +600.0% |    +6 | 25.0% → 58.3% |   1 → 7 | `CompiledMethod::attached_method`                | `<unknown>` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `BarrierSetNMethod::guard_value`                 | `<unknown>` |
| +100.0% |    +1 | 25.0% → 16.7% |   1 → 2 | `trampoline_stub_Relocation::get_trampoline_for` | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `SharedRuntime::reresolve_call_site`             | `<unknown>` |

##### `copyOfRange` (`java.util.Arrays`)

| Change | Delta |            % | Samples | Caller                 | Location                         |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------------------------- |
|    new |    +4 | 0.0% → 50.0% |   0 → 4 | `dropParameterTypes`   | `java.lang.invoke.MethodType`    |
|    new |    +2 | 0.0% → 25.0% |   0 → 2 | `dropArgumentsToMatch` | `java.lang.invoke.MethodHandles` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `<init>`               | `java.lang.String`               |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `newString`            | `java.lang.StringLatin1`         |

##### `PcDescContainer::find_pc_desc_internal` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +233.3% |    +7 | 75.0% → 83.3% |  3 → 10 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `vframeStreamCommon::next`                 | `<unknown>` |

##### `Node::Node` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ----------- |
|     new |    +2 | 0.0% → 15.4% |   0 → 2 | `BarrierSetC2::obj_allocate`       | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `PhaseChaitin::get_spillcopy_wide` | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `IdealKit::make_leaf_call`         | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `GraphKit::gen_subtype_check`      | `<unknown>` |
|     new |    +1 |  0.0% → 7.7% |   0 → 1 | `State::MachNodeGenerator`         | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                 | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------- | ----------- |
| +133.3% |    +8 | 85.7% → 100.0% |  6 → 14 | `PhaseIterGVN::optimize`               | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +28.0% |    +7 | 100.0% | 25 → 32 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                      | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | ----------- |
| +250.0% |    +5 | 100.0% → 77.8% |   2 → 7 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|     new |    +2 |   0.0% → 22.2% |   0 → 2 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |

##### `Compile::find_alias_type` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|     new |    +2 |  0.0% → 11.1% |   0 → 2 | `Compile::alias_type`               | `<unknown>` |
|  +12.5% |    +1 | 66.7% → 50.0% |   8 → 9 | `ConnectionGraph::create_split_phi` | `<unknown>` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `MemNode::can_see_stored_value`     | `<unknown>` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `MemNode::Ideal_common`             | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `BarrierSetC2::store_at_resolved`   | `<unknown>` |

##### `NodeHash::hash_find_insert` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|  +50.0% |    +5 | 55.6% → 62.5% | 10 → 15 | `PhaseIterGVN::transform_old`    | `<unknown>` |
| removed |    -3 |  16.7% → 0.0% |   3 → 0 | `PhaseValues::uncached_makecon`  | `<unknown>` |
|  +25.0% |    +1 | 22.2% → 20.8% |   4 → 5 | `PhaseGVN::transform_no_reclaim` | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `GraphKit::create_and_xform_if`  | `<unknown>` |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `PhaseIdealLoop::fix_body_edges` | `<unknown>` |

##### `Matcher::Label_Root` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                | Location    |
| -----: | ----: | -------------: | ------: | --------------------- | ----------- |
|    new |    +6 |   0.0% → 60.0% |   0 → 6 | `Matcher::match_tree` | `<unknown>` |
| -40.0% |    -2 | 100.0% → 30.0% |   5 → 3 | `Matcher::Label_Root` | `<unknown>` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `Matcher::xform`      | `<unknown>` |

##### `PhaseIdealLoop::get_early_ctrl` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                               | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------ | ----------- |
| +66.7% |    +4 | 100.0% → 90.9% |  6 → 10 | `PhaseIdealLoop::build_loop_early`   | `<unknown>` |
|    new |    +1 |    0.0% → 9.1% |   0 → 1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                               | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------ | ----------- |
| +44.4% |    +4 | 100.0% → 92.9% |  9 → 13 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
|    new |    +1 |    0.0% → 7.1% |   0 → 1 | `PhaseIdealLoop::PhaseIdealLoop`     | `<unknown>` |

##### `LinearScanWalker::activate_current` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `IntervalWalker::walk_to` | `<unknown>` |

##### `Scheduling::ComputeUseCount` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                     | Location    |
| ------: | ----: | -----: | ------: | -------------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `Scheduling::DoScheduling` | `<unknown>` |

##### `MergeMemNode::Ideal` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------- | ----------- |
| +100.0% |    +4 | 100.0% → 88.9% |   4 → 8 | `PhaseIterGVN::transform_old` | `<unknown>` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `PhaseIterGVN::optimize`      | `<unknown>` |

##### `LIR_OpVisitState::visit` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +200.0% |    +4 | 22.2% → 42.9% |   2 → 6 | `LinearScan::compute_local_live_sets` | `<unknown>` |
|  -40.0% |    -2 | 55.6% → 21.4% |   5 → 3 | `LinearScan::assign_reg_num`          | `<unknown>` |
| +200.0% |    +2 | 11.1% → 21.4% |   1 → 3 | `LinearScan::build_intervals`         | `<unknown>` |
| +100.0% |    +1 | 11.1% → 14.3% |   1 → 2 | `LinearScan::do_linear_scan`          | `<unknown>` |

##### `G1CardSet::add_card` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|     new |    +4 |  0.0% → 40.0% |   0 → 4 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `void InstanceRefKlass::oop_oop_iterate_fields<narrowOop, G1RebuildRemSetClosure, AlwaysContains>`     | `<unknown>` |
| +100.0% |    +1 | 33.3% → 20.0% |   1 → 2 | `G1CardSet::transfer_cards_in_howl`                                                                    | `<unknown>` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                            | `<unknown>` |

##### `nmethod::is_unloading` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +600.0% |    +6 | 20.0% → 58.3% |   1 → 7 | `DependencyContext::add_dependent_nmethod` | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `ciEnv::register_method`                   | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
| +44.4% |    +8 | 90.0% → 96.3% | 18 → 26 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `<unknown>` |
| -50.0% |    -1 |  10.0% → 3.7% |   2 → 1 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |

##### `__psynch_cvbroad` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| +700.0% |    +7 | 50.0% → 88.9% |   1 → 8 | `CompileBroker::create_compile_task`    | `<unknown>` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `ServiceThread::enqueue_deferred_event` | `<unknown>` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `TaskTerminator::offer_termination`     | `<unknown>` |

##### `_qsort` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| +200.0% |    +2 | 50.0% → 33.3% |   1 → 3 | `_qsort`                                      | `<unknown>` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `PhaseBlockLayout::grow_traces`               | `<unknown>` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `IR::split_critical_edges`                    | `<unknown>` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `LinearScan::sort_intervals_after_allocation` | `<unknown>` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `Dependencies::sort_all_deps`                 | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                            | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| +40.0% |    +6 | 93.8% → 95.5% | 15 → 21 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>` |

##### `frame::sender_for_compiled_frame` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +33.3% |    +5 | 88.2% → 87.0% | 15 → 20 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
|    new |    +1 |   0.0% → 4.3% |   0 → 1 | `SharedRuntime::resolve_sub_helper`        | `<unknown>` |

##### `void G1CMTask::process_grey_task_entry<true>` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
| +100.0% |    +3 | 75.0% → 60.0% |   3 → 6 | `G1CMBitMap::iterate`         | `<unknown>` |
|     new |    +3 |  0.0% → 30.0% |   0 → 3 | `G1CMTask::drain_local_queue` | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                            | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
| +75.0% |    +3 | 100.0% → 70.0% |   4 → 7 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`          | `<unknown>` |
|    new |    +3 |   0.0% → 30.0% |   0 → 3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                           | Location    |
| -----: | ----: | -------------: | ------: | -------------------------------- | ----------- |
| +83.3% |    +5 | 100.0% → 91.7% |  6 → 11 | `WorkerThread::run`              | `<unknown>` |
|    new |    +1 |    0.0% → 8.3% |   0 → 1 | `GenericWaitBarrier::Cell::wait` | `<unknown>` |

##### `pthread_mutex_lock` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------- | ----------- |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `ThreadCritical::ThreadCritical`      | `<unknown>` |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `Chunk::operator new`                 | `<unknown>` |
| +100.0% |    +1 | 100.0% → 33.3% |   1 → 2 | `Mutex::lock_without_safepoint_check` | `<unknown>` |

##### `Dict::Insert` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
|  +42.9% |    +3 | 63.6% → 66.7% |  7 → 10 | `Type::hashcons`                   | `<unknown>` |
| removed |    -2 |  18.2% → 0.0% |   2 → 0 | `PhaseOutput::BuildOopMaps`        | `<unknown>` |
|  -50.0% |    -1 |  18.2% → 6.7% |   2 → 1 | `PhaseCFG::hoist_to_cheaper_block` | `<unknown>` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `AddPNode::Identity`               | `<unknown>` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `TypeInstPtr::xmeet_helper`        | `<unknown>` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

| Change | Delta |            % | Samples | Caller   | Location                                            |
| -----: | ----: | -----------: | ------: | -------- | --------------------------------------------------- |
|    new |    +3 | 0.0% → 42.9% |   0 → 3 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070011e1000` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001443000` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

|  Change | Delta |            % | Samples | Caller   | Location                                            |
| ------: | ----: | -----------: | ------: | -------- | --------------------------------------------------- |
| removed |   -15 | 50.0% → 0.0% |  15 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010a1800` |
|     new |   +13 | 0.0% → 35.1% |  0 → 13 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
|     new |   +11 | 0.0% → 29.7% |  0 → 11 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| removed |    -9 | 30.0% → 0.0% |   9 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010ab000` |
|     new |    +7 | 0.0% → 18.9% |   0 → 7 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `divideOneWord` (`java.math.MutableBigInteger`)

|  Change | Delta |      % | Samples | Caller        | Location                      |
| ------: | ----: | -----: | ------: | ------------- | ----------------------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `divideKnuth` | `java.math.MutableBigInteger` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

| Change | Delta |             % | Samples | Caller           | Location                           |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001031400`)

| Change | Delta |            % | Samples | Caller      | Location                                            |
| -----: | ----: | -----------: | ------: | ----------- | --------------------------------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `collector` | `java.lang.invoke.LambdaForm$MH.0x0000007001031800` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `collector` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000` |

##### `newArray` (`java.lang.reflect.Array`)

|  Change | Delta |      % | Samples | Caller        | Location                  |
| ------: | ----: | -----: | ------: | ------------- | ------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `newInstance` | `java.lang.reflect.Array` |

##### `makePairwiseConvertByEditor` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |      % | Samples | Caller                | Location                            |
| ------: | ----: | -----: | ------: | --------------------- | ----------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `makePairwiseConvert` | `java.lang.invoke.MethodHandleImpl` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

| Change | Delta |            % | Samples | Caller     | Location                                                                                                |
| -----: | ----: | -----------: | ------: | ---------- | ------------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010aa800 → java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |

##### `visitBlockStatement` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

| Change | Delta |             % | Samples | Caller                | Location                                          |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `visitBlockStatement` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `invokeStatic` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Caller   | Location                                            |
| ------: | ----: | -----------: | ------: | -------- | --------------------------------------------------- |
| removed |   -10 | 40.0% → 0.0% |  10 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c00109b800` |
|     new |    +7 | 0.0% → 24.1% |   0 → 7 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| removed |    -6 | 24.0% → 0.0% |   6 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010c6c00` |
| removed |    -5 | 20.0% → 0.0% |   5 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c001087400` |
|     new |    +4 | 0.0% → 13.8% |   0 → 4 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001087400` |

##### `binarySort` (`java.util.TimSort`)

|  Change | Delta |      % | Samples | Caller | Location            |
| ------: | ----: | -----: | ------: | ------ | ------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `sort` | `java.util.TimSort` |

##### `equals` (`java.lang.invoke.MethodType`)

| Change | Delta |              % | Samples | Caller   | Location                      |
| -----: | ----: | -------------: | ------: | -------- | ----------------------------- |
|    new |    +3 |   0.0% → 42.9% |   0 → 3 | `equals` | `java.lang.invoke.MethodType` |
| +33.3% |    +1 | 100.0% → 57.1% |   3 → 4 | `equals` | `java.util.Objects`           |

##### `makeImpl` (`java.lang.invoke.MethodType`)

| Change | Delta |            % | Samples | Caller       | Location                      |
| -----: | ----: | -----------: | ------: | ------------ | ----------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `methodType` | `java.lang.invoke.MethodType` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700109a400`)

| Change | Delta |            % | Samples | Caller  | Location                                            |
| -----: | ----: | -----------: | ------: | ------- | --------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `guard` | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `guard` | `java.lang.invoke.LambdaForm$MH.0x00000070010cb000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa400`)

| Change | Delta |            % | Samples | Caller   | Location                                            |
| -----: | ----: | -----------: | ------: | -------- | --------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `guard`  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001452000` |

##### `charAt` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller        | Location                                        |
| ------: | ----: | ------------: | ------: | ------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `codePointAt` | `java.lang.Character`                           |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `match`       | `java.util.regex.Pattern$Slice`                 |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `match`       | `java.util.regex.Pattern$BmpCharProperty`       |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `match`       | `java.util.regex.Pattern$BmpCharPropertyGreedy` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `normalize`   | `jdk.internal.jrtfs.JrtPath`                    |

##### `coerceArgumentsToClasses` (`org.codehaus.groovy.reflection.ParameterTypes`)

|  Change | Delta |             % | Samples | Caller                | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------------------------- |
| +200.0% |    +2 | 33.3% → 42.9% |   1 → 3 | `doMethodInvoke`      | `groovy.lang.MetaMethod`                           |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `doMethodInvoke`      | `org.codehaus.groovy.runtime.dgm$27`               |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `doMethodInvoke`      | `org.codehaus.groovy.runtime.dgm$202`              |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `doMethodInvoke`      | `org.codehaus.groovy.runtime.dgm$207`              |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `doConstructorInvoke` | `org.codehaus.groovy.reflection.CachedConstructor` |

##### `isEmptyBlock` (`org.codenarc.util.AstUtil`)

| Change | Delta |             % | Samples | Caller         | Location                                     |
| -----: | ----: | ------------: | ------: | -------------- | -------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitMethodEx` (`org.codenarc.rule.AbstractAstVisitor`)

| Change | Delta |             % | Samples | Caller        | Location                               |
| -----: | ----: | ------------: | ------: | ------------- | -------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitMethod` | `org.codenarc.rule.AbstractAstVisitor` |

##### `doCall` (`org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`)

| Change | Delta |             % | Samples | Caller          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>` (`org.codenarc.util.WildcardPattern`)

| Change | Delta |             % | Samples | Caller             | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000700126b800` |

##### `visitClass` (`org.codenarc.rule.AbstractMethodVisitor`)

| Change | Delta |             % | Samples | Caller    | Location                                   |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getAst` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |             % | Samples | Caller            | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001029c00` |

##### `isMethodNode` (`org.codenarc.util.AstUtil`)

| Change | Delta |             % | Samples | Caller         | Location                                             |
| -----: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000700133bc00` |

##### `visitConstantExpression` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change | Delta |             % | Samples | Caller  | Location                                          |
| -----: | ----: | ------------: | ------: | ------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `sourceLineOrEmpty` (`org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001095800 → java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `visitClassComplete` (`org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`)

| Change | Delta |             % | Samples | Caller      | Location    |
| -----: | ----: | ------------: | ------: | ----------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `[unknown]` | `<unknown>` |

##### `visitMethodCallExpression` (`org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`)

| Change | Delta |             % | Samples | Caller  | Location                                            |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `checkNode` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c001084000 → java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |

##### `applyTo` (`org.codenarc.rule.imports.DuplicateImportRule`)

| Change | Delta |             % | Samples | Caller    | Location                         |
| -----: | ----: | ------------: | ------: | --------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyTo` | `org.codenarc.rule.AbstractRule` |

##### `isNotWhitespace` (`org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`)

| Change | Delta |             % | Samples | Caller          | Location                                             |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001379400` |

##### `doCall` (`org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin$_processViolationsForFile_closure1`)

| Change | Delta |             % | Samples | Caller          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `createAggregateMetricResult` (`org.gmetrics.result.MetricResultBuilder`)

| Change | Delta |             % | Samples | Caller                        | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createAggregateMetricResult` | `org.gmetrics.result.MetricResultBuilder` |

##### `<init>` (`org.codenarc.rule.naming.ObjectOverrideMisspelledMethodNameAstVisitor`)

| Change | Delta |             % | Samples | Caller             | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000007001721000` |

##### `visitBinaryExpression` (`org.codenarc.rule.basic.BrokenNullCheckAstVisitor`)

| Change | Delta |             % | Samples | Caller  | Location                                        |
| -----: | ----: | ------------: | ------: | ------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visit` | `org.codehaus.groovy.ast.expr.BinaryExpression` |

##### `doCall` (`org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`)

| Change | Delta |             % | Samples | Caller          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `visitClassEx` (`org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`)

| Change | Delta |             % | Samples | Caller       | Location                               |
| -----: | ----: | ------------: | ------: | ------------ | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitClass` | `org.codenarc.rule.AbstractAstVisitor` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller     | Location                           |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `copyOf`   | `java.util.Arrays`                 |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `<init>`   | `java.util.ArrayList`              |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `<init>`   | `java.util.regex.Pattern$BitClass` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `optimize` | `java.util.regex.Pattern$BnM`      |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `<init>`   | `java.util.regex.Matcher`          |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller           | Location                                                              |
| ------: | ----: | -----------: | ------: | ---------------- | --------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `<init>`         | `org.codenarc.rule.imports.UnusedImportRule$_processImports_closure1` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `minimum`        | `org.gmetrics.result.MetricResultBuilder`                             |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `visitClass`     | `org.codenarc.rule.AbstractAstVisitor`                                |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                                    |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `applyTo`        | `org.codenarc.rule.imports.DuplicateImportRule`                       |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller          | Location                                                           |
| ------: | ----: | -----------: | ------: | --------------- | ------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `getAtIterable` | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                 |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `<init>`        | `org.codenarc.rule.design.SimpleDateFormatMissingLocaleAstVisitor` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x00000070013ca000`               |

##### `Node::dominates` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                           | Location    |
| -----: | ----: | -----: | -------: | -------------------------------- | ----------- |
| -26.6% |   -33 | 100.0% | 124 → 91 | `MemNode::all_controls_dominate` | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| -52.8% |   -19 | 90.0% → 89.5% | 36 → 17 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
| -66.7% |    -2 |   7.5% → 5.3% |   3 → 1 | `PhaseIdealLoop::compute_early_ctrl`          | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -43.9% |   -18 | 100.0% | 41 → 23 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

| Change | Delta |             % | Samples | Caller           | Location    |
| -----: | ----: | ------------: | ------: | ---------------- | ----------- |
| -15.9% |   -13 | 98.8% → 98.6% | 82 → 69 | `Matcher::xform` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -23.1% |   -12 | 100.0% | 52 → 40 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700148e800`)

|  Change | Delta |            % | Samples | Caller              | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------- | --------------------------------------------------- |
| removed |    -4 | 36.4% → 0.0% |   4 → 0 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000c001031400` |
| removed |    -2 | 18.2% → 0.0% |   2 → 0 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000c0010abc00` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `[stale_jmethodID]` | `<unknown>`                                         |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000c00109ac00` |
| removed |    -1 |  9.1% → 0.0% |   1 → 0 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000c001291000` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                  | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------- | ----------- |
|  -26.7% |    -8 | 90.9% → 100.0% | 30 → 22 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |
| removed |    -3 |    9.1% → 0.0% |   3 → 0 | `InstanceKlass::find_method`            | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -39.3% |   -11 | 100.0% | 28 → 17 | `PhaseLive::compute` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                   | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------ | --------------------------------------------------------- |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `collectViolations`      | `org.codenarc.analyzer.AbstractSourceAnalyzer`            |
|  -50.0% |    -1 |       10.0% |   2 → 1 | `invokeExact_MT`         | `java.lang.invoke.Invokers$Holder`                        |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000c00176cc00`       |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `createCachedMethodSite` | `org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite` |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `defineClass2`           | `java.lang.ClassLoader`                                   |

##### `PhaseIFG::effective_degree` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| -71.4% |   -10 | 93.3% → 80.0% |  14 → 4 | `PhaseIFG::Compute_Effective_Degree` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| -22.9% |    -8 | 92.1% → 93.1% | 35 → 27 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| -33.3% |    -1 |   7.9% → 6.9% |   3 → 2 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -15.3% |    -9 | 100.0% | 59 → 50 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|  Change | Delta |            % | Samples | Caller   | Location                                                                                                |
| ------: | ----: | -----------: | ------: | -------- | ------------------------------------------------------------------------------------------------------- |
|  -92.3% |   -12 | 52.0% → 5.9% |  13 → 1 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010a1800 → java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|     new |   +11 | 0.0% → 64.7% |  0 → 11 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`                                                     |
| removed |    -5 | 20.0% → 0.0% |   5 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c00108e000 → java.lang.invoke.LambdaForm$MH.0x0000007001369800` |
| removed |    -4 | 16.0% → 0.0% |   4 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010c8c00`                                                     |
|     new |    +3 | 0.0% → 17.6% |   0 → 3 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c001321400 → java.lang.invoke.LambdaForm$MH.0x00000070010c8800` |

##### `newInstance` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller         | Location                                                                                                  |
| -----: | ----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------------------------------- |
| -11.4% |    -8 | 100.0% | 70 → 62 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000c00102b400 → java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `collector` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|  Change | Delta |            % | Samples | Caller   | Location                                            |
| ------: | ----: | -----------: | ------: | -------- | --------------------------------------------------- |
| removed |   -15 | 53.6% → 0.0% |  15 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c00109b800` |
|     new |   +11 | 0.0% → 55.0% |  0 → 11 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
| removed |   -10 | 35.7% → 0.0% |  10 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c00108e000` |
|     new |    +7 | 0.0% → 35.0% |   0 → 7 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|     new |    +2 | 0.0% → 10.0% |   0 → 2 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010d0400` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| -52.9% |    -9 | 33.3% → 18.6% |  17 → 8 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |
|    new |    +2 |   0.0% → 4.7% |   0 → 2 | `LIR_Assembler::record_non_safepoint_debug_info`   | `<unknown>` |
|  -2.9% |    -1 | 66.7% → 76.7% | 34 → 33 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |

##### `Node::add_req` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
| removed |    -4 | 40.0% → 0.0% |   4 → 0 | `MergeMemNode::iteration_setup`       | `<unknown>` |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `Matcher::ReduceInst_Interior`        | `<unknown>` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `InitializeNode::complete_stores`     | `<unknown>` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `GraphKit::set_results_for_java_call` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                     | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | ----------- |
|  -19.4% |    -7 | 97.3% → 100.0% | 36 → 29 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| removed |    -1 |    2.7% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                     | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | ----------- |
|  -11.9% |    -7 | 98.3% → 100.0% | 59 → 52 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `JVM_FillInStackTrace`                     | `<unknown>` |

##### `ShouldNotReachHereNode::is_block_proj` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                            | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------- | ----------- |
| removed |    -4 | 50.0% → 0.0% |   4 → 0 | `PhaseChaitin::Split`             | `<unknown>` |
| removed |    -3 | 37.5% → 0.0% |   3 → 0 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion`    | `<unknown>` |

##### `Node::set_req_X` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
|  -17.2% |    -5 | 78.4% → 80.0% | 29 → 24 | `Node::replace_edge`          | `<unknown>` |
|  -50.0% |    -2 |  10.8% → 6.7% |   4 → 2 | `MergeMemNode::Ideal`         | `<unknown>` |
| removed |    -1 |   2.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::do_split_if` | `<unknown>` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `RegionNode::Ideal`           | `<unknown>` |

##### `PhaseChaitin::Select` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -50.0% |    -7 | 100.0% |  14 → 7 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                             | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------- | ----------- |
|  -37.5% |    -6 | 94.1% → 100.0% | 16 → 10 | `PhaseCFG::global_code_motion`     | `<unknown>` |
| removed |    -1 |    5.9% → 0.0% |   1 → 0 | `PhaseCFG::hoist_to_cheaper_block` | `<unknown>` |

##### `Matcher::xform` (`<unknown>`)

| Change | Delta |      % | Samples | Caller           | Location    |
| -----: | ----: | -----: | ------: | ---------------- | ----------- |
| -20.0% |    -6 | 100.0% | 30 → 24 | `Matcher::match` | `<unknown>` |

##### `PhaseIdealLoop::get_late_ctrl_with_anti_dep` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                      | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | ----------- |
| -61.5% |    -8 | 100.0% → 71.4% |  13 → 5 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `PhaseIdealLoop::ctrl_of_use_out_of_loop`   | `<unknown>` |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `PhaseIdealLoop::build_loop_late`           | `<unknown>` |

##### `Node::is_CFG` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -66.7% |    -6 | 52.9% → 27.3% |   9 → 3 | `PhaseIdealLoop::build_and_optimize`   | `<unknown>` |
| +300.0% |    +3 |  5.9% → 36.4% |   1 → 4 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  -66.7% |    -2 |  17.6% → 9.1% |   3 → 1 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `RegionNode::is_unreachable_region`    | `<unknown>` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |

##### `Unique_Node_List::remove` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                    | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | ----------- |
|  -23.8% |    -5 | 95.5% → 100.0% | 21 → 16 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `Node::remove_dead_region`                | `<unknown>` |

##### `RegMask::is_misaligned_pair` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `PhaseChaitin::gather_lrg_masks` | `<unknown>` |

##### `PhaseCFG::schedule_pinned_nodes` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                         | Location    |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `PhaseCFG::global_code_motion` | `<unknown>` |

##### `__open` (`<unknown>`)

| Change | Delta |      % | Samples | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------------ | ----------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `handleOpen` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                     | Location    |
| ------: | ----: | -----------: | ------: | -------------------------- | ----------- |
| removed |    -3 | 16.7% → 0.0% |   3 → 0 | `nmethod::nmethod`         | `<unknown>` |
| +300.0% |    +3 | 5.6% → 36.4% |   1 → 4 | `PhaseOutput::Output`      | `<unknown>` |
| removed |    -3 | 16.7% → 0.0% |   3 → 0 | `PhaseIdealLoop::set_idom` | `<unknown>` |
| removed |    -2 | 11.1% → 0.0% |   2 → 0 | `Node::Node`               | `<unknown>` |
|  -66.7% |    -2 | 16.7% → 9.1% |   3 → 1 | `Node_Array::grow`         | `<unknown>` |

##### `Interval::add_use_pos` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------- | ----------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `LinearScan::build_intervals` | `<unknown>` |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan`  | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `LinearScan::add_def`         | `<unknown>` |

##### `Parse::do_one_bytecode` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                 | Location    |
| ------: | ----: | -------------: | ------: | ---------------------- | ----------- |
|  -71.4% |    -5 | 87.5% → 100.0% |   7 → 2 | `Parse::do_one_block`  | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `Parse::do_all_blocks` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |           % | Samples | Caller                           | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------- | ----------- |
| removed |    -2 | 2.5% → 0.0% |   2 → 0 | `LinearScan::build_intervals`    | `<unknown>` |
| removed |    -2 | 2.5% → 0.0% |   2 → 0 | `Parse::ensure_phi`              | `<unknown>` |
|  -66.7% |    -2 | 3.8% → 1.4% |   3 → 1 | `ciEnv::get_klass_by_index_impl` | `<unknown>` |
| removed |    -2 | 2.5% → 0.0% |   2 → 0 | `PhaseLive::compute`             | `<unknown>` |
| removed |    -2 | 2.5% → 0.0% |   2 → 0 | `Matcher::match_tree`            | `<unknown>` |

##### `vmSymbols::find_sid` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
|  -25.9% |    -7 | 96.4% → 90.9% | 27 → 20 | `ciObjectFactory::get_symbol`                  | `<unknown>` |
|     new |    +2 |   0.0% → 9.1% |   0 → 2 | `MethodHandles::signature_polymorphic_name_id` | `<unknown>` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `AnnotationCollector::annotation_index`        | `<unknown>` |

##### `BacktraceBuilder::push` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                     | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| -28.6% |    -6 | 100.0% | 21 → 15 | `java_lang_Throwable::fill_in_stack_trace` | `<unknown>` |

##### `nmethod::fix_oop_relocations` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                          | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------- | ----------- |
|  -80.0% |    -4 | 71.4% → 100.0% |   5 → 1 | `nmethod::oops_do_process_weak` | `<unknown>` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `nmethod::nmethod`              | `<unknown>` |

##### `iRegPNoSpOper::type` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `MachNode::ideal_reg` | `<unknown>` |

##### `JavaFrameAnchor::make_walkable` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `JVM_NewArray`            | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `JVM_FindClassFromCaller` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `MHN_init_Mem`            | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ciField::will_link`      | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                               | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
| +200.0% |    +4 | 6.3% → 21.4% |   2 → 6 | `MemAllocator::allocate`             | `<unknown>` |
| removed |    -4 | 12.5% → 0.0% |   4 → 0 | `MarkBitMap::do_clear`               | `<unknown>` |
| removed |    -2 |  6.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |
| removed |    -2 |  6.3% → 0.0% |   2 → 0 | `MethodLiveness::compute_liveness`   | `<unknown>` |
|     new |    +2 |  0.0% → 7.1% |   0 → 2 | `GraphBuilder::append_with_bci`      | `<unknown>` |

##### `InstanceKlass::find_local_field` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------- | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `InstanceKlass::find_field` | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|  -60.0% |    -3 | 38.5% → 22.2% |   5 → 2 | `PhaseChaitin::Register_Allocate`   | `<unknown>` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `Compile::Optimize`                 | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `ciMethod::get_method_blocks`       | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `LinearScan::number_instructions`   | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `InitializeNode::can_capture_store` | `<unknown>` |

##### `ResourceBitMap::ResourceBitMap` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                        | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `MethodLiveness::BasicBlock::get_liveness_at` | `<unknown>` |
|     new |    +2 | 0.0% → 66.7% |   0 → 2 | `BlockBegin::BlockBegin`                      | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `LinearScan::compute_local_live_sets`         | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `MethodLiveness::get_liveness_at`             | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `LIRGenerator::state_for`                     | `<unknown>` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                    | Location    |
| -----: | ----: | -----: | ------: | ------------------------- | ----------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `KlassCleaningTask::work` | `<unknown>` |

##### `mach_absolute_time` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------- | ---------------------------------- |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `boxLong`                    | `sun.invoke.util.ValueConversions` |
|  -33.3% |    -1 | 30.0% → 33.3% |   3 → 2 | `os::elapsed_counter`        | `<unknown>`                        |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `CompilationPolicy::compile` | `<unknown>`                        |
|  -33.3% |    -1 | 30.0% → 33.3% |   3 → 2 | `os::elapsedTime`            | `<unknown>`                        |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `WatcherThread::sleep`       | `<unknown>`                        |

##### `getOptimizedTransition` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

|  Change | Delta |            % | Samples | Caller                  | Location                                               |
| ------: | ----: | -----------: | ------: | ----------------------- | ------------------------------------------------------ |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `getReachableConfigSet` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `closure`               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `computeTargetState`    | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `closure`               | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |

##### `lambdaFormEditor` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |             % | Samples | Caller   | Location                      |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `editor` | `java.lang.invoke.LambdaForm` |

##### `invokeBasic` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Caller           | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------- | --------------------------------------------------- |
| removed |    -5 | 11.9% → 0.0% |   5 → 0 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -3 |  7.1% → 0.0% |   3 → 0 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00102ac00` |
|     new |    +3 |  0.0% → 8.3% |   0 → 3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |
|     new |    +3 |  0.0% → 8.3% |   0 → 3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001325000` |
|  -50.0% |    -2 |  9.5% → 5.6% |   4 → 2 | `invokeVirtual`  | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070014e6c00`)

|  Change | Delta |             % | Samples | Caller  | Location                                            |
| ------: | ----: | ------------: | ------: | ------- | --------------------------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `guard` | `java.lang.invoke.LambdaForm$MH.0x000000c00109a000` |

##### `removeStaleReferences` (`jdk.internal.util.ReferencedKeyMap`)

|  Change | Delta |              % | Samples | Caller      | Location                             |
| ------: | ----: | -------------: | ------: | ----------- | ------------------------------------ |
|  -66.7% |    -4 | 85.7% → 100.0% |   6 → 2 | `get`       | `jdk.internal.util.ReferencedKeyMap` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `internKey` | `jdk.internal.util.ReferencedKeyMap` |

##### `of` (`java.lang.invoke.LambdaFormEditor$TransformKey`)

|  Change | Delta |            % | Samples | Caller               | Location                            |
| ------: | ----: | -----------: | ------: | -------------------- | ----------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `addArgumentForm`    | `java.lang.invoke.LambdaFormEditor` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `filterArgumentForm` | `java.lang.invoke.LambdaFormEditor` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `bindArgumentForm`   | `java.lang.invoke.LambdaFormEditor` |

##### `uncustomize` (`java.lang.invoke.LambdaForm`)

|  Change | Delta |              % | Samples | Caller             | Location                            |
| ------: | ----: | -------------: | ------: | ------------------ | ----------------------------------- |
| removed |    -4 |   66.7% → 0.0% |   4 → 0 | `lambdaFormEditor` | `java.lang.invoke.LambdaFormEditor` |
|  -50.0% |    -1 | 33.3% → 100.0% |   2 → 1 | `<init>`           | `java.lang.invoke.MethodHandle`     |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070014ad400`)

|  Change | Delta |            % | Samples | Caller      | Location                                            |
| ------: | ----: | -----------: | ------: | ----------- | --------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `collector` | `java.lang.invoke.LambdaForm$MH.0x000000c0010a1000` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `collector` | `java.lang.invoke.LambdaForm$MH.0x000000c001031800` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `collector` | `java.lang.invoke.LambdaForm$MH.0x000000c0010c9800` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `collector` | `java.lang.invoke.LambdaForm$MH.0x000000c0010d2c00` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000070010db400`)

|  Change | Delta |            % | Samples | Caller     | Location                                            |
| ------: | ----: | -----------: | ------: | ---------- | --------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010cb000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001121000`)

|  Change | Delta |            % | Samples | Caller   | Location                                            |
| ------: | ----: | -----------: | ------: | -------- | --------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c001499400` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010abc00` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010dcc00` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c0010c7400` |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller | Location            |
| -----: | ----: | -----: | ------: | ------ | ------------------- |
| -50.0% |    -4 | 100.0% |   8 → 4 | `put`  | `java.util.HashMap` |

##### `getMethods` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |             % | Samples | Caller                 | Location                    |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------- |
| -57.1% |    -4 | 87.5% → 75.0% |   7 → 3 | `getMethodWithCaching` | `groovy.lang.MetaClassImpl` |

##### `computeIfAbsent` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |      % | Samples | Caller        | Location                            |
| -----: | ----: | -----: | ------: | ------------- | ----------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `findSpecies` | `java.lang.invoke.ClassSpecializer` |

##### `getLexerActionExecutor` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |             % | Samples | Caller      | Location                                      |
| ------: | ----: | ------------: | ------: | ----------- | --------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `transform` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `<init>` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller   | Location                             |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `<init>` | `java.util.stream.ReferencePipeline` |

##### `doMethodInvoke` (`groovy.lang.MetaMethod`)

|  Change | Delta |              % | Samples | Caller           | Location                                                 |
| ------: | ----: | -------------: | ------: | ---------------- | -------------------------------------------------------- |
| removed |    -2 |   50.0% → 0.0% |   2 → 0 | `invokeMethod`   | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `doInvokeMethod` | `groovy.lang.MetaClassImpl`                              |

##### `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |      % | Samples | Caller          | Location                                                                                                  |
| -----: | ----: | -----: | ------: | --------------- | --------------------------------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001094400 → java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `writeViolation` (`org.codenarc.report.TextReportWriter`)

|  Change | Delta |             % | Samples | Caller          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001396400` |

##### `getName` (`org.codenarc.rule.formatting.BlockStartsWithBlankLineRule`)

|  Change | Delta |             % | Samples | Caller             | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `isRuleSuppressed` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `checkStatementIndent` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Caller          | Location                                     |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getAstVisitor` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % | Samples | Caller    | Location                                   |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule` |

##### `getName` (`org.codenarc.rule.basic.BooleanGetBooleanRule`)

|  Change | Delta |             % | Samples | Caller             | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isRuleSuppressed` | `org.codenarc.analyzer.SuppressionAnalyzer` |

##### `$getStaticMetaClass` (`org.codenarc.rule.ClassReferenceAstVisitor`)

|  Change | Delta |             % | Samples | Caller   | Location                                     |
| ------: | ----: | ------------: | ------: | -------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>` | `org.codenarc.rule.ClassReferenceAstVisitor` |

##### `visitMethodCallExpression` (`org.codenarc.rule.groovyism.CollectAllIsDeprecatedAstVisitor`)

|  Change | Delta |             % | Samples | Caller  | Location                                            |
| ------: | ----: | ------------: | ------: | ------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visit` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `visitStatement` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`)

|  Change | Delta |             % | Samples | Caller                | Location                                          |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitBlockStatement` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `visitMethodEx` (`org.codenarc.rule.FieldReferenceAstVisitor`)

|  Change | Delta |             % | Samples | Caller        | Location                               |
| ------: | ----: | ------------: | ------: | ------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitMethod` | `org.codenarc.rule.AbstractAstVisitor` |

##### `applyTo` (`org.codenarc.rule.imports.NoWildcardImportsRule`)

|  Change | Delta |             % | Samples | Caller    | Location                         |
| ------: | ----: | ------------: | ------: | --------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `applyTo` | `org.codenarc.rule.AbstractRule` |

##### `visitField` (`org.codenarc.rule.design.PublicInstanceFieldAstVisitor`)

|  Change | Delta |             % | Samples | Caller       | Location                                 |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitClass` | `org.codenarc.rule.AbstractFieldVisitor` |

##### `findFirstNonAnnotationLine` (`org.codenarc.util.AstUtil`)

|  Change | Delta |             % | Samples | Caller         | Location                               |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addViolation` | `org.codenarc.rule.AbstractAstVisitor` |

##### `visitDeclarationExpression` (`org.codenarc.rule.convention.VariableTypeRequiredAstVisitor`)

|  Change | Delta |             % | Samples | Caller      | Location    |
| ------: | ----: | ------------: | ------: | ----------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `[unknown]` | `<unknown>` |

##### `processSourceLine` (`org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`)

|  Change | Delta |             % | Samples | Caller          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c001109800` |

##### `<init>` (`org.codenarc.rule.basic.EqualsOverloadedAstVisitor`)

|  Change | Delta |             % | Samples | Caller             | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c0016a6000` |

##### `lineNumberForMethod` (`org.gmetrics.metric.AbstractMethodMetric`)

|  Change | Delta |             % | Samples | Caller          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c0013b2000` |

##### `getMetaClass` (`org.codenarc.rule.groovyism.ExplicitTreeSetInstantiationRule`)

|  Change | Delta |             % | Samples | Caller      | Location                                                  |
| ------: | ----: | ------------: | ------: | ----------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `getCatchOnSameLineAsOpeningBrace` (`org.codenarc.rule.formatting.BracesForTryCatchFinallyRule`)

|  Change | Delta |             % | Samples | Caller          | Location                                     |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `call` (`org.gmetrics.result.MetricResultBuilder$createAggregateMetricResult`)

|  Change | Delta |             % | Samples | Caller                        | Location                             |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createAggregateMetricResult` | `org.gmetrics.metric.AbstractMetric` |

##### `itable stub` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller            | Location                                                         |
| ------: | ----: | -----------: | ------: | ----------------- | ---------------------------------------------------------------- |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `accept`          | `java.util.stream.ReferencePipeline$3$1`                         |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `isSameMetaClass` | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `createPogoSite`  | `org.codehaus.groovy.runtime.callsite.CallSiteArray`             |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `visit`           | `org.codehaus.groovy.ast.expr.TupleExpression`                   |
| removed |    -1 |  5.3% → 0.0% |   1 → 0 | `getAt`           | `org.codehaus.groovy.runtime.DefaultGroovyMethods`               |

##### `I2C/C2I adapters(0xbbbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller           | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00126ac00` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `applyTo`        | `org.codenarc.rule.AbstractRule`                    |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x000000c001299400` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000007001289000` |

##### `I2C/C2I adapters(0xbbbbaabaab)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller           | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------- | --------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0017f6c00` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c001743c00` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder`                  |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                         | Location                                                       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke`                       | `java.lang.invoke.LambdaForm$MH.0x000000c0013ff000`            |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `put`                          | `org.apache.groovy.util.concurrent.ConcurrentReferenceHashMap` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitFloatingPointLiteralAlt` | `org.apache.groovy.parser.antlr4.AstBuilder`                   |

##### `I2C/C2I adapters(0xaab)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                 | Location                                          |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findOpeningBraceLine` | `org.codenarc.rule.formatting.BracesForClassRule` |

##### `call_stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `JavaCalls::call_helper` | `<unknown>` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller           | Location                               |
| ------: | ----: | ------------: | ------: | ---------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `doMethodInvoke` | `org.codehaus.groovy.runtime.dgm$1231` |

##### `I2C/C2I adapters(0xbbbbbb)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller           | Location                           |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `I2C/C2I adapters(0xbbabaaaaa)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller    | Location                              |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `emitEOF` | `groovyjarjarantlr4.v4.runtime.Lexer` |

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

|     Change |  Delta |             % |       Samples | Function        | Location                                                                                                  |
| ---------: | -----: | ------------: | ------------: | --------------- | --------------------------------------------------------------------------------------------------------- |
| +219200.0% | +2,192 | <0.1% → 36.0% |     1 → 2,193 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001765c00 → java.lang.invoke.LambdaForm$MH.0x00000070010d3800`   |
|  +23833.3% | +2,145 |  0.1% → 35.4% |     9 → 2,154 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0017f6800 → java.lang.invoke.LambdaForm$MH.0x00000070010d8800`   |
|  +25214.3% | +1,765 |  0.1% → 29.1% |     7 → 1,772 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0017f7000 → java.lang.invoke.LambdaForm$MH.0x00000070011e1000`   |
|   +5927.6% | +1,719 |  0.5% → 28.7% |    29 → 1,748 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001181800 → java.lang.invoke.LambdaForm$MH.0x0000007001369000`   |
|    +548.9% | +1,504 |  4.6% → 29.2% |   274 → 1,778 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001097c00 → java.lang.invoke.LambdaForm$DMH.0x00000070011ea400` |
|  +17200.0% | +1,376 |  0.1% → 22.7% |     8 → 1,384 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00171d000 → java.lang.invoke.LambdaForm$MH.0x0000007001369400`   |
|  +26940.0% | +1,347 |  0.1% → 22.2% |     5 → 1,352 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00171d400 → java.lang.invoke.LambdaForm$MH.0x0000007001361400`   |
|     +56.4% |   +759 | 22.4% → 34.5% | 1,345 → 2,104 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001365400 → java.lang.invoke.LambdaForm$MH.0x0000007001288800`   |
|  +61600.0% |   +616 | <0.1% → 10.1% |       1 → 617 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00154c000 → java.lang.invoke.LambdaForm$MH.0x0000007001290800`   |
|     +34.7% |   +581 | 27.8% → 37.0% | 1,673 → 2,254 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001653400 → java.lang.invoke.LambdaForm$MH.0x00000070010c6400`   |
|     +33.8% |   +566 | 27.8% → 36.8% | 1,673 → 2,239 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001653800 → java.lang.invoke.LambdaForm$MH.0x000000700109bc00`   |
|     +33.8% |   +565 | 27.8% → 36.7% | 1,673 → 2,238 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001652c00 → java.lang.invoke.LambdaForm$MH.0x000000700102b000`   |
|   +6200.0% |   +496 |   0.1% → 8.3% |       8 → 504 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00177d800 → java.lang.invoke.LambdaForm$MH.0x00000070010c8000`   |
|     +23.7% |   +410 | 28.8% → 35.1% | 1,729 → 2,139 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0011e1000 → java.lang.invoke.LambdaForm$MH.0x0000007001288400`   |
|     +27.0% |   +391 | 24.1% → 30.2% | 1,448 → 1,839 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0010abc00 → java.lang.invoke.LambdaForm$MH.0x000000700159c000`   |
|     +22.1% |   +305 | 22.9% → 27.6% | 1,379 → 1,684 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0017d5c00 → java.lang.invoke.LambdaForm$MH.0x0000007001673800`   |
|   +1034.6% |   +269 |   0.4% → 4.8% |      26 → 295 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c001489800 → java.lang.invoke.LambdaForm$MH.0x00000070010dcc00`   |
|     +14.5% |   +265 | 30.4% → 34.3% | 1,827 → 2,092 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0015b4000 → java.lang.invoke.LambdaForm$MH.0x0000007001282000`   |
|  +12750.0% |   +255 |  <0.1% → 4.2% |       2 → 257 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0014cd800 → java.lang.invoke.LambdaForm$MH.0x0000007001322400`   |
|    +750.0% |   +255 |   0.6% → 4.7% |      34 → 289 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0010d8000 → java.lang.invoke.LambdaForm$MH.0x0000007001031400`   |

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

| Change |  Delta |             % |       Samples | Function         | Location                                                                                                  |
| -----: | -----: | ------------: | ------------: | ---------------- | --------------------------------------------------------------------------------------------------------- |
| -99.8% | -2,231 |  37.2% → 0.1% |     2,235 → 4 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0010c7400 → java.lang.invoke.LambdaForm$MH.0x0000007001755000`   |
| -98.3% | -2,183 |  36.9% → 0.6% |    2,220 → 37 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00102b000 → java.lang.invoke.LambdaForm$MH.0x0000007001379000`   |
| -98.5% | -2,045 |  34.5% → 0.5% |    2,076 → 31 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00126a400 → java.lang.invoke.LambdaForm$MH.0x0000007001662400`   |
| -88.8% | -1,984 |  37.2% → 4.1% |   2,234 → 250 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00108e000 → java.lang.invoke.LambdaForm$MH.0x0000007001369800`   |
| -88.7% | -1,982 |  37.2% → 4.2% |   2,235 → 253 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0010c6800 → java.lang.invoke.LambdaForm$MH.0x0000007001326000`   |
| -99.8% | -1,739 |  29.0% → 0.1% |     1,743 → 4 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x000000c0011ea400 → java.lang.invoke.LambdaForm$DMH.0x0000007001398400` |
| -38.6% |   -858 | 36.9% → 22.4% | 2,220 → 1,362 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00109bc00 → java.lang.invoke.LambdaForm$MH.0x00000070017fa000`   |
| -31.7% |   -690 | 36.2% → 24.4% | 2,176 → 1,486 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0010d3c00 → java.lang.invoke.LambdaForm$MH.0x00000070010abc00`   |
| -82.1% |   -612 |  12.4% → 2.2% |     745 → 133 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00128d400 → java.lang.invoke.LambdaForm$MH.0x000000700102ac00`   |
| -99.5% |   -587 |  9.8% → <0.1% |       590 → 3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00128dc00 → java.lang.invoke.LambdaForm$MH.0x00000070014d9400`   |
| -40.6% |   -536 | 21.9% → 12.9% |   1,319 → 783 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00135c000 → java.lang.invoke.LambdaForm$MH.0x000000700128dc00`   |
| -19.5% |   -433 | 36.9% → 29.3% | 2,215 → 1,782 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0010a9800 → java.lang.invoke.LambdaForm$MH.0x0000007001268800`   |
| -85.9% |   -427 |   8.3% → 1.1% |      497 → 70 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0010c8400 → java.lang.invoke.LambdaForm$MH.0x000000700118a000`   |
| -97.3% |   -291 |   5.0% → 0.1% |       299 → 8 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c0010dcc00 → java.lang.invoke.LambdaForm$MH.0x0000007001362400`   |
| -96.8% |   -270 |   4.6% → 0.1% |       279 → 9 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c001031400 → java.lang.invoke.LambdaForm$MH.0x00000070014ad400`   |
| -99.6% |   -251 |  4.2% → <0.1% |       252 → 1 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c001365800 → java.lang.invoke.LambdaForm$MH.0x0000007001546c00`   |
| -98.0% |   -250 |   4.2% → 0.1% |       255 → 5 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c001105400 → java.lang.invoke.LambdaForm$MH.0x0000007001535000`   |
| -98.8% |   -248 |  4.2% → <0.1% |       251 → 3 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c001290400 → java.lang.invoke.LambdaForm$MH.0x00000070014cd800`   |
| -96.5% |   -248 |   4.3% → 0.1% |       257 → 9 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000c001321800 → java.lang.invoke.LambdaForm$MH.0x00000070013f8000`   |
| -99.6% |   -248 |  4.1% → <0.1% |       249 → 1 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000c00128c000 → java.lang.invoke.LambdaForm$MH.0x0000007001626c00`   |

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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010d3800`)

| Change |  Delta |             % |   Samples | Callee     | Location                                            |
| -----: | -----: | ------------: | --------: | ---------- | --------------------------------------------------- |
|    new | +2,193 | 0.0% → 100.0% | 0 → 2,193 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|    new |    +85 |   0.0% → 3.9% |    0 → 85 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|    new |     +1 |  0.0% → <0.1% |     0 → 1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010d8800`)

|  Change |  Delta |             % |   Samples | Callee         | Location                                             |
| ------: | -----: | ------------: | --------: | -------------- | ---------------------------------------------------- |
|     new | +2,153 | 0.0% → 100.0% | 0 → 2,153 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |    +15 |   0.0% → 0.7% |    0 → 15 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |
| removed |     -9 | 100.0% → 0.0% |     9 → 0 | `delegate`     | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070011e1000`)

|  Change |  Delta |             % |   Samples | Callee     | Location                                            |
| ------: | -----: | ------------: | --------: | ---------- | --------------------------------------------------- |
|     new | +1,770 |  0.0% → 99.9% | 0 → 1,770 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00` |
| removed |     -7 | 100.0% → 0.0% |     7 → 0 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |     +4 |   0.0% → 0.2% |     0 → 4 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x0000007001189800` |
|     new |     +2 |   0.0% → 0.1% |     0 → 2 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001369000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
|     new | +1,748 | 0.0% → 100.0% | 0 → 1,748 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -19 |  65.5% → 0.0% |    19 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -10 |  34.5% → 0.0% |    10 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001095800` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x00000070011ea400`)

|  Change |  Delta |            % |   Samples | Callee                      | Location                                       |
| ------: | -----: | -----------: | --------: | --------------------------- | ---------------------------------------------- |
|     new | +1,727 | 0.0% → 97.1% | 0 → 1,727 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| removed |   -244 | 89.1% → 0.0% |   244 → 0 | `isRuleSuppressed`          | `org.codenarc.analyzer.SuppressionAnalyzer`    |
|     new |    +78 |  0.0% → 4.4% |    0 → 78 | `super$3$applyTo`           | `org.codenarc.rule.formatting.IndentationRule` |
|     new |    +39 |  0.0% → 2.2% |    0 → 39 | `writePackageViolations`    | `org.codenarc.report.TextReportWriter`         |
|     new |    +36 |  0.0% → 2.0% |    0 → 36 | `writeFileViolations`       | `org.codenarc.report.TextReportWriter`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001369400`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
|     new | +1,384 | 0.0% → 100.0% | 0 → 1,384 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |     -8 | 100.0% → 0.0% |     8 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001361400`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
|     new | +1,351 |  0.0% → 99.9% | 0 → 1,351 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |     -5 | 100.0% → 0.0% |     5 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001097c00` |
|     new |     +1 |   0.0% → 0.1% |     0 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001288800`)

|  Change |  Delta |             % |   Samples | Callee         | Location                                             |
| ------: | -----: | ------------: | --------: | -------------- | ---------------------------------------------------- |
|     new | +2,104 | 0.0% → 100.0% | 0 → 2,104 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400`  |
| removed | -1,345 | 100.0% → 0.0% | 1,345 → 0 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000c001088800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001290800`)

|    Change | Delta |      % | Samples | Callee          | Location                                     |
| --------: | ----: | -----: | ------: | --------------- | -------------------------------------------- |
| +61600.0% |  +616 | 100.0% | 1 → 617 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                         |
| ------: | -----: | ------------: | --------: | --------------- | ------------------------------------------------ |
|     new | +2,254 | 0.0% → 100.0% | 0 → 2,254 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`     |
| removed | -1,673 | 100.0% → 0.0% | 1,673 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700109bc00`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                            |
| ------: | -----: | ------------: | --------: | --------------- | --------------------------------------------------- |
|     new | +2,239 | 0.0% → 100.0% | 0 → 2,239 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
| removed | -1,673 | 100.0% → 0.0% | 1,673 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |     +3 |   0.0% → 0.1% |     0 → 3 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |     +2 |   0.0% → 0.1% |     0 → 2 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                            |
| ------: | -----: | ------------: | --------: | --------------- | --------------------------------------------------- |
|     new | +2,238 | 0.0% → 100.0% | 0 → 2,238 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed | -1,673 | 100.0% → 0.0% | 1,673 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |     +6 |   0.0% → 0.3% |     0 → 6 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |     +4 |   0.0% → 0.2% |     0 → 4 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010c8000`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +504 | 0.0% → 100.0% | 0 → 504 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +5 |   0.0% → 1.0% |   0 → 5 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001288400`)

|  Change |  Delta |             % |   Samples | Callee         | Location                                             |
| ------: | -----: | ------------: | --------: | -------------- | ---------------------------------------------------- |
|     new | +2,138 | 0.0% → 100.0% | 0 → 2,138 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed | -1,729 | 100.0% → 0.0% | 1,729 → 0 | `reinvoke`     | `java.lang.invoke.LambdaForm$MH.0x000000c001189000`  |
| removed |     -6 |   0.3% → 0.0% |     6 → 0 | `delegate`     | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |     +2 |   0.0% → 0.1% |     0 → 2 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x0000007001283c00`  |
| removed |     -1 |   0.1% → 0.0% |     1 → 0 | `invokeBasic`  | `java.lang.invoke.MethodHandle`                      |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700159c000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
|     new | +1,839 | 0.0% → 100.0% | 0 → 1,839 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000700118a400` |
| removed | -1,433 |  99.0% → 0.0% | 1,433 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x000000c0010aa800`  |
| removed |    -29 |   2.0% → 0.0% |    29 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |     -5 |   0.3% → 0.0% |     5 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0010ab000`  |
| removed |     -3 |   0.2% → 0.0% |     3 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00102ac00`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001673800`)

| Change | Delta |      % |       Samples | Callee     | Location                                         |
| -----: | ----: | -----: | ------------: | ---------- | ------------------------------------------------ |
| +22.1% |  +305 | 100.0% | 1,379 → 1,684 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010dcc00`)

|  Change | Delta |             % | Samples | Callee          | Location                                            |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------- |
|     new |  +289 |  0.0% → 98.0% | 0 → 289 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
| removed |   -26 | 100.0% → 0.0% |  26 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +5 |   0.0% → 1.7% |   0 → 5 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001282000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                            |
| ------: | -----: | ------------: | --------: | --------------- | --------------------------------------------------- |
|     new | +2,092 | 0.0% → 100.0% | 0 → 2,092 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00` |
| removed | -1,827 | 100.0% → 0.0% | 1,827 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |     +3 |   0.0% → 0.1% |     0 → 3 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001322400`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +255 |  0.0% → 99.2% | 0 → 255 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |   0.0% → 0.8% |   0 → 2 | `collector`     | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001031400`)

|  Change | Delta |            % | Samples | Callee          | Location                                             |
| ------: | ----: | -----------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +196 | 0.0% → 67.8% | 0 → 196 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |
|     new |   +85 | 0.0% → 29.4% |  0 → 85 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
| removed |   -26 | 76.5% → 0.0% |  26 → 0 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c001084000` |
| removed |    -8 | 23.5% → 0.0% |   8 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +3 |  0.0% → 1.0% |   0 → 3 | `invokeBasic`   | `java.lang.invoke.MethodHandle`                      |

##### `CompileQueue::get` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +194.7% |   +37 | 95.0% → 98.2% | 19 → 56 | `Monitor::wait`                       | `<unknown>` |
|     new |    +1 |   0.0% → 1.8% |   0 → 1 | `CompileTask::select_for_compilation` | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

| Change | Delta |              % |   Samples | Callee                        | Location    |
| -----: | ----: | -------------: | --------: | ----------------------------- | ----------- |
|  +4.0% |   +24 | 100.0% → 99.8% | 598 → 622 | `Compilation::compile_method` | `<unknown>` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `TraceTime::TraceTime`        | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                               | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | ----------- |
|   +2.4% |   +13 | 90.3% → 88.9% | 540 → 553 | `Compilation::compile_java_method`                   | `<unknown>` |
|  +17.5% |   +10 |  9.5% → 10.8% |   57 → 67 | `ciEnv::register_method`                             | `<unknown>` |
|     new |    +2 |   0.0% → 0.3% |     0 → 2 | `DebugInformationRecorder::DebugInformationRecorder` | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `Dependencies::assert_common_1`                      | `<unknown>` |

##### `ciEnv::register_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
|  +35.5% |   +22 | 87.3% → 90.3% | 62 → 84 | `nmethod::new_nmethod`                      | `<unknown>` |
| removed |    -3 |   4.2% → 0.0% |   3 → 0 | `ciEnv::validate_compile_task_dependencies` | `<unknown>` |
|     new |    +2 |   0.0% → 2.2% |   0 → 2 | `Mutex::lock`                               | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `CodeCache::gc_on_allocation`               | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `_pthread_mutex_firstfit_unlock_slow`       | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                          | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------- | ----------- |
|  +11.1% |   +15 | 94.4% → 92.6% | 135 → 150 | `GraphBuilder::invoke`          | `<unknown>` |
|  +38.1% |    +8 | 14.7% → 17.9% |   21 → 29 | `GraphBuilder::access_field`    | `<unknown>` |
|  -40.0% |    -4 |   7.0% → 3.7% |    10 → 6 | `BlockBegin::try_merge`         | `<unknown>` |
| +300.0% |    +3 |   0.7% → 2.5% |     1 → 4 | `GraphBuilder::append_with_bci` | `<unknown>` |
| removed |    -3 |   2.1% → 0.0% |     3 → 0 | `GraphBuilder::if_node`         | `<unknown>` |

##### `PhaseOutput::Process_OopMap_Node` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| +300.0% |    +6 | 11.1% → 22.2% |   2 → 8 | `PhaseOutput::FillLocArray`                     | `<unknown>` |
|  +42.9% |    +3 | 38.9% → 27.8% |  7 → 10 | `DebugInformationRecorder::describe_scope`      | `<unknown>` |
|  +42.9% |    +3 | 38.9% → 27.8% |  7 → 10 | `DebugInformationRecorder::create_scope_values` | `<unknown>` |
|     new |    +2 |   0.0% → 5.6% |   0 → 2 | `MachSpillCopyNode::bottom_type`                | `<unknown>` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `resource_allocate_bytes`                       | `<unknown>` |

##### `PhaseOutput::Output` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
|  +28.6% |   +16 | 38.1% → 43.6% | 56 → 72 | `PhaseOutput::fill_buffer`              | `<unknown>` |
| +300.0% |    +3 |   0.7% → 2.4% |   1 → 4 | `_platform_memmove`                     | `<unknown>` |
|  +11.8% |    +2 | 11.6% → 11.5% | 17 → 19 | `PhaseOutput::shorten_branches`         | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `PhaseOutput::init_scratch_buffer_blob` | `<unknown>` |
|   -3.6% |    -1 | 19.0% → 16.4% | 28 → 27 | `PhaseOutput::BuildOopMaps`             | `<unknown>` |

##### `GraphBuilder::iterate_all_blocks` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ----------- |
|  +13.3% |   +19 | 97.3% → 98.8% | 143 → 162 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Instruction::as_BlockEnd`                  | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `GraphBuilder::ScopeData::block_at`         | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `GraphBuilder::setup_osr_entry_block`       | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `ValueStack::ValueStack`                    | `<unknown>` |

##### `GraphBuilder::invoke` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------- | ----------- |
|   +7.3% |    +9 | 91.1% → 87.4% | 123 → 132 | `GraphBuilder::try_inline`                     | `<unknown>` |
|  +17.2% |    +5 | 21.5% → 22.5% |   29 → 34 | `ciBytecodeStream::get_method`                 | `<unknown>` |
|     new |    +3 |   0.0% → 2.0% |     0 → 3 | `GraphBuilder::append_with_bci`                | `<unknown>` |
|     new |    +3 |   0.0% → 2.0% |     0 → 3 | `ciBytecodeStream::get_declared_method_holder` | `<unknown>` |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `ciBytecodeStream::get_appendix`               | `<unknown>` |

##### `PhaseOutput::fill_buffer` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
|  +94.4% |   +17 | 32.1% → 48.6% | 18 → 35 | `PhaseOutput::Process_OopMap_Node`         | `<unknown>` |
|  -17.4% |    -4 | 41.1% → 26.4% | 23 → 19 | `NonSafepointEmitter::observe_instruction` | `<unknown>` |
| +300.0% |    +3 |   1.8% → 5.6% |   1 → 4 | `NonSafepointEmitter::emit_non_safepoint`  | `<unknown>` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `CallStaticJavaDirectNode::emit`           | `<unknown>` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `loadConPNode::emit`                       | `<unknown>` |

##### `Compile::identify_useful_nodes` (`<unknown>`)

| Change | Delta |           % | Samples | Callee            | Location    |
| -----: | ----: | ----------: | ------: | ----------------- | ----------- |
|    new |    +1 | 0.0% → 2.6% |   0 → 1 | `_platform_bzero` | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                               | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ----------- |
| +11.6% |   +17 | 96.1% → 97.6% | 147 → 164 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
| -66.7% |    -2 |   2.0% → 0.6% |     3 → 1 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
| -50.0% |    -1 |   1.3% → 0.6% |     2 → 1 | `BlockBegin::iterate_preorder`       | `<unknown>` |
|    new |    +1 |   0.0% → 0.6% |     0 → 1 | `as_ValueType`                       | `<unknown>` |

##### `ciEnv::get_klass_by_index_impl` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| +83.3% |    +5 | 19.4% → 24.4% |  6 → 11 | `ciObjectFactory::get_metadata`       | `<unknown>` |
| +28.6% |    +4 | 45.2% → 40.0% | 14 → 18 | `ciObjectFactory::get_symbol`         | `<unknown>` |
|    new |    +4 |   0.0% → 8.9% |   0 → 4 | `ciObjectFactory::get_unloaded_klass` | `<unknown>` |
| -66.7% |    -2 |   9.7% → 2.2% |   3 → 1 | `tlv_get_addr`                        | `<unknown>` |
| +14.3% |    +1 | 22.6% → 17.8% |   7 → 8 | `ciEnv::get_klass_by_name_impl`       | `<unknown>` |

##### `PhaseIFG::SquareUp` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| +50.0% |    +3 | 66.7% → 39.1% |   6 → 9 | `IndexSetIterator::advance_and_next` | `<unknown>` |
|    new |    +2 |   0.0% → 8.7% |   0 → 2 | `IndexSet::alloc_block_containing`   | `<unknown>` |

##### `Matcher::Label_Root` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
|  +41.2% |    +7 | 51.5% → 52.2% | 17 → 24 | `State::DFA`            | `<unknown>` |
|  +38.9% |    +7 | 54.5% → 54.3% | 18 → 25 | `Matcher::Label_Root`   | `<unknown>` |
| removed |    -2 |   6.1% → 0.0% |   2 → 0 | `CallNode::match_edge`  | `<unknown>` |
| removed |    -1 |   3.0% → 0.0% |   1 → 0 | `BoolNode::bottom_type` | `<unknown>` |
|     new |    +1 |   0.0% → 2.2% |   0 → 1 | `State::_sub_Op_StoreB` | `<unknown>` |

##### `Compilation::compile_java_method` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                         | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------ | ----------- |
|   +5.3% |   +11 | 38.1% → 39.2% | 206 → 217 | `Compilation::build_hir`       | `<unknown>` |
|   +2.3% |    +5 |         40.0% | 216 → 221 | `Compilation::emit_lir`        | `<unknown>` |
|   -4.6% |    -5 | 20.2% → 18.8% | 109 → 104 | `Compilation::emit_code_body`  | `<unknown>` |
|  +83.3% |    +5 |   1.1% → 2.0% |    6 → 11 | `ciMethod::ensure_method_data` | `<unknown>` |
| removed |    -2 |   0.4% → 0.0% |     2 → 0 | `FrameMap::FrameMap`           | `<unknown>` |

##### `CompileBroker::compile_method` (`<unknown>`)

|   Change | Delta |              % | Samples | Callee                                        | Location    |
| -------: | ----: | -------------: | ------: | --------------------------------------------- | ----------- |
| +1200.0% |   +12 |  33.3% → 81.3% |  1 → 13 | `CompileBroker::compile_method_base`          | `<unknown>` |
|  +400.0% |   +12 | 100.0% → 93.8% |  3 → 15 | `CompileBroker::compile_method`               | `<unknown>` |
|  removed |    -1 |   33.3% → 0.0% |   1 → 0 | `Method::load_signature_classes`              | `<unknown>` |
|  +100.0% |    +1 |  33.3% → 12.5% |   1 → 2 | `ConstantPool::resolve_string_constants_impl` | `<unknown>` |
|      new |    +1 |    0.0% → 6.3% |   0 → 1 | `DirectivesStack::release`                    | `<unknown>` |

##### `PhaseBlockLayout::PhaseBlockLayout` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| +900.0% |    +9 | 20.0% → 55.6% |  1 → 10 | `PhaseBlockLayout::grow_traces`    | `<unknown>` |
|     new |    +3 |  0.0% → 16.7% |   0 → 3 | `PhaseBlockLayout::reorder_traces` | `<unknown>` |
|  +50.0% |    +1 | 40.0% → 16.7% |   2 → 3 | `PhaseBlockLayout::find_edges`     | `<unknown>` |
|  -50.0% |    -1 |  40.0% → 5.6% |   2 → 1 | `PhaseBlockLayout::merge_traces`   | `<unknown>` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `Chunk::next_chop`                 | `<unknown>` |

##### `CompilationPolicy::event` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| +433.3% |   +13 | 33.3% → 76.2% |  3 → 16 | `CompileBroker::compile_method`        | `<unknown>` |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `CompilationPolicy::compile`           | `<unknown>` |
| +100.0% |    +1 |  11.1% → 9.5% |   1 → 2 | `CompilationPolicy::call_event`        | `<unknown>` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `CompilationPolicy::should_create_mdo` | `<unknown>` |
|     new |    +1 |   0.0% → 4.8% |   0 → 1 | `MethodData::bci_to_dp`                | `<unknown>` |

##### `WorkerThread::run` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                            | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| +71.7% |   +33 | 18.6% → 24.1% |   46 → 79 | `G1RebuildRSAndScrubTask::work`   | `<unknown>` |
| +60.0% |   +30 | 20.2% → 24.4% |   50 → 80 | `G1CMConcurrentMarkingTask::work` | `<unknown>` |
|  +8.8% |    +9 | 41.3% → 33.8% | 102 → 111 | `G1EvacuateRegionsBaseTask::work` | `<unknown>` |
| +40.0% |    +6 |   6.1% → 6.4% |   15 → 21 | `G1ParallelCleaningTask::work`    | `<unknown>` |
| +45.5% |    +5 |   4.5% → 4.9% |   11 → 16 | `G1CMRootRegionScanTask::work`    | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|  Change | Delta |             % |       Samples | Callee                          | Location    |
| ------: | ----: | ------------: | ------------: | ------------------------------- | ----------- |
|  +32.8% |   +81 |   6.7% → 8.7% |     247 → 328 | `WorkerThread::run`             | `<unknown>` |
|   -0.7% |   -23 | 93.0% → 90.8% | 3,447 → 3,424 | `JavaThread::thread_main_inner` | `<unknown>` |
| +100.0% |    +3 |   0.1% → 0.2% |         3 → 6 | `ConcurrentGCThread::run`       | `<unknown>` |
|  +50.0% |    +2 |   0.1% → 0.2% |         4 → 6 | `VMThread::run`                 | `<unknown>` |
|  +25.0% |    +1 |          0.1% |         4 → 5 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

| Change | Delta |      % |       Samples | Callee             | Location    |
| -----: | ----: | -----: | ------------: | ------------------ | ----------- |
|  +1.7% |   +63 | 100.0% | 3,706 → 3,769 | `Thread::call_run` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|  Change | Delta |            % |       Samples | Callee                | Location    |
| ------: | ----: | -----------: | ------------: | --------------------- | ----------- |
|   +1.7% |   +63 |       100.0% | 3,706 → 3,769 | `thread_native_entry` | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |       Samples | Callee           | Location    |
| -----: | ----: | -----: | ------------: | ---------------- | ----------- |
|  +1.7% |   +62 | 100.0% | 3,707 → 3,769 | `_pthread_start` | `<unknown>` |

##### `PlatformMonitor::wait` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
| +156.0% |   +39 | 86.2% → 94.1% | 25 → 64 | `__psynch_cvwait`    | `<unknown>` |
|  +33.3% |    +1 |  10.3% → 5.9% |   3 → 4 | `_pthread_cond_wait` | `<unknown>` |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `__gettimeofday`     | `<unknown>` |

##### `Monitor::wait` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                  | Location    |
| ------: | ----: | -----: | ------: | ----------------------- | ----------- |
| +200.0% |   +38 | 100.0% | 19 → 57 | `PlatformMonitor::wait` | `<unknown>` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
| +73.8% |   +31 | 95.5% → 93.6% | 42 → 73 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `<unknown>` |
|    new |    +3 |   0.0% → 3.8% |   0 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
| -50.0% |    -1 |   4.5% → 1.3% |   2 → 1 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
| +77.3% |   +34 | 97.8% → 98.7% | 44 → 78 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |

##### `G1RebuildRSAndScrubTask::work` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------- | ----------- |
| +71.7% |   +33 | 100.0% | 46 → 79 | `HeapRegionManager::par_iterate` | `<unknown>` |

##### `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------- |
|  +50.0% |   +14 | 65.1% → 56.8% | 28 → 42 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
|  +62.5% |    +5 | 18.6% → 17.6% |  8 → 13 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
| +100.0% |    +3 |   7.0% → 8.1% |   3 → 6 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                            | `<unknown>` |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                         | `<unknown>` |

##### `G1CMConcurrentMarkingTask::work` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                      | Location    |
| -----: | ----: | -------------: | ------: | --------------------------- | ----------- |
| +58.0% |   +29 | 100.0% → 98.8% | 50 → 79 | `G1CMTask::do_marking_step` | `<unknown>` |
|    new |    +1 |    0.0% → 1.3% |   0 → 1 | `_platform_memset`          | `<unknown>` |

##### `G1CMTask::do_marking_step` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|  +40.0% |   +18 | 90.0% → 79.7% | 45 → 63 | `G1CMBitMap::iterate`          | `<unknown>` |
| +250.0% |   +10 |  8.0% → 17.7% |  4 → 14 | `G1CMTask::drain_local_queue`  | `<unknown>` |
|     new |    +1 |   0.0% → 1.3% |   0 → 1 | `G1CMTask::drain_satb_buffers` | `<unknown>` |

##### `HeapRegionManager::par_iterate` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ----------- |
|  +75.6% |   +34 | 84.9% → 98.8% | 45 → 79 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` | `<unknown>` |
| removed |    -4 |   7.5% → 0.0% |   4 → 0 | `G1ClearBitMapTask::G1ClearBitmapHRClosure::do_heap_region`                        | `<unknown>` |
|  -50.0% |    -1 |   3.8% → 1.3% |   2 → 1 | `G1BulkUnregisterNMethodTask::UnregisterNMethodsHeapRegionClosure::do_heap_region` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

| Change | Delta |              % |   Samples | Callee                     | Location    |
| -----: | ----: | -------------: | --------: | -------------------------- | ----------- |
|  +4.2% |   +25 | 100.0% → 99.8% | 598 → 623 | `Compilation::Compilation` | `<unknown>` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `Chunk::next_chop`         | `<unknown>` |

##### `nmethod::new_nmethod` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| +107.1% |   +15 | 22.6% → 34.5% | 14 → 29 | `InstanceKlass::add_dependent_nmethod` | `<unknown>` |
|     new |    +4 |   0.0% → 4.8% |   0 → 4 | `MethodHandles::add_dependent_nmethod` | `<unknown>` |
|  +30.0% |    +3 | 16.1% → 15.5% | 10 → 13 | `CodeCache::allocate`                  | `<unknown>` |
|   +6.5% |    +2 | 50.0% → 39.3% | 31 → 33 | `nmethod::nmethod`                     | `<unknown>` |
| removed |    -1 |   1.6% → 0.0% |   1 → 0 | `MethodData::is_methodData`            | `<unknown>` |

##### `G1CMTask::drain_local_queue` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
| +123.1% |   +16 | 86.7% → 82.9% | 13 → 29 | `void G1CMTask::process_grey_task_entry<true>`                                                 | `<unknown>` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1CMOopClosure>`                            | `<unknown>` |
|     new |    +1 |   0.0% → 2.9% |   0 → 1 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |

##### `void G1CMTask::process_grey_task_entry<true>` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
|  +34.6% |    +9 | 59.1% → 54.7% | 26 → 35 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |
| +200.0% |    +4 |   4.5% → 9.4% |   2 → 6 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1CMOopClosure>`                            | `<unknown>` |
|  +66.7% |    +4 | 13.6% → 15.6% |  6 → 10 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `<unknown>` |
|  -66.7% |    -2 |   6.8% → 1.6% |   3 → 1 | `ClassLoaderData::oops_do`                                                                     | `<unknown>` |
| removed |    -1 |   2.3% → 0.0% |   1 → 0 | `G1CMTask::make_reference_grey`                                                                | `<unknown>` |

##### `DependencyContext::add_dependent_nmethod` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
| +137.5% |   +11 | 72.7% → 63.3% |  8 → 19 | `nmethodBucket::next_not_unloading` | `<unknown>` |
| +600.0% |    +6 |  9.1% → 23.3% |   1 → 7 | `nmethod::is_unloading`             | `<unknown>` |

##### `measureRuleProcessingTime` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % |       Samples | Callee           | Location                                            |
| ------: | ----: | ------------: | ------------: | ---------------- | --------------------------------------------------- |
| removed |  -257 |  15.2% → 0.0% |       257 → 0 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000c001321800` |
|     new |  +257 |  0.0% → 14.9% |       0 → 257 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x0000007001322800` |
|   +2.3% |   +32 | 83.6% → 83.8% | 1,415 → 1,447 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|     new |   +23 |   0.0% → 1.3% |        0 → 23 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000700131ac00` |
| removed |   -21 |   1.2% → 0.0% |        21 → 0 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000c001319c00` |

##### `applyTo` (`org.codenarc.rule.AbstractRule`)

|  Change | Delta |             % |   Samples | Callee    | Location                                                 |
| ------: | ----: | ------------: | --------: | --------- | -------------------------------------------------------- |
| +144.4% |   +13 |   0.7% → 1.8% |    9 → 22 | `applyTo` | `org.codenarc.rule.imports.DuplicateImportRule`          |
|  -22.5% |    -9 |   3.3% → 2.5% |   40 → 31 | `applyTo` | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |
|   +0.9% |    +8 | 77.0% → 75.8% | 936 → 944 | `applyTo` | `org.codenarc.rule.AbstractAstVisitorRule`               |
|   +8.3% |    +6 |   5.9% → 6.3% |   72 → 78 | `applyTo` | `org.codenarc.rule.formatting.IndentationRule`           |
|  +31.6% |    +6 |   1.6% → 2.0% |   19 → 25 | `applyTo` | `org.codenarc.rule.unused.UnusedVariableRule`            |

##### `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`)

| Change | Delta |      % |       Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------------: | ---------------- | ---------------------------------- |
|  +2.1% |   +28 | 100.0% | 1,339 → 1,367 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `collectViolations` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

|  Change | Delta |             % |       Samples | Callee                   | Location                                                                   |
| ------: | ----: | ------------: | ------------: | ------------------------ | -------------------------------------------------------------------------- |
|   +1.2% |   +25 | 99.7% → 99.9% | 2,047 → 2,072 | `linkToCallSite`         | `java.lang.invoke.Invokers$Holder`                                         |
| removed |    -3 |   0.1% → 0.0% |         3 → 0 | `<init>`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `I2C/C2I adapters(0xbb)` | `<unknown>`                                                                |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `next`                   | `java.util.ArrayList$Itr`                                                  |

##### `execute` (`org.codenarc.CodeNarcRunner`)

| Change | Delta |      % |       Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------------: | ---------------- | ---------------------------------- |
|  +0.9% |   +19 | 100.0% | 2,219 → 2,238 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `execute` (`org.codenarc.CodeNarc`)

|  Change | Delta |             % |       Samples | Callee           | Location                                            |
| ------: | ----: | ------------: | ------------: | ---------------- | --------------------------------------------------- |
|   +0.9% |   +20 | 99.5% → 99.6% | 2,224 → 2,244 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
| removed |   -10 |   0.4% → 0.0% |        10 → 0 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000c001933c00` |
|     new |   +10 |   0.0% → 0.4% |        0 → 10 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000700196b000` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `invokeClosure`  | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `processFile` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------------: | ---------------- | ---------------------------------- |
|  +0.9% |   +18 | 100.0% | 2,066 → 2,084 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `main` (`org.codenarc.CodeNarc`)

|  Change | Delta |              % |       Samples | Callee           | Location                           |
| ------: | ----: | -------------: | ------------: | ---------------- | ---------------------------------- |
|   +0.8% |   +19 | 99.9% → 100.0% | 2,248 → 2,267 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |
| removed |    -1 |   <0.1% → 0.0% |         1 → 0 | `loadClass`      | `java.lang.ClassLoader`            |

##### `processDirectory` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------------: | ---------------- | ---------------------------------- |
|  +0.8% |   +16 | 100.0% | 2,076 → 2,092 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `eachImportLine` (`org.codenarc.rule.imports.AbstractImportRule`)

|  Change | Delta |      % | Samples | Callee           | Location                           |
| ------: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| +160.0% |   +16 | 100.0% | 10 → 26 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `doCall` (`org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1`)

|  Change | Delta |            % |       Samples | Callee           | Location                                            |
| ------: | ----: | -----------: | ------------: | ---------------- | --------------------------------------------------- |
|   +0.7% |   +15 |       100.0% | 2,076 → 2,091 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x000000c0010c9000` |

##### `analyze` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

| Change | Delta |      % |       Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------------: | ---------------- | ---------------------------------- |
|  +0.7% |   +15 | 100.0% | 2,077 → 2,092 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `visitMethod` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % |   Samples | Callee          | Location                                                              |
| ------: | ----: | ------------: | --------: | --------------- | --------------------------------------------------------------------- |
| +233.3% |    +7 |   0.4% → 1.3% |    3 → 10 | `visitMethodEx` | `org.codenarc.rule.formatting.SpaceBeforeOpeningBraceAstVisitor`      |
|   -0.9% |    -6 | 85.2% → 82.8% | 641 → 635 | `visitMethod`   | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`                     |
| +300.0% |    +6 |   0.3% → 1.0% |     2 → 8 | `visitMethodEx` | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`         |
|  -50.0% |    -4 |   1.1% → 0.5% |     8 → 4 | `visitMethodEx` | `org.codenarc.rule.formatting.IndentationAstVisitor`                  |
| +400.0% |    +4 |   0.1% → 0.7% |     1 → 5 | `visitMethodEx` | `org.codenarc.rule.unnecessary.UnnecessaryPackageReferenceAstVisitor` |

##### `applyTo` (`org.codenarc.rule.imports.DuplicateImportRule`)

|  Change | Delta |              % | Samples | Callee                    | Location                           |
| ------: | ----: | -------------: | ------: | ------------------------- | ---------------------------------- |
| +122.2% |   +11 | 100.0% → 90.9% |  9 → 20 | `linkToCallSite`          | `java.lang.invoke.Invokers$Holder` |
|     new |    +1 |    0.0% → 4.5% |   0 → 1 | `I2C/C2I adapters(0xbbb)` | `<unknown>`                        |

##### `super$2$visitMethodCallExpression` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|   Change | Delta |      % | Samples | Callee                      | Location                                     |
| -------: | ----: | -----: | ------: | --------------------------- | -------------------------------------------- |
| +1300.0% |   +13 | 100.0% |  1 → 14 | `visitMethodCallExpression` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visitMethodCallExpression` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

|  Change | Delta |             % | Samples | Callee                 | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| +100.0% |   +12 | 38.7% → 55.8% | 12 → 24 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                                                                      |
|  +22.2% |    +4 | 58.1% → 51.2% | 18 → 22 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                                     |
|  -50.0% |    -1 |   6.5% → 2.3% |   2 → 1 | `linkToCallSite`       | `java.lang.invoke.LambdaForm$MH.0x000000c0010c9000 → java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |

##### `visitMethodCallExpression` (`org.codenarc.rule.unused.UnusedVariableAstVisitor`)

|   Change | Delta |              % | Samples | Callee                 | Location                                            |
| -------: | ----: | -------------: | ------: | ---------------------- | --------------------------------------------------- |
| +1300.0% |   +13 | 50.0% → 100.0% |  1 → 14 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `processMethodOrConstructorCall` (`org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`)

|  Change | Delta |      % | Samples | Callee           | Location                           |
| ------: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| +133.3% |   +12 | 100.0% |  9 → 21 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo` (`org.codenarc.rule.AbstractAstVisitorRule`)

|  Change | Delta |             % |   Samples | Callee          | Location                                                |
| ------: | ----: | ------------: | --------: | --------------- | ------------------------------------------------------- |
|  +25.0% |    +8 |   3.1% → 3.8% |   32 → 40 | `visitClass`    | `org.codenarc.rule.AbstractMethodCallExpressionVisitor` |
|   -0.7% |    -6 | 86.3% → 84.8% | 895 → 889 | `visitClass`    | `org.codenarc.rule.AbstractAstVisitor`                  |
| +400.0% |    +4 |   0.1% → 0.5% |     1 → 5 | `visitClass`    | `org.codenarc.rule.AbstractFieldVisitor`                |
|   -3.1% |    -2 |   6.3% → 6.0% |   65 → 63 | `getAstVisitor` | `org.codenarc.rule.AbstractAstVisitorRule`              |
| +100.0% |    +2 |   0.2% → 0.4% |     2 → 4 | `getAstVisitor` | `org.codenarc.rule.convention.VectorIsObsoleteRule`     |

##### `visitBlockStatement` (`org.codenarc.rule.formatting.IndentationAstVisitor`)

| Change | Delta |             % | Samples | Callee                 | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------------- |
| +21.2% |    +7 | 64.7% → 64.5% | 33 → 40 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
|    new |    +1 |   0.0% → 1.6% |   0 → 1 | `<init>`               | `groovy.lang.Reference`                             |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001755000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
| removed | -2,235 | 100.0% → 0.0% | 2,235 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x000000c0010aa800`  |
| removed |   -467 |  20.9% → 0.0% |   467 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |     +4 | 0.0% → 100.0% |     0 → 4 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001398400` |
| removed |     -1 |  <0.1% → 0.0% |     1 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c0010ab000`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001379000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                            |
| ------: | -----: | ------------: | --------: | --------------- | --------------------------------------------------- |
| removed | -2,219 | 100.0% → 0.0% | 2,219 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +35 |  0.0% → 94.6% |    0 → 35 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00` |
| removed |     -5 |   0.2% → 0.0% |     5 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |     +2 |   0.0% → 5.4% |     0 → 2 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |     -1 |  <0.1% → 0.0% |     1 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00102ac00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001662400`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
| removed | -2,076 | 100.0% → 0.0% | 2,076 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x000000c001189000`  |
|     new |    +30 |  0.0% → 96.8% |    0 → 30 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed |     -7 |   0.3% → 0.0% |     7 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |     +1 |   0.0% → 3.2% |     0 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001369800`)

|  Change |  Delta |           % |     Samples | Callee             | Location                                                                                                  |
| ------: | -----: | ----------: | ----------: | ------------------ | --------------------------------------------------------------------------------------------------------- |
|  -88.8% | -1,983 |      100.0% | 2,233 → 250 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x000000c001088800 → java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -79 | 3.5% → 0.0% |      79 → 0 | `collector`        | `java.lang.invoke.LambdaForm$MH.0x000000c001031800`                                                       |
| removed |     -2 | 0.1% → 0.0% |       2 → 0 | `invokeStaticInit` | `java.lang.invoke.LambdaForm$DMH.0x000000c001088c00`                                                      |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001326000`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                             |
| ------: | -----: | ------------: | --------: | --------------- | ---------------------------------------------------- |
| removed | -2,235 | 100.0% → 0.0% | 2,235 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +251 |  0.0% → 99.2% |   0 → 251 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000007001324800`  |
|     new |     +5 |   0.0% → 2.0% |     0 → 5 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001325000`  |
| removed |     -1 |  <0.1% → 0.0% |     1 → 0 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c001084000` |
|     new |     +1 |   0.0% → 0.4% |     0 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001123c00`  |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000007001398400`)

|  Change |  Delta |            % |   Samples | Callee                      | Location                                                 |
| ------: | -----: | -----------: | --------: | --------------------------- | -------------------------------------------------------- |
| removed | -1,693 | 97.1% → 0.0% | 1,693 → 0 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer`           |
| removed |    -72 |  4.1% → 0.0% |    72 → 0 | `super$3$applyTo`           | `org.codenarc.rule.formatting.IndentationRule`           |
| removed |    -38 |  2.2% → 0.0% |    38 → 0 | `writeFileViolations`       | `org.codenarc.report.TextReportWriter`                   |
| removed |    -38 |  2.2% → 0.0% |    38 → 0 | `writePackageViolations`    | `org.codenarc.report.TextReportWriter`                   |
| removed |    -29 |  1.7% → 0.0% |    29 → 0 | `super$3$applyTo`           | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070017fa000`)

|     Change |  Delta |              % |   Samples | Callee        | Location                                            |
| ---------: | -----: | -------------: | --------: | ------------- | --------------------------------------------------- |
|    removed | -2,219 |  100.0% → 0.0% | 2,219 → 0 | `reinvoke`    | `java.lang.invoke.LambdaForm$MH.0x000000c001099c00` |
| +136100.0% | +1,361 | <0.1% → 100.0% | 1 → 1,362 | `delegate`    | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|    removed |     -5 |    0.2% → 0.0% |     5 → 0 | `invoke`      | `java.lang.invoke.LambdaForm$MH.0x000000c00109b800` |
|    removed |     -1 |   <0.1% → 0.0% |     1 → 0 | `invokeBasic` | `java.lang.invoke.MethodHandle`                     |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070010abc00`)

|  Change | Delta |              % |       Samples | Callee        | Location                                                                                                |
| ------: | ----: | -------------: | ------------: | ------------- | ------------------------------------------------------------------------------------------------------- |
|  -32.4% |  -705 | 100.0% → 99.0% | 2,176 → 1,471 | `reinvoke`    | `java.lang.invoke.LambdaForm$MH.0x000000c0010aa800 → java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  -58.8% |   -50 |    3.9% → 2.4% |       85 → 35 | `delegate`    | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |
| removed |    -3 |    0.1% → 0.0% |         3 → 0 | `invoke`      | `java.lang.invoke.LambdaForm$MH.0x000000c0010ab000`                                                     |
|     new |    +3 |    0.0% → 0.2% |         0 → 3 | `invoke`      | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000`                                                     |
|     new |    +1 |    0.0% → 0.1% |         0 → 1 | `invokeBasic` | `java.lang.invoke.MethodHandle`                                                                         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

|  Change | Delta |            % | Samples | Callee          | Location                                             |
| ------: | ----: | -----------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -485 | 65.1% → 0.0% | 485 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |  -309 | 41.5% → 0.0% | 309 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x000000c001189000`  |
|     new |  +123 | 0.0% → 92.5% | 0 → 123 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |  0.0% → 1.5% |   0 → 2 | `invokeBasic`   | `java.lang.invoke.MethodHandle`                      |
|     new |    +1 |  0.0% → 0.8% |   0 → 1 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070014d9400`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -590 | 100.0% → 0.0% | 590 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -7 |   1.2% → 0.0% |   7 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001094400` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `delegate`      | `java.lang.invoke.LambdaForm$MH.0x000000700134e000`  |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070013fbc00`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700128dc00`)

|  Change |  Delta |             % |   Samples | Callee          | Location                                            |
| ------: | -----: | ------------: | --------: | --------------- | --------------------------------------------------- |
| removed | -1,319 | 100.0% → 0.0% | 1,319 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |   +528 |  0.0% → 67.4% |   0 → 528 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +305 |  0.0% → 39.0% |   0 → 305 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001268800`)

|  Change |  Delta |             % |   Samples | Callee            | Location                                             |
| ------: | -----: | ------------: | --------: | ----------------- | ---------------------------------------------------- |
| removed | -2,215 | 100.0% → 0.0% | 2,215 → 0 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x000000c001094400` |
|     new | +1,727 |  0.0% → 96.9% | 0 → 1,727 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x00000070011ea400` |
|     new |    +93 |   0.0% → 5.2% |    0 → 93 | `invokeSpecial`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +55 |   0.0% → 3.1% |    0 → 55 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001268400` |
| removed |    -11 |   0.5% → 0.0% |    11 → 0 | `collector`       | `java.lang.invoke.LambdaForm$MH.0x000000c001031800`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000700118a000`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -497 | 100.0% → 0.0% | 497 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +67 |  0.0% → 95.7% |  0 → 67 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00`  |
| removed |    -4 |   0.8% → 0.0% |   4 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001095800` |
|     new |    +3 |   0.0% → 4.3% |   0 → 3 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001362400`)

|  Change | Delta |            % | Samples | Callee         | Location                                             |
| ------: | ----: | -----------: | ------: | -------------- | ---------------------------------------------------- |
| removed |  -298 | 99.7% → 0.0% | 298 → 0 | `reinvoke`     | `java.lang.invoke.LambdaForm$MH.0x000000c0010aa800`  |
|     new |    +7 | 0.0% → 87.5% |   0 → 7 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -2 |  0.7% → 0.0% |   2 → 0 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x000000c0010ab000`  |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070014ad400`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -186 |  66.7% → 0.0% | 186 → 0 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x000000c00102b400` |
| removed |   -88 |  31.5% → 0.0% |  88 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000c00102ac00`  |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |   0.4% → 0.0% |   1 → 0 | `fromCache`     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001546c00`)

|  Change | Delta |             % | Samples | Callee         | Location                                             |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
| removed |  -252 | 100.0% → 0.0% | 252 → 0 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000c001088800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001535000`)

|  Change | Delta |             % | Samples | Callee            | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
| removed |  -252 |  98.8% → 0.0% | 252 → 0 | `invokeSpecial`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| removed |    -2 |   0.8% → 0.0% |   2 → 0 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x000000c00112d000` |
| removed |    -1 |   0.4% → 0.0% |   1 → 0 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x000000c001105000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000070014cd800`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -248 |  98.8% → 0.0% | 248 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000c001097c00` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -2 |   0.8% → 0.0% |   2 → 0 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c001030400` |
| removed |    -1 |   0.4% → 0.0% |   1 → 0 | `invokeStatic`  | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `linkToCallSite` (`java.lang.invoke.LambdaForm$MH.0x00000070013f8000`)

|  Change | Delta |             % | Samples | Callee   | Location                                            |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------- |
| removed |  -257 | 100.0% → 0.0% | 257 → 0 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x000000c001321400` |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x00000070013f7c00` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001626c00`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -249 | 100.0% → 0.0% | 249 → 0 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x000000c00118a800` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |

##### `C2Compiler::compile_method` (`<unknown>`)

|  Change | Delta |            % |       Samples | Callee                        | Location    |
| ------: | ----: | -----------: | ------------: | ----------------------------- | ----------- |
|   -2.9% |   -81 |        99.9% | 2,807 → 2,726 | `Compile::Compile`            | `<unknown>` |
| removed |    -2 |  0.1% → 0.0% |         2 → 0 | `Chunk::next_chop`            | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `stringStream::~stringStream` | `<unknown>` |
| +100.0% |    +1 | <0.1% → 0.1% |         1 → 2 | `Compile::~Compile`           | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

| Change | Delta |             % |       Samples | Callee                                   | Location    |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------- |
|  -5.7% |   -65 | 40.3% → 39.1% | 1,132 → 1,067 | `Compile::Optimize`                      | `<unknown>` |
|  -2.1% |   -27 | 46.5% → 46.8% | 1,304 → 1,277 | `Compile::Code_Gen`                      | `<unknown>` |
|  +3.7% |   +12 | 11.5% → 12.3% |     322 → 334 | `ParseGenerator::generate`               | `<unknown>` |
| +45.5% |   +10 |   0.8% → 1.2% |       22 → 32 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
| -64.3% |    -9 |   0.5% → 0.2% |        14 → 5 | `CallGenerator::for_inline`              | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                 | Location    |
| -----: | ----: | ------------: | --------: | -------------------------------------- | ----------- |
| -24.7% |   -24 |   8.6% → 6.8% |   97 → 73 | `Compile::inline_incrementally`        | `<unknown>` |
|  -9.6% |   -20 | 18.5% → 17.7% | 209 → 189 | `PhaseIterGVN::optimize`               | `<unknown>` |
|  -7.7% |   -18 | 20.8% → 20.3% | 235 → 217 | `Compile::optimize_loops`              | `<unknown>` |
|  -3.5% |   -11 | 28.0% → 28.7% | 317 → 306 | `PhaseIdealLoop::optimize`             | `<unknown>` |
| +24.4% |   +10 |   3.6% → 4.8% |   41 → 51 | `PhaseMacroExpand::expand_macro_nodes` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|  Change | Delta |             % |       Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------------: | ----------------------------------- | ----------- |
|   -3.0% |   -83 | 82.2% → 81.1% | 2,811 → 2,728 | `C2Compiler::compile_method`        | `<unknown>` |
|   +4.3% |   +26 | 17.5% → 18.6% |     598 → 624 | `Compiler::compile_method`          | `<unknown>` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `CompileBroker::collect_statistics` | `<unknown>` |
|  -66.7% |    -2 |  0.1% → <0.1% |         3 → 1 | `ciEnv::ciEnv`                      | `<unknown>` |
|  -50.0% |    -2 |          0.1% |         4 → 2 | `ciEnv::~ciEnv`                     | `<unknown>` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | ----------- |
|  -20.0% |   -15 |  10.0% → 8.6% |   75 → 60 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |
| +155.6% |   +14 |   1.2% → 3.3% |    9 → 23 | `PhaseIFG::SquareUp`                       | `<unknown>` |
|  -24.1% |   -13 |   7.2% → 5.9% |   54 → 41 | `PhaseAggressiveCoalesce::insert_copies`   | `<unknown>` |
|  -14.1% |   -10 |   9.4% → 8.8% |   71 → 61 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
|   -8.7% |   -10 | 15.3% → 15.1% | 115 → 105 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
|  -27.0% |   -24 | 24.0% → 19.9% | 89 → 65 | `StoreNode::Ideal`                    | `<unknown>` |
|  -43.3% |   -13 |   8.1% → 5.2% | 30 → 17 | `PhiNode::Ideal`                      | `<unknown>` |
|  -17.5% |   -10 | 15.4% → 14.4% | 57 → 47 | `PhaseIterGVN::subsume_node`          | `<unknown>` |
| +200.0% |    +6 |   0.8% → 2.8% |   3 → 9 | `ConstraintCastNode::Identity`        | `<unknown>` |
|  -40.0% |    -4 |   2.7% → 1.8% |  10 → 6 | `PhaseIterGVN::add_users_to_worklist` | `<unknown>` |

##### `Node::dominates` (`<unknown>`)

| Change | Delta |           % | Samples | Callee              | Location    |
| -----: | ----: | ----------: | ------: | ------------------- | ----------- |
|    new |    +1 | 0.0% → 1.1% |   0 → 1 | `Node::nonnull_req` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | --------: | -------------------------------------- | ----------- |
|  -13.2% |   -23 | 37.2% → 34.5% | 174 → 151 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
|  -13.5% |    -7 | 11.1% → 10.3% |   52 → 45 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|   -7.1% |    -6 | 17.9% → 17.8% |   84 → 78 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
|  -66.7% |    -6 |   1.9% → 0.7% |     9 → 3 | `Node::is_CFG`                         | `<unknown>` |
| +166.7% |    +5 |   0.6% → 1.8% |     3 → 8 | `MultiNode::is_CFG`                    | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

| Change | Delta |              % |   Samples | Callee                                 | Location    |
| -----: | ----: | -------------: | --------: | -------------------------------------- | ----------- |
|  -6.6% |   -31 | 100.0% → 99.8% | 468 → 437 | `PhaseIdealLoop::build_and_optimize`   | `<unknown>` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                               | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------ | ----------- |
|  -6.4% |   -30 | 84.8% → 83.7% | 468 → 438 | `PhaseIdealLoop::PhaseIdealLoop`     | `<unknown>` |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -42.6% |   -26 | 46.2% → 34.0% | 61 → 35 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|  +53.3% |    +8 | 11.4% → 22.3% | 15 → 23 | `PhaseIdealLoop::compute_lca_of_uses`         | `<unknown>` |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `ProjNode::is_uncommon_trap_if_pattern`       | `<unknown>` |
|  -12.5% |    -1 |   6.1% → 6.8% |   8 → 7 | `ProjNode::is_uncommon_trap_proj`             | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `StoreNNode::Opcode`                          | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                    | Location    |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | ----------- |
|  -11.9% |   -44 | 95.9% → 91.1% | 370 → 326 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|     new |    +4 |   0.0% → 1.1% |     0 → 4 | `MultiNode::hash`                         | `<unknown>` |
|  +66.7% |    +2 |   0.8% → 1.4% |     3 → 5 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `Node::replace_edge`                      | `<unknown>` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `ConstraintCastNode::hash`                | `<unknown>` |

##### `InitializeNode::can_capture_store` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | -------: | ------------------------------------------ | ----------- |
|  -23.7% |   -27 | 98.3% → 98.9% | 114 → 87 | `InitializeNode::detect_init_independence` | `<unknown>` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `_platform_bzero`                          | `<unknown>` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `PhaseGVN::is_dominator`                   | `<unknown>` |

##### `MemNode::all_controls_dominate` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                     | Location    |
| ------: | ----: | ------------: | -------: | -------------------------- | ----------- |
|  -25.8% |   -32 | 99.2% → 94.8% | 124 → 92 | `Node::dominates`          | `<unknown>` |
|     new |    +3 |   0.0% → 3.1% |    0 → 3 | `Unique_Node_List::push`   | `<unknown>` |
|     new |    +2 |   0.0% → 2.1% |    0 → 2 | `Node::find_exact_control` | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |    1 → 0 | `Node_List::Node_List`     | `<unknown>` |

##### `Compile::Code_Gen` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                               | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ----------- |
|   -7.3% |   -55 | 57.7% → 54.6% | 752 → 697 | `PhaseChaitin::Register_Allocate`    | `<unknown>` |
|  +12.2% |   +18 | 11.3% → 12.9% | 147 → 165 | `PhaseOutput::Output`                | `<unknown>` |
|  -10.6% |   -15 |  10.8% → 9.9% | 141 → 126 | `PhaseCFG::do_global_code_motion`    | `<unknown>` |
| +260.0% |   +13 |   0.4% → 1.4% |    5 → 18 | `PhaseBlockLayout::PhaseBlockLayout` | `<unknown>` |
|  +85.7% |   +12 |   1.1% → 2.0% |   14 → 26 | `PhaseOutput::install_code`          | `<unknown>` |

##### `InitializeNode::detect_init_independence` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                           | Location    |
| ------: | ----: | ------------: | -------: | -------------------------------- | ----------- |
|  -25.0% |   -28 | 98.2% → 96.6% | 112 → 84 | `MemNode::all_controls_dominate` | `<unknown>` |
| removed |    -1 |   0.9% → 0.0% |    1 → 0 | `PhaseGVN::is_dominator`         | `<unknown>` |
|     new |    +1 |   0.0% → 1.1% |    0 → 1 | `Node::pinned`                   | `<unknown>` |

##### `PhaseIterGVN::subsume_node` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
|  -32.2% |   -19 | 66.3% → 61.5% | 59 → 40 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  -42.9% |    -3 |   7.9% → 6.2% |   7 → 4 | `PhaseIterGVN::rehash_node_delayed`       | `<unknown>` |
|  -66.7% |    -2 |   3.4% → 1.5% |   3 → 1 | `Node::del_req`                           | `<unknown>` |
|     new |    +2 |   0.0% → 3.1% |   0 → 2 | `Node::replace_edge`                      | `<unknown>` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `IfFalseNode::Opcode`                     | `<unknown>` |

##### `Compile::inline_incrementally` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| -41.7% |   -20 | 49.5% → 38.4% | 48 → 28 | `Compile::inline_incrementally_cleanup` | `<unknown>` |
|  -8.2% |    -4 | 50.5% → 61.6% | 49 → 45 | `Compile::inline_incrementally_one`     | `<unknown>` |

##### `StoreNode::Ideal` (`<unknown>`)

|  Change | Delta |             % |  Samples | Callee                              | Location    |
| ------: | ----: | ------------: | -------: | ----------------------------------- | ----------- |
|  -24.1% |   -28 | 97.5% → 92.6% | 116 → 88 | `InitializeNode::can_capture_store` | `<unknown>` |
| +100.0% |    +3 |   2.5% → 6.3% |    3 → 6 | `MemNode::Ideal_common`             | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                      | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ----------- |
|  -21.7% |   -28 | 74.1% → 66.9% | 129 → 101 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
|  -66.7% |    -2 |   1.7% → 0.7% |     3 → 1 | `Node::is_CFG`                              | `<unknown>` |
|     new |    +2 |   0.0% → 1.3% |     0 → 2 | `PhaseIdealLoop::compute_lca_of_uses`       | `<unknown>` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `Conv2BNode::Opcode`                        | `<unknown>` |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `PhiNode::Opcode`                           | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|  Change | Delta |           % |       Samples | Callee                                                   | Location    |
| ------: | ----: | ----------: | ------------: | -------------------------------------------------------- | ----------- |
|   -0.6% |   -22 |       99.9% | 3,442 → 3,420 | `CompileBroker::compiler_thread_loop`                    | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |         2 → 0 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `<unknown>` |
|  +33.3% |    +1 |        0.1% |         3 → 4 | `ServiceThread::service_thread_entry`                    | `<unknown>` |

##### `LinkResolver::resolve_static_call` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
|  -40.9% |    -9 | 81.5% → 76.5% | 22 → 13 | `LinkResolver::linktime_resolve_static_method` | `<unknown>` |
|  -66.7% |    -2 |  11.1% → 5.9% |   3 → 1 | `InstanceKlass::initialize_impl`               | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `JfrResolution::on_runtime_resolution`         | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `methodHandle::operator=`                      | `<unknown>` |

##### `InlineTree::check_can_parse` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `ciMethod::get_flow_analysis` | `<unknown>` |

##### `CallGenerator::for_inline` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `InlineTree::check_can_parse` | `<unknown>` |

##### `Parse::do_checkcast` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
|  -58.8% |   -10 | 77.3% → 53.8% |  17 → 7 | `GraphKit::gen_checkcast`     | `<unknown>` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `TypePtr::interfaces`         | `<unknown>` |
| +100.0% |    +1 |  4.5% → 15.4% |   1 → 2 | `Type::hashcons`              | `<unknown>` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `TypeKlassPtr::make`          | `<unknown>` |
| +100.0% |    +1 |  4.5% → 15.4% |   1 → 2 | `ciBytecodeStream::get_klass` | `<unknown>` |

##### `LinkResolver::linktime_resolve_static_method` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                  | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------- | ----------- |
| -45.5% |   -10 | 100.0% → 92.3% | 22 → 12 | `LinkResolver::resolve_method`          | `<unknown>` |
|    new |    +1 |    0.0% → 7.7% |   0 → 1 | `InstanceKlass::uncached_lookup_method` | `<unknown>` |

##### `LinkResolver::resolve_method` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|  -29.6% |    -8 | 69.2% → 61.3% | 27 → 19 | `InstanceKlass::uncached_lookup_method`         | `<unknown>` |
| +200.0% |    +2 |   2.6% → 9.7% |   1 → 3 | `LinkResolver::check_method_accessability`      | `<unknown>` |
|  +20.0% |    +1 | 12.8% → 19.4% |   5 → 6 | `LinkResolver::check_method_loader_constraints` | `<unknown>` |
|  -50.0% |    -1 |   5.1% → 3.2% |   2 → 1 | `LinkResolver::lookup_polymorphic_method`       | `<unknown>` |

##### `Parse::do_exceptions` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|  -66.7% |    -4 | 54.5% → 66.7% |   6 → 2 | `Parse::throw_to_exit`           | `<unknown>` |
|  -66.7% |    -2 | 27.3% → 33.3% |   3 → 1 | `Parse::catch_inline_exceptions` | `<unknown>` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `GraphKit::use_exception_state`  | `<unknown>` |

##### `nmethod::oops_do_process_weak` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                      | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | ----------- |
| -38.5% |    -5 | 54.2% → 50.0% |  13 → 8 | `sys_icache_invalidate`                     | `<unknown>` |
| -44.4% |    -4 | 37.5% → 31.3% |   9 → 5 | `nmethod::fix_oop_relocations`              | `<unknown>` |
| +50.0% |    +1 |  8.3% → 18.8% |   2 → 3 | `G1NmethodProcessor::do_regular_processing` | `<unknown>` |

##### `G1CodeBlobClosure::do_code_blob` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -33.3% |    -8 | 100.0% | 24 → 16 | `nmethod::oops_do_process_weak` | `<unknown>` |

##### `ClassHierarchyIterator::next` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
| -50.0% |    -4 | 66.7% → 80.0% |   8 → 4 | `Klass::next_sibling` | `<unknown>` |

##### `InstanceKlass::uncached_lookup_method` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                             | Location    |
| -----: | ----: | -------------: | ------: | ---------------------------------- | ----------- |
| -26.7% |    -8 | 100.0% → 95.7% | 30 → 22 | `InstanceKlass::find_method_index` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

| Change | Delta |           % | Samples | Callee                                                                         | Location    |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 2.3% |   0 → 1 | `GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::expand_to` | `<unknown>` |

##### `Parse::do_field_access` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------- |
|  -13.8% |    -4 | 42.6% → 41.0% | 29 → 25 | `Parse::do_put_xxx`           | `<unknown>` |
|  -10.3% |    -3 |         42.6% | 29 → 26 | `Parse::do_get_xxx`           | `<unknown>` |
| removed |    -2 |   2.9% → 0.0% |   2 → 0 | `TypePtr::interfaces`         | `<unknown>` |
| +100.0% |    +2 |   2.9% → 6.6% |   2 → 4 | `ciBytecodeStream::get_field` | `<unknown>` |
|  -25.0% |    -1 |   5.9% → 4.9% |   4 → 3 | `GraphKit::null_check_common` | `<unknown>` |

##### `handleOpen` (`<unknown>`)

| Change | Delta |      % | Samples | Callee   | Location    |
| -----: | ----: | -----: | ------: | -------- | ----------- |
| -87.5% |    -7 | 100.0% |   8 → 1 | `__open` | `<unknown>` |

##### `isRuleSuppressed` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |             % |   Samples | Callee    | Location                                                    |
| ------: | ----: | ------------: | --------: | --------- | ----------------------------------------------------------- |
|   -5.0% |   -12 | 98.0% → 98.7% | 239 → 227 | `init`    | `org.codenarc.analyzer.SuppressionAnalyzer`                 |
| removed |    -2 |   0.8% → 0.0% |     2 → 0 | `getName` | `org.codenarc.rule.formatting.BlockStartsWithBlankLineRule` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `getName` | `org.codenarc.rule.basic.BooleanGetBooleanRule`             |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `getName` | `org.codenarc.rule.convention.ImplicitReturnStatementRule`  |
|     new |    +1 |   0.0% → 0.4% |     0 → 1 | `getName` | `org.codenarc.rule.groovyism.ExplicitCallToPlusMethodRule`  |

##### `init` (`org.codenarc.analyzer.SuppressionAnalyzer`)

|  Change | Delta |              % |   Samples | Callee                        | Location                                    |
| ------: | ----: | -------------: | --------: | ----------------------------- | ------------------------------------------- |
|   -4.2% |   -10 | 99.2% → 100.0% | 237 → 227 | `getAst`                      | `org.codenarc.source.AbstractSourceCode`    |
| removed |    -1 |    0.4% → 0.0% |     1 → 0 | `getSuppressionsByLineNumber` | `org.codenarc.analyzer.SuppressionAnalyzer` |
| removed |    -1 |    0.4% → 0.0% |     1 → 0 | `putAll`                      | `java.util.concurrent.ConcurrentHashMap`    |

##### `doCall` (`org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`)

| Change | Delta |     % |   Samples | Callee           | Location                           |
| -----: | ----: | ----: | --------: | ---------------- | ---------------------------------- |
|  -3.7% |   -10 | 99.6% | 270 → 260 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `init` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |              % |   Samples | Callee                                                | Location                                 |
| -----: | ----: | -------------: | --------: | ----------------------------------------------------- | ---------------------------------------- |
|  -4.6% |   -11 | 100.0% → 99.6% | 237 → 226 | `linkToCallSite`                                      | `java.lang.invoke.Invokers$Holder`       |
|    new |    +1 |    0.0% → 0.4% |     0 → 1 | `$get$$class$org$codenarc$source$ExpressionCollector` | `org.codenarc.source.AbstractSourceCode` |

##### `getAst` (`org.codenarc.source.AbstractSourceCode`)

| Change | Delta |              % |   Samples | Callee           | Location                           |
| -----: | ----: | -------------: | --------: | ---------------- | ---------------------------------- |
|  -4.2% |   -10 | 100.0% → 99.6% | 238 → 228 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `applyTo` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

| Change | Delta |             % | Samples | Callee                 | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------------- |
| -54.5% |    -6 | 27.5% → 16.1% |  11 → 5 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                  |
| -10.3% |    -3 | 72.5% → 83.9% | 29 → 26 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `super$3$visitConstructorOrMethod` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change | Delta |      % | Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| -56.3% |    -9 | 100.0% |  16 → 7 | `visitConstructorOrMethod` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `getAstVisitor` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| -72.7% |    -8 | 100.0% |  11 → 3 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `visitBinaryExpression` (`org.codenarc.rule.dry.DuplicateLiteralAstVisitor`)

| Change | Delta |             % | Samples | Callee                 | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------------- |
| -21.4% |    -6 | 51.9% → 47.8% | 28 → 22 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
| -14.7% |    -5 |         63.0% | 34 → 29 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                  |

##### `getText` (`org.codenarc.source.SourceFile`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| -53.3% |    -8 | 100.0% |  15 → 7 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `visitMethodCallExpression` (`org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`)

| Change | Delta |             % | Samples | Callee                 | Location                                                                                                |
| -----: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| -26.7% |    -4 | 71.4% → 84.6% | 15 → 11 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                                                                      |
| -75.0% |    -3 |  19.0% → 7.7% |   4 → 1 | `linkToCallSite`       | `java.lang.invoke.LambdaForm$MH.0x000000c0010c9000 → java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |
| -25.0% |    -1 | 19.0% → 23.1% |   4 → 3 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                                     |

##### `suppressException` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| -42.1% |    -8 | 100.0% | 19 → 11 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `collectAllPrivateFields` (`org.codenarc.rule.unused.UnusedPrivateFieldRule`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `visitConstantExpression` (`org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`)

| Change | Delta |              % | Samples | Callee           | Location                                            |
| -----: | ----: | -------------: | ------: | ---------------- | --------------------------------------------------- |
| -30.3% |   -10 | 100.0% → 88.5% | 33 → 23 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +2 |    0.0% → 7.7% |   0 → 2 | `linkToCallSite` | `java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |

##### `checkLastLineForSemicolon` (`org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`)

|  Change | Delta |             % | Samples | Callee           | Location                           |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `addViolation` (`org.codenarc.rule.AbstractAstVisitor`)

|  Change | Delta |             % | Samples | Callee                       | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------- |
|  -75.0% |    -6 | 80.0% → 66.7% |   8 → 2 | `sourceLineTrimmed`          | `org.codenarc.rule.AbstractAstVisitor` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `findFirstNonAnnotationLine` | `org.codenarc.util.AstUtil`            |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `<init>`                     | `org.codenarc.rule.Violation`          |

##### `visitVariableExpression` (`org.codenarc.rule.ClassReferenceAstVisitor`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| -58.3% |    -7 | 100.0% |  12 → 5 | `linkToCallSite` | `java.lang.invoke.Invokers$Holder` |

##### `visitBinaryExpression` (`org.codenarc.rule.formatting.SpaceAroundOperatorAstVisitor`)

|  Change | Delta |             % | Samples | Callee                 | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------- |
|  -28.6% |    -8 | 93.3% → 87.0% | 28 → 20 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                                                                      |
|  -80.0% |    -4 |  16.7% → 4.3% |   5 → 1 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter`                                                     |
| +200.0% |    +2 |  3.3% → 13.0% |   1 → 3 | `linkToCallSite`       | `java.lang.invoke.LambdaForm$MH.0x000000c0010c9000 → java.lang.invoke.LambdaForm$MH.0x00000070010c8c00` |

##### `visitVariableExpression` (`org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`)

| Change | Delta |              % | Samples | Callee                 | Location                                            |
| -----: | ----: | -------------: | ------: | ---------------------- | --------------------------------------------------- |
| -34.6% |    -9 | 100.0% → 89.5% | 26 → 17 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                  |
|    new |    +2 |   0.0% → 10.5% |   0 → 2 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |

##### `visitConstructorOrMethod` (`org.codenarc.rule.formatting.BlockEndsWithBlankLineAstVisitor`)

| Change | Delta |             % | Samples | Callee                 | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------------- |
| -66.7% |    -6 | 64.3% → 42.9% |   9 → 3 | `linkToCallSite`       | `java.lang.invoke.Invokers$Holder`                  |
| -20.0% |    -1 | 35.7% → 57.1% |   5 → 4 | `invokeMethodOnSuperN` | `org.codehaus.groovy.runtime.ScriptBytecodeAdapter` |
