# Sampling profile

Collected 609 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 56.8% |     346 |
| Native           | 29.1% |     177 |
| Standard library | 12.6% |      77 |
| JIT              |  1.3% |       8 |
| Ours             |  0.2% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                              | Location                                               |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 2.5% |      15 | `tlv_get_addr`                                                                                                                                                        | `<unknown>`                                            |
| 2.1% |      13 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>`                                            |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                    | `<unknown>`                                            |
| 1.5% |       9 | `IndexSetIterator::advance_and_next()`                                                                                                                                | `<unknown>`                                            |
| 1.5% |       9 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                                | `<unknown>`                                            |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                     | `<unknown>`                                            |
| 1.3% |       8 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                            | `<unknown>`                                            |
| 1.3% |       8 | `pthread_jit_write_protect_np`                                                                                                                                        | `<unknown>`                                            |
| 1.1% |       7 | `_platform_memset`                                                                                                                                                    | `<unknown>`                                            |
| 1.1% |       7 | `PhaseOutput::BuildOopMaps()`                                                                                                                                         | `<unknown>`                                            |
| 1.1% |       7 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                | `<unknown>`                                            |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                          | `<unknown>`                                            |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                              | `<unknown>`                                            |
| 1.0% |       6 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                                          | `<unknown>`                                            |
| 1.0% |       6 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>`                                            |
| 1.0% |       6 | `Node::dominates(Node*, Node_List&)`                                                                                                                                  | `<unknown>`                                            |
| 0.8% |       5 | `Node_Backward_Iterator::next()`                                                                                                                                      | `<unknown>`                                            |
| 0.7% |       4 | `PhaseIFG::effective_degree(unsigned int) const`                                                                                                                      | `<unknown>`                                            |
| 0.7% |       4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.7% |       4 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                                                                                   | `<unknown>`                                            |

