# Sampling profile

Collected 617 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 57.1% |     352 |
| Native           | 28.4% |     175 |
| Standard library | 13.3% |      82 |
| JIT              |  1.3% |       8 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 1.8% |      11 | `tlv_get_addr`                                                                          | `<unknown>` |
| 1.6% |      10 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                      | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::gather_lrg_masks(bool)`                                                  | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                       | `<unknown>` |
| 1.5% |       9 | `IndexSetIterator::advance_and_next()`                                                  | `<unknown>` |
| 1.3% |       8 | `Node::dominates(Node*, Node_List&)`                                                    | `<unknown>` |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                 | `<unknown>` |
| 1.3% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
| 1.1% |       7 | `pthread_jit_write_protect_np`                                                          | `<unknown>` |
| 1.1% |       7 | `PhaseLive::compute(unsigned int)`                                                      | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`            | `<unknown>` |
| 1.0% |       6 | `__psynch_cvwait`                                                                       | `<unknown>` |
| 1.0% |       6 | `PhaseOutput::BuildOopMaps()`                                                           | `<unknown>` |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                  | `<unknown>` |
| 0.8% |       5 | `PhaseIdealLoop::Dominators()`                                                          | `<unknown>` |
| 0.6% |       4 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`    | `<unknown>` |
| 0.6% |       4 | `__psynch_mutexwait`                                                                    | `<unknown>` |
| 0.6% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                      | `<unknown>` |
| 0.6% |       4 | `Arena::contains(void const*) const`                                                    | `<unknown>` |
| 0.6% |       4 | `Node_Backward_Iterator::next()`                                                        | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 1.6% |      10 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.5% |       9 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.3% |       8 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 1.1% |       7 | `PhaseLive::compute(unsigned int)`                                           | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 1.0% |       6 | `PhaseOutput::BuildOopMaps()`                                                | `<unknown>` |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 0.8% |       5 | `PhaseIdealLoop::Dominators()`                                               | `<unknown>` |
| 0.6% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.6% |       4 | `Node_Backward_Iterator::next()`                                             | `<unknown>` |
| 0.6% |       4 | `NodeHash::hash_find_insert(Node*)`                                          | `<unknown>` |
| 0.6% |       4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)`                          | `<unknown>` |
| 0.5% |       3 | `PhaseChaitin::post_allocate_copy_removal()`                                 | `<unknown>` |
| 0.5% |       3 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`              | `<unknown>` |
| 0.5% |       3 | `RegMask::is_aligned_pairs() const`                                          | `<unknown>` |
| 0.5% |       3 | `Compile::identify_useful_nodes(Unique_Node_List&)`                          | `<unknown>` |
| 0.5% |       3 | `Type::cmp(Type const*, Type const*)`                                        | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 1.8% |      11 | `tlv_get_addr`                                                                          | `<unknown>` |
| 1.3% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
| 1.1% |       7 | `pthread_jit_write_protect_np`                                                          | `<unknown>` |
| 1.0% |       6 | `__psynch_cvwait`                                                                       | `<unknown>` |
| 0.6% |       4 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`    | `<unknown>` |
| 0.6% |       4 | `__psynch_mutexwait`                                                                    | `<unknown>` |
| 0.6% |       4 | `Arena::contains(void const*) const`                                                    | `<unknown>` |
| 0.5% |       3 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                 | `<unknown>` |
| 0.5% |       3 | `vmSymbols::find_sid(Symbol const*)`                                                    | `<unknown>` |
| 0.5% |       3 | `_platform_memset`                                                                      | `<unknown>` |
| 0.3% |       2 | `Dict::Insert(void*, void*, bool)`                                                      | `<unknown>` |
| 0.3% |       2 | `__open_nocancel`                                                                       | `<unknown>` |
| 0.3% |       2 | `PhiResolver::create_node(LIR_Opr, bool)`                                               | `<unknown>` |
| 0.3% |       2 | `Invariance::compute_invariance(Node*)`                                                 | `<unknown>` |
| 0.3% |       2 | `vmClasses::box_klass_type(Klass*)`                                                     | `<unknown>` |
| 0.3% |       2 | `ConstantPool::resolve_string_constants_impl(constantPoolHandle const&, JavaThread*)`   | `<unknown>` |
| 0.3% |       2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                    | `<unknown>` |
| 0.3% |       2 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                           | `<unknown>` |
| 0.3% |       2 | `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)`              | `<unknown>` |
| 0.3% |       2 | `SymbolTable::lookup_shared(char const*, int, unsigned int)`                            | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                     | Location                                                         |
| ---: | ------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 0.6% |       4 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                         | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`            |
| 0.3% |       2 | `cast(Object)`                                                                               | `java.lang.Class`                                                |
| 0.3% |       2 | `resize()`                                                                                   | `java.util.HashMap`                                              |
| 0.3% |       2 | `matches(int, int, int)`                                                                     | `groovyjarjarantlr4.v4.runtime.atn.AtomTransition`               |
| 0.2% |       1 | `invokeSpecial(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| 0.2% |       1 | `visitChildren(RuleNode)`                                                                    | `groovyjarjarantlr4.v4.runtime.tree.AbstractParseTreeVisitor`    |
| 0.2% |       1 | `ofNullable(Object)`                                                                         | `java.util.Optional`                                             |
| 0.2% |       1 | `emitStaticInvoke(MemberName, LambdaForm$Name)`                                              | `java.lang.invoke.InvokerBytecodeGenerator`                      |
| 0.2% |       1 | `block()`                                                                                    | `org.apache.groovy.parser.antlr4.GroovyParser`                   |
| 0.2% |       1 | `<init>(long)`                                                                               | `java.util.concurrent.atomic.AtomicLong`                         |
| 0.2% |       1 | `addFirst(Object)`                                                                           | `java.util.ArrayDeque`                                           |
| 0.2% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`           |
| 0.2% |       1 | `get()`                                                                                      | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |
| 0.2% |       1 | `getAndPut(String, MemoizeCache$ValueProvider)`                                              | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`              |
| 0.2% |       1 | `addCount(long, int)`                                                                        | `java.util.concurrent.ConcurrentHashMap`                         |
| 0.2% |       1 | `getInternalName(Class)`                                                                     | `java.lang.invoke.InvokerBytecodeGenerator`                      |
| 0.2% |       1 | `toArray(Object[])`                                                                          | `java.util.AbstractCollection`                                   |
| 0.2% |       1 | `<init>()`                                                                                   | `java.lang.Number`                                               |
| 0.2% |       1 | `equals(Object)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                    |
| 0.2% |       1 | `getLexerActionExecutor()`                                                                   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                    |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       3 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| 0.3% |       2 | `vtable stub`             | `<unknown>` |
| 0.3% |       2 | `zero_blocks`             | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xbba)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------- | ----------- |
| 27.3% |       3 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                | `<unknown>` |
|  9.1% |       1 | `ResourceBitMap::ResourceBitMap(unsigned long, bool)`                            | `<unknown>` |
|  9.1% |       1 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                       | `<unknown>` |
|  9.1% |       1 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                 | `<unknown>` |
|  9.1% |       1 | `GraphKit::set_predefined_output_for_runtime_call(Node*, Node*, TypePtr const*)` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                                                             | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ----------- |
| 22.2% |       2 | `PhaseIFG::effective_degree(unsigned int) const`                                                   | `<unknown>` |
| 22.2% |       2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                               | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::Simplify()`                                                                         | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::Select()`                                                                           | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges(LRG&, IndexSet*, unsigned int&)` | `<unknown>` |

##### `Node::dominates(Node*, Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       8 | `MemNode::all_controls_dominate(Node*, Node*)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       8 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                                                 | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------- | ----------- |
| 28.6% |       2 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)`                               | `<unknown>` |
| 14.3% |       1 | `InterpreterRuntime::newarray(JavaThread*, BasicType, int)`                            | `<unknown>` |
| 14.3% |       1 | `jni_IsAssignableFrom`                                                                 | `<unknown>` |
| 14.3% |       1 | `SharedRuntime::raw_exception_handler_for_return_address(JavaThread*, unsigned char*)` | `<unknown>` |
| 14.3% |       1 | `JVM_GetClassDeclaredFields`                                                           | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       6 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `PhaseOutput::BuildOopMaps()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       6 | `PhaseOutput::Output()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       5 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |       4 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&)` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       4 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 50.0% |       2 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |
| 50.0% |       2 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `NodeHash::hash_find_insert(Node*)` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 50.0% |       2 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |
| 50.0% |       2 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |

##### `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       4 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|     % | Samples | Caller                                       | Location                                                   |
| ----: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 75.0% |       3 | `add(ATNConfig, PredictionContextCache)`     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| 25.0% |       1 | `join(PredictionContext, PredictionContext)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       3 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `RegMask::is_aligned_pairs() const` (`<unknown>`)

|      % | Samples | Caller                                                                                       | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 66.7% |       2 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |
| 33.3% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `Type::cmp(Type const*, Type const*)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       3 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       3 | `OopRecorder::find_index(Metadata*)` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       3 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `Matcher::xform(Node*, int)`                                                                            | `<unknown>` |
| 33.3% |       1 | `ConstMethod::allocate(ClassLoaderData*, int, InlineTableSizes*, ConstMethod::MethodType, JavaThread*)` | `<unknown>` |
| 33.3% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)`                                  | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                              | Location                           |
| ----: | ------: | ------------------------------------------------------------------- | ---------------------------------- |
| 33.3% |       1 | `invokeExact_MT(Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder` |
| 33.3% |       1 | `guard_LL_V(VarHandle, Object, Object, VarHandle$AccessDescriptor)` | `java.lang.invoke.VarHandleGuards` |
| 33.3% |       1 | `getConstructor0(Class[], int)`                                     | `java.lang.Class`                  |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       2 | `Type::hashcons()` | `<unknown>` |

##### `__open_nocancel` (`<unknown>`)

|     % | Samples | Caller               | Location    |
| ----: | ------: | -------------------- | ----------- |
| 50.0% |       1 | `fopen$DARWIN_EXTSN` | `<unknown>` |
| 50.0% |       1 | `__opendir2`         | `<unknown>` |

##### `PhiResolver::create_node(LIR_Opr, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `LIRGenerator::move_to_phi(PhiResolver*, Instruction*, Instruction*)` | `<unknown>` |

##### `Invariance::compute_invariance(Node*)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                         | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `PhaseIdealLoop::loop_predication_impl_helper(IdealLoopTree*, IfProjNode*, IfTrueNode*, CountedLoopNode*, ConNode*, Invariance&, Deoptimization::DeoptReason)` | `<unknown>` |

##### `vmClasses::box_klass_type(Klass*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 50.0% |       1 | `TypeOopPtr::TypeOopPtr(Type::TYPES, TypePtr::PTR, ciKlass*, TypeInterfaces const*, bool, ciObject*, int, int, TypePtr const*, int)` | `<unknown>` |
| 50.0% |       1 | `ciInstanceKlass::is_boxed_value_offset(int) const`                                                                                  | `<unknown>` |

##### `ConstantPool::resolve_string_constants_impl(constantPoolHandle const&, JavaThread*)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                           | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       2 | `CompileBroker::compile_method(methodHandle const&, int, int, methodHandle const&, int, CompileTask::CompileReason, DirectiveSet*, JavaThread*)` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` (`<unknown>`)

|     % | Samples | Caller                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 50.0% |       1 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)` | `<unknown>` |
| 50.0% |       1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                       | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |

##### `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)` (`<unknown>`)

|      % | Samples | Caller                                                | Location    |
| -----: | ------: | ----------------------------------------------------- | ----------- |
| 100.0% |       2 | `NativeCall::set_destination_mt_safe(unsigned char*)` | `<unknown>` |

##### `SymbolTable::lookup_shared(char const*, int, unsigned int)` (`<unknown>`)

|      % | Samples | Caller                                                      | Location    |
| -----: | ------: | ----------------------------------------------------------- | ----------- |
| 100.0% |       2 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |

##### `cast(Object)` (`java.lang.Class`)

|     % | Samples | Caller                                  | Location                                     |
| ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| 50.0% |       1 | `bindTo(Object)`                        | `java.lang.invoke.MethodHandle`              |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `matches(int, int, int)` (`groovyjarjarantlr4.v4.runtime.atn.AtomTransition`)

|     % | Samples | Caller                                           | Location                                               |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
| 50.0% |       1 | `getReachableTarget(Transition, int)`            | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
| 50.0% |       1 | `getReachableTarget(ATNConfig, Transition, int)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                                                               | Location                                              |
| -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       2 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                | Location                                                |
| ----: | ------: | --------------------- | ------------------------------------------------------- |
| 50.0% |       1 | `copyOf(byte[], int)` | `java.util.Arrays`                                      |
| 50.0% |       1 | `resize(int)`         | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80102ac00` |

##### `visitChildren(RuleNode)` (`groovyjarjarantlr4.v4.runtime.tree.AbstractParseTreeVisitor`)

|      % | Samples | Caller                                                    | Location                                                  |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `visitPostfixExprAlt(GroovyParser$PostfixExprAltContext)` | `org.apache.groovy.parser.antlr4.GroovyParserBaseVisitor` |

##### `ofNullable(Object)` (`java.util.Optional`)

|      % | Samples | Caller                                      | Location                    |
| -----: | ------: | ------------------------------------------- | --------------------------- |
| 100.0% |       1 | `establishStaticMetaProperty(MetaProperty)` | `groovy.lang.MetaClassImpl` |

##### `emitStaticInvoke(MemberName, LambdaForm$Name)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Caller        | Location                                    |
| -----: | ------: | ------------- | ------------------------------------------- |
| 100.0% |       1 | `addMethod()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `block()` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|      % | Samples | Caller         | Location                                       |
| -----: | ------: | -------------- | ---------------------------------------------- |
| 100.0% |       1 | `methodBody()` | `org.apache.groovy.parser.antlr4.GroovyParser` |

##### `<init>(long)` (`java.util.concurrent.atomic.AtomicLong`)

|      % | Samples | Caller                                        | Location                                              |
| -----: | ------: | --------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `<init>(MethodHandle, MethodHandle, boolean)` | `org.codehaus.groovy.vmplugin.v8.MethodHandleWrapper` |

##### `addFirst(Object)` (`java.util.ArrayDeque`)

|      % | Samples | Caller         | Location               |
| -----: | ------: | -------------- | ---------------------- |
| 100.0% |       1 | `push(Object)` | `java.util.ArrayDeque` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                              | Location                                               |
| -----: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `get()` (`org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier`)

|      % | Samples | Caller                                                       | Location                                        |
| -----: | ------: | ------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |       1 | `lambda$fromCache$1(IndyInterface$FallbackSupplier, String)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller                                                                          | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `addCount(long, int)` (`java.util.concurrent.ConcurrentHashMap`)

