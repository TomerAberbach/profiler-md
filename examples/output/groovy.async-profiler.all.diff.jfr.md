# Sampling profile diff

Collected 6,350 samples → 6,320 samples (-30 samples, -0.5%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Compiler          |  +0.7% |   +18 | 41.1% → 41.6% | 2,613 → 2,631 |
| Native            |  -3.2% |   -68 | 33.1% → 32.2% | 2,101 → 2,033 |
| Standard library  |  +3.9% |   +57 | 23.2% → 24.2% | 1,474 → 1,531 |
| Ours              | -27.8% |   -25 |   1.4% → 1.0% |       90 → 65 |
| JIT               | -18.8% |   -13 |   1.1% → 0.9% |       69 → 56 |
| Garbage collector | +33.3% |    +1 |  <0.1% → 0.1% |         3 → 4 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                                                                                       | Location                                                  |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| +106.7% |   +16 |  0.2% → 0.5% |   15 → 31 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`      |
|  +15.2% |   +15 |  1.6% → 1.8% |  99 → 114 | `cast(Object)`                                                                                 | `java.lang.Class`                                         |
| +100.0% |   +14 |  0.2% → 0.4% |   14 → 28 | `ScopeDesc::decode_body`                                                                       | `libjvm.dylib`                                            |
| +185.7% |   +13 |  0.1% → 0.3% |    7 → 20 | `PhaseIFG::SquareUp`                                                                           | `libjvm.dylib`                                            |
| +275.0% |   +11 |  0.1% → 0.2% |    4 → 15 | `PcDescContainer::find_pc_desc_internal`                                                       | `libjvm.dylib`                                            |
|   +9.2% |   +10 |  1.7% → 1.9% | 109 → 119 | `pthread_jit_write_protect_np`                                                                 | `libsystem_pthread.dylib`                                 |
| +333.3% |   +10 | <0.1% → 0.2% |    3 → 13 | `PhaseIterGVN::remove_globally_dead_node`                                                      | `libjvm.dylib`                                            |
| +300.0% |    +9 | <0.1% → 0.2% |    3 → 12 | `TypeNode::bottom_type`                                                                        | `libjvm.dylib`                                            |
| +800.0% |    +8 | <0.1% → 0.1% |     1 → 9 | `setGuards(Object)`                                                                            | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
|  +27.6% |    +8 |  0.5% → 0.6% |   29 → 37 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`                                            |
| +800.0% |    +8 | <0.1% → 0.1% |     1 → 9 | `coerceArgumentsToClasses(Object[])`                                                           | `org.codehaus.groovy.reflection.ParameterTypes`           |
| +160.0% |    +8 |  0.1% → 0.2% |    5 → 13 | `CompiledMethod::cleanup_inline_caches_impl`                                                   | `libjvm.dylib`                                            |
| +100.0% |    +8 |  0.1% → 0.3% |    8 → 16 | `LinearScanWalker::free_collect_inactive_fixed`                                                | `libjvm.dylib`                                            |
| +175.0% |    +7 |  0.1% → 0.2% |    4 → 11 | `getMethods(Class, String)`                                                                    | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
| +116.7% |    +7 |  0.1% → 0.2% |    6 → 13 | `G1ConcurrentMark::mark_in_bitmap`                                                             | `libjvm.dylib`                                            |
| +350.0% |    +7 | <0.1% → 0.1% |     2 → 9 | `ConnectionGraph::find_inst_mem`                                                               | `libjvm.dylib`                                            |
|  +50.0% |    +7 |  0.2% → 0.3% |   14 → 21 | `PhaseIdealLoop::build_loop_tree`                                                              | `libjvm.dylib`                                            |
|  +58.3% |    +7 |  0.2% → 0.3% |   12 → 19 | `PhaseIterGVN::add_users_to_worklist`                                                          | `libjvm.dylib`                                            |
|   +9.2% |    +7 |  1.2% → 1.3% |   76 → 83 | `Arena::contains`                                                                              | `libjvm.dylib`                                            |
|  +50.0% |    +7 |  0.2% → 0.3% |   14 → 21 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                           | `libjvm.dylib`                                            |

##### Compiler

|  Change | Delta |            % | Samples | Function                                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | -------------- |
| +185.7% |   +13 |  0.1% → 0.3% |  7 → 20 | `PhaseIFG::SquareUp`                                  | `libjvm.dylib` |
| +333.3% |   +10 | <0.1% → 0.2% |  3 → 13 | `PhaseIterGVN::remove_globally_dead_node`             | `libjvm.dylib` |
| +300.0% |    +9 | <0.1% → 0.2% |  3 → 12 | `TypeNode::bottom_type`                               | `libjvm.dylib` |
| +100.0% |    +8 |  0.1% → 0.3% |  8 → 16 | `LinearScanWalker::free_collect_inactive_fixed`       | `libjvm.dylib` |
| +350.0% |    +7 | <0.1% → 0.1% |   2 → 9 | `ConnectionGraph::find_inst_mem`                      | `libjvm.dylib` |
|  +50.0% |    +7 |  0.2% → 0.3% | 14 → 21 | `PhaseIdealLoop::build_loop_tree`                     | `libjvm.dylib` |
|  +58.3% |    +7 |  0.2% → 0.3% | 12 → 19 | `PhaseIterGVN::add_users_to_worklist`                 | `libjvm.dylib` |
|  +50.0% |    +7 |  0.2% → 0.3% | 14 → 21 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`  | `libjvm.dylib` |
| +233.3% |    +7 | <0.1% → 0.2% |  3 → 10 | `MethodLiveness::BasicBlock::compute_gen_kill_single` | `libjvm.dylib` |
|  +75.0% |    +6 |  0.1% → 0.2% |  8 → 14 | `Node::is_CFG`                                        | `libjvm.dylib` |
|  +66.7% |    +6 |  0.1% → 0.2% |  9 → 15 | `Node::clone`                                         | `libjvm.dylib` |
|  +54.5% |    +6 |  0.2% → 0.3% | 11 → 17 | `PhaseOutput::BuildOopMaps`                           | `libjvm.dylib` |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `NTarjan::DFS`                                        | `libjvm.dylib` |
| +150.0% |    +6 |  0.1% → 0.2% |  4 → 10 | `RegionNode::is_unreachable_from_root`                | `libjvm.dylib` |
|  +37.5% |    +6 |         0.3% | 16 → 22 | `IntervalWalker::walk_to`                             | `libjvm.dylib` |
|  +45.5% |    +5 |  0.2% → 0.3% | 11 → 16 | `PhaseChaitin::build_ifg_virtual`                     | `libjvm.dylib` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `Node::out_grow`                                      | `libjvm.dylib` |
| +100.0% |    +5 |  0.1% → 0.2% |  5 → 10 | `IndexSet::alloc_block_containing`                    | `libjvm.dylib` |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `MergeMemNode::set_base_memory`                       | `libjvm.dylib` |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `PhiNode::Identity`                                   | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                       | Location                   |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------- | -------------------------- |
| +100.0% |   +14 |  0.2% → 0.4% |   14 → 28 | `ScopeDesc::decode_body`                                                                       | `libjvm.dylib`             |
| +275.0% |   +11 |  0.1% → 0.2% |    4 → 15 | `PcDescContainer::find_pc_desc_internal`                                                       | `libjvm.dylib`             |
|   +9.2% |   +10 |  1.7% → 1.9% | 109 → 119 | `pthread_jit_write_protect_np`                                                                 | `libsystem_pthread.dylib`  |
|  +27.6% |    +8 |  0.5% → 0.6% |   29 → 37 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| +160.0% |    +8 |  0.1% → 0.2% |    5 → 13 | `CompiledMethod::cleanup_inline_caches_impl`                                                   | `libjvm.dylib`             |
| +116.7% |    +7 |  0.1% → 0.2% |    6 → 13 | `G1ConcurrentMark::mark_in_bitmap`                                                             | `libjvm.dylib`             |
|   +9.2% |    +7 |  1.2% → 1.3% |   76 → 83 | `Arena::contains`                                                                              | `libjvm.dylib`             |
|  +87.5% |    +7 |  0.1% → 0.2% |    8 → 15 | `semaphore_wait_trap`                                                                          | `libsystem_kernel.dylib`   |
|  +11.5% |    +6 |  0.8% → 0.9% |   52 → 58 | `_platform_memmove`                                                                            | `libsystem_platform.dylib` |
| +300.0% |    +6 | <0.1% → 0.1% |     2 → 8 | `frame::interpreter_frame_method`                                                              | `libjvm.dylib`             |
|  +50.0% |    +6 |  0.2% → 0.3% |   12 → 18 | `Dict::Insert`                                                                                 | `libjvm.dylib`             |
|  +54.5% |    +6 |  0.2% → 0.3% |   11 → 17 | `posix_madvise`                                                                                | `libsystem_kernel.dylib`   |
|  +60.0% |    +6 |  0.2% → 0.3% |   10 → 16 | `nmethodBucket::next_not_unloading`                                                            | `libjvm.dylib`             |
| +125.0% |    +5 |         0.1% |     4 → 9 | `vframe::new_vframe`                                                                           | `libjvm.dylib`             |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `Method::jmethod_id`                                                                           | `libjvm.dylib`             |
| +250.0% |    +5 | <0.1% → 0.1% |     2 → 7 | `Interval::add_use_pos`                                                                        | `libjvm.dylib`             |
|     new |    +5 |  0.0% → 0.1% |     0 → 5 | `__gettimeofday`                                                                               | `libsystem_kernel.dylib`   |
| +200.0% |    +4 | <0.1% → 0.1% |     2 → 6 | `vframe::java_sender`                                                                          | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |     0 → 4 | `JvmtiVMObjectAllocEventCollector::~JvmtiVMObjectAllocEventCollector`                          | `libjvm.dylib`             |
|  +60.0% |    +3 |         0.1% |     5 → 8 | `arrayof_oop_disjoint_arraycopy`                                                               | `<unknown>`                |

##### Standard library

|  Change | Delta |            % |  Samples | Function                                                                                    | Location                                                  |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| +106.7% |   +16 |  0.2% → 0.5% |  15 → 31 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`      |
|  +15.2% |   +15 |  1.6% → 1.8% | 99 → 114 | `cast(Object)`                                                                              | `java.lang.Class`                                         |
| +800.0% |    +8 | <0.1% → 0.1% |    1 → 9 | `setGuards(Object)`                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +800.0% |    +8 | <0.1% → 0.1% |    1 → 9 | `coerceArgumentsToClasses(Object[])`                                                        | `org.codehaus.groovy.reflection.ParameterTypes`           |
| +175.0% |    +7 |  0.1% → 0.2% |   4 → 11 | `getMethods(Class, String)`                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
| +200.0% |    +6 | <0.1% → 0.1% |    3 → 9 | `resize()`                                                                                  | `java.util.HashMap`                                       |
| +100.0% |    +6 |  0.1% → 0.2% |   6 → 12 | `add(ATNConfig, PredictionContextCache)`                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`          |
| +150.0% |    +6 |  0.1% → 0.2% |   4 → 10 | `equals(Object[], Object[])`                                                                | `java.util.Arrays`                                        |
|  +42.9% |    +6 |  0.2% → 0.3% |  14 → 20 | `getNode(Object)`                                                                           | `java.util.HashMap`                                       |
| +600.0% |    +6 | <0.1% → 0.1% |    1 → 7 | `invokeStatic(Object, Object, int)`                                                         | `java.lang.invoke.DirectMethodHandle$Holder`              |
| +600.0% |    +6 | <0.1% → 0.1% |    1 → 7 | `sameClasses(Class[], Object[], boolean)`                                                   | `org.codehaus.groovy.runtime.MetaClassHelper`             |
|  +23.8% |    +5 |  0.3% → 0.4% |  21 → 26 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`              |
|  +27.8% |    +5 |  0.3% → 0.4% |  18 → 23 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`              |
|  +66.7% |    +4 |  0.1% → 0.2% |   6 → 10 | `getAndPut(String, MemoizeCache$ValueProvider)`                                             | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
| +400.0% |    +4 | <0.1% → 0.1% |    1 → 5 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109a400`       |
|     new |    +4 |  0.0% → 0.1% |    0 → 4 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010aa400`       |
|  +80.0% |    +4 |         0.1% |    5 → 9 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`                  |
| +133.3% |    +4 | <0.1% → 0.1% |    3 → 7 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                         | `java.lang.invoke.MethodHandleImpl`                       |
|  +15.4% |    +4 |  0.4% → 0.5% |  26 → 30 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`       |
| +133.3% |    +4 | <0.1% → 0.1% |    3 → 7 | `afterNodeAccess(HashMap$Node)`                                                             | `java.util.LinkedHashMap`                                 |

##### Ours

|  Change | Delta |            % | Samples | Function                                                  | Location                                                                                          |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `isFirstVisit(Object)`                                    | `org.codenarc.rule.AbstractAstVisitor`                                                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.AbstractAstVisitorRule`                                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                          | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `$getStaticMetaClass()`                                   | `org.codenarc.rule.convention.FieldTypeRequiredAstVisitor`                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `$getStaticMetaClass()`                                   | `org.codenarc.rule.unnecessary.UnnecessaryBooleanExpressionAstVisitor`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlockStatement(BlockStatement)`                     | `org.codenarc.rule.basic.DeadCodeAstVisitor`                                                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitDeclarationExpression(DeclarationExpression)`       | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                               |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(Metric, MetricLevel, Collection, Integer)`        | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyTo(SourceCode, List)`                               | `org.codenarc.rule.imports.ImportFromSamePackageRule`                                             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `addViolationIfDuplicate(Expression, boolean)`            | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                                                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitBinaryExpression(BinaryExpression)`         | `org.codenarc.rule.design.InstanceofAstVisitor`                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doCall(Object)`                                          | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor$_processMethodOrConstructorCall_closure3` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBlockStatement(BlockStatement)`                     | `org.codenarc.rule.unnecessary.UnnecessaryObjectReferencesAstVisitor`                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.FieldReferenceAstVisitor`                                                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`                 | `org.codenarc.rule.unnecessary.AddEmptyStringAstVisitor`                                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `codeReturnsBoolean(Statement)`                           | `org.codenarc.rule.design.BooleanMethodReturnsNullAstVisitor`                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `violationMessage(String, String, String)`                | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                                | `org.codenarc.rule.design.BooleanReturnTracker`                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getMetaClass()`                                          | `org.codenarc.ruleset.XmlReaderRuleSet`                                                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                                | `org.codenarc.rule.formatting.SpaceAroundMapEntryColonAstVisitor`                                 |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
| +200.0% |    +6 | <0.1% → 0.1% |   3 → 9 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `I2C/C2I adapters(0xba)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

| Change | Delta |            % |   Samples | Function                                                                                                                                                 | Location                                            |
| -----: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| -35.4% |   -23 |  1.0% → 0.7% |   65 → 42 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`                            |
| -25.6% |   -22 |  1.4% → 1.0% |   86 → 64 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                                      |
| -33.3% |   -21 |  1.0% → 0.7% |   63 → 42 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                                      |
| -16.0% |   -20 |  2.0% → 1.7% | 125 → 105 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                                      |
| -26.7% |   -16 |  0.9% → 0.7% |   60 → 44 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`                            |
| -25.4% |   -15 |  0.9% → 0.7% |   59 → 44 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                      |
| -10.7% |   -13 |  1.9% → 1.7% | 121 → 108 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                     |
| -30.0% |   -12 |  0.6% → 0.4% |   40 → 28 | `collector(Object, Object)`                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801031800` |
| -27.9% |   -12 |  0.7% → 0.5% |   43 → 31 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`                                      |
| -73.3% |   -11 |  0.2% → 0.1% |    15 → 4 | `I2C/C2I adapters(0xbb)`                                                                                                                                 | `<unknown>`                                         |
| -31.4% |   -11 |  0.6% → 0.4% |   35 → 24 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib`                          |
| -30.6% |   -11 |  0.6% → 0.4% |   36 → 25 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`                                      |
| -22.7% |   -10 |  0.7% → 0.5% |   44 → 34 | `invokeBasic(Object[])`                                                                                                                                  | `java.lang.invoke.MethodHandle`                     |
| -11.9% |   -10 |  1.3% → 1.2% |   84 → 74 | `RegisterMap::RegisterMap`                                                                                                                               | `libjvm.dylib`                                      |
| -58.8% |   -10 |  0.3% → 0.1% |    17 → 7 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                                                                                                            | `libjvm.dylib`                                      |
| -34.6% |    -9 |  0.4% → 0.3% |   26 → 17 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`                                      |
| -81.8% |    -9 | 0.2% → <0.1% |    11 → 2 | `DebugInformationRecorder::serialize_scope_values`                                                                                                       | `libjvm.dylib`                                      |
| -31.0% |    -9 |  0.5% → 0.3% |   29 → 20 | `NodeHash::hash_find_insert`                                                                                                                             | `libjvm.dylib`                                      |
| -40.0% |    -8 |  0.3% → 0.2% |   20 → 12 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`                                 |
|  -7.2% |    -8 |  1.7% → 1.6% | 111 → 103 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`                                      |

##### Compiler

| Change | Delta |            % |   Samples | Function                                           | Location       |
| -----: | ----: | -----------: | --------: | -------------------------------------------------- | -------------- |
| -25.6% |   -22 |  1.4% → 1.0% |   86 → 64 | `IndexSetIterator::advance_and_next`               | `libjvm.dylib` |
| -33.3% |   -21 |  1.0% → 0.7% |   63 → 42 | `PhaseChaitin::build_ifg_physical`                 | `libjvm.dylib` |
| -16.0% |   -20 |  2.0% → 1.7% | 125 → 105 | `PhaseChaitin::Split`                              | `libjvm.dylib` |
| -30.6% |   -11 |  0.6% → 0.4% |   36 → 25 | `PhaseIdealLoop::build_loop_late`                  | `libjvm.dylib` |
| -58.8% |   -10 |  0.3% → 0.1% |    17 → 7 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`      | `libjvm.dylib` |
| -34.6% |    -9 |  0.4% → 0.3% |   26 → 17 | `PhaseIdealLoop::Dominators`                       | `libjvm.dylib` |
| -81.8% |    -9 | 0.2% → <0.1% |    11 → 2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| -31.0% |    -9 |  0.5% → 0.3% |   29 → 20 | `NodeHash::hash_find_insert`                       | `libjvm.dylib` |
|  -7.2% |    -8 |  1.7% → 1.6% | 111 → 103 | `Node::dominates`                                  | `libjvm.dylib` |
| -36.4% |    -8 |  0.3% → 0.2% |   22 → 14 | `PhaseLive::add_liveout`                           | `libjvm.dylib` |
| -38.1% |    -8 |  0.3% → 0.2% |   21 → 13 | `MultiNode::is_CFG`                                | `libjvm.dylib` |
| -53.8% |    -7 |  0.2% → 0.1% |    13 → 6 | `PhaseIFG::effective_degree`                       | `libjvm.dylib` |
| -43.8% |    -7 |  0.3% → 0.1% |    16 → 9 | `PhaseCFG::schedule_early`                         | `libjvm.dylib` |
| -18.4% |    -7 |  0.6% → 0.5% |   38 → 31 | `PhaseChaitin::gather_lrg_masks`                   | `libjvm.dylib` |
| -15.6% |    -7 |  0.7% → 0.6% |   45 → 38 | `PhaseChaitin::elide_copy`                         | `libjvm.dylib` |
| -50.0% |    -7 |  0.2% → 0.1% |    14 → 7 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| -43.8% |    -7 |  0.3% → 0.1% |    16 → 9 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
| -87.5% |    -7 | 0.1% → <0.1% |     8 → 1 | `PhaseCFG::select`                                 | `libjvm.dylib` |
| -60.0% |    -6 |  0.2% → 0.1% |    10 → 4 | `RelocIterator::set_limits`                        | `libjvm.dylib` |
| -21.4% |    -6 |  0.4% → 0.3% |   28 → 22 | `PhaseLive::compute`                               | `libjvm.dylib` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -35.4% |   -23 |  1.0% → 0.7% |   65 → 42 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  -26.7% |   -16 |  0.9% → 0.7% |   60 → 44 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  -25.4% |   -15 |  0.9% → 0.7% |   59 → 44 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  -10.7% |   -13 |  1.9% → 1.7% | 121 → 108 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  -27.9% |   -12 |  0.7% → 0.5% |   43 → 31 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
|  -31.4% |   -11 |  0.6% → 0.4% |   35 → 24 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  -11.9% |   -10 |  1.3% → 1.2% |   84 → 74 | `RegisterMap::RegisterMap`                                                                                                                               | `libjvm.dylib`             |
|  -40.0% |    -8 |  0.3% → 0.2% |   20 → 12 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
|  -53.8% |    -7 |  0.2% → 0.1% |    13 → 6 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `libjvm.dylib`             |
|  -21.4% |    -6 |  0.4% → 0.3% |   28 → 22 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|   -8.0% |    -6 |  1.2% → 1.1% |   75 → 69 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                               | `libjvm.dylib`             |
| removed |    -6 |  0.1% → 0.0% |     6 → 0 | `Parse::do_one_bytecode`                                                                                                                                 | `libjvm.dylib`             |
|  -66.7% |    -6 | 0.1% → <0.1% |     9 → 3 | `compiledVFrame::sender`                                                                                                                                 | `libjvm.dylib`             |
|  -42.9% |    -6 |  0.2% → 0.1% |    14 → 8 | `CallTraceStorage::put`                                                                                                                                  | `libasyncProfiler.dylib`   |
| removed |    -5 |  0.1% → 0.0% |     5 → 0 | `CallInfo::CallInfo`                                                                                                                                     | `libjvm.dylib`             |
|  -83.3% |    -5 | 0.1% → <0.1% |     6 → 1 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`             |
|  -38.5% |    -5 |  0.2% → 0.1% |    13 → 8 | `_platform_bzero`                                                                                                                                        | `libsystem_platform.dylib` |
|  -29.4% |    -5 |  0.3% → 0.2% |   17 → 12 | `frame::sender_raw`                                                                                                                                      | `libjvm.dylib`             |
| removed |    -5 |  0.1% → 0.0% |     5 → 0 | `__open`                                                                                                                                                 | `libsystem_kernel.dylib`   |
|  -19.2% |    -5 |  0.4% → 0.3% |   26 → 21 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -30.0% |   -12 |  0.6% → 0.4% | 40 → 28 | `collector(Object, Object)`                                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`  |
|  -22.7% |   -10 |  0.7% → 0.5% | 44 → 34 | `invokeBasic(Object[])`                                                                                     | `java.lang.invoke.MethodHandle`                      |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801436800`  |
|  -25.0% |    -6 |  0.4% → 0.3% | 24 → 18 | `<init>(MethodType, LambdaForm)`                                                                            | `java.lang.invoke.MethodHandle`                      |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `checkCanSetAccessible(Class, Class, boolean)`                                                              | `java.lang.reflect.AccessibleObject`                 |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801018800`  |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `computeIfAbsent(Object, Function)`                                                                         | `java.util.concurrent.ConcurrentHashMap`             |
|  -55.6% |    -5 |         0.1% |   9 → 4 | `get()`                                                                                                     | `java.lang.ref.SoftReference`                        |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invokeStatic(Object, Object, int)`                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `filter(Method[], String, Class[], boolean)`                                                                | `java.lang.PublicMethods$MethodList`                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `forEachWithCancel(Spliterator, Sink)`                                                                      | `java.util.stream.ReferencePipeline`                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `cachedLambdaForm(int)`                                                                                     | `java.lang.invoke.MethodTypeForm`                    |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`            |
|  -50.0% |    -4 |         0.1% |   8 → 4 | `isNullConversion(Class, Class, boolean)`                                                                   | `sun.invoke.util.VerifyType`                         |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `equals(Object[], int, int, Object[], int, int)`                                                            | `java.util.Arrays`                                   |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `reinvoke(Object, Object)`                                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `guard(Object, Object)`                                                                                     | `java.lang.invoke.LambdaForm$MH.0x00000008010cb000`  |
|  -75.0% |    -3 | 0.1% → <0.1% |   4 → 1 | `invokeExact_MT(Object, Object, Object)`                                                                    | `java.lang.invoke.Invokers$Holder`                   |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `invoke(Object, Object, Object)`                                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800`  |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `linkToCallSite(Object, Object, Object)`                                                                    | `java.lang.invoke.Invokers$Holder`                   |

##### Ours

|  Change | Delta |            % | Samples | Function                                      | Location                                                                     |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<clinit>()`                                  | `org.codenarc.CodeNarc`                                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `setRuleProperties(Node, Rule)`               | `org.codenarc.ruleset.XmlReaderRuleSet`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `init()`                                      | `org.codenarc.source.AbstractSourceCode`                                     |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `collectViolations(SourceCode, RuleSet)`      | `org.codenarc.analyzer.AbstractSourceAnalyzer`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getName()`                                   | `org.codenarc.rule.formatting.MissingBlankLineAfterImportsRule`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `measureRuleProcessingTime(Rule, Closure)`    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAstVisitor()`                             | `org.codenarc.rule.AbstractAstVisitorRule`                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyTo(SourceCode)`                         | `org.codenarc.rule.AbstractRule`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitClassEx(ClassNode)`                     | `org.codenarc.rule.formatting.BracesForTryCatchFinallyAstVisitor`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getIndentLevelsMap()`                        | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nestingLevelForClass(ClassNode)`             | `org.codenarc.rule.formatting.IndentationAstVisitor`                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `calculate(MethodNode, SourceCode)`           | `org.gmetrics.metric.cyclomatic.CyclomaticComplexityMetric`                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitConstantExpression(ConstantExpression)` | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                 |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `methodReturnsCollection(MethodNode)`         | `org.codenarc.rule.design.ReturnsNullInsteadOfEmptyCollectionRuleAstVisitor` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `visitMethodEx(MethodNode)`                   | `org.codenarc.rule.convention.ImplicitReturnStatementAstVisitor`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `calculateFunctions(Collection)`              | `org.gmetrics.metric.abc.result.AggregateAbcMetricResult`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `applyVisitor(AstVisitor, SourceCode)`        | `org.codenarc.rule.AbstractSharedAstVisitorRule`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `processMethodNode(MethodNode)`               | `org.codenarc.rule.formatting.SpaceAfterOpeningBraceAstVisitor`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `shouldVisitMethod(MethodNode)`               | `org.codenarc.rule.AbstractAstVisitor`                                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getMetaClass()`                              | `org.codenarc.rule.Violation`                                                |

##### JIT

|  Change | Delta |            % | Samples | Function                    | Location    |
| ------: | ----: | -----------: | ------: | --------------------------- | ----------- |
|  -73.3% |   -11 |  0.2% → 0.1% |  15 → 4 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `call_stub`                 | `<unknown>` |
|  -14.3% |    -2 |         0.2% | 14 → 12 | `vtable stub`               | `<unknown>` |
|  -25.0% |    -1 | 0.1% → <0.1% |   4 → 3 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`      | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `zero_blocks`               | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |             % |       Samples | Function                                             | Location       |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | -------------- |
|   +1.9% |   +20 | 16.6% → 17.0% | 1,054 → 1,074 | `Compile::Optimize`                                  | `libjvm.dylib` |
|  +30.8% |   +20 |   1.0% → 1.3% |       65 → 85 | `ConnectionGraph::do_analysis`                       | `libjvm.dylib` |
|  +13.5% |   +20 |   2.3% → 2.7% |     148 → 168 | `LinearScan::do_linear_scan`                         | `libjvm.dylib` |
|  +27.7% |   +18 |   1.0% → 1.3% |       65 → 83 | `ConnectionGraph::compute_escape`                    | `libjvm.dylib` |
|   +8.9% |   +17 |   3.0% → 3.3% |     191 → 208 | `Compile::optimize_loops`                            | `libjvm.dylib` |
|  +27.6% |   +16 |   0.9% → 1.2% |       58 → 74 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
|  +51.9% |   +14 |   0.4% → 0.6% |       27 → 41 | `LinearScanWalker::alloc_free_reg`                   | `libjvm.dylib` |
|  +72.2% |   +13 |   0.3% → 0.5% |       18 → 31 | `PhaseOutput::BuildOopMaps`                          | `libjvm.dylib` |
|   +2.4% |   +12 |   7.8% → 8.0% |     493 → 505 | `PhaseIdealLoop::optimize`                           | `libjvm.dylib` |
|  +85.7% |   +12 |   0.2% → 0.4% |       14 → 26 | `Compile::flatten_alias_type`                        | `libjvm.dylib` |
| +133.3% |   +12 |   0.1% → 0.3% |        9 → 21 | `GraphKit::make_load`                                | `libjvm.dylib` |
| +300.0% |   +12 |   0.1% → 0.3% |        4 → 16 | `LoadNode::make`                                     | `libjvm.dylib` |
| +240.0% |   +12 |   0.1% → 0.3% |        5 → 17 | `MethodLiveness::BasicBlock::get_liveness_at`        | `libjvm.dylib` |
|  +70.6% |   +12 |   0.3% → 0.5% |       17 → 29 | `LinearScan::build_intervals`                        | `libjvm.dylib` |
|  +45.8% |   +11 |   0.4% → 0.6% |       24 → 35 | `ConnectionGraph::find_inst_mem`                     | `libjvm.dylib` |
|  +36.7% |   +11 |   0.5% → 0.6% |       30 → 41 | `PhaseIdealLoop::build_loop_tree`                    | `libjvm.dylib` |
|  +37.9% |   +11 |   0.5% → 0.6% |       29 → 40 | `Compile::find_alias_type`                           | `libjvm.dylib` |
| +275.0% |   +11 |   0.1% → 0.2% |        4 → 15 | `MethodLiveness::BasicBlock::compute_gen_kill_range` | `libjvm.dylib` |
|   +3.0% |   +10 |   5.2% → 5.4% |     333 → 343 | `PhaseIterGVN::transform_old`                        | `libjvm.dylib` |
|  +62.5% |   +10 |   0.3% → 0.4% |       16 → 26 | `LoadNode::Ideal`                                    | `libjvm.dylib` |

##### Native

|  Change | Delta |           % |   Samples | Function                                                                                       | Location                  |
| ------: | ----: | ----------: | --------: | ---------------------------------------------------------------------------------------------- | ------------------------- |
|  +78.9% |   +15 | 0.3% → 0.5% |   19 → 34 | `CodeCacheUnloadingTask::work`                                                                 | `libjvm.dylib`            |
|  +78.9% |   +15 | 0.3% → 0.5% |   19 → 34 | `G1ParallelCleaningTask::work`                                                                 | `libjvm.dylib`            |
|  +21.0% |   +13 | 1.0% → 1.2% |   62 → 75 | `OptoRuntime::new_array_C`                                                                     | `libjvm.dylib`            |
|  +21.0% |   +13 | 1.0% → 1.2% |   62 → 75 | `_new_array_Java`                                                                              | `<unknown>`               |
|  +66.7% |   +12 | 0.3% → 0.5% |   18 → 30 | `Chunk::chop`                                                                                  | `libjvm.dylib`            |
|  +85.7% |   +12 | 0.2% → 0.4% |   14 → 26 | `Chunk::next_chop`                                                                             | `libjvm.dylib`            |
|  +34.4% |   +11 | 0.5% → 0.7% |   32 → 43 | `BacktraceBuilder::push`                                                                       | `libjvm.dylib`            |
|  +73.3% |   +11 | 0.2% → 0.4% |   15 → 26 | `CompiledMethod::cleanup_inline_caches_impl`                                                   | `libjvm.dylib`            |
|  +73.3% |   +11 | 0.2% → 0.4% |   15 → 26 | `CompiledMethod::unload_nmethod_caches`                                                        | `libjvm.dylib`            |
| +137.5% |   +11 | 0.1% → 0.3% |    8 → 19 | `BarrierSetC2::load_at_resolved`                                                               | `libjvm.dylib`            |
| +275.0% |   +11 | 0.1% → 0.2% |    4 → 15 | `PcDescContainer::find_pc_desc_internal`                                                       | `libjvm.dylib`            |
|   +9.2% |   +10 | 1.7% → 1.9% | 109 → 119 | `pthread_jit_write_protect_np`                                                                 | `libsystem_pthread.dylib` |
|  +62.5% |   +10 | 0.3% → 0.4% |   16 → 26 | `BacktraceBuilder::expand`                                                                     | `libjvm.dylib`            |
|  +62.5% |   +10 | 0.3% → 0.4% |   16 → 26 | `nmethod::do_unloading`                                                                        | `libjvm.dylib`            |
|   +3.0% |   +10 | 5.3% → 5.5% | 337 → 347 | `Parse::do_call`                                                                               | `libjvm.dylib`            |
|  +43.5% |   +10 | 0.4% → 0.5% |   23 → 33 | `ScopeDesc::decode_body`                                                                       | `libjvm.dylib`            |
|   +7.6% |    +9 | 1.9% → 2.0% | 119 → 128 | `CollectedHeap::array_allocate`                                                                | `libjvm.dylib`            |
|  +31.0% |    +9 | 0.5% → 0.6% |   29 → 38 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`            |
|  +75.0% |    +9 | 0.2% → 0.3% |   12 → 21 | `BarrierSetC2::load_at`                                                                        | `libjvm.dylib`            |
| +100.0% |    +9 | 0.1% → 0.3% |    9 → 18 | `free_medium`                                                                                  | `libsystem_malloc.dylib`  |

##### Standard library

|     Change |  Delta |             % |     Samples | Function                                         | Location                                            |
| ---------: | -----: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|   +2346.5% | +2,370 |  1.6% → 39.1% | 101 → 2,471 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|   +1494.2% | +2,331 |  2.5% → 39.4% | 156 → 2,487 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400` |
|   +4841.7% | +2,324 |  0.8% → 37.5% |  48 → 2,372 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801188000` |
| +231100.0% | +2,311 | <0.1% → 36.6% |   1 → 2,312 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801282400` |
|   +1215.9% | +2,298 |  3.0% → 39.4% | 189 → 2,487 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00` |
|    +613.6% | +2,080 |  5.3% → 38.3% | 339 → 2,419 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010d3400` |
| +203200.0% | +2,032 | <0.1% → 32.2% |   1 → 2,033 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080159f800` |
|  +18372.7% | +2,021 |  0.2% → 32.2% |  11 → 2,032 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080159fc00` |
|   +5572.2% | +2,006 |  0.6% → 32.3% |  36 → 2,042 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080159cc00` |
|  +11818.8% | +1,891 |  0.3% → 30.2% |  16 → 1,907 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801368400` |
|   +4393.0% | +1,889 |  0.7% → 30.6% |  43 → 1,932 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008011e1800` |
| +186400.0% | +1,864 | <0.1% → 29.5% |   1 → 1,865 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080163ac00` |
| +186400.0% | +1,864 | <0.1% → 29.5% |   1 → 1,865 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080163b400` |
|  +37200.0% | +1,860 |  0.1% → 29.5% |   5 → 1,865 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080163b800` |
| +153000.0% | +1,530 | <0.1% → 24.2% |   1 → 1,531 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008017bdc00` |
|   +1399.1% | +1,483 |  1.7% → 25.1% | 106 → 1,589 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
|  +29520.0% | +1,476 |  0.1% → 23.4% |   5 → 1,481 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d3000` |
|    +523.7% | +1,194 |  3.6% → 22.5% | 228 → 1,422 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801360000` |
|    +411.5% | +1,185 |  4.5% → 23.3% | 288 → 1,473 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801368800` |
|    +154.5% |   +411 |  4.2% → 10.7% |   266 → 677 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080128dc00` |

##### Ours

|  Change | Delta |             % |       Samples | Function                                          | Location                                                                    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------- | --------------------------------------------------------------------------- |
|   +3.1% |   +57 | 28.6% → 29.7% | 1,818 → 1,875 | `measureRuleProcessingTime(Rule, Closure)`        | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   +3.7% |   +52 | 21.9% → 22.8% | 1,390 → 1,442 | `doCall(Object)`                                  | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
|   +2.2% |   +50 | 35.6% → 36.6% | 2,263 → 2,313 | `analyze(RuleSet)`                                | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +2.2% |   +50 | 35.6% → 36.6% | 2,262 → 2,312 | `processDirectory(String, RuleSet)`               | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +2.2% |   +49 | 35.6% → 36.6% | 2,262 → 2,311 | `doCall(Object)`                                  | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   +2.1% |   +48 | 35.4% → 36.4% | 2,251 → 2,299 | `processFile(String, DirectoryResults, RuleSet)`  | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +2.1% |   +48 | 35.3% → 36.2% | 2,241 → 2,289 | `collectViolations(SourceCode, RuleSet)`          | `org.codenarc.analyzer.AbstractSourceAnalyzer`                              |
|   +1.9% |   +47 | 38.2% → 39.1% | 2,423 → 2,470 | `execute()`                                       | `org.codenarc.CodeNarcRunner`                                               |
|   +1.9% |   +46 | 38.7% → 39.6% | 2,455 → 2,501 | `main(String[])`                                  | `org.codenarc.CodeNarc`                                                     |
|   +1.8% |   +45 | 38.5% → 39.4% | 2,442 → 2,487 | `execute(String[])`                               | `org.codenarc.CodeNarc`                                                     |
|   +2.6% |   +32 | 19.7% → 20.3% | 1,248 → 1,280 | `applyTo(SourceCode)`                             | `org.codenarc.rule.AbstractRule`                                            |
|   +6.5% |   +17 |   4.1% → 4.4% |     261 → 278 | `getAst()`                                        | `org.codenarc.source.AbstractSourceCode`                                    |
|   +6.1% |   +16 |   4.1% → 4.4% |     261 → 277 | `init()`                                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|   +5.4% |   +14 |   4.1% → 4.4% |     261 → 275 | `init()`                                          | `org.codenarc.source.AbstractSourceCode`                                    |
|   +4.9% |   +13 |   4.2% → 4.4% |     268 → 281 | `isRuleSuppressed(Rule)`                          | `org.codenarc.analyzer.SuppressionAnalyzer`                                 |
|  +76.5% |   +13 |   0.3% → 0.5% |       17 → 30 | `visitClass(ClassNode)`                           | `org.codenarc.rule.AbstractMethodVisitor`                                   |
|   +1.0% |   +11 | 16.7% → 17.0% | 1,061 → 1,072 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.AbstractAstVisitorRule`                                  |
| +100.0% |   +11 |   0.2% → 0.3% |       11 → 22 | `visitVariableExpression(VariableExpression)`     | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                    |
|  +81.8% |    +9 |   0.2% → 0.3% |       11 → 20 | `applyTo(SourceCode, List)`                       | `org.codenarc.rule.imports.UnusedImportRule`                                |
|  +45.0% |    +9 |   0.3% → 0.5% |       20 → 29 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.dry.DuplicateLiteralAstVisitor`                          |

##### JIT

|  Change | Delta |            % | Samples | Function                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------ | ----------- |
| +200.0% |    +6 | <0.1% → 0.1% |   3 → 9 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `I2C/C2I adapters(0xba)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |       Samples | Function                                   | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
|  -2.3% |   -79 | 54.7% → 53.7% | 3,474 → 3,395 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -4.5% |   -61 | 21.5% → 20.7% | 1,367 → 1,306 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  -1.7% |   -59 | 53.8% → 53.1% | 3,416 → 3,357 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -4.8% |   -37 | 12.1% → 11.6% |     770 → 733 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  -1.3% |   -35 | 43.6% → 43.3% | 2,770 → 2,735 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -1.2% |   -33 | 43.5% → 43.2% | 2,764 → 2,731 | `Compile::Compile`                         | `libjvm.dylib` |
| -17.8% |   -30 |   2.7% → 2.2% |     169 → 139 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| -38.5% |   -30 |   1.2% → 0.8% |       78 → 48 | `BlockList::iterate_forward`               | `libjvm.dylib` |
| -37.3% |   -28 |   1.2% → 0.7% |       75 → 47 | `LIRGenerator::block_do`                   | `libjvm.dylib` |
| -15.8% |   -25 |   2.5% → 2.1% |     158 → 133 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
|  -4.2% |   -24 |   8.9% → 8.6% |     567 → 543 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| -25.6% |   -22 |   1.4% → 1.0% |       86 → 64 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib` |
|  -3.5% |   -22 |   9.9% → 9.6% |     628 → 606 | `Compilation::Compilation`                 | `libjvm.dylib` |
| -33.3% |   -20 |   0.9% → 0.6% |       60 → 40 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
| -35.7% |   -20 |   0.9% → 0.6% |       56 → 36 | `CompileQueue::get`                        | `libjvm.dylib` |
|  -3.0% |   -19 |   9.8% → 9.6% |     625 → 606 | `Compilation::compile_method`              | `libjvm.dylib` |
| -13.8% |   -18 |   2.0% → 1.8% |     130 → 112 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| -34.9% |   -15 |   0.7% → 0.4% |       43 → 28 | `NodeHash::hash_find_insert`               | `libjvm.dylib` |
| -10.4% |   -15 |   2.3% → 2.0% |     144 → 129 | `GraphBuilder::try_inline_full`            | `libjvm.dylib` |
| -35.9% |   -14 |   0.6% → 0.4% |       39 → 25 | `Compile::remove_speculative_types`        | `libjvm.dylib` |

##### Native

| Change | Delta |             % |       Samples | Function                                                                                                                                                 | Location                  |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|  -2.2% |   -78 | 54.7% → 53.8% | 3,476 → 3,398 | `JavaThread::thread_main_inner`                                                                                                                          | `libjvm.dylib`            |
|  -1.9% |   -74 | 60.6% → 59.7% | 3,850 → 3,776 | `_pthread_start`                                                                                                                                         | `libsystem_pthread.dylib` |
|  -1.9% |   -74 | 60.6% → 59.7% | 3,850 → 3,776 | `thread_start`                                                                                                                                           | `libsystem_pthread.dylib` |
|  -1.9% |   -74 | 60.6% → 59.7% | 3,849 → 3,775 | `Thread::call_run`                                                                                                                                       | `libjvm.dylib`            |
|  -1.9% |   -74 | 60.6% → 59.7% | 3,849 → 3,775 | `thread_native_entry`                                                                                                                                    | `libjvm.dylib`            |
| -52.2% |   -24 |   0.7% → 0.3% |       46 → 22 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`            |
| -35.4% |   -23 |   1.0% → 0.7% |       65 → 42 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`  |
| -16.9% |   -23 |   2.1% → 1.8% |     136 → 113 | `vframe::sender`                                                                                                                                         | `libjvm.dylib`            |
| -33.3% |   -22 |   1.0% → 0.7% |       66 → 44 | `_pthread_mutex_firstfit_lock_slow`                                                                                                                      | `libsystem_pthread.dylib` |
| -52.4% |   -22 |   0.7% → 0.3% |       42 → 20 | `Chunk::operator new`                                                                                                                                    | `libjvm.dylib`            |
| -52.6% |   -20 |   0.6% → 0.3% |       38 → 18 | `stale_jmethodID`                                                                                                                                        | `<unknown>`               |
| -17.1% |   -20 |   1.8% → 1.5% |      117 → 97 | `vframe::new_vframe`                                                                                                                                     | `libjvm.dylib`            |
|  -3.2% |   -20 |   9.9% → 9.6% |     628 → 608 | `Compiler::compile_method`                                                                                                                               | `libjvm.dylib`            |
| -75.0% |   -18 |   0.4% → 0.1% |        24 → 6 | `Parse::do_one_bytecode`                                                                                                                                 | `libjvm.dylib`            |
| -24.6% |   -17 |   1.1% → 0.8% |       69 → 52 | `PlatformMonitor::wait`                                                                                                                                  | `libjvm.dylib`            |
| -32.7% |   -17 |   0.8% → 0.6% |       52 → 35 | `Monitor::wait`                                                                                                                                          | `libjvm.dylib`            |
| -26.7% |   -16 |   0.9% → 0.7% |       60 → 44 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`  |
|  -8.1% |   -15 |   2.9% → 2.7% |     186 → 171 | `InstanceKlass::allocate_instance`                                                                                                                       | `libjvm.dylib`            |
| -23.7% |   -14 |   0.9% → 0.7% |       59 → 45 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |
| -15.6% |   -14 |   1.4% → 1.2% |       90 → 76 | `compiledVFrame::compiledVFrame`                                                                                                                         | `libjvm.dylib`            |

##### Standard library

|  Change |  Delta |             % |     Samples | Function                                         | Location                                            |
| ------: | -----: | ------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| -100.0% | -2,335 | 36.8% → <0.1% |   2,336 → 1 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080118b800` |
|  -92.7% | -2,263 |  38.5% → 2.8% | 2,442 → 179 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010c7c00` |
|  -87.6% | -2,125 |  38.2% → 4.8% | 2,426 → 301 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
|  -85.8% | -2,034 |  37.3% → 5.3% | 2,371 → 337 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010dc400` |
|  -99.3% | -1,980 |  31.4% → 0.2% |  1,994 → 14 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801461000` |
|  -99.6% | -1,978 |  31.3% → 0.1% |   1,985 → 7 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801409c00` |
|  -98.8% | -1,962 |  31.3% → 0.4% |  1,985 → 23 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801181c00` |
|  -77.6% | -1,894 |  38.5% → 8.7% | 2,442 → 548 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010c8000` |
|  -99.7% | -1,873 |  29.6% → 0.1% |   1,879 → 6 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080129c400` |
|  -99.1% | -1,840 |  29.2% → 0.3% |  1,856 → 16 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801189c00` |
|  -99.9% | -1,829 | 28.8% → <0.1% |   1,830 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801420000` |
|  -99.9% | -1,829 | 28.8% → <0.1% |   1,830 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008014cf400` |
|  -98.6% | -1,805 |  28.8% → 0.4% |  1,830 → 25 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801530800` |
|  -99.9% | -1,490 | 23.5% → <0.1% |   1,492 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801763000` |
|  -63.8% | -1,444 | 35.6% → 12.9% | 2,262 → 818 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801291000` |
|  -92.4% | -1,414 |  24.1% → 1.9% | 1,531 → 117 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010c8800` |
|  -98.7% | -1,412 |  22.5% → 0.3% |  1,431 → 19 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800` |
|  -97.0% | -1,331 |  21.6% → 0.6% |  1,372 → 41 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801109c00` |
|  -79.6% | -1,131 |  22.4% → 4.6% | 1,421 → 290 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801318400` |
|  -65.0% |   -495 |  12.0% → 4.2% |   762 → 267 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080128b400` |

##### Ours

|  Change | Delta |            % | Samples | Function                                               | Location                                                                                           |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
|  -53.8% |    -7 |  0.2% → 0.1% |  13 → 6 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                                           |
|  -87.5% |    -7 | 0.1% → <0.1% |   8 → 1 | `visitBinaryExpression(BinaryExpression)`              | `org.codenarc.rule.unnecessary.UnnecessarySelfAssignmentAstVisitor`                                |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `hasSingleLambdaArgument(MethodCallExpression)`        | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`                              |
| removed |    -6 |  0.1% → 0.0% |   6 → 0 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.unnecessary.UnnecessaryCallForLastElementAstVisitor`                            |
|  -35.3% |    -6 |  0.3% → 0.2% | 17 → 11 | `doCall(Object)`                                       | `org.codenarc.report.TextReportWriter$_writeFileViolations_closure5`                               |
|   -8.3% |    -5 |         0.9% | 60 → 55 | `getAstVisitor()`                                      | `org.codenarc.rule.AbstractAstVisitorRule`                                                         |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `doCall(Object)`                                       | `org.codenarc.rule.convention.VariableTypeRequiredAstVisitor$_visitDeclarationExpression_closure1` |
|  -23.8% |    -5 |         0.3% | 21 → 16 | `visitConstructorOrMethod(MethodNode, boolean)`        | `org.codenarc.rule.formatting.SpaceAfterCommaAstVisitor`                                           |
|  -31.3% |    -5 |  0.3% → 0.2% | 16 → 11 | `visitExpressionStatement(ExpressionStatement)`        | `org.codenarc.rule.groovyism.UseCollectNestedAstVisitor`                                           |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `escapeSpecialCharacters(String)`                      | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor`                                       |
|  -55.6% |    -5 |         0.1% |   9 → 4 | `visitDeclarationExpression(DeclarationExpression)`    | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                |
|  -41.7% |    -5 |  0.2% → 0.1% |  12 → 7 | `sourceLineAndNumberForImport(SourceCode, ImportNode)` | `org.codenarc.util.ImportUtil`                                                                     |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `getLines()`                                           | `org.codenarc.source.AbstractSourceCode`                                                           |
|  -25.0% |    -5 |  0.3% → 0.2% | 20 → 15 | `visitMethodCallExpression(MethodCallExpression)`      | `org.codenarc.rule.formatting.SpaceAfterMethodCallNameRuleAstVisitor`                              |
|  -83.3% |    -5 | 0.1% → <0.1% |   6 → 1 | `visitPropertyExpression(PropertyExpression)`          | `org.codenarc.rule.FieldReferenceAstVisitor`                                                       |
|  -55.6% |    -5 |         0.1% |   9 → 4 | `markVariableAsReferenced(String, VariableExpression)` | `org.codenarc.rule.unused.UnusedVariableAstVisitor`                                                |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `visitExpressionStatement(ExpressionStatement)`        | `org.codenarc.rule.unnecessary.UnnecessarySetterAstVisitor`                                        |
|  -13.9% |    -5 |  0.6% → 0.5% | 36 → 31 | `doCall(Object)`                                       | `org.codenarc.results.FileResults$_getNumberOfViolationsWithPriority_closure1`                     |
|  -44.4% |    -4 |         0.1% |   9 → 5 | `validateXml(String)`                                  | `org.codenarc.ruleset.XmlReaderRuleSet`                                                            |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `lastSourceLineOrEmpty(ASTNode)`                       | `org.codenarc.rule.formatting.AbstractSpaceAroundBraceAstVisitor`                                  |

##### JIT

|  Change | Delta |            % | Samples | Function                    | Location    |
| ------: | ----: | -----------: | ------: | --------------------------- | ----------- |
|  -73.3% |   -11 |  0.2% → 0.1% |  15 → 4 | `I2C/C2I adapters(0xbb)`    | `<unknown>` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `call_stub`                 | `<unknown>` |
|  -14.3% |    -2 |         0.2% | 14 → 12 | `vtable stub`               | `<unknown>` |
|  -25.0% |    -1 | 0.1% → <0.1% |   4 → 3 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`      | `<unknown>` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `zero_blocks`               | `<unknown>` |

# Allocated heap profile diff

Allocated 12.1 GiB → 11.8 GiB (-282.606 MiB, -2.3%) over 24,688 samples → 24,123 samples (512 KiB per sample).

| Category         | Change |        Delta |             % |               Size |         Samples |
| ---------------- | -----: | -----------: | ------------: | -----------------: | --------------: |
| Standard library |  -2.5% | -308.606 MiB | 99.3% → 99.1% |  12 GiB → 11.7 GiB | 24,511 → 23,894 |
| Ours             | +29.4% |  +25.999 MiB |   0.7% → 0.9% | 88.5 MiB → 114 MiB |       177 → 229 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |                Size |       Samples | Function                                                                                      | Location                                                             |
| ------: | ----------: | -----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|   +8.9% | +47.999 MiB |  4.4% → 4.9% |   541 MiB → 589 MiB | 1,083 → 1,179 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                                |
|   +6.6% | +21.499 MiB |  2.6% → 2.9% |   327 MiB → 348 MiB |     654 → 697 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                            |
|  +20.0% | +20.499 MiB |  0.8% → 1.0% |   102 MiB → 123 MiB |     205 → 246 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`                                  |
|  +25.7% | +17.499 MiB |  0.6% → 0.7% |   68 MiB → 85.5 MiB |     136 → 171 | `listIterator(int)`                                                                           | `java.util.LinkedList`                                               |
|  +47.3% | +12.999 MiB |  0.2% → 0.3% | 27.5 MiB → 40.5 MiB |       55 → 81 | `getAndPut(String, MemoizeCache$ValueProvider)`                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                  |
|  +11.8% | +12.999 MiB |  0.9% → 1.0% |   110 MiB → 123 MiB |     221 → 247 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                                        |
|  +30.5% | +12.499 MiB |  0.3% → 0.4% |   41 MiB → 53.5 MiB |      82 → 107 | `copyOf(int[], int)`                                                                          | `java.util.Arrays`                                                   |
|  +23.5% | +11.999 MiB |  0.4% → 0.5% |     51 MiB → 63 MiB |     102 → 126 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`                  |
|  +24.7% | +10.999 MiB |  0.4% → 0.5% | 44.5 MiB → 55.5 MiB |      89 → 111 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                      |
|  +14.4% |  +9.999 MiB |  0.6% → 0.7% | 69.5 MiB → 79.5 MiB |     139 → 159 | `iterator()`                                                                                  | `java.util.ArrayList`                                                |
|  +16.5% |  +9.499 MiB |  0.5% → 0.6% |   57.5 MiB → 67 MiB |     115 → 134 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                                        |
|   +3.0% |  +8.499 MiB |  2.3% → 2.5% |   288 MiB → 296 MiB |     576 → 593 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`                                  |
|  +33.3% |  +7.999 MiB |  0.2% → 0.3% |     24 MiB → 32 MiB |       48 → 64 | `<init>(int)`                                                                                 | `java.lang.AbstractStringBuilder`                                    |
|  +20.3% |  +7.999 MiB |  0.3% → 0.4% | 39.5 MiB → 47.5 MiB |       79 → 95 | `getCachedContext(PredictionContext)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`                              |
| +200.0% |  +7.999 MiB | <0.1% → 0.1% |      4 MiB → 12 MiB |        8 → 24 | `writeViolation(Writer, Violation, String)`                                                   | `org.codenarc.report.TextReportWriter`                               |
|   +1.2% |  +7.499 MiB |  5.1% → 5.3% |   629 MiB → 637 MiB | 1,259 → 1,274 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                      |
|  +71.4% |  +7.499 MiB |         0.1% |   10.5 MiB → 18 MiB |       21 → 36 | `<init>(String)`                                                                              | `org.codehaus.groovy.runtime.callsite.BooleanReturningMethodInvoker` |
|  +24.5% |  +6.499 MiB |  0.2% → 0.3% |   26.5 MiB → 33 MiB |       53 → 66 | `basicTypesOrd(Class[])`                                                                      | `java.lang.invoke.LambdaForm$BasicType`                              |
| +216.7% |  +6.499 MiB | <0.1% → 0.1% |     3 MiB → 9.5 MiB |        6 → 19 | `<init>()`                                                                                    | `org.codenarc.rule.AbstractAstVisitor`                               |
|   +6.4% |  +5.999 MiB |         0.8% |    94 MiB → 100 MiB |     188 → 200 | `newHashMap(int)`                                                                             | `java.util.HashMap`                                                  |

##### Standard library

| Change |       Delta |           % |                Size |       Samples | Function                                                                                      | Location                                                             |
| -----: | ----------: | ----------: | ------------------: | ------------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  +8.9% | +47.999 MiB | 4.4% → 4.9% |   541 MiB → 589 MiB | 1,083 → 1,179 | `fillInStackTrace(int)`                                                                       | `java.lang.Throwable`                                                |
|  +6.6% | +21.499 MiB | 2.6% → 2.9% |   327 MiB → 348 MiB |     654 → 697 | `newArray(Class, int)`                                                                        | `java.lang.reflect.Array`                                            |
| +20.0% | +20.499 MiB | 0.8% → 1.0% |   102 MiB → 123 MiB |     205 → 246 | `makeGuardWithTest(MethodHandle, MethodHandle, MethodHandle)`                                 | `java.lang.invoke.MethodHandleImpl`                                  |
| +25.7% | +17.499 MiB | 0.6% → 0.7% |   68 MiB → 85.5 MiB |     136 → 171 | `listIterator(int)`                                                                           | `java.util.LinkedList`                                               |
| +47.3% | +12.999 MiB | 0.2% → 0.3% | 27.5 MiB → 40.5 MiB |       55 → 81 | `getAndPut(String, MemoizeCache$ValueProvider)`                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`                  |
| +11.8% | +12.999 MiB | 0.9% → 1.0% |   110 MiB → 123 MiB |     221 → 247 | `toBigInteger(int)`                                                                           | `java.math.MutableBigInteger`                                        |
| +30.5% | +12.499 MiB | 0.3% → 0.4% |   41 MiB → 53.5 MiB |      82 → 107 | `copyOf(int[], int)`                                                                          | `java.util.Arrays`                                                   |
| +23.5% | +11.999 MiB | 0.4% → 0.5% |     51 MiB → 63 MiB |     102 → 126 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`                  |
| +24.7% | +10.999 MiB | 0.4% → 0.5% | 44.5 MiB → 55.5 MiB |      89 → 111 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                      |
| +14.4% |  +9.999 MiB | 0.6% → 0.7% | 69.5 MiB → 79.5 MiB |     139 → 159 | `iterator()`                                                                                  | `java.util.ArrayList`                                                |
| +16.5% |  +9.499 MiB | 0.5% → 0.6% |   57.5 MiB → 67 MiB |     115 → 134 | `divideOneWord(int, MutableBigInteger)`                                                       | `java.math.MutableBigInteger`                                        |
|  +3.0% |  +8.499 MiB | 2.3% → 2.5% |   288 MiB → 296 MiB |     576 → 593 | `lambdaFormEditor(LambdaForm)`                                                                | `java.lang.invoke.LambdaFormEditor`                                  |
| +33.3% |  +7.999 MiB | 0.2% → 0.3% |     24 MiB → 32 MiB |       48 → 64 | `<init>(int)`                                                                                 | `java.lang.AbstractStringBuilder`                                    |
| +20.3% |  +7.999 MiB | 0.3% → 0.4% | 39.5 MiB → 47.5 MiB |       79 → 95 | `getCachedContext(PredictionContext)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ATN`                              |
|  +1.2% |  +7.499 MiB | 5.1% → 5.3% |   629 MiB → 637 MiB | 1,259 → 1,274 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                      |
| +71.4% |  +7.499 MiB |        0.1% |   10.5 MiB → 18 MiB |       21 → 36 | `<init>(String)`                                                                              | `org.codehaus.groovy.runtime.callsite.BooleanReturningMethodInvoker` |
| +24.5% |  +6.499 MiB | 0.2% → 0.3% |   26.5 MiB → 33 MiB |       53 → 66 | `basicTypesOrd(Class[])`                                                                      | `java.lang.invoke.LambdaForm$BasicType`                              |
|  +6.4% |  +5.999 MiB |        0.8% |    94 MiB → 100 MiB |     188 → 200 | `newHashMap(int)`                                                                             | `java.util.HashMap`                                                  |
| +12.1% |  +5.499 MiB |        0.4% |   45.5 MiB → 51 MiB |      91 → 102 | `newNode(int, Object, Object, HashMap$Node)`                                                  | `java.util.LinkedHashMap`                                            |
| +14.5% |  +5.499 MiB | 0.3% → 0.4% |   38 MiB → 43.5 MiB |       76 → 87 | `opWrapSink(int, Sink)`                                                                       | `java.util.stream.ReferencePipeline$3`                               |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change |        Delta |            % |               Size |       Samples | Function                                                                               | Location                                              |
| -----: | -----------: | -----------: | -----------------: | ------------: | -------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| -68.2% | -191.999 MiB |  2.3% → 0.7% | 281 MiB → 89.5 MiB |     563 → 179 | `make(MethodType, LambdaForm, Object)`                                                 | `java.lang.invoke.BoundMethodHandle$Species_L`        |
| -14.9% |  -36.499 MiB |  2.0% → 1.7% |  245 MiB → 209 MiB |     491 → 418 | `newNode(int, Object, Object, HashMap$Node)`                                           | `java.util.HashMap`                                   |
| -11.5% |  -31.499 MiB |  2.2% → 2.0% |  273 MiB → 241 MiB |     546 → 483 | `stream(Spliterator, boolean)`                                                         | `java.util.stream.StreamSupport`                      |
| -19.5% |  -27.999 MiB |  1.2% → 1.0% |  143 MiB → 115 MiB |     287 → 231 | `of(byte, int)`                                                                        | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|  -8.9% |  -21.999 MiB |  2.0% → 1.9% |  247 MiB → 225 MiB |     494 → 450 | `insertParameterTypes(int, Class[])`                                                   | `java.lang.invoke.MethodType`                         |
| -35.6% |  -20.999 MiB |  0.5% → 0.3% |    59 MiB → 38 MiB |      118 → 76 | `builder(long, IntFunction)`                                                           | `java.util.stream.Nodes`                              |
|  -7.4% |  -18.999 MiB |  2.1% → 2.0% |  257 MiB → 238 MiB |     514 → 476 | `of(byte, int, int)`                                                                   | `java.lang.invoke.LambdaFormEditor$TransformKey`      |
|  -4.9% |  -17.999 MiB |  3.0% → 2.9% |  366 MiB → 348 MiB |     733 → 697 | `newInstance(Class, int)`                                                              | `java.lang.reflect.Array`                             |
| -67.3% |  -16.499 MiB |  0.2% → 0.1% |   24.5 MiB → 8 MiB |       49 → 16 | `tuple(Object, Object)`                                                                | `groovy.lang.Tuple`                                   |
| -72.7% |  -15.999 MiB | 0.2% → <0.1% |     22 MiB → 6 MiB |       44 → 12 | `<init>(Object, Object)`                                                               | `groovy.lang.Tuple2`                                  |
|  -7.7% |  -10.999 MiB |  1.2% → 1.1% |  143 MiB → 132 MiB |     287 → 265 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                   | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  -8.3% |  -10.999 MiB |  1.1% → 1.0% |  132 MiB → 121 MiB |     265 → 243 | `make(MethodType, LambdaForm, Object, Object, Object)`                                 | `java.lang.invoke.BoundMethodHandle$Species_LLL`      |
|  -2.7% |   -9.499 MiB |  2.9% → 2.8% |  352 MiB → 343 MiB |     705 → 686 | `make(MethodType, LambdaForm, Object, Object)`                                         | `java.lang.invoke.BoundMethodHandle$Species_LL`       |
|  -4.5% |   -8.999 MiB |         1.6% |  198 MiB → 189 MiB |     397 → 379 | `spliterator(Object[], int, int, int)`                                                 | `java.util.Spliterators`                              |
|  -1.1% |   -8.499 MiB |  6.3% → 6.4% |  781 MiB → 772 MiB | 1,562 → 1,545 | `makeImpl(Class, Class[], boolean)`                                                    | `java.lang.invoke.MethodType`                         |
| -14.5% |   -8.499 MiB |  0.5% → 0.4% |  58.5 MiB → 50 MiB |     117 → 100 | `compile(String)`                                                                      | `java.util.regex.Pattern`                             |
| -21.8% |   -8.499 MiB |         0.3% |  39 MiB → 30.5 MiB |       78 → 61 | `<init>()`                                                                             | `java.util.ArrayDeque`                                |
|  -1.9% |   -7.999 MiB |  3.3% → 3.4% |  412 MiB → 404 MiB |     825 → 809 | `makeBlockInliningWrapper(MethodHandle)`                                               | `java.lang.invoke.MethodHandleImpl`                   |
| -21.6% |   -7.999 MiB |  0.3% → 0.2% |    37 MiB → 29 MiB |       74 → 58 | `put(String, MethodHandleWrapper)`                                                     | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`   |
| -16.5% |   -7.499 MiB |  0.4% → 0.3% |  45.5 MiB → 38 MiB |       91 → 76 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLLLL`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Standard library

|      Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ----------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
|  +197642.4% |  +11.58 GiB | <0.1% → 98.4% |    6 MiB → 11.6 GiB |    12 → 23,728 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|    +1202.7% | +10.083 GiB |  7.0% → 92.7% |  859 MiB → 10.9 GiB | 1,715 → 22,368 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801288800` |
|  +144985.7% |  +9.911 GiB |  0.1% → 84.2% |    7 MiB → 9.92 GiB |    14 → 20,312 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080159cc00` |
| +1014550.0% |  +9.907 GiB | <0.1% → 84.1% |    1 MiB → 9.91 GiB |     2 → 20,293 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080159fc00` |
|   +11236.9% |  +9.821 GiB |  0.7% → 84.1% | 89.5 MiB → 9.91 GiB |   179 → 20,293 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080159f800` |
|     +446.4% |  +9.186 GiB | 17.1% → 95.4% | 2.06 GiB → 11.2 GiB | 4,214 → 23,026 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010d3400` |
| +1875000.0% |  +9.155 GiB | <0.1% → 77.7% |  512 KiB → 9.16 GiB |     1 → 18,751 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080163ac00` |
| +1875000.0% |  +9.155 GiB | <0.1% → 77.7% |  512 KiB → 9.16 GiB |     1 → 18,751 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080163b400` |
|    +7056.9% |  +9.027 GiB |  1.1% → 77.7% |  131 MiB → 9.16 GiB |   262 → 18,751 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080163b800` |
|     +319.4% |   +8.52 GiB | 22.1% → 95.0% | 2.67 GiB → 11.2 GiB | 5,461 → 22,911 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801188000` |
|  +247858.4% |  +8.471 GiB | <0.1% → 71.9% |  3.5 MiB → 8.48 GiB |     7 → 17,356 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801268800` |
|   +14994.9% |  +8.419 GiB |  0.5% → 72.0% | 57.5 MiB → 8.48 GiB |   115 → 17,358 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801368400` |
|     +809.5% |  +7.596 GiB |  7.8% → 72.5% |  961 MiB → 8.54 GiB | 1,922 → 17,479 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008011e1800` |
|   +19306.3% |  +7.541 GiB |  0.3% → 64.3% |   40 MiB → 7.58 GiB |    80 → 15,525 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008017bdc00` |
|    +2977.5% |  +6.135 GiB |  1.7% → 53.8% |  211 MiB → 6.34 GiB |   422 → 12,985 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
|    +1819.1% |  +5.436 GiB |  2.5% → 48.7% |  306 MiB → 5.73 GiB |   612 → 11,744 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801368800` |
|   +10052.0% |  +5.202 GiB |  0.4% → 44.6% |   53 MiB → 5.25 GiB |   106 → 10,760 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801360000` |
|  +111221.8% |  +2.715 GiB | <0.1% → 23.1% |  2.5 MiB → 2.72 GiB |      5 → 5,565 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080128dc00` |
|     +252.8% |   +2.62 GiB |  8.6% → 31.0% | 1.04 GiB → 3.66 GiB |  2,123 → 7,488 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801291000` |
|  +393600.0% |  +1.921 GiB | <0.1% → 16.3% |  512 KiB → 1.92 GiB |      1 → 3,937 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801314400` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |             % |                Size |        Samples | Function                                         | Location                                            |
| ------: | ----------: | ------------: | ------------------: | -------------: | ------------------------------------------------ | --------------------------------------------------- |
|  -93.8% | -11.269 GiB |  99.7% → 6.3% |    12 GiB → 766 MiB | 24,609 → 1,532 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008010c7c00` |
|  -92.4% | -10.665 GiB |  95.7% → 7.4% |  11.5 GiB → 893 MiB | 23,627 → 1,785 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080128cc00` |
|  -86.4% | -10.251 GiB | 98.4% → 13.7% | 11.9 GiB → 1.61 GiB | 24,299 → 3,306 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
| -100.0% | -10.185 GiB | 84.5% → <0.1% |  10.2 GiB → 3.5 MiB |     20,866 → 7 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008014b7400` |
|  -99.9% |  -10.18 GiB |  84.5% → 0.1% | 10.2 GiB → 11.5 MiB |    20,872 → 23 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008014ea000` |
|  -99.8% | -10.165 GiB |  84.5% → 0.2% |   10.2 GiB → 23 MiB |    20,866 → 46 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801629800` |
| -100.0% |  -9.385 GiB | 77.9% → <0.1% |  9.39 GiB → 512 KiB |     19,223 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080160e800` |
| -100.0% |  -9.384 GiB | 77.9% → <0.1% |  9.39 GiB → 1.5 MiB |     19,223 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080160d400` |
| -100.0% |  -9.384 GiB | 77.9% → <0.1% |  9.39 GiB → 1.5 MiB |     19,223 → 3 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080165a000` |
|  -76.7% |   -8.77 GiB | 94.9% → 22.7% | 11.4 GiB → 2.67 GiB | 23,429 → 5,469 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801290800` |
| -100.0% |  -8.676 GiB | 72.0% → <0.1% |    8.68 GiB → 1 MiB |     17,770 → 2 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008011ea000` |
|  -99.9% |  -8.658 GiB |  71.9% → 0.1% |    8.67 GiB → 8 MiB |    17,746 → 16 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801330800` |
|  -90.0% |  -7.837 GiB |  72.2% → 7.4% |  8.71 GiB → 894 MiB | 17,837 → 1,786 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080128b400` |
|  -99.6% |  -7.814 GiB |  65.1% → 0.3% |   7.85 GiB → 35 MiB |    16,075 → 70 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801796000` |
|  -97.6% |  -6.368 GiB |  54.1% → 1.3% |  6.52 GiB → 159 MiB |   13,358 → 317 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080109ac00` |
|  -99.6% |  -5.388 GiB |  44.9% → 0.2% |   5.41 GiB → 20 MiB |    11,073 → 40 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080135f000` |
|  -67.8% |  -4.007 GiB | 49.0% → 16.2% | 5.91 GiB → 1.91 GiB | 12,109 → 3,903 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801318400` |
| -100.0% |  -3.183 GiB | 26.4% → <0.1% |  3.18 GiB → 1.5 MiB |      6,520 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801262400` |
|  -97.3% |  -1.935 GiB |  16.5% → 0.4% |   1.99 GiB → 54 MiB |    4,071 → 108 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080112bc00` |
| -100.0% |  -1.452 GiB | 12.1% → <0.1% |  1.45 GiB → 512 KiB |      2,976 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080146b800` |

# Lock contention profile diff

Blocked 7.4ms → 2.5ms (-4.87ms, -66.2%) over 79 contentions → 39 contentions (93.2µs → 63.9µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | -66.2% | -4.87ms | 100.0% | 7.4ms → 2.5ms |     79 → 39 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function             | Location                             |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------- | ------------------------------------ |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueue(Reference)` | `java.lang.ref.NativeReferenceQueue` |
| -37.8% | -0.38ms | 13.6% → 25.0% | 1.0ms → 0.6ms |     43 → 27 | `poll()`             | `java.lang.ref.NativeReferenceQueue` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|    Change |   Delta |             % |           Time | Contentions | Function                                       | Location                                                                   |
| --------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------- | -------------------------------------------------------------------------- |
|  +1793.1% | +0.36ms |  0.3% → 15.2% | 20.0µs → 0.4ms |      1 → 16 | `invoke(Object, Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000080163b800`                        |
| +17091.7% | +0.26ms | <0.1% → 10.3% |  1.5µs → 0.3ms |      3 → 11 | `invoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00`                        |
|  +1189.4% | +0.24ms |  0.3% → 10.3% | 20.0µs → 0.3ms |      1 → 11 | `invoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x0000000801368800`                        |
| +14591.7% | +0.22ms |  <0.1% → 8.8% |  1.5µs → 0.2ms |      3 → 10 | `invoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x00000008010d3000`                        |
|   +108.0% | +0.20ms |  2.6% → 15.8% |  0.2ms → 0.4ms |      9 → 16 | `invoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x00000008011e1800`                        |
|   +241.2% | +0.15ms |   0.9% → 8.7% |  0.1ms → 0.2ms |      6 → 10 | `invoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x00000008017bdc00`                        |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `doCall(Object)`                               | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `call(Object, Object[])`                       | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`                   |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `invoke(Object, Object[])`                     | `org.codehaus.groovy.runtime.callsite.BooleanReturningMethodInvoker`       |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `call(Object[])`                               | `org.codehaus.groovy.runtime.callsite.BooleanClosureWrapper`               |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `findMany(Collection, Iterator, Closure)`      | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                         |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `findAll(Collection, Closure)`                 | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                         |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `findAll(List, Closure)`                       | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                         |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `doMethodInvoke(Object, Object[])`             | `org.codehaus.groovy.runtime.dgm$251`                                      |
|   +139.0% | +0.06ms |   0.6% → 4.2% | 44.1µs → 0.1ms |       3 → 4 | `invoke(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x000000080109b400`                        |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `invoke(Object, Object, Object, long)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801368c00`                        |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `invoke(Object, Object, Object, long)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801322800`                        |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `reinvoke(Object, Object, Object, long)`       | `java.lang.invoke.LambdaForm$MH.0x0000000801324c00`                        |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `linkToCallSite(Object, Object, long, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801322c00`                        |
|       new | +0.06ms |   0.0% → 2.3% |    0ms → 0.1ms |       0 → 2 | `invoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x00000008014ab400`                        |

##### Standard library

|    Change |   Delta |             % |           Time | Contentions | Function                                                  | Location                                                             |
| --------: | ------: | ------------: | -------------: | ----------: | --------------------------------------------------------- | -------------------------------------------------------------------- |
|  +1793.1% | +0.36ms |  0.3% → 15.2% | 20.0µs → 0.4ms |      1 → 16 | `invoke(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000080163b800`                  |
| +17091.7% | +0.26ms | <0.1% → 10.3% |  1.5µs → 0.3ms |      3 → 11 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00`                  |
|  +1189.4% | +0.24ms |  0.3% → 10.3% | 20.0µs → 0.3ms |      1 → 11 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000801368800`                  |
| +14591.7% | +0.22ms |  <0.1% → 8.8% |  1.5µs → 0.2ms |      3 → 10 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000008010d3000`                  |
|   +108.0% | +0.20ms |  2.6% → 15.8% |  0.2ms → 0.4ms |      9 → 16 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000008011e1800`                  |
|   +241.2% | +0.15ms |   0.9% → 8.7% |  0.1ms → 0.2ms |      6 → 10 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x00000008017bdc00`                  |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `call(Object, Object[])`                                  | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite`             |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `invoke(Object, Object[])`                                | `org.codehaus.groovy.runtime.callsite.BooleanReturningMethodInvoker` |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `call(Object[])`                                          | `org.codehaus.groovy.runtime.callsite.BooleanClosureWrapper`         |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `findMany(Collection, Iterator, Closure)`                 | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                   |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `findAll(Collection, Closure)`                            | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                   |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `findAll(List, Closure)`                                  | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                   |
|  +9913.9% | +0.15ms |  <0.1% → 6.0% |  1.5µs → 0.2ms |       3 → 8 | `doMethodInvoke(Object, Object[])`                        | `org.codehaus.groovy.runtime.dgm$251`                                |
|   +139.0% | +0.06ms |   0.6% → 4.2% | 44.1µs → 0.1ms |       3 → 4 | `invoke(Object, Object)`                                  | `java.lang.invoke.LambdaForm$MH.0x000000080109b400`                  |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `invoke(Object, Object, Object, long)`                    | `java.lang.invoke.LambdaForm$MH.0x0000000801368c00`                  |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `invoke(Object, Object, Object, long)`                    | `java.lang.invoke.LambdaForm$MH.0x0000000801322800`                  |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `reinvoke(Object, Object, Object, long)`                  | `java.lang.invoke.LambdaForm$MH.0x0000000801324c00`                  |
|   +186.1% | +0.06ms |   0.4% → 3.6% | 31.5µs → 0.1ms |       4 → 3 | `linkToCallSite(Object, Object, long, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000000801322c00`                  |
|       new | +0.06ms |   0.0% → 2.3% |    0ms → 0.1ms |       0 → 2 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x00000008014ab400`                  |
|       new | +0.06ms |   0.0% → 2.3% |    0ms → 0.1ms |       0 → 2 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles`                                     |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |   Delta |             % |          Time | Contentions | Function                                                         | Location                                                                   |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueue(Reference)`                                             | `java.lang.ref.NativeReferenceQueue`                                       |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueueFromPending()`                                           | `java.lang.ref.Reference`                                                  |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `processPendingReferences()`                                     | `java.lang.ref.Reference`                                                  |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `run()`                                                          | `java.lang.ref.Reference$ReferenceHandler`                                 |
| -85.0% | -0.85ms |  13.6% → 6.0% | 1.0ms → 0.2ms |      43 → 8 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x00000008010dc400`                        |
| -85.0% | -0.85ms |  13.6% → 6.0% | 1.0ms → 0.2ms |      43 → 8 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801318400`                        |
| -61.9% | -0.62ms | 13.6% → 15.3% | 1.0ms → 0.4ms |     43 → 15 | `invokeVirtual(Object, Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$DMH.0x00000008011ea400`                       |
| -60.1% | -0.59ms | 13.4% → 15.8% | 1.0ms → 0.4ms |     42 → 16 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801368400`                        |
| -57.5% | -0.58ms | 13.6% → 17.1% | 1.0ms → 0.4ms |     43 → 18 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x000000080159cc00`                        |
| -62.2% | -0.57ms | 12.6% → 14.0% | 0.9ms → 0.4ms |     37 → 15 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000000801290800`                        |
| -73.6% | -0.55ms |  10.2% → 7.9% | 0.7ms → 0.2ms |      22 → 9 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x000000080128b400`                        |
| -56.2% | -0.52ms | 12.6% → 16.3% | 0.9ms → 0.4ms |     37 → 17 | `invoke(Object, Object)`                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801291000`                        |
| -76.5% | -0.49ms |   8.7% → 6.0% | 0.6ms → 0.2ms |      25 → 8 | `invoke(Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801314400`                        |
| -54.0% | -0.43ms | 10.9% → 14.8% | 0.8ms → 0.4ms |     31 → 15 | `methodType(Class, Class[], boolean)`                            | `java.lang.invoke.MethodType`                                              |
| -65.5% | -0.42ms |   8.7% → 8.8% | 0.6ms → 0.2ms |     25 → 10 | `doCall(Object)`                                                 | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3` |
| -51.8% | -0.41ms | 10.7% → 15.3% | 0.8ms → 0.4ms |     34 → 15 | `measureRuleProcessingTime(Rule, Closure)`                       | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
| -62.9% | -0.41ms |   8.8% → 9.7% | 0.6ms → 0.2ms |     20 → 11 | `dropParameterTypes(int, int)`                                   | `java.lang.invoke.MethodType`                                              |
| -87.3% | -0.40ms |   6.2% → 2.3% | 0.5ms → 0.1ms |      29 → 2 | `invoke(Object, Object, Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000008017dc800`                        |
| -62.1% | -0.40ms |   8.6% → 9.7% | 0.6ms → 0.2ms |     19 → 11 | `bindArgumentType(BoundMethodHandle, int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor`                                        |
| -62.1% | -0.39ms |   8.6% → 9.7% | 0.6ms → 0.2ms |     18 → 11 | `bindArgumentL(BoundMethodHandle, int, Object)`                  | `java.lang.invoke.LambdaFormEditor`                                        |

##### Standard library

| Change |   Delta |             % |          Time | Contentions | Function                                                                                         | Location                                             |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueue(Reference)`                                                                             | `java.lang.ref.NativeReferenceQueue`                 |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueueFromPending()`                                                                           | `java.lang.ref.Reference`                            |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `processPendingReferences()`                                                                     | `java.lang.ref.Reference`                            |
| -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `run()`                                                                                          | `java.lang.ref.Reference$ReferenceHandler`           |
| -85.0% | -0.85ms |  13.6% → 6.0% | 1.0ms → 0.2ms |      43 → 8 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000008010dc400`  |
| -85.0% | -0.85ms |  13.6% → 6.0% | 1.0ms → 0.2ms |      43 → 8 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801318400`  |
| -61.9% | -0.62ms | 13.6% → 15.3% | 1.0ms → 0.4ms |     43 → 15 | `invokeVirtual(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x00000008011ea400` |
| -60.1% | -0.59ms | 13.4% → 15.8% | 1.0ms → 0.4ms |     42 → 16 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801368400`  |
| -57.5% | -0.58ms | 13.6% → 17.1% | 1.0ms → 0.4ms |     43 → 18 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000080159cc00`  |
| -62.2% | -0.57ms | 12.6% → 14.0% | 0.9ms → 0.4ms |     37 → 15 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801290800`  |
| -73.6% | -0.55ms |  10.2% → 7.9% | 0.7ms → 0.2ms |      22 → 9 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x000000080128b400`  |
| -56.2% | -0.52ms | 12.6% → 16.3% | 0.9ms → 0.4ms |     37 → 17 | `invoke(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x0000000801291000`  |
| -76.5% | -0.49ms |   8.7% → 6.0% | 0.6ms → 0.2ms |      25 → 8 | `invoke(Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801314400`  |
| -54.0% | -0.43ms | 10.9% → 14.8% | 0.8ms → 0.4ms |     31 → 15 | `methodType(Class, Class[], boolean)`                                                            | `java.lang.invoke.MethodType`                        |
| -62.9% | -0.41ms |   8.8% → 9.7% | 0.6ms → 0.2ms |     20 → 11 | `dropParameterTypes(int, int)`                                                                   | `java.lang.invoke.MethodType`                        |
| -87.3% | -0.40ms |   6.2% → 2.3% | 0.5ms → 0.1ms |      29 → 2 | `invoke(Object, Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000008017dc800`  |
| -62.1% | -0.40ms |   8.6% → 9.7% | 0.6ms → 0.2ms |     19 → 11 | `bindArgumentType(BoundMethodHandle, int, LambdaForm$BasicType)`                                 | `java.lang.invoke.LambdaFormEditor`                  |
| -62.1% | -0.39ms |   8.6% → 9.7% | 0.6ms → 0.2ms |     18 → 11 | `bindArgumentL(BoundMethodHandle, int, Object)`                                                  | `java.lang.invoke.LambdaFormEditor`                  |
| -62.1% | -0.39ms |   8.6% → 9.7% | 0.6ms → 0.2ms |     18 → 11 | `bindArgumentL(int, Object)`                                                                     | `java.lang.invoke.BoundMethodHandle`                 |
| -41.2% | -0.38ms | 12.6% → 21.8% | 0.9ms → 0.5ms |     40 → 24 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