#### Categories

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.5% |       9 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.5% |       9 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.3% |       8 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                   | `<unknown>` |
| 1.1% |       7 | `PhaseOutput::BuildOopMaps()`                                                | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 1.0% |       6 | `PhaseChaitin::post_allocate_copy_removal()`                                 | `<unknown>` |
| 1.0% |       6 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
| 0.8% |       5 | `Node_Backward_Iterator::next()`                                             | `<unknown>` |
| 0.7% |       4 | `PhaseIFG::effective_degree(unsigned int) const`                             | `<unknown>` |
| 0.7% |       4 | `Compile::identify_useful_nodes(Unique_Node_List&)`                          | `<unknown>` |
| 0.7% |       4 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
| 0.7% |       4 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)`    | `<unknown>` |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 0.7% |       4 | `PhaseLive::compute(unsigned int)`                                           | `<unknown>` |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| 0.5% |       3 | `PhiNode::Opcode() const`                                                    | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                              | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.5% |      15 | `tlv_get_addr`                                                                                                                                                        | `<unknown>` |
| 2.1% |      13 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>` |
| 1.3% |       8 | `pthread_jit_write_protect_np`                                                                                                                                        | `<unknown>` |
| 1.1% |       7 | `_platform_memset`                                                                                                                                                    | `<unknown>` |
| 1.0% |       6 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
| 0.7% |       4 | `Dict::Insert(void*, void*, bool)`                                                                                                                                    | `<unknown>` |
| 0.7% |       4 | `stat64`                                                                                                                                                              | `<unknown>` |
| 0.5% |       3 | `BytecodeStream::next()`                                                                                                                                              | `<unknown>` |
| 0.5% |       3 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>` |
| 0.5% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                               | `<unknown>` |
| 0.5% |       3 | `semaphore_wait_trap`                                                                                                                                                 | `<unknown>` |
| 0.3% |       2 | `Dict::doubhash()`                                                                                                                                                    | `<unknown>` |
| 0.3% |       2 | `SignatureStream::next()`                                                                                                                                             | `<unknown>` |
| 0.3% |       2 | `inflate`                                                                                                                                                             | `<unknown>` |
| 0.3% |       2 | `NullCheckEliminator::iterate_one(BlockBegin*)`                                                                                                                       | `<unknown>` |
| 0.3% |       2 | `sys_icache_invalidate`                                                                                                                                               | `<unknown>` |
| 0.3% |       2 | `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)`                                                                            | `<unknown>` |
| 0.3% |       2 | `SymbolTable::new_symbol(char const*, int)`                                                                                                                           | `<unknown>` |
| 0.3% |       2 | `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)`                                                                                            | `<unknown>` |
| 0.3% |       2 | `bsearch`                                                                                                                                                             | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                                           |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 0.7% |       4 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                             |
| 0.3% |       2 | `resize()`                                                                                                    | `java.util.HashMap`                                                                |
| 0.3% |       2 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                                   |
| 0.3% |       2 | `equals(Object)`                                                                                              | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache$PredictionContextAndInt` |
| 0.3% |       2 | `getOptimizedTransition(int)`                                                                                 | `groovyjarjarantlr4.v4.runtime.atn.ATNState`                                       |
| 0.2% |       1 | `getReachableTarget(ATNConfig, Transition, int)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                             |
| 0.2% |       1 | `invokeInterface(Object, Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000801093400`                               |
| 0.2% |       1 | `isLatin1()`                                                                                                  | `java.lang.String`                                                                 |
| 0.2% |       1 | `visitPathExpression(GroovyParser$PathExpressionContext)`                                                     | `org.apache.groovy.parser.antlr4.AstBuilder`                                       |
| 0.2% |       1 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                                                |
| 0.2% |       1 | `getMetaClass()`                                                                                              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                          |
| 0.2% |       1 | `equals(ArrayPredictionContext, Set)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`                         |
| 0.2% |       1 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                             |
| 0.2% |       1 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                                                |
| 0.2% |       1 | `visit(GroovyCodeVisitor)`                                                                                    | `org.codehaus.groovy.ast.expr.PropertyExpression`                                  |
| 0.2% |       1 | `visitMethodCallExpression(MethodCallExpression)`                                                             | `org.codehaus.groovy.ast.CodeVisitorSupport`                                       |
| 0.2% |       1 | `visitBlockStatement(BlockStatement)`                                                                         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                       |
| 0.2% |       1 | `parseSig(String, Class)`                                                                                     | `sun.reflect.annotation.AnnotationParser`                                          |
| 0.2% |       1 | `removeIf(Predicate)`                                                                                         | `java.util.Collection`                                                             |
| 0.2% |       1 | `getTargetPropertyInfo()`                                                                                     | `java.beans.Introspector`                                                          |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       3 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xba)`  | `<unknown>` |
| 0.2% |       1 | `itable stub`             | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| 0.2% |       1 | `vtable stub`             | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 20.0% |       3 | `TypeInstPtr::xmeet_helper(Type const*) const`                                                                              | `<unknown>` |
|  6.7% |       1 | `LinkResolver::runtime_resolve_interface_method(CallInfo&, methodHandle const&, Klass*, Handle, Klass*, bool, JavaThread*)` | `<unknown>` |
|  6.7% |       1 | `IdealKit::if_then(Node*, BoolTest::mask, Node*, float, float, bool)`                                                       | `<unknown>` |
|  6.7% |       1 | `LIRGenerator::do_Invoke(Invoke*)`                                                                                          | `<unknown>` |
|  6.7% |       1 | `Scheduling::ComputeRegisterAntidependencies(Block*)`                                                                       | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 22.2% |       2 | `PhaseIFG::remove_node(unsigned int)`                                | `<unknown>` |
| 11.1% |       1 | `PhaseIFG::re_insert(unsigned int)`                                  | `<unknown>` |
| 11.1% |       1 | `PhaseIFG::effective_degree(unsigned int) const`                     | `<unknown>` |
| 11.1% |       1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |
| 11.1% |       1 | `PhaseChaitin::Simplify()`                                           | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       8 | `LinearScanWalker::alloc_free_reg(Interval*)` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                   | Location                                                                     |
| ----: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 25.0% |       2 | `InterpreterRuntime::ldc(JavaThread*, bool)`             | `<unknown>`                                                                  |
| 12.5% |       1 | `$values()`                                              | `org.apache.groovy.util.concurrent.ConcurrentReferenceHashMap$ReferenceType` |
| 12.5% |       1 | `JVM_IsArrayClass`                                       | `<unknown>`                                                                  |
| 12.5% |       1 | `jni_IsAssignableFrom`                                   | `<unknown>`                                                                  |
| 12.5% |       1 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)` | `<unknown>`                                                                  |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 28.6% |       2 | `MemAllocator::allocate() const`                                                                                                                     | `<unknown>` |
| 14.3% |       1 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                     | `<unknown>` |
| 14.3% |       1 | `ConstantPoolCache::allocate(ClassLoaderData*, GrowableArray<int> const&, GrowableArray<int> const&, GrowableArray<ResolvedIndyEntry>, JavaThread*)` | `<unknown>` |
| 14.3% |       1 | `Matcher::match_tree(Node const*)`                                                                                                                   | `<unknown>` |
| 14.3% |       1 | `Compile::Optimize()`                                                                                                                                | `<unknown>` |

##### `PhaseOutput::BuildOopMaps()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       7 | `PhaseOutput::Output()` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                 | Location    |
| -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |

