# Sampling profile

Collected 613 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 57.6% |     353 |
| Native            | 26.6% |     163 |
| Standard library  | 15.2% |      93 |
| JIT               |  0.5% |       3 |
| Garbage collector |  0.2% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                                    | Location                                               |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>`                                            |
| 2.0% |      12 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                                    | `<unknown>`                                            |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                           | `<unknown>`                                            |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                                     | `<unknown>`                                            |
| 1.3% |       8 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>`                                            |
| 1.1% |       7 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 1.1% |       7 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                      | `<unknown>`                                            |
| 1.1% |       7 | `tlv_get_addr`                                                                                                                                                              | `<unknown>`                                            |
| 1.1% |       7 | `_platform_memset`                                                                                                                                                          | `<unknown>`                                            |
| 1.0% |       6 | `Node_Backward_Iterator::next()`                                                                                                                                            | `<unknown>`                                            |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                                                        | `<unknown>`                                            |
| 0.8% |       5 | `Matcher::xform(Node*, int)`                                                                                                                                                | `<unknown>`                                            |
| 0.8% |       5 | `Node::is_CFG() const`                                                                                                                                                      | `<unknown>`                                            |
| 0.8% |       5 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>`                                            |
| 0.8% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>`                                            |
| 0.8% |       5 | `IndexSetIterator::advance_and_next()`                                                                                                                                      | `<unknown>`                                            |
| 0.8% |       5 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>`                                            |
| 0.8% |       5 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                                          | `<unknown>`                                            |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                                      | `<unknown>`                                            |
| 0.7% |       4 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                                | `<unknown>`                                            |

#### Categories

##### Compiler

|    % | Samples | Function                                                                                                                                                        | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                              | `<unknown>` |
| 2.0% |      12 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                        | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                               | `<unknown>` |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                         | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                          | `<unknown>` |
| 1.0% |       6 | `Node_Backward_Iterator::next()`                                                                                                                                | `<unknown>` |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                                            | `<unknown>` |
| 0.8% |       5 | `Matcher::xform(Node*, int)`                                                                                                                                    | `<unknown>` |
| 0.8% |       5 | `Node::is_CFG() const`                                                                                                                                          | `<unknown>` |
| 0.8% |       5 | `IndexSetIterator::advance_and_next()`                                                                                                                          | `<unknown>` |
| 0.8% |       5 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                              | `<unknown>` |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                          | `<unknown>` |
| 0.7% |       4 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                    | `<unknown>` |
| 0.7% |       4 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                                    | `<unknown>` |
| 0.7% |       4 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                                                                             | `<unknown>` |
| 0.7% |       4 | `PhaseChaitin::merge_multidefs()`                                                                                                                               | `<unknown>` |
| 0.7% |       4 | `PhaseCFG::partial_latency_of_defs(Node*)`                                                                                                                      | `<unknown>` |
| 0.7% |       4 | `IntervalWalker::walk_to(IntervalState, int)`                                                                                                                   | `<unknown>` |
| 0.5% |       3 | `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)`                                                             | `<unknown>` |
| 0.5% |       3 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.3% |       8 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 1.1% |       7 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.1% |       7 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.8% |       5 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.8% |       5 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.7% |       4 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.7% |       4 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 0.5% |       3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 0.5% |       3 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)`                                                                                                                    | `<unknown>` |
| 0.5% |       3 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| 0.5% |       3 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
| 0.3% |       2 | `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)`                                                                                                  | `<unknown>` |
| 0.3% |       2 | `_isort`                                                                                                                                                                    | `<unknown>` |
| 0.3% |       2 | `iRegINoSpOper::type() const`                                                                                                                                               | `<unknown>` |
| 0.3% |       2 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>` |
| 0.3% |       2 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.2% |       1 | `Symbol::decrement_refcount()`                                                                                                                                              | `<unknown>` |
| 0.2% |       1 | `InstanceKlass::get_jmethod_id(methodHandle const&)`                                                                                                                        | `<unknown>` |
| 0.2% |       1 | `ClassLoaderData::oops_do(OopClosure*, int, bool)`                                                                                                                          | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                      |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 1.1% |       7 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| 0.5% |       3 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`         |
| 0.3% |       2 | `match(CharStream, int)`                                                                                      | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`         |
| 0.3% |       2 | `invokeBasic(Object[])`                                                                                       | `java.lang.invoke.MethodHandle`                               |
| 0.3% |       2 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                           |
| 0.3% |       2 | `visit(GroovyCodeVisitor)`                                                                                    | `org.codehaus.groovy.ast.expr.ConstructorCallExpression`      |
| 0.3% |       2 | `hash(Object)`                                                                                                | `java.util.HashMap`                                           |
| 0.2% |       1 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`               |
| 0.2% |       1 | `invoke(Object, Object[])`                                                                                    | `java.lang.reflect.Method`                                    |
| 0.2% |       1 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`                  |
| 0.2% |       1 | `binarySort(Object[], int, int, int, Comparator)`                                                             | `java.util.TimSort`                                           |
| 0.2% |       1 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| 0.2% |       1 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070011b2000`           |
| 0.2% |       1 | `expungeStaleEntries()`                                                                                       | `java.util.WeakHashMap`                                       |
| 0.2% |       1 | `getMetaClass(Class)`                                                                                         | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |
| 0.2% |       1 | `getTargetPropertyInfo()`                                                                                     | `java.beans.Introspector`                                     |
| 0.2% |       1 | `setCallSiteTarget()`                                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`     |
| 0.2% |       1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                               | `org.codehaus.groovy.vmplugin.v8.IndyInterface`               |
| 0.2% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| 0.2% |       1 | `speciesData()`                                                                                               | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`            |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                 | Location    |
| -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 100.0% |      12 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 37.5% |       3 | `InterpreterRuntime::ldc(JavaThread*, bool)`          | `<unknown>` |
| 12.5% |       1 | `JVM_IsInterface`                                     | `<unknown>` |
| 12.5% |       1 | `JVM_IHashCode`                                       | `<unknown>` |
| 12.5% |       1 | `JVM_Clone`                                           | `<unknown>` |
| 12.5% |       1 | `Unsafe_GetInt(JNIEnv_*, _jobject*, _jobject*, long)` | `<unknown>` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       7 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 14.3% |       1 | `TypeAryPtr::xmeet_helper(Type const*) const`                           | `<unknown>` |
| 14.3% |       1 | `ciKlass::java_mirror()`                                                | `<unknown>` |
| 14.3% |       1 | `LinearScanWalker::LinearScanWalker(LinearScan*, Interval*, Interval*)` | `<unknown>` |
| 14.3% |       1 | `Parse::do_field_access(bool, bool)`                                    | `<unknown>` |
| 14.3% |       1 | `Matcher::ReduceInst(State*, int, Node*&)`                              | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 14.3% |       1 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`                          | `<unknown>` |
| 14.3% |       1 | `ComputeLinearScanOrder::ComputeLinearScanOrder(Compilation*, BlockBegin*)`           | `<unknown>` |
| 14.3% |       1 | `BlockListBuilder::mark_loops(BlockBegin*, bool)`                                     | `<unknown>` |
| 14.3% |       1 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
| 14.3% |       1 | `BlockBegin::try_merge(ValueStack*, bool)`                                            | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 66.7% |       4 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |
| 33.3% |       2 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       6 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       5 | `Matcher::match()` | `<unknown>` |

##### `Node::is_CFG() const` (`<unknown>`)

|     % | Samples | Caller                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 40.0% |       2 | `PhaseIdealLoop::build_and_optimize()`               | `<unknown>` |
| 20.0% |       1 | `RegionNode::is_unreachable_region(PhaseGVN const*)` | `<unknown>` |
| 20.0% |       1 | `PhaseIdealLoop::Dominators()`                       | `<unknown>` |
| 20.0% |       1 | `PhaseIdealLoop::build_loop_tree()`                  | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       5 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                                                          | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       5 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 60.0% |       3 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                           | `<unknown>` |
| 20.0% |       1 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` | `<unknown>` |
| 20.0% |       1 | `PhaseIFG::SquareUp()`                                                                                                      | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 40.0% |       2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| 20.0% |       1 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)`                                                                    | `<unknown>` |
| 20.0% |       1 | `CodeBuffer::copy_code_to(CodeBlob*)`                                                                                                                                                                                                                             | `<unknown>` |
| 20.0% |       1 | `ICStub::finalize()`                                                                                                                                                                                                                                              | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 50.0% |       2 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |
| 50.0% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `PhaseChaitin::merge_multidefs()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseCFG::partial_latency_of_defs(Node*)` (`<unknown>`)

|     % | Samples | Caller                                                    | Location    |
| ----: | ------: | --------------------------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseCFG::global_code_motion()`                          | `<unknown>` |
| 25.0% |       1 | `PhaseCFG::hoist_to_cheaper_block(Block*, Block*, Node*)` | `<unknown>` |

