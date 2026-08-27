# Sampling profile diff

Collected 5,644 samples → 6,003 samples (+359 samples, +6.4%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  +6.1% |  +152 | 44.0% → 43.9% | 2,484 → 2,636 |
| Native            |  +6.4% |  +101 |         28.1% | 1,588 → 1,689 |
| Standard library  |  +6.7% |   +97 | 25.7% → 25.8% | 1,450 → 1,547 |
| Ours              |  +6.0% |    +4 |          1.2% |       67 → 71 |
| JIT               | +16.3% |    +7 |          0.8% |       43 → 50 |
| Garbage collector | -14.3% |    -1 |          0.1% |         7 → 6 |
| Unknown           | -20.0% |    -1 |          0.1% |         5 → 4 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                             | Location                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ---------------------------------------------------- |
|  +96.9% |   +31 | 0.6% → 1.0% | 32 → 63 | `__psynch_mutexwait`                 | `<unknown>`                                          |
|  +93.9% |   +31 | 0.6% → 1.1% | 33 → 64 | `__psynch_cvwait`                    | `<unknown>`                                          |
|     new |   +30 | 0.0% → 0.5% |  0 → 30 | `collector`                          | `java.lang.invoke.LambdaForm$MH.0x000000e801031800`  |
|     new |   +27 | 0.0% → 0.4% |  0 → 27 | `invokeStatic`                       | `java.lang.invoke.LambdaForm$DMH.0x000000e801088800` |
|  +44.0% |   +22 | 0.9% → 1.2% | 50 → 72 | `IndexSetIterator::advance_and_next` | `<unknown>`                                          |
|     new |   +16 | 0.0% → 0.3% |  0 → 16 | `collector`                          | `java.lang.invoke.LambdaForm$MH.0x000000e8010a1000`  |
|  +48.4% |   +15 | 0.5% → 0.8% | 31 → 46 | `ciObjectFactory::get_metadata`      | `<unknown>`                                          |
|  +17.5% |   +14 | 1.4% → 1.6% | 80 → 94 | `cast`                               | `java.lang.Class`                                    |
|     new |   +13 | 0.0% → 0.2% |  0 → 13 | `invoke`                             | `java.lang.invoke.LambdaForm$MH.0x000000e80102ac00`  |
| +150.0% |   +12 | 0.1% → 0.3% |  8 → 20 | `equals`                             | `java.util.Objects`                                  |
|  +20.3% |   +12 | 1.0% → 1.2% | 59 → 71 | `Arena::contains`                    | `<unknown>`                                          |
|  +40.7% |   +11 | 0.5% → 0.6% | 27 → 38 | `vmSymbols::find_sid`                | `<unknown>`                                          |
|  +45.5% |   +10 | 0.4% → 0.5% | 22 → 32 | `MachNode::rematerialize`            | `<unknown>`                                          |
|  +45.5% |   +10 | 0.4% → 0.5% | 22 → 32 | `PhaseIdealLoop::Dominators`         | `<unknown>`                                          |
|  +66.7% |   +10 | 0.3% → 0.4% | 15 → 25 | `InstanceKlass::find_method_index`   | `<unknown>`                                          |
| +150.0% |    +9 | 0.1% → 0.2% |  6 → 15 | `posix_madvise`                      | `<unknown>`                                          |
|  +40.0% |    +8 | 0.4% → 0.5% | 20 → 28 | `<init>`                             | `java.lang.invoke.MethodHandle`                      |
| +100.0% |    +8 | 0.1% → 0.3% |  8 → 16 | `BacktraceBuilder::push`             | `<unknown>`                                          |
| +266.7% |    +8 | 0.1% → 0.2% |  3 → 11 | `checkExactType`                     | `java.lang.invoke.Invokers`                          |
|  +26.7% |    +8 | 0.5% → 0.6% | 30 → 38 | `PhaseChaitin::gather_lrg_masks`     | `<unknown>`                                          |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ----------- |
|  +44.0% |   +22 |  0.9% → 1.2% | 50 → 72 | `IndexSetIterator::advance_and_next`          | `<unknown>` |
|  +48.4% |   +15 |  0.5% → 0.8% | 31 → 46 | `ciObjectFactory::get_metadata`               | `<unknown>` |
|  +45.5% |   +10 |  0.4% → 0.5% | 22 → 32 | `MachNode::rematerialize`                     | `<unknown>` |
|  +45.5% |   +10 |  0.4% → 0.5% | 22 → 32 | `PhaseIdealLoop::Dominators`                  | `<unknown>` |
|  +26.7% |    +8 |  0.5% → 0.6% | 30 → 38 | `PhaseChaitin::gather_lrg_masks`              | `<unknown>` |
| +200.0% |    +8 |  0.1% → 0.2% |  4 → 12 | `IndexSet::alloc_block_containing`            | `<unknown>` |
| +350.0% |    +7 | <0.1% → 0.1% |   2 → 9 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |
|  +87.5% |    +7 |  0.1% → 0.2% |  8 → 15 | `RegionNode::is_CFG`                          | `<unknown>` |
| +116.7% |    +7 |  0.1% → 0.2% |  6 → 13 | `PhiNode::Opcode`                             | `<unknown>` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `Compile::remove_speculative_types`           | `<unknown>` |
| +200.0% |    +6 |         0.1% |   3 → 9 | `PhiNode::wait_for_region_igvn`               | `<unknown>` |
|  +35.3% |    +6 |  0.3% → 0.4% | 17 → 23 | `IntervalWalker::walk_to`                     | `<unknown>` |
|  +85.7% |    +6 |  0.1% → 0.2% |  7 → 13 | `PhaseIdealLoop::build_loop_tree`             | `<unknown>` |
|  +41.7% |    +5 |  0.2% → 0.3% | 12 → 17 | `Matcher::match_tree`                         | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `BlockListBuilder::set_leaders`               | `<unknown>` |
|  +55.6% |    +5 |         0.2% |  9 → 14 | `PhaseIdealLoop::split_if_with_blocks`        | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `Compile::flatten_alias_type`                 | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `ProjNode::pinned`                            | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `Compile::final_graph_reshaping_walk`         | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `MemNode::can_see_stored_value`               | `<unknown>` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                          | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
|  +96.9% |   +31 |  0.6% → 1.0% | 32 → 63 | `__psynch_mutexwait`                                                                              | `<unknown>` |
|  +93.9% |   +31 |  0.6% → 1.1% | 33 → 64 | `__psynch_cvwait`                                                                                 | `<unknown>` |
|  +20.3% |   +12 |  1.0% → 1.2% | 59 → 71 | `Arena::contains`                                                                                 | `<unknown>` |
|  +40.7% |   +11 |  0.5% → 0.6% | 27 → 38 | `vmSymbols::find_sid`                                                                             | `<unknown>` |
|  +66.7% |   +10 |  0.3% → 0.4% | 15 → 25 | `InstanceKlass::find_method_index`                                                                | `<unknown>` |
| +150.0% |    +9 |  0.1% → 0.2% |  6 → 15 | `posix_madvise`                                                                                   | `<unknown>` |
| +100.0% |    +8 |  0.1% → 0.3% |  8 → 16 | `BacktraceBuilder::push`                                                                          | `<unknown>` |
| +140.0% |    +7 |  0.1% → 0.2% |  5 → 12 | `JVM_NewArray`                                                                                    | `<unknown>` |
|  +22.6% |    +7 |  0.5% → 0.6% | 31 → 38 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`    | `<unknown>` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `__psynch_mutexdrop`                                                                              | `<unknown>` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `MHN_init_Mem`                                                                                    | `<unknown>` |
| +500.0% |    +5 | <0.1% → 0.1% |   1 → 6 | `Method::bci_from`                                                                                | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `CodeHeap::next_used`                                                                             | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `CompiledMethod::cleanup_inline_caches_impl`                                                      | `<unknown>` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `_nanov2_free`                                                                                    | `<unknown>` |
| +100.0% |    +4 |         0.1% |   4 → 8 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                          | `<unknown>` |
|  +50.0% |    +4 |  0.1% → 0.2% |  8 → 12 | `resource_allocate_bytes`                                                                         | `<unknown>` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `InstanceKlass::find_local_field`                                                                 | `<unknown>` |
|  +40.0% |    +4 |         0.2% | 10 → 14 | `nmethod::is_unloading`                                                                           | `<unknown>` |
| +100.0% |    +4 |         0.1% |   4 → 8 | `void OopOopIterateDispatch<G1ScanCardClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function            | Location                                              |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------------------------------------- |
|     new |   +30 |  0.0% → 0.5% |  0 → 30 | `collector`         | `java.lang.invoke.LambdaForm$MH.0x000000e801031800`   |
|     new |   +27 |  0.0% → 0.4% |  0 → 27 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000e801088800`  |
|     new |   +16 |  0.0% → 0.3% |  0 → 16 | `collector`         | `java.lang.invoke.LambdaForm$MH.0x000000e8010a1000`   |
|  +17.5% |   +14 |  1.4% → 1.6% | 80 → 94 | `cast`              | `java.lang.Class`                                     |
|     new |   +13 |  0.0% → 0.2% |  0 → 13 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000e80102ac00`   |
| +150.0% |   +12 |  0.1% → 0.3% |  8 → 20 | `equals`            | `java.util.Objects`                                   |
|  +40.0% |    +8 |  0.4% → 0.5% | 20 → 28 | `<init>`            | `java.lang.invoke.MethodHandle`                       |
| +266.7% |    +8 |  0.1% → 0.2% |  3 → 11 | `checkExactType`    | `java.lang.invoke.Invokers`                           |
|  +23.1% |    +6 |         0.5% | 26 → 32 | `invokeVirtual`     | `java.lang.invoke.DirectMethodHandle$Holder`          |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `<init>`            | `java.lang.invoke.MemberName`                         |
|  +85.7% |    +6 |  0.1% → 0.2% |  7 → 13 | `equals`            | `java.util.Arrays`                                    |
|  +21.7% |    +5 |  0.4% → 0.5% | 23 → 28 | `invokeStatic`      | `java.lang.invoke.DirectMethodHandle$Holder`          |
|  +71.4% |    +5 |  0.1% → 0.2% |  7 → 12 | `join`              | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `sourceSpliterator` | `java.util.stream.AbstractPipeline`                   |
| +125.0% |    +5 |         0.1% |   4 → 9 | `getInCache`        | `java.lang.invoke.LambdaFormEditor`                   |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `tabAt`             | `java.util.concurrent.ConcurrentHashMap`              |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000e80109a400`   |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `findSpecies`       | `java.lang.invoke.ClassSpecializer`                   |
|  +66.7% |    +4 |  0.1% → 0.2% |  6 → 10 | `putVal`            | `java.util.HashMap`                                   |
| +133.3% |    +4 |         0.1% |   3 → 7 | `get`               | `java.util.concurrent.ConcurrentHashMap`              |

##### Ours

|  Change | Delta |            % | Samples | Function                    | Location                                                                    |
| ------: | ----: | -----------: | ------: | --------------------------- | --------------------------------------------------------------------------- |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `<init>`                    | `org.codenarc.rule.AbstractAstVisitor`                                      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitBlockStatement`       | `org.codenarc.rule.formatting.IndentationAstVisitor`                        |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `isFirstVisit`              | `org.codenarc.rule.AbstractAstVisitor`                                      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `getIgnoreMethodNames`      | `org.codenarc.rule.convention.PublicMethodsBeforeNonPublicMethodsRule`      |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `getAstVisitor`             | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethod`               | `org.codenarc.rule.AbstractAstVisitor`                                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `addViolationIfDuplicate`   | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `init`                      | `org.codenarc.source.AbstractSourceCode`                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `contains`                  | `org.codenarc.rule.unnecessary.UnnecessaryDefInMethodDeclarationAstVisitor` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitStatement`            | `org.codenarc.rule.unnecessary.UnnecessarySemicolonAstVisitor`              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassComplete`        | `org.codenarc.rule.formatting.ClassEndsWithBlankLineAstVisitor`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `hasSingletonAnnotation`    | `org.codenarc.rule.design.StatelessSingletonAstVisitor`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `writeViolation`            | `org.codenarc.report.TextReportWriter`                                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodCallExpression` | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `addOrderingViolations`     | `org.codenarc.rule.imports.MisorderedStaticImportsRule`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitClassEx`              | `org.codenarc.rule.basic.EmptyClassAstVisitor`                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getText`                   | `org.codenarc.source.SourceFile`                                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `matches`                   | `org.codenarc.util.WildcardPattern`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>`                    | `org.codenarc.rule.formatting.AbstractSingleSpaceAfterKeywordAstVisitor`    |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                                                  |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| removed |   -26 |  0.5% → 0.0% |  26 → 0 | `collector`                                                                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a801031800`       |
| removed |   -22 |  0.4% → 0.0% |  22 → 0 | `collector`                                                                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1000`       |
| removed |   -19 |  0.3% → 0.0% |  19 → 0 | `invokeStatic`                                                                                                               | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800`      |
|  -33.3% |   -12 |  0.6% → 0.4% | 36 → 24 | `PhaseIdealLoop::build_loop_late_post_work`                                                                                  | `<unknown>`                                               |
|  -50.0% |   -12 |  0.4% → 0.2% | 24 → 12 | `frame::sender_for_compiled_frame`                                                                                           | `<unknown>`                                               |
|  -52.2% |   -12 |  0.4% → 0.2% | 23 → 11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>`                                               |
| removed |   -11 |  0.2% → 0.0% |  11 → 0 | `invoke`                                                                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a80102ac00`       |
|  -15.1% |   -11 |  1.3% → 1.0% | 73 → 62 | `java_lang_Throwable::fill_in_stack_trace`                                                                                   | `<unknown>`                                               |
|  -45.8% |   -11 |  0.4% → 0.2% | 24 → 13 | `NodeHash::hash_find_insert`                                                                                                 | `<unknown>`                                               |
|  -90.9% |   -10 | 0.2% → <0.1% |  11 → 1 | `MemAllocator::Allocation::notify_allocation`                                                                                | `<unknown>`                                               |
| removed |   -10 |  0.2% → 0.0% |  10 → 0 | `setGuards`                                                                                                                  | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  -90.9% |   -10 | 0.2% → <0.1% |  11 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                     | `<unknown>`                                               |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `guard`                                                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a80109a000`       |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `collector`                                                                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2800`       |
|   -8.8% |    -8 |  1.6% → 1.4% | 91 → 83 | `tlv_get_addr`                                                                                                               | `<unknown>`                                               |
|  -61.5% |    -8 |  0.2% → 0.1% |  13 → 5 | `equals`                                                                                                                     | `java.lang.String`                                        |
|  -53.3% |    -8 |  0.3% → 0.1% |  15 → 7 | `nmethodBucket::next_not_unloading`                                                                                          | `<unknown>`                                               |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `getAndPut`                                                                                                                  | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `Interval::add_use_pos`                                                                                                      | `<unknown>`                                               |
|  -63.6% |    -7 |  0.2% → 0.1% |  11 → 4 | `ProjNode::is_CFG`                                                                                                           | `<unknown>`                                               |

##### Compiler

|  Change | Delta |            % |  Samples | Function                                        | Location    |
| ------: | ----: | -----------: | -------: | ----------------------------------------------- | ----------- |
|  -33.3% |   -12 |  0.6% → 0.4% |  36 → 24 | `PhaseIdealLoop::build_loop_late_post_work`     | `<unknown>` |
|  -45.8% |   -11 |  0.4% → 0.2% |  24 → 13 | `NodeHash::hash_find_insert`                    | `<unknown>` |
|  -63.6% |    -7 |  0.2% → 0.1% |   11 → 4 | `ProjNode::is_CFG`                              | `<unknown>` |
|  -46.2% |    -6 |  0.2% → 0.1% |   13 → 7 | `MachNode::ideal_reg`                           | `<unknown>` |
|  -66.7% |    -6 | 0.2% → <0.1% |    9 → 3 | `Node::disconnect_inputs`                       | `<unknown>` |
|  -40.0% |    -6 |  0.3% → 0.1% |   15 → 9 | `PhaseIFG::effective_degree`                    | `<unknown>` |
|  -37.5% |    -6 |  0.3% → 0.2% |  16 → 10 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
|  -62.5% |    -5 | 0.1% → <0.1% |    8 → 3 | `PhaseIdealLoop::split_if_with_blocks_pre`      | `<unknown>` |
|  -33.3% |    -5 |  0.3% → 0.2% |  15 → 10 | `DebugInformationRecorder::describe_scope`      | `<unknown>` |
|  -41.7% |    -5 |  0.2% → 0.1% |   12 → 7 | `RegionNode::is_unreachable_from_root`          | `<unknown>` |
|  -27.8% |    -5 |  0.3% → 0.2% |  18 → 13 | `PhaseChaitin::build_ifg_virtual`               | `<unknown>` |
|  -25.0% |    -5 |  0.4% → 0.2% |  20 → 15 | `PhaseOutput::BuildOopMaps`                     | `<unknown>` |
|   -4.0% |    -4 |  1.8% → 1.6% | 101 → 97 | `Node::dominates`                               | `<unknown>` |
|  -36.4% |    -4 |  0.2% → 0.1% |   11 → 7 | `LinearScan::assign_reg_num`                    | `<unknown>` |
|  -23.5% |    -4 |  0.3% → 0.2% |  17 → 13 | `MultiNode::is_CFG`                             | `<unknown>` |
|  -50.0% |    -4 |         0.1% |    8 → 4 | `CallStaticJavaNode::Opcode`                    | `<unknown>` |
|  -66.7% |    -4 | 0.1% → <0.1% |    6 → 2 | `IfFalseNode::Opcode`                           | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `PhaseIdealLoop::compute_early_ctrl`            | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `InitializeNode::detect_init_independence`      | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |    4 → 0 | `LIR_List::append`                              | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                     | Location    |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `frame::sender_for_compiled_frame`                                                                                           | `<unknown>` |
|  -52.2% |   -12 |  0.4% → 0.2% |   23 → 11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `<unknown>` |
|  -15.1% |   -11 |  1.3% → 1.0% |   73 → 62 | `java_lang_Throwable::fill_in_stack_trace`                                                                                   | `<unknown>` |
|  -90.9% |   -10 | 0.2% → <0.1% |    11 → 1 | `MemAllocator::Allocation::notify_allocation`                                                                                | `<unknown>` |
|  -90.9% |   -10 | 0.2% → <0.1% |    11 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                     | `<unknown>` |
|   -8.8% |    -8 |  1.6% → 1.4% |   91 → 83 | `tlv_get_addr`                                                                                                               | `<unknown>` |
|  -53.3% |    -8 |  0.3% → 0.1% |    15 → 7 | `nmethodBucket::next_not_unloading`                                                                                          | `<unknown>` |
| removed |    -7 |  0.1% → 0.0% |     7 → 0 | `Interval::add_use_pos`                                                                                                      | `<unknown>` |
|  -85.7% |    -6 | 0.1% → <0.1% |     7 → 1 | `G1CardSet::add_card`                                                                                                        | `<unknown>` |
|   -4.0% |    -5 |  2.2% → 2.0% | 125 → 120 | `pthread_jit_write_protect_np`                                                                                               | `<unknown>` |
|  -83.3% |    -5 | 0.1% → <0.1% |     6 → 1 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                               | `<unknown>` |
|  -17.9% |    -5 |  0.5% → 0.4% |   28 → 23 | `sys_icache_invalidate`                                                                                                      | `<unknown>` |
|  -80.0% |    -4 | 0.1% → <0.1% |     5 → 1 | `Location::write_on`                                                                                                         | `<unknown>` |
|  -30.8% |    -4 |  0.2% → 0.1% |    13 → 9 | `bsearch`                                                                                                                    | `<unknown>` |
|  -57.1% |    -4 | 0.1% → <0.1% |     7 → 3 | `CodeBlob::is_upcall_stub`                                                                                                   | `<unknown>` |
|  -26.7% |    -4 |  0.3% → 0.2% |   15 → 11 | `CodeHeap::search_freelist`                                                                                                  | `<unknown>` |
| removed |    -4 |  0.1% → 0.0% |     4 → 0 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                                        | `<unknown>` |
| removed |    -3 |  0.1% → 0.0% |     3 → 0 | `CollectedHeap::array_allocate`                                                                                              | `<unknown>` |
|  -60.0% |    -3 | 0.1% → <0.1% |     5 → 2 | `SymbolTable::lookup_shared`                                                                                                 | `<unknown>` |
|  -75.0% |    -3 | 0.1% → <0.1% |     4 → 1 | `is_valid_sve_arith_imm_pattern`                                                                                             | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function             | Location                                                  |
| ------: | ----: | -----------: | ------: | -------------------- | --------------------------------------------------------- |
| removed |   -26 |  0.5% → 0.0% |  26 → 0 | `collector`          | `java.lang.invoke.LambdaForm$MH.0x000000a801031800`       |
| removed |   -22 |  0.4% → 0.0% |  22 → 0 | `collector`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1000`       |
| removed |   -19 |  0.3% → 0.0% |  19 → 0 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800`      |
| removed |   -11 |  0.2% → 0.0% |  11 → 0 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x000000a80102ac00`       |
| removed |   -10 |  0.2% → 0.0% |  10 → 0 | `setGuards`          | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `guard`              | `java.lang.invoke.LambdaForm$MH.0x000000a80109a000`       |
| removed |    -9 |  0.2% → 0.0% |   9 → 0 | `collector`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2800`       |
|  -61.5% |    -8 |  0.2% → 0.1% |  13 → 5 | `equals`             | `java.lang.String`                                        |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `getAndPut`          | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
|  -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `unboxInteger`       | `sun.invoke.util.ValueConversions`                        |
|  -37.5% |    -6 |  0.3% → 0.2% | 16 → 10 | `checkCustomized`    | `java.lang.invoke.Invokers`                               |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `internalMemberName` | `java.lang.invoke.DirectMethodHandle`                     |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `nextToken`          | `groovyjarjarantlr4.v4.runtime.Lexer`                     |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `getCachedContext`   | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`     |
|  -55.6% |    -5 |  0.2% → 0.1% |   9 → 4 | `afterNodeAccess`    | `java.util.LinkedHashMap`                                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `invokeVirtual`      | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400`      |
|  -40.0% |    -4 |  0.2% → 0.1% |  10 → 6 | `type`               | `java.lang.invoke.MethodHandle`                           |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `collector`          | `java.lang.invoke.LambdaForm$MH.0x000000a801283c00`       |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `guardWithCatch`     | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa000`       |
| removed |    -3 |  0.1% → 0.0% |   3 → 0 | `reinvoke`           | `java.lang.invoke.LambdaForm$MH.0x000000a801188c00`       |

##### Ours

|  Change | Delta |            % | Samples | Function                            | Location                                                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `applyTo`                           | `org.codenarc.rule.formatting.ConsecutiveBlankLinesRule`                             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `visitVariableExpression`           | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getMetaClass`                      | `org.codenarc.rule.convention.IfStatementCouldBeTernaryRule`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                            | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `measureRuleProcessingTime`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                       |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `collectViolations`                 | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `doCall`                            | `org.codenarc.rule.size.NestedBlockDepthAstVisitor$_visitClosureExpression_closure8` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nestingLevelForClass`              | `org.codenarc.rule.formatting.IndentationAstVisitor`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstructorOrMethod`          | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName`                           | `org.codenarc.rule.size.MethodCountRule`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>`                            | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyArrayAstVisitor`                  |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `checkForCorrectColumn`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `super$2$visitMethodCallExpression` | `org.codenarc.rule.FieldReferenceAstVisitor`                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAstVisitorClass`                | `org.codenarc.rule.unnecessary.UnnecessaryBigDecimalInstantiationRule`               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>`                            | `org.codenarc.rule.AbstractMethodVisitor`                                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName`                           | `org.codenarc.rule.basic.ParameterAssignmentInFilterClosureRule`                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName`                           | `org.codenarc.rule.unnecessary.UnnecessaryCollectionCallRule`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `findFirstLineAfterOpeningBrace`    | `org.codenarc.rule.formatting.ClassStartsWithBlankLineAstVisitor`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isViolationDisabled`               | `org.codenarc.plugin.disablerules.DisableRulesInCommentsPlugin`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isFunctionSpecifiedOrImplied`      | `org.gmetrics.result.MetricResultBuilder`                                            |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |       Samples | Function                                    | Location    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------- | ----------- |
|  +6.9% |  +223 | 57.2% → 57.5% | 3,231 → 3,454 | `CompileBroker::compiler_thread_loop`       | `<unknown>` |
|  +7.7% |  +197 | 45.6% → 46.1% | 2,572 → 2,769 | `Compile::Compile`                          | `<unknown>` |
|  +6.1% |  +196 | 56.7% → 56.5% | 3,198 → 3,394 | `CompileBroker::invoke_compiler_on_method`  | `<unknown>` |
|  +7.5% |  +194 | 45.7% → 46.2% | 2,577 → 2,771 | `C2Compiler::compile_method`                | `<unknown>` |
|  +7.5% |   +94 | 22.2% → 22.4% | 1,251 → 1,345 | `Compile::Code_Gen`                         | `<unknown>` |
|  +7.9% |   +55 | 12.3% → 12.5% |     696 → 751 | `PhaseChaitin::Register_Allocate`           | `<unknown>` |
|  +5.2% |   +52 | 17.6% → 17.4% |   994 → 1,046 | `Compile::Optimize`                         | `<unknown>` |
|  +8.0% |   +37 |   8.2% → 8.3% |     461 → 498 | `PhaseIdealLoop::optimize`                  | `<unknown>` |
| +64.2% |   +34 |   0.9% → 1.4% |       53 → 87 | `Compile::call_generator`                   | `<unknown>` |
| +44.0% |   +33 |   1.3% → 1.8% |      75 → 108 | `ciBytecodeStream::get_method`              | `<unknown>` |
| +93.5% |   +29 |   0.5% → 1.0% |       31 → 60 | `CompileQueue::get`                         | `<unknown>` |
| +76.3% |   +29 |   0.7% → 1.1% |       38 → 67 | `ciMethod::get_flow_analysis`               | `<unknown>` |
| +45.2% |   +28 |   1.1% → 1.5% |       62 → 90 | `ciObjectFactory::get_metadata`             | `<unknown>` |
| +18.4% |   +27 |   2.6% → 2.9% |     147 → 174 | `GraphBuilder::GraphBuilder`                | `<unknown>` |
|  +7.5% |   +26 |          6.2% |     348 → 374 | `PhaseIterGVN::optimize`                    | `<unknown>` |
| +18.8% |   +26 |   2.4% → 2.7% |     138 → 164 | `GraphBuilder::iterate_bytecodes_for_block` | `<unknown>` |
| +18.7% |   +26 |   2.5% → 2.7% |     139 → 165 | `GraphBuilder::iterate_all_blocks`          | `<unknown>` |
| +12.7% |   +25 |   3.5% → 3.7% |     197 → 222 | `Compile::optimize_loops`                   | `<unknown>` |
|  +7.3% |   +24 |   5.8% → 5.9% |     328 → 352 | `PhaseIterGVN::transform_old`               | `<unknown>` |
| +25.6% |   +23 |   1.6% → 1.9% |      90 → 113 | `PhaseChaitin::build_ifg_physical`          | `<unknown>` |

##### Native

|  Change | Delta |             % |       Samples | Function                            | Location    |
| ------: | ----: | ------------: | ------------: | ----------------------------------- | ----------- |
|   +7.0% |  +226 | 57.3% → 57.6% | 3,233 → 3,459 | `JavaThread::thread_main_inner`     | `<unknown>` |
|   +6.4% |  +226 |         62.1% | 3,504 → 3,730 | `Thread::call_run`                  | `<unknown>` |
|   +6.4% |  +226 |         62.1% | 3,504 → 3,730 | `thread_native_entry`               | `<unknown>` |
|   +6.4% |  +226 | 62.1% → 62.2% | 3,505 → 3,731 | `_pthread_start`                    | `<unknown>` |
|   +6.4% |  +226 | 62.1% → 62.2% | 3,505 → 3,731 | `thread_start`                      | `<unknown>` |
|  +14.4% |   +48 |   5.9% → 6.3% |     333 → 381 | `Parse::Parse`                      | `<unknown>` |
|  +14.4% |   +48 |   5.9% → 6.3% |     333 → 381 | `ParseGenerator::generate`          | `<unknown>` |
|  +12.7% |   +42 |   5.9% → 6.2% |     331 → 373 | `Parse::do_one_block`               | `<unknown>` |
|  +12.7% |   +42 |   5.9% → 6.2% |     331 → 373 | `Parse::do_all_blocks`              | `<unknown>` |
|  +10.0% |   +32 |   5.7% → 5.8% |     319 → 351 | `Parse::do_call`                    | `<unknown>` |
|  +96.9% |   +31 |   0.6% → 1.0% |       32 → 63 | `__psynch_mutexwait`                | `<unknown>` |
|  +79.5% |   +31 |   0.7% → 1.2% |       39 → 70 | `PlatformMonitor::wait`             | `<unknown>` |
|  +93.9% |   +31 |   0.6% → 1.1% |       33 → 64 | `__psynch_cvwait`                   | `<unknown>` |
|  +90.9% |   +30 |   0.6% → 1.0% |       33 → 63 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |
|  +18.4% |   +27 |   2.6% → 2.9% |     147 → 174 | `IRScope::IRScope`                  | `<unknown>` |
|  +18.4% |   +27 |   2.6% → 2.9% |     147 → 174 | `IR::IR`                            | `<unknown>` |
|  +83.9% |   +26 |   0.5% → 0.9% |       31 → 57 | `Monitor::wait`                     | `<unknown>` |
|  +53.7% |   +22 |   0.7% → 1.0% |       41 → 63 | `InlineTree::ok_to_inline`          | `<unknown>` |
| +137.5% |   +22 |   0.3% → 0.6% |       16 → 38 | `Chunk::operator new`               | `<unknown>` |
| +157.1% |   +22 |   0.2% → 0.6% |       14 → 36 | `Arena::grow`                       | `<unknown>` |

##### Standard library

| Change |  Delta |            % |   Samples | Function          | Location                                             |
| -----: | -----: | -----------: | --------: | ----------------- | ---------------------------------------------------- |
|    new | +2,218 | 0.0% → 36.9% | 0 → 2,218 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x000000e801088800` |
|    new | +2,216 | 0.0% → 36.9% | 0 → 2,216 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e8010a1800`  |
|    new | +2,215 | 0.0% → 36.9% | 0 → 2,215 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000e8010aa000`  |
|    new | +2,215 | 0.0% → 36.9% | 0 → 2,215 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x000000e8010aa800`  |
|    new | +2,215 | 0.0% → 36.9% | 0 → 2,215 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000e8010aac00`  |
|    new | +2,207 | 0.0% → 36.8% | 0 → 2,207 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x000000e801094400` |
|    new | +2,206 | 0.0% → 36.7% | 0 → 2,206 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e8010c7000`  |
|    new | +2,206 | 0.0% → 36.7% | 0 → 2,206 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e8010c6400`  |
|    new | +2,205 | 0.0% → 36.7% | 0 → 2,205 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e80108e000`  |
|    new | +2,194 | 0.0% → 36.5% | 0 → 2,194 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000e801098400`  |
|    new | +2,194 | 0.0% → 36.5% | 0 → 2,194 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x000000e801099c00`  |
|    new | +2,194 | 0.0% → 36.5% | 0 → 2,194 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000e80109a000`  |
|    new | +2,190 | 0.0% → 36.5% | 0 → 2,190 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e80102b000`  |
|    new | +2,189 | 0.0% → 36.5% | 0 → 2,189 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e80109bc00`  |
|    new | +2,185 | 0.0% → 36.4% | 0 → 2,185 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e8010a9800`  |
|    new | +2,148 | 0.0% → 35.8% | 0 → 2,148 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e8010d3800`  |
|    new | +2,145 | 0.0% → 35.7% | 0 → 2,145 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x000000e801095000` |
|    new | +2,108 | 0.0% → 35.1% | 0 → 2,108 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000e8010d2400`  |
|    new | +2,101 | 0.0% → 35.0% | 0 → 2,101 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000e8010d2c00`  |
|    new | +2,101 | 0.0% → 35.0% | 0 → 2,101 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000e801189000`  |

##### Ours

| Change | Delta |             % |       Samples | Function                    | Location                                                                    |
| -----: | ----: | ------------: | ------------: | --------------------------- | --------------------------------------------------------------------------- |
|  +6.1% |  +127 | 36.8% → 36.7% | 2,079 → 2,206 | `execute`                   | `org.codenarc.CodeNarc`                                                     |
|  +6.1% |  +127 | 37.1% → 37.0% | 2,093 → 2,220 | `main`                      | `org.codenarc.CodeNarc`                                                     |
|  +6.1% |  +126 | 36.6% → 36.5% | 2,063 → 2,189 | `execute`                   | `org.codenarc.CodeNarcRunner`                                               |
| +14.3% |  +126 | 15.6% → 16.8% |   881 → 1,007 | `applyTo`                   | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +5.8% |  +112 | 34.0% → 33.8% | 1,920 → 2,032 | `processFile`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +5.6% |  +108 | 34.2% → 33.9% | 1,928 → 2,036 | `doCall`                    | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|  +5.6% |  +108 | 34.2% → 33.9% | 1,928 → 2,036 | `processDirectory`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +5.6% |  +108 | 34.2% → 33.9% | 1,929 → 2,037 | `analyze`                   | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|  +9.8% |  +107 | 19.4% → 20.0% | 1,095 → 1,202 | `applyTo`                   | `org.codenarc.rule.AbstractRule`                                            |
|  +5.5% |  +106 | 33.9% → 33.7% | 1,915 → 2,021 | `collectViolations`         | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +8.0% |   +97 | 21.6% → 21.9% | 1,219 → 1,316 | `doCall`                    | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|  +5.3% |   +84 | 28.0% → 27.7% | 1,578 → 1,662 | `measureRuleProcessingTime` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|  +9.9% |   +83 | 14.8% → 15.3% |     838 → 921 | `visitClass`                | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +10.7% |   +69 | 11.4% → 11.9% |     645 → 714 | `visitMethod`               | `org.codenarc.rule.AbstractAstVisitor`                                      |
| +38.0% |   +19 |   0.9% → 1.1% |       50 → 69 | `getAstVisitor`             | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
|  +6.9% |   +16 |          4.1% |     233 → 249 | `isRuleSuppressed`          | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  +6.1% |   +14 |   4.1% → 4.0% |     229 → 243 | `init`                      | `org.codenarc.source.AbstractSourceCode`                                    |
|  +6.0% |   +14 |          4.1% |     233 → 247 | `getAst`                    | `org.codenarc.source.AbstractSourceCode`                                    |
|  +6.1% |   +14 |   4.1% → 4.0% |     229 → 243 | `init`                      | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
| +30.2% |   +13 |   0.8% → 0.9% |       43 → 56 | `loadRuleSetFile`           | `org.codenarc.ruleset.RuleSetUtil`                                          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |            % |   Samples | Function                                    | Location    |
| -----: | ----: | -----------: | --------: | ------------------------------------------- | ----------- |
| -33.3% |   -12 |  0.6% → 0.4% |   36 → 24 | `NodeHash::hash_find_insert`                | `<unknown>` |
| -15.7% |   -11 |  1.2% → 1.0% |   70 → 59 | `LinearScan::allocate_registers`            | `<unknown>` |
| -11.1% |   -10 |  1.6% → 1.3% |   90 → 80 | `ciEnv::register_method`                    | `<unknown>` |
| -30.3% |   -10 |  0.6% → 0.4% |   33 → 23 | `PhiNode::Ideal`                            | `<unknown>` |
| -24.4% |   -10 |  0.7% → 0.5% |   41 → 31 | `Matcher::Label_Root`                       | `<unknown>` |
| -18.9% |   -10 |  0.9% → 0.7% |   53 → 43 | `LinearScanWalker::activate_current`        | `<unknown>` |
| -20.0% |    -9 |  0.8% → 0.6% |   45 → 36 | `LIR_Assembler::add_call_info`              | `<unknown>` |
| -26.5% |    -9 |  0.6% → 0.4% |   34 → 25 | `LIR_Assembler::emit_slow_case_stubs`       | `<unknown>` |
| -26.5% |    -9 |  0.6% → 0.4% |   34 → 25 | `Compilation::emit_code_epilog`             | `<unknown>` |
| -56.3% |    -9 |  0.3% → 0.1% |    16 → 7 | `ConnectionGraph::add_java_object_edges`    | `<unknown>` |
|  -4.7% |    -8 |  3.0% → 2.7% | 170 → 162 | `LinearScan::do_linear_scan`                | `<unknown>` |
| -20.5% |    -8 |  0.7% → 0.5% |   39 → 31 | `LinearScanWalker::alloc_free_reg`          | `<unknown>` |
|  -3.0% |    -7 |  4.1% → 3.7% | 231 → 224 | `Compilation::emit_lir`                     | `<unknown>` |
| -36.8% |    -7 |  0.3% → 0.2% |   19 → 12 | `RegionNode::is_unreachable_region`         | `<unknown>` |
|  -6.6% |    -7 |  1.9% → 1.6% |  106 → 99 | `PhaseIdealLoop::build_loop_late_post_work` | `<unknown>` |
| -46.7% |    -7 |  0.3% → 0.1% |    15 → 8 | `RegionNode::is_unreachable_from_root`      | `<unknown>` |
| -63.6% |    -7 |  0.2% → 0.1% |    11 → 4 | `ProjNode::is_CFG`                          | `<unknown>` |
|  -3.1% |    -6 |  3.4% → 3.1% | 192 → 186 | `PhaseChaitin::Split`                       | `<unknown>` |
| -42.9% |    -6 |  0.2% → 0.1% |    14 → 8 | `MachNode::ideal_reg`                       | `<unknown>` |
| -66.7% |    -6 | 0.2% → <0.1% |     9 → 3 | `Node::disconnect_inputs`                   | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                                                | Location    |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -64.5% |   -20 |  0.5% → 0.2% |   31 → 11 | `G1ParEvacuateFollowersClosure::do_void`                                                                                                                                                | `<unknown>` |
|  -64.5% |   -20 |  0.5% → 0.2% |   31 → 11 | `G1EvacuateRegionsTask::evacuate_live_objects`                                                                                                                                          | `<unknown>` |
|  -40.5% |   -17 |  0.7% → 0.4% |   42 → 25 | `CodeEmitInfo::record_debug_info`                                                                                                                                                       | `<unknown>` |
|  -56.7% |   -17 |  0.5% → 0.2% |   30 → 13 | `MemAllocator::allocate`                                                                                                                                                                | `<unknown>` |
|  -85.0% |   -17 | 0.4% → <0.1% |    20 → 3 | `G1ParScanThreadState::steal_and_trim_queue`                                                                                                                                            | `<unknown>` |
|  -48.5% |   -16 |  0.6% → 0.3% |   33 → 17 | `frame::sender_for_compiled_frame`                                                                                                                                                      | `<unknown>` |
|  -27.8% |   -15 |  1.0% → 0.6% |   54 → 39 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                                                       | `<unknown>` |
|  -21.1% |   -15 |  1.3% → 0.9% |   71 → 56 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                                         | `<unknown>` |
|  -38.2% |   -13 |  0.6% → 0.3% |   34 → 21 | `CollectedHeap::array_allocate`                                                                                                                                                         | `<unknown>` |
|   -7.2% |   -13 |  3.2% → 2.8% | 180 → 167 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                                                              | `<unknown>` |
|  -10.9% |   -12 |  1.9% → 1.6% |  110 → 98 | `G1EvacuateRegionsBaseTask::work`                                                                                                                                                       | `<unknown>` |
|  -32.4% |   -12 |  0.7% → 0.4% |   37 → 25 | `IRScopeDebugInfo::record_debug_info`                                                                                                                                                   | `<unknown>` |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `G1ScanAndCountCodeBlobClosure::do_code_blob`                                                                                                                                           | `<unknown>` |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `void ConcurrentHashTable<G1CodeRootSetHashTableConfig, (MEMFLAGS)5>::ScanTask::do_safepoint_scan<G1CodeRootSetHashTable::iterate_at_safepoint(CodeBlobClosure*)::'lambda'(nmethod**)>` | `<unknown>` |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `G1CodeRootSet::nmethods_do`                                                                                                                                                            | `<unknown>` |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `G1ScanCodeRootsClosure::do_heap_region`                                                                                                                                                | `<unknown>` |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `G1CollectedHeap::par_iterate_regions_array`                                                                                                                                            | `<unknown>` |
|  -50.0% |   -12 |  0.4% → 0.2% |   24 → 12 | `G1RemSet::scan_collection_set_code_roots`                                                                                                                                              | `<unknown>` |
|  -52.2% |   -12 |  0.4% → 0.2% |   23 → 11 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                                                            | `<unknown>` |
| removed |   -11 |  0.2% → 0.0% |    11 → 0 | `KlassCleaningTask::work`                                                                                                                                                               | `<unknown>` |

##### Standard library

|  Change |  Delta |            % |   Samples | Function          | Location                                             |
| ------: | -----: | -----------: | --------: | ----------------- | ---------------------------------------------------- |
| removed | -2,091 | 37.0% → 0.0% | 2,091 → 0 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
| removed | -2,090 | 37.0% → 0.0% | 2,090 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000a8010aac00`  |
| removed | -2,090 | 37.0% → 0.0% | 2,090 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`  |
| removed | -2,089 | 37.0% → 0.0% | 2,089 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa000`  |
| removed | -2,088 | 37.0% → 0.0% | 2,088 → 0 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800`  |
| removed | -2,079 | 36.8% → 0.0% | 2,079 → 0 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400` |
| removed | -2,079 | 36.8% → 0.0% | 2,079 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7000`  |
| removed | -2,079 | 36.8% → 0.0% | 2,079 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a80108e000`  |
| removed | -2,079 | 36.8% → 0.0% | 2,079 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`  |
| removed | -2,068 | 36.6% → 0.0% | 2,068 → 0 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x000000a801099c00`  |
| removed | -2,067 | 36.6% → 0.0% | 2,067 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000a80109a000`  |
| removed | -2,066 | 36.6% → 0.0% | 2,066 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000a801098400`  |
| removed | -2,064 | 36.6% → 0.0% | 2,064 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a80102b000`  |
| removed | -2,064 | 36.6% → 0.0% | 2,064 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`  |
| removed | -2,057 | 36.4% → 0.0% | 2,057 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`  |
| removed | -2,022 | 35.8% → 0.0% | 2,022 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010d3800`  |
| removed | -2,022 | 35.8% → 0.0% | 2,022 → 0 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x000000a801095000` |
| removed | -1,990 | 35.3% → 0.0% | 1,990 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2400`  |
| removed | -1,987 | 35.2% → 0.0% | 1,987 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2c00`  |
| removed | -1,987 | 35.2% → 0.0% | 1,987 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000a801189000`  |

##### Ours

| Change | Delta |           % | Samples | Function                                | Location                                                                                     |
| -----: | ----: | ----------: | ------: | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| -18.6% |   -13 | 1.2% → 0.9% | 70 → 57 | `super$3$applyTo`                       | `org.codenarc.rule.formatting.IndentationRule`                                               |
| -18.6% |   -13 | 1.2% → 0.9% | 70 → 57 | `applyTo`                               | `org.codenarc.rule.formatting.IndentationRule`                                               |
| -68.4% |   -13 | 0.3% → 0.1% |  19 → 6 | `super$2$visitMethodCallExpression`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -17.1% |   -12 | 1.2% → 1.0% | 70 → 58 | `applyTo`                               | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
| -54.5% |   -12 | 0.4% → 0.2% | 22 → 10 | `checkStatementIndent`                  | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
| -36.4% |   -12 | 0.6% → 0.3% | 33 → 21 | `doCall`                                | `org.codenarc.rule.formatting.IndentationAstVisitor$_visitBlockStatement_closure7`           |
| -50.0% |   -11 | 0.4% → 0.2% | 22 → 11 | `visitVariableExpression`               | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -50.0% |   -10 | 0.4% → 0.2% | 20 → 10 | `getNonStaticImportsSortedByLineNumber` | `org.codenarc.util.ImportUtil`                                                               |
| -41.7% |   -10 | 0.4% → 0.2% | 24 → 14 | `processSourceLine`                     | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
| -43.5% |   -10 | 0.4% → 0.2% | 23 → 13 | `visitMethodCallExpression`             | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                                     |
| -17.3% |    -9 | 0.9% → 0.7% | 52 → 43 | `applyVisitor`                          | `org.codenarc.rule.AbstractSharedAstVisitorRule`                                             |
| -36.4% |    -8 | 0.4% → 0.2% | 22 → 14 | `super$3$visitBlockStatement`           | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                          |
| -53.3% |    -8 | 0.3% → 0.1% |  15 → 7 | `visitClassEx`                          | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
| -50.0% |    -8 | 0.3% → 0.1% |  16 → 8 | `sourceLineAndNumberForImport`          | `org.codenarc.util.ImportUtil`                                                               |
| -17.4% |    -8 | 0.8% → 0.6% | 46 → 38 | `visitBlockStatement`                   | `org.codenarc.rule.formatting.IndentationAstVisitor`                                         |
| -32.0% |    -8 | 0.4% → 0.3% | 25 → 17 | `doCall`                                | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor$_visitClassComplete_closure1` |
| -30.8% |    -8 | 0.5% → 0.3% | 26 → 18 | `visitClassComplete`                    | `org.codenarc.rule.formatting.SpaceInsideParenthesesAstVisitor`                              |
| -57.1% |    -8 | 0.2% → 0.1% |  14 → 6 | `visitClassEx`                          | `org.codenarc.rule.naming.ConfusingMethodNameAstVisitor`                                     |
| -43.8% |    -7 | 0.3% → 0.1% |  16 → 9 | `doCall`                                | `org.codenarc.util.ImportUtil$_sortImportsByLineNumber_closure4`                             |
| -41.2% |    -7 | 0.3% → 0.2% | 17 → 10 | `sortImportsByLineNumber`               | `org.codenarc.util.ImportUtil`                                                               |