##### `Node::dominates(Node*, Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       6 | `MemNode::all_controls_dominate(Node*, Node*)` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 60.0% |       3 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |
| 40.0% |       2 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `PhaseIFG::effective_degree(unsigned int) const` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIFG::Compute_Effective_Degree()` | `<unknown>` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 75.0% |       3 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 25.0% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                                                                     | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       4 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                                                                     | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 100.0% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|     % | Samples | Caller                                                    | Location    |
| ----: | ------: | --------------------------------------------------------- | ----------- |
| 75.0% |       3 | `Type::hashcons()`                                        | `<unknown>` |
| 25.0% |       1 | `PhaseCFG::hoist_to_cheaper_block(Block*, Block*, Node*)` | `<unknown>` |

##### `stat64` (`<unknown>`)

|      % | Samples | Caller                        | Location                 |
| -----: | ------: | ----------------------------- | ------------------------ |
| 100.0% |       4 | `getBooleanAttributes0(File)` | `java.io.UnixFileSystem` |

##### `PhiNode::Opcode() const` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `ConnectionGraph::compute_escape()`                                    | `<unknown>` |
| 33.3% |       1 | `Matcher::match()`                                                     | `<unknown>` |
| 33.3% |       1 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `BytecodeStream::next()` (`<unknown>`)

|     % | Samples | Caller                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| 66.7% |       2 | `MethodData::allocate(ClassLoaderData*, methodHandle const&, JavaThread*)` | `<unknown>` |
| 33.3% |       1 | `MethodData::initialize()`                                                 | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       3 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       3 | `WorkerThread::run()` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                   | Location                           |
| ----: | ------: | ---------------------------------------- | ---------------------------------- |
| 33.3% |       1 | `getEntry(String)`                       | `java.util.zip.ZipFile`            |
| 33.3% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `Dict::doubhash()` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       2 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `SignatureStream::next()` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |

##### `inflate` (`<unknown>`)

|     % | Samples | Caller                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 50.0% |       1 | `Java_java_util_zip_Inflater_inflateBytesBytes`               | `<unknown>`              |
| 50.0% |       1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `NullCheckEliminator::iterate_one(BlockBegin*)` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `Optimizer::eliminate_null_checks()` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `ICStub::finalize()`                                                                | `<unknown>` |
| 50.0% |       1 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)` | `<unknown>` |

##### `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 50.0% |       1 | `JvmtiExport::post_class_prepare(JavaThread*, Klass*)` | `<unknown>` |
| 50.0% |       1 | `jni_GetObjectClass`                                   | `<unknown>` |

##### `SymbolTable::new_symbol(char const*, int)` (`<unknown>`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       2 | `SignatureStream::find_symbol()` | `<unknown>` |

##### `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|     % | Samples | Caller                                                       | Location    |
| ----: | ------: | ------------------------------------------------------------ | ----------- |
| 50.0% |       1 | `GraphBuilder::push_scope(ciMethod*, BlockBegin*)`           | `<unknown>` |
| 50.0% |       1 | `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |       2 | `encoding_for_logical_immediate(unsigned long long)` | `<unknown>` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 50.0% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 50.0% |       1 | `add(ATNConfig)`                                                                                              | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`       |

##### `equals(Object)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache$PredictionContextAndInt`)

|      % | Samples | Caller            | Location            |
| -----: | ------: | ----------------- | ------------------- |
| 100.0% |       2 | `getNode(Object)` | `java.util.HashMap` |

##### `getOptimizedTransition(int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getReachableTarget(ATNConfig, Transition, int)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                       | Location                                               |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invokeInterface(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801093400`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d2400` |

