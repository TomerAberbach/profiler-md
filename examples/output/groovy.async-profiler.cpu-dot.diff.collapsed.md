# Sampling profile diff

Collected 5,955 samples → 6,026 samples (+71 samples, +1.2%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| Compiler          |   +2.3% |   +59 | 43.5% → 44.0% | 2,592 → 2,651 |
| Native            |   +2.9% |   +48 | 27.5% → 28.0% | 1,639 → 1,687 |
| Standard library  |   -1.7% |   -26 | 26.4% → 25.7% | 1,574 → 1,548 |
| Ours              |   -6.2% |    -5 |   1.4% → 1.3% |       81 → 76 |
| JIT               |   -9.7% |    -6 |   1.0% → 0.9% |       62 → 56 |
| Garbage collector | +400.0% |    +4 |  <0.1% → 0.1% |         1 → 5 |
| Unknown           |  -50.0% |    -3 |  0.1% → <0.1% |         6 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                          | Location                                                                                                  |
| ------: | ----: | -----------: | --------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  +52.8% |   +19 |  0.6% → 0.9% |   36 → 55 | `PhaseAggressiveCoalesce::insert_copies`          | `<unknown>`                                                                                               |
|     new |   +14 |  0.0% → 0.2% |    0 → 14 | `setGuards`                                       | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                                 |
|  +22.6% |   +14 |  1.0% → 1.3% |   62 → 76 | `java_lang_Throwable::fill_in_stack_trace`        | `<unknown>`                                                                                               |
|  +37.9% |   +11 |  0.5% → 0.7% |   29 → 40 | `PhaseIdealLoop::build_loop_early`                | `<unknown>`                                                                                               |
|   +9.3% |   +10 |  1.8% → 1.9% | 107 → 117 | `PhaseChaitin::Split`                             | `<unknown>`                                                                                               |
|  +27.3% |    +9 |  0.6% → 0.7% |   33 → 42 | `PhaseChaitin::gather_lrg_masks`                  | `<unknown>`                                                                                               |
|  +34.6% |    +9 |  0.4% → 0.6% |   26 → 35 | `ciObjectFactory::get_metadata`                   | `<unknown>`                                                                                               |
| +300.0% |    +9 |  0.1% → 0.2% |    3 → 12 | `PhaseChaitin::merge_multidefs`                   | `<unknown>`                                                                                               |
| +800.0% |    +8 | <0.1% → 0.1% |     1 → 9 | `BlockListBuilder::set_leaders`                   | `<unknown>`                                                                                               |
| +266.7% |    +8 |  0.1% → 0.2% |    3 → 11 | `TypeInstPtr::hash`                               | `<unknown>`                                                                                               |
|  +22.9% |    +8 |  0.6% → 0.7% |   35 → 43 | `PhaseLive::compute`                              | `<unknown>`                                                                                               |
|     new |    +7 |  0.0% → 0.1% |     0 → 7 | `invoke`                                          | `java.lang.invoke.LambdaForm$MH.0x000000880148e000 → java.lang.invoke.LambdaForm$MH.0x000000700109a400`   |
|  +25.0% |    +7 |  0.5% → 0.6% |   28 → 35 | `G1ParScanThreadState::do_copy_to_survivor_space` | `<unknown>`                                                                                               |
|     new |    +7 |  0.0% → 0.1% |     0 → 7 | `invoke`                                          | `java.lang.invoke.LambdaForm$MH.0x00000088018e1c00 → java.lang.invoke.LambdaForm$MH.0x000000700102ac00`   |
| +140.0% |    +7 |  0.1% → 0.2% |    5 → 12 | `CodeCache::make_marked_nmethods_deoptimized`     | `<unknown>`                                                                                               |
|  +21.2% |    +7 |  0.6% → 0.7% |   33 → 40 | `PhaseChaitin::elide_copy`                        | `<unknown>`                                                                                               |
| +233.3% |    +7 |  0.1% → 0.2% |    3 → 10 | `Continuation::is_continuation_enterSpecial`      | `<unknown>`                                                                                               |
| +700.0% |    +7 | <0.1% → 0.1% |     1 → 8 | `stat64`                                          | `<unknown>`                                                                                               |
|  +66.7% |    +6 |         0.2% |    9 → 15 | `PhaseIterGVN::transform_old`                     | `<unknown>`                                                                                               |
|  +26.1% |    +6 |  0.4% → 0.5% |   23 → 29 | `invokeStatic`                                    | `java.lang.invoke.LambdaForm$DMH.0x0000008801088800 → java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                  | Location    |
| ------: | ----: | -----------: | --------: | ----------------------------------------- | ----------- |
|  +52.8% |   +19 |  0.6% → 0.9% |   36 → 55 | `PhaseAggressiveCoalesce::insert_copies`  | `<unknown>` |
|  +37.9% |   +11 |  0.5% → 0.7% |   29 → 40 | `PhaseIdealLoop::build_loop_early`        | `<unknown>` |
|   +9.3% |   +10 |  1.8% → 1.9% | 107 → 117 | `PhaseChaitin::Split`                     | `<unknown>` |
|  +27.3% |    +9 |  0.6% → 0.7% |   33 → 42 | `PhaseChaitin::gather_lrg_masks`          | `<unknown>` |
|  +34.6% |    +9 |  0.4% → 0.6% |   26 → 35 | `ciObjectFactory::get_metadata`           | `<unknown>` |
| +300.0% |    +9 |  0.1% → 0.2% |    3 → 12 | `PhaseChaitin::merge_multidefs`           | `<unknown>` |
| +800.0% |    +8 | <0.1% → 0.1% |     1 → 9 | `BlockListBuilder::set_leaders`           | `<unknown>` |
| +266.7% |    +8 |  0.1% → 0.2% |    3 → 11 | `TypeInstPtr::hash`                       | `<unknown>` |
|  +22.9% |    +8 |  0.6% → 0.7% |   35 → 43 | `PhaseLive::compute`                      | `<unknown>` |
|  +21.2% |    +7 |  0.6% → 0.7% |   33 → 40 | `PhaseChaitin::elide_copy`                | `<unknown>` |
|  +66.7% |    +6 |         0.2% |    9 → 15 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  +75.0% |    +6 |  0.1% → 0.2% |    8 → 14 | `PhiNode::Ideal`                          | `<unknown>` |
|  +75.0% |    +6 |  0.1% → 0.2% |    8 → 14 | `ValueStack::values_do`                   | `<unknown>` |
|  +37.5% |    +6 |  0.3% → 0.4% |   16 → 22 | `Unique_Node_List::remove`                | `<unknown>` |
| +200.0% |    +6 |         0.1% |     3 → 9 | `RegionNode::is_unreachable_from_root`    | `<unknown>` |
| +600.0% |    +6 | <0.1% → 0.1% |     1 → 7 | `IfFalseNode::Opcode`                     | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |    5 → 10 | `PhaseCCP::transform`                     | `<unknown>` |
|   +4.6% |    +5 |  1.8% → 1.9% | 108 → 113 | `Node::dominates`                         | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `Node::add_req`                           | `<unknown>` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +22.6% |   +14 |  1.0% → 1.3% | 62 → 76 | `java_lang_Throwable::fill_in_stack_trace`                                                                                   | `<unknown>` |
|  +25.0% |    +7 |  0.5% → 0.6% | 28 → 35 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `<unknown>` |
| +140.0% |    +7 |  0.1% → 0.2% |  5 → 12 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                | `<unknown>` |
| +233.3% |    +7 |  0.1% → 0.2% |  3 → 10 | `Continuation::is_continuation_enterSpecial`                                                                                 | `<unknown>` |
| +700.0% |    +7 | <0.1% → 0.1% |   1 → 8 | `stat64`                                                                                                                     | `<unknown>` |
|  +60.0% |    +6 |  0.2% → 0.3% | 10 → 16 | `nmethodBucket::next_not_unloading`                                                                                          | `<unknown>` |
|  +19.4% |    +6 |  0.5% → 0.6% | 31 → 37 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |
|  +24.0% |    +6 |  0.4% → 0.5% | 25 → 31 | `__psynch_cvwait`                                                                                                            | `<unknown>` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                        | `<unknown>` |
| +125.0% |    +5 |         0.1% |   4 → 9 | `InstanceKlass::allocate_objArray`                                                                                           | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `JNIHandleBlock::allocate_handle`                                                                                            | `<unknown>` |
|  +19.2% |    +5 |  0.4% → 0.5% | 26 → 31 | `_platform_memset`                                                                                                           | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `JavaFrameAnchor::make_walkable`                                                                                             | `<unknown>` |
|  +71.4% |    +5 |  0.1% → 0.2% |  7 → 12 | `CodeHeap::search_freelist`                                                                                                  | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `LocationValue::write_on`                                                                                                    | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                            | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                                                     | `<unknown>` |
|  +23.5% |    +4 |         0.3% | 17 → 21 | `frame::sender_for_compiled_frame`                                                                                           | `<unknown>` |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `constantPoolHandle::~constantPoolHandle`                                                                                    | `<unknown>` |
| +100.0% |    +4 |         0.1% |   4 → 8 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                               | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function            | Location                                                                                                  |
| ------: | ----: | -----------: | ------: | ------------------- | --------------------------------------------------------------------------------------------------------- |
|     new |   +14 |  0.0% → 0.2% |  0 → 14 | `setGuards`         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                                                 |
|     new |    +7 |  0.0% → 0.1% |   0 → 7 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000880148e000 → java.lang.invoke.LambdaForm$MH.0x000000700109a400`   |
|     new |    +7 |  0.0% → 0.1% |   0 → 7 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000088018e1c00 → java.lang.invoke.LambdaForm$MH.0x000000700102ac00`   |
|  +26.1% |    +6 |  0.4% → 0.5% | 23 → 29 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000008801088800 → java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  +40.0% |    +6 |         0.3% | 15 → 21 | `equals`            | `java.util.Objects`                                                                                       |
|  +20.0% |    +5 |  0.4% → 0.5% | 25 → 30 | `collector`         | `java.lang.invoke.LambdaForm$MH.0x00000088010a1000 → java.lang.invoke.LambdaForm$MH.0x00000070010a1000`   |
|  +12.5% |    +4 |  0.5% → 0.6% | 32 → 36 | `invokeVirtual`     | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x00000088010d3000 → java.lang.invoke.LambdaForm$MH.0x00000070010aa000`   |
| +100.0% |    +4 |         0.1% |   4 → 8 | `delegate`          | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                          |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `adaptivePredict`   | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                                    |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `tryAdvance`        | `java.util.Spliterators$ArraySpliterator`                                                                 |
|  +20.0% |    +4 |  0.3% → 0.4% | 20 → 24 | `<init>`            | `java.lang.invoke.MethodHandle`                                                                           |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `<init>`            | `java.util.ArrayList`                                                                                     |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `cachedLambdaForm`  | `java.lang.invoke.MethodTypeForm`                                                                         |
| +133.3% |    +4 |         0.1% |   3 → 7 | `makeReinvokerForm` | `java.lang.invoke.DelegatingMethodHandle`                                                                 |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `prepare`           | `java.lang.invoke.LambdaForm`                                                                             |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `<init>`            | `java.util.stream.AbstractPipeline`                                                                       |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x000000880128a400 → java.lang.invoke.LambdaForm$MH.0x000000700109a000`   |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000088017e3c00 → java.lang.invoke.LambdaForm$MH.0x0000007001031400`   |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `toArray`           | `java.util.stream.ReferencePipeline`                                                                      |

##### Ours

| Change | Delta |            % | Samples | Function                            | Location                                                                                   |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>`                            | `org.codenarc.rule.AbstractAstVisitor`                                                     |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `setRule`                           | `org.codenarc.rule.AbstractMethodVisitor`                                                  |
|    new |    +2 | 0.0% → <0.1% |   0 → 2 | `getMetaClass`                      | `org.codenarc.rule.unnecessary.UnnecessaryNullCheckBeforeInstanceOfRule`                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `call`                              | `org.gmetrics.util.AstUtil$isFinalVariable$1`                                              |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstantExpression`           | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `init`                              | `org.codenarc.source.AbstractSourceCode`                                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `addViolationIfDuplicate`           | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                         |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `calculateFunctions`                | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                  |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                            | `org.codenarc.rule.imports.UnusedImportRule$_findReference_closure3`                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                            | `org.codenarc.rule.imports.UnusedImportRule$_processImports_closure1`                      |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `writeFileViolations`               | `org.codenarc.report.TextReportWriter`                                                     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitVariableExpression`           | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                   |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod`                       | `org.codenarc.rule.naming.MethodNameAstVisitor`                                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `isViolationDisabled`               | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`                            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx`                      | `org.codenarc.rule.formatting.IndentationAstVisitor`                                       |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitMethodCallExpression` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                        |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall`                            | `org.codenarc.rule.formatting.SpaceAfterSemicolonAstVisitor$_visitBlockStatement_closure1` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `shouldApplyThisRuleTo`             | `org.codenarc.rule.AbstractRule`                                                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx`                      | `org.codenarc.rule.groovyism.ConfusingMultipleReturnsAstVisitor`                           |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitConstructorOrMethod`          | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`                          |

##### JIT

|  Change | Delta |            % | Samples | Function                     | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
|  +71.4% |    +5 |  0.1% → 0.2% |  7 → 12 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `I2C/C2I adapters(0xba)`     | `<unknown>` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `I2C/C2I adapters(0xbba)`    | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbeaa)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`       | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                        | Location                                                                                                |
| ------: | ----: | -----------: | --------: | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -50.0% |   -18 |  0.6% → 0.3% |   36 → 18 | `G1ParScanThreadState::trim_queue_to_threshold` | `<unknown>`                                                                                             |
|  -37.8% |   -17 |  0.8% → 0.5% |   45 → 28 | `invokeStatic`                                  | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -66.7% |   -14 |  0.4% → 0.1% |    21 → 7 | `MultiNode::is_CFG`                             | `<unknown>`                                                                                             |
|  -22.0% |   -13 |  1.0% → 0.8% |   59 → 46 | `IndexSetIterator::advance_and_next`            | `<unknown>`                                                                                             |
|  -21.1% |   -12 |  1.0% → 0.7% |   57 → 45 | `PhaseChaitin::build_ifg_physical`              | `<unknown>`                                                                                             |
|  -30.8% |   -12 |  0.7% → 0.4% |   39 → 27 | `invokeBasic`                                   | `java.lang.invoke.MethodHandle`                                                                         |
|   -9.7% |   -11 |  1.9% → 1.7% | 113 → 102 | `pthread_jit_write_protect_np`                  | `<unknown>`                                                                                             |
|  -40.7% |   -11 |  0.5% → 0.3% |   27 → 16 | `itable stub`                                   | `<unknown>`                                                                                             |
|  -12.0% |   -11 |  1.5% → 1.3% |   92 → 81 | `tlv_get_addr`                                  | `<unknown>`                                                                                             |
|  -23.1% |    -9 |  0.7% → 0.5% |   39 → 30 | `collector`                                     | `java.lang.invoke.LambdaForm$MH.0x0000008801031800 → java.lang.invoke.LambdaForm$MH.0x0000007001031800` |
|  -45.0% |    -9 |  0.3% → 0.2% |   20 → 11 | `_platform_memmove`                             | `<unknown>`                                                                                             |
|  -52.9% |    -9 |  0.3% → 0.1% |    17 → 8 | `Node::is_CFG`                                  | `<unknown>`                                                                                             |
|  -90.0% |    -9 | 0.2% → <0.1% |    10 → 1 | `checkCanSetAccessible`                         | `java.lang.reflect.AccessibleObject`                                                                    |
|  -50.0% |    -9 |  0.3% → 0.1% |    18 → 9 | `Compile::disconnect_useless_nodes`             | `<unknown>`                                                                                             |
|  -23.5% |    -8 |  0.6% → 0.4% |   34 → 26 | `PhaseIdealLoop::Dominators`                    | `<unknown>`                                                                                             |
|  -88.9% |    -8 | 0.2% → <0.1% |     9 → 1 | `GlobalValueNumbering::GlobalValueNumbering`    | `<unknown>`                                                                                             |
|   -8.1% |    -8 |  1.7% → 1.5% |   99 → 91 | `cast`                                          | `java.lang.Class`                                                                                       |
|  -66.7% |    -8 |  0.2% → 0.1% |    12 → 4 | `PhiNode::is_unsafe_data_reference`             | `<unknown>`                                                                                             |
|  -57.1% |    -8 |  0.2% → 0.1% |    14 → 6 | `_platform_bzero`                               | `<unknown>`                                                                                             |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `invoke`                                        | `java.lang.invoke.LambdaForm$MH.0x000000880102ac00 → java.lang.invoke.LambdaForm$MH.0x000000700151ac00` |

##### Compiler

|  Change | Delta |            % | Samples | Function                              | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
|  -66.7% |   -14 |  0.4% → 0.1% |  21 → 7 | `MultiNode::is_CFG`                   | `<unknown>` |
|  -22.0% |   -13 |  1.0% → 0.8% | 59 → 46 | `IndexSetIterator::advance_and_next`  | `<unknown>` |
|  -21.1% |   -12 |  1.0% → 0.7% | 57 → 45 | `PhaseChaitin::build_ifg_physical`    | `<unknown>` |
|  -52.9% |    -9 |  0.3% → 0.1% |  17 → 8 | `Node::is_CFG`                        | `<unknown>` |
|  -50.0% |    -9 |  0.3% → 0.1% |  18 → 9 | `Compile::disconnect_useless_nodes`   | `<unknown>` |
|  -23.5% |    -8 |  0.6% → 0.4% | 34 → 26 | `PhaseIdealLoop::Dominators`          | `<unknown>` |
|  -66.7% |    -8 |  0.2% → 0.1% |  12 → 4 | `PhiNode::is_unsafe_data_reference`   | `<unknown>` |
|  -46.7% |    -7 |  0.3% → 0.1% |  15 → 8 | `PhaseIFG::effective_degree`          | `<unknown>` |
|  -41.2% |    -7 |  0.3% → 0.2% | 17 → 10 | `PhaseChaitin::build_ifg_virtual`     | `<unknown>` |
|  -43.8% |    -7 |  0.3% → 0.1% |  16 → 9 | `PhaseIFG::SquareUp`                  | `<unknown>` |
|  -28.6% |    -6 |  0.4% → 0.2% | 21 → 15 | `PhaseIterGVN::add_users_to_worklist` | `<unknown>` |
|  -40.0% |    -6 |  0.3% → 0.1% |  15 → 9 | `Compile::find_alias_type`            | `<unknown>` |
| removed |    -6 |  0.1% → 0.0% |   6 → 0 | `ProjNode::Opcode`                    | `<unknown>` |
|  -27.3% |    -6 |  0.4% → 0.3% | 22 → 16 | `IntervalWalker::walk_to`             | `<unknown>` |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `RegionNode::Ideal`                   | `<unknown>` |
|  -35.7% |    -5 |  0.2% → 0.1% |  14 → 9 | `Matcher::match_tree`                 | `<unknown>` |
|  -35.7% |    -5 |  0.2% → 0.1% |  14 → 9 | `ConnectionGraph::compute_escape`     | `<unknown>` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `Node::unique_ctrl_out_or_null`       | `<unknown>` |
|  -45.5% |    -5 |  0.2% → 0.1% |  11 → 6 | `Node::clone`                         | `<unknown>` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `Scheduling::AddNodeToBundle`         | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                   | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -50.0% |   -18 |  0.6% → 0.3% |   36 → 18 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                            | `<unknown>` |
|   -9.7% |   -11 |  1.9% → 1.7% | 113 → 102 | `pthread_jit_write_protect_np`                                                                                                                             | `<unknown>` |
|  -12.0% |   -11 |  1.5% → 1.3% |   92 → 81 | `tlv_get_addr`                                                                                                                                             | `<unknown>` |
|  -45.0% |    -9 |  0.3% → 0.2% |   20 → 11 | `_platform_memmove`                                                                                                                                        | `<unknown>` |
|  -88.9% |    -8 | 0.2% → <0.1% |     9 → 1 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                                               | `<unknown>` |
|  -57.1% |    -8 |  0.2% → 0.1% |    14 → 6 | `_platform_bzero`                                                                                                                                          | `<unknown>` |
|  -70.0% |    -7 | 0.2% → <0.1% |    10 → 3 | `fwd_copy_again`                                                                                                                                           | `<unknown>` |
|  -21.4% |    -6 |  0.5% → 0.4% |   28 → 22 | `__psynch_mutexwait`                                                                                                                                       | `<unknown>` |
|  -37.5% |    -6 |  0.3% → 0.2% |   16 → 10 | `Dict::Insert`                                                                                                                                             | `<unknown>` |
|  -41.7% |    -5 |  0.2% → 0.1% |    12 → 7 | `posix_madvise`                                                                                                                                            | `<unknown>` |
|  -57.1% |    -4 | 0.1% → <0.1% |     7 → 3 | `Arena::Arealloc`                                                                                                                                          | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `CodeCache::find_blob`                                                                                                                                     | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |     6 → 2 | `nmethod::metadata_addr_at`                                                                                                                                | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `Location::write_on`                                                                                                                                       | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `Chunk::operator new`                                                                                                                                      | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `Parse::Parse`                                                                                                                                             | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `iRegLNoSpOper::type`                                                                                                                                      | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `ResourceBitMap::ResourceBitMap`                                                                                                                           | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `outputStream::print`                                                                                                                                      | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<548964ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 548964ull>::oop_access_barrier` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                  | Location                                                                                                  |
| ------: | ----: | -----------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------- |
|  -37.8% |   -17 |  0.8% → 0.5% | 45 → 28 | `invokeStatic`            | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
|  -30.8% |   -12 |  0.7% → 0.4% | 39 → 27 | `invokeBasic`             | `java.lang.invoke.MethodHandle`                                                                           |
|  -23.1% |    -9 |  0.7% → 0.5% | 39 → 30 | `collector`               | `java.lang.invoke.LambdaForm$MH.0x0000008801031800 → java.lang.invoke.LambdaForm$MH.0x0000007001031800`   |
|  -90.0% |    -9 | 0.2% → <0.1% |  10 → 1 | `checkCanSetAccessible`   | `java.lang.reflect.AccessibleObject`                                                                      |
|   -8.1% |    -8 |  1.7% → 1.5% | 99 → 91 | `cast`                    | `java.lang.Class`                                                                                         |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x000000880102ac00 → java.lang.invoke.LambdaForm$MH.0x000000700151ac00`   |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `afterNodeAccess`         | `java.util.LinkedHashMap`                                                                                 |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `setTransformedMethod`    | `org.codehaus.groovy.reflection.CachedMethod`                                                             |
|   -6.3% |    -4 |  1.1% → 1.0% | 63 → 59 | `newInstance`             | `java.lang.reflect.Array`                                                                                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000088010aa400 → java.lang.invoke.LambdaForm$MH.0x000000700138e000`   |
|  -36.4% |    -4 |  0.2% → 0.1% |  11 → 7 | `getInCache`              | `java.lang.invoke.LambdaFormEditor`                                                                       |
|  -44.4% |    -4 |  0.2% → 0.1% |   9 → 5 | `isNullConversion`        | `sun.invoke.util.VerifyType`                                                                              |
|  -40.0% |    -4 |  0.2% → 0.1% |  10 → 6 | `computeValueConversions` | `java.lang.invoke.MethodHandleImpl`                                                                       |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `invokeVirtual`           | `java.lang.invoke.LambdaForm$DMH.0x0000008801094400 → java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `invokeSpecial`           | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `invokeInterface`         | `java.lang.invoke.LambdaForm$DMH.0x0000008801095c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `guard`                   | `java.lang.invoke.LambdaForm$MH.0x0000008801189400 → java.lang.invoke.LambdaForm$MH.0x00000070010cb000`   |
|  -60.0% |    -3 | 0.1% → <0.1% |   5 → 2 | `<init>`                  | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`                                               |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `forEachWithCancel`       | `java.util.stream.ReferencePipeline`                                                                      |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `join`                    | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`                                                |

##### Ours

|  Change | Delta |            % | Samples | Function                            | Location                                                                                            |
| ------: | ----: | -----------: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `isMethodCallOnObject`              | `org.codenarc.util.AstUtil`                                                                         |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `isNotGeneratedCode`                | `org.codenarc.rule.AbstractAstVisitor`                                                              |
|  -33.3% |    -1 | 0.1% → <0.1% |   3 → 2 | `collectViolations`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethod`                       | `org.codenarc.rule.AbstractAstVisitor`                                                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `findFirstNonAnnotationLine`        | `org.codenarc.util.AstUtil`                                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `line`                              | `org.codenarc.source.AbstractSourceCode`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `super$2$visitMethodCallExpression` | `org.codenarc.rule.formatting.IndentationAstVisitor`                                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `validateAstCompilerPhase`          | `org.codenarc.rule.AbstractRule`                                                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitPropertyExpression`           | `org.codenarc.rule.unnecessary.UnnecessaryDotClassAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod`          | `org.codenarc.rule.ClassReferenceAstVisitor`                                                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `$getStaticMetaClass`               | `org.codenarc.rule.convention.ImplicitClosureParameterCodeVisitor`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>`                            | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor$_visitBlockStatement_closure2` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement`               | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo`                           | `org.codenarc.rule.formatting.LineLengthRule`                                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitBlockStatement`               | `org.codenarc.rule.formatting.BlockStartsWithBlankLineAstVisitor`                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>`                            | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>`                            | `org.codenarc.rule.convention.NoJavaUtilDateAstVisitor`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass`                      | `org.codenarc.source.AbstractSourceCode`                                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMethodArguments`                | `org.codenarc.util.AstUtil`                                                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `shouldVisitMethod`                 | `org.codenarc.rule.AbstractAstVisitor`                                                              |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  -40.7% |   -11 |  0.5% → 0.3% | 27 → 16 | `itable stub`             | `<unknown>` |
|  -66.7% |    -6 | 0.2% → <0.1% |   9 → 3 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  -16.7% |    -1 |         0.1% |   6 → 5 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call_stub`               | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |             % |       Samples | Function                                   | Location    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | ----------- |
|  +11.0% |   +39 |   5.9% → 6.5% |     354 → 393 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|   +3.4% |   +35 | 17.3% → 17.7% | 1,031 → 1,066 | `Compile::Optimize`                        | `<unknown>` |
|   +9.8% |   +33 |   5.6% → 6.1% |     336 → 369 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  +54.1% |   +20 |   0.6% → 0.9% |       37 → 57 | `PhaseIdealLoop::build_loop_early`         | `<unknown>` |
|  +42.2% |   +19 |   0.8% → 1.1% |       45 → 64 | `PhaseCCP::PhaseCCP`                       | `<unknown>` |
|  +50.0% |   +19 |   0.6% → 0.9% |       38 → 57 | `PhaseAggressiveCoalesce::insert_copies`   | `<unknown>` |
|   +0.6% |   +17 | 45.2% → 44.9% | 2,690 → 2,707 | `C2Compiler::compile_method`               | `<unknown>` |
|  +40.5% |   +17 |   0.7% → 1.0% |       42 → 59 | `PhaseCCP::analyze`                        | `<unknown>` |
|   +0.6% |   +16 | 45.1% → 44.9% | 2,687 → 2,703 | `Compile::Compile`                         | `<unknown>` |
|   +0.5% |   +16 | 56.3% → 55.9% | 3,351 → 3,367 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
|   +1.3% |   +16 |         21.4% | 1,275 → 1,291 | `Compile::Code_Gen`                        | `<unknown>` |
|  +56.0% |   +14 |   0.4% → 0.6% |       25 → 39 | `Compile::remove_speculative_types`        | `<unknown>` |
|  +24.1% |   +13 |   0.9% → 1.1% |       54 → 67 | `PhaseIterGVN::remove_globally_dead_node`  | `<unknown>` |
| +433.3% |   +13 |   0.1% → 0.3% |        3 → 16 | `PhaseChaitin::merge_multidefs`            | `<unknown>` |
|   +0.4% |   +12 | 55.9% → 55.4% | 3,329 → 3,341 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  +18.5% |   +12 |   1.1% → 1.3% |       65 → 77 | `PhaseIterGVN::subsume_node`               | `<unknown>` |
|  +20.3% |   +12 |   1.0% → 1.2% |       59 → 71 | `Type::hashcons`                           | `<unknown>` |
|   +1.5% |   +11 | 12.4% → 12.5% |     740 → 751 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
| +100.0% |   +11 |   0.2% → 0.4% |       11 → 22 | `LIR_Assembler::emit_call`                 | `<unknown>` |
|  +16.2% |   +11 |   1.1% → 1.3% |       68 → 79 | `PhaseOutput::fill_buffer`                 | `<unknown>` |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                          | Location    |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------- | ----------- |
|   +1.2% |   +44 |         61.8% | 3,680 → 3,724 | `_pthread_start`                                                                  | `<unknown>` |
|   +1.2% |   +44 |         61.8% | 3,680 → 3,724 | `thread_start`                                                                    | `<unknown>` |
|   +1.2% |   +43 |         61.8% | 3,680 → 3,723 | `Thread::call_run`                                                                | `<unknown>` |
|   +1.2% |   +43 |         61.8% | 3,680 → 3,723 | `thread_native_entry`                                                             | `<unknown>` |
|   +9.8% |   +30 |   5.2% → 5.6% |     307 → 337 | `WorkerThread::run`                                                               | `<unknown>` |
| +128.6% |   +27 |   0.4% → 0.8% |       21 → 48 | `G1ParScanThreadState::steal_and_trim_queue`                                      | `<unknown>` |
|  +15.2% |   +25 |   2.8% → 3.1% |     164 → 189 | `Java_java_lang_Throwable_fillInStackTrace`                                       | `<unknown>` |
|  +14.5% |   +24 |   2.8% → 3.1% |     165 → 189 | `JVM_FillInStackTrace`                                                            | `<unknown>` |
|  +14.1% |   +23 |   2.7% → 3.1% |     163 → 186 | `java_lang_Throwable::fill_in_stack_trace`                                        | `<unknown>` |
|  +71.9% |   +23 |   0.5% → 0.9% |       32 → 55 | `G1ParEvacuateFollowersClosure::do_void`                                          | `<unknown>` |
|  +71.9% |   +23 |   0.5% → 0.9% |       32 → 55 | `G1EvacuateRegionsTask::evacuate_live_objects`                                    | `<unknown>` |
|     new |   +23 |   0.0% → 0.4% |        0 → 23 | `KlassCleaningTask::work`                                                         | `<unknown>` |
|   +0.5% |   +17 | 56.3% → 55.9% | 3,354 → 3,371 | `JavaThread::thread_main_inner`                                                   | `<unknown>` |
|     new |   +15 |   0.0% → 0.2% |        0 → 15 | `InstanceKlass::clean_weak_instanceklass_links`                                   | `<unknown>` |
|     new |   +12 |   0.0% → 0.2% |        0 → 12 | `MethodData::clean_method_data`                                                   | `<unknown>` |
| +122.2% |   +11 |   0.2% → 0.3% |        9 → 20 | `ThreadCritical::ThreadCritical`                                                  | `<unknown>` |
|  +13.9% |   +10 |   1.2% → 1.4% |       72 → 82 | `G1ParScanThreadState::do_copy_to_survivor_space`                                 | `<unknown>` |
|  +20.4% |   +10 |   0.8% → 1.0% |       49 → 59 | `G1CMBitMap::iterate`                                                             | `<unknown>` |
|  +16.1% |    +9 |   0.9% → 1.1% |       56 → 65 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` | `<unknown>` |
| +112.5% |    +9 |   0.1% → 0.3% |        8 → 17 | `CallInfo::CallInfo`                                                              | `<unknown>` |

##### Standard library

|     Change |  Delta |             % |     Samples | Function          | Location                                                                                                  |
| ---------: | -----: | ------------: | ----------: | ----------------- | --------------------------------------------------------------------------------------------------------- |
|  +14946.7% | +2,242 |  0.3% → 37.5% |  15 → 2,257 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801498000 → java.lang.invoke.LambdaForm$MH.0x00000070010a1800`   |
|   +6508.8% | +2,213 |  0.6% → 37.3% |  34 → 2,247 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880137bc00 → java.lang.invoke.LambdaForm$MH.0x00000070010c7000`   |
|  +24177.8% | +2,176 |  0.2% → 36.3% |   9 → 2,185 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880154c800 → java.lang.invoke.LambdaForm$MH.0x00000070010d3800`   |
|   +5229.3% | +2,144 |  0.7% → 36.3% |  41 → 2,185 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000008801095c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
|  +10615.0% | +2,123 |  0.3% → 35.6% |  20 → 2,143 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x00000088010cb000 → java.lang.invoke.LambdaForm$MH.0x0000007001188c00`   |
| +208500.0% | +2,085 | <0.1% → 34.6% |   1 → 2,086 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088017b9400 → java.lang.invoke.LambdaForm$MH.0x0000007001282000`   |
|   +3268.3% | +2,059 |  1.1% → 35.2% |  63 → 2,122 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x00000088010cb400 → java.lang.invoke.LambdaForm$MH.0x000000700128a000`   |
|   +1984.0% | +1,984 |  1.7% → 34.6% | 100 → 2,084 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880109ac00 → java.lang.invoke.LambdaForm$MH.0x0000007001288800`   |
|    +788.0% | +1,836 |  3.9% → 34.3% | 233 → 2,069 | `invokeSpecial`   | `java.lang.invoke.LambdaForm$DMH.0x0000008801084000 → java.lang.invoke.LambdaForm$DMH.0x000000700118a400` |
|   +1171.5% | +1,687 |  2.4% → 30.4% | 144 → 1,831 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010c8000 → java.lang.invoke.LambdaForm$MH.0x0000007001596400`   |
|   +2340.0% | +1,638 |  1.2% → 28.3% |  70 → 1,708 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880112d800 → java.lang.invoke.LambdaForm$MH.0x0000007001367800`   |
|    +673.2% | +1,609 |  4.0% → 30.7% | 239 → 1,848 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801327000 → java.lang.invoke.LambdaForm$MH.0x0000007001593400`   |
|   +1306.5% | +1,607 |  2.1% → 28.7% | 123 → 1,730 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801121000 → java.lang.invoke.LambdaForm$MH.0x00000070011e1000`   |
|    +682.9% | +1,598 |  3.9% → 30.4% | 234 → 1,832 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880136a000 → java.lang.invoke.LambdaForm$MH.0x0000007001596000`   |
|   +1678.9% | +1,595 |  1.6% → 28.0% |  95 → 1,690 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880109b800 → java.lang.invoke.LambdaForm$MH.0x0000007001670400`   |
|    +601.2% | +1,449 |  4.0% → 28.0% | 241 → 1,690 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801323400 → java.lang.invoke.LambdaForm$MH.0x000000700166fc00`   |
|    +568.0% | +1,437 |  4.2% → 28.0% | 253 → 1,690 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801031400 → java.lang.invoke.LambdaForm$MH.0x0000007001670800`   |
|   +1270.8% | +1,347 |  1.8% → 24.1% | 106 → 1,453 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010c8c00 → java.lang.invoke.LambdaForm$MH.0x00000070010abc00`   |
|   +4003.0% | +1,321 |  0.6% → 22.5% |  33 → 1,354 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801181000 → java.lang.invoke.LambdaForm$MH.0x0000007001367c00`   |
|   +1884.3% | +1,319 |  1.2% → 23.1% |  70 → 1,389 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801104000 → java.lang.invoke.LambdaForm$MH.0x00000070017f2800`   |

##### Ours

|  Change | Delta |             % |       Samples | Function                     | Location                                                                    |
| ------: | ----: | ------------: | ------------: | ---------------------------- | --------------------------------------------------------------------------- |
|   +1.2% |   +25 |         34.6% | 2,061 → 2,086 | `doCall`                     | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   +1.2% |   +25 |         34.6% | 2,061 → 2,086 | `processDirectory`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +1.2% |   +25 |         34.6% | 2,062 → 2,087 | `analyze`                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +9.7% |   +25 |   4.3% → 4.7% |     258 → 283 | `doCall`                     | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|   +1.0% |   +23 | 37.6% → 37.5% | 2,238 → 2,261 | `main`                       | `org.codenarc.CodeNarc`                                                     |
|   +1.0% |   +22 | 37.1% → 37.0% | 2,208 → 2,230 | `execute`                    | `org.codenarc.CodeNarcRunner`                                               |
|   +1.0% |   +22 | 37.4% → 37.3% | 2,225 → 2,247 | `execute`                    | `org.codenarc.CodeNarc`                                                     |
|   +0.9% |   +19 | 34.3% → 34.2% | 2,040 → 2,059 | `collectViolations`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   +0.9% |   +18 | 34.4% → 34.3% | 2,051 → 2,069 | `processFile`                | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +6.0% |   +14 |   3.9% → 4.1% |     235 → 249 | `isRuleSuppressed`           | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +133.3% |   +12 |   0.2% → 0.3% |        9 → 21 | `checkDeclaration`           | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
|   +4.7% |   +11 |   3.9% → 4.0% |     232 → 243 | `init`                       | `org.codenarc.source.AbstractSourceCode`                                    |
|   +4.7% |   +11 |   3.9% → 4.0% |     233 → 244 | `getAst`                     | `org.codenarc.source.AbstractSourceCode`                                    |
|   +4.7% |   +11 |   3.9% → 4.0% |     232 → 243 | `init`                       | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +137.5% |   +11 |   0.1% → 0.3% |        8 → 19 | `findLineWithDeclaration`    | `org.codenarc.rule.unnecessary.UnnecessaryPublicModifierAstVisitor`         |
| +142.9% |   +10 |   0.1% → 0.3% |        7 → 17 | `visitClassComplete`         | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`             |
|   +0.8% |    +8 | 16.2% → 16.1% |     964 → 972 | `visitClass`                 | `org.codenarc.rule.AbstractAstVisitor`                                      |
|  +30.8% |    +8 |   0.4% → 0.6% |       26 → 34 | `applyTo`                    | `org.codenarc.rule.unused.UnusedVariableRule`                               |
|  +33.3% |    +8 |   0.4% → 0.5% |       24 → 32 | `doCall`                     | `org.codenarc.rule.unused.UnusedVariableRule$_applyTo_closure2`             |
|  +77.8% |    +7 |   0.2% → 0.3% |        9 → 16 | `visitDeclarationExpression` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                         |

##### JIT

|  Change | Delta |            % | Samples | Function                     | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
|  +71.4% |    +5 |  0.1% → 0.2% |  7 → 12 | `I2C/C2I adapters(0xbb)`     | `<unknown>` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `I2C/C2I adapters(0xbba)`    | `<unknown>` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `I2C/C2I adapters(0xbbbb)`   | `<unknown>` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `I2C/C2I adapters(0xba)`     | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbeaa)` | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0x)`       | `<unknown>` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `I2C/C2I adapters(0xbaa)`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |           % |   Samples | Function                                      | Location    |
| -----: | ----: | ----------: | --------: | --------------------------------------------- | ----------- |
| -36.1% |   -22 | 1.0% → 0.6% |   61 → 39 | `ciMethod::get_flow_analysis`                 | `<unknown>` |
| -20.2% |   -21 | 1.7% → 1.4% |  104 → 83 | `PhaseGVN::transform_no_reclaim`              | `<unknown>` |
| -36.2% |   -21 | 1.0% → 0.6% |   58 → 37 | `ciTypeFlow::flow_types`                      | `<unknown>` |
| -36.2% |   -21 | 1.0% → 0.6% |   58 → 37 | `ciTypeFlow::do_flow`                         | `<unknown>` |
| -35.1% |   -20 | 1.0% → 0.6% |   57 → 37 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
| -27.8% |   -20 | 1.2% → 0.9% |   72 → 52 | `Compile::call_generator`                     | `<unknown>` |
| -41.9% |   -18 | 0.7% → 0.4% |   43 → 25 | `ciTypeFlow::StateVector::apply_one_bytecode` | `<unknown>` |
|  -4.2% |   -17 | 6.8% → 6.4% | 403 → 386 | `PhaseIdealLoop::PhaseIdealLoop`              | `<unknown>` |
| -34.7% |   -17 | 0.8% → 0.5% |   49 → 32 | `ciTypeFlow::flow_block`                      | `<unknown>` |
| -32.7% |   -17 | 0.9% → 0.6% |   52 → 35 | `ciTypeFlow::df_flow_types`                   | `<unknown>` |
| -31.5% |   -17 | 0.9% → 0.6% |   54 → 37 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `<unknown>` |
|  -4.0% |   -16 | 6.8% → 6.4% | 402 → 386 | `PhaseIdealLoop::build_and_optimize`          | `<unknown>` |
| -53.3% |   -16 | 0.5% → 0.2% |   30 → 14 | `ciTypeFlow::StateVector::do_invoke`          | `<unknown>` |
| -66.7% |   -14 | 0.4% → 0.1% |    21 → 7 | `MultiNode::is_CFG`                           | `<unknown>` |
| -56.0% |   -14 | 0.4% → 0.2% |   25 → 11 | `PhaseIFG::effective_degree`                  | `<unknown>` |
| -56.0% |   -14 | 0.4% → 0.2% |   25 → 11 | `PhaseIFG::Compute_Effective_Degree`          | `<unknown>` |
| -22.0% |   -13 | 1.0% → 0.8% |   59 → 46 | `IndexSetIterator::advance_and_next`          | `<unknown>` |
| -48.1% |   -13 | 0.5% → 0.2% |   27 → 14 | `Compile::disconnect_useless_nodes`           | `<unknown>` |
| -52.2% |   -12 | 0.4% → 0.2% |   23 → 11 | `PhaseRenumberLive::PhaseRenumberLive`        | `<unknown>` |
|  -2.2% |   -11 | 8.4% → 8.1% | 498 → 487 | `PhaseIdealLoop::optimize`                    | `<unknown>` |

##### Native

| Change | Delta |           % |   Samples | Function                                                                                                                                                        | Location    |
| -----: | ----: | ----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -10.7% |   -39 | 6.1% → 5.4% | 364 → 325 | `Parse::do_call`                                                                                                                                                | `<unknown>` |
| -35.6% |   -32 | 1.5% → 1.0% |   90 → 58 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `<unknown>` |
| -35.6% |   -32 | 1.5% → 1.0% |   90 → 58 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `<unknown>` |
| -35.6% |   -32 | 1.5% → 1.0% |   90 → 58 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `<unknown>` |
| -31.1% |   -32 | 1.7% → 1.2% |  103 → 71 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `<unknown>` |
| -16.6% |   -31 | 3.1% → 2.6% | 187 → 156 | `PredictedCallGenerator::generate`                                                                                                                              | `<unknown>` |
| -34.8% |   -31 | 1.5% → 1.0% |   89 → 58 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `<unknown>` |
| -34.8% |   -31 | 1.5% → 1.0% |   89 → 58 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `<unknown>` |
|  -7.7% |   -29 | 6.3% → 5.8% | 378 → 349 | `Parse::do_one_block`                                                                                                                                           | `<unknown>` |
|  -7.3% |   -28 | 6.5% → 5.9% | 385 → 357 | `Parse::Parse`                                                                                                                                                  | `<unknown>` |
|  -7.1% |   -27 | 6.3% → 5.8% | 378 → 351 | `Parse::do_all_blocks`                                                                                                                                          | `<unknown>` |
|  -7.0% |   -27 | 6.5% → 5.9% | 385 → 358 | `ParseGenerator::generate`                                                                                                                                      | `<unknown>` |
| -39.0% |   -23 | 1.0% → 0.6% |   59 → 36 | `InlineTree::ok_to_inline`                                                                                                                                      | `<unknown>` |
| -26.6% |   -17 | 1.1% → 0.8% |   64 → 47 | `Parse::do_field_access`                                                                                                                                        | `<unknown>` |
| -43.8% |   -14 | 0.5% → 0.3% |   32 → 18 | `CounterOverflowStub::emit_code`                                                                                                                                | `<unknown>` |
|  -9.7% |   -11 | 1.9% → 1.7% | 113 → 102 | `pthread_jit_write_protect_np`                                                                                                                                  | `<unknown>` |
| -28.2% |   -11 | 0.7% → 0.5% |   39 → 28 | `BarrierSetC2::store_at`                                                                                                                                        | `<unknown>` |
| -12.0% |   -11 | 1.5% → 1.3% |   92 → 81 | `tlv_get_addr`                                                                                                                                                  | `<unknown>` |
| -29.7% |   -11 | 0.6% → 0.4% |   37 → 26 | `ModRefBarrierSetC2::store_at_resolved`                                                                                                                         | `<unknown>` |
|  -6.3% |   -10 | 2.7% → 2.5% | 158 → 148 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `<unknown>` |

##### Standard library

| Change |  Delta |            % |     Samples | Function          | Location                                                                                                  |
| -----: | -----: | -----------: | ----------: | ----------------- | --------------------------------------------------------------------------------------------------------- |
| -98.6% | -2,172 | 37.0% → 0.5% |  2,203 → 31 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010a9800 → java.lang.invoke.LambdaForm$MH.0x0000007001942c00`   |
| -97.6% | -2,172 | 37.4% → 0.9% |  2,225 → 53 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010c7400 → java.lang.invoke.LambdaForm$MH.0x00000070018e1c00`   |
| -97.6% | -2,172 | 37.4% → 0.9% |  2,225 → 53 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010c6800 → java.lang.invoke.LambdaForm$MH.0x00000070013fec00`   |
| -97.6% | -2,171 | 37.3% → 0.9% |  2,224 → 53 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000880108e000 → java.lang.invoke.LambdaForm$MH.0x0000007001443400`   |
| -99.1% | -2,098 | 35.5% → 0.3% |  2,117 → 19 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x0000008801189000 → java.lang.invoke.LambdaForm$MH.0x00000070010cac00`   |
| -96.9% | -2,094 | 36.3% → 1.1% |  2,162 → 68 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010d3c00 → java.lang.invoke.LambdaForm$MH.0x000000700112d800`   |
| -98.8% | -2,081 | 35.4% → 0.4% |  2,107 → 26 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801288800 → java.lang.invoke.LambdaForm$MH.0x0000007001944800`   |
| -97.4% | -2,074 | 35.8% → 0.9% |  2,129 → 55 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x0000008801189400 → java.lang.invoke.LambdaForm$MH.0x00000070010cb000`   |
| -96.6% | -2,041 | 35.5% → 1.2% |  2,112 → 71 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801188000 → java.lang.invoke.LambdaForm$MH.0x0000007001329400`   |
| -95.0% | -2,025 | 35.8% → 1.8% | 2,131 → 106 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010d2800 → java.lang.invoke.LambdaForm$MH.0x00000070010c7c00`   |
| -97.4% | -2,008 | 34.6% → 0.9% |  2,062 → 54 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000008801094c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001268400` |
| -97.4% | -2,008 | 34.6% → 0.9% |  2,061 → 53 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801282400 → java.lang.invoke.LambdaForm$MH.0x00000070018df400`   |
| -94.2% | -2,002 | 35.7% → 2.1% | 2,126 → 124 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010d8c00 → java.lang.invoke.LambdaForm$MH.0x0000007001121000`   |
| -96.4% | -1,978 | 34.4% → 1.2% |  2,051 → 73 | `invokeSpecial`   | `java.lang.invoke.LambdaForm$DMH.0x000000880118a800 → java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |
| -98.6% | -1,786 | 30.4% → 0.4% |  1,812 → 26 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088015ba000 → java.lang.invoke.LambdaForm$MH.0x0000007001944c00`   |
| -99.2% | -1,701 | 28.8% → 0.2% |  1,715 → 14 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801369800 → java.lang.invoke.LambdaForm$MH.0x0000007001939400`   |
| -97.7% | -1,627 | 28.0% → 0.6% |  1,666 → 39 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801652400 → java.lang.invoke.LambdaForm$MH.0x0000007001938000`   |
| -95.9% | -1,598 | 28.0% → 1.1% |  1,666 → 68 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000008801653000 → java.lang.invoke.LambdaForm$MH.0x0000007001292000`   |
| -99.1% | -1,364 | 23.1% → 0.2% |  1,377 → 13 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088017d5800 → java.lang.invoke.LambdaForm$MH.0x0000007001948000`   |
| -92.4% | -1,273 | 23.1% → 1.7% | 1,378 → 105 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000088010d3800 → java.lang.invoke.LambdaForm$MH.0x000000700109ac00`   |

##### Ours

| Change | Delta |             % |       Samples | Function                                | Location                                                                               |
| -----: | ----: | ------------: | ------------: | --------------------------------------- | -------------------------------------------------------------------------------------- |
|  -1.1% |   -15 | 22.6% → 22.1% | 1,347 → 1,332 | `doCall`                                | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`             |
| -65.2% |   -15 |   0.4% → 0.1% |        23 → 8 | `super$2$visitBinaryExpression`         | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                     |
| -33.3% |   -14 |   0.7% → 0.5% |       42 → 28 | `visitBinaryExpression`                 | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                     |
| -61.9% |   -13 |   0.4% → 0.1% |        21 → 8 | `visitConstructorOrMethod`              | `org.codenarc.rule.unused.UnusedMethodParameterAstVisitor`                             |
| -29.5% |   -13 |   0.7% → 0.5% |       44 → 31 | `addViolationIfDuplicate`               | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                     |
| -25.6% |   -10 |   0.7% → 0.5% |       39 → 29 | `doCall`                                | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`     |
| -47.6% |   -10 |   0.4% → 0.2% |       21 → 11 | `checkNode`                             | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`                         |
|  -1.1% |    -8 | 12.6% → 12.3% |     748 → 740 | `visitMethod`                           | `org.codenarc.rule.AbstractAstVisitor`                                                 |
| -14.0% |    -8 |   1.0% → 0.8% |       57 → 49 | `visitBlockStatement`                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                                   |
| -47.1% |    -8 |   0.3% → 0.1% |        17 → 9 | `visitClassEx`                          | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`                               |
| -88.9% |    -8 |  0.2% → <0.1% |         9 → 1 | `doCall`                                | `org.codenarc.rule.unused.UnusedVariableAstVisitor$_markVariableAsReferenced_closure3` |
|  -0.6% |    -7 | 20.4% → 20.0% | 1,212 → 1,205 | `applyTo`                               | `org.codenarc.rule.AbstractRule`                                                       |
| -87.5% |    -7 |  0.1% → <0.1% |         8 → 1 | `visitBinaryExpression`                 | `org.codenarc.rule.convention.InvertedConditionAstVisitor`                             |
| -29.2% |    -7 |   0.4% → 0.3% |       24 → 17 | `visitClass`                            | `org.codenarc.rule.AbstractMethodVisitor`                                              |
| -70.0% |    -7 |  0.2% → <0.1% |        10 → 3 | `visitListExpression`                   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                     |
| -46.2% |    -6 |   0.2% → 0.1% |        13 → 7 | `sortImportsByLineNumber`               | `org.codenarc.util.ImportUtil`                                                         |
| -42.9% |    -6 |   0.2% → 0.1% |        14 → 8 | `getNonStaticImportsSortedByLineNumber` | `org.codenarc.util.ImportUtil`                                                         |
| -18.8% |    -6 |   0.5% → 0.4% |       32 → 26 | `applyTo`                               | `org.codenarc.rule.unnecessary.UnnecessarySemicolonRule`                               |
| -42.9% |    -6 |   0.2% → 0.1% |        14 → 8 | `visitMethodEx`                         | `org.codenarc.rule.naming.ScopedConfusingMethodNameAstVisitor`                         |
| -66.7% |    -6 |  0.2% → <0.1% |         9 → 3 | `markVariableAsReferenced`              | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                    |

##### JIT

|  Change | Delta |            % | Samples | Function                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
|  -40.7% |   -11 |  0.5% → 0.3% | 27 → 16 | `itable stub`             | `<unknown>` |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
|  -16.7% |    -1 |         0.1% |   6 → 5 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `call_stub`               | `<unknown>` |
