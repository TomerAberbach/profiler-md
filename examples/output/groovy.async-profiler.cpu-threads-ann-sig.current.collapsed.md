# Sampling profile

Collected 630 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 55.7% |     351 |
| Native           | 29.4% |     185 |
| Standard library | 14.0% |      88 |
| JIT              |  1.0% |       6 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 2.5% |      16 | `tlv_get_addr`                                                               | `<unknown>` |
| 2.5% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.6% |      10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 1.3% |       8 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 1.3% |       8 | `Node::is_CFG() const`                                                       | `<unknown>` |
| 1.3% |       8 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.1% |       7 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 1.1% |       7 | `pthread_jit_write_protect_np`                                               | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.0% |       6 | `Arena::contains(void const*) const`                                         | `<unknown>` |
| 1.0% |       6 | `semaphore_wait_trap`                                                        | `<unknown>` |
| 1.0% |       6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 0.8% |       5 | `PhaseChaitin::post_allocate_copy_removal()`                                 | `<unknown>` |
| 0.8% |       5 | `_platform_memset`                                                           | `<unknown>` |
| 0.8% |       5 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.8% |       5 | `__psynch_mutexwait`                                                         | `<unknown>` |
| 0.8% |       5 | `Compile::identify_useful_nodes(Unique_Node_List&)`                          | `<unknown>` |
| 0.6% |       4 | `Node::unique_ctrl_out_or_null() const`                                      | `<unknown>` |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 0.6% |       4 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 2.5% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.6% |      10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 1.3% |       8 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 1.3% |       8 | `Node::is_CFG() const`                                                       | `<unknown>` |
| 1.3% |       8 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.1% |       7 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.0% |       6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 0.8% |       5 | `PhaseChaitin::post_allocate_copy_removal()`                                 | `<unknown>` |
| 0.8% |       5 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.8% |       5 | `Compile::identify_useful_nodes(Unique_Node_List&)`                          | `<unknown>` |
| 0.6% |       4 | `Node::unique_ctrl_out_or_null() const`                                      | `<unknown>` |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 0.6% |       4 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |
| 0.6% |       4 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
| 0.6% |       4 | `PhaseChaitin::build_ifg_virtual()`                                          | `<unknown>` |
| 0.6% |       4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)`                          | `<unknown>` |
| 0.6% |       4 | `IntervalWalker::walk_to(IntervalState, int)`                                | `<unknown>` |
| 0.6% |       4 | `Node_Backward_Iterator::next()`                                             | `<unknown>` |
| 0.5% |       3 | `PhiNode::Ideal(PhaseGVN*, bool)`                                            | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.5% |      16 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.1% |       7 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 1.0% |       6 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 1.0% |       6 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>` |
| 0.8% |       5 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.8% |       5 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.6% |       4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| 0.6% |       4 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.6% |       4 | `bsearch`                                                                                                                                                                   | `<unknown>` |
| 0.5% |       3 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.5% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.5% |       3 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                                                                                                     | `<unknown>` |
| 0.5% |       3 | `_qsort`                                                                                                                                                                    | `<unknown>` |
| 0.5% |       3 | `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)`                                                                                                  | `<unknown>` |
| 0.5% |       3 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.3% |       2 | `Dict::Insert(void*, void*, bool)`                                                                                                                                          | `<unknown>` |
| 0.3% |       2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)`  | `<unknown>` |
| 0.3% |       2 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`                                                                                        | `<unknown>` |
| 0.3% |       2 | `PhiSimplifier::block_do(BlockBegin*)`                                                                                                                                      | `<unknown>` |
| 0.3% |       2 | `_platform_bzero`                                                                                                                                                           | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                     | Location                                                  |
| ---: | ------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| 0.5% |       3 | `getNode(Object)`                                                                            | `java.util.HashMap`                                       |
| 0.5% |       3 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| 0.3% |       2 | `invokeVirtual(Object, Object)`                                                              | `java.lang.invoke.DirectMethodHandle$Holder`              |
| 0.3% |       2 | `accept(Object)`                                                                             | `java.util.stream.ReferencePipeline$3$1`                  |
| 0.3% |       2 | `requireNonNull(Object)`                                                                     | `java.util.Objects`                                       |
| 0.3% |       2 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`    |
| 0.3% |       2 | `substring(int, int)`                                                                        | `java.lang.String`                                        |
| 0.2% |       1 | `name(byte[], int)`                                                                          | `jdk.nio.zipfs.ZipFileSystem$ParentLookup`                |
| 0.2% |       1 | `putVal(int, Object, Object, boolean, boolean)`                                              | `java.util.HashMap`                                       |
| 0.2% |       1 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                         | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`     |
| 0.2% |       1 | `invokeSpecial(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`              |
| 0.2% |       1 | `createWithCustomLookup(Class, MetaClassRegistry)`                                           | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle`   |
| 0.2% |       1 | `<init>(LexerAction[])`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`   |
| 0.2% |       1 | `execATN(CharStream, DFAState)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`     |
| 0.2% |       1 | `sync(int)`                                                                                  | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`       |
| 0.2% |       1 | `getClass()`                                                                                 | `java.lang.Object`                                        |
| 0.2% |       1 | `setInterceptor()`                                                                           | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |
| 0.2% |       1 | `appendChars(char[], int, int)`                                                              | `java.lang.AbstractStringBuilder`                         |
| 0.2% |       1 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8800`       |
| 0.2% |       1 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a8012b7000`       |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
| 12.5% |       2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                              | `<unknown>` |
| 12.5% |       2 | `PhaseChaitin::gather_lrg_masks(bool)`                                                            | `<unknown>` |
|  6.3% |       1 | `ClassFileParser::post_process_parsed_stream(ClassFileStream const*, ConstantPool*, JavaThread*)` | `<unknown>` |
|  6.3% |       1 | `State::MachNodeGenerator(int)`                                                                   | `<unknown>` |
|  6.3% |       1 | `JVM_Clone`                                                                                       | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Node::is_CFG() const` (`<unknown>`)

