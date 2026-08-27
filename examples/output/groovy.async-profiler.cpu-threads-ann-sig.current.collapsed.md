# Sampling profile

Collected 627 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 54.2% |     340 |
| Native           | 30.3% |     190 |
| Standard library | 14.4% |      90 |
| JIT              |  0.8% |       5 |
| Ours             |  0.3% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                              | Location                                               |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 2.7% |      17 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>`                                            |
| 2.1% |      13 | `tlv_get_addr`                                                                                                                                                        | `<unknown>`                                            |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                    | `<unknown>`                                            |
| 1.8% |      11 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>`                                            |
| 1.6% |      10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                     | `<unknown>`                                            |
| 1.4% |       9 | `IndexSetIterator::advance_and_next()`                                                                                                                                | `<unknown>`                                            |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_tree()`                                                                                                                                   | `<unknown>`                                            |
| 1.3% |       8 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>`                                            |
| 1.3% |       8 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                                    | `<unknown>`                                            |
| 1.1% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)`                                                                                                                         | `<unknown>`                                            |
| 1.0% |       6 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                | `<unknown>`                                            |
| 1.0% |       6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 1.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                         | `<unknown>`                                            |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                              | `<unknown>`                                            |
| 0.8% |       5 | `Node::is_CFG() const`                                                                                                                                                | `<unknown>`                                            |
| 0.8% |       5 | `Matcher::xform(Node*, int)`                                                                                                                                          | `<unknown>`                                            |
| 0.8% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                               | `<unknown>`                                            |
| 0.8% |       5 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                          | `<unknown>`                                            |
| 0.8% |       5 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                            | `<unknown>`                                            |
| 0.8% |       5 | `PhaseIdealLoop::Dominators()`                                                                                                                                        | `<unknown>`                                            |

#### Categories

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.6% |      10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.4% |       9 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| 1.3% |       8 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 1.1% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)`                                | `<unknown>` |
| 1.0% |       6 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 0.8% |       5 | `Node::is_CFG() const`                                                       | `<unknown>` |
| 0.8% |       5 | `Matcher::xform(Node*, int)`                                                 | `<unknown>` |
| 0.8% |       5 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 0.8% |       5 | `ciObjectFactory::get_metadata(Metadata*)`                                   | `<unknown>` |
| 0.8% |       5 | `PhaseIdealLoop::Dominators()`                                               | `<unknown>` |
| 0.6% |       4 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 0.6% |       4 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                   | `<unknown>` |
| 0.6% |       4 | `PhaseLive::compute(unsigned int)`                                           | `<unknown>` |
| 0.6% |       4 | `PhaseOutput::BuildOopMaps()`                                                | `<unknown>` |
| 0.6% |       4 | `Node_Backward_Iterator::next()`                                             | `<unknown>` |
| 0.6% |       4 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`         | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.7% |      17 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 2.1% |      13 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.8% |      11 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 1.3% |       8 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.0% |       6 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| 0.8% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.6% |       4 | `Dict::Insert(void*, void*, bool)`                                                                                                                                          | `<unknown>` |
| 0.6% |       4 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.6% |       4 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.6% |       4 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.5% |       3 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.5% |       3 | `__psynch_mutexdrop`                                                                                                                                                        | `<unknown>` |
| 0.5% |       3 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| 0.5% |       3 | `posix_madvise`                                                                                                                                                             | `<unknown>` |
| 0.3% |       2 | `Parse::do_call()`                                                                                                                                                          | `<unknown>` |
| 0.3% |       2 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>` |
| 0.3% |       2 | `SignatureStream::next()`                                                                                                                                                   | `<unknown>` |
| 0.3% |       2 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.3% |       2 | `__psynch_cvbroad`                                                                                                                                                          | `<unknown>` |
| 0.3% |       2 | `_platform_memcmp`                                                                                                                                                          | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                               |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1.0% |       6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.3% |       2 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                    |
| 0.3% |       2 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| 0.3% |       2 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                              |
| 0.3% |       2 | `resize()`                                                                                                    | `java.util.HashMap`                                    |
| 0.2% |       1 | `ordinal()`                                                                                                   | `java.lang.Enum`                                       |
| 0.2% |       1 | `delegate(Object, Object, Object, Object, Object)`                                                            | `java.lang.invoke.DelegatingMethodHandle$Holder`       |
| 0.2% |       1 | `visitFile(Path, BasicFileAttributes)`                                                                        | `org.codehaus.groovy.vmplugin.v9.ClassFinder$1`        |
| 0.2% |       1 | `colorOf(TreeMap$Entry)`                                                                                      | `java.util.TreeMap`                                    |
| 0.2% |       1 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                        |
| 0.2% |       1 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`               |
| 0.2% |       1 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`    |
| 0.2% |       1 | `putTreeVal(HashMap, HashMap$Node[], int, Object, Object)`                                                    | `java.util.HashMap$TreeNode`                           |
| 0.2% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.2% |       1 | `delegate(Object, Object)`                                                                                    | `java.lang.invoke.DelegatingMethodHandle$Holder`       |
| 0.2% |       1 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)`                     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| 0.2% |       1 | `commandExpression()`                                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| 0.2% |       1 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`       |
| 0.2% |       1 | `<init>(ThreadGroup, String, int, Runnable, long, AccessControlContext)`                                      | `java.lang.Thread`                                     |
| 0.2% |       1 | `indexOf(byte[], byte[])`                                                                                     | `java.lang.StringLatin1`                               |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      17 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 15.4% |       2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                                                                 | `<unknown>` |
|  7.7% |       1 | `ClassVerifier::verify_invoke_instructions(RawBytecodeStream*, unsigned int, StackMapFrame*, bool, bool*, VerificationType, constantPoolHandle const&, StackMapTable*, JavaThread*)` | `<unknown>` |
|  7.7% |       1 | `PhaseValues::intcon(int)`                                                                                                                                                           | `<unknown>` |
|  7.7% |       1 | `ciInstance::field_value_impl(BasicType, int)`                                                                                                                                       | `<unknown>` |
|  7.7% |       1 | `ciMethodData::data_from(DataLayout*)`                                                                                                                                               | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      11 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       3 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                           | `<unknown>` |
| 22.2% |       2 | `PhaseIFG::effective_degree(unsigned int) const`                                                                            | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::Simplify()`                                                                                                  | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` | `<unknown>` |
| 11.1% |       1 | `PhaseIFG::remove_node(unsigned int)`                                                                                       | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 87.5% |       7 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
| 12.5% |       1 | `InstanceKlass::find_method(Symbol const*, Symbol const*) const`                                                                 | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       3 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                   | `<unknown>` |
| 16.7% |       1 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| 16.7% |       1 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>` |
| 16.7% |       1 | `void G1ParCopyClosure<(G1Barrier)1, false>::do_oop_work<oopDesc*>(oopDesc**)`                                                        | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 80.0% |       4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 20.0% |       1 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |

##### `Node::is_CFG() const` (`<unknown>`)

|     % | Samples | Caller                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 60.0% |       3 | `PhaseIdealLoop::build_and_optimize()`               | `<unknown>` |
| 20.0% |       1 | `RegionNode::is_unreachable_region(PhaseGVN const*)` | `<unknown>` |
| 20.0% |       1 | `PhaseIdealLoop::Dominators()`                       | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       5 | `Matcher::match()` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       5 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 80.0% |       4 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |
| 20.0% |       1 | `PhaseChaitin::Register_Allocate()`          | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 20.0% |       1 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| 20.0% |       1 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                      | `<unknown>` |
| 20.0% |       1 | `ciObjectFactory::get(oopDesc*)`                                                          | `<unknown>` |
| 20.0% |       1 | `ciEnv::get_klass_by_name_impl(ciKlass*, constantPoolHandle const&, ciSymbol*, bool)`     | `<unknown>` |
| 20.0% |       1 | `ciField::initialize_from(fieldDescriptor*)`                                              | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 75.0% |       3 | `Matcher::xform(Node*, int)`          | `<unknown>` |
| 25.0% |       1 | `Matcher::match_sfpt(SafePointNode*)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIterGVN::subsume_node(Node*, Node*)` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 50.0% |       2 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |
| 25.0% |       1 | `IfNode::Ideal_common(PhaseGVN*, bool)` | `<unknown>` |
| 25.0% |       1 | `RegionNode::Ideal(PhaseGVN*, bool)`    | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       4 | `PhaseOutput::Output()` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 50.0% |       2 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |
| 25.0% |       1 | `PhaseCFG::do_global_code_motion()`                | `<unknown>` |
| 25.0% |       1 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       4 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|     % | Samples | Caller                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------- | ----------- |
| 75.0% |       3 | `Type::hashcons()`                                         | `<unknown>` |
| 25.0% |       1 | `OopFlow::build_oop_map(Node*, int, PhaseRegAlloc*, int*)` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller          | Location    |
| ----: | ------: | --------------- | ----------- |
| 75.0% |       3 | `JVM_IHashCode` | `<unknown>` |
| 25.0% |       1 | `JVM_Clone`     | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       4 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 25.0% |       1 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)` | `<unknown>` |
| 33.3% |       1 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                   | `<unknown>` |
| 33.3% |       1 | `CompiledIC::set_to_clean(bool)`                                                    | `<unknown>` |