##### `isLatin1()` (`java.lang.String`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       1 | `charAt(int)` | `java.lang.String` |

##### `visitPathExpression(GroovyParser$PathExpressionContext)` (`org.apache.groovy.parser.antlr4.AstBuilder`)

|      % | Samples | Caller                                                          | Location                                     |
| -----: | ------: | --------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `visitPostfixExpression(GroovyParser$PostfixExpressionContext)` | `org.apache.groovy.parser.antlr4.AstBuilder` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|      % | Samples | Caller                | Location                                                  |
| -----: | ------: | --------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `equals(ArrayPredictionContext, Set)` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

##### `addDFAState(DFA, ATNConfigSet, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                              | Location                                               |
| -----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `addDFAEdge(DFA, DFAState, int, IntegerList, ATNConfigSet, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       1 | `get(Object)` | `java.util.HashMap` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.PropertyExpression`)

|      % | Samples | Caller                                            | Location                                     |
| -----: | ------: | ------------------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.MethodCallExpression` |

##### `visitBlockStatement(BlockStatement)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|      % | Samples | Caller                                | Location                                          |
| -----: | ------: | ------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitBlockStatement(BlockStatement)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `parseSig(String, Class)` (`sun.reflect.annotation.AnnotationParser`)

|      % | Samples | Caller                                                                | Location                                  |
| -----: | ------: | --------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% |       1 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `removeIf(Predicate)` (`java.util.Collection`)

|      % | Samples | Caller                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `getSAMMethod(Class)` | `org.codehaus.groovy.reflection.stdclasses.CachedSAMClass` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|      % | Samples | Caller          | Location                  |
| -----: | ------: | --------------- | ------------------------- |
| 100.0% |       1 | `getBeanInfo()` | `java.beans.Introspector` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller                           | Location                      |
| -----: | ------: | -------------------------------- | ----------------------------- |
| 100.0% |       1 | `<init>(Object, ReferenceQueue)` | `java.lang.ref.WeakReference` |

##### `I2C/C2I adapters(0xba)` (`<unknown>`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `replaceFunctions(List, List, Object[])` | `java.lang.invoke.LambdaFormBuffer` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller                                    | Location                            |
| -----: | ------: | ----------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `indexOf(LambdaForm$NamedFunction, List)` | `java.lang.invoke.LambdaFormBuffer` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|      % | Samples | Caller                       | Location                                     |
| -----: | ------: | ---------------------------- | -------------------------------------------- |
| 100.0% |       1 | `forEachRemaining(Consumer)` | `java.util.Spliterators$IteratorSpliterator` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                    | Location              |
| -----: | ------: | ------------------------- | --------------------- |
| 100.0% |       1 | `hashCodeRange(int, int)` | `java.util.ArrayList` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.0% |     457 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.0% |     457 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 75.0% |     457 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.0% |     457 | `thread_start`                                                                                | `<unknown>`                                          |
| 72.2% |     440 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 72.1% |     439 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 71.6% |     436 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 59.1% |     360 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 58.9% |     359 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 29.1% |     177 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 22.0% |     134 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 22.0% |     134 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 21.7% |     132 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.7% |     132 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| 21.3% |     130 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010a9400`  |
| 21.3% |     130 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.2% |     129 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00`  |
| 21.2% |     129 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400`  |
| 21.2% |     129 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000008010ac800`  |
| 21.2% |     129 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 72.1% |     439 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 71.6% |     436 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 59.1% |     360 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 58.9% |     359 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 29.1% |     177 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 21.2% |     129 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 16.7% |     102 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 13.5% |      82 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 11.8% |      72 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 11.8% |      72 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 11.3% |      69 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 11.3% |      69 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 10.5% |      64 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  7.1% |      43 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  5.7% |      35 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  5.4% |      33 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  4.6% |      28 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.4% |      27 | `Matcher::match()`                                                                                      | `<unknown>` |
|  4.3% |      26 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                  | `<unknown>` |
|  3.9% |      24 | `Compilation::build_hir()`                                                                              | `<unknown>` |

##### Native

