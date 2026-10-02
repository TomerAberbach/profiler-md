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