##### `__psynch_mutexdrop` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |       3 | `_pthread_mutex_firstfit_unlock_slow` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 66.7% |       2 | `ciObjectFactory::get_symbol(Symbol*)`                          | `<unknown>` |
| 33.3% |       1 | `MethodHandles::signature_polymorphic_name_id(Klass*, Symbol*)` | `<unknown>` |

##### `posix_madvise` (`<unknown>`)

|      % | Samples | Caller        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       3 | `free_medium` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       2 | `Parse::do_one_block()` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       2 | `WorkerThread::run()` | `<unknown>` |

##### `SignatureStream::next()` (`<unknown>`)

|     % | Samples | Caller                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `void SignatureIterator::do_parameters_on<ArgumentCount>(ArgumentCount*)` | `<unknown>` |
| 50.0% |       1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                   | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `__psynch_cvbroad` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                              | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `CompileBroker::create_compile_task(CompileQueue*, int, methodHandle const&, int, int, methodHandle const&, int, CompileTask::CompileReason, bool)` | `<unknown>` |

##### `_platform_memcmp` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                          | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `put(Object, Object)` | `java.util.HashMap` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       2 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|      % | Samples | Caller                              | Location                                             |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% |       2 | `invokeStatic(Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `ordinal()` (`java.lang.Enum`)

