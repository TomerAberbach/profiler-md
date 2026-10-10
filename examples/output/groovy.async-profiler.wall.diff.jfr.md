# Sampling profile diff

Collected 14,141 samples → 13,896 samples (-245 samples, -1.7%).

| Category          | Change | Delta |             % |         Samples |
| ----------------- | -----: | ----: | ------------: | --------------: |
| Native            |  -1.4% |  -187 | 93.6% → 93.9% | 13,241 → 13,054 |
| Compiler          |  -9.1% |   -49 |   3.8% → 3.5% |       541 → 492 |
| Standard library  |  +1.2% |    +4 |          2.3% |       321 → 325 |
| Ours              | -26.3% |    -5 |          0.1% |         19 → 14 |
| JIT               | -41.2% |    -7 |          0.1% |         17 → 10 |
| Garbage collector | -50.0% |    -1 |         <0.1% |           2 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                                                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +175.0% |    +7 | <0.1% → 0.1% |  4 → 11 | `PhaseChaitin::gather_lrg_masks`                                                            | `libjvm.dylib`                                                                                            |
|  +36.8% |    +7 |  0.1% → 0.2% | 19 → 26 | `pthread_jit_write_protect_np`                                                              | `libsystem_pthread.dylib`                                                                                 |
|  +31.6% |    +6 |  0.1% → 0.2% | 19 → 25 | `Node::dominates`                                                                           | `libjvm.dylib`                                                                                            |
| +100.0% |    +5 | <0.1% → 0.1% |  5 → 10 | `PhaseAggressiveCoalesce::insert_copies`                                                    | `libjvm.dylib`                                                                                            |
|  +62.5% |    +5 |         0.1% |  8 → 13 | `java_lang_Throwable::fill_in_stack_trace`                                                  | `libjvm.dylib`                                                                                            |
|     new |    +5 | 0.0% → <0.1% |   0 → 5 | `nmethod::is_unloading`                                                                     | `libjvm.dylib`                                                                                            |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `invoke(Object, int)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001031400 → java.lang.invoke.LambdaForm$MH.0x0000000801031400`   |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `collectViolations(SourceCode, RuleSet)`                                                    | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                            |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070013ab000 → java.lang.invoke.LambdaForm$MH.0x000000080102ac00`   |
| +400.0% |    +4 |        <0.1% |   1 → 5 | `Matcher::match_tree`                                                                       | `libjvm.dylib`                                                                                            |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `ParmNode::is_CFG`                                                                          | `libjvm.dylib`                                                                                            |
|  +21.4% |    +3 |         0.1% | 14 → 17 | `IndexSetIterator::advance_and_next`                                                        | `libjvm.dylib`                                                                                            |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`                                        | `libjvm.dylib`                                                                                            |
|  +50.0% |    +3 | <0.1% → 0.1% |   6 → 9 | `PhaseOutput::BuildOopMaps`                                                                 | `libjvm.dylib`                                                                                            |
|  +33.3% |    +3 |         0.1% |  9 → 12 | `__psynch_mutexwait`                                                                        | `libsystem_kernel.dylib`                                                                                  |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `InstanceKlass::find_method_index`                                                          | `libjvm.dylib`                                                                                            |
|  +60.0% |    +3 | <0.1% → 0.1% |   5 → 8 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                                                                           |
|  +18.8% |    +3 |         0.1% | 16 → 19 | `cast(Object)`                                                                              | `java.lang.Class`                                                                                         |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                               | Location                   |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
|  +36.8% |    +7 |  0.1% → 0.2% | 19 → 26 | `pthread_jit_write_protect_np`                                                                         | `libsystem_pthread.dylib`  |
|  +62.5% |    +5 |         0.1% |  8 → 13 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`             |
|     new |    +5 | 0.0% → <0.1% |   0 → 5 | `nmethod::is_unloading`                                                                                | `libjvm.dylib`             |
|  +33.3% |    +3 |         0.1% |  9 → 12 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`   |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `InstanceKlass::find_method_index`                                                                     | `libjvm.dylib`             |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `Dictionary::find`                                                                                     | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `GrowableArrayWithAllocator<int, GrowableArray<int>>::expand_to`                                       | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `resource_allocate_bytes`                                                                              | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `G1CMTask::drain_global_stack`                                                                         | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass`                                                  | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `trampoline_stub_Relocation::get_trampoline_for`                                                       | `libjvm.dylib`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `fwd_copy_drain`                                                                                       | `libjvm.dylib`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `SymbolTable::new_symbol`                                                                              | `libjvm.dylib`             |
| +100.0% |    +2 |        <0.1% |   2 → 4 | `nmethodBucket::next_not_unloading`                                                                    | `libjvm.dylib`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `compare_immediate_pair`                                                                               | `libjvm.dylib`             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `CodeCache::make_marked_nmethods_deoptimized`                                                          | `libjvm.dylib`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `_platform_bzero`                                                                                      | `libsystem_platform.dylib` |
| +100.0% |    +2 |        <0.1% |   2 → 4 | `__psynch_mutexdrop`                                                                                   | `libsystem_kernel.dylib`   |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhiSimplifier::block_do`                                                                              | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | -------------- |
| +175.0% |    +7 | <0.1% → 0.1% |  4 → 11 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
|  +31.6% |    +6 |  0.1% → 0.2% | 19 → 25 | `Node::dominates`                                    | `libjvm.dylib` |
| +100.0% |    +5 | <0.1% → 0.1% |  5 → 10 | `PhaseAggressiveCoalesce::insert_copies`             | `libjvm.dylib` |
| +400.0% |    +4 |        <0.1% |   1 → 5 | `Matcher::match_tree`                                | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `ParmNode::is_CFG`                                   | `libjvm.dylib` |
|  +21.4% |    +3 |         0.1% | 14 → 17 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
|  +50.0% |    +3 | <0.1% → 0.1% |   6 → 9 | `PhaseOutput::BuildOopMaps`                          | `libjvm.dylib` |
|  +60.0% |    +3 | <0.1% → 0.1% |   5 → 8 | `PhaseIdealLoop::is_dominator`                       | `libjvm.dylib` |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `Node::rematerialize`                                | `libjvm.dylib` |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `RegMask::is_misaligned_pair`                        | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `RegMask::is_bound`                                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `PhiNode::Identity`                                  | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `CProjNode::is_block_proj`                           | `libjvm.dylib` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `Node::hash`                                         | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::specialize_generic_vector_operands`        | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseCFG::partial_latency_of_defs`                  | `libjvm.dylib` |
|  +40.0% |    +2 | <0.1% → 0.1% |   5 → 7 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `GraphBuilder::iterate_bytecodes_for_block`          | `libjvm.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `LinearScan::compute_debug_info_for_scope`           | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                                                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `invoke(Object, int)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001031400 → java.lang.invoke.LambdaForm$MH.0x0000000801031400`   |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070013ab000 → java.lang.invoke.LambdaForm$MH.0x000000080102ac00`   |
|  +60.0% |    +3 | <0.1% → 0.1% |   5 → 8 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800 → java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                           |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `<init>(MethodType, LambdaForm)`                                                            | `java.lang.invoke.MethodHandle`                                                                           |
|  +18.8% |    +3 |         0.1% | 16 → 19 | `cast(Object)`                                                                              | `java.lang.Class`                                                                                         |
|  +75.0% |    +3 | <0.1% → 0.1% |   4 → 7 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                                                                           |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `equals(Object[], Object[])`                                                                | `java.util.Arrays`                                                                                        |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00 → java.lang.invoke.LambdaForm$MH.0x00000008010abc00`   |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `guard(Object, Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$MH.0x00000070012b9000 → java.lang.invoke.LambdaForm$MH.0x000000080128a400`   |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `add(ATNConfig, PredictionContextCache)`                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                                                          |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `checkCustomized(MethodHandle)`                                                             | `java.lang.invoke.Invokers`                                                                               |
| +100.0% |    +2 |        <0.1% |   2 → 4 | `getMethods(Class, String)`                                                                 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                                                   |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `divideOneWord(int, MutableBigInteger)`                                                     | `java.math.MutableBigInteger`                                                                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `divideAndRemainderKnuth(BigInteger)`                                                       | `java.math.BigInteger`                                                                                    |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `visit(GroovyCodeVisitor)`                                                                  | `org.codehaus.groovy.ast.expr.VariableExpression`                                                         |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`                         | `java.lang.invoke.MethodHandleImpl`                                                                       |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `getNoCheckStale(Object)`                                                                   | `jdk.internal.util.ReferencedKeyMap`                                                                      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070014f4000 → java.lang.invoke.LambdaForm$MH.0x00000008010aa400`   |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                                                     | Location                                     |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|   -1.8% |  -119 |         46.0% | 6,509 → 6,390 | `__psynch_cvwait`                                                                                                            | `libsystem_kernel.dylib`                     |
|   -1.3% |   -70 | 39.0% → 39.2% | 5,519 → 5,449 | `semaphore_wait_trap`                                                                                                        | `libsystem_kernel.dylib`                     |
|  -37.0% |   -10 |   0.2% → 0.1% |       27 → 17 | `PhaseChaitin::Split`                                                                                                        | `libjvm.dylib`                               |
|   -1.5% |    -7 |          3.3% |     466 → 459 | `__ulock_wait`                                                                                                               | `libsystem_kernel.dylib`                     |
|  -77.8% |    -7 |  0.1% → <0.1% |         9 → 2 | `ciObjectFactory::get_metadata`                                                                                              | `libjvm.dylib`                               |
|   -1.5% |    -7 |          3.3% |     466 → 459 | `mach_msg2_trap`                                                                                                             | `libsystem_kernel.dylib`                     |
|  -60.0% |    -6 |  0.1% → <0.1% |        10 → 4 | `NodeHash::hash_find_insert`                                                                                                 | `libjvm.dylib`                               |
|  -54.5% |    -6 |  0.1% → <0.1% |        11 → 5 | `_platform_memset`                                                                                                           | `libsystem_platform.dylib`                   |
|  -31.3% |    -5 |          0.1% |       16 → 11 | `PhaseChaitin::build_ifg_physical`                                                                                           | `libjvm.dylib`                               |
| removed |    -5 |  <0.1% → 0.0% |         5 → 0 | `PhaseIFG::SquareUp`                                                                                                         | `libjvm.dylib`                               |
| removed |    -5 |  <0.1% → 0.0% |         5 → 0 | `SymbolTable::do_lookup`                                                                                                     | `libjvm.dylib`                               |
|  -83.3% |    -5 |         <0.1% |         6 → 1 | `getInCache(LambdaFormEditor$TransformKey)`                                                                                  | `java.lang.invoke.LambdaFormEditor`          |
| removed |    -4 |  <0.1% → 0.0% |         4 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`                               |
|  -57.1% |    -4 |         <0.1% |         7 → 3 | `PhaseChaitin::post_allocate_copy_removal`                                                                                   | `libjvm.dylib`                               |
| removed |    -4 |  <0.1% → 0.0% |         4 → 0 | `Matcher::find_shared`                                                                                                       | `libjvm.dylib`                               |
|  -57.1% |    -4 |         <0.1% |         7 → 3 | `Type::cmp`                                                                                                                  | `libjvm.dylib`                               |
|  -66.7% |    -4 |         <0.1% |         6 → 2 | `invokeStatic(Object, Object, Object)`                                                                                       | `java.lang.invoke.DirectMethodHandle$Holder` |
|  -40.0% |    -4 |  0.1% → <0.1% |        10 → 6 | `getNode(Object)`                                                                                                            | `java.util.HashMap`                          |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `ConnectionGraph::compute_escape`                                                                                            | `libjvm.dylib`                               |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre`                                                                                   | `libjvm.dylib`                               |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                                                                   | Location                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|   -1.8% |  -119 |         46.0% | 6,509 → 6,390 | `__psynch_cvwait`                                                                                                                                          | `libsystem_kernel.dylib`   |
|   -1.3% |   -70 | 39.0% → 39.2% | 5,519 → 5,449 | `semaphore_wait_trap`                                                                                                                                      | `libsystem_kernel.dylib`   |
|   -1.5% |    -7 |          3.3% |     466 → 459 | `__ulock_wait`                                                                                                                                             | `libsystem_kernel.dylib`   |
|   -1.5% |    -7 |          3.3% |     466 → 459 | `mach_msg2_trap`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  -54.5% |    -6 |  0.1% → <0.1% |        11 → 5 | `_platform_memset`                                                                                                                                         | `libsystem_platform.dylib` |
| removed |    -5 |  <0.1% → 0.0% |         5 → 0 | `SymbolTable::do_lookup`                                                                                                                                   | `libjvm.dylib`             |
| removed |    -4 |  <0.1% → 0.0% |         4 → 0 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                               | `libjvm.dylib`             |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                     | `libjvm.dylib`             |
|  -75.0% |    -3 |         <0.1% |         4 → 1 | `BacktraceBuilder::push`                                                                                                                                   | `libjvm.dylib`             |
|  -66.7% |    -2 |         <0.1% |         3 → 1 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                            | `libjvm.dylib`             |
|  -33.3% |    -2 |         <0.1% |         6 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                          | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<594020ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 594020ull>::oop_access_barrier` | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `CompiledMethod::cleanup_inline_caches_impl`                                                                                                               | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `G1CMTask::make_reference_grey`                                                                                                                            | `libjvm.dylib`             |
|  -50.0% |    -2 |         <0.1% |         4 → 2 | `vmSymbols::find_sid`                                                                                                                                      | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `ControlFlowOptimizer::delete_empty_blocks`                                                                                                                | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `CodeHeap::search_freelist`                                                                                                                                | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `ProfileCall::visit`                                                                                                                                       | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `MemAllocator::allocate`                                                                                                                                   | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `__ultoa`                                                                                                                                                  | `libsystem_c.dylib`        |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|  -37.0% |   -10 |  0.2% → 0.1% | 27 → 17 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
|  -77.8% |    -7 | 0.1% → <0.1% |   9 → 2 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  -60.0% |    -6 | 0.1% → <0.1% |  10 → 4 | `NodeHash::hash_find_insert`                | `libjvm.dylib` |
|  -31.3% |    -5 |         0.1% | 16 → 11 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `PhaseIFG::SquareUp`                        | `libjvm.dylib` |
|  -57.1% |    -4 |        <0.1% |   7 → 3 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `Matcher::find_shared`                      | `libjvm.dylib` |
|  -57.1% |    -4 |        <0.1% |   7 → 3 | `Type::cmp`                                 | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ConnectionGraph::compute_escape`           | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ProjNode::Opcode`                          | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Node::pinned`                              | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `CProjNode::is_CFG`                         | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `TypeInstPtr::make`                         | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Compile::remove_speculative_types`         | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `PhaseIdealLoop::build_loop_tree`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::DoScheduling`                  | `libjvm.dylib` |
|  -22.2% |    -2 |         0.1% |   9 → 7 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  -33.3% |    -2 |        <0.1% |   6 → 4 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                | Location                                                                                                |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -83.3% |    -5 |        <0.1% |   6 → 1 | `getInCache(LambdaFormEditor$TransformKey)`                                             | `java.lang.invoke.LambdaFormEditor`                                                                     |
|  -66.7% |    -4 |        <0.1% |   6 → 2 | `invokeStatic(Object, Object, Object)`                                                  | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -40.0% |    -4 | 0.1% → <0.1% |  10 → 6 | `getNode(Object)`                                                                       | `java.util.HashMap`                                                                                     |
|  -33.3% |    -3 | 0.1% → <0.1% |   9 → 6 | `invokeVirtual(Object, Object)`                                                         | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -20.0% |    -3 |         0.1% | 15 → 12 | `newInstance(Class, int)`                                                               | `java.lang.reflect.Array`                                                                               |
|  -37.5% |    -3 | 0.1% → <0.1% |   8 → 5 | `collector(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000 → java.lang.invoke.LambdaForm$MH.0x00000008010a1000` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `map(Function)`                                                                         | `java.util.stream.ReferencePipeline`                                                                    |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `equals(Object)`                                                                        | `java.lang.String`                                                                                      |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)`               | `java.lang.invoke.MethodHandleImpl`                                                                     |
|  -33.3% |    -2 |        <0.1% |   6 → 4 | `collector(Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x0000007001031800 → java.lang.invoke.LambdaForm$MH.0x0000000801031800` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `resize()`                                                                              | `java.util.HashMap`                                                                                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x000000700109a400 → java.lang.invoke.LambdaForm$MH.0x000000080161c400` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `equals(LambdaFormEditor$TransformKey)`                                                 | `java.lang.invoke.LambdaFormEditor$Transform`                                                           |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `rebind()`                                                                              | `java.lang.invoke.BoundMethodHandle`                                                                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                                                   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `study(Pattern$TreeInfo)`                                                               | `java.util.regex.Pattern$Branch`                                                                        |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `isNullConversion(Class, Class, boolean)`                                               | `sun.invoke.util.VerifyType`                                                                            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `boxInteger(int)`                                                                       | `sun.invoke.util.ValueConversions`                                                                      |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `isNullType(Class)`                                                                     | `sun.invoke.util.VerifyType`                                                                            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `get(Class)`                                                                            | `java.lang.ClassValue`                                                                                  |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `org.codenarc.analyzer.AbstractSourceAnalyzer:43` |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:376` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `java.lang.invoke.MethodHandle:479` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `java.lang.invoke.MethodHandle:480` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| +18.8% |    +3 | 100.0% | 16 → 19 | `java.lang.Class:4068` |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

| Change | Delta |            % | Samples | Location                |
| -----: | ----: | -----------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.Arrays:2975` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.Arrays:2979` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.Arrays:2980` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:246` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:291` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet:265` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.invoke.Invokers:626` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |      % | Samples | Location                                                    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex:202` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

|  Change | Delta |             % | Samples | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `java.math.MutableBigInteger:1112` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.math.MutableBigInteger:1106` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `java.math.MutableBigInteger:1138` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

| Change | Delta |            % | Samples | Location                    |
| -----: | ----: | -----------: | ------: | --------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.math.BigInteger:2476` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.math.BigInteger:2478` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.VariableExpression`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.codehaus.groovy.ast.expr.VariableExpression:71` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |            % | Samples | Location                                |
| -----: | ----: | -----------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandleImpl:368` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.lang.invoke.MethodHandleImpl:370` |

##### `getNoCheckStale(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `jdk.internal.util.ReferencedKeyMap:215` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |              % | Samples | Location                                |
| ------: | ----: | -------------: | ------: | --------------------------------------- |
|  -50.0% |    -1 | 33.3% → 100.0% |   2 → 1 | `java.lang.invoke.LambdaFormEditor:383` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaFormEditor:391` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaFormEditor:396` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaFormEditor:397` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaFormEditor:403` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  -66.7% |    -2 | 30.0% → 16.7% |   3 → 1 | `java.util.HashMap:576` |
|  -66.7% |    -2 | 30.0% → 16.7% |   3 → 1 | `java.util.HashMap:587` |
|     new |    +2 |  0.0% → 33.3% |   0 → 2 | `java.util.HashMap:582` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `java.util.HashMap:577` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `java.util.HashMap:579` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Location                     |
| -----: | ----: | -----: | ------: | ---------------------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `java.lang.reflect.Array:78` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `java.util.stream.ReferencePipeline:189` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.util.stream.ReferencePipeline:190` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `java.lang.String:1847` |
|  -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `java.lang.String:1852` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |            % | Samples | Location                                |
| ------: | ----: | -----------: | ------: | --------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:282` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:333` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:711` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:741` |

##### `equals(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor$Transform`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.LambdaFormEditor$Transform:111` |

##### `rebind()` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.invoke.BoundMethodHandle:93` |

##### `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext:248` |

##### `study(Pattern$TreeInfo)` (`java.util.regex.Pattern$Branch`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.regex.Pattern$Branch:4922` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|  Change | Delta |            % | Samples | Location                        |
| ------: | ----: | -----------: | ------: | ------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `sun.invoke.util.VerifyType:71` |

##### `boxInteger(int)` (`sun.invoke.util.ValueConversions`)

| Change | Delta |      % | Samples | Location                               |
| -----: | ----: | -----: | ------: | -------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `sun.invoke.util.ValueConversions:280` |

##### `isNullType(Class)` (`sun.invoke.util.VerifyType`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `sun.invoke.util.VerifyType:95` |

##### `get(Class)` (`java.lang.ClassValue`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.ClassValue:104` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------- |
|  +58.3% |    +7 | 63.2% → 73.1% | 12 → 19 | `JVM_NewArray`                                   | `libjvm.dylib`                         |
| removed |    -2 |  10.5% → 0.0% |   2 → 0 | `newArray(Class, int)`                           | `java.lang.reflect.Array`              |
|     new |    +2 |   0.0% → 7.7% |   0 → 2 | `init(MemberName, Object)`                       | `java.lang.invoke.MethodHandleNatives` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `SharedRuntime::resolve_static_call_C`           | `libjvm.dylib`                         |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                         |

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +31.6% |    +6 | 100.0% | 19 → 25 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +62.5% |    +5 | 100.0% |  8 → 13 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `nmethod::is_unloading` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                     | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `DependencyContext::add_dependent_nmethod` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `nmethodBucket::next_not_unloading`        | `libjvm.dylib` |

##### `invoke(Object, int)` (`java.lang.invoke.LambdaForm$MH.0x0000000801031400`)

| Change | Delta |            % | Samples | Caller                              | Location                                                                                                |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `collector(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001031800 → java.lang.invoke.LambdaForm$MH.0x0000000801031800` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `collector(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000 → java.lang.invoke.LambdaForm$MH.0x00000008010a1000` |

##### `collectViolations(SourceCode, RuleSet)` (`org.codenarc.analyzer.AbstractSourceAnalyzer`)

| Change | Delta |             % | Samples | Caller                                          | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400 → java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080102ac00`)

| Change | Delta |            % | Samples | Caller                   | Location                                            |
| -----: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `invoke(Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x0000000801031400` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008017e4400` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `Matcher::xform` | `libjvm.dylib` |

##### `ParmNode::is_CFG` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
| +200.0% |    +4 | 14.3% → 35.3% |   2 → 6 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  -75.0% |    -3 |  28.6% → 5.9% |   4 → 1 | `PhaseIFG::SquareUp`                                               | `libjvm.dylib` |
| removed |    -2 |  14.3% → 0.0% |   2 → 0 | `PhaseLive::add_liveout`                                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `PhaseChaitin::Simplify`                                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| +400.0% |    +4 | 50.0% → 100.0% |   1 → 5 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +33.3% |    +3 | 100.0% |  9 → 12 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                  | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|  Change | Delta |            % | Samples | Caller                           | Location                                                                                                |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
|     new |    +4 | 0.0% → 50.0% |   0 → 4 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`                                                     |
|     new |    +2 | 0.0% → 25.0% |   0 → 2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700122c400 → java.lang.invoke.LambdaForm$MH.0x00000008010c8000` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800 → java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`                                                     |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400`                                                     |

##### `doWithCallSite(MutableCallSite, Object[], BiFunction)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % | Samples | Caller                                                                                        | Location                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |      % | Samples | Caller                           | Location                             |
| ------: | ----: | -----: | ------: | -------------------------------- | ------------------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `<init>(MethodType, LambdaForm)` | `java.lang.invoke.BoundMethodHandle` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |              % | Samples | Caller                                  | Location                                             |
| ------: | ----: | -------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|  +26.7% |    +4 | 93.8% → 100.0% | 15 → 19 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |    6.3% → 0.0% |   1 → 0 | `checkCast(Object)`                     | `java.lang.invoke.DirectMethodHandle$StaticAccessor` |

##### `Dictionary::find` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                       | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | -------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SystemDictionary::resolve_or_fail`                          | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `GrowableArrayWithAllocator<int, GrowableArray<int>>::expand_to` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Dependencies::assert_common_1` | `libjvm.dylib` |

##### `resource_allocate_bytes` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ValueStack::pop_arguments`                   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciMethodData::parameters_type_data`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |

##### `G1CMTask::drain_global_stack` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1CMBitMap::iterate` | `libjvm.dylib` |

##### `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `KlassCleaningTask::work` | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `fwd_copy_drain` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                          | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `SignatureStream::find_symbol` | `libjvm.dylib` |

##### `nmethodBucket::next_not_unloading` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib` |

##### `compare_immediate_pair` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location            |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `bsearch`                        | `libsystem_c.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `encoding_for_logical_immediate` | `libjvm.dylib`      |

##### `CodeCache::make_marked_nmethods_deoptimized` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Deoptimization::deoptimize_all_marked` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphKit::create_and_xform_if`   | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseIterGVN::transform_old`     | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `PhiSimplifier::block_do` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `BlockBegin::iterate_preorder` | `libjvm.dylib` |

##### `PhaseIdealLoop::is_dominator` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                        | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| +50.0% |    +2 | 80.0% → 75.0% |   4 → 6 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `PhaseIdealLoop::compute_early_ctrl`          | `libjvm.dylib` |

##### `Node::rematerialize` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                             | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `PhaseChaitin::Split`              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `RegMask::is_misaligned_pair` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                           | Location       |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `RegMask::is_bound` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseChaitin::gather_lrg_masks` | `libjvm.dylib` |

##### `PhiNode::Identity` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |

##### `CProjNode::is_block_proj` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `PhaseChaitin::Split`              | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseCFG::hoist_to_cheaper_block` | `libjvm.dylib` |

##### `Node::hash` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIterGVN::optimize`     | `libjvm.dylib` |

##### `Matcher::specialize_generic_vector_operands` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `LinearScan::compute_debug_info_for_scope` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LinearScan::assign_reg_num` | `libjvm.dylib` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |            % | Samples | Caller                                                                 | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa400` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object, Object)`                        | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `invoke(Object, Object)`                                               | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00` |
|     new |    +1 | 0.0% → 14.3% |   0 → 1 | `linkToCallSite(int, int, Object)`                                     | `java.lang.invoke.Invokers$Holder`                  |

##### `equals(Object[], Object[])` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller               | Location                      |
| -----: | ----: | ------------: | ------: | -------------------- | ----------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `equals(MethodType)` | `java.lang.invoke.MethodType` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010abc00`)

| Change | Delta |             % | Samples | Caller                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Caller                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801360800` |

##### `guard(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080128a400`)

| Change | Delta |            % | Samples | Caller                                             | Location                                                                                                |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b8c00 → java.lang.invoke.LambdaForm$MH.0x000000080128a000` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|  Change | Delta |      % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |            % | Samples | Caller                                        | Location                                            |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000080109a400` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000000801350000` |

##### `getMethods(Class, String)` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

|  Change | Delta |      % | Samples | Caller                                                   | Location                    |
| ------: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `getMethodWithCaching(Class, String, Object[], boolean)` | `groovy.lang.MetaClassImpl` |

##### `divideOneWord(int, MutableBigInteger)` (`java.math.MutableBigInteger`)

|  Change | Delta |      % | Samples | Caller                                                       | Location                      |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |

##### `divideAndRemainderKnuth(BigInteger)` (`java.math.BigInteger`)

| Change | Delta |             % | Samples | Caller                           | Location               |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `divideAndRemainder(BigInteger)` | `java.math.BigInteger` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.VariableExpression`)

| Change | Delta |            % | Samples | Caller                                            | Location                                     |
| -----: | ----: | -----------: | ------: | ------------------------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitBinaryExpression(BinaryExpression)`         | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `computeValueConversions(MethodType, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |             % | Samples | Caller                                                                    | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `getNoCheckStale(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change | Delta |             % | Samples | Caller        | Location                             |
| -----: | ----: | ------------: | ------: | ------------- | ------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010aa400`)

| Change | Delta |             % | Samples | Caller                          | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aac00` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |           % |       Samples | Caller                  | Location                 |
| -----: | ----: | ----------: | ------------: | ----------------------- | ------------------------ |
|  -1.9% |   -98 |       78.5% | 5,112 → 5,014 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  -1.5% |    -7 | 7.1% → 7.2% |     465 → 458 | `Parker::park`          | `libjvm.dylib`           |
|  -1.5% |    -7 |        7.2% |     466 → 459 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  -1.5% |    -7 |        7.2% |     466 → 459 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |             % |       Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------------: | -------------------------------- | -------------- |
|  -1.4% |   -72 | 91.0% → 90.9% | 5,024 → 4,952 | `WorkerThread::run`              | `libjvm.dylib` |
| +66.7% |    +8 |   0.2% → 0.4% |       12 → 20 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  -1.5% |    -7 |          8.4% |     466 → 459 | `os::signal_wait`                | `libjvm.dylib` |
|  +5.9% |    +1 |          0.3% |       17 → 18 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -37.0% |   -10 | 100.0% | 27 → 17 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Caller                    | Location       |
| -----: | ----: | -----: | --------: | ------------------------- | -------------- |
|  -1.5% |    -7 | 100.0% | 466 → 459 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
| removed |    -2 | 22.2% → 0.0% |   2 → 0 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `ciObjectFactory::get`                 | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `ciMethod::ensure_method_data`         | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Caller               | Location                 |
| -----: | ----: | -----: | --------: | -------------------- | ------------------------ |
|  -1.5% |    -7 | 100.0% | 466 → 459 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| removed |    -5 |   50.0% → 0.0% |   5 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|  -20.0% |    -1 | 50.0% → 100.0% |   5 → 4 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  -66.7% |    -2 | 27.3% → 20.0% |   3 → 1 | `MemAllocator::allocate`                 | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `ConNode::make`                          | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `InstanceKlass::allocate_instance_klass` | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `GraphKit::gen_checkcast`                | `libjvm.dylib` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `ConnectionGraph::do_analysis`           | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -31.3% |    -5 | 100.0% | 16 → 11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIFG::SquareUp` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `SymbolTable::new_symbol`             | `libjvm.dylib` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `java_lang_String::as_symbol_or_null` | `libjvm.dylib` |

##### `getInCache(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor`)

|  Change | Delta |             % | Samples | Caller                                          | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------------------------- |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `filterArgumentForm(int, LambdaForm$BasicType)` | `java.lang.invoke.LambdaFormEditor` |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `bindArgumentForm(int)`                         | `java.lang.invoke.LambdaFormEditor` |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `addArgumentForm(int, LambdaForm$BasicType)`    | `java.lang.invoke.LambdaFormEditor` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectArgumentsForm(int, MethodType)`         | `java.lang.invoke.LambdaFormEditor` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                            | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `Matcher::match` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `Dict::Insert` | `libjvm.dylib` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Caller                                           | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b8400` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070011c8800` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000080109b800` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                | Location                  |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------- |
|  -75.0% |    -6 | 80.0% → 33.3% |   8 → 2 | `get(Object)`         | `java.util.LinkedHashMap` |
| +300.0% |    +3 | 10.0% → 66.7% |   1 → 4 | `get(Object)`         | `java.util.HashMap`       |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `containsKey(Object)` | `java.util.HashMap`       |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                              | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<594020ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 594020ull>::oop_access_barrier` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ClassLoaderData::is_alive`        | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ResolvedMethodTable::find_method` | `libjvm.dylib` |

##### `CompiledMethod::cleanup_inline_caches_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CompiledMethod::unload_nmethod_caches` | `libjvm.dylib` |

##### `G1CMTask::make_reference_grey` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                                                                                        | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `void OopOopIterateBoundedDispatch<G1CMOopClosure>::Table::oop_oop_iterate_bounded<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `ControlFlowOptimizer::delete_empty_blocks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `CodeHeap::search_freelist` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location       |
| ------: | ----: | ------------: | ------: | -------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CodeHeap::allocate` | `libjvm.dylib` |

##### `ProfileCall::visit` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                    | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `NullCheckEliminator::iterate_one`        | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::build_graph_for_intrinsic` | `libjvm.dylib` |

##### `MemAllocator::allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `__ultoa` (`libsystem_c.dylib`)

|  Change | Delta |             % | Samples | Caller       | Location            |
| ------: | ----: | ------------: | ------: | ------------ | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `__vfprintf` | `libsystem_c.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                      | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Matcher::find_shared`                      | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `Node::pinned` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion`       | `libjvm.dylib` |

##### `CProjNode::is_CFG` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `RegionNode::is_unreachable_region`  | `libjvm.dylib` |

##### `TypeInstPtr::make` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeInstPtr::add_offset`        | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeInstPtr::cast_to_exactness` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::remove_speculative_types` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Scheduling::DoScheduling` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -12.5% |    -1 | 88.9% → 100.0% |   8 → 7 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller           | Location                                                                                                |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------- |
| -37.5% |    -3 | 88.9% → 83.3% |   8 → 5 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400 → java.lang.invoke.LambdaForm$MH.0x0000000801089400` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % | Samples | Caller                              | Location                                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------- |
| -20.0% |    -3 | 100.0% | 15 → 12 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400 → java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a1000`)

|  Change | Delta |             % | Samples | Caller                           | Location                                                                                                |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `invoke(Object, Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x00000070010cbc00 → java.lang.invoke.LambdaForm$MH.0x00000008010cb800` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010ab000`                                                     |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `invoke(Object, Object, long)`   | `java.lang.invoke.LambdaForm$MH.0x000000700134b800`                                                     |
|  -25.0% |    -1 | 50.0% → 60.0% |   4 → 3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800 → java.lang.invoke.LambdaForm$MH.0x00000008010a1800` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `invoke(Object, Object, int)`    | `java.lang.invoke.LambdaForm$MH.0x00000070010d2000`                                                     |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |              % | Samples | Caller                                 | Location                                    |
| ------: | ----: | -------------: | ------: | -------------------------------------- | ------------------------------------------- |
|  -33.3% |    -1 | 60.0% → 100.0% |   3 → 2 | `matches(Method, String, Class[])`     | `java.lang.PublicMethods$Key`               |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `equals(Object, Object)`               | `java.util.Objects`                         |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `invokeMethod(Object, String, Object)` | `org.codehaus.groovy.runtime.InvokerHelper` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Caller                                                            | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801031800`)

|  Change | Delta |            % | Samples | Caller                           | Location                                                                                                |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700109b800`                                                     |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`                                                     |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080108e000`                                                     |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800 → java.lang.invoke.LambdaForm$MH.0x00000008010a9800` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080109b400`                                                     |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080161c400`)

|  Change | Delta |            % | Samples | Caller                   | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------ | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070014a5800` |

##### `equals(LambdaFormEditor$TransformKey)` (`java.lang.invoke.LambdaFormEditor$Transform`)

|  Change | Delta |             % | Samples | Caller                                      | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getInCache(LambdaFormEditor$TransformKey)` | `java.lang.invoke.LambdaFormEditor` |

##### `rebind()` (`java.lang.invoke.BoundMethodHandle`)

|  Change | Delta |             % | Samples | Caller                                                                    | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |             % | Samples | Caller                                | Location                                |
| ------: | ----: | ------------: | ------: | ------------------------------------- | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getCachedContext(PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.ATN` |

##### `study(Pattern$TreeInfo)` (`java.util.regex.Pattern$Branch`)

|  Change | Delta |             % | Samples | Caller                    | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `study(Pattern$TreeInfo)` | `java.util.regex.Pattern$Node` |

##### `isNullConversion(Class, Class, boolean)` (`sun.invoke.util.VerifyType`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `valueConversion(Class, Class, boolean, boolean)`                   | `java.lang.invoke.MethodHandleImpl` |

##### `boxInteger(int)` (`sun.invoke.util.ValueConversions`)

| Change | Delta |      % | Samples | Caller                      | Location                                     |
| -----: | ----: | -----: | ------: | --------------------------- | -------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `invokeStatic(Object, int)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `isNullType(Class)` (`sun.invoke.util.VerifyType`)

|  Change | Delta |             % | Samples | Caller                                    | Location                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `isNullConversion(Class, Class, boolean)` | `sun.invoke.util.VerifyType` |

##### `get(Class)` (`java.lang.ClassValue`)

|  Change | Delta |             % | Samples | Caller                | Location                                   |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getClassInfo(Class)` | `org.codehaus.groovy.reflection.ClassInfo` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Native

|  Change | Delta |            % | Samples | Function                                           | Location                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ------------------------- |
|  +76.9% |   +10 |  0.1% → 0.2% | 13 → 23 | `nmethod::new_nmethod`                             | `libjvm.dylib`            |
|  +66.7% |    +8 |         0.1% | 12 → 20 | `GenericWaitBarrier::Cell::wait`                   | `libjvm.dylib`            |
|  +66.7% |    +8 |         0.1% | 12 → 20 | `GenericWaitBarrier::wait`                         | `libjvm.dylib`            |
|  +66.7% |    +8 |         0.1% | 12 → 20 | `SafepointSynchronize::block`                      | `libjvm.dylib`            |
|  +66.7% |    +8 |         0.1% | 12 → 20 | `SafepointMechanism::process`                      | `libjvm.dylib`            |
| +233.3% |    +7 | <0.1% → 0.1% |  3 → 10 | `InstanceKlass::add_dependent_nmethod`             | `libjvm.dylib`            |
|  +31.8% |    +7 |         0.2% | 22 → 29 | `JVM_FillInStackTrace`                             | `libjvm.dylib`            |
|  +31.8% |    +7 |         0.2% | 22 → 29 | `Java_java_lang_Throwable_fillInStackTrace`        | `libjava.dylib`           |
|  +36.8% |    +7 |  0.1% → 0.2% | 19 → 26 | `pthread_jit_write_protect_np`                     | `libsystem_pthread.dylib` |
|  +27.3% |    +6 |         0.2% | 22 → 28 | `java_lang_Throwable::fill_in_stack_trace`         | `libjvm.dylib`            |
| +200.0% |    +6 | <0.1% → 0.1% |   3 → 9 | `SharedRuntime::resolve_sub_helper`                | `libjvm.dylib`            |
| +200.0% |    +6 | <0.1% → 0.1% |   3 → 9 | `SharedRuntime::resolve_helper`                    | `libjvm.dylib`            |
| +200.0% |    +6 | <0.1% → 0.1% |   3 → 9 | `ThreadCritical::ThreadCritical`                   | `libjvm.dylib`            |
|     new |    +6 | 0.0% → <0.1% |   0 → 6 | `KlassCleaningTask::work`                          | `libjvm.dylib`            |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `DependencyContext::add_dependent_nmethod`         | `libjvm.dylib`            |
|  +23.8% |    +5 |  0.1% → 0.2% | 21 → 26 | `JVM_NewArray`                                     | `libjvm.dylib`            |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `SharedRuntime::resolve_static_call_C`             | `libjvm.dylib`            |
| +250.0% |    +5 | <0.1% → 0.1% |   2 → 7 | `resolve_static_call`                              | `<unknown>`               |
|     new |    +5 | 0.0% → <0.1% |   0 → 5 | `nmethod::is_unloading`                            | `libjvm.dylib`            |
|  +40.0% |    +4 |         0.1% | 10 → 14 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib`            |

##### Compiler

|  Change | Delta |            % |   Samples | Function                                                           | Location       |
| ------: | ----: | -----------: | --------: | ------------------------------------------------------------------ | -------------- |
| +233.3% |   +14 | <0.1% → 0.1% |    6 → 20 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib` |
|   +5.1% |   +13 |  1.8% → 1.9% | 254 → 267 | `Compile::Code_Gen`                                                | `libjvm.dylib` |
|  +57.9% |   +11 |  0.1% → 0.2% |   19 → 30 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  +73.3% |   +11 |  0.1% → 0.2% |   15 → 26 | `ciEnv::register_method`                                           | `libjvm.dylib` |
|  +42.1% |    +8 |  0.1% → 0.2% |   19 → 27 | `PhaseIdealLoop::build_loop_late_post_work`                        | `libjvm.dylib` |
| +114.3% |    +8 | <0.1% → 0.1% |    7 → 15 | `PhaseOutput::fill_buffer`                                         | `libjvm.dylib` |
| +800.0% |    +8 | <0.1% → 0.1% |     1 → 9 | `LoadNode::Ideal`                                                  | `libjvm.dylib` |
|  +24.1% |    +7 |  0.2% → 0.3% |   29 → 36 | `Matcher::xform`                                                   | `libjvm.dylib` |
|  +36.8% |    +7 |  0.1% → 0.2% |   19 → 26 | `Node::dominates`                                                  | `libjvm.dylib` |
|  +36.8% |    +7 |  0.1% → 0.2% |   19 → 26 | `MemNode::all_controls_dominate`                                   | `libjvm.dylib` |
|  +87.5% |    +7 |         0.1% |    8 → 15 | `Matcher::match_tree`                                              | `libjvm.dylib` |
|  +20.7% |    +6 |  0.2% → 0.3% |   29 → 35 | `PhaseOutput::Output`                                              | `libjvm.dylib` |
|  +24.0% |    +6 |         0.2% |   25 → 31 | `PhaseIdealLoop::build_loop_late`                                  | `libjvm.dylib` |
| +100.0% |    +6 | <0.1% → 0.1% |    6 → 12 | `PhaseOutput::BuildOopMaps`                                        | `libjvm.dylib` |
|     new |    +6 | 0.0% → <0.1% |     0 → 6 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| +100.0% |    +5 | <0.1% → 0.1% |    5 → 10 | `PhaseAggressiveCoalesce::insert_copies`                           | `libjvm.dylib` |
| +166.7% |    +5 | <0.1% → 0.1% |     3 → 8 | `PhaseOutput::install_code`                                        | `libjvm.dylib` |
| +500.0% |    +5 |        <0.1% |     1 → 6 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib` |
|   +5.8% |    +4 |         0.5% |   69 → 73 | `PhaseIterGVN::transform_old`                                      | `libjvm.dylib` |
|   +2.8% |    +4 |  1.0% → 1.1% | 145 → 149 | `PhaseChaitin::Register_Allocate`                                  | `libjvm.dylib` |

##### Standard library

|    Change | Delta |            % |   Samples | Function                                         | Location                                                                                                |
| --------: | ----: | -----------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| +22500.0% |  +450 | <0.1% → 3.3% |   2 → 452 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001018400 → java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
|  +2535.3% |  +431 |  0.1% → 3.2% |  17 → 448 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400 → java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|  +2047.6% |  +430 |  0.1% → 3.2% |  21 → 451 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001120800 → java.lang.invoke.LambdaForm$MH.0x00000008010c7000` |
|  +1570.4% |  +424 |  0.2% → 3.2% |  27 → 451 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001121c00 → java.lang.invoke.LambdaForm$MH.0x00000008010c6400` |
| +20850.0% |  +417 | <0.1% → 3.0% |   2 → 419 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001108800 → java.lang.invoke.LambdaForm$MH.0x0000000801282400` |
|   +742.0% |  +371 |  0.4% → 3.0% |  50 → 421 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012bbc00 → java.lang.invoke.LambdaForm$MH.0x0000000801288c00` |
| +36900.0% |  +369 | <0.1% → 2.7% |   1 → 370 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000700150a000 → java.lang.invoke.LambdaForm$MH.0x000000080159fc00` |
| +12166.7% |  +365 | <0.1% → 2.6% |   3 → 368 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001098c00 → java.lang.invoke.LambdaForm$MH.0x00000008015a2800` |
| +12166.7% |  +365 | <0.1% → 2.6% |   3 → 368 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001408000 → java.lang.invoke.LambdaForm$MH.0x00000008015a2c00` |
| +35300.0% |  +353 | <0.1% → 2.5% |   1 → 354 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070013c3000 → java.lang.invoke.LambdaForm$MH.0x000000080126a400` |
| +33800.0% |  +338 | <0.1% → 2.4% |   1 → 339 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070014a2c00 → java.lang.invoke.LambdaForm$MH.0x000000080163a000` |
| +16850.0% |  +337 | <0.1% → 2.4% |   2 → 339 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070014fcc00 → java.lang.invoke.LambdaForm$MH.0x000000080163a800` |
| +16850.0% |  +337 | <0.1% → 2.4% |   2 → 339 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001354800 → java.lang.invoke.LambdaForm$MH.0x000000080163ac00` |
|  +1490.0% |  +298 |  0.1% → 2.3% |  20 → 318 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00 → java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
|  +1743.8% |  +279 |  0.1% → 2.1% |  16 → 295 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001130c00 → java.lang.invoke.LambdaForm$MH.0x0000000801369c00` |
| +27900.0% |  +279 | <0.1% → 2.0% |   1 → 280 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700146b800 → java.lang.invoke.LambdaForm$MH.0x00000008017d1c00` |
|  +4616.7% |  +277 | <0.1% → 2.0% |   6 → 283 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001130800 → java.lang.invoke.LambdaForm$MH.0x0000000801360800` |
|   +185.4% |  +191 |  0.7% → 2.1% | 103 → 294 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c7c00 → java.lang.invoke.LambdaForm$MH.0x00000008010d4800` |
| +14600.0% |  +146 | <0.1% → 1.1% |   1 → 147 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001391400 → java.lang.invoke.LambdaForm$MH.0x0000000801291000` |
|  +1450.0% |  +116 |  0.1% → 0.9% |   8 → 124 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700138b800 → java.lang.invoke.LambdaForm$MH.0x0000000801290000` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |            % |         Samples | Function                                         | Location                                                                                                |
| -----: | ----: | -----------: | --------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| -99.8% |  -455 | 3.2% → <0.1% |         456 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000 → java.lang.invoke.LambdaForm$MH.0x0000000801104800` |
| -99.8% |  -452 | 3.2% → <0.1% |         453 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000 → java.lang.invoke.LambdaForm$MH.0x0000000801115800` |
| -94.5% |  -431 |  3.2% → 0.2% |        456 → 25 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800 → java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
| -99.8% |  -423 | 3.0% → <0.1% |         424 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b1000 → java.lang.invoke.LambdaForm$MH.0x00000008011eb400` |
| -87.7% |  -391 |  3.2% → 0.4% |        446 → 55 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000 → java.lang.invoke.LambdaForm$MH.0x00000008010d9c00` |
| -88.9% |  -385 |  3.1% → 0.3% |        433 → 48 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b3400 → java.lang.invoke.LambdaForm$MH.0x000000080128d000` |
| -99.2% |  -371 | 2.6% → <0.1% |         374 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015c7400 → java.lang.invoke.LambdaForm$MH.0x00000008014b5000` |
| -99.5% |  -370 | 2.6% → <0.1% |         372 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015ca400 → java.lang.invoke.LambdaForm$MH.0x0000000801413000` |
| -99.5% |  -370 | 2.6% → <0.1% |         372 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015ca000 → java.lang.invoke.LambdaForm$MH.0x000000080156fc00` |
| -99.4% |  -346 | 2.5% → <0.1% |         348 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012a9400 → java.lang.invoke.LambdaForm$MH.0x00000008011eb000` |
| -99.7% |  -341 | 2.4% → <0.1% |         342 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001667400 → java.lang.invoke.LambdaForm$MH.0x00000008015a7000` |
| -99.7% |  -341 | 2.4% → <0.1% |         342 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001667c00 → java.lang.invoke.LambdaForm$MH.0x00000008015a6400` |
| -98.0% |  -335 |  2.4% → 0.1% |         342 → 7 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001668000 → java.lang.invoke.LambdaForm$MH.0x00000008014d2c00` |
| -99.0% |  -292 | 2.1% → <0.1% |         295 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00 → java.lang.invoke.LambdaForm$MH.0x0000000801018400` |
| -99.6% |  -277 | 2.0% → <0.1% |         278 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017ea000 → java.lang.invoke.LambdaForm$MH.0x00000008016ef400` |
| -98.6% |  -276 | 2.0% → <0.1% |         280 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00 → java.lang.invoke.LambdaForm$MH.0x00000008010d5000` |
| -83.0% |  -229 |  2.0% → 0.3% |        276 → 47 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001399400 → java.lang.invoke.LambdaForm$MH.0x0000000801314400` |
| -82.7% |  -224 |  1.9% → 0.3% |        271 → 47 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001391000 → java.lang.invoke.LambdaForm$MH.0x0000000801314c00` |
|  -1.8% |  -210 |        83.5% | 11,813 → 11,603 | `_pthread_start`                                 | `libsystem_pthread.dylib`                                                                               |
|  -1.8% |  -210 |        83.5% | 11,813 → 11,603 | `thread_start`                                   | `libsystem_pthread.dylib`                                                                               |

##### Native

| Change | Delta |             % |         Samples | Function                                | Location                  |
| -----: | ----: | ------------: | --------------: | --------------------------------------- | ------------------------- |
|  -1.8% |  -210 |         83.5% | 11,813 → 11,603 | `_pthread_start`                        | `libsystem_pthread.dylib` |
|  -1.8% |  -210 |         83.5% | 11,813 → 11,603 | `thread_start`                          | `libsystem_pthread.dylib` |
|  -1.8% |  -203 |         80.2% | 11,346 → 11,143 | `Thread::call_run`                      | `libjvm.dylib`            |
|  -1.8% |  -203 |         80.2% | 11,346 → 11,143 | `thread_native_entry`                   | `libjvm.dylib`            |
|  -1.8% |  -119 |         46.0% |   6,509 → 6,390 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
|  -2.0% |  -100 | 36.2% → 36.1% |   5,116 → 5,016 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
|  -2.4% |   -93 | 27.9% → 27.8% |   3,951 → 3,858 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
|  -1.5% |   -76 | 35.8% → 35.9% |   5,066 → 4,990 | `WorkerThread::run`                     | `libjvm.dylib`            |
|  -1.3% |   -70 | 39.0% → 39.2% |   5,519 → 5,449 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
|  -1.8% |   -67 |         26.2% |   3,706 → 3,639 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
|  -2.3% |   -33 |  10.0% → 9.9% |   1,410 → 1,377 | `Monitor::wait`                         | `libjvm.dylib`            |
|  -1.4% |   -20 |          9.9% |   1,397 → 1,377 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  -1.5% |   -14 |          6.6% |       932 → 918 | `JLI_Launch`                            | `libjli.dylib`            |
|  -1.5% |   -14 |          6.6% |       932 → 918 | `main`                                  | `java`                    |
| -14.7% |   -11 |          0.5% |         75 → 64 | `Parse::do_call`                        | `libjvm.dylib`            |
| -25.6% |   -10 |   0.3% → 0.2% |         39 → 29 | `IRScope::IRScope`                      | `libjvm.dylib`            |
| -25.6% |   -10 |   0.3% → 0.2% |         39 → 29 | `IR::IR`                                | `libjvm.dylib`            |
|  -7.7% |   -10 |          0.9% |       130 → 120 | `Compiler::compile_method`              | `libjvm.dylib`            |
| -38.1% |    -8 |          0.1% |         21 → 13 | `G1EvacuateRegionsBaseTask::work`       | `libjvm.dylib`            |
| -10.5% |    -8 |          0.5% |         76 → 68 | `Parse::do_one_block`                   | `libjvm.dylib`            |

##### Compiler

| Change | Delta |             % |       Samples | Function                                    | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------------------- | -------------- |
|  -3.6% |   -58 | 11.5% → 11.3% | 1,622 → 1,564 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  -4.4% |   -30 |   4.8% → 4.7% |     684 → 654 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  -3.0% |   -28 |   6.6% → 6.5% |     938 → 910 | `CompileQueue::get`                         | `libjvm.dylib` |
|  -9.6% |   -21 |   1.5% → 1.4% |     218 → 197 | `Compile::Optimize`                         | `libjvm.dylib` |
|  -3.3% |   -18 |   3.9% → 3.8% |     550 → 532 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| -15.3% |   -18 |   0.8% → 0.7% |     118 → 100 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  -3.1% |   -17 |   3.9% → 3.8% |     549 → 532 | `Compile::Compile`                          | `libjvm.dylib` |
| -66.7% |   -14 |          0.1% |        21 → 7 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| -73.7% |   -14 |  0.1% → <0.1% |        19 → 5 | `ConnectionGraph::do_analysis`              | `libjvm.dylib` |
| -72.2% |   -13 |  0.1% → <0.1% |        18 → 5 | `ConnectionGraph::compute_escape`           | `libjvm.dylib` |
| -14.1% |   -12 |   0.6% → 0.5% |       85 → 73 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
| -14.1% |   -12 |   0.6% → 0.5% |       85 → 73 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
| -24.0% |   -12 |   0.4% → 0.3% |       50 → 38 | `Compile::optimize_loops`                   | `libjvm.dylib` |
| -48.0% |   -12 |   0.2% → 0.1% |       25 → 13 | `PhaseIdealLoop::split_if_with_blocks`      | `libjvm.dylib` |
| -31.6% |   -12 |   0.3% → 0.2% |       38 → 26 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| -37.5% |   -12 |   0.2% → 0.1% |       32 → 20 | `GraphBuilder::try_inline`                  | `libjvm.dylib` |
| -28.9% |   -11 |   0.3% → 0.2% |       38 → 27 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
| -21.6% |   -11 |   0.4% → 0.3% |       51 → 40 | `Compilation::build_hir`                    | `libjvm.dylib` |
| -32.4% |   -11 |          0.2% |       34 → 23 | `GraphBuilder::invoke`                      | `libjvm.dylib` |
| -35.5% |   -11 |   0.2% → 0.1% |       31 → 20 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |

##### Standard library

| Change | Delta |            % |  Samples | Function                                         | Location                                                                                                |
| -----: | ----: | -----------: | -------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| -99.8% |  -455 | 3.2% → <0.1% |  456 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000 → java.lang.invoke.LambdaForm$MH.0x0000000801104800` |
| -99.8% |  -452 | 3.2% → <0.1% |  453 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000 → java.lang.invoke.LambdaForm$MH.0x0000000801115800` |
| -94.5% |  -431 |  3.2% → 0.2% | 456 → 25 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800 → java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
| -99.8% |  -423 | 3.0% → <0.1% |  424 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012b1000 → java.lang.invoke.LambdaForm$MH.0x00000008011eb400` |
| -87.7% |  -391 |  3.2% → 0.4% | 446 → 55 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010d5000 → java.lang.invoke.LambdaForm$MH.0x00000008010d9c00` |
| -88.9% |  -385 |  3.1% → 0.3% | 433 → 48 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b3400 → java.lang.invoke.LambdaForm$MH.0x000000080128d000` |
| -99.2% |  -371 | 2.6% → <0.1% |  374 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070015c7400 → java.lang.invoke.LambdaForm$MH.0x00000008014b5000` |
| -99.5% |  -370 | 2.6% → <0.1% |  372 → 2 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070015ca400 → java.lang.invoke.LambdaForm$MH.0x0000000801413000` |
| -99.5% |  -370 | 2.6% → <0.1% |  372 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070015ca000 → java.lang.invoke.LambdaForm$MH.0x000000080156fc00` |
| -99.4% |  -346 | 2.5% → <0.1% |  348 → 2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012a9400 → java.lang.invoke.LambdaForm$MH.0x00000008011eb000` |
| -99.7% |  -341 | 2.4% → <0.1% |  342 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001667400 → java.lang.invoke.LambdaForm$MH.0x00000008015a7000` |
| -99.7% |  -341 | 2.4% → <0.1% |  342 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001667c00 → java.lang.invoke.LambdaForm$MH.0x00000008015a6400` |
| -98.0% |  -335 |  2.4% → 0.1% |  342 → 7 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001668000 → java.lang.invoke.LambdaForm$MH.0x00000008014d2c00` |
| -99.0% |  -292 | 2.1% → <0.1% |  295 → 3 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00 → java.lang.invoke.LambdaForm$MH.0x0000000801018400` |
| -99.6% |  -277 | 2.0% → <0.1% |  278 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070017ea000 → java.lang.invoke.LambdaForm$MH.0x00000008016ef400` |
| -98.6% |  -276 | 2.0% → <0.1% |  280 → 4 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00 → java.lang.invoke.LambdaForm$MH.0x00000008010d5000` |
| -83.0% |  -229 |  2.0% → 0.3% | 276 → 47 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001399400 → java.lang.invoke.LambdaForm$MH.0x0000000801314400` |
| -82.7% |  -224 |  1.9% → 0.3% | 271 → 47 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001391000 → java.lang.invoke.LambdaForm$MH.0x0000000801314c00` |
| -99.3% |  -152 | 1.1% → <0.1% |  153 → 1 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012bcc00 → java.lang.invoke.LambdaForm$MH.0x0000000801180000` |
| -92.0% |   -46 | 0.4% → <0.1% |   50 → 4 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070012ba400 → java.lang.invoke.LambdaForm$MH.0x00000008010c9000` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080108e000`)

|  Change | Delta |             % | Samples | Callee                                                                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +451 |  0.0% → 99.8% | 0 → 451 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|     new |   +17 |   0.0% → 3.8% |  0 → 17 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`  |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `newInvokeSpecial(Object)`                                                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |   0.0% → 0.2% |   0 → 1 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080102b000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +448 | 0.0% → 100.0% | 0 → 448 | `invokeVirtual(Object, Object)`                                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -15 |  88.2% → 0.0% |  15 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -2 |  11.8% → 0.0% |   2 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|     new |    +1 |   0.0% → 0.2% |   0 → 1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7000`)

|   Change | Delta |              % |  Samples | Callee                             | Location                                                                                                |
| -------: | ----: | -------------: | -------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +2552.9% |  +434 | 81.0% → 100.0% | 17 → 451 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
| +2325.0% |   +93 |  19.0% → 21.5% |   4 → 97 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c6400`)

|    Change | Delta |             % | Samples | Callee                                    | Location                                             |
| --------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| +45000.0% |  +450 | 3.7% → 100.0% | 1 → 451 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   removed |   -23 |  85.2% → 0.0% |  23 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
|   removed |    -3 |  11.1% → 0.0% |   3 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801282400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |  +419 | 0.0% → 100.0% | 0 → 419 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801188800` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801288c00`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +421 | 0.0% → 100.0% | 0 → 421 | `invoke(Object, Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800`  |
| removed |   -50 | 100.0% → 0.0% |  50 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011c9400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080159fc00`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new |  +370 | 0.0% → 100.0% | 0 → 370 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008015a2800`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
|     new |  +368 | 0.0% → 100.0% | 0 → 368 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object)`             | `java.lang.invoke.DirectMethodHandle$Holder`     |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008015a2c00`)

|    Change | Delta |      % | Samples | Callee                                                  | Location                                                                                                  |
| --------: | ----: | -----: | ------: | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +12166.7% |  +365 | 100.0% | 3 → 368 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011c9400 → java.lang.invoke.LambdaForm$DMH.0x000000080118a000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080126a400`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------------- |
|     new |  +354 | 0.0% → 100.0% | 0 → 354 | `reinvoke(Object, Object, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x0000000801188800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700141a800` |
|     new |    +1 |   0.0% → 0.3% |   0 → 1 | `delegate(Object, Object, Object, Object)`              | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080163a000`)

| Change | Delta |             % | Samples | Callee                             | Location                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
|    new |  +339 | 0.0% → 100.0% | 0 → 339 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080163a800`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |  +339 | 0.0% → 100.0% | 0 → 339 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`           | `java.lang.invoke.LambdaForm$MH.0x00000070010ab000` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080163ac00`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new |  +339 | 0.0% → 100.0% | 0 → 339 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010abc00`)

|  Change | Delta |            % | Samples | Callee                             | Location                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------- | --------------------------------------------------- |
|     new |  +314 | 0.0% → 98.7% | 0 → 314 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
| removed |   -17 | 85.0% → 0.0% |  17 → 0 | `reinvoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|     new |    +7 |  0.0% → 2.2% |   0 → 7 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -3 | 15.0% → 0.0% |   3 → 0 | `delegate(Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801369c00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +295 | 0.0% → 100.0% | 0 → 295 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| removed |   -12 |  75.0% → 0.0% |  12 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001030400` |
| removed |    -3 |  18.8% → 0.0% |   3 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, Object)`                                                   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008017d1c00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +280 | 0.0% → 100.0% | 0 → 280 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801360800`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new |  +283 | 0.0% → 100.0% | 0 → 283 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `invokeStatic(Object, Object)`          | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010d4800`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
|     new |  +294 | 0.0% → 100.0% | 0 → 294 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800`  |
| removed |  -103 | 100.0% → 0.0% | 103 → 0 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -4 |   3.9% → 0.0% |   4 → 0 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801291000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +89 |  0.0% → 60.5% |  0 → 89 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +59 |  0.0% → 40.1% |  0 → 59 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801188800` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801290000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +82 |  0.0% → 66.1% |  0 → 82 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +52 |  0.0% → 41.9% |  0 → 52 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801188800` |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `delegate(Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `nmethod::new_nmethod` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------- |
| +233.3% |    +7 | 23.1% → 43.5% |  3 → 10 | `InstanceKlass::add_dependent_nmethod` | `libjvm.dylib`            |
|  +42.9% |    +3 | 53.8% → 43.5% |  7 → 10 | `nmethod::nmethod`                     | `libjvm.dylib`            |
| removed |    -3 |  23.1% → 0.0% |   3 → 0 | `CodeCache::allocate`                  | `libjvm.dylib`            |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `CodeBuffer::finalize_oop_references`  | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 4.3% |   0 → 1 | `_pthread_mutex_firstfit_unlock_slow`  | `libsystem_pthread.dylib` |

##### `GenericWaitBarrier::Cell::wait` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                | Location                 |
| -----: | ----: | -----: | ------: | --------------------- | ------------------------ |
| +66.7% |    +8 | 100.0% | 12 → 20 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

##### `GenericWaitBarrier::wait` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `SafepointSynchronize::block` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `GenericWaitBarrier::wait` | `libjvm.dylib` |

##### `SafepointMechanism::process` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `SafepointSynchronize::block` | `libjvm.dylib` |

##### `InstanceKlass::add_dependent_nmethod` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                     | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| +166.7% |    +5 | 100.0% → 80.0% |   3 → 8 | `DependencyContext::add_dependent_nmethod` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 20.0% |   0 → 2 | `nmethodBucket::next_not_unloading`        | `libjvm.dylib` |

##### `JVM_FillInStackTrace` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                     | Location                  |
| -----: | ----: | -------------: | ------: | ------------------------------------------ | ------------------------- |
| +27.3% |    +6 | 100.0% → 96.6% | 22 → 28 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`            |
|    new |    +1 |    0.0% → 3.4% |   0 → 1 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib` |

##### `Java_java_lang_Throwable_fillInStackTrace` (`libjava.dylib`)

| Change | Delta |      % | Samples | Callee                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| +31.8% |    +7 | 100.0% | 22 → 29 | `JVM_FillInStackTrace` | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                     | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------ | -------------- |
| +22.7% |    +5 | 100.0% → 96.4% | 22 → 27 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |
| -57.1% |    -4 |  31.8% → 10.7% |   7 → 3 | `BacktraceBuilder::push`                   | `libjvm.dylib` |
|    new |    +2 |    0.0% → 7.1% |   0 → 2 | `frame::sender_raw`                        | `libjvm.dylib` |
| +50.0% |    +1 |   9.1% → 10.7% |   2 → 3 | `BacktraceBuilder::expand`                 | `libjvm.dylib` |
| +50.0% |    +1 |   9.1% → 10.7% |   2 → 3 | `frame::sender_for_compiled_frame`         | `libjvm.dylib` |

##### `SharedRuntime::resolve_sub_helper` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------------------- |
| +200.0% |    +2 |         33.3% |   1 → 3 | `SharedRuntime::resolve_sub_helper_internal` | `libjvm.dylib`             |
| +100.0% |    +2 | 66.7% → 44.4% |   2 → 4 | `SharedRuntime::find_callee_info_helper`     | `libjvm.dylib`             |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `InlineCacheBuffer::refill_ic_stubs`         | `libjvm.dylib`             |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `sys_icache_invalidate`                      | `libsystem_platform.dylib` |

##### `SharedRuntime::resolve_helper` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                              | Location       |
| ------: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                              | Location                  |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------------- |
| +350.0% |    +7 | 66.7% → 100.0% |   2 → 9 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `pthread_mutex_lock`                | `libsystem_pthread.dylib` |

##### `KlassCleaningTask::work` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `InstanceKlass::clean_weak_instanceklass_links`       | `libjvm.dylib` |
|    new |    +3 | 0.0% → 50.0% |   0 → 3 | `ClassLoaderDataGraphKlassIteratorAtomic::next_klass` | `libjvm.dylib` |

##### `DependencyContext::add_dependent_nmethod` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +4 |  0.0% → 50.0% |   0 → 4 | `nmethod::is_unloading`             | `libjvm.dylib` |
| +50.0% |    +1 | 66.7% → 37.5% |   2 → 3 | `nmethodBucket::next_not_unloading` | `libjvm.dylib` |

##### `JVM_NewArray` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                             | Location                  |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------- |
| +58.3% |    +7 | 57.1% → 73.1% | 12 → 19 | `pthread_jit_write_protect_np`     | `libsystem_pthread.dylib` |
| -66.7% |    -2 |  14.3% → 3.8% |   3 → 1 | `Reflection::reflect_new_array`    | `libjvm.dylib`            |
| -25.0% |    -1 | 19.0% → 11.5% |   4 → 3 | `InstanceKlass::allocate_objArray` | `libjvm.dylib`            |

##### `SharedRuntime::resolve_static_call_C` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                          | Location                  |
| ------: | ----: | -------------: | ------: | ------------------------------- | ------------------------- |
| +600.0% |    +6 | 50.0% → 100.0% |   1 → 7 | `SharedRuntime::resolve_helper` | `libjvm.dylib`            |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `pthread_jit_write_protect_np`  | `libsystem_pthread.dylib` |

##### `resolve_static_call` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                 | Location       |
| ------: | ----: | -----: | ------: | -------------------------------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `SharedRuntime::resolve_static_call_C` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::concurrent_mark_cycle_do` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
| +50.0% |    +2 | 40.0% → 42.9% |   4 → 6 | `G1ConcurrentMarkThread::phase_rebuild_and_scrub` | `libjvm.dylib` |
| +33.3% |    +2 | 60.0% → 57.1% |   6 → 8 | `G1ConcurrentMarkThread::phase_mark_loop`         | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| +300.0% |    +3 | 16.7% → 20.0% |   1 → 4 | `RegMask::is_misaligned_pair`  | `libjvm.dylib` |
|     new |    +3 |  0.0% → 15.0% |   0 → 3 | `RegMask::is_bound`            | `libjvm.dylib` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `MachNode::ideal_reg`          | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `RegMask::is_vector`           | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `MachCallJavaNode::in_RegMask` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                            | Location       |
| ------: | ----: | ------------: | --------: | --------------------------------- | -------------- |
|  +20.7% |    +6 | 11.4% → 13.1% |   29 → 35 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  -17.9% |    -5 |  11.0% → 8.6% |   28 → 23 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| +166.7% |    +5 |   1.2% → 3.0% |     3 → 8 | `PhaseOutput::install_code`       | `libjvm.dylib` |
|   +2.8% |    +4 | 57.1% → 55.8% | 145 → 149 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|     new |    +2 |   0.0% → 0.7% |     0 → 2 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                             | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | -------------- |
|     new |    +6 |  0.0% → 20.0% |   0 → 6 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| +200.0% |    +4 | 10.5% → 20.0% |   2 → 6 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|     new |    +2 |   0.0% → 6.7% |   0 → 2 | `MachNode::rematerialize`                                          | `libjvm.dylib` |
| +100.0% |    +1 |   5.3% → 6.7% |   1 → 2 | `PhaseChaitin::compute_initial_block_pressure`                     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.3% |   0 → 1 | `Node::rematerialize`                                              | `libjvm.dylib` |

##### `ciEnv::register_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------- |
|  +76.9% |   +10 | 86.7% → 88.5% | 13 → 23 | `nmethod::new_nmethod`                | `libjvm.dylib`            |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `Mutex::lock`                         | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `SafepointMechanism::process`         | `libjvm.dylib`            |
|     new |    +1 |   0.0% → 3.8% |   0 → 1 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location                   |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------------------- |
| +500.0% |    +5 |  5.3% → 22.2% |   1 → 6 | `PhaseIdealLoop::compute_lca_of_uses`         | `libjvm.dylib`             |
|  +66.7% |    +4 | 31.6% → 37.0% |  6 → 10 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib`             |
|     new |    +2 |   0.0% → 7.4% |   0 → 2 | `ProjNode::is_uncommon_trap_proj`             | `libjvm.dylib`             |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `Node::unique_ctrl_out_or_null`               | `libjvm.dylib`             |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `_platform_memset`                            | `libsystem_platform.dylib` |

##### `PhaseOutput::fill_buffer` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| +400.0% |    +4 | 14.3% → 33.3% |   1 → 5 | `PhaseOutput::Process_OopMap_Node`        | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `encodeHeapOopNode::emit`                 | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `CallStaticJavaDirectNode::emit`          | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `NonSafepointEmitter::emit_non_safepoint` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `branchConUNode::ideal_Opcode`            | `libjvm.dylib` |

##### `LoadNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                         | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------- |
| +400.0% |    +4 | 100.0% → 55.6% |   1 → 5 | `MemNode::find_previous_store` | `libjvm.dylib` |
|     new |    +4 |   0.0% → 44.4% |   0 → 4 | `MemNode::Ideal_common`        | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|  +87.5% |    +7 | 27.6% → 41.7% |  8 → 15 | `Matcher::match_tree` | `libjvm.dylib` |
|   +6.3% |    +1 | 55.2% → 47.2% | 16 → 17 | `Arena::contains`     | `libjvm.dylib` |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `Matcher::match_sfpt` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.8% |   0 → 1 | `Node::jvms`          | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

| Change | Delta |           % | Samples | Callee       | Location       |
| -----: | ----: | ----------: | ------: | ------------ | -------------- |
|    new |    +1 | 0.0% → 3.8% |   0 → 1 | `stub:bzero` | `libjvm.dylib` |

##### `MemNode::all_controls_dominate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee            | Location       |
| -----: | ----: | -----: | ------: | ----------------- | -------------- |
| +36.8% |    +7 | 100.0% | 19 → 26 | `Node::dominates` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location                   |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------- |
|  +75.0% |    +3 | 50.0% → 46.7% |   4 → 7 | `Matcher::Label_Root` | `libjvm.dylib`             |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `State::DFA`          | `libjvm.dylib`             |
| +100.0% |    +1 | 12.5% → 13.3% |   1 → 2 | `Chunk::next_chop`    | `libjvm.dylib`             |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `StoreINode::Opcode`  | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `_platform_memset`    | `libsystem_platform.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +114.3% |    +8 | 24.1% → 42.9% |  7 → 15 | `PhaseOutput::fill_buffer`              | `libjvm.dylib` |
| +100.0% |    +6 | 20.7% → 34.3% |  6 → 12 | `PhaseOutput::BuildOopMaps`             | `libjvm.dylib` |
|  -42.9% |    -3 | 24.1% → 11.4% |   7 → 4 | `Scheduling::DoScheduling`              | `libjvm.dylib` |
|  -60.0% |    -3 |  17.2% → 5.7% |   5 → 2 | `PhaseOutput::shorten_branches`         | `libjvm.dylib` |
| removed |    -2 |   6.9% → 0.0% |   2 → 0 | `PhaseOutput::init_scratch_buffer_blob` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  +50.0% |    +9 | 72.0% → 87.1% | 18 → 27 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `Node::is_CFG`                              | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                   | Location       |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------- |
|    new |    +2 | 0.0% → 16.7% |   0 → 2 | `OopFlow::compute_reach` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 8.3% |   0 → 1 | `Dict::Insert`           | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `RegMask::smear_to_sets`             | `libjvm.dylib` |

##### `PhaseOutput::install_code` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `ciEnv::register_method` | `libjvm.dylib` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                               | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------- | -------------- |
| +400.0% |    +4 | 100.0% → 83.3% |   1 → 5 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| +600.0% |    +6 |   1.4% → 9.6% |   1 → 7 | `LoadNode::Ideal`            | `libjvm.dylib` |
|  +26.7% |    +4 | 21.7% → 26.0% | 15 → 19 | `StoreNode::Ideal`           | `libjvm.dylib` |
|  -42.9% |    -3 |  10.1% → 5.5% |   7 → 4 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
|  +25.0% |    +3 | 17.4% → 20.5% | 12 → 15 | `PhaseIterGVN::subsume_node` | `libjvm.dylib` |
|  -66.7% |    -2 |   4.3% → 1.4% |   3 → 1 | `CallStaticJavaNode::Ideal`  | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| +233.3% |   +14 |  4.1% → 13.4% |  6 → 20 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
|  +57.9% |   +11 | 13.1% → 20.1% | 19 → 30 | `PhaseChaitin::build_ifg_physical`       | `libjvm.dylib` |
|  -77.8% |    -7 |   6.2% → 1.3% |   9 → 2 | `PhaseIFG::SquareUp`                     | `libjvm.dylib` |
| +100.0% |    +5 |   3.4% → 6.7% |  5 → 10 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  -80.0% |    -4 |   3.4% → 0.7% |   5 → 1 | `PhaseCoalesce::coalesce_driver`         | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801104800`)

|  Change | Delta |             % | Samples | Callee                                                                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -455 |  99.8% → 0.0% | 455 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |   -16 |   3.5% → 0.0% |  16 → 0 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
| removed |    -1 |   0.2% → 0.0% |   1 → 0 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `reinvoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010aa800`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801115800`)

|  Change | Delta |             % | Samples | Callee                          | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------- | ---------------------------------------------------- |
| removed |  -453 | 100.0% → 0.0% | 453 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -2 |   0.4% → 0.0% |   2 → 0 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801105000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7400`)