##### `IntervalWalker::walk_to(IntervalState, int)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       4 | `IntervalWalker::walk_to(int)` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       4 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|      % | Samples | Caller                                                      | Location    |
| -----: | ------: | ----------------------------------------------------------- | ----------- |
| 100.0% |       4 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |

##### `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       3 | `Compile::final_graph_reshaping()` | `<unknown>` |

##### `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 66.7% |       2 | `NonSafepointEmitter::emit_non_safepoint()`        | `<unknown>` |
| 33.3% |       1 | `PhaseOutput::Process_OopMap_Node(MachNode*, int)` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |

##### `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       3 | `CompiledMethod::unload_nmethod_caches(bool)` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       3 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `CompileBroker::update_compile_perf_data(CompilerThread*, methodHandle const&, bool)` | `<unknown>` |
| 33.3% |       1 | `CodeSection::expand_locs(int)`                                                       | `<unknown>` |
| 33.3% |       1 | `Node_Array::grow(unsigned int)`                                                      | `<unknown>` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       3 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)` (`<unknown>`)

|      % | Samples | Caller                                                | Location    |
| -----: | ------: | ----------------------------------------------------- | ----------- |
| 100.0% |       2 | `NativeCall::set_destination_mt_safe(unsigned char*)` | `<unknown>` |

##### `_isort` (`<unknown>`)

|     % | Samples | Caller                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 50.0% |       1 | `TypeInterfaces::make(GrowableArray<ciInstanceKlass*>*)` | `<unknown>` |
| 50.0% |       1 | `_qsort`                                                 | `<unknown>` |

##### `iRegINoSpOper::type() const` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 50.0% |       1 | `Node::is_iteratively_computed()` | `<unknown>` |
| 50.0% |       1 | `MachNode::ideal_reg() const`     | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       2 | `WorkerThread::run()` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       2 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `match(CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|      % | Samples | Caller        | Location                              |
| -----: | ------: | ------------- | ------------------------------------- |
| 100.0% |       2 | `nextToken()` | `groovyjarjarantlr4.v4.runtime.Lexer` |

##### `invokeBasic(Object[])` (`java.lang.invoke.MethodHandle`)

|     % | Samples | Caller                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 50.0% |       1 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 50.0% |       1 | `guard(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010cb400` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       2 | `put(Object, Object)` | `java.util.HashMap` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.ConstructorCallExpression`)

|      % | Samples | Caller                                            | Location                                     |
| -----: | ------: | ------------------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location            |
| -----: | ------: | ----------------- | ------------------- |
| 100.0% |       2 | `getNode(Object)` | `java.util.HashMap` |

##### `Symbol::decrement_refcount()` (`<unknown>`)

|      % | Samples | Caller                                                                                    | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `ClassPathImageEntry::open_stream_for_loader(JavaThread*, char const*, ClassLoaderData*)` | `<unknown>` |

##### `InstanceKlass::get_jmethod_id(methodHandle const&)` (`<unknown>`)

|      % | Samples | Caller                 | Location    |
| -----: | ------: | ---------------------- | ----------- |
| 100.0% |       1 | `Method::jmethod_id()` | `<unknown>` |

##### `ClassLoaderData::oops_do(OopClosure*, int, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                            | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                     | Location                                      |
| -----: | ------: | -------------------------- | --------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `binarySort(Object[], int, int, int, Comparator)` (`java.util.TimSort`)

|      % | Samples | Caller                                                     | Location            |
| -----: | ------: | ---------------------------------------------------------- | ------------------- |
| 100.0% |       1 | `sort(Object[], int, int, Comparator, Object[], int, int)` | `java.util.TimSort` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                 | Location                                               |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070011b2000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `expungeStaleEntries()` (`java.util.WeakHashMap`)

|      % | Samples | Caller       | Location                |
| -----: | ------: | ------------ | ----------------------- |
| 100.0% |       1 | `getTable()` | `java.util.WeakHashMap` |

##### `getMetaClass(Class)` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`)

|      % | Samples | Caller                               | Location                                    |
| -----: | ------: | ------------------------------------ | ------------------------------------------- |
| 100.0% |       1 | `invokeConstructorOf(Class, Object)` | `org.codehaus.groovy.runtime.InvokerHelper` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|      % | Samples | Caller          | Location                  |
| -----: | ------: | --------------- | ------------------------- |
| 100.0% |       1 | `getBeanInfo()` | `java.beans.Introspector` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                                                                                       | Location                                        |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                  | Location                                                                   |
| -----: | ------: | ----------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000700108f228` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                       | Location                                               |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `speciesData()` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

|      % | Samples | Caller         | Location                             |
| -----: | ------: | -------------- | ------------------------------------ |
| 100.0% |       1 | `fieldCount()` | `java.lang.invoke.BoundMethodHandle` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.2% |     461 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.2% |     461 | `thread_start`                                                                                | `<unknown>`                                          |
| 75.0% |     460 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.0% |     460 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 72.6% |     445 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 72.4% |     444 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 71.9% |     441 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 58.4% |     358 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 58.4% |     358 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 29.9% |     183 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 22.7% |     139 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 22.3% |     137 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 22.2% |     136 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 22.0% |     135 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |
| 22.0% |     135 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 22.0% |     135 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 22.0% |     135 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.9% |     134 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 21.9% |     134 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 21.9% |     134 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 72.4% |     444 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 71.9% |     441 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 58.4% |     358 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 58.4% |     358 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 29.9% |     183 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 22.0% |     135 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 17.0% |     104 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 14.5% |      89 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 13.1% |      80 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 13.1% |      80 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 12.9% |      79 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 12.9% |      79 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 11.9% |      73 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  7.3% |      45 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  4.9% |      30 | `PhaseCFG::do_global_code_motion()`                                                                     | `<unknown>` |
|  4.7% |      29 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.4% |      27 | `PhaseCFG::global_code_motion()`                                                                        | `<unknown>` |
|  4.4% |      27 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.4% |      27 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  4.1% |      25 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                  | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                       | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.2% |     461 | `_pthread_start`                                                                                                                               | `<unknown>` |
| 75.2% |     461 | `thread_start`                                                                                                                                 | `<unknown>` |
| 75.0% |     460 | `Thread::call_run()`                                                                                                                           | `<unknown>` |
| 75.0% |     460 | `thread_native_entry(Thread*)`                                                                                                                 | `<unknown>` |
| 72.6% |     445 | `JavaThread::thread_main_inner()`                                                                                                              | `<unknown>` |
| 12.9% |      79 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                        | `<unknown>` |
|  5.4% |      33 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                    | `<unknown>` |
|  5.4% |      33 | `ParseGenerator::generate(JVMState*)`                                                                                                          | `<unknown>` |
|  5.4% |      33 | `Parse::do_one_block()`                                                                                                                        | `<unknown>` |
|  5.4% |      33 | `Parse::do_all_blocks()`                                                                                                                       | `<unknown>` |
|  5.1% |      31 | `Parse::do_call()`                                                                                                                             | `<unknown>` |
|  3.8% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                                                          | `<unknown>` |
|  3.8% |      23 | `IR::IR(Compilation*, ciMethod*, int)`                                                                                                         | `<unknown>` |
|  3.6% |      22 | `PredictedCallGenerator::generate(JVMState*)`                                                                                                  | `<unknown>` |
|  2.4% |      15 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                             | `<unknown>` |
|  2.1% |      13 | `WorkerThread::run()`                                                                                                                          | `<unknown>` |
|  2.1% |      13 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
|  2.0% |      12 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                                                                           | `<unknown>` |
|  1.6% |      10 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`                            | `<unknown>` |
|  1.6% |      10 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`                                | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 22.3% |     137 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 22.2% |     136 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 22.0% |     135 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 22.0% |     135 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 22.0% |     135 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.9% |     134 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 21.9% |     134 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 21.9% |     134 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 20.7% |     127 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 20.7% |     127 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 20.2% |     124 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400`  |
| 20.2% |     124 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 20.2% |     124 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 20.2% |     124 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 20.2% |     124 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 19.6% |     120 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 19.6% |     120 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 19.6% |     120 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 19.4% |     119 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.4% |     119 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     460 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     461 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 96.7% |     445 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  2.8% |      13 | `WorkerThread::run()`             | `<unknown>` |
|  0.4% |       2 | `VMThread::run()`                 | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     460 | `Thread::call_run()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 99.8% |     444 | `CompileBroker::compiler_thread_loop()`                         | `<unknown>` |
|  0.2% |       1 | `ServiceThread::service_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 99.3% |     441 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  0.7% |       3 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 81.2% |     358 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`             | `<unknown>` |
| 17.9% |      79 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`               | `<unknown>` |
|  0.2% |       1 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                              | `<unknown>` |
|  0.2% |       1 | `CompileBroker::update_compile_perf_data(CompilerThread*, methodHandle const&, bool)` | `<unknown>` |
|  0.2% |       1 | `ciEnv::~ciEnv()`                                                                     | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 51.1% |     183 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 37.7% |     135 | `Compile::Optimize()`                                                                      | `<unknown>` |
|  8.9% |      32 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  0.8% |       3 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |
|  0.8% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     358 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 56.8% |     104 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 16.4% |      30 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
| 13.1% |      24 | `Matcher::match()`                                                                   | `<unknown>` |
|  9.3% |      17 | `PhaseOutput::Output()`                                                              | `<unknown>` |
|  2.2% |       4 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.1% |     135 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  1.4% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
|  0.7% |       1 | `linkMethodHandleConstant(Class, int, Class, String, Object)`    | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 98.5% |     135 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 21.2% |      29 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     136 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  50.7% |      69 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|   0.7% |       1 | `resolve_static_call`                                                                            | `<unknown>`                                     |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 33.3% |      45 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 32.6% |      44 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 11.9% |      16 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  8.9% |      12 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |
|  3.0% |       4 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 91.9% |     124 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
| 87.4% |     118 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 84.4% |     114 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
| 68.1% |      92 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011ba400` |
| 63.7% |      86 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001208000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     135 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     135 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 94.8% |     127 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 92.5% |     124 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 69.4% |      93 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 34.3% |      46 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001219800`  |
| 30.6% |      41 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700122cc00`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     134 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     134 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  22.4% |      30 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|  16.4% |      22 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012da400` |
|   8.2% |      11 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012e7c00` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     134 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  67.9% |      91 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 72.4% |      92 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 61.4% |      78 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 37.8% |      48 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 16.5% |      21 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 10.2% |      13 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     127 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     124 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  68.5% |      85 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.2% |     123 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.6% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     124 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   1.6% |       2 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                            | Location                                               |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |     124 | `execute(String[])`                               | `org.codenarc.CodeNarc`                                |
|   3.2% |       4 | `parseArgs(String[])`                             | `org.codenarc.CodeNarc`                                |
|   1.6% |       2 | `super$2$visitBinaryExpression(BinaryExpression)` | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor` |
|   0.8% |       1 | `registerPluginsForClassNames(String)`            | `org.codenarc.CodeNarcRunner`                          |
|   0.8% |       1 | `writeTitle(Writer)`                              | `org.codenarc.report.TextReportWriter`                 |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     124 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 98.3% |     118 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 44.2% |      53 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
| 13.3% |      16 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.7% |      14 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  5.0% |       6 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     120 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     120 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|   2.5% |       3 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     120 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  27.5% |      33 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.2% |     118 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 10.9% |      13 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  0.8% |       1 | `invokeBasic(Object[])`   | `java.lang.invoke.MethodHandle`            |
|  0.8% |       1 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.8% |       1 | `getLines()`              | `org.codenarc.source.AbstractSourceCode`   |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102b000`)

|     % | Samples | Callee                          | Location                                     |
| ----: | ------: | ------------------------------- | -------------------------------------------- |
| 99.2% |     118 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|  0.8% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 20.2% |      21 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 17.3% |      18 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 10.6% |      11 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
| 10.6% |      11 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
|  7.7% |       8 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 89.9% |      80 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 10.1% |       9 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 31.3% |      25 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 15.0% |      12 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 11.3% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  7.5% |       6 | `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)`           | `<unknown>` |
|  7.5% |       6 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      80 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 92.4% |      73 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  7.6% |       6 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      79 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      79 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 39.7% |      29 | `Compilation::emit_lir()`                                | `<unknown>` |
| 37.0% |      27 | `Compilation::build_hir()`                               | `<unknown>` |
| 21.9% |      16 | `Compilation::emit_code_body()`                          | `<unknown>` |
|  1.4% |       1 | `CodeBuffer::initialize_section_size(CodeSection*, int)` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      45 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Callee                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      33 | `Parse::do_all_blocks()`    | `<unknown>` |
|   3.0% |       1 | `Parse::build_exits()`      | `<unknown>` |
|   3.0% |       1 | `ciMethod::method_data()`   | `<unknown>` |
|   3.0% |       1 | `Parse::create_entry_map()` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      33 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 93.9% |      31 | `Parse::do_call()`                       | `<unknown>` |
| 21.2% |       7 | `Parse::do_field_access(bool, bool)`     | `<unknown>` |
|  9.1% |       3 | `Parse::do_one_bytecode()`               | `<unknown>` |
|  3.0% |       1 | `InlineCallGenerator::is_inline() const` | `<unknown>` |
|  3.0% |       1 | `Parse::do_exceptions()`                 | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      33 | `Parse::do_one_block()` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 71.0% |      22 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 54.8% |      17 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 12.9% |       4 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  9.7% |       3 | `GraphKit::kill_dead_locals()`                                                          | `<unknown>` |
|  9.7% |       3 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 90.0% |      27 | `PhaseCFG::global_code_motion()`       | `<unknown>` |
|  6.7% |       2 | `PhaseCFG::build_dominator_tree()`     | `<unknown>` |
|  3.3% |       1 | `PhaseCFG::estimate_block_frequency()` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 86.2% |      25 | `LinearScan::do_linear_scan()`              | `<unknown>` |
| 13.8% |       4 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `PhaseCFG::global_code_motion()` (`<unknown>`)

|     % | Samples | Callee                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| 44.4% |      12 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                         | `<unknown>` |
| 22.2% |       6 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` | `<unknown>` |
| 14.8% |       4 | `PhaseCFG::partial_latency_of_defs(Node*)`                                 | `<unknown>` |
|  7.4% |       2 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)`                        | `<unknown>` |
|  7.4% |       2 | `Node_Backward_Iterator::next()`                                           | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| 85.2% |      23 | `IR::IR(Compilation*, ciMethod*, int)`                                     | `<unknown>` |
|  3.7% |       1 | `IR::eliminate_null_checks()`                                              | `<unknown>` |
|  3.7% |       1 | `IR::compute_code()`                                                       | `<unknown>` |
|  3.7% |       1 | `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)` | `<unknown>` |
|  3.7% |       1 | `IR::optimize_blocks()`                                                    | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 88.9% |      24 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  3.7% |       1 | `BoolNode::hash() const`             | `<unknown>` |
|  3.7% |       1 | `Node::hash() const`                 | `<unknown>` |
|  3.7% |       1 | `IfNode::Ideal(PhaseGVN*, bool)`     | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 84.0% |      21 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      23 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 95.5% |      21 | `ParseGenerator::generate(JVMState*)`                           | `<unknown>` |
| 31.8% |       7 | `PredictedCallGenerator::generate(JVMState*)`                   | `<unknown>` |
|  4.5% |       1 | `GraphKit::type_check_receiver(Node*, ciKlass*, float, Node**)` | `<unknown>` |
|  4.5% |       1 | `PreserveJVMState::PreserveJVMState(GraphKit*, bool)`           | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 86.7% |      13 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| 13.3% |       2 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 61.5% |       8 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
| 15.4% |       2 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
| 15.4% |       2 | `semaphore_wait_trap`                           | `<unknown>` |
|  7.7% |       1 | `G1BatchedTask::work(unsigned int)`             | `<unknown>` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------- | ----------- |
| 92.3% |      12 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                              | `<unknown>` |
| 15.4% |       2 | `ClassFileParser::post_process_parsed_stream(ClassFileStream const*, ConstantPool*, JavaThread*)` | `<unknown>` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                           | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | ----------- |
| 58.3% |       7 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`  | `<unknown>` |
| 33.3% |       4 | `ClassFileParser::parse_methods(ClassFileStream const*, bool, bool*, bool*, bool*, JavaThread*)` | `<unknown>` |
|  8.3% |       1 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`                                     | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 90.0% |       9 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
| 10.0% |       1 | `SystemDictionary::find_or_define_helper(Symbol*, Handle, InstanceKlass*, JavaThread*)`                            | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      10 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |       8 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                |
| 1.1% |       7 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |       5 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.8% |       5 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |       4 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |       4 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% |       4 | `PhaseChaitin::merge_multidefs()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |       4 | `Node_Backward_Iterator::next()` ← `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |       4 | `IntervalWalker::walk_to(IntervalState, int)` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |       3 | `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)` ← `Compile::final_graph_reshaping()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       3 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |       3 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |       3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` ← `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `LIR_Assembler::record_non_safepoint_debug_info()` ← `LIR_Assembler::process_debug_info(LIR_Op*)` ← `LIR_Assembler::emit_lir_list(LIR_List*)` ← `LIR_Assembler::emit_code(BlockList*)` ← `Compilation::emit_code_body()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` |
| 0.5% |       3 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` ← `CompiledMethod::unload_nmethod_caches(bool)` ← `nmethod::do_unloading(bool)` ← `CodeCacheUnloadingTask::work(unsigned int)` ← `G1ParallelCleaningTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% |       3 | `PhaseOutput::BuildOopMaps()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