|      % | Samples | Caller       | Location                                              |
| -----: | ------: | ------------ | ----------------------------------------------------- |
| 100.0% |       1 | `hashCode()` | `groovyjarjarantlr4.v4.runtime.atn.LexerCustomAction` |

##### `delegate(Object, Object, Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

|      % | Samples | Caller                                          | Location                                            |
| -----: | ------: | ----------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `guard(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001202000` |

##### `visitFile(Path, BasicFileAttributes)` (`org.codehaus.groovy.vmplugin.v9.ClassFinder$1`)

|      % | Samples | Caller                                   | Location                                        |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `visitFile(Object, BasicFileAttributes)` | `org.codehaus.groovy.vmplugin.v9.ClassFinder$1` |

##### `colorOf(TreeMap$Entry)` (`java.util.TreeMap`)

|      % | Samples | Caller                             | Location            |
| -----: | ------: | ---------------------------------- | ------------------- |
| 100.0% |       1 | `fixAfterInsertion(TreeMap$Entry)` | `java.util.TreeMap` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                      | Location                |
| -----: | ------: | --------------------------- | ----------------------- |
| 100.0% |       1 | `getDefinedPackage(String)` | `java.lang.ClassLoader` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

|      % | Samples | Caller                | Location                                            |
| -----: | ------: | --------------------- | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |

##### `putTreeVal(HashMap, HashMap$Node[], int, Object, Object)` (`java.util.HashMap$TreeNode`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                              | Location                                               |
| -----: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `delegate(Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001219800` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                             | Location                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |       1 | `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `commandExpression()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|      % | Samples | Caller                  | Location                                       |
| -----: | ------: | ----------------------- | ---------------------------------------------- |
| 100.0% |       1 | `statementExpression()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `<init>(ThreadGroup, String, int, Runnable, long, AccessControlContext)` (`java.lang.Thread`)

|      % | Samples | Caller                        | Location           |
| -----: | ------: | ----------------------------- | ------------------ |
| 100.0% |       1 | `<init>(ThreadGroup, String)` | `java.lang.Thread` |

##### `indexOf(byte[], byte[])` (`java.lang.StringLatin1`)

|      % | Samples | Caller            | Location           |
| -----: | ------: | ----------------- | ------------------ |
| 100.0% |       1 | `indexOf(String)` | `java.lang.String` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.1% |     471 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.1% |     471 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 75.1% |     471 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.1% |     471 | `thread_start`                                                                                | `<unknown>`                                          |
| 71.0% |     445 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 70.8% |     444 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 69.1% |     433 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 56.3% |     353 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 56.0% |     351 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 28.1% |     176 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 22.5% |     141 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 22.3% |     140 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 22.0% |     138 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 22.0% |     138 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 21.9% |     137 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 21.9% |     137 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.7% |     136 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 21.7% |     136 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 21.7% |     136 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 20.4% |     128 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 70.8% |     444 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 69.1% |     433 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 56.3% |     353 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 56.0% |     351 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 28.1% |     176 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 19.6% |     123 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 15.9% |     100 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 12.1% |      76 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 12.0% |      75 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 12.0% |      75 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 11.0% |      69 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 10.2% |      64 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 10.2% |      64 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
|  7.0% |      44 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  6.4% |      40 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  6.1% |      38 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  5.1% |      32 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.6% |      29 | `Matcher::match()`                                                                                      | `<unknown>` |
|  4.1% |      26 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.1% |      26 | `PhaseOutput::Output()`                                                                                 | `<unknown>` |

##### Native

|     % | Samples | Function                                                                | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 75.1% |     471 | `Thread::call_run()`                                                    | `<unknown>` |
| 75.1% |     471 | `thread_native_entry(Thread*)`                                          | `<unknown>` |
| 75.1% |     471 | `_pthread_start`                                                        | `<unknown>` |
| 75.1% |     471 | `thread_start`                                                          | `<unknown>` |
| 71.0% |     445 | `JavaThread::thread_main_inner()`                                       | `<unknown>` |
| 12.0% |      75 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
|  6.9% |      43 | `Parse::do_one_block()`                                                 | `<unknown>` |
|  6.9% |      43 | `Parse::do_all_blocks()`                                                | `<unknown>` |
|  6.9% |      43 | `Parse::Parse(JVMState*, ciMethod*, float)`                             | `<unknown>` |
|  6.9% |      43 | `ParseGenerator::generate(JVMState*)`                                   | `<unknown>` |
|  5.6% |      35 | `Parse::do_call()`                                                      | `<unknown>` |
|  4.3% |      27 | `PredictedCallGenerator::generate(JVMState*)`                           | `<unknown>` |
|  4.1% |      26 | `WorkerThread::run()`                                                   | `<unknown>` |
|  3.7% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`   | `<unknown>` |
|  3.7% |      23 | `IR::IR(Compilation*, ciMethod*, int)`                                  | `<unknown>` |
|  3.2% |      20 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                         | `<unknown>` |
|  2.7% |      17 | `__psynch_mutexwait`                                                    | `<unknown>` |
|  2.7% |      17 | `_pthread_mutex_firstfit_lock_slow`                                     | `<unknown>` |
|  2.2% |      14 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`           | `<unknown>` |
|  2.1% |      13 | `tlv_get_addr`                                                          | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 22.3% |     140 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 22.0% |     138 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 22.0% |     138 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 21.9% |     137 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 21.9% |     137 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.7% |     136 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 21.7% |     136 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 21.7% |     136 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 20.4% |     128 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 20.4% |     128 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 20.4% |     128 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 20.4% |     128 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 20.4% |     128 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
| 20.4% |     128 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 20.4% |     128 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 19.9% |     125 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 19.9% |     125 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 19.9% |     125 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 19.6% |     123 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.6% |     123 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 94.5% |     445 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  5.5% |      26 | `WorkerThread::run()`             | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     471 | `Thread::call_run()` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Callee                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |     471 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     471 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 99.8% |     444 | `CompileBroker::compiler_thread_loop()`                         | `<unknown>` |
|  0.2% |       1 | `ServiceThread::service_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 97.5% |     433 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  2.3% |      10 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |
|  0.2% |       1 | `CompileTaskWrapper::~CompileTaskWrapper()`              | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 81.5% |     353 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 17.3% |      75 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.5% |       2 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.2% |       1 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                  | `<unknown>` |
|  0.2% |       1 | `TraceTime::~TraceTime()`                                                 | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 99.4% |     351 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  0.3% |       1 | `Chunk::next_chop()`                                               | `<unknown>` |
|  0.3% |       1 | `Compile::~Compile()`                                              | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 50.1% |     176 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 35.0% |     123 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 12.3% |      43 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.1% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  1.1% |       4 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 56.8% |     100 | `PhaseChaitin::Register_Allocate()`             | `<unknown>` |
| 16.5% |      29 | `Matcher::match()`                              | `<unknown>` |
| 14.8% |      26 | `PhaseOutput::Output()`                         | `<unknown>` |
|  7.4% |      13 | `PhaseCFG::do_global_code_motion()`             | `<unknown>` |
|  1.7% |       3 | `PhaseBlockLayout::PhaseBlockLayout(PhaseCFG&)` | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.2% |     137 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  2.1% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 98.6% |     138 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 13.6% |      19 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 92.8% |     128 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| 88.4% |     122 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 84.8% |     117 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800` |
| 68.8% |      95 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011ba000` |
| 65.9% |      91 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001205c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     138 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  50.0% |      69 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.7% |       1 | `invokeBasic(Object[])`                                                                          | `java.lang.invoke.MethodHandle`                 |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     137 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|   1.5% |       2 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     137 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 94.1% |     128 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 94.1% |     128 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
| 71.3% |      97 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 36.8% |      50 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700121a000`  |
| 33.1% |      45 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001229800`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     136 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     136 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  21.3% |      29 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|  17.6% |      24 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012ddc00` |
|   6.6% |       9 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012e7400` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     136 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  71.3% |      97 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 98.4% |     126 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  2.3% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |
|  1.6% |       2 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     128 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   1.6% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 74.2% |      95 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 62.5% |      80 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 41.4% |      53 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 15.6% |      20 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
|  9.4% |      12 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     128 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     128 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  69.5% |      89 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                | Location                               |
| -----: | ------: | --------------------- | -------------------------------------- |
| 100.0% |     128 | `execute(String[])`   | `org.codenarc.CodeNarc`                |
|   3.1% |       4 | `parseArgs(String[])` | `org.codenarc.CodeNarc`                |
|   0.8% |       1 | `writeTitle(Writer)`  | `org.codenarc.report.TextReportWriter` |
|   0.8% |       1 | `validate(Source)`    | `javax.xml.validation.Validator`       |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     128 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 97.6% |     122 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 44.8% |      56 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
| 12.8% |      16 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.2% |      14 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  4.8% |       6 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     125 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     125 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     125 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  26.4% |      33 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 35.8% |      44 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 26.0% |      32 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 18.7% |      23 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  4.1% |       5 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |
|  4.1% |       5 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.2% |     122 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 10.6% |      13 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  0.8% |       1 | `getLines()`              | `org.codenarc.source.AbstractSourceCode`   |
|  0.8% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |
|  0.8% |       1 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|     % | Samples | Callee                          | Location                                     |
| ----: | ------: | ------------------------------- | -------------------------------------------- |
| 99.2% |     122 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|  0.8% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 19.0% |      19 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 17.0% |      17 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 11.0% |      11 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
| 11.0% |      11 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
|  9.0% |       9 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 84.2% |      64 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 15.8% |      12 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 92.0% |      69 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  6.7% |       5 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  1.3% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      75 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      75 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 46.4% |      32 | `Compilation::emit_lir()`       | `<unknown>` |
| 37.7% |      26 | `Compilation::build_hir()`      | `<unknown>` |
| 15.9% |      11 | `Compilation::emit_code_body()` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 25.0% |      16 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 15.6% |      10 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |
| 15.6% |      10 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 12.5% |       8 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 10.9% |       7 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      64 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      44 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 81.4% |      35 | `Parse::do_call()`                    | `<unknown>` |
| 16.3% |       7 | `Parse::do_one_bytecode()`            | `<unknown>` |
|  9.3% |       4 | `Parse::do_field_access(bool, bool)`  | `<unknown>` |
|  4.7% |       2 | `Parse::do_exceptions()`              | `<unknown>` |
|  2.3% |       1 | `Parse::do_if(BoolTest::mask, Node*)` | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      43 | `Parse::do_one_block()` | `<unknown>` |
|   2.3% |       1 | `GraphKit::push(Node*)` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Callee                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      43 | `Parse::do_all_blocks()`    | `<unknown>` |
|   2.3% |       1 | `Parse::build_exits()`      | `<unknown>` |
|   2.3% |       1 | `TypeFunc::make(ciMethod*)` | `<unknown>` |
|   2.3% |       1 | `ciMethod::method_data()`   | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      43 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 95.0% |      38 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  2.5% |       1 | `StoreNode::hash() const`            | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 13.2% |       5 | `RegionNode::Ideal(PhaseGVN*, bool)`       | `<unknown>` |
| 13.2% |       5 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
| 10.5% |       4 | `IfNode::Ideal(PhaseGVN*, bool)`           | `<unknown>` |
| 10.5% |       4 | `NodeHash::hash_find_insert(Node*)`        | `<unknown>` |
|  7.9% |       3 | `PhiNode::Ideal(PhaseGVN*, bool)`          | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 77.1% |      27 | `PredictedCallGenerator::generate(JVMState*)`                                                           | `<unknown>` |
| 54.3% |      19 | `ParseGenerator::generate(JVMState*)`                                                                   | `<unknown>` |
| 20.0% |       7 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)`                 | `<unknown>` |
|  5.7% |       2 | `LibraryIntrinsic::generate(JVMState*)`                                                                 | `<unknown>` |
|  5.7% |       2 | `Compile::optimize_inlining(ciMethod*, ciInstanceKlass*, ciKlass*, ciMethod*, TypeOopPtr const*, bool)` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 65.6% |      21 | `LinearScan::do_linear_scan()`              | `<unknown>` |
| 34.4% |      11 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 82.8% |      24 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
|  6.9% |       2 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |
|  3.4% |       1 | `DecodeNNode::Opcode() const`                   | `<unknown>` |
|  3.4% |       1 | `RegionNode::Opcode() const`                    | `<unknown>` |
|  3.4% |       1 | `Matcher::find_shared(Node*)`                   | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 96.3% |      26 | `ParseGenerator::generate(JVMState*)`                               | `<unknown>` |
| 44.4% |      12 | `PredictedCallGenerator::generate(JVMState*)`                       | `<unknown>` |
|  7.4% |       2 | `PreserveJVMState::PreserveJVMState(GraphKit*, bool)`               | `<unknown>` |
|  7.4% |       2 | `GraphKit::subtype_check_receiver(Node*, ciKlass*, Node**)`         | `<unknown>` |
|  3.7% |       1 | `GraphKit::null_check_common(Node*, BasicType, bool, Node**, bool)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 88.5% |      23 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  7.7% |       2 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  3.8% |       1 | `IR::eliminate_null_checks()`                     | `<unknown>` |