|     % | Samples | Caller                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 37.5% |       3 | `PhaseIdealLoop::build_and_optimize()`                   | `<unknown>` |
| 12.5% |       1 | `IdealLoopTree::est_loop_clone_sz(unsigned int) const`   | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |
| 12.5% |       1 | `RegionNode::is_unreachable_region(PhaseGVN const*)`     | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::Dominators()`                           | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 25.0% |       2 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 25.0% |       2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |
| 25.0% |       2 | `PhaseIFG::remove_node(unsigned int)`                                | `<unknown>` |
| 12.5% |       1 | `PhaseIFG::effective_degree(unsigned int) const`                     | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::Select()`                                             | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 14.3% |       1 | `JVM_IHashCode`                                                                            | `<unknown>` |
| 14.3% |       1 | `JavaCalls::call_helper(JavaValue*, methodHandle const&, JavaCallArguments*, JavaThread*)` | `<unknown>` |
| 14.3% |       1 | `jni_GetObjectClass`                                                                       | `<unknown>` |
| 14.3% |       1 | `JVM_InternString`                                                                         | `<unknown>` |
| 14.3% |       1 | `InterpreterRuntime::ldc(JavaThread*, bool)`                                               | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       6 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|     % | Samples | Caller                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 83.3% |       5 | `WorkerThread::run()`                                | `<unknown>` |
| 16.7% |       1 | `WorkerThreads::run_task(WorkerTask*, unsigned int)` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 20.0% |       1 | `Compile::Optimize()`                                         | `<unknown>` |
| 20.0% |       1 | `MemAllocator::allocate() const`                              | `<unknown>` |
| 20.0% |       1 | `MergeMemNode::iteration_setup(MergeMemNode const*)`          | `<unknown>` |
| 20.0% |       1 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 20.0% |       1 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)`     | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       5 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                                                                     | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `Node::unique_ctrl_out_or_null() const` (`<unknown>`)

|     % | Samples | Caller                                                         | Location    |
| ----: | ------: | -------------------------------------------------------------- | ----------- |
| 50.0% |       2 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`       | `<unknown>` |
| 25.0% |       1 | `ProjNode::is_uncommon_trap_proj(Deoptimization::DeoptReason)` | `<unknown>` |
| 25.0% |       1 | `PathFrequency::to(Node*)`                                     | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                 | Location    |
| -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       4 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       4 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_virtual()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       4 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `IntervalWalker::walk_to(IntervalState, int)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       4 | `IntervalWalker::walk_to(int)` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |
| 25.0% |       1 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------- | ----------- |
| 100.0% |       4 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 25.0% |       1 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `bsearch` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 75.0% |       3 | `encoding_for_logical_immediate(unsigned long long)`   | `<unknown>` |
| 25.0% |       1 | `LIR_Assembler::emit_profile_type(LIR_OpProfileType*)` | `<unknown>` |

##### `PhiNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       3 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------- | ----------- |
| 33.3% |       1 | `VtableStubs::find_stub(bool, int)`                        | `<unknown>` |
| 33.3% |       1 | `nmethod::oops_do_process_weak(nmethod::OopsDoProcessor*)` | `<unknown>` |
| 33.3% |       1 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`          | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       3 | `OopRecorder::find_index(Metadata*)` | `<unknown>` |

##### `_qsort` (`<unknown>`)

|     % | Samples | Caller                                                           | Location    |
| ----: | ------: | ---------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `TypeInterfaces::intersection_with(TypeInterfaces const*) const` | `<unknown>` |
| 33.3% |       1 | `_qsort`                                                         | `<unknown>` |
| 33.3% |       1 | `LinearScan::sort_intervals_after_allocation()`                  | `<unknown>` |

##### `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)` (`<unknown>`)

|      % | Samples | Caller                                                | Location    |
| -----: | ------: | ----------------------------------------------------- | ----------- |
| 100.0% |       3 | `NativeCall::set_destination_mt_safe(unsigned char*)` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       3 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       3 | `get(Object)` | `java.util.HashMap` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                              | Location                                               |
| -----: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       3 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 50.0% |       1 | `TypeInstPtr::add_offset(long) const` | `<unknown>` |
| 50.0% |       1 | `Type::hashcons()`                    | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&)` | `<unknown>` |