| Change | Delta |              % | Samples | Callee                                    | Location                                             |
| -----: | ----: | -------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| -99.3% |  -453 | 100.0% → 12.0% | 456 → 3 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|    new |   +21 |   0.0% → 84.0% |  0 → 21 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801084000` |
|    new |    +6 |   0.0% → 24.0% |   0 → 6 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801125000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008011eb400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -424 | 100.0% → 0.0% | 424 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000070011c5c00`  |
| removed |    -1 |   0.2% → 0.0% |   1 → 0 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010d9c00`)

|  Change | Delta |           % |  Samples | Callee                             | Location                                                                                                |
| ------: | ----: | ----------: | -------: | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -87.7% |  -391 |      100.0% | 446 → 55 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800 → java.lang.invoke.LambdaForm$MH.0x00000008010aa800` |
| removed |   -18 | 4.0% → 0.0% |   18 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080128d000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -433 | 100.0% → 0.0% | 433 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |   +48 | 0.0% → 100.0% |  0 → 48 | `invokeSpecial(Object, Object, Object, Object, Object)`                                     | `java.lang.invoke.LambdaForm$DMH.0x000000080118a000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008014b5000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |  -374 | 100.0% → 0.0% | 374 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801413000`)

|  Change | Delta |             % | Samples | Callee                                                  | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -372 | 100.0% → 0.0% | 372 → 0 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070011c9400` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080156fc00`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------------ |
| removed |  -372 | 100.0% → 0.0% | 372 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `delegate(Object, Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008011eb000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -348 | 100.0% → 0.0% | 348 → 0 | `reinvoke(Object, Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x00000070011c5c00`  |
| removed |    -2 |   0.6% → 0.0% |   2 → 0 | `delegate(Object, Object, Object, Object)`                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008015a7000`)

