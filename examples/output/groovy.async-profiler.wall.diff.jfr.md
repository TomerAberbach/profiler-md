# Sampling profile diff

Collected 14,309 samples → 26,323 samples (+12,014 samples, +84.0%).

| Category          |  Change |   Delta |             % |         Samples |
| ----------------- | ------: | ------: | ------------: | --------------: |
| Native            |  +85.6% | +11,498 | 93.9% → 94.7% | 13,436 → 24,934 |
| Compiler          |  +38.4% |    +207 |   3.8% → 2.8% |       539 → 746 |
| Standard library  |  +89.3% |    +267 |   2.1% → 2.2% |       299 → 566 |
| Ours              |  +65.0% |     +13 |          0.1% |         20 → 33 |
| JIT               |  +50.0% |      +7 |          0.1% |         14 → 21 |
| Unknown           |     new |     +21 |   0.0% → 0.1% |          0 → 21 |
| Garbage collector | +100.0% |      +1 |         <0.1% |           1 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change |  Delta |             % |        Samples | Function                                                                                    | Location                                             |
| ------: | -----: | ------------: | -------------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  +83.7% | +5,452 |         45.5% | 6,517 → 11,969 | `__psynch_cvwait`                                                                           | `libsystem_kernel.dylib`                             |
|  +90.1% | +5,005 | 38.8% → 40.1% | 5,556 → 10,561 | `semaphore_wait_trap`                                                                       | `libsystem_kernel.dylib`                             |
|  +87.7% |   +414 |   3.3% → 3.4% |      472 → 886 | `mach_msg2_trap`                                                                            | `libsystem_kernel.dylib`                             |
|  +87.7% |   +414 |   3.3% → 3.4% |      472 → 886 | `__ulock_wait`                                                                              | `libsystem_kernel.dylib`                             |
| +131.9% |    +62 |   0.3% → 0.4% |       47 → 109 | `__psynch_mutexwait`                                                                        | `libsystem_kernel.dylib`                             |
| +183.3% |    +33 |   0.1% → 0.2% |        18 → 51 | `cast(Object)`                                                                              | `java.lang.Class`                                    |
|     new |    +21 |   0.0% → 0.1% |         0 → 21 | `(anonymous)`                                                                               | `<unknown>`                                          |
| +121.4% |    +17 |          0.1% |        14 → 31 | `java_lang_Throwable::fill_in_stack_trace`                                                  | `libjvm.dylib`                                       |
|     new |    +13 |  0.0% → <0.1% |         0 → 13 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| +400.0% |    +12 |  <0.1% → 0.1% |         3 → 15 | `Node::set_req_X`                                                                           | `libjvm.dylib`                                       |
| +120.0% |    +12 |          0.1% |        10 → 22 | `newInstance(Class, int)`                                                                   | `java.lang.reflect.Array`                            |
|  +68.8% |    +11 |          0.1% |        16 → 27 | `tlv_get_addr`                                                                              | `libdyld.dylib`                                      |
|  +52.4% |    +11 |          0.1% |        21 → 32 | `pthread_jit_write_protect_np`                                                              | `libsystem_pthread.dylib`                            |
|     new |    +11 |  0.0% → <0.1% |         0 → 11 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|  +43.5% |    +10 |   0.2% → 0.1% |        23 → 33 | `PhaseChaitin::Split`                                                                       | `libjvm.dylib`                                       |
| +250.0% |    +10 |  <0.1% → 0.1% |         4 → 14 | `PhaseChaitin::gather_lrg_masks`                                                            | `libjvm.dylib`                                       |
| +112.5% |     +9 |          0.1% |         8 → 17 | `invokeBasic(Object[])`                                                                     | `java.lang.invoke.MethodHandle`                      |
|     new |     +8 |  0.0% → <0.1% |          0 → 8 | `IntervalWalker::walk_to`                                                                   | `libjvm.dylib`                                       |
| +700.0% |     +7 |         <0.1% |          1 → 8 | `ConnectionGraph::compute_escape`                                                           | `libjvm.dylib`                                       |
| +116.7% |     +7 |         <0.1% |         6 → 13 | `_platform_memset`                                                                          | `libsystem_platform.dylib`                           |

##### Native