##### `PhiSimplifier::block_do(BlockBegin*)` (`<unknown>`)

|      % | Samples | Caller                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `BlockBegin::iterate_preorder(GrowableArray<bool>&, BlockClosure*)` | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

|     % | Samples | Caller                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `MethodData::allocate(ClassLoaderData*, methodHandle const&, JavaThread*)` | `<unknown>` |
| 50.0% |       1 | `PhaseGVN::transform_no_reclaim(Node*)`                                    | `<unknown>` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801089400` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

|      % | Samples | Caller           | Location                                 |
| -----: | ------: | ---------------- | ---------------------------------------- |
| 100.0% |       2 | `accept(Object)` | `java.util.stream.ReferencePipeline$2$1` |

##### `requireNonNull(Object)` (`java.util.Objects`)

|     % | Samples | Caller                                 | Location                                 |
| ----: | ------: | -------------------------------------- | ---------------------------------------- |
| 50.0% |       1 | `<init>(Sink)`                         | `java.util.stream.Sink$ChainedReference` |
| 50.0% |       1 | `spliterator(Object[], int, int, int)` | `java.util.Spliterators`                 |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `substring(int, int)` (`java.lang.String`)

|     % | Samples | Caller                            | Location                              |
| ----: | ------: | --------------------------------- | ------------------------------------- |
| 50.0% |       1 | `parseURL(URL, String, int, int)` | `sun.net.www.protocol.jar.Handler`    |
| 50.0% |       1 | `getDescriptor()`                 | `jdk.internal.org.objectweb.asm.Type` |

##### `name(byte[], int)` (`jdk.nio.zipfs.ZipFileSystem$ParentLookup`)

|      % | Samples | Caller            | Location                                   |
| -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% |       1 | `as(byte[], int)` | `jdk.nio.zipfs.ZipFileSystem$ParentLookup` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80102ac00` |

##### `createWithCustomLookup(Class, MetaClassRegistry)` (`groovy.lang.MetaClassRegistry$MetaClassCreationHandle`)

|      % | Samples | Caller                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `create(Class, MetaClassRegistry)` | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |

##### `<init>(LexerAction[])` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|      % | Samples | Caller                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `append(LexerActionExecutor, LexerAction)` | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor` |

##### `execATN(CharStream, DFAState)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|      % | Samples | Caller                   | Location                                              |
| -----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% |       1 | `match(CharStream, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `sync(int)` (`groovyjarjarantlr4.v4.runtime.BufferedTokenStream`)

|      % | Samples | Caller      | Location                                            |
| -----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% |       1 | `consume()` | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream` |

##### `getClass()` (`java.lang.Object`)

|      % | Samples | Caller                                 | Location                                   |
| -----: | ------: | -------------------------------------- | ------------------------------------------ |
| 100.0% |       1 | `getMetaClassImpl(MetaClass, boolean)` | `org.codehaus.groovy.vmplugin.v8.Selector` |