|     % | Samples | Function                                                                | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 75.0% |     457 | `Thread::call_run()`                                                    | `<unknown>` |
| 75.0% |     457 | `thread_native_entry(Thread*)`                                          | `<unknown>` |
| 75.0% |     457 | `_pthread_start`                                                        | `<unknown>` |
| 75.0% |     457 | `thread_start`                                                          | `<unknown>` |
| 72.2% |     440 | `JavaThread::thread_main_inner()`                                       | `<unknown>` |
| 11.8% |      72 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
|  7.4% |      45 | `Parse::Parse(JVMState*, ciMethod*, float)`                             | `<unknown>` |
|  7.4% |      45 | `ParseGenerator::generate(JVMState*)`                                   | `<unknown>` |
|  7.2% |      44 | `Parse::do_all_blocks()`                                                | `<unknown>` |
|  6.9% |      42 | `Parse::do_one_block()`                                                 | `<unknown>` |
|  6.1% |      37 | `Parse::do_call()`                                                      | `<unknown>` |
|  4.4% |      27 | `PredictedCallGenerator::generate(JVMState*)`                           | `<unknown>` |
|  3.3% |      20 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`   | `<unknown>` |
|  3.3% |      20 | `IR::IR(Compilation*, ciMethod*, int)`                                  | `<unknown>` |
|  2.5% |      15 | `tlv_get_addr`                                                          | `<unknown>` |
|  2.5% |      15 | `WorkerThread::run()`                                                   | `<unknown>` |
|  2.3% |      14 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)`  | `<unknown>` |
|  2.1% |      13 | `__psynch_mutexwait`                                                    | `<unknown>` |
|  2.1% |      13 | `_pthread_mutex_firstfit_lock_slow`                                     | `<unknown>` |
|  1.6% |      10 | `Dict::Insert(void*, void*, bool)`                                      | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 22.0% |     134 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.7% |     132 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.7% |     132 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| 21.3% |     130 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010a9400`  |
| 21.3% |     130 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.2% |     129 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00`  |
| 21.2% |     129 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400`  |
| 21.2% |     129 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000008010ac800`  |
| 20.2% |     123 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000801092800` |
| 20.2% |     123 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010ab400`  |
| 19.9% |     121 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x0000000801092000`  |
| 19.9% |     121 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 19.7% |     120 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000`  |
| 19.7% |     120 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.7% |     120 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
| 19.5% |     119 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000000801096800`  |
| 19.5% |     119 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
| 19.5% |     119 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801098000`  |
| 19.0% |     116 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.0% |     116 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000080102b000`  |

##### JIT

|    % | Samples | Function                  | Location    |
| ---: | ------: | ------------------------- | ----------- |
| 0.5% |       3 | `I2C/C2I adapters(0xbb)`  | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xbbb)` | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xba)`  | `<unknown>` |
| 0.2% |       1 | `itable stub`             | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xb)`   | `<unknown>` |
| 0.2% |       1 | `vtable stub`             | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 96.3% |     440 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  3.3% |      15 | `WorkerThread::run()`             | `<unknown>` |
|  0.2% |       1 | `WatcherThread::run()`            | `<unknown>` |
|  0.2% |       1 | `VMThread::run()`                 | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     457 | `Thread::call_run()` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Callee                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |     457 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     457 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 99.8% |     439 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |
|  0.2% |       1 | `JvmtiDeferredEventQueue::has_events()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 99.3% |     436 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  0.7% |       3 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 82.6% |     360 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 16.5% |      72 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.2% |       1 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.2% |       1 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |
|  0.2% |       1 | `os::elapsed_counter()`                                                   | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 99.7% |     359 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  0.3% |       1 | `Compile::~Compile()`                                              | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 49.3% |     177 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 35.9% |     129 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 12.5% |      45 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  2.2% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 57.6% |     102 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 15.3% |      27 | `Matcher::match()`                                                                   | `<unknown>` |
| 11.9% |      21 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
| 10.2% |      18 | `PhaseOutput::Output()`                                                              | `<unknown>` |
|  3.4% |       6 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 98.5% |     132 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 16.4% |      22 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.0% |     130 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  2.2% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 90.9% |     120 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000` |
| 87.1% |     115 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000080109a000` |
| 85.6% |     113 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800` |
| 67.4% |      89 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008011ba000` |
| 63.6% |      84 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801205c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     132 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  51.5% |      68 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010a9400`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     130 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     130 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010a9400` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010abc00`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 95.3% |     123 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010ab400`  |
| 93.0% |     120 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
| 69.8% |      90 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801093000` |
| 38.8% |      50 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000080121a000`  |
| 33.3% |      43 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000801229800`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010ac400`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00` |
| 100.0% |     129 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000008010ac800` |
|  23.3% |      30 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a9400` |
|  17.8% |      23 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008012ddc00` |
|   7.0% |       9 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000008012e7400` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010ac800`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400` |
|  67.4% |      87 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000008010ac000` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 33.3% |      43 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 30.2% |      39 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 13.2% |      17 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  5.4% |       7 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |
|  3.9% |       5 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801092800`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 72.4% |      89 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 61.8% |      76 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 41.5% |      51 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 17.9% |      22 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 10.6% |      13 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010ab400`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     123 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801092800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801092000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.2% |     120 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|  2.5% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     121 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801092000` |
|   0.8% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801099800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     120 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400` |
|  68.3% |      82 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                 | Location                               |
| -----: | ------: | -------------------------------------- | -------------------------------------- |
| 100.0% |     120 | `execute(String[])`                    | `org.codenarc.CodeNarc`                |
|   2.5% |       3 | `parseArgs(String[])`                  | `org.codenarc.CodeNarc`                |
|   1.7% |       2 | `writeTitle(Writer)`                   | `org.codenarc.report.TextReportWriter` |
|   0.8% |       1 | `registerPluginsForClassNames(String)` | `org.codenarc.CodeNarcRunner`          |
|   0.8% |       1 | `writeFooter(Writer)`                  | `org.codenarc.report.TextReportWriter` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000008010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     120 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801096800`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 96.6% |     115 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
| 47.1% |      56 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
| 15.1% |      18 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.8% |      14 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  5.9% |       7 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000000801018400` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801098400`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     119 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801098000` |
|  31.9% |      38 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x0000000801097000` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801098000`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     119 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000000801096800` |
| 100.0% |     119 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000000801098400` |
|   0.8% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x0000000801092000` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.1% |     115 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 11.2% |      13 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  1.7% |       2 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.9% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |
|  0.9% |       1 | `getCodeNarcVersion()`    | `org.codenarc.report.AbstractReportWriter` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000080102b000`)

|     % | Samples | Callee                          | Location                                     |
| ----: | ------: | ------------------------------- | -------------------------------------------- |
| 99.1% |     115 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|  1.7% |       2 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 16.7% |      17 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 16.7% |      17 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 13.7% |      14 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
| 11.8% |      12 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
| 10.8% |      11 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 84.1% |      69 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 15.9% |      13 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 88.9% |      64 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
| 11.1% |       8 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      72 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      72 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 37.7% |      26 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 17.4% |      12 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 11.6% |       8 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  7.2% |       5 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  5.8% |       4 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      69 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 43.8% |      28 | `Compilation::emit_lir()`        | `<unknown>` |
| 37.5% |      24 | `Compilation::build_hir()`       | `<unknown>` |
| 17.2% |      11 | `Compilation::emit_code_body()`  | `<unknown>` |
|  1.6% |       1 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------- | ----------- |
| 97.8% |      44 | `Parse::do_all_blocks()`                                              | `<unknown>` |
|  4.4% |       2 | `Parse::build_exits()`                                                | `<unknown>` |
|  2.2% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      45 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 95.5% |      42 | `Parse::do_one_block()`                   | `<unknown>` |
|  2.3% |       1 | `Parse::ensure_phis_everywhere()`         | `<unknown>` |
|  2.3% |       1 | `Parse::merge_common(Parse::Block*, int)` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      43 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                                                                                       | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------ | ----------- |
| 88.1% |      37 | `Parse::do_call()`                                                                                           | `<unknown>` |
| 19.0% |       8 | `Parse::do_field_access(bool, bool)`                                                                         | `<unknown>` |
|  7.1% |       3 | `Parse::array_load(BasicType)`                                                                               | `<unknown>` |
|  7.1% |       3 | `Parse::do_one_bytecode()`                                                                                   | `<unknown>` |
|  2.4% |       1 | `GraphKit::access_store_at(Node*, Node*, TypePtr const*, Node*, Type const*, BasicType, unsigned long long)` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 73.0% |      27 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 48.6% |      18 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 18.9% |       7 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  5.4% |       2 | `GraphKit::kill_dead_locals()`                                                          | `<unknown>` |
|  2.7% |       1 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 94.3% |      33 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  2.9% |       1 | `PhiNode::hash() const`              | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 12.1% |       4 | `PhiNode::Ideal(PhaseGVN*, bool)`            | `<unknown>` |
| 12.1% |       4 | `RegionNode::Ideal(PhaseGVN*, bool)`         | `<unknown>` |
|  9.1% |       3 | `CallStaticJavaNode::Ideal(PhaseGVN*, bool)` | `<unknown>` |
|  9.1% |       3 | `StoreNode::Ideal(PhaseGVN*, bool)`          | `<unknown>` |
|  9.1% |       3 | `IfNode::Ideal(PhaseGVN*, bool)`             | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 78.6% |      22 | `LinearScan::do_linear_scan()`              | `<unknown>` |
| 21.4% |       6 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 81.5% |      22 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
| 11.1% |       3 | `Matcher::find_shared(Node*)`                   | `<unknown>` |
|  3.7% |       1 | `PhiNode::Opcode() const`                       | `<unknown>` |
|  3.7% |       1 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 85.2% |      23 | `ParseGenerator::generate(JVMState*)`                               | `<unknown>` |
| 40.7% |      11 | `PredictedCallGenerator::generate(JVMState*)`                       | `<unknown>` |
|  7.4% |       2 | `PreserveJVMState::PreserveJVMState(GraphKit*, bool)`               | `<unknown>` |
|  3.7% |       1 | `GraphKit::null_check_common(Node*, BasicType, bool, Node**, bool)` | `<unknown>` |
|  3.7% |       1 | `GraphKit::subtype_check_receiver(Node*, ciKlass*, Node**)`         | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 57.7% |      15 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |
|  3.8% |       1 | `ConvI2LNode::Opcode() const`                            | `<unknown>` |
|  3.8% |       1 | `PhiNode::Opcode() const`                                | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 83.3% |      20 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  8.3% |       2 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  8.3% |       2 | `IR::eliminate_null_checks()`                     | `<unknown>` |

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
| 53.3% |       8 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 20.0% |       3 | `semaphore_wait_trap`                           | `<unknown>` |
| 13.3% |       2 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |
| 13.3% |       2 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |

##### `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)` (`<unknown>`)

|     % | Samples | Callee                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 64.3% |       9 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)`  | `<unknown>` |
| 21.4% |       3 | `InterpreterRuntime::resolve_get_put(JavaThread*, Bytecodes::Code)` | `<unknown>` |
|  7.1% |       1 | `InterpreterRuntime::resolve_invokedynamic(JavaThread*)`            | `<unknown>` |