##### `PhaseOutput::Output()` (`<unknown>`)

|     % | Samples | Callee                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 30.8% |       8 | `PhaseOutput::BuildOopMaps()`                          | `<unknown>` |
| 30.8% |       8 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` | `<unknown>` |
| 15.4% |       4 | `PhaseOutput::shorten_branches(unsigned int*)`         | `<unknown>` |
| 11.5% |       3 | `Scheduling::DoScheduling()`                           | `<unknown>` |
|  3.8% |       1 | `checkCastPPNode::ideal_Opcode() const`                | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 76.9% |      20 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
|  7.7% |       2 | `semaphore_wait_trap`                           | `<unknown>` |
|  7.7% |       2 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
|  3.8% |       1 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
|  3.8% |       1 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 95.7% |      22 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |
|  4.3% |       1 | `XHandlers::XHandlers(ciMethod*)`                    | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 55.0% |      11 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                       | `<unknown>` |
| 40.0% |       8 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                  | `<unknown>` |
|  5.0% |       1 | `G1RemSet::scan_collection_set_code_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases)` | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      17 | `__psynch_mutexwait` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 42.9% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                    | `<unknown>` |
|  7.1% |       1 | `fwd_copy_drain`                                                                                                                                                           | `<unknown>` |
|  7.1% |       1 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |      10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.4% |       9 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.3% |       8 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                  |
| 1.0% |       6 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_tree()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                |
| 0.8% |       5 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |       5 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                     |
| 0.6% |       4 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |       4 | `PhaseOutput::BuildOopMaps()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% |       4 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |       4 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       4 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` |
| 0.5% |       3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                           |
| 0.5% |       3 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       3 | `PhaseIdealLoop::build_loop_tree()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       3 | `IntervalWalker::walk_to(IntervalState, int)` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                           |
| 0.5% |       3 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)` ← `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)` ← `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                          |
