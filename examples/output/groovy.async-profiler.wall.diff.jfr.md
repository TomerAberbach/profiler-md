# Sampling profile diff

Collected 13,708 samples → 13,813 samples (+105 samples, +0.8%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Native           |  +0.2% |   +28 | 94.3% → 93.8% | 12,924 → 12,952 |
| Compiler         | +14.6% |   +68 |   3.4% → 3.9% |       467 → 535 |
| Standard library |  -0.3% |    -1 |   2.2% → 2.1% |       297 → 296 |
| Ours             | +70.0% |    +7 |          0.1% |         10 → 17 |
| JIT              | -20.0% |    -2 |          0.1% |          10 → 8 |
| Unknown          |    new |    +5 |  0.0% → <0.1% |           0 → 5 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                               | Location                 |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------ | ------------------------ |
|   +0.6% |   +40 | 46.1% → 46.0% | 6,313 → 6,353 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib` |
|  +55.6% |   +10 |   0.1% → 0.2% |       18 → 28 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib` |
|  +43.8% |    +7 |   0.1% → 0.2% |       16 → 23 | `PhaseChaitin::Split`                                                                                  | `libjvm.dylib`           |
|  +77.8% |    +7 |          0.1% |        9 → 16 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`           |
| +600.0% |    +6 |  <0.1% → 0.1% |         1 → 7 | `PhaseIdealLoop::build_loop_late_post_work`                                                            | `libjvm.dylib`           |
| +600.0% |    +6 |  <0.1% → 0.1% |         1 → 7 | `MultiNode::is_CFG`                                                                                    | `libjvm.dylib`           |
|  +27.8% |    +5 |   0.1% → 0.2% |       18 → 23 | `Node::dominates`                                                                                      | `libjvm.dylib`           |
|  +83.3% |    +5 |  <0.1% → 0.1% |        6 → 11 | `ciObjectFactory::get_metadata`                                                                        | `libjvm.dylib`           |
| +125.0% |    +5 |  <0.1% → 0.1% |         4 → 9 | `vmSymbols::find_sid`                                                                                  | `libjvm.dylib`           |
|     new |    +5 |  0.0% → <0.1% |         0 → 5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`           |
|     new |    +5 |  0.0% → <0.1% |         0 → 5 | `(anonymous)`                                                                                          | `<unknown>`              |
|  +36.4% |    +4 |          0.1% |       11 → 15 | `PhaseAggressiveCoalesce::insert_copies`                                                               | `libjvm.dylib`           |
|  +44.4% |    +4 |          0.1% |        9 → 13 | `PhaseChaitin::build_ifg_physical`                                                                     | `libjvm.dylib`           |
| +133.3% |    +4 |  <0.1% → 0.1% |         3 → 7 | `NodeHash::hash_find_insert`                                                                           | `libjvm.dylib`           |
| +400.0% |    +4 |         <0.1% |         1 → 5 | `LIR_OpVisitState::visit`                                                                              | `libjvm.dylib`           |
|  +80.0% |    +4 |  <0.1% → 0.1% |         5 → 9 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`         | `libjvm.dylib`           |
| +400.0% |    +4 |         <0.1% |         1 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                      | `libjvm.dylib`           |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `resource_allocate_bytes`                                                                              | `libjvm.dylib`           |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `PhaseCFG::schedule_early`                                                                             | `libjvm.dylib`           |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `arrayof_jlong_disjoint_arraycopy`                                                                     | `<unknown>`              |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                               | Location                   |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------ | -------------------------- |
|   +0.6% |   +40 | 46.1% → 46.0% | 6,313 → 6,353 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`   |
|  +55.6% |   +10 |   0.1% → 0.2% |       18 → 28 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`   |
|  +77.8% |    +7 |          0.1% |        9 → 16 | `java_lang_Throwable::fill_in_stack_trace`                                                             | `libjvm.dylib`             |
| +125.0% |    +5 |  <0.1% → 0.1% |         4 → 9 | `vmSymbols::find_sid`                                                                                  | `libjvm.dylib`             |
|     new |    +5 |  0.0% → <0.1% |         0 → 5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`             |
|  +80.0% |    +4 |  <0.1% → 0.1% |         5 → 9 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`         | `libjvm.dylib`             |
| +400.0% |    +4 |         <0.1% |         1 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                      | `libjvm.dylib`             |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `resource_allocate_bytes`                                                                              | `libjvm.dylib`             |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `arrayof_jlong_disjoint_arraycopy`                                                                     | `<unknown>`                |
|  +60.0% |    +3 |  <0.1% → 0.1% |         5 → 8 | `posix_madvise`                                                                                        | `libsystem_kernel.dylib`   |
| +150.0% |    +3 |         <0.1% |         2 → 5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`             |
|     new |    +3 |  0.0% → <0.1% |         0 → 3 | `JVM_NewArray`                                                                                         | `libjvm.dylib`             |
|     new |    +3 |  0.0% → <0.1% |         0 → 3 | `ClassLoaderData::oops_do`                                                                             | `libjvm.dylib`             |
|     new |    +3 |  0.0% → <0.1% |         0 → 3 | `G1CodeRootSet::add`                                                                                   | `libjvm.dylib`             |
|     new |    +3 |  0.0% → <0.1% |         0 → 3 | `swtch_pri`                                                                                            | `libsystem_kernel.dylib`   |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `Chunk::chop`                                                                                          | `libjvm.dylib`             |
|  +13.3% |    +2 |          0.1% |       15 → 17 | `tlv_get_addr`                                                                                         | `libdyld.dylib`            |
| +100.0% |    +2 |         <0.1% |         2 → 4 | `sys_icache_invalidate`                                                                                | `libsystem_platform.dylib` |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `G1CardSet::add_card`                                                                                  | `libjvm.dylib`             |
|  +66.7% |    +2 |         <0.1% |         3 → 5 | `Dict::Insert`                                                                                         | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------- | -------------- |
|  +43.8% |    +7 |  0.1% → 0.2% | 16 → 23 | `PhaseChaitin::Split`                                 | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `PhaseIdealLoop::build_loop_late_post_work`           | `libjvm.dylib` |
| +600.0% |    +6 | <0.1% → 0.1% |   1 → 7 | `MultiNode::is_CFG`                                   | `libjvm.dylib` |
|  +27.8% |    +5 |  0.1% → 0.2% | 18 → 23 | `Node::dominates`                                     | `libjvm.dylib` |
|  +83.3% |    +5 | <0.1% → 0.1% |  6 → 11 | `ciObjectFactory::get_metadata`                       | `libjvm.dylib` |
|  +36.4% |    +4 |         0.1% | 11 → 15 | `PhaseAggressiveCoalesce::insert_copies`              | `libjvm.dylib` |
|  +44.4% |    +4 |         0.1% |  9 → 13 | `PhaseChaitin::build_ifg_physical`                    | `libjvm.dylib` |
| +133.3% |    +4 | <0.1% → 0.1% |   3 → 7 | `NodeHash::hash_find_insert`                          | `libjvm.dylib` |
| +400.0% |    +4 |        <0.1% |   1 → 5 | `LIR_OpVisitState::visit`                             | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `PhaseCFG::schedule_early`                            | `libjvm.dylib` |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `TypeInterfaces::eq`                                  | `libjvm.dylib` |
|  +42.9% |    +3 |         0.1% |  7 → 10 | `PhaseLive::compute`                                  | `libjvm.dylib` |
| +100.0% |    +3 |        <0.1% |   3 → 6 | `MachNode::rematerialize`                             | `libjvm.dylib` |
| +150.0% |    +3 |        <0.1% |   2 → 5 | `PhaseIterGVN::subsume_node`                          | `libjvm.dylib` |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `LinearScan::assign_reg_num`                          | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `Type::hashcons`                                      | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `MethodLiveness::BasicBlock::compute_gen_kill_single` | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `RelocIterator::set_limits`                           | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `Scheduling::anti_do_def`                             | `libjvm.dylib` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `PhaseChaitin::raise_pressure`                        | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                  | Location                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|     new |    +4 | 0.0% → <0.1% |   0 → 4 | `resize()`                                                                | `java.util.HashMap`                                              |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `collector(Object, Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x00000008010d3c00`              |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `newNode(int, Object, Object, HashMap$Node)`                              | `java.util.HashMap`                                              |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `computeIfAbsent(Object, Function)`                                       | `java.util.concurrent.ConcurrentHashMap`                         |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `computeValueConversions(MethodType, MethodType, boolean, boolean)`       | `java.lang.invoke.MethodHandleImpl`                              |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `equals(Object)`                                                          | `java.lang.String`                                               |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `isNullConversion(Class, Class, boolean)`                                 | `sun.invoke.util.VerifyType`                                     |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `boxInteger(int)`                                                         | `sun.invoke.util.ValueConversions`                               |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `match(ClassValue$Entry)`                                                 | `java.lang.ClassValue`                                           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00`              |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                              |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)`          | `java.lang.invoke.MethodHandles`                                 |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `unreflect(Method)`                                                       | `java.lang.invoke.MethodHandles$Lookup`                          |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `visitBlockStatement(BlockStatement)`                                     | `org.codehaus.groovy.ast.CodeVisitorSupport`                     |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `add(ATNConfig, PredictionContextCache)`                                  | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                 |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `invoke(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000080102ac00`              |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `invokeVirtual(Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801097c00`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `sameClasses(Class[], Object[])`                                          | `org.codehaus.groovy.vmplugin.v8.IndyGuardsFiltersAndSignatures` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `bindArgumentForm(int)`                                                   | `java.lang.invoke.LambdaFormEditor`                              |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                                                                                 | Location                                                  |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   -1.0% |   -53 | 39.2% → 38.6% | 5,378 → 5,325 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`                                  |
|  -72.7% |    -8 |  0.1% → <0.1% |        11 → 3 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`                                            |
|  -80.0% |    -8 |  0.1% → <0.1% |        10 → 2 | `frame::sender_raw`                                                                                                                                      | `libjvm.dylib`                                            |
|  -40.0% |    -8 |          0.1% |       20 → 12 | `cast(Object)`                                                                                                                                           | `java.lang.Class`                                         |
|  -58.3% |    -7 |  0.1% → <0.1% |        12 → 5 | `collector(Object, Object)`                                                                                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`       |
|  -75.0% |    -6 |  0.1% → <0.1% |         8 → 2 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`                                            |
| removed |    -5 |  <0.1% → 0.0% |         5 → 0 | `ConnectionGraph::add_edge`                                                                                                                              | `libjvm.dylib`                                            |
|  -62.5% |    -5 |  0.1% → <0.1% |         8 → 3 | `invokeBasic(Object[])`                                                                                                                                  | `java.lang.invoke.MethodHandle`                           |
|  -57.1% |    -4 |  0.1% → <0.1% |         7 → 3 | `getNode(Object)`                                                                                                                                        | `java.util.HashMap`                                       |
|  -60.0% |    -3 |         <0.1% |         5 → 2 | `PhaseIdealLoop::Dominators`                                                                                                                             | `libjvm.dylib`                                            |
|  -75.0% |    -3 |         <0.1% |         4 → 1 | `LocationValue::write_on`                                                                                                                                | `libjvm.dylib`                                            |
|  -33.3% |    -3 |  0.1% → <0.1% |         9 → 6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                            |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `TypeOopPtr::klass`                                                                                                                                      | `libjvm.dylib`                                            |
|  -75.0% |    -3 |         <0.1% |         4 → 1 | `PhaseCCP::push_more_uses`                                                                                                                               | `libjvm.dylib`                                            |
|  -50.0% |    -3 |         <0.1% |         6 → 3 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`                                            |
|  -60.0% |    -3 |         <0.1% |         5 → 2 | `RegionNode::is_CFG`                                                                                                                                     | `libjvm.dylib`                                            |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `PhaseIFG::SquareUp`                                                                                                                                     | `libjvm.dylib`                                            |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `Node::clone`                                                                                                                                            | `libjvm.dylib`                                            |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `RegionNode::is_unreachable_from_root`                                                                                                                   | `libjvm.dylib`                                            |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `setGuards(Object)`                                                                                                                                      | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### Native

|  Change | Delta |             % |       Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|   -1.0% |   -53 | 39.2% → 38.6% | 5,378 → 5,325 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  -72.7% |    -8 |  0.1% → <0.1% |        11 → 3 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  -80.0% |    -8 |  0.1% → <0.1% |        10 → 2 | `frame::sender_raw`                                                                                                                                      | `libjvm.dylib`             |
|  -75.0% |    -3 |         <0.1% |         4 → 1 | `LocationValue::write_on`                                                                                                                                | `libjvm.dylib`             |
|  -33.3% |    -3 |  0.1% → <0.1% |         9 → 6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| removed |    -3 |  <0.1% → 0.0% |         3 → 0 | `CodeBlob::is_upcall_stub`                                                                                                                               | `libjvm.dylib`             |
|  -42.9% |    -3 |  0.1% → <0.1% |         7 → 4 | `frame::sender_for_compiled_frame`                                                                                                                       | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `stub:pthread_mutex_unlock`                                                                                                                              | `libjvm.dylib`             |
|  -25.0% |    -2 |  0.1% → <0.1% |         8 → 6 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `iRegPNoSpOper::type`                                                                                                                                    | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `Klass::next_sibling`                                                                                                                                    | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `Symbol::increment_refcount`                                                                                                                             | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `DataLayout::cell_count`                                                                                                                                 | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `Constant::as_Constant`                                                                                                                                  | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `Location::write_on`                                                                                                                                     | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `void OopOopIterateDispatch<G1RootRegionScanClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                  | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `DependencyContext::add_dependent_nmethod`                                                                                                               | `libjvm.dylib`             |
|  -66.7% |    -2 |         <0.1% |         3 → 1 | `nmethodBucket::next_not_unloading`                                                                                                                      | `libjvm.dylib`             |
|  -66.7% |    -2 |         <0.1% |         3 → 1 | `nmethod::is_unloading`                                                                                                                                  | `libjvm.dylib`             |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `iRegINoSpOper::type`                                                                                                                                    | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                      | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|  -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `PhaseLive::add_liveout`                      | `libjvm.dylib` |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `ConnectionGraph::add_edge`                   | `libjvm.dylib` |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `PhaseIdealLoop::Dominators`                  | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `TypeOopPtr::klass`                           | `libjvm.dylib` |
|  -75.0% |    -3 |        <0.1% |   4 → 1 | `PhaseCCP::push_more_uses`                    | `libjvm.dylib` |
|  -50.0% |    -3 |        <0.1% |   6 → 3 | `IntervalWalker::walk_to`                     | `libjvm.dylib` |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `RegionNode::is_CFG`                          | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseIFG::SquareUp`                          | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Node::clone`                                 | `libjvm.dylib` |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `RegionNode::is_unreachable_from_root`        | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciTypeFlow::StateVector::apply_one_bytecode` | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ciInstanceKlass::get_field_by_offset`        | `libjvm.dylib` |
|  -50.0% |    -2 |        <0.1% |   4 → 2 | `PhaseChaitin::build_ifg_virtual`             | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `MergeMemNode::bottom_type`                   | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::try_sink_out_of_loop`        | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::hoist_to_cheaper_block`            | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhiNode::Opcode`                             | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `Node::is_dead_loop_safe`                     | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_if_with_blocks_pre`    | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `JVMState::of_depth`                          | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                   | Location                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|  -40.0% |    -8 |         0.1% | 20 → 12 | `cast(Object)`                                                                             | `java.lang.Class`                                                |
|  -58.3% |    -7 | 0.1% → <0.1% |  12 → 5 | `collector(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$MH.0x0000000801031800`              |
|  -62.5% |    -5 | 0.1% → <0.1% |   8 → 3 | `invokeBasic(Object[])`                                                                    | `java.lang.invoke.MethodHandle`                                  |
|  -57.1% |    -4 | 0.1% → <0.1% |   7 → 3 | `getNode(Object)`                                                                          | `java.util.HashMap`                                              |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `setGuards(Object)`                                                                        | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`        |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `chooseMeta(MetaClassImpl)`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector$PropertySelector`      |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `checkCustomized(MethodHandle)`                                                            | `java.lang.invoke.Invokers`                                      |
|  -60.0% |    -3 |        <0.1% |   5 → 2 | `putVal(int, Object, Object, boolean, boolean)`                                            | `java.util.HashMap`                                              |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `getInCache(LambdaFormEditor$TransformKey)`                                                | `java.lang.invoke.LambdaFormEditor`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `findSpecies(Object)`                                                                      | `java.lang.invoke.ClassSpecializer`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `guard(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`              |
|  -40.0% |    -2 |        <0.1% |   5 → 3 | `invokeStatic(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `rebind()`                                                                                 | `java.lang.invoke.DirectMethodHandle`                            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `setHandleForMetaMethod()`                                                                 | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`        |
|  -14.3% |    -2 |         0.1% | 14 → 12 | `newInstance(Class, int)`                                                                  | `java.lang.reflect.Array`                                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getReachableConfigSet(CharStream, ATNConfigSet, ATNConfigSet, int)`                       | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `lambdaFormEditor(LambdaForm)`                                                             | `java.lang.invoke.LambdaFormEditor`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `invoke(Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x00000008017e2800`              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `filter(Method[], String, Class[], boolean)`                                               | `java.lang.PublicMethods$MethodList`                             |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|    Change | Delta |             % |       Samples | Function                                 | Location                                            |
| --------: | ----: | ------------: | ------------: | ---------------------------------------- | --------------------------------------------------- |
| +43200.0% |  +432 |  <0.1% → 3.1% |       1 → 433 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00` |
| +10725.0% |  +429 |  <0.1% → 3.1% |       4 → 433 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|  +1976.2% |  +415 |   0.2% → 3.2% |      21 → 436 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000` |
|  +1976.2% |  +415 |   0.2% → 3.2% |      21 → 436 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400` |
|   +750.0% |  +375 |   0.4% → 3.1% |      50 → 425 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d4c00` |
| +11733.3% |  +352 |  <0.1% → 2.6% |       3 → 355 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080159dc00` |
| +35200.0% |  +352 |  <0.1% → 2.6% |       1 → 353 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008015a0800` |
|   +675.0% |  +351 |   0.4% → 2.9% |      52 → 403 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801282400` |
|  +6560.0% |  +328 |  <0.1% → 2.4% |       5 → 333 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801268800` |
| +16250.0% |  +325 |  <0.1% → 2.4% |       2 → 327 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080136a000` |
| +32400.0% |  +324 |  <0.1% → 2.4% |       1 → 325 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080163b400` |
| +16150.0% |  +323 |  <0.1% → 2.4% |       2 → 325 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080163c000` |
|  +3962.5% |  +317 |   0.1% → 2.4% |       8 → 325 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080163bc00` |
|   +247.9% |  +295 |   0.9% → 3.0% |     119 → 414 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801182800` |
| +26500.0% |  +265 |  <0.1% → 1.9% |       1 → 266 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008017bcc00` |
|   +465.2% |  +214 |   0.3% → 1.9% |      46 → 260 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080136a400` |
|   +153.4% |  +158 |   0.8% → 1.9% |     103 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010d4800` |
|    +52.1% |  +149 |   2.1% → 3.1% |     286 → 435 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
|     +8.6% |  +132 | 11.2% → 12.1% | 1,541 → 1,673 | `CompileBroker::compiler_thread_loop`    | `libjvm.dylib`                                      |
|     +3.2% |  +122 | 27.8% → 28.4% | 3,804 → 3,926 | `JavaThread::thread_main_inner`          | `libjvm.dylib`                                      |

##### Native

|  Change | Delta |             % |         Samples | Function                                           | Location                  |
| ------: | ----: | ------------: | --------------: | -------------------------------------------------- | ------------------------- |
|   +3.2% |  +122 | 27.8% → 28.4% |   3,804 → 3,926 | `JavaThread::thread_main_inner`                    | `libjvm.dylib`            |
|   +1.0% |  +106 | 80.2% → 80.3% | 10,991 → 11,097 | `Thread::call_run`                                 | `libjvm.dylib`            |
|   +1.0% |  +106 | 80.2% → 80.3% | 10,991 → 11,097 | `thread_native_entry`                              | `libjvm.dylib`            |
|   +0.9% |  +105 | 83.5% → 83.6% | 11,445 → 11,550 | `_pthread_start`                                   | `libsystem_pthread.dylib` |
|   +0.9% |  +105 | 83.5% → 83.6% | 11,445 → 11,550 | `thread_start`                                     | `libsystem_pthread.dylib` |
|   +4.6% |   +63 | 10.0% → 10.3% |   1,364 → 1,427 | `Monitor::wait`                                    | `libjvm.dylib`            |
|   +0.8% |   +42 |         36.2% |   4,958 → 5,000 | `PlatformMonitor::wait`                            | `libjvm.dylib`            |
|   +0.6% |   +40 | 46.1% → 46.0% |   6,313 → 6,353 | `__psynch_cvwait`                                  | `libsystem_kernel.dylib`  |
|  +34.4% |   +21 |   0.4% → 0.6% |         61 → 82 | `Parse::do_all_blocks`                             | `libjvm.dylib`            |
|  +34.4% |   +21 |   0.4% → 0.6% |         61 → 82 | `Parse::Parse`                                     | `libjvm.dylib`            |
|  +34.4% |   +21 |   0.4% → 0.6% |         61 → 82 | `ParseGenerator::generate`                         | `libjvm.dylib`            |
|  +32.8% |   +20 |   0.4% → 0.6% |         61 → 81 | `Parse::do_one_block`                              | `libjvm.dylib`            |
|  +27.1% |   +16 |   0.4% → 0.5% |         59 → 75 | `Parse::do_call`                                   | `libjvm.dylib`            |
| +166.7% |   +15 |   0.1% → 0.2% |          9 → 24 | `G1EvacuateRegionsBaseTask::work`                  | `libjvm.dylib`            |
| +100.0% |   +13 |   0.1% → 0.2% |         13 → 26 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib`            |
| +200.0% |   +12 |  <0.1% → 0.1% |          6 → 18 | `ThreadCritical::ThreadCritical`                   | `libjvm.dylib`            |
| +240.0% |   +12 |  <0.1% → 0.1% |          5 → 17 | `Chunk::operator new`                              | `libjvm.dylib`            |
| +171.4% |   +12 |          0.1% |          7 → 19 | `G1CMTask::do_marking_step`                        | `libjvm.dylib`            |
| +171.4% |   +12 |          0.1% |          7 → 19 | `G1CMConcurrentMarkingTask::work`                  | `libjvm.dylib`            |
|  +55.0% |   +11 |   0.1% → 0.2% |         20 → 31 | `WorkerThreads::run_task`                          | `libjvm.dylib`            |

##### Compiler

|  Change | Delta |             % |       Samples | Function                                   | Location       |
| ------: | ----: | ------------: | ------------: | ------------------------------------------ | -------------- |
|   +8.6% |  +132 | 11.2% → 12.1% | 1,541 → 1,673 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  +10.5% |   +67 |   4.6% → 5.1% |     637 → 704 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|   +7.2% |   +65 |   6.6% → 7.0% |     904 → 969 | `CompileQueue::get`                        | `libjvm.dylib` |
|  +11.8% |   +61 |   3.8% → 4.2% |     515 → 576 | `Compile::Compile`                         | `libjvm.dylib` |
|  +11.6% |   +60 |   3.8% → 4.2% |     517 → 577 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +17.6% |   +42 |   1.7% → 2.0% |     238 → 280 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  +12.5% |   +18 |   1.1% → 1.2% |     144 → 162 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| +106.7% |   +16 |   0.1% → 0.2% |       15 → 31 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| +280.0% |   +14 |  <0.1% → 0.1% |        5 → 19 | `Type::hashcons`                           | `libjvm.dylib` |
|  +59.1% |   +13 |   0.2% → 0.3% |       22 → 35 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
|  +15.8% |   +12 |          0.6% |       76 → 88 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  +54.5% |   +12 |          0.2% |       22 → 34 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
|  +14.3% |   +11 |          0.6% |       77 → 88 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  +73.3% |   +11 |   0.1% → 0.2% |       15 → 26 | `ciObjectFactory::get_metadata`            | `libjvm.dylib` |
|  +35.7% |   +10 |   0.2% → 0.3% |       28 → 38 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
|  +26.7% |    +8 |   0.2% → 0.3% |       30 → 38 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |
|  +34.8% |    +8 |          0.2% |       23 → 31 | `GraphBuilder::try_inline`                 | `libjvm.dylib` |
|  +34.8% |    +8 |          0.2% |       23 → 31 | `GraphBuilder::try_inline_full`            | `libjvm.dylib` |
| +800.0% |    +8 |  <0.1% → 0.1% |         1 → 9 | `GraphBuilder::access_field`               | `libjvm.dylib` |
|  +36.8% |    +7 |   0.1% → 0.2% |       19 → 26 | `StoreNode::Ideal`                         | `libjvm.dylib` |

##### Standard library

|    Change | Delta |            % |   Samples | Function                                 | Location                                            |
| --------: | ----: | -----------: | --------: | ---------------------------------------- | --------------------------------------------------- |
| +43200.0% |  +432 | <0.1% → 3.1% |   1 → 433 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109bc00` |
| +10725.0% |  +429 | <0.1% → 3.1% |   4 → 433 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
|  +1976.2% |  +415 |  0.2% → 3.2% |  21 → 436 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000` |
|  +1976.2% |  +415 |  0.2% → 3.2% |  21 → 436 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400` |
|   +750.0% |  +375 |  0.4% → 3.1% |  50 → 425 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d4c00` |
| +11733.3% |  +352 | <0.1% → 2.6% |   3 → 355 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080159dc00` |
| +35200.0% |  +352 | <0.1% → 2.6% |   1 → 353 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008015a0800` |
|   +675.0% |  +351 |  0.4% → 2.9% |  52 → 403 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801282400` |
|  +6560.0% |  +328 | <0.1% → 2.4% |   5 → 333 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801268800` |
| +16250.0% |  +325 | <0.1% → 2.4% |   2 → 327 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080136a000` |
| +32400.0% |  +324 | <0.1% → 2.4% |   1 → 325 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080163b400` |
| +16150.0% |  +323 | <0.1% → 2.4% |   2 → 325 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080163c000` |
|  +3962.5% |  +317 |  0.1% → 2.4% |   8 → 325 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080163bc00` |
|   +247.9% |  +295 |  0.9% → 3.0% | 119 → 414 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801182800` |
| +26500.0% |  +265 | <0.1% → 1.9% |   1 → 266 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008017bcc00` |
|   +465.2% |  +214 |  0.3% → 1.9% |  46 → 260 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080136a400` |
|   +153.4% |  +158 |  0.8% → 1.9% | 103 → 261 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010d4800` |
|    +52.1% |  +149 |  2.1% → 3.1% | 286 → 435 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080108e000` |
|   +195.9% |   +96 |  0.4% → 1.0% |  49 → 145 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801291000` |
|   +288.0% |   +72 |  0.2% → 0.7% |   25 → 97 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c7800` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Native

|  Change | Delta |             % |       Samples | Function                                                 | Location                 |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------- | ------------------------ |
|   -1.0% |   -53 | 39.2% → 38.6% | 5,378 → 5,325 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib` |
|   -0.6% |   -21 | 26.2% → 25.9% | 3,594 → 3,573 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`           |
|   -0.2% |   -11 | 35.9% → 35.6% | 4,922 → 4,911 | `WorkerThread::run`                                      | `libjvm.dylib`           |
|  -84.6% |   -11 |  0.1% → <0.1% |        13 → 2 | `LinkResolver::resolve_method`                           | `libjvm.dylib`           |
|  -83.3% |   -10 |  0.1% → <0.1% |        12 → 2 | `frame::sender_raw`                                      | `libjvm.dylib`           |
|  -81.8% |    -9 |  0.1% → <0.1% |        11 → 2 | `InstanceKlass::uncached_lookup_method`                  | `libjvm.dylib`           |
|  -72.7% |    -8 |  0.1% → <0.1% |        11 → 3 | `InstanceKlass::find_method_index`                       | `libjvm.dylib`           |
|  -41.2% |    -7 |          0.1% |       17 → 10 | `GenericWaitBarrier::Cell::wait`                         | `libjvm.dylib`           |
|  -41.2% |    -7 |          0.1% |       17 → 10 | `GenericWaitBarrier::wait`                               | `libjvm.dylib`           |
|  -41.2% |    -7 |          0.1% |       17 → 10 | `SafepointSynchronize::block`                            | `libjvm.dylib`           |
|  -41.2% |    -7 |          0.1% |       17 → 10 | `SafepointMechanism::process`                            | `libjvm.dylib`           |
|  -60.0% |    -6 |  0.1% → <0.1% |        10 → 4 | `IRScopeDebugInfo::record_debug_info`                    | `libjvm.dylib`           |
|  -60.0% |    -6 |  0.1% → <0.1% |        10 → 4 | `CodeEmitInfo::record_debug_info`                        | `libjvm.dylib`           |
|  -85.7% |    -6 |  0.1% → <0.1% |         7 → 1 | `LinkResolver::resolve_static_call`                      | `libjvm.dylib`           |
|  -85.7% |    -6 |  0.1% → <0.1% |         7 → 1 | `DependencyContext::add_dependent_nmethod`               | `libjvm.dylib`           |
|  -46.2% |    -6 |          0.1% |        13 → 7 | `MemAllocator::allocate`                                 | `libjvm.dylib`           |
|   -1.3% |    -6 |   3.3% → 3.2% |     453 → 447 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`           |
| removed |    -5 |  <0.1% → 0.0% |         5 → 0 | `IdealLoopTree::iteration_split`                         | `libjvm.dylib`           |
|  -71.4% |    -5 |  0.1% → <0.1% |         7 → 2 | `InstanceKlass::add_dependent_nmethod`                   | `libjvm.dylib`           |
|  -83.3% |    -5 |         <0.1% |         6 → 1 | `LinkResolver::linktime_resolve_virtual_method`          | `libjvm.dylib`           |

##### Compiler

|  Change | Delta |            % | Samples | Function                                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------------------- | -------------- |
|  -81.8% |    -9 | 0.1% → <0.1% |  11 → 2 | `PhaseLive::add_liveout`                        | `libjvm.dylib` |
|  -72.7% |    -8 | 0.1% → <0.1% |  11 → 3 | `ciEnv::lookup_method`                          | `libjvm.dylib` |
|  -46.7% |    -7 |         0.1% |  15 → 8 | `ConnectionGraph::compute_escape`               | `libjvm.dylib` |
|  -43.8% |    -7 |         0.1% |  16 → 9 | `ConnectionGraph::do_analysis`                  | `libjvm.dylib` |
|  -25.9% |    -7 |  0.2% → 0.1% | 27 → 20 | `Compilation::emit_code_body`                   | `libjvm.dylib` |
|  -40.0% |    -6 |         0.1% |  15 → 9 | `PhaseChaitin::gather_lrg_masks`                | `libjvm.dylib` |
|  -31.6% |    -6 |         0.1% | 19 → 13 | `PhaseLive::compute`                            | `libjvm.dylib` |
|  -60.0% |    -6 | 0.1% → <0.1% |  10 → 4 | `TypeInstPtr::add_offset`                       | `libjvm.dylib` |
|  -37.5% |    -6 |         0.1% | 16 → 10 | `PhaseCCP::analyze`                             | `libjvm.dylib` |
|  -75.0% |    -6 | 0.1% → <0.1% |   8 → 2 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `ConnectionGraph::complete_connection_graph`    | `libjvm.dylib` |
| removed |    -6 | <0.1% → 0.0% |   6 → 0 | `CompilationPolicy::event`                      | `libjvm.dylib` |
|  -38.5% |    -5 |         0.1% |  13 → 8 | `ciTypeFlow::df_flow_types`                     | `libjvm.dylib` |
| removed |    -5 | <0.1% → 0.0% |   5 → 0 | `ConnectionGraph::add_edge`                     | `libjvm.dylib` |
|  -55.6% |    -5 | 0.1% → <0.1% |   9 → 4 | `RegionNode::Ideal`                             | `libjvm.dylib` |
|  -35.7% |    -5 |         0.1% |  14 → 9 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
|  -25.0% |    -5 |         0.1% | 20 → 15 | `LIR_Assembler::emit_lir_list`                  | `libjvm.dylib` |
|  -25.0% |    -5 |         0.1% | 20 → 15 | `LIR_Assembler::emit_code`                      | `libjvm.dylib` |
|  -41.7% |    -5 |         0.1% |  12 → 7 | `LIRGenerator::block_do`                        | `libjvm.dylib` |
|  -45.5% |    -5 | 0.1% → <0.1% |  11 → 6 | `LIR_Assembler::add_call_info`                  | `libjvm.dylib` |

##### Standard library

| Change | Delta |            % |   Samples | Function                                 | Location                                            |
| -----: | ----: | -----------: | --------: | ---------------------------------------- | --------------------------------------------------- |
| -99.3% |  -436 | 3.2% → <0.1% |   439 → 3 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010a0800` |
| -95.0% |  -415 |  3.2% → 0.2% |  437 → 22 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109ac00` |
| -94.1% |  -414 |  3.2% → 0.2% |  440 → 26 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400` |
| -96.9% |  -406 |  3.1% → 0.1% |  419 → 13 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080118b000` |
| -88.6% |  -388 |  3.2% → 0.4% |  438 → 50 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
| -85.5% |  -376 |  3.2% → 0.5% |  440 → 64 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010d9c00` |
| -99.7% |  -356 | 2.6% → <0.1% |   357 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801432400` |
| -98.9% |  -354 | 2.6% → <0.1% |   358 → 4 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000080150f800` |
| -99.7% |  -340 | 2.5% → <0.1% |   341 → 1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801338800` |
| -99.7% |  -326 | 2.4% → <0.1% |   327 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008014d4400` |
| -99.4% |  -325 | 2.4% → <0.1% |   327 → 2 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801115c00` |
| -98.2% |  -321 | 2.4% → <0.1% |   327 → 6 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801629800` |
| -71.3% |  -290 |  3.0% → 0.8% | 407 → 117 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000000801290000` |
| -99.6% |  -267 | 2.0% → <0.1% |   268 → 1 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008014e0800` |
| -98.5% |  -263 | 1.9% → <0.1% |   267 → 4 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010d5000` |
| -98.8% |  -253 | 1.9% → <0.1% |   256 → 3 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801130400` |
| -67.0% |  -233 |  2.5% → 0.8% | 348 → 115 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801290c00` |
| -34.8% |  -149 |  3.1% → 2.0% | 428 → 279 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
| -81.7% |  -125 |  1.1% → 0.2% |  153 → 28 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080109b400` |
| -61.0% |   -75 |  0.9% → 0.3% |  123 → 48 | `invoke(Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000080128b800` |