##### `_pthread_mutex_firstfit_lock_slow` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      13 | `__psynch_mutexwait` | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 30.0% |       3 | `Type::cmp(Type const*, Type const*)`   | `<unknown>` |
| 20.0% |       2 | `Dict::doubhash()`                      | `<unknown>` |
| 10.0% |       1 | `TypeInterfaces::eq(Type const*) const` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% |      13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                   |
| 1.5% |       9 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                    |
| 1.3% |       8 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` |
| 1.1% |       7 | `PhaseOutput::BuildOopMaps()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                    |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                          |
| 1.1% |       7 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                               |
| 1.1% |       7 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                  |
| 1.0% |       6 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                         |
| 0.7% |       4 | `PhaseIFG::effective_degree(unsigned int) const` ← `PhaseIFG::Compute_Effective_Degree()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                            |
| 0.7% |       4 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                   |
| 0.7% |       4 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                     |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                       |
| 0.5% |       3 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                          |
| 0.5% |       3 | `PhaseChaitin::merge_multidefs()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                    |
| 0.5% |       3 | `PhaseCFG::partial_latency_of_defs(Node*)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                        |
| 0.5% |       3 | `RegMask::is_misaligned_pair() const` ← `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                       |
| 0.5% |       3 | `Node_Backward_Iterator::next()` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                  |
| 0.5% |       3 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                 |
| 0.5% |       3 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                   |
| 0.5% |       3 | `__psynch_mutexwait` ← `_pthread_mutex_firstfit_lock_slow` ← `ThreadCritical::ThreadCritical()` ← `Chunk::chop()` ← `Chunk::next_chop()` ← `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                          |