##### `setInterceptor()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                | Location                                                  |
| -----: | ------: | --------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `appendChars(char[], int, int)` (`java.lang.AbstractStringBuilder`)

|      % | Samples | Caller                     | Location                          |
| -----: | ------: | -------------------------- | --------------------------------- |
| 100.0% |       1 | `append(char[], int, int)` | `java.lang.AbstractStringBuilder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c8800`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012b7000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.7% |     477 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.7% |     477 | `thread_start`                                                                                | `<unknown>`                                          |
| 75.6% |     476 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.6% |     476 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 71.1% |     448 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 71.0% |     447 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 70.3% |     443 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 57.0% |     359 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 57.0% |     359 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 27.3% |     172 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 22.7% |     143 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |
| 21.9% |     138 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 21.7% |     137 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.6% |     136 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
| 21.4% |     135 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`  |
| 21.4% |     135 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.3% |     134 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.1% |     133 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa000`  |
| 21.1% |     133 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800`  |
| 21.1% |     133 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000a8010aac00`  |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 71.0% |     447 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 70.3% |     443 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 57.0% |     359 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 57.0% |     359 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 27.3% |     172 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 22.7% |     143 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 16.0% |     101 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 14.0% |      88 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 12.1% |      76 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 12.1% |      76 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 12.1% |      76 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 11.9% |      75 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 10.8% |      68 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  7.6% |      48 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  6.7% |      42 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  5.9% |      37 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  4.4% |      28 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.3% |      27 | `Matcher::match()`                                                                                      | `<unknown>` |
|  4.1% |      26 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.0% |      25 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                  | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.7% |     477 | `_pthread_start`                                                                                                                                                                                                                                                    | `<unknown>` |
| 75.7% |     477 | `thread_start`                                                                                                                                                                                                                                                      | `<unknown>` |
| 75.6% |     476 | `Thread::call_run()`                                                                                                                                                                                                                                                | `<unknown>` |
| 75.6% |     476 | `thread_native_entry(Thread*)`                                                                                                                                                                                                                                      | `<unknown>` |
| 71.1% |     448 | `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                   | `<unknown>` |
| 12.1% |      76 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                             | `<unknown>` |
|  5.9% |      37 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                                                                                                                                         | `<unknown>` |
|  5.9% |      37 | `ParseGenerator::generate(JVMState*)`                                                                                                                                                                                                                               | `<unknown>` |
|  5.7% |      36 | `Parse::do_one_block()`                                                                                                                                                                                                                                             | `<unknown>` |
|  5.7% |      36 | `Parse::do_all_blocks()`                                                                                                                                                                                                                                            | `<unknown>` |
|  4.3% |      27 | `WorkerThread::run()`                                                                                                                                                                                                                                               | `<unknown>` |
|  4.1% |      26 | `Parse::do_call()`                                                                                                                                                                                                                                                  | `<unknown>` |
|  3.3% |      21 | `PredictedCallGenerator::generate(JVMState*)`                                                                                                                                                                                                                       | `<unknown>` |
|  3.0% |      19 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                                                                                                                                                                               | `<unknown>` |
|  3.0% |      19 | `IR::IR(Compilation*, ciMethod*, int)`                                                                                                                                                                                                                              | `<unknown>` |
|  2.5% |      16 | `tlv_get_addr`                                                                                                                                                                                                                                                      | `<unknown>` |
|  2.1% |      13 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                                                                                                                                                     | `<unknown>` |
|  1.6% |      10 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                                                                                                                       | `<unknown>` |
|  1.6% |      10 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                                                                                                                                                 | `<unknown>` |
|  1.6% |      10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 21.7% |     137 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.6% |     136 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
| 21.4% |     135 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`  |
| 21.4% |     135 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.3% |     134 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.1% |     133 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa000`  |
| 21.1% |     133 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800`  |
| 21.1% |     133 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000a8010aac00`  |
| 19.8% |     125 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7000`  |
| 19.8% |     125 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.8% |     125 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`  |
| 19.7% |     124 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400` |
| 19.7% |     124 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a80108e000`  |
| 19.7% |     124 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 19.5% |     123 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`  |
| 19.2% |     121 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000a801098400`  |
| 19.2% |     121 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000a80109a000`  |
| 19.2% |     121 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801099c00`  |
| 18.9% |     119 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 18.9% |     119 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a80102b000`  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     476 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     477 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 94.1% |     448 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  5.7% |      27 | `WorkerThread::run()`             | `<unknown>` |
|  0.2% |       1 | `VMThread::run()`                 | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     476 | `Thread::call_run()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 99.8% |     447 | `CompileBroker::compiler_thread_loop()`                         | `<unknown>` |
|  0.2% |       1 | `ServiceThread::service_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 99.1% |     443 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  0.9% |       4 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 81.0% |     359 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 17.2% |      76 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.7% |       3 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                  | `<unknown>` |
|  0.5% |       2 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |
|  0.2% |       1 | `Arena::Arena(MEMFLAGS)`                                                  | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 47.9% |     172 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 39.8% |     143 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 10.3% |      37 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.7% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  0.3% |       1 | `Chunk::next_chop()`                                                                       | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     359 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 58.7% |     101 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 15.7% |      27 | `Matcher::match()`                                                                   | `<unknown>` |
| 14.0% |      24 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
|  9.3% |      16 | `PhaseOutput::Output()`                                                              | `<unknown>` |
|  1.7% |       3 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 33.6% |      48 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 28.0% |      40 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 18.2% |      26 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  3.5% |       5 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
|  3.5% |       5 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.8% |     135 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  1.4% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 97.8% |     134 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 16.8% |      23 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.7% |       1 | `linkToTargetMethod(Object, Object)`                    | `java.lang.invoke.Invokers$Holder`              |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     136 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  47.8% |      65 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.7% |       1 | `resolve_static_call`                                                                            | `<unknown>`                                     |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     135 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     135 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 93.3% |     125 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7000` |
| 88.1% |     118 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80109bc00` |
| 84.3% |     113 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010d3800` |
| 68.7% |      92 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8011ba000` |
| 64.9% |      87 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801205c00` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 94.0% |     125 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`  |
| 92.5% |     123 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`  |
| 69.9% |      93 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801094c00` |
| 38.3% |      51 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a80121a000`  |
| 34.6% |      46 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a801229800`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     133 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa000` |
| 100.0% |     133 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a8010aac00` |
|  20.3% |      27 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800` |
|  17.3% |      23 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8012da800` |
|   3.8% |       5 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8012e8000` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     133 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
|  69.2% |      92 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     125 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
|  68.8% |      86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                | Location                               |
| -----: | ------: | --------------------- | -------------------------------------- |
| 100.0% |     125 | `execute(String[])`   | `org.codenarc.CodeNarc`                |
|   3.2% |       4 | `parseArgs(String[])` | `org.codenarc.CodeNarc`                |
|   0.8% |       1 | `writeTitle(Writer)`  | `org.codenarc.report.TextReportWriter` |
|   0.8% |       1 | `load(InputStream)`   | `java.util.Properties`                 |
|   0.8% |       1 | `validate(Source)`    | `javax.xml.validation.Validator`       |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     125 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 74.2% |      92 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 62.1% |      77 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 41.1% |      51 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 15.3% |      19 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 10.5% |      13 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.2% |     123 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
|  1.6% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088c00` |
|  0.8% |       1 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a801031800`  |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     124 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80108e000` |
|   3.2% |       4 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80109b400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     123 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 97.5% |     118 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a80102b000` |
| 48.8% |      59 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a801105400` |
| 13.2% |      16 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.4% |      15 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  5.8% |       7 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a801018400` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     121 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801099c00` |
|  28.9% |      35 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a80109a400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     121 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801098400` |
| 100.0% |     121 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000a80109a000` |
|   0.8% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a80108e000` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.2% |     118 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 11.8% |      14 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  0.8% |       1 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.8% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80102b000`)