|  Change | Delta |             % | Samples | Callee                             | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed |  -342 | 100.0% → 0.0% | 342 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008015a6400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |  -342 | 100.0% → 0.0% | 342 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008014d2c00`)

| Change | Delta |      % | Samples | Callee                                          | Location                                     |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| -98.0% |  -335 | 100.0% | 342 → 7 | `invokeSpecial(Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801018400`)

|  Change | Delta |             % | Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------- |
| removed |  -293 |  99.3% → 0.0% | 293 → 0 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
| removed |    -6 |   2.0% → 0.0% |   6 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `newInvokeSpecial(Object)`         | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008016ef400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------ |
| removed |  -278 | 100.0% → 0.0% | 278 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `delegate(Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010d5000`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| removed |  -280 | 100.0% → 0.0% | 280 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00`  |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `invokeVirtual(Object, Object, Object)`  | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `invokeSpecial(Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x0000000801084000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801314400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -276 | 100.0% → 0.0% | 276 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |   +47 | 0.0% → 100.0% |  0 → 47 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801314c00`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -271 | 100.0% → 0.0% | 271 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +47 | 0.0% → 100.0% |  0 → 47 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change | Delta |           % |         Samples | Callee                | Location       |
| -----: | ----: | ----------: | --------------: | --------------------- | -------------- |
|  -1.8% |  -203 |       96.0% | 11,346 → 11,143 | `thread_native_entry` | `libjvm.dylib` |
|  -1.5% |    -7 | 3.9% → 4.0% |       466 → 459 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change | Delta |      % |         Samples | Callee           | Location                  |
| -----: | ----: | -----: | --------------: | ---------------- | ------------------------- |
|  -1.8% |  -210 | 100.0% | 11,813 → 11,603 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change | Delta |             % |       Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ------------: | ------------------------------- | -------------- |
|  -2.4% |   -93 | 34.8% → 34.6% | 3,951 → 3,858 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  -1.5% |   -76 | 44.7% → 44.8% | 5,066 → 4,990 | `WorkerThread::run`             | `libjvm.dylib` |
|  -1.4% |   -20 | 12.3% → 12.4% | 1,397 → 1,377 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  -1.5% |    -7 |          4.1% |     466 → 459 | `WatcherThread::run`            | `libjvm.dylib` |
|  -1.5% |    -7 |          4.1% |     466 → 459 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change | Delta |      % |         Samples | Callee             | Location       |
| -----: | ----: | -----: | --------------: | ------------------ | -------------- |
|  -1.8% |  -203 | 100.0% | 11,346 → 11,143 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |              % |       Samples | Callee               | Location                  |
| -----: | ----: | -------------: | ------------: | -------------------- | ------------------------- |
|  -1.9% |   -98 | 99.9% → 100.0% | 5,112 → 5,014 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| -75.0% |    -3 |   0.1% → <0.1% |         4 → 1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |
|    new |    +1 |   0.0% → <0.1% |         0 → 1 | `gettimeofday`       | `libsystem_c.dylib`       |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |       Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------------- | -------------- |
|  -3.6% |   -58 | 41.1% → 40.5% | 1,622 → 1,564 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  -1.5% |    -7 | 11.8% → 11.9% |     465 → 458 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |
|  -1.5% |    -7 | 11.8% → 11.9% |     466 → 459 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
|  -1.5% |    -7 | 11.8% → 11.9% |     466 → 459 | `signal_thread_entry`                                    | `libjvm.dylib` |
|  -1.5% |    -7 | 11.8% → 11.9% |     466 → 459 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |            % |       Samples | Callee                            | Location                 |
| -----: | ----: | -----------: | ------------: | --------------------------------- | ------------------------ |
|  -1.4% |   -72 |        99.2% | 5,024 → 4,952 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| -38.1% |    -8 |  0.4% → 0.3% |       21 → 13 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|    new |    +6 |  0.0% → 0.1% |         0 → 6 | `KlassCleaningTask::work`         | `libjvm.dylib`           |
| -83.3% |    -5 | 0.1% → <0.1% |         6 → 1 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
| +25.0% |    +2 |         0.2% |        8 → 10 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee                  | Location       |
| -----: | ----: | -----: | ------------: | ----------------------- | -------------- |
|  -1.8% |   -67 | 100.0% | 3,706 → 3,639 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Callee                  | Location       |
| -----: | ----: | -----: | ------------: | ----------------------- | -------------- |
|  -2.3% |   -33 | 100.0% | 1,410 → 1,377 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                  | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------------- | -------------- |
|  -1.5% |    -7 | 33.4% → 33.3% | 466 → 459 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
|  -1.5% |    -7 | 33.4% → 33.3% | 466 → 459 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
|  -1.3% |    -6 |         33.3% | 465 → 459 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % |   Samples | Callee                       | Location       |
| -----: | ----: | ----: | --------: | ---------------------------- | -------------- |
|  -1.5% |    -7 | 50.0% | 466 → 459 | `ContinueInNewThread`        | `libjli.dylib` |
|  -1.5% |    -7 | 50.0% | 466 → 459 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
|  -1.5% |   -14 | 100.0% | 932 → 918 | `JLI_Launch` | `libjli.dylib` |

##### `Parse::do_call` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -24.6% |   -17 | 92.0% → 81.3% | 69 → 52 | `ParseGenerator::generate`         | `libjvm.dylib` |
|  -12.5% |    -4 | 42.7% → 43.8% | 32 → 28 | `PredictedCallGenerator::generate` | `libjvm.dylib` |
|  -16.7% |    -2 | 16.0% → 15.6% | 12 → 10 | `Compile::call_generator`          | `libjvm.dylib` |
|  -66.7% |    -2 |   4.0% → 1.6% |   3 → 1 | `ciBytecodeStream::get_method`     | `libjvm.dylib` |
| +100.0% |    +1 |   1.3% → 3.1% |   1 → 2 | `GraphKit::kill_dead_locals`       | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|  Change | Delta |           % | Samples | Callee                       | Location       |
| ------: | ----: | ----------: | ------: | ---------------------------- | -------------- |
|  -25.6% |   -10 |      100.0% | 39 → 29 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |
| removed |    -1 | 2.6% → 0.0% |   1 → 0 | `XHandlers::XHandlers`       | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -25.6% |   -10 | 100.0% | 39 → 29 | `IRScope::IRScope` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                     | Location       |
| -----: | ----: | -----: | --------: | -------------------------- | -------------- |
|  -7.7% |   -10 | 100.0% | 130 → 120 | `Compilation::Compilation` | `libjvm.dylib` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
|  -35.0% |    -7 | 95.2% → 100.0% | 20 → 13 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
| removed |    -1 |    4.8% → 0.0% |   1 → 0 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
|  -14.7% |   -11 | 98.7% → 94.1% | 75 → 64 | `Parse::do_call`            | `libjvm.dylib` |
|  +25.0% |    +3 | 15.8% → 22.1% | 12 → 15 | `Parse::do_field_access`    | `libjvm.dylib` |
| removed |    -3 |   3.9% → 0.0% |   3 → 0 | `GraphKit::access_store_at` | `libjvm.dylib` |
|  -75.0% |    -3 |   5.3% → 1.5% |   4 → 1 | `Parse::array_load`         | `libjvm.dylib` |
| removed |    -3 |   3.9% → 0.0% |   3 → 0 | `Parse::do_instanceof`      | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|  -4.4% |   -30 | 42.2% → 41.8% | 684 → 654 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -3.0% |   -28 | 57.8% → 58.2% | 938 → 910 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                       | Location       |
| ------: | ----: | ------------: | --------: | ---------------------------- | -------------- |
|   -3.3% |   -18 | 80.4% → 81.3% | 550 → 532 | `C2Compiler::compile_method` | `libjvm.dylib` |
|   -7.7% |   -10 | 19.0% → 18.3% | 130 → 120 | `Compiler::compile_method`   | `libjvm.dylib` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `ciEnv::~ciEnv`              | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee          | Location       |
| -----: | ----: | -----: | --------: | --------------- | -------------- |
|  -3.0% |   -28 | 100.0% | 938 → 910 | `Monitor::wait` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| -73.7% |   -14 |   8.7% → 2.5% |  19 → 5 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
| -24.0% |   -12 | 22.9% → 19.3% | 50 → 38 | `Compile::optimize_loops`      | `libjvm.dylib` |
| +13.2% |    +7 | 24.3% → 30.5% | 53 → 60 | `PhaseIdealLoop::optimize`     | `libjvm.dylib` |
| +15.2% |    +5 | 15.1% → 19.3% | 33 → 38 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| -40.0% |    -4 |   4.6% → 3.0% |  10 → 6 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee             | Location       |
| ------: | ----: | -------------: | --------: | ------------------ | -------------- |
|   -3.1% |   -17 | 99.8% → 100.0% | 549 → 532 | `Compile::Compile` | `libjvm.dylib` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -21.6% |   -11 | 43.2% → 40.0% | 51 → 40 | `Compilation::build_hir`      | `libjvm.dylib` |
| -11.1% |    -5 | 38.1% → 40.0% | 45 → 40 | `Compilation::emit_lir`       | `libjvm.dylib` |
|  -9.1% |    -2 | 18.6% → 20.0% | 22 → 20 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | --------: | ---------------------------------------- | -------------- |
|   -9.6% |   -21 | 39.7% → 37.0% | 218 → 197 | `Compile::Optimize`                      | `libjvm.dylib` |
|   +5.1% |   +13 | 46.3% → 50.2% | 254 → 267 | `Compile::Code_Gen`                      | `libjvm.dylib` |
|  -13.0% |    -9 | 12.6% → 11.3% |   69 → 60 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  -25.0% |    -1 |   0.7% → 0.6% |     4 → 3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `Compile::inline_string_calls`           | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -58.3% |    -7 | 57.1% → 71.4% |  12 → 5 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `Klass::is_klass`                      | `libjvm.dylib` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `Metadata::is_method`                  | `libjvm.dylib` |

##### `ConnectionGraph::do_analysis` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                            | Location                   |
| ------: | ----: | -------------: | ------: | --------------------------------- | -------------------------- |
|  -72.2% |   -13 | 94.7% → 100.0% |  18 → 5 | `ConnectionGraph::compute_escape` | `libjvm.dylib`             |
| removed |    -1 |    5.3% → 0.0% |   1 → 0 | `_platform_memset`                | `libsystem_platform.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|  -57.1% |    -4 | 38.9% → 60.0% |   7 → 3 | `ConnectionGraph::split_unique_types`           | `libjvm.dylib` |
| removed |    -3 |  16.7% → 0.0% |   3 → 0 | `ConnectionGraph::add_node_to_connection_graph` | `libjvm.dylib` |
|  -50.0% |    -2 | 22.2% → 40.0% |   4 → 2 | `ConnectionGraph::complete_connection_graph`    | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `ConnectionGraph::process_call_arguments`       | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| -48.0% |   -12 | 29.4% → 17.8% | 25 → 13 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| +24.0% |    +6 | 29.4% → 42.5% | 25 → 31 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| -62.5% |    -5 |   9.4% → 4.1% |   8 → 3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| +33.3% |    +2 |  7.1% → 11.0% |   6 → 8 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| +50.0% |    +2 |   4.7% → 8.2% |   4 → 6 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -14.1% |   -12 | 100.0% | 85 → 73 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                     | Location       |
| -----: | ----: | -------------: | ------: | -------------------------- | -------------- |
| -26.0% |   -13 | 100.0% → 97.4% | 50 → 37 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
|    new |    +1 |    0.0% → 2.6% |   0 → 1 | `Compile::print_method`    | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|  -50.0% |    -5 | 40.0% → 38.5% |  10 → 5 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
| removed |    -2 |   8.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::do_split_if`               | `libjvm.dylib` |
|  -33.3% |    -2 | 24.0% → 30.8% |   6 → 4 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |
| removed |    -2 |   8.0% → 0.0% |   2 → 0 | `PhiNode::Opcode`                           | `libjvm.dylib` |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `AddLNode::Opcode`                          | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -32.4% |   -11 | 89.5% → 88.5% | 34 → 23 | `GraphBuilder::invoke`           | `libjvm.dylib` |
|  -66.7% |    -6 | 23.7% → 11.5% |   9 → 3 | `GraphBuilder::access_field`     | `libjvm.dylib` |
|     new |    +2 |   0.0% → 7.7% |   0 → 2 | `BlockBegin::try_merge`          | `libjvm.dylib` |
| removed |    -1 |   2.6% → 0.0% |   1 → 0 | `ciBytecodeStream::reset_to_bci` | `libjvm.dylib` |
|  -33.3% |    -1 |   7.9% → 7.7% |   3 → 2 | `GraphBuilder::method_return`    | `libjvm.dylib` |

##### `GraphBuilder::try_inline` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                   | Location        |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | --------------- |
|  -35.5% |   -11 | 96.9% → 100.0% | 31 → 20 | `GraphBuilder::try_inline_full`          | `libjvm.dylib`  |
|  -26.3% |    -5 |  59.4% → 70.0% | 19 → 14 | `GraphBuilder::try_method_handle_inline` | `libjvm.dylib`  |
| removed |    -2 |    6.3% → 0.0% |   2 → 0 | `GraphBuilder::try_inline_intrinsics`    | `libjvm.dylib`  |
| removed |    -1 |    3.1% → 0.0% |   1 → 0 | `tlv_get_addr`                           | `libdyld.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                      | Location        |
| -----: | ----: | -------------: | ------: | ------------------------------------------- | --------------- |
| -31.6% |   -12 | 100.0% → 96.3% | 38 → 26 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`  |
|    new |    +1 |    0.0% → 3.7% |   0 → 1 | `tlv_get_addr`                              | `libdyld.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  -25.6% |   -10 | 76.5% → 72.5% | 39 → 29 | `IR::IR`                                     | `libjvm.dylib` |
| +200.0% |    +4 |  3.9% → 15.0% |   2 → 6 | `IR::compute_use_counts`                     | `libjvm.dylib` |
|  -42.9% |    -3 | 13.7% → 10.0% |   7 → 4 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
| removed |    -3 |   5.9% → 0.0% |   3 → 0 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.5% |   0 → 1 | `Goto::visit`                                | `libjvm.dylib` |

##### `GraphBuilder::invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -37.5% |   -12 | 94.1% → 87.0% | 32 → 20 | `GraphBuilder::try_inline`          | `libjvm.dylib` |
|  -83.3% |    -5 |  17.6% → 4.3% |   6 → 1 | `ciBytecodeStream::get_method`      | `libjvm.dylib` |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `ciMethod::find_monomorphic_target` | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `MethodData::profile_arguments`     | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `GraphBuilder::append_with_bci`     | `libjvm.dylib` |

##### `GraphBuilder::try_inline_full` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  -32.1% |    -9 | 90.3% → 95.0% | 28 → 19 | `GraphBuilder::iterate_all_blocks`      | `libjvm.dylib` |
|  +50.0% |    +1 |  6.5% → 15.0% |   2 → 3 | `GraphBuilder::push_scope`              | `libjvm.dylib` |
|  -50.0% |    -1 |   6.5% → 5.0% |   2 → 1 | `ciMethod::ensure_method_data`          | `libjvm.dylib` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `CompilerOracle::should_inline`         | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `GraphBuilder::args_list_for_profiling` | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801180000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |  -100 |  65.4% → 0.0% | 100 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -63 |  41.2% → 0.0% |  63 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011c5c00` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object)`             | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c9000`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ---------------------------------------------------- |
| removed |   -41 |  82.0% → 0.0% |  41 → 0 | `reinvoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012b8c00`  |
| removed |    -9 |  18.0% → 0.0% |   9 → 0 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `invokeVirtual(Object, Object, Object, Object)`    | `java.lang.invoke.LambdaForm$DMH.0x0000000801094400` |
