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
|     new |   +31 |  0.0% → 0.5% |    0 → 31 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`      |
|     new |   +30 |  0.0% → 0.5% |    0 → 30 | `collector(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`       |
|     new |   +28 |  0.0% → 0.4% |    0 → 28 | `collector(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`       |
|  +15.2% |   +15 |  1.6% → 1.8% |  99 → 114 | `cast(Object)`                                                                                 | `java.lang.Class`                                         |
| +100.0% |   +14 |  0.2% → 0.4% |   14 → 28 | `ScopeDesc::decode_body`                                                                       | `libjvm.dylib`                                            |
| +185.7% |   +13 |  0.1% → 0.3% |    7 → 20 | `PhaseIFG::SquareUp`                                                                           | `libjvm.dylib`                                            |
| +275.0% |   +11 |  0.1% → 0.2% |    4 → 15 | `PcDescContainer::find_pc_desc_internal`                                                       | `libjvm.dylib`                                            |
|     new |   +11 |  0.0% → 0.2% |    0 → 11 | `collector(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d2400`       |
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
|     new |   +31 |  0.0% → 0.5% |   0 → 31 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800`      |
|     new |   +30 |  0.0% → 0.5% |   0 → 30 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000008010a1000`       |
|     new |   +28 |  0.0% → 0.4% |   0 → 28 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`       |
|  +15.2% |   +15 |  1.6% → 1.8% | 99 → 114 | `cast(Object)`                                                                              | `java.lang.Class`                                         |
|     new |   +11 |  0.0% → 0.2% |   0 → 11 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d2400`       |
| +800.0% |    +8 | <0.1% → 0.1% |    1 → 9 | `setGuards(Object)`                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| +800.0% |    +8 | <0.1% → 0.1% |    1 → 9 | `coerceArgumentsToClasses(Object[])`                                                        | `org.codehaus.groovy.reflection.ParameterTypes`           |
| +175.0% |    +7 |  0.1% → 0.2% |   4 → 11 | `getMethods(Class, String)`                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`   |
|     new |    +7 |  0.0% → 0.1% |    0 → 7 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`       |
| +200.0% |    +6 | <0.1% → 0.1% |    3 → 9 | `resize()`                                                                                  | `java.util.HashMap`                                       |
| +100.0% |    +6 |  0.1% → 0.2% |   6 → 12 | `add(ATNConfig, PredictionContextCache)`                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`          |
| +150.0% |    +6 |  0.1% → 0.2% |   4 → 10 | `equals(Object[], Object[])`                                                                | `java.util.Arrays`                                        |
|  +42.9% |    +6 |  0.2% → 0.3% |  14 → 20 | `getNode(Object)`                                                                           | `java.util.HashMap`                                       |
| +600.0% |    +6 | <0.1% → 0.1% |    1 → 7 | `invokeStatic(Object, Object, int)`                                                         | `java.lang.invoke.DirectMethodHandle$Holder`              |
| +600.0% |    +6 | <0.1% → 0.1% |    1 → 7 | `sameClasses(Class[], Object[], boolean)`                                                   | `org.codehaus.groovy.runtime.MetaClassHelper`             |
|  +23.8% |    +5 |  0.3% → 0.4% |  21 → 26 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`              |
|  +27.8% |    +5 |  0.3% → 0.4% |  18 → 23 | `invokeStatic(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`              |
|     new |    +5 |  0.0% → 0.1% |    0 → 5 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109a400`       |
|  +66.7% |    +4 |  0.1% → 0.2% |   6 → 10 | `getAndPut(String, MemoizeCache$ValueProvider)`                                             | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`       |
|  +80.0% |    +4 |         0.1% |    5 → 9 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`                  |

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

|  Change | Delta |            % |   Samples | Function                                                                                                                                                 | Location                                             |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -40 |  0.6% → 0.0% |    40 → 0 | `collector(Object, Object)`                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000401031800`  |
| removed |   -26 |  0.4% → 0.0% |    26 → 0 | `collector(Object, Object, Object)`                                                                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000004010a1000`  |
|  -35.4% |   -23 |  1.0% → 0.7% |   65 → 42 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`                             |
|  -25.6% |   -22 |  1.4% → 1.0% |   86 → 64 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`                                       |
|  -33.3% |   -21 |  1.0% → 0.7% |   63 → 42 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                                       |
|  -16.0% |   -20 |  2.0% → 1.7% | 125 → 105 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                                       |
|  -26.7% |   -16 |  0.9% → 0.7% |   60 → 44 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`                             |
| removed |   -15 |  0.2% → 0.0% |    15 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
|  -25.4% |   -15 |  0.9% → 0.7% |   59 → 44 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                       |
|  -10.7% |   -13 |  1.9% → 1.7% | 121 → 108 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                      |
| removed |   -13 |  0.2% → 0.0% |    13 → 0 | `collector(Object, Object, Object, Object)`                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x00000004010d2400`  |
|  -27.9% |   -12 |  0.7% → 0.5% |   43 → 31 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`                                       |
|  -73.3% |   -11 |  0.2% → 0.1% |    15 → 4 | `I2C/C2I adapters(0xbb)`                                                                                                                                 | `<unknown>`                                          |
|  -31.4% |   -11 |  0.6% → 0.4% |   35 → 24 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib`                           |
|  -30.6% |   -11 |  0.6% → 0.4% |   36 → 25 | `PhaseIdealLoop::build_loop_late`                                                                                                                        | `libjvm.dylib`                                       |
|  -22.7% |   -10 |  0.7% → 0.5% |   44 → 34 | `invokeBasic(Object[])`                                                                                                                                  | `java.lang.invoke.MethodHandle`                      |
|  -11.9% |   -10 |  1.3% → 1.2% |   84 → 74 | `RegisterMap::RegisterMap`                                                                                                                               | `libjvm.dylib`                                       |
|  -58.8% |   -10 |  0.3% → 0.1% |    17 → 7 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep`                                                                                                            | `libjvm.dylib`                                       |
|  -34.6% |    -9 |  0.4% → 0.3% |   26 → 17 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`                                       |
|  -81.8% |    -9 | 0.2% → <0.1% |    11 → 2 | `DebugInformationRecorder::serialize_scope_values`                                                                                                       | `libjvm.dylib`                                       |

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
| removed |   -40 |  0.6% → 0.0% |  40 → 0 | `collector(Object, Object)`                                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000000401031800`  |
| removed |   -26 |  0.4% → 0.0% |  26 → 0 | `collector(Object, Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$MH.0x00000004010a1000`  |
| removed |   -15 |  0.2% → 0.0% |  15 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| removed |   -13 |  0.2% → 0.0% |  13 → 0 | `collector(Object, Object, Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000004010d2400`  |
|  -22.7% |   -10 |  0.7% → 0.5% | 44 → 34 | `invokeBasic(Object[])`                                                                                     | `java.lang.invoke.MethodHandle`                      |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `guard(Object, Object)`                                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000040109a000`  |
| removed |    -7 |  0.1% → 0.0% |   7 → 0 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040102ac00`  |
|  -25.0% |    -6 |  0.4% → 0.3% | 24 → 18 | `<init>(MethodType, LambdaForm)`                                                                            | `java.lang.invoke.MethodHandle`                      |
|  -66.7% |    -6 | 0.1% → <0.1% |   9 → 3 | `checkCanSetAccessible(Class, Class, boolean)`                                                              | `java.lang.reflect.AccessibleObject`                 |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `guard(Object, Object, Object)`                                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00`  |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invoke(Object, Object)`                                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040109a400`  |
|  -71.4% |    -5 | 0.1% → <0.1% |   7 → 2 | `computeIfAbsent(Object, Function)`                                                                         | `java.util.concurrent.ConcurrentHashMap`             |
|  -55.6% |    -5 |         0.1% |   9 → 4 | `get()`                                                                                                     | `java.lang.ref.SoftReference`                        |
| removed |    -5 |  0.1% → 0.0% |   5 → 0 | `invokeStatic(Object, Object, int)`                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000040102b400` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `filter(Method[], String, Class[], boolean)`                                                                | `java.lang.PublicMethods$MethodList`                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `forEachWithCancel(Spliterator, Sink)`                                                                      | `java.util.stream.ReferencePipeline`                 |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `cachedLambdaForm(int)`                                                                                     | `java.lang.invoke.MethodTypeForm`                    |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `makeReinvokerForm(MethodHandle, int, Object, boolean, LambdaForm$NamedFunction, LambdaForm$NamedFunction)` | `java.lang.invoke.DelegatingMethodHandle`            |
|  -50.0% |    -4 |         0.1% |   8 → 4 | `isNullConversion(Class, Class, boolean)`                                                                   | `sun.invoke.util.VerifyType`                         |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `equals(Object[], int, int, Object[], int, int)`                                                            | `java.util.Arrays`                                   |

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

| Change |  Delta |            % |   Samples | Function                                                                                    | Location                                             |
| -----: | -----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +2,498 | 0.0% → 39.5% | 0 → 2,498 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|    new | +2,497 | 0.0% → 39.5% | 0 → 2,497 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
|    new | +2,496 | 0.0% → 39.5% | 0 → 2,496 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
|    new | +2,496 | 0.0% → 39.5% | 0 → 2,496 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
|    new | +2,496 | 0.0% → 39.5% | 0 → 2,496 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
|    new | +2,487 | 0.0% → 39.4% | 0 → 2,487 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
|    new | +2,487 | 0.0% → 39.4% | 0 → 2,487 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00`  |
|    new | +2,485 | 0.0% → 39.3% | 0 → 2,485 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |
|    new | +2,485 | 0.0% → 39.3% | 0 → 2,485 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
|    new | +2,475 | 0.0% → 39.2% | 0 → 2,475 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
|    new | +2,475 | 0.0% → 39.2% | 0 → 2,475 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
|    new | +2,475 | 0.0% → 39.2% | 0 → 2,475 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
|    new | +2,471 | 0.0% → 39.1% | 0 → 2,471 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080102b000`  |
|    new | +2,471 | 0.0% → 39.1% | 0 → 2,471 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00`  |
|    new | +2,461 | 0.0% → 38.9% | 0 → 2,461 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
|    new | +2,428 | 0.0% → 38.4% | 0 → 2,428 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801095000` |
|    new | +2,419 | 0.0% → 38.3% | 0 → 2,419 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d3400`  |
|    new | +2,392 | 0.0% → 37.8% | 0 → 2,392 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d2000`  |
|    new | +2,388 | 0.0% → 37.8% | 0 → 2,388 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d2800`  |
|    new | +2,388 | 0.0% → 37.8% | 0 → 2,388 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801189400`  |

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

|  Change |  Delta |            % |   Samples | Function                                                                                    | Location                                             |
| ------: | -----: | -----------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -2,453 | 38.6% → 0.0% | 2,453 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| removed | -2,452 | 38.6% → 0.0% | 2,452 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a1800`  |
| removed | -2,450 | 38.6% → 0.0% | 2,450 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000`  |
| removed | -2,450 | 38.6% → 0.0% | 2,450 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800`  |
| removed | -2,450 | 38.6% → 0.0% | 2,450 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00`  |
| removed | -2,442 | 38.5% → 0.0% | 2,442 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010c6400`  |
| removed | -2,442 | 38.5% → 0.0% | 2,442 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010c6c00`  |
| removed | -2,441 | 38.4% → 0.0% | 2,441 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040108e000`  |
| removed | -2,439 | 38.4% → 0.0% | 2,439 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000401094400` |
| removed | -2,430 | 38.3% → 0.0% | 2,430 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000401099c00`  |
| removed | -2,429 | 38.3% → 0.0% | 2,429 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000040109a000`  |
| removed | -2,427 | 38.2% → 0.0% | 2,427 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401098400`  |
| removed | -2,426 | 38.2% → 0.0% | 2,426 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040109bc00`  |
| removed | -2,423 | 38.2% → 0.0% | 2,423 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040102b000`  |
| removed | -2,412 | 38.0% → 0.0% | 2,412 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a9800`  |
| removed | -2,373 | 37.4% → 0.0% | 2,373 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000401095000` |
| removed | -2,371 | 37.3% → 0.0% | 2,371 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010d3400`  |
| removed | -2,345 | 36.9% → 0.0% | 2,345 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010d2000`  |
| removed | -2,337 | 36.8% → 0.0% | 2,337 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010d2800`  |
| removed | -2,337 | 36.8% → 0.0% | 2,337 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000401189400`  |

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

| Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| -----: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +11.765 GiB | 0.0% → 99.9% | 0 B → 11.8 GiB | 0 → 24,093 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|    new | +11.762 GiB | 0.0% → 99.8% | 0 B → 11.8 GiB | 0 → 24,088 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
|    new | +11.762 GiB | 0.0% → 99.8% | 0 B → 11.8 GiB | 0 → 24,088 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
|    new | +11.762 GiB | 0.0% → 99.8% | 0 B → 11.8 GiB | 0 → 24,088 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
|    new | +11.762 GiB | 0.0% → 99.8% | 0 B → 11.8 GiB | 0 → 24,088 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
|    new | +11.753 GiB | 0.0% → 99.8% | 0 B → 11.8 GiB | 0 → 24,070 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
|    new | +11.727 GiB | 0.0% → 99.5% | 0 B → 11.7 GiB | 0 → 24,016 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
|    new | +11.727 GiB | 0.0% → 99.5% | 0 B → 11.7 GiB | 0 → 24,016 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00`  |
|    new | +11.726 GiB | 0.0% → 99.5% | 0 B → 11.7 GiB | 0 → 24,015 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`  |
|    new |  +11.59 GiB | 0.0% → 98.4% | 0 B → 11.6 GiB | 0 → 23,737 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
|    new |  +11.59 GiB | 0.0% → 98.4% | 0 B → 11.6 GiB | 0 → 23,737 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801099c00`  |
|    new |  +11.59 GiB | 0.0% → 98.4% | 0 B → 11.6 GiB | 0 → 23,737 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
|    new | +11.589 GiB | 0.0% → 98.4% | 0 B → 11.6 GiB | 0 → 23,734 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00`  |
|    new | +11.586 GiB | 0.0% → 98.4% | 0 B → 11.6 GiB | 0 → 23,728 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080102b000`  |
|    new |  +11.49 GiB | 0.0% → 97.5% | 0 B → 11.5 GiB | 0 → 23,531 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
|    new | +11.323 GiB | 0.0% → 96.1% | 0 B → 11.3 GiB | 0 → 23,189 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801189400`  |
|    new | +11.321 GiB | 0.0% → 96.1% | 0 B → 11.3 GiB | 0 → 23,186 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d2800`  |
|    new | +11.312 GiB | 0.0% → 96.0% | 0 B → 11.3 GiB | 0 → 23,167 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801095000` |
|    new | +11.292 GiB | 0.0% → 95.9% | 0 B → 11.3 GiB | 0 → 23,125 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d8400`  |
|    new |  +11.26 GiB | 0.0% → 95.6% | 0 B → 11.3 GiB | 0 → 23,061 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801189000`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |           Size |    Samples | Function                                                                                    | Location                                             |
| ------: | ----------: | -----------: | -------------: | ---------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -12.041 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,658 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| removed |  -12.04 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,657 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a1800`  |
| removed | -12.039 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,654 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000`  |
| removed | -12.039 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,654 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800`  |
| removed | -12.039 GiB | 99.9% → 0.0% |   12 GiB → 0 B | 24,654 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00`  |
| removed |  -12.03 GiB | 99.8% → 0.0% |   12 GiB → 0 B | 24,636 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000401094400` |
| removed | -12.017 GiB | 99.7% → 0.0% |   12 GiB → 0 B | 24,609 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010c6400`  |
| removed | -12.017 GiB | 99.7% → 0.0% |   12 GiB → 0 B | 24,609 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010c6c00`  |
| removed | -12.016 GiB | 99.7% → 0.0% |   12 GiB → 0 B | 24,607 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040108e000`  |
| removed | -11.868 GiB | 98.4% → 0.0% | 11.9 GiB → 0 B | 24,305 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401098400`  |
| removed | -11.868 GiB | 98.4% → 0.0% | 11.9 GiB → 0 B | 24,305 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000401099c00`  |
| removed | -11.868 GiB | 98.4% → 0.0% | 11.9 GiB → 0 B | 24,305 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000040109a000`  |
| removed | -11.867 GiB | 98.4% → 0.0% | 11.9 GiB → 0 B | 24,302 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040109bc00`  |
| removed | -11.865 GiB | 98.4% → 0.0% | 11.9 GiB → 0 B | 24,299 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040102b000`  |
| removed | -11.746 GiB | 97.4% → 0.0% | 11.7 GiB → 0 B | 24,055 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a9800`  |
| removed | -11.597 GiB | 96.2% → 0.0% | 11.6 GiB → 0 B | 23,749 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010d2800`  |
| removed | -11.597 GiB | 96.2% → 0.0% | 11.6 GiB → 0 B | 23,749 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000401189400`  |
| removed | -11.567 GiB | 95.9% → 0.0% | 11.6 GiB → 0 B | 23,689 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010d8400`  |
| removed |  -11.56 GiB | 95.9% → 0.0% | 11.6 GiB → 0 B | 23,673 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000401095000` |
| removed | -11.542 GiB | 95.7% → 0.0% | 11.5 GiB → 0 B | 23,636 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000401189000`  |

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

##### Standard library

| Change |   Delta |            % |        Time | Contentions | Function                                                                                    | Location                                             |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a1800`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a9800`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010aa000`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010c6c00`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d2800`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801189000`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801189400`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d8400`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000080118a800` |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000080103c000`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801095000` |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d2000`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801288800`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `guardWithCatch(Object, Object, Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801289000`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `guard(Object, Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$MH.0x000000080128a000`  |
|    new | +0.62ms | 0.0% → 25.0% | 0ms → 0.6ms |      0 → 27 | `invoke(Object, Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801288400`  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                                                                    | Location                                             |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueue(Reference)`                                                                        | `java.lang.ref.NativeReferenceQueue`                 |
|  -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `enqueueFromPending()`                                                                      | `java.lang.ref.Reference`                            |
|  -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `processPendingReferences()`                                                                | `java.lang.ref.Reference`                            |
|  -70.6% | -4.50ms | 86.4% → 75.0% | 6.4ms → 1.9ms |     36 → 12 | `run()`                                                                                     | `java.lang.ref.Reference$ReferenceHandler`           |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010d3400`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010a1800`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000401094400` |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000004010c6c00`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040102b000`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000401098400`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000401099c00`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000040109a000`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040109bc00`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000040108e000`  |
| removed | -1.00ms |  13.6% → 0.0% |   1.0ms → 0ms |      43 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000004010c6400`  |
| removed | -0.99ms |  13.4% → 0.0% |   1.0ms → 0ms |      42 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000401094c00` |