|      % | Samples | Caller                            | Location                                 |
| -----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getInternalName(Class)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|      % | Samples | Caller                                          | Location                                    |
| -----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `emitStaticInvoke(MemberName, LambdaForm$Name)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `toArray(Object[])` (`java.util.AbstractCollection`)

|      % | Samples | Caller                    | Location                  |
| -----: | ------: | ------------------------- | ------------------------- |
| 100.0% |       1 | `getTargetPropertyInfo()` | `java.beans.Introspector` |

##### `<init>()` (`java.lang.Number`)

|      % | Samples | Caller         | Location                                 |
| -----: | ------: | -------------- | ---------------------------------------- |
| 100.0% |       1 | `<init>(long)` | `java.util.concurrent.atomic.AtomicLong` |

##### `equals(Object)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|      % | Samples | Caller                   | Location            |
| -----: | ------: | ------------------------ | ------------------- |
| 100.0% |       1 | `equals(Object, Object)` | `java.util.Objects` |

##### `getLexerActionExecutor()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|      % | Samples | Caller                         | Location                                      |
| -----: | ------: | ------------------------------ | --------------------------------------------- |
| 100.0% |       1 | `transform(ATNState, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `I2C/C2I adapters(0xbba)` (`<unknown>`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801214c00` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.5% |     466 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.5% |     466 | `thread_start`                                                                                | `<unknown>`                                          |
| 75.4% |     465 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.4% |     465 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 72.1% |     445 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 72.1% |     445 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 71.0% |     438 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 56.9% |     351 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 56.9% |     351 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 26.7% |     165 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 22.2% |     137 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 22.0% |     136 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.9% |     135 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.7% |     134 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
| 21.7% |     134 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |
| 21.6% |     133 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010a1800`  |
| 21.6% |     133 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     132 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa000`  |
| 21.4% |     132 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa800`  |
| 21.4% |     132 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000c8010aac00`  |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 72.1% |     445 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 71.0% |     438 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 56.9% |     351 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 56.9% |     351 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 26.7% |     165 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 21.7% |     134 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 16.2% |     100 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 13.5% |      83 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 13.5% |      83 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 12.6% |      78 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 12.2% |      75 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 10.5% |      65 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 10.4% |      64 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  7.3% |      45 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  6.8% |      42 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  6.2% |      38 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  5.3% |      33 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.4% |      27 | `LinearScan::do_linear_scan()`                                                                          | `<unknown>` |
|  4.2% |      26 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  3.9% |      24 | `Matcher::match()`                                                                                      | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                           | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 75.5% |     466 | `_pthread_start`                                                                                                   | `<unknown>` |
| 75.5% |     466 | `thread_start`                                                                                                     | `<unknown>` |
| 75.4% |     465 | `Thread::call_run()`                                                                                               | `<unknown>` |
| 75.4% |     465 | `thread_native_entry(Thread*)`                                                                                     | `<unknown>` |
| 72.1% |     445 | `JavaThread::thread_main_inner()`                                                                                  | `<unknown>` |
| 13.5% |      83 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                            | `<unknown>` |
|  7.6% |      47 | `Parse::do_one_block()`                                                                                            | `<unknown>` |
|  7.6% |      47 | `Parse::do_all_blocks()`                                                                                           | `<unknown>` |
|  7.6% |      47 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                        | `<unknown>` |
|  7.6% |      47 | `ParseGenerator::generate(JVMState*)`                                                                              | `<unknown>` |
|  6.8% |      42 | `Parse::do_call()`                                                                                                 | `<unknown>` |
|  5.0% |      31 | `PredictedCallGenerator::generate(JVMState*)`                                                                      | `<unknown>` |
|  3.2% |      20 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                              | `<unknown>` |
|  3.2% |      20 | `IR::IR(Compilation*, ciMethod*, int)`                                                                             | `<unknown>` |
|  2.8% |      17 | `WorkerThread::run()`                                                                                              | `<unknown>` |
|  2.3% |      14 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                      | `<unknown>` |
|  2.3% |      14 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                    | `<unknown>` |
|  1.8% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                            | `<unknown>` |
|  1.8% |      11 | `tlv_get_addr`                                                                                                     | `<unknown>` |
|  1.5% |       9 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 22.0% |     136 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.9% |     135 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.7% |     134 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
| 21.6% |     133 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010a1800`  |
| 21.6% |     133 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     132 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa000`  |
| 21.4% |     132 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa800`  |
| 21.4% |     132 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000c8010aac00`  |
| 20.1% |     124 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000c801094400` |
| 20.1% |     124 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9800`  |
| 19.8% |     122 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c8010c7000`  |
| 19.8% |     122 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c801098400`  |
| 19.8% |     122 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c801099c00`  |
| 19.8% |     122 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000c80109a000`  |
| 19.8% |     122 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c80108e000`  |
| 19.8% |     122 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 19.8% |     122 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.8% |     122 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`  |
| 19.1% |     118 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.0% |     117 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c80102b000`  |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.6% |       4 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| 0.3% |       2 | `vtable stub`             | `<unknown>` |
| 0.3% |       2 | `zero_blocks`             | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xbba)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     465 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     466 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 95.7% |     445 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  3.7% |      17 | `WorkerThread::run()`             | `<unknown>` |
|  0.2% |       1 | `VMThread::run()`                 | `<unknown>` |
|  0.2% |       1 | `ConcurrentGCThread::run()`       | `<unknown>` |
|  0.2% |       1 | `WatcherThread::run()`            | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     465 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.4% |     438 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  1.6% |       7 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     445 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 80.1% |     351 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 18.9% |      83 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.5% |       2 | `ciEnv::ciEnv(CompileTask*)`                                              | `<unknown>` |
|  0.2% |       1 | `ciEnv::cache_jvmti_state()`                                              | `<unknown>` |
|  0.2% |       1 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 47.0% |     165 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 38.2% |     134 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 12.8% |      45 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.1% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  0.6% |       2 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     351 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 60.6% |     100 | `PhaseChaitin::Register_Allocate()`               | `<unknown>` |
| 14.5% |      24 | `Matcher::match()`                                | `<unknown>` |
| 13.9% |      23 | `PhaseOutput::Output()`                           | `<unknown>` |
|  9.7% |      16 | `PhaseCFG::do_global_code_motion()`               | `<unknown>` |
|  0.6% |       1 | `PhaseCFG::PhaseCFG(Arena*, RootNode*, Matcher&)` | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.1% |     133 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  1.5% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       1 | `loadClass(String)`                                              | `java.lang.ClassLoader`                |
|  0.7% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 99.3% |     135 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 21.3% |      29 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 90.4% |     122 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010c7000` |
| 86.7% |     117 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80109bc00` |
| 83.0% |     112 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010d3800` |
| 66.7% |      90 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8011ba000` |
| 63.7% |      86 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801205c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000c801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     134 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  46.3% |      62 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.7% |       1 | `resolve_static_call`                                                                            | `<unknown>`                                     |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 31.3% |      42 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 26.9% |      36 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 19.4% |      26 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  4.5% |       6 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
|  4.5% |       6 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     133 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     133 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 93.9% |     124 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9800`  |
| 92.4% |     122 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`  |
| 69.7% |      92 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801094c00` |
| 36.4% |      48 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c80121a000`  |
| 31.8% |      42 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c801229800`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     132 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa000` |
| 100.0% |     132 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c8010aac00` |
|  18.9% |      25 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8010a1800` |
|  16.7% |      22 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8012ddc00` |
|   6.8% |       9 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8012e7400` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     132 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa800` |
|  66.7% |      88 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000c801094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 72.6% |      90 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 58.1% |      72 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 38.7% |      48 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 16.9% |      21 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
|  9.7% |      12 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     124 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     122 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa800` |
|  68.0% |      83 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 95.9% |     117 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c80102b000` |
| 44.3% |      54 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c801105400` |
| 13.1% |      16 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.5% |      14 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  6.6% |       8 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c801018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     122 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801098400` |
| 100.0% |     122 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c80109a000` |
|   0.8% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c80108e000` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c80109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     122 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801099c00` |
|  24.6% |      30 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `resolve_static_call`      | `<unknown>`                                         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c80108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.2% |     121 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
|  1.6% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801088c00` |
|  0.8% |       1 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c801031800`  |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     122 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80108e000` |
|   1.6% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80109b400` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                 | Location                               |
| -----: | ------: | -------------------------------------- | -------------------------------------- |
| 100.0% |     122 | `execute(String[])`                    | `org.codenarc.CodeNarc`                |
|   2.5% |       3 | `parseArgs(String[])`                  | `org.codenarc.CodeNarc`                |
|   1.6% |       2 | `writeTitle(Writer)`                   | `org.codenarc.report.TextReportWriter` |
|   0.8% |       1 | `registerPluginsForClassNames(String)` | `org.codenarc.CodeNarcRunner`          |
|   0.8% |       1 | `validate(Source)`                     | `javax.xml.validation.Validator`       |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     122 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.2% |     117 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 11.0% |      13 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  1.7% |       2 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.8% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c80102b000`)