|  Change |  Delta |             % |        Samples | Function                                                                                                                                                     | Location                   |
| ------: | -----: | ------------: | -------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
|  +83.7% | +5,452 |         45.5% | 6,517 → 11,969 | `__psynch_cvwait`                                                                                                                                            | `libsystem_kernel.dylib`   |
|  +90.1% | +5,005 | 38.8% → 40.1% | 5,556 → 10,561 | `semaphore_wait_trap`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  +87.7% |   +414 |   3.3% → 3.4% |      472 → 886 | `mach_msg2_trap`                                                                                                                                             | `libsystem_kernel.dylib`   |
|  +87.7% |   +414 |   3.3% → 3.4% |      472 → 886 | `__ulock_wait`                                                                                                                                               | `libsystem_kernel.dylib`   |
| +131.9% |    +62 |   0.3% → 0.4% |       47 → 109 | `__psynch_mutexwait`                                                                                                                                         | `libsystem_kernel.dylib`   |
| +121.4% |    +17 |          0.1% |        14 → 31 | `java_lang_Throwable::fill_in_stack_trace`                                                                                                                   | `libjvm.dylib`             |
|  +68.8% |    +11 |          0.1% |        16 → 27 | `tlv_get_addr`                                                                                                                                               | `libdyld.dylib`            |
|  +52.4% |    +11 |          0.1% |        21 → 32 | `pthread_jit_write_protect_np`                                                                                                                               | `libsystem_pthread.dylib`  |
| +116.7% |     +7 |         <0.1% |         6 → 13 | `_platform_memset`                                                                                                                                           | `libsystem_platform.dylib` |
|  +66.7% |     +6 |          0.1% |         9 → 15 | `vmSymbols::find_sid`                                                                                                                                        | `libjvm.dylib`             |
|     new |     +6 |  0.0% → <0.1% |          0 → 6 | `SignatureStream::next`                                                                                                                                      | `libjvm.dylib`             |
| +166.7% |     +5 |         <0.1% |          3 → 8 | `nmethod::is_unloading`                                                                                                                                      | `libjvm.dylib`             |
|     new |     +5 |  0.0% → <0.1% |          0 → 5 | `Dict::doubhash`                                                                                                                                             | `libjvm.dylib`             |
|  +22.2% |     +4 |          0.1% |        18 → 22 | `Arena::contains`                                                                                                                                            | `libjvm.dylib`             |
| +200.0% |     +4 |         <0.1% |          2 → 6 | `PcDescContainer::find_pc_desc_internal`                                                                                                                     | `libjvm.dylib`             |
|     new |     +4 |  0.0% → <0.1% |          0 → 4 | `CollectedHeap::array_allocate`                                                                                                                              | `libjvm.dylib`             |
| +200.0% |     +4 |         <0.1% |          2 → 6 | `nmethod::metadata_at`                                                                                                                                       | `libjvm.dylib`             |
| +400.0% |     +4 |         <0.1% |          1 → 5 | `__open`                                                                                                                                                     | `libsystem_kernel.dylib`   |
|     new |     +4 |  0.0% → <0.1% |          0 → 4 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<2383974ull, G1BarrierSet>, (AccessInternal::BarrierType)1, 2383974ull>::oop_access_barrier` | `libjvm.dylib`             |
|  +75.0% |     +3 |         <0.1% |          4 → 7 | `bsearch`                                                                                                                                                    | `libsystem_c.dylib`        |

##### Compiler

|  Change | Delta |            % | Samples | Function                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| +400.0% |   +12 | <0.1% → 0.1% |  3 → 15 | `Node::set_req_X`                    | `libjvm.dylib` |
|  +43.5% |   +10 |  0.2% → 0.1% | 23 → 33 | `PhaseChaitin::Split`                | `libjvm.dylib` |
| +250.0% |   +10 | <0.1% → 0.1% |  4 → 14 | `PhaseChaitin::gather_lrg_masks`     | `libjvm.dylib` |
|     new |    +8 | 0.0% → <0.1% |   0 → 8 | `IntervalWalker::walk_to`            | `libjvm.dylib` |
| +700.0% |    +7 |        <0.1% |   1 → 8 | `ConnectionGraph::compute_escape`    | `libjvm.dylib` |
| +600.0% |    +6 |        <0.1% |   1 → 7 | `PhiNode::Ideal`                     | `libjvm.dylib` |
| +120.0% |    +6 |        <0.1% |  5 → 11 | `ciObjectFactory::get_metadata`      | `libjvm.dylib` |
| +200.0% |    +6 |        <0.1% |   3 → 9 | `PhaseIterGVN::subsume_node`         | `libjvm.dylib` |
|     new |    +6 | 0.0% → <0.1% |   0 → 6 | `LinearScan::assign_reg_num`         | `libjvm.dylib` |
|  +55.6% |    +5 |         0.1% |  9 → 14 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |
| +125.0% |    +5 |        <0.1% |   4 → 9 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| +125.0% |    +5 |        <0.1% |   4 → 9 | `Type::cmp`                          | `libjvm.dylib` |
| +500.0% |    +5 |        <0.1% |   1 → 6 | `Compile::find_alias_type`           | `libjvm.dylib` |
|  +66.7% |    +4 |        <0.1% |  6 → 10 | `PhaseOutput::BuildOopMaps`          | `libjvm.dylib` |
|  +80.0% |    +4 |        <0.1% |   5 → 9 | `PhaseLive::compute`                 | `libjvm.dylib` |
| +200.0% |    +4 |        <0.1% |   2 → 6 | `PhaseChaitin::build_ifg_virtual`    | `libjvm.dylib` |
| +133.3% |    +4 |        <0.1% |   3 → 7 | `PhaseIdealLoop::build_loop_early`   | `libjvm.dylib` |
|  +80.0% |    +4 |        <0.1% |   5 → 9 | `PhaseIdealLoop::is_dominator`       | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhiNode::Value`                     | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhaseCFG::hoist_to_cheaper_block`   | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                      | Location                                                         |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +183.3% |   +33 |  0.1% → 0.2% | 18 → 51 | `cast(Object)`                                                                                | `java.lang.Class`                                                |
|     new |   +13 | 0.0% → <0.1% |  0 → 13 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800`             |
| +120.0% |   +12 |         0.1% | 10 → 22 | `newInstance(Class, int)`                                                                     | `java.lang.reflect.Array`                                        |
|     new |   +11 | 0.0% → <0.1% |  0 → 11 | `collector(Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`              |
| +112.5% |    +9 |         0.1% |  8 → 17 | `invokeBasic(Object[])`                                                                       | `java.lang.invoke.MethodHandle`                                  |
|     new |    +7 | 0.0% → <0.1% |   0 → 7 | `getAndPut(String, MemoizeCache$ValueProvider)`                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`              |
| +233.3% |    +7 |        <0.1% |  3 → 10 | `equals(Object)`                                                                              | `java.lang.String`                                               |
| +200.0% |    +6 |        <0.1% |   3 → 9 | `getNode(Object)`                                                                             | `java.util.HashMap`                                              |
|     new |    +6 | 0.0% → <0.1% |   0 → 6 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`              |
| +500.0% |    +5 |        <0.1% |   1 → 6 | `getMethods(Class, String)`                                                                   | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`          |
|     new |    +5 | 0.0% → <0.1% |   0 → 5 | `collector(Object, Object, Object)`                                                           | `java.lang.invoke.LambdaForm$MH.0x00000070010a8c00`              |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`              |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`              |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `visit(GroovyCodeVisitor)`                                                                    | `org.codehaus.groovy.ast.expr.ConstantExpression`                |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `delegate(Object, Object)`                                                                    | `java.lang.invoke.DelegatingMethodHandle$Holder`                 |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `insertParameterTypes(int, Class[])`                                                          | `java.lang.invoke.MethodType`                                    |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `checkCustomized(MethodHandle)`                                                               | `java.lang.invoke.Invokers`                                      |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `visitListOfExpressions(List)`                                                                | `org.codehaus.groovy.ast.GroovyCodeVisitor`                      |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `sameClasses(Class[], Object[])`                                                              | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                          | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
|  -51.6% |   -16 |  0.2% → 0.1% | 31 → 15 | `Node::dominates`                                 | `libjvm.dylib`                                      |
|  -88.9% |   -16 | 0.1% → <0.1% |  18 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`                                      |
| removed |    -6 | <0.1% → 0.0% |   6 → 0 | `CodeCache::find_blob`                            | `libjvm.dylib`                                      |
|  -35.7% |    -5 | 0.1% → <0.1% |  14 → 9 | `PhaseChaitin::build_ifg_physical`                | `libjvm.dylib`                                      |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `PhaseLive::add_liveout`                          | `libjvm.dylib`                                      |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `collector(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000a0010a8c00` |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `collector(Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x000000a001031800` |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `NodeHash::hash_find_insert`                      | `libjvm.dylib`                                      |
|  -37.5% |    -3 | 0.1% → <0.1% |   8 → 5 | `PhaseIdealLoop::build_loop_late_post_work`       | `libjvm.dylib`                                      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIterGVN::remove_globally_dead_node`         | `libjvm.dylib`                                      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `RegionNode::is_unreachable_from_root`            | `libjvm.dylib`                                      |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `decodeHeapOopNode::rule`                         | `libjvm.dylib`                                      |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `Node::set_req`                                   | `libjvm.dylib`                                      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Matcher::pd_clone_node`                          | `libjvm.dylib`                                      |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `resource_allocate_bytes`                         | `libjvm.dylib`                                      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Location::write_on`                              | `libjvm.dylib`                                      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ValueStack::ValueStack`                          | `libjvm.dylib`                                      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `guard(Object, Object)`                           | `java.lang.invoke.LambdaForm$MH.0x000000a001098400` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `internalMemberName(Object)`                      | `java.lang.invoke.DirectMethodHandle`               |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `CodeHeap::find_blob`                             | `libjvm.dylib`                                      |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -88.9% |   -16 | 0.1% → <0.1% |  18 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                            | `libjvm.dylib`             |
| removed |    -6 | <0.1% → 0.0% |   6 → 0 | `CodeCache::find_blob`                                                                                                       | `libjvm.dylib`             |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `resource_allocate_bytes`                                                                                                    | `libjvm.dylib`             |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Location::write_on`                                                                                                         | `libjvm.dylib`             |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `CodeHeap::find_blob`                                                                                                        | `libjvm.dylib`             |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `frame::sender_raw`                                                                                                          | `libjvm.dylib`             |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`             |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `DataLayout::data_in`                                                                                                        | `libjvm.dylib`             |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `pthread_mutex_lock`                                                                                                         | `libsystem_pthread.dylib`  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `BytecodeStream::next`                                                                                                       | `libjvm.dylib`             |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                               | `libjvm.dylib`             |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                       | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `BarrierSetNMethod::supports_entry_barrier`                                                                                  | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Method::can_be_statically_bound`                                                                                            | `libjvm.dylib`             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MemAllocator::Allocation::check_out_of_memory`                                                                              | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Parse::do_call`                                                                                                             | `libjvm.dylib`             |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `_platform_memmove`                                                                                                          | `libsystem_platform.dylib` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `VectorSet::grow`                                                                                                            | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Parse::do_one_bytecode`                                                                                                     | `libjvm.dylib`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `State::_sub_Op_AddP`                                                                                                        | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -51.6% |   -16 |  0.2% → 0.1% | 31 → 15 | `Node::dominates`                             | `libjvm.dylib` |
|  -35.7% |    -5 | 0.1% → <0.1% |  14 → 9 | `PhaseChaitin::build_ifg_physical`            | `libjvm.dylib` |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
|  -37.5% |    -3 | 0.1% → <0.1% |   8 → 5 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIterGVN::remove_globally_dead_node`     | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `RegionNode::is_unreachable_from_root`        | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `decodeHeapOopNode::rule`                     | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `Node::set_req`                               | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Matcher::pd_clone_node`                      | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ValueStack::ValueStack`                      | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `TypeInterfaces::union_with`                  | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `RegMask::is_misaligned_pair`                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::DoScheduling`                    | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `CallStaticJavaNode::Opcode`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::AddNodeToAvailableList`          | `libjvm.dylib` |
|  -50.0% |    -2 |        <0.1% |   4 → 2 | `PhaseChaitin::post_allocate_copy_removal`    | `libjvm.dylib` |
|  -28.6% |    -2 |        <0.1% |   7 → 5 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Scheduling::ComputeRegisterAntidependencies` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `RegMask::Size`                               | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x000000a0010a8c00`    |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `collector(Object, Object)`                                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a001031800`    |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a001098400`    |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `internalMemberName(Object)`                                                                | `java.lang.invoke.DirectMethodHandle`                  |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `equals(LambdaFormEditor$TransformKey)`                                                     | `java.lang.invoke.LambdaFormEditor$Transform`          |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800`   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `wrapAndCopyInto(Sink, Spliterator)`                                                        | `java.util.stream.AbstractPipeline`                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00109a000`    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a001188c00`    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `newNode(int, Object, Object, HashMap$Node)`                                                | `java.util.LinkedHashMap`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `checkCanSetAccessible(Class, Class, boolean)`                                              | `java.lang.reflect.AccessibleObject`                   |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00102ac00`    |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `boxInteger(int)`                                                                           | `sun.invoke.util.ValueConversions`                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `collector(Object, Object, Object, Object)`                                                 | `java.lang.invoke.LambdaForm$MH.0x000000a0010d3c00`    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `type()`                                                                                    | `java.lang.invoke.MethodHandle`                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `toMap()`                                                                                   | `groovyjarjarantlr4.v4.runtime.dfa.HashEdgeMap`        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getModifiers()`                                                                            | `java.lang.Class`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isAdaptableToAsReturn(Class, Class)`                                                       | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010abc00`    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a0010ac800`    |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change |  Delta |             % |         Samples | Function                                                                                    | Location                                             |
| -----: | -----: | ------------: | --------------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| +83.0% | +9,923 | 83.5% → 83.1% | 11,951 → 21,874 | `_pthread_start`                                                                            | `libsystem_pthread.dylib`                            |
| +83.0% | +9,923 | 83.5% → 83.1% | 11,951 → 21,874 | `thread_start`                                                                              | `libsystem_pthread.dylib`                            |
| +82.8% | +9,509 | 80.2% → 79.7% | 11,478 → 20,987 | `Thread::call_run`                                                                          | `libjvm.dylib`                                       |
| +82.8% | +9,509 | 80.2% → 79.7% | 11,478 → 20,987 | `thread_native_entry`                                                                       | `libjvm.dylib`                                       |
| +83.7% | +5,452 |         45.5% |  6,517 → 11,969 | `__psynch_cvwait`                                                                           | `libsystem_kernel.dylib`                             |
| +90.1% | +5,005 | 38.8% → 40.1% |  5,556 → 10,561 | `semaphore_wait_trap`                                                                       | `libsystem_kernel.dylib`                             |
| +88.5% | +4,537 | 35.8% → 36.7% |   5,127 → 9,664 | `WorkerThread::run`                                                                         | `libjvm.dylib`                                       |
| +82.3% | +4,209 | 35.7% → 35.4% |   5,112 → 9,321 | `PlatformMonitor::wait`                                                                     | `libjvm.dylib`                                       |
| +88.2% | +3,294 | 26.1% → 26.7% |   3,736 → 7,030 | `Monitor::wait_without_safepoint_check`                                                     | `libjvm.dylib`                                       |
| +72.7% | +2,901 | 27.9% → 26.2% |   3,991 → 6,892 | `JavaThread::thread_main_inner`                                                             | `libjvm.dylib`                                       |
| +87.7% | +1,242 |  9.9% → 10.1% |   1,416 → 2,658 | `ConcurrentGCThread::run`                                                                   | `libjvm.dylib`                                       |
| +66.6% |   +916 |   9.6% → 8.7% |   1,376 → 2,292 | `Monitor::wait`                                                                             | `libjvm.dylib`                                       |
|    new |   +873 |   0.0% → 3.3% |         0 → 873 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
|    new |   +873 |   0.0% → 3.3% |         0 → 873 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010ac400`  |
|    new |   +873 |   0.0% → 3.3% |         0 → 873 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`  |
|    new |   +873 |   0.0% → 3.3% |         0 → 873 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|    new |   +873 |   0.0% → 3.3% |         0 → 873 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
|    new |   +871 |   0.0% → 3.3% |         0 → 871 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001092800` |
|    new |   +871 |   0.0% → 3.3% |         0 → 871 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|    new |   +871 |   0.0% → 3.3% |         0 → 871 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |

##### Native

| Change |  Delta |             % |         Samples | Function                                   | Location                  |
| -----: | -----: | ------------: | --------------: | ------------------------------------------ | ------------------------- |
| +83.0% | +9,923 | 83.5% → 83.1% | 11,951 → 21,874 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| +83.0% | +9,923 | 83.5% → 83.1% | 11,951 → 21,874 | `thread_start`                             | `libsystem_pthread.dylib` |
| +82.8% | +9,509 | 80.2% → 79.7% | 11,478 → 20,987 | `Thread::call_run`                         | `libjvm.dylib`            |
| +82.8% | +9,509 | 80.2% → 79.7% | 11,478 → 20,987 | `thread_native_entry`                      | `libjvm.dylib`            |
| +83.7% | +5,452 |         45.5% |  6,517 → 11,969 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| +90.1% | +5,005 | 38.8% → 40.1% |  5,556 → 10,561 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| +88.5% | +4,537 | 35.8% → 36.7% |   5,127 → 9,664 | `WorkerThread::run`                        | `libjvm.dylib`            |
| +82.3% | +4,209 | 35.7% → 35.4% |   5,112 → 9,321 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| +88.2% | +3,294 | 26.1% → 26.7% |   3,736 → 7,030 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| +72.7% | +2,901 | 27.9% → 26.2% |   3,991 → 6,892 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| +87.7% | +1,242 |  9.9% → 10.1% |   1,416 → 2,658 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
| +66.6% |   +916 |   9.6% → 8.7% |   1,376 → 2,292 | `Monitor::wait`                            | `libjvm.dylib`            |
| +87.7% |   +828 |   6.6% → 6.7% |     944 → 1,772 | `JLI_Launch`                               | `libjli.dylib`            |
| +87.7% |   +828 |   6.6% → 6.7% |     944 → 1,772 | `main`                                     | `java`                    |
| +89.0% |   +420 |   3.3% → 3.4% |       472 → 892 | `unknown`                                  | `<unknown>`               |
| +88.1% |   +415 |   3.3% → 3.4% |       471 → 886 | `Profiler::timerLoop`                      | `libasyncProfiler.dylib`  |
| +88.1% |   +415 |   3.3% → 3.4% |       471 → 886 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib`            |
| +87.7% |   +414 |   3.3% → 3.4% |       472 → 886 | `G1ConcurrentMarkThread::run_service`      | `libjvm.dylib`            |
| +87.7% |   +414 |   3.3% → 3.4% |       472 → 886 | `mach_msg2_trap`                           | `libsystem_kernel.dylib`  |
| +87.7% |   +414 |   3.3% → 3.4% |       472 → 886 | `mach_msg_overwrite`                       | `libsystem_kernel.dylib`  |

##### Compiler

|  Change | Delta |            % |       Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------------: | ------------------------------------------- | -------------- |
|  +50.8% |  +830 | 11.4% → 9.4% | 1,633 → 2,463 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  +54.7% |  +490 |  6.3% → 5.3% |   896 → 1,386 | `CompileQueue::get`                         | `libjvm.dylib` |
|  +45.7% |  +336 |  5.1% → 4.1% |   736 → 1,072 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  +39.4% |  +238 |  4.2% → 3.2% |     604 → 842 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  +38.9% |  +235 |  4.2% → 3.2% |     604 → 839 | `Compile::Compile`                          | `libjvm.dylib` |
|  +49.3% |  +106 |  1.5% → 1.2% |     215 → 321 | `Compile::Optimize`                         | `libjvm.dylib` |
|  +32.0% |   +94 |  2.1% → 1.5% |     294 → 388 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  +62.6% |   +82 |  0.9% → 0.8% |     131 → 213 | `Compilation::compile_method`               | `libjvm.dylib` |
|  +62.6% |   +82 |  0.9% → 0.8% |     131 → 213 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  +65.5% |   +74 |  0.8% → 0.7% |     113 → 187 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| +113.2% |   +43 |         0.3% |       38 → 81 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  +52.6% |   +41 |         0.5% |      78 → 119 | `PhaseIterGVN::optimize`                    | `libjvm.dylib` |
|  +53.3% |   +40 |  0.5% → 0.4% |      75 → 115 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| +257.1% |   +36 |  0.1% → 0.2% |       14 → 50 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
|  +20.7% |   +35 |  1.2% → 0.8% |     169 → 204 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
| +100.0% |   +33 |  0.2% → 0.3% |       33 → 66 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
| +100.0% |   +31 |         0.2% |       31 → 62 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| +100.0% |   +31 |         0.2% |       31 → 62 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  +96.8% |   +30 |         0.2% |       31 → 61 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
| +155.6% |   +28 |  0.1% → 0.2% |       18 → 46 | `ciBytecodeStream::get_method`              | `libjvm.dylib` |

##### Standard library

| Change | Delta |           % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +873 | 0.0% → 3.3% | 0 → 873 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`  |
|    new |  +873 | 0.0% → 3.3% | 0 → 873 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010ac400`  |
|    new |  +873 | 0.0% → 3.3% | 0 → 873 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010ac800`  |
|    new |  +873 | 0.0% → 3.3% | 0 → 873 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|    new |  +873 | 0.0% → 3.3% | 0 → 873 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9400`  |
|    new |  +871 | 0.0% → 3.3% | 0 → 871 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001092800` |
|    new |  +871 | 0.0% → 3.3% | 0 → 871 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|    new |  +871 | 0.0% → 3.3% | 0 → 871 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
|    new |  +869 | 0.0% → 3.3% | 0 → 869 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001092000`  |
|    new |  +866 | 0.0% → 3.3% | 0 → 866 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001096800`  |
|    new |  +866 | 0.0% → 3.3% | 0 → 866 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`  |
|    new |  +866 | 0.0% → 3.3% | 0 → 866 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
|    new |  +866 | 0.0% → 3.3% | 0 → 866 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
|    new |  +865 | 0.0% → 3.3% | 0 → 865 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
|    new |  +861 | 0.0% → 3.3% | 0 → 861 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ab400`  |
|    new |  +851 | 0.0% → 3.2% | 0 → 851 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001093400` |
|    new |  +847 | 0.0% → 3.2% | 0 → 847 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d4c00`  |
|    new |  +844 | 0.0% → 3.2% | 0 → 844 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
|    new |  +841 | 0.0% → 3.2% | 0 → 841 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010d4000`  |
|    new |  +841 | 0.0% → 3.2% | 0 → 841 | `guard(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001188c00`  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|  -61.0% |   -25 |  0.3% → 0.1% | 41 → 16 | `G1EvacuateRegionsBaseTask::work`                                                                                                                               | `libjvm.dylib` |
|  -70.0% |   -21 | 0.2% → <0.1% |  30 → 9 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib` |
|  -87.5% |   -21 | 0.2% → <0.1% |  24 → 3 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib` |
|  -76.9% |   -20 | 0.2% → <0.1% |  26 → 6 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib` |
|  -85.0% |   -17 | 0.1% → <0.1% |  20 → 3 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib` |
|  -85.0% |   -17 | 0.1% → <0.1% |  20 → 3 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |
|  -85.0% |   -17 | 0.1% → <0.1% |  20 → 3 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib` |
|  -85.0% |   -17 | 0.1% → <0.1% |  20 → 3 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib` |
|  -85.0% |   -17 | 0.1% → <0.1% |  20 → 3 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib` |
|  -60.0% |    -9 | 0.1% → <0.1% |  15 → 6 | `G1ConcurrentMark::mark_from_roots`                                                                                                                             | `libjvm.dylib` |
|  -60.0% |    -9 | 0.1% → <0.1% |  15 → 6 | `G1ConcurrentMarkThread::subphase_mark_from_roots`                                                                                                              | `libjvm.dylib` |
|  -50.0% |    -8 | 0.1% → <0.1% |  16 → 8 | `G1ConcurrentMarkThread::phase_mark_loop`                                                                                                                       | `libjvm.dylib` |
|  -42.1% |    -8 | 0.1% → <0.1% | 19 → 11 | `G1CMBitMap::iterate`                                                                                                                                           | `libjvm.dylib` |
|  -36.4% |    -8 |  0.2% → 0.1% | 22 → 14 | `G1CMTask::do_marking_step`                                                                                                                                     | `libjvm.dylib` |
| removed |    -8 |  0.1% → 0.0% |   8 → 0 | `frame::sender_for_interpreter_frame`                                                                                                                           | `libjvm.dylib` |
|  -88.9% |    -8 | 0.1% → <0.1% |   9 → 1 | `KlassCleaningTask::work`                                                                                                                                       | `libjvm.dylib` |
|  -33.3% |    -7 |         0.1% | 21 → 14 | `G1CMConcurrentMarkingTask::work`                                                                                                                               | `libjvm.dylib` |
|  -87.5% |    -7 | 0.1% → <0.1% |   8 → 1 | `MethodData::clean_method_data`                                                                                                                                 | `libjvm.dylib` |
|  -87.5% |    -7 | 0.1% → <0.1% |   8 → 1 | `InstanceKlass::clean_weak_instanceklass_links`                                                                                                                 | `libjvm.dylib` |
|  -33.3% |    -6 | 0.1% → <0.1% | 18 → 12 | `void G1CMTask::process_grey_task_entry<true>`                                                                                                                  | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -53.1% |   -17 |  0.2% → 0.1% | 32 → 15 | `Node::dominates`                             | `libjvm.dylib` |
|  -51.5% |   -17 |  0.2% → 0.1% | 33 → 16 | `MemNode::all_controls_dominate`              | `libjvm.dylib` |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::detect_init_independence`    | `libjvm.dylib` |
|  -53.6% |   -15 | 0.2% → <0.1% | 28 → 13 | `InitializeNode::can_capture_store`           | `libjvm.dylib` |
|  -51.7% |   -15 |  0.2% → 0.1% | 29 → 14 | `StoreNode::Ideal`                            | `libjvm.dylib` |
|  -25.9% |    -7 |  0.2% → 0.1% | 27 → 20 | `PhaseGVN::transform_no_reclaim`              | `libjvm.dylib` |
|  -50.0% |    -5 | 0.1% → <0.1% |  10 → 5 | `GraphKit::store_to_memory`                   | `libjvm.dylib` |
|  -55.6% |    -5 | 0.1% → <0.1% |   9 → 4 | `Compile::remove_speculative_types`           | `libjvm.dylib` |
|  -57.1% |    -4 |        <0.1% |   7 → 3 | `MemNode::find_previous_store`                | `libjvm.dylib` |
|  -44.4% |    -4 | 0.1% → <0.1% |   9 → 5 | `PhaseOutput::Process_OopMap_Node`            | `libjvm.dylib` |
|  -40.0% |    -4 | 0.1% → <0.1% |  10 → 6 | `RegionNode::Ideal`                           | `libjvm.dylib` |
|  -33.3% |    -4 | 0.1% → <0.1% |  12 → 8 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
|  -80.0% |    -4 |        <0.1% |   5 → 1 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |
| removed |    -4 | <0.1% → 0.0% |   4 → 0 | `Matcher::pd_clone_node`                      | `libjvm.dylib` |
|  -27.3% |    -3 | 0.1% → <0.1% |  11 → 8 | `NodeHash::hash_find_insert`                  | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `PhaseIFG::re_insert`                         | `libjvm.dylib` |
|  -30.0% |    -3 | 0.1% → <0.1% |  10 → 7 | `LoadNode::Ideal`                             | `libjvm.dylib` |
|  -11.1% |    -3 |  0.2% → 0.1% | 27 → 24 | `PhaseIdealLoop::build_loop_late_post_work`   | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `Node_Array::grow`                            | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `ConstraintCastNode::hash`                    | `libjvm.dylib` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -466 | 3.3% → 0.0% | 466 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a001092800` |
| removed |  -466 | 3.3% → 0.0% | 466 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010abc00`  |
| removed |  -466 | 3.3% → 0.0% | 466 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000a0010ac400`  |
| removed |  -466 | 3.3% → 0.0% | 466 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000a0010ac800`  |
| removed |  -466 | 3.3% → 0.0% | 466 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001088800` |
| removed |  -466 | 3.3% → 0.0% | 466 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010a9400`  |
| removed |  -464 | 3.2% → 0.0% | 464 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010c6400`  |
| removed |  -464 | 3.2% → 0.0% | 464 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010c7000`  |
| removed |  -462 | 3.2% → 0.0% | 462 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a001092000`  |
| removed |  -461 | 3.2% → 0.0% | 461 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010ab400`  |
| removed |  -461 | 3.2% → 0.0% | 461 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00109a000`  |
| removed |  -460 | 3.2% → 0.0% | 460 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a001096800`  |
| removed |  -460 | 3.2% → 0.0% | 460 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000a001098000`  |
| removed |  -460 | 3.2% → 0.0% | 460 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a001098400`  |
| removed |  -460 | 3.2% → 0.0% | 460 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a00102b000`  |
| removed |  -451 | 3.2% → 0.0% | 451 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010d4c00`  |
| removed |  -451 | 3.2% → 0.0% | 451 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a001093400` |
| removed |  -443 | 3.1% → 0.0% | 443 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010d3800`  |
| removed |  -442 | 3.1% → 0.0% | 442 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a0010d5c00`  |
| removed |  -442 | 3.1% → 0.0% | 442 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000a0010d4000`  |