|     % | Samples | Callee                          | Location                                     |
| ----: | ------: | ------------------------------- | -------------------------------------------- |
| 99.2% |     118 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|  0.8% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 23.8% |      24 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 11.9% |      12 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
| 10.9% |      11 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
|  9.9% |      10 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
|  7.9% |       8 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 86.4% |      76 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 13.6% |      12 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 89.5% |      68 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
| 10.5% |       8 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      76 | `Compilation::compile_method()` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 98.7% |      75 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |
|  1.3% |       1 | `_platform_memset`                     | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      76 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 33.3% |      25 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 16.0% |      12 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  9.3% |       7 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
|  9.3% |       7 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  8.0% |       6 | `IdealLoopTree::loop_predication(PhaseIdealLoop*)`                      | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 41.2% |      28 | `Compilation::emit_lir()`        | `<unknown>` |
| 38.2% |      26 | `Compilation::build_hir()`       | `<unknown>` |
| 17.6% |      12 | `Compilation::emit_code_body()`  | `<unknown>` |
|  2.9% |       2 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      48 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 88.1% |      37 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  2.4% |       1 | `NodeHash::hash_find_insert(Node*)`  | `<unknown>` |
|  2.4% |       1 | `ProjNode::hash() const`             | `<unknown>` |
|  2.4% |       1 | `PhiNode::hash() const`              | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 18.9% |       7 | `PhiNode::Ideal(PhaseGVN*, bool)`          | `<unknown>` |
| 13.5% |       5 | `RegionNode::Ideal(PhaseGVN*, bool)`       | `<unknown>` |
|  8.1% |       3 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
|  8.1% |       3 | `StoreNode::Ideal(PhaseGVN*, bool)`        | `<unknown>` |
|  5.4% |       2 | `NodeHash::hash_find_insert(Node*)`        | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 97.3% |      36 | `Parse::do_all_blocks()`   | `<unknown>` |
|  2.7% |       1 | `Parse::do_method_entry()` | `<unknown>` |
|  2.7% |       1 | `Parse::do_exits()`        | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      37 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 72.2% |      26 | `Parse::do_call()`                    | `<unknown>` |
| 25.0% |       9 | `Parse::do_field_access(bool, bool)`  | `<unknown>` |
| 11.1% |       4 | `Parse::do_if(BoolTest::mask, Node*)` | `<unknown>` |
|  8.3% |       3 | `Parse::do_one_bytecode()`            | `<unknown>` |
|  5.6% |       2 | `Parse::array_load(BasicType)`        | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      36 | `Parse::do_one_block()` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 75.0% |      21 | `LinearScan::do_linear_scan()`               | `<unknown>` |
| 21.4% |       6 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  3.6% |       1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 70.4% |      19 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
| 25.9% |       7 | `Matcher::find_shared(Node*)`                   | `<unknown>` |
|  3.7% |       1 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 48.1% |      13 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 25.9% |       7 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
| 18.5% |       5 | `semaphore_wait_trap`                           | `<unknown>` |
|  7.4% |       2 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 73.1% |      19 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
| 11.5% |       3 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  7.7% |       2 | `IR::compute_use_counts()`                        | `<unknown>` |
|  3.8% |       1 | `IR::compute_code()`                              | `<unknown>` |
|  3.8% |       1 | `StoreField::visit(InstructionVisitor*)`          | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 80.8% |      21 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 30.8% |       8 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 15.4% |       4 | `GraphKit::record_profiled_arguments_for_speculation(ciMethod*, Bytecodes::Code)`       | `<unknown>` |
| 11.5% |       3 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  3.8% |       1 | `GraphKit::cast_not_null(Node*, bool)`                                                  | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 64.0% |      16 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |
|  4.0% |       1 | `IfFalseNode::Opcode() const`                            | `<unknown>` |
|  4.0% |       1 | `Node::is_CFG() const`                                   | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 90.5% |      19 | `ParseGenerator::generate(JVMState*)`                           | `<unknown>` |
| 38.1% |       8 | `PredictedCallGenerator::generate(JVMState*)`                   | `<unknown>` |
|  4.8% |       1 | `GraphKit::subtype_check_receiver(Node*, ciKlass*, Node**)`     | `<unknown>` |
|  4.8% |       1 | `GraphKit::type_check_receiver(Node*, ciKlass*, float, Node**)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      19 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      19 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 76.9% |      10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                  | `<unknown>` |
| 23.1% |       3 | `G1RemSet::scan_collection_set_code_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
| 10.0% |       1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                          | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` (`<unknown>`)

|      % | Samples | Callee                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |      10 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` (`<unknown>`)

|      % | Samples | Callee                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------- | ----------- |
| 100.0% |      10 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.3% |       8 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |       7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0% |       6 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |       6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |       5 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                      |
| 0.8% |       5 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |       5 | `semaphore_wait_trap` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                            |
| 0.6% |       4 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.6% |       4 | `PhaseChaitin::build_ifg_virtual()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% |       4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |       4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                           |
| 0.6% |       4 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% |       3 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                  |
| 0.5% |       3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` ← `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `NonSafepointEmitter::emit_non_safepoint()` ← `NonSafepointEmitter::observe_instruction(Node*, int)` ← `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                        |
| 0.5% |       3 | `Compile::identify_useful_nodes(Unique_Node_List&)` ← `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` |