|      % | Samples | Callee                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |     117 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|   0.9% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 19.0% |      19 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 16.0% |      16 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 16.0% |      16 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
| 13.0% |      13 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
| 11.0% |      11 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 90.4% |      75 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  8.4% |       7 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  1.2% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      83 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      83 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 83.3% |      65 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 16.7% |      13 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 44.0% |      33 | `Compilation::emit_lir()`        | `<unknown>` |
| 34.7% |      26 | `Compilation::build_hir()`       | `<unknown>` |
| 13.3% |      10 | `Compilation::emit_code_body()`  | `<unknown>` |
|  4.0% |       3 | `ciMethod::ensure_method_data()` | `<unknown>` |
|  1.3% |       1 | `IRScope::max_stack() const`     | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 98.5% |      64 | `PhaseIdealLoop::build_and_optimize()`           | `<unknown>` |
|  1.5% |       1 | `PhaseIdealLoop::eliminate_useless_predicates()` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 25.0% |      16 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 20.3% |      13 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 17.2% |      11 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 12.5% |       8 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  9.4% |       6 | `IdealLoopTree::loop_predication(PhaseIdealLoop*)`                      | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 89.4% |      42 | `Parse::do_call()`                    | `<unknown>` |
| 19.1% |       9 | `Parse::do_field_access(bool, bool)`  | `<unknown>` |
|  6.4% |       3 | `Parse::do_if(BoolTest::mask, Node*)` | `<unknown>` |
|  4.3% |       2 | `Parse::do_one_bytecode()`            | `<unknown>` |
|  4.3% |       2 | `Parse::do_checkcast()`               | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      47 | `Parse::do_one_block()` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      47 | `Parse::do_all_blocks()`   | `<unknown>` |
|   2.1% |       1 | `Parse::do_exits()`        | `<unknown>` |
|   2.1% |       1 | `Parse::do_method_entry()` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      47 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 84.4% |      38 | `PhaseIterGVN::transform_old(Node*)`  | `<unknown>` |
|  4.4% |       2 | `CProjNode::hash() const`             | `<unknown>` |
|  2.2% |       1 | `IfNode::Ideal(PhaseGVN*, bool)`      | `<unknown>` |
|  2.2% |       1 | `ConvI2LNode::Value(PhaseGVN*) const` | `<unknown>` |
|  2.2% |       1 | `MultiNode::hash() const`             | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      42 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 71.4% |      30 | `PredictedCallGenerator::generate(JVMState*)`                                                           | `<unknown>` |
| 52.4% |      22 | `ParseGenerator::generate(JVMState*)`                                                                   | `<unknown>` |
| 19.0% |       8 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)`                 | `<unknown>` |
|  7.1% |       3 | `LibraryIntrinsic::generate(JVMState*)`                                                                 | `<unknown>` |
|  4.8% |       2 | `Compile::optimize_inlining(ciMethod*, ciInstanceKlass*, ciKlass*, ciMethod*, TypeOopPtr const*, bool)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 13.2% |       5 | `StoreNode::Ideal(PhaseGVN*, bool)`        | `<unknown>` |
| 13.2% |       5 | `IfNode::Ideal(PhaseGVN*, bool)`           | `<unknown>` |
|  7.9% |       3 | `PhiNode::Value(PhaseGVN*) const`          | `<unknown>` |
|  7.9% |       3 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
|  7.9% |       3 | `NodeHash::hash_find_insert(Node*)`        | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 81.8% |      27 | `LinearScan::do_linear_scan()`               | `<unknown>` |
| 15.2% |       5 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  3.0% |       1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 90.3% |      28 | `ParseGenerator::generate(JVMState*)`                               | `<unknown>` |
| 38.7% |      12 | `PredictedCallGenerator::generate(JVMState*)`                       | `<unknown>` |
|  9.7% |       3 | `GraphKit::subtype_check_receiver(Node*, ciKlass*, Node**)`         | `<unknown>` |
|  6.5% |       2 | `GraphKit::null_check_common(Node*, BasicType, bool, Node**, bool)` | `<unknown>` |
|  6.5% |       2 | `ciMethod::get_method_at_bci(int, bool&, ciSignature**)`            | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 37.0% |      10 | `LinearScan::allocate_registers()`                                     | `<unknown>` |
| 18.5% |       5 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 14.8% |       4 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
| 14.8% |       4 | `LinearScan::build_intervals()`                                        | `<unknown>` |
|  3.7% |       1 | `LinearScan::init_compute_oop_maps()`                                  | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 76.9% |      20 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  7.7% |       2 | `IR::compute_use_counts()`                        | `<unknown>` |
|  7.7% |       2 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  7.7% |       2 | `IR::compute_code()`                              | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 70.8% |      17 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
| 12.5% |       3 | `Matcher::find_shared(Node*)`                   | `<unknown>` |
|  8.3% |       2 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |
|  4.2% |       1 | `CastIINode::Opcode() const`                    | `<unknown>` |
|  4.2% |       1 | `ConNode::Opcode() const`                       | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      20 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      20 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 82.4% |      14 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 11.8% |       2 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
|  5.9% |       1 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 78.6% |      11 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
|  7.1% |       1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                          | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| 57.1% |       8 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>` |
| 42.9% |       6 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`            | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 18.2% |       2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |
|  9.1% |       1 | `G1ParScanThreadState::start_partial_objarray(G1HeapRegionAttr, oopDesc*, oopDesc*)`                                                                                       | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 77.8% |       7 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| 22.2% |       2 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Callee                                                           | Location    |
| ----: | ------: | ---------------------------------------------------------------- | ----------- |
| 25.0% |       1 | `SharedRuntime::fixup_callers_callsite(Method*, unsigned char*)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% |      10 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                          |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                           |
| 1.5% |       9 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                      |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                 |
| 1.1% |       7 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                          |
| 1.0% |       6 | `PhaseOutput::BuildOopMaps()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                           |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                               |
| 0.8% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` ← `G1ParEvacuateFollowersClosure::do_void()` ← `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                                                                        |
| 0.8% |       5 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.6% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                          |
| 0.6% |       4 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                          |
| 0.6% |       4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                      |
| 0.6% |       4 | `Node::dominates(Node*, Node_List&)` ← `MemNode::all_controls_dominate(Node*, Node*)` ← `InitializeNode::detect_init_independence(Node*, PhaseGVN*)` ← `InitializeNode::can_capture_store(StoreNode*, PhaseGVN*, bool)` ← `StoreNode::Ideal(PhaseGVN*, bool)` ← `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` |
| 0.5% |       3 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                |
| 0.5% |       3 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                   |
| 0.5% |       3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                |
| 0.5% |       3 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                        |
| 0.5% |       3 | `tlv_get_addr` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                          |
| 0.5% |       3 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                           |
| 0.3% |       2 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                       |
