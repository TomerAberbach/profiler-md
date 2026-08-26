# Sampling profile

Collected 611 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 56.5% |     345 |
| Native            | 29.3% |     179 |
| Standard library  | 12.8% |      78 |
| JIT               |  1.3% |       8 |
| Garbage collector |  0.2% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                              | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.3% |      14 | `tlv_get_addr`                                                                                                                                                        | `<unknown>` |
| 2.1% |      13 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                     | `<unknown>` |
| 2.1% |      13 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                              | `<unknown>` |
| 1.6% |      10 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>` |
| 1.3% |       8 | `IndexSetIterator::advance_and_next()`                                                                                                                                | `<unknown>` |
| 1.3% |       8 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>` |
| 1.1% |       7 | `pthread_jit_write_protect_np`                                                                                                                                        | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                    | `<unknown>` |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                                                  | `<unknown>` |
| 1.0% |       6 | `PhaseLive::compute(unsigned int)`                                                                                                                                    | `<unknown>` |
| 1.0% |       6 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                                                                                       | `<unknown>` |
| 1.0% |       6 | `Arena::contains(void const*) const`                                                                                                                                  | `<unknown>` |
| 1.0% |       6 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                            | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_tree()`                                                                                                                                   | `<unknown>` |
| 0.7% |       4 | `Type::cmp(Type const*, Type const*)`                                                                                                                                 | `<unknown>` |
| 0.7% |       4 | `PhaseCCP::transform(Node*)`                                                                                                                                          | `<unknown>` |
| 0.7% |       4 | `Node_Backward_Iterator::next()`                                                                                                                                      | `<unknown>` |
| 0.7% |       4 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                                                                                   | `<unknown>` |
| 0.7% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                                    | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                             | Location    |
| ---: | ------: | -------------------------------------------------------------------- | ----------- |
| 2.1% |      13 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 2.1% |      13 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`             | `<unknown>` |
| 1.3% |       8 | `IndexSetIterator::advance_and_next()`                               | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                   | `<unknown>` |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |
| 1.0% |       6 | `PhaseLive::compute(unsigned int)`                                   | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`      | `<unknown>` |
| 1.0% |       6 | `ciObjectFactory::get_metadata(Metadata*)`                           | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_tree()`                                  | `<unknown>` |
| 0.7% |       4 | `Type::cmp(Type const*, Type const*)`                                | `<unknown>` |
| 0.7% |       4 | `PhaseCCP::transform(Node*)`                                         | `<unknown>` |
| 0.7% |       4 | `Node_Backward_Iterator::next()`                                     | `<unknown>` |
| 0.7% |       4 | `Compile::identify_useful_nodes(Unique_Node_List&)`                  | `<unknown>` |
| 0.7% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                   | `<unknown>` |
| 0.7% |       4 | `MultiNode::is_CFG() const`                                          | `<unknown>` |
| 0.7% |       4 | `PhaseOutput::BuildOopMaps()`                                        | `<unknown>` |
| 0.7% |       4 | `Node::is_CFG() const`                                               | `<unknown>` |
| 0.7% |       4 | `NodeHash::hash_find_insert(Node*)`                                  | `<unknown>` |
| 0.5% |       3 | `Matcher::xform(Node*, int)`                                         | `<unknown>` |
| 0.5% |       3 | `PhaseIterGVN::transform_old(Node*)`                                 | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 2.3% |      14 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.6% |      10 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 1.3% |       8 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 1.1% |       7 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 1.0% |       6 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.0% |       6 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.7% |       4 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.5% |       3 | `Dict::Insert(void*, void*, bool)`                                                                                                                                          | `<unknown>` |
| 0.5% |       3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| 0.5% |       3 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| 0.5% |       3 | `bsearch`                                                                                                                                                                   | `<unknown>` |
| 0.5% |       3 | `stat64`                                                                                                                                                                    | `<unknown>` |
| 0.5% |       3 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)`  | `<unknown>` |
| 0.5% |       3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.3% |       2 | `Interval::add_use_pos(int, IntervalUseKind)`                                                                                                                               | `<unknown>` |
| 0.3% |       2 | `_qsort`                                                                                                                                                                    | `<unknown>` |
| 0.3% |       2 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 0.3% |       2 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.3% |       2 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
| 0.3% |       2 | `methodHandle::~methodHandle()`                                                                                                                                             | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                               |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 0.3% |       2 | `match(Matcher, int, CharSequence)`                                                                           | `java.util.regex.Pattern$CharPropertyGreedy`                           |
| 0.3% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                 |
| 0.3% |       2 | `equals(Object)`                                                                                              | `java.lang.String`                                                     |
| 0.3% |       2 | `add(ATNConfig, PredictionContextCache)`                                                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`                       |
| 0.3% |       2 | `update(int, int)`                                                                                            | `groovyjarjarantlr4.v4.runtime.misc.MurmurHash`                        |
| 0.3% |       2 | `find(int, Object, Class)`                                                                                    | `java.util.HashMap$TreeNode`                                           |
| 0.3% |       2 | `<init>(int)`                                                                                                 | `java.lang.AbstractStringBuilder`                                      |
| 0.2% |       1 | `findSpecies(Object)`                                                                                         | `java.lang.invoke.ClassSpecializer`                                    |
| 0.2% |       1 | `registerMethods(Class, boolean, boolean, Map)`                                                               | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`          |
| 0.2% |       1 | `loadClassOrNull(String, boolean)`                                                                            | `jdk.internal.loader.BuiltinClassLoader`                               |
| 0.2% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                 |
| 0.2% |       1 | `getProtocol()`                                                                                               | `java.net.URL`                                                         |
| 0.2% |       1 | `setMetaDataMap(Map)`                                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser$GroovyParserRuleContext` |
| 0.2% |       1 | `createMetaMethodAndMetaProperty(Class, Class, String, boolean, boolean)`                                     | `groovy.lang.MetaClassImpl`                                            |
| 0.2% |       1 | `invoke(Object, Object, Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c801188400`                    |
| 0.2% |       1 | `visitLabel(Label)`                                                                                           | `jdk.internal.org.objectweb.asm.MethodWriter`                          |
| 0.2% |       1 | `mergeHi(int, int, int, int)`                                                                                 | `java.util.TimSort`                                                    |
| 0.2% |       1 | `processPropertyDescriptors()`                                                                                | `java.beans.Introspector`                                              |
| 0.2% |       1 | `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)`                                                    | `org.codehaus.groovy.vmplugin.v9.Java9`                                |
| 0.2% |       1 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                  |

##### JIT

|    % | Samples | Function                 | Location    |
| ---: | ------: | ------------------------ | ----------- |
| 0.3% |       2 | `itable stub`            | `<unknown>` |
| 0.3% |       2 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| 0.3% |       2 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| 0.2% |       1 | `vtable stub`            | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xa)`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                             | Location    |
| ---: | ------: | -------------------------------------------------- | ----------- |
| 7.1% |       1 | `State::MachNodeGenerator(int)`                    | `<unknown>` |
| 7.1% |       1 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` | `<unknown>` |
| 7.1% |       1 | `ReplacedNodes::clone()`                           | `<unknown>` |
| 7.1% |       1 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
| 7.1% |       1 | `LinearScan::create_interval(int)`                 | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                 | Location    |
| -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 100.0% |      13 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      10 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 25.0% |       2 | `PhaseChaitin::Simplify()`                                                                                                  | `<unknown>` |
| 25.0% |       2 | `PhaseIFG::effective_degree(unsigned int) const`                                                                            | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` | `<unknown>` |
| 12.5% |       1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                        | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                           | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                                        | Location              |
| ----: | ------: | ----------------------------------------------------------------------------- | --------------------- |
| 42.9% |       3 | `JVM_NewArray`                                                                | `<unknown>`           |
| 14.3% |       1 | `<init>(int)`                                                                 | `java.util.ArrayList` |
| 14.3% |       1 | `JVM_IHashCode`                                                               | `<unknown>`           |
| 14.3% |       1 | `InterpreterRuntime::frequency_counter_overflow(JavaThread*, unsigned char*)` | `<unknown>`           |
| 14.3% |       1 | `JVM_Clone`                                                                   | `<unknown>`           |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       6 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 83.3% |       5 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                     | `<unknown>` |
| 16.7% |       1 | `InstanceKlass::find_local_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       6 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       3 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                  | `<unknown>` |
| 33.3% |       2 | `ciEnv::get_klass_by_name_impl(ciKlass*, constantPoolHandle const&, ciSymbol*, bool)` | `<unknown>` |
| 16.7% |       1 | `ciInstanceKlass::super()`                                                            | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Type::cmp(Type const*, Type const*)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       4 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `PhaseCCP::transform(Node*)` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       4 | `PhaseCCP::do_transform()` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |
| 25.0% |       1 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 75.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| 25.0% |       1 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `MultiNode::is_CFG() const` (`<unknown>`)

|     % | Samples | Caller                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 25.0% |       1 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
| 25.0% |       1 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 25.0% |       1 | `ParsePredicates::find_parse_predicate_projections()`                   | `<unknown>` |
| 25.0% |       1 | `RegionNode::is_unreachable_region(PhaseGVN const*)`                    | `<unknown>` |

##### `PhaseOutput::BuildOopMaps()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       4 | `PhaseOutput::Output()` | `<unknown>` |

##### `Node::is_CFG() const` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `NodeHash::hash_find_insert(Node*)` (`<unknown>`)

|     % | Samples | Caller                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |
| 25.0% |       1 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`       | `<unknown>` |
| 25.0% |       1 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       3 | `Matcher::match()` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |       3 | `PhaseIterGVN::optimize()` | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       3 | `Type::hashcons()` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 66.7% |       2 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |
| 33.3% |       1 | `G1ParEvacuateFollowersClosure::do_void()`                          | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       3 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |       3 | `encoding_for_logical_immediate(unsigned long long)` | `<unknown>` |

##### `stat64` (`<unknown>`)

|      % | Samples | Caller                        | Location                 |
| -----: | ------: | ----------------------------- | ------------------------ |
| 100.0% |       3 | `getBooleanAttributes0(File)` | `java.io.UnixFileSystem` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.7% |       2 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 33.3% |       1 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `Interval::add_use_pos(int, IntervalUseKind)` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       2 | `LinearScan::build_intervals()` | `<unknown>` |

##### `_qsort` (`<unknown>`)

|      % | Samples | Caller   | Location    |
| -----: | ------: | -------- | ----------- |
| 100.0% |       2 | `_qsort` | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|     % | Samples | Caller                                                      | Location    |
| ----: | ------: | ----------------------------------------------------------- | ----------- |
| 50.0% |       1 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |
| 50.0% |       1 | `SignatureStream::find_symbol()`                            | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)` | `<unknown>` |
| 50.0% |       1 | `Node::Node(Node*)`                                                    | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 50.0% |       1 | `Node::clone() const`        | `<unknown>` |
| 50.0% |       1 | `Type::Initialize(Compile*)` | `<unknown>` |

##### `methodHandle::~methodHandle()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `InstanceKlass::link_methods(JavaThread*)`                                                                                  | `<unknown>` |
| 50.0% |       1 | `LinkResolver::runtime_resolve_interface_method(CallInfo&, methodHandle const&, Klass*, Handle, Klass*, bool, JavaThread*)` | `<unknown>` |

##### `match(Matcher, int, CharSequence)` (`java.util.regex.Pattern$CharPropertyGreedy`)

|     % | Samples | Caller                              | Location                                     |
| ----: | ------: | ----------------------------------- | -------------------------------------------- |
| 50.0% |       1 | `match(Matcher, int, CharSequence)` | `java.util.regex.Pattern$CharPropertyGreedy` |
| 50.0% |       1 | `match(Matcher, int, CharSequence)` | `java.util.regex.Pattern$BmpCharProperty`    |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `equals(Object)` (`java.lang.String`)

|     % | Samples | Caller                           | Location                                      |
| ----: | ------: | -------------------------------- | --------------------------------------------- |
| 50.0% |       1 | `equals(Object, Object)`         | `java.util.Objects`                           |
| 50.0% |       1 | `isGenericSetMethod(MetaMethod)` | `org.codehaus.groovy.runtime.MetaClassHelper` |

##### `add(ATNConfig, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `update(int, int)` (`groovyjarjarantlr4.v4.runtime.misc.MurmurHash`)

|     % | Samples | Caller                                          | Location                                              |
| ----: | ------: | ----------------------------------------------- | ----------------------------------------------------- |
| 50.0% |       1 | `calculateHashCode(PredictionContext[], int[])` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
| 50.0% |       1 | `hashCode()`                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |

##### `find(int, Object, Class)` (`java.util.HashMap$TreeNode`)

|      % | Samples | Caller                     | Location                     |
| -----: | ------: | -------------------------- | ---------------------------- |
| 100.0% |       2 | `find(int, Object, Class)` | `java.util.HashMap$TreeNode` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % | Samples | Caller        | Location                  |
| ----: | ------: | ------------- | ------------------------- |
| 50.0% |       1 | `<init>(int)` | `java.lang.StringBuilder` |
| 50.0% |       1 | `<init>()`    | `java.lang.StringBuilder` |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                             | Location                           |
| ----: | ------: | ---------------------------------- | ---------------------------------- |
| 50.0% |       1 | `add(Object)`                      | `java.util.Collections$SetFromMap` |
| 50.0% |       1 | `fromCharacteristics(Spliterator)` | `java.util.stream.StreamOpFlag`    |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                            | Location                                       |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------- |
| 50.0% |       1 | `initValue()`                                     | `org.codehaus.groovy.reflection.CachedClass$2` |
| 50.0% |       1 | `divideAndRound(BigInteger, long, int, int, int)` | `java.math.BigDecimal`                         |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801099000` |
| 50.0% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80109a000` |

##### `findSpecies(Object)` (`java.lang.invoke.ClassSpecializer`)

|      % | Samples | Caller                | Location                             |
| -----: | ------: | --------------------- | ------------------------------------ |
| 100.0% |       1 | `speciesData_LLLLL()` | `java.lang.invoke.BoundMethodHandle` |

##### `registerMethods(Class, boolean, boolean, Map)` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`)

|      % | Samples | Caller                 | Location                                                      |
| -----: | ------: | ---------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `<init>(int, boolean)` | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % | Samples | Caller                       | Location                                 |
| -----: | ------: | ---------------------------- | ---------------------------------------- |
| 100.0% |       1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                       | Location                                               |
| -----: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `getProtocol()` (`java.net.URL`)

|      % | Samples | Caller                 | Location               |
| -----: | ------: | ---------------------- | ---------------------- |
| 100.0% |       1 | `urlNoFragString(URL)` | `sun.net.util.URLUtil` |

##### `setMetaDataMap(Map)` (`org.apache.groovy.parser.antlr4.GroovyParser$GroovyParserRuleContext`)

|      % | Samples | Caller                            | Location                                      |
| -----: | ------: | --------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `putNodeMetaData(Object, Object)` | `org.codehaus.groovy.ast.NodeMetaDataHandler` |

##### `createMetaMethodAndMetaProperty(Class, Class, String, boolean, boolean)` (`groovy.lang.MetaClassImpl`)

|      % | Samples | Caller                                                        | Location                    |
| -----: | ------: | ------------------------------------------------------------- | --------------------------- |
| 100.0% |       1 | `getEffectiveGetMetaProperty(Class, Object, String, boolean)` | `groovy.lang.MetaClassImpl` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801188400`)

|      % | Samples | Caller                                  | Location                                            |
| -----: | ------: | --------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `guard(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801189000` |

##### `visitLabel(Label)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller                                                            | Location                                      |
| -----: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `mergeHi(int, int, int, int)` (`java.util.TimSort`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |       1 | `mergeAt(int)` | `java.util.TimSort` |

##### `processPropertyDescriptors()` (`java.beans.Introspector`)

|      % | Samples | Caller                    | Location                  |
| -----: | ------: | ------------------------- | ------------------------- |
| 100.0% |       1 | `getTargetPropertyInfo()` | `java.beans.Introspector` |

##### `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)` (`org.codehaus.groovy.vmplugin.v9.Java9`)

|      % | Samples | Caller                                              | Location                                |
| -----: | ------: | --------------------------------------------------- | --------------------------------------- |
| 100.0% |       1 | `transformMetaMethod(MetaClass, MetaMethod, Class)` | `org.codehaus.groovy.vmplugin.v9.Java9` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `vtable stub` (`<unknown>`)

|      % | Samples | Caller                                                               | Location                                              |
| -----: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller       | Location                                |
| -----: | ------: | ------------ | --------------------------------------- |
| 100.0% |       1 | `get(Class)` | `com.sun.beans.introspect.EventSetInfo` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.8% |     463 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.8% |     463 | `thread_start`                                                                                | `<unknown>`                                          |
| 75.6% |     462 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.6% |     462 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 72.3% |     442 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 72.3% |     442 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 70.7% |     432 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 58.4% |     357 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 58.4% |     357 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 27.2% |     166 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 23.9% |     146 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |
| 21.9% |     134 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 21.8% |     133 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.4% |     131 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     131 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
| 21.3% |     130 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9400`  |
| 21.3% |     130 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.1% |     129 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c8010abc00`  |
| 21.1% |     129 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac400`  |
| 21.1% |     129 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac800`  |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 72.3% |     442 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 70.7% |     432 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 58.4% |     357 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 58.4% |     357 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 27.2% |     166 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 23.9% |     146 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 15.4% |      94 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 14.4% |      88 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 12.6% |      77 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 12.6% |      77 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 11.6% |      71 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 11.6% |      71 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 10.5% |      64 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  8.8% |      54 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  6.1% |      37 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  5.7% |      35 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  4.7% |      29 | `Matcher::match()`                                                                                      | `<unknown>` |
|  4.3% |      26 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.1% |      25 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.1% |      25 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                  | `<unknown>` |

##### Native

|     % | Samples | Function                                                                | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 75.8% |     463 | `_pthread_start`                                                        | `<unknown>` |
| 75.8% |     463 | `thread_start`                                                          | `<unknown>` |
| 75.6% |     462 | `Thread::call_run()`                                                    | `<unknown>` |
| 75.6% |     462 | `thread_native_entry(Thread*)`                                          | `<unknown>` |
| 72.3% |     442 | `JavaThread::thread_main_inner()`                                       | `<unknown>` |
| 11.8% |      72 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
|  5.9% |      36 | `Parse::do_one_block()`                                                 | `<unknown>` |
|  5.9% |      36 | `Parse::do_all_blocks()`                                                | `<unknown>` |
|  5.9% |      36 | `Parse::Parse(JVMState*, ciMethod*, float)`                             | `<unknown>` |
|  5.9% |      36 | `ParseGenerator::generate(JVMState*)`                                   | `<unknown>` |
|  4.6% |      28 | `Parse::do_call()`                                                      | `<unknown>` |
|  3.8% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`   | `<unknown>` |
|  3.8% |      23 | `IR::IR(Compilation*, ciMethod*, int)`                                  | `<unknown>` |
|  3.8% |      23 | `PredictedCallGenerator::generate(JVMState*)`                           | `<unknown>` |
|  2.9% |      18 | `WorkerThread::run()`                                                   | `<unknown>` |
|  2.3% |      14 | `tlv_get_addr`                                                          | `<unknown>` |
|  2.3% |      14 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                         | `<unknown>` |
|  2.0% |      12 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`           | `<unknown>` |
|  1.8% |      11 | `Dict::Insert(void*, void*, bool)`                                      | `<unknown>` |
|  1.6% |      10 | `__psynch_cvwait`                                                       | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 21.8% |     133 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.4% |     131 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     131 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
| 21.3% |     130 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9400`  |
| 21.3% |     130 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.1% |     129 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c8010abc00`  |
| 21.1% |     129 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac400`  |
| 21.1% |     129 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac800`  |
| 20.0% |     122 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000c801092800` |
| 20.0% |     122 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010ab400`  |
| 20.0% |     122 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c801092000`  |
| 20.0% |     122 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 19.6% |     120 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c8010c7000`  |
| 19.6% |     120 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c801096800`  |
| 19.6% |     120 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c801098000`  |
| 19.6% |     120 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000c801098400`  |
| 19.6% |     120 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.6% |     120 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`  |
| 19.0% |     116 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.0% |     116 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000c80102b000`  |

##### JIT

|    % | Samples | Function                 | Location    |
| ---: | ------: | ------------------------ | ----------- |
| 0.3% |       2 | `itable stub`            | `<unknown>` |
| 0.3% |       2 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
| 0.3% |       2 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| 0.2% |       1 | `vtable stub`            | `<unknown>` |
| 0.2% |       1 | `I2C/C2I adapters(0xa)`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     462 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     463 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 95.7% |     442 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  3.9% |      18 | `WorkerThread::run()`             | `<unknown>` |
|  0.4% |       2 | `VMThread::run()`                 | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     462 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 97.7% |     432 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  2.3% |      10 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     442 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 82.6% |     357 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 16.7% |      72 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.2% |       1 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.2% |       1 | `ciEnv::ciEnv(CompileTask*)`                                              | `<unknown>` |
|  0.2% |       1 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 46.5% |     166 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 40.9% |     146 | `Compile::Optimize()`                                                                      | `<unknown>` |
|  9.5% |      34 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.1% |       4 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |
|  1.1% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     357 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 56.6% |      94 | `PhaseChaitin::Register_Allocate()`             | `<unknown>` |
| 17.5% |      29 | `Matcher::match()`                              | `<unknown>` |
| 12.0% |      20 | `PhaseCFG::do_global_code_motion()`             | `<unknown>` |
|  9.6% |      16 | `PhaseOutput::Output()`                         | `<unknown>` |
|  1.8% |       3 | `PhaseBlockLayout::PhaseBlockLayout(PhaseCFG&)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 37.0% |      54 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 23.3% |      34 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 15.1% |      22 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  6.2% |       9 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |
|  4.8% |       7 | `PhaseCCP::do_transform()`                              | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 97.0% |     130 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  2.2% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  0.7% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 98.5% |     131 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 19.5% |      26 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  0.8% |       1 | `bypassCache(Boolean, Object[])`                        | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 91.6% |     120 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010c7000` |
| 88.5% |     116 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c80109a000` |
| 84.7% |     111 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010d3800` |
| 67.9% |      89 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8011ba000` |
| 64.9% |      85 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801205c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000c801088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     131 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  48.1% |      63 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010a9400`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     130 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     130 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9400` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010abc00`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 94.6% |     122 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c8010ab400`  |
| 93.0% |     120 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`  |
| 69.8% |      90 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801093000` |
| 41.1% |      53 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c80121a000`  |
| 34.1% |      44 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c801229800`  |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010ac400`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010abc00` |
| 100.0% |     129 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac800` |
|  21.7% |      28 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9400` |
|  17.8% |      23 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8012da800` |
|   6.2% |       8 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000c8012e8000` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010ac800`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac400` |
|  69.0% |      89 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000c801092800`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 73.0% |      89 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 60.7% |      74 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 42.6% |      52 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 18.0% |      22 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 10.7% |      13 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010ab400`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     122 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801092800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801092000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 98.4% |     120 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
|  2.5% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801088c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     122 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801092000` |
|   2.5% |       3 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801099800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     120 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac400` |
|  68.3% |      82 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801096800`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 96.7% |     116 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c80102b000` |
| 50.0% |      60 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c801105400` |
| 13.3% |      16 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 11.7% |      14 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  5.8% |       7 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000c801018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801098000`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     120 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801096800` |
| 100.0% |     120 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000c801098400` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c801098400`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     120 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000c801098000` |
|  32.5% |      39 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                                         | Location                                                    |
| -----: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |     120 | `execute(String[])`                                            | `org.codenarc.CodeNarc`                                     |
|   1.7% |       2 | `parseArgs(String[])`                                          | `org.codenarc.CodeNarc`                                     |
|   1.7% |       2 | `writeTitle(Writer)`                                           | `org.codenarc.report.TextReportWriter`                      |
|   0.8% |       1 | `registerPluginsForClassNames(String)`                         | `org.codenarc.CodeNarcRunner`                               |
|   0.8% |       1 | `super$2$visitShortTernaryExpression(ElvisOperatorExpression)` | `org.codenarc.rule.basic.AssignmentInConditionalAstVisitor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     120 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                    | Location                                   |
| -----: | ------: | ------------------------- | ------------------------------------------ |
| 100.0% |     116 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
|  11.2% |      13 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|   1.7% |       2 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|   0.9% |       1 | `getLines()`              | `org.codenarc.source.AbstractSourceCode`   |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000c80102b000`)

|      % | Samples | Callee                          | Location                                     |
| -----: | ------: | ------------------------------- | -------------------------------------------- |
| 100.0% |     116 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 24.5% |      23 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 18.1% |      17 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
| 12.8% |      12 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
|  6.4% |       6 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
|  6.4% |       6 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 87.5% |      77 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 12.5% |      11 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 32.5% |      25 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 23.4% |      18 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`        | `<unknown>` |
| 10.4% |       8 | `PhaseIdealLoop::build_loop_tree()`                                    | `<unknown>` |
|  7.8% |       6 | `PhaseIdealLoop::Dominators()`                                         | `<unknown>` |
|  5.2% |       4 | `Node::is_CFG() const`                                                 | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      77 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 98.6% |      71 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
|  1.4% |       1 | `Chunk::next_chop()`                                                                                    | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 90.1% |      64 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  9.9% |       7 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      71 | `Compilation::compile_method()` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 40.6% |      26 | `Compilation::emit_lir()`        | `<unknown>` |
| 39.1% |      25 | `Compilation::build_hir()`       | `<unknown>` |
| 18.8% |      12 | `Compilation::emit_code_body()`  | `<unknown>` |
|  1.6% |       1 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      54 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 94.6% |      35 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  2.7% |       1 | `AddNode::hash() const`              | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 77.8% |      28 | `Parse::do_call()`                   | `<unknown>` |
| 25.0% |       9 | `Parse::do_field_access(bool, bool)` | `<unknown>` |
|  8.3% |       3 | `Parse::do_one_bytecode()`           | `<unknown>` |
|  5.6% |       2 | `Parse::do_new()`                    | `<unknown>` |
|  5.6% |       2 | `Parse::array_load(BasicType)`       | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      36 | `Parse::do_one_block()` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Callee                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      36 | `Parse::do_all_blocks()`                  | `<unknown>` |
|   2.8% |       1 | `GraphKit::set_map_clone(SafePointNode*)` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      36 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 17.1% |       6 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
| 14.3% |       5 | `PhiNode::Ideal(PhaseGVN*, bool)`          | `<unknown>` |
|  8.6% |       3 | `PhiNode::hash() const`                    | `<unknown>` |
|  8.6% |       3 | `LoadNode::Ideal(PhaseGVN*, bool)`         | `<unknown>` |
|  5.7% |       2 | `IfNode::Ideal(PhaseGVN*, bool)`           | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 75.9% |      22 | `Matcher::xform(Node*, int)`                             | `<unknown>` |
| 13.8% |       4 | `Matcher::find_shared(Node*)`                            | `<unknown>` |
|  6.9% |       2 | `Matcher::specialize_generic_vector_operands()`          | `<unknown>` |
|  3.4% |       1 | `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 82.1% |      23 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 42.9% |      12 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 21.4% |       6 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  3.6% |       1 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 73.1% |      19 | `LinearScan::do_linear_scan()`               | `<unknown>` |
| 23.1% |       6 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  3.8% |       1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 92.0% |      23 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  4.0% |       1 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  4.0% |       1 | `RangeCheckElimination::eliminate(IR*)`           | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 92.0% |      23 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      23 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 95.7% |      22 | `ParseGenerator::generate(JVMState*)`                               | `<unknown>` |
| 21.7% |       5 | `PredictedCallGenerator::generate(JVMState*)`                       | `<unknown>` |
| 13.0% |       3 | `GraphKit::null_check_common(Node*, BasicType, bool, Node**, bool)` | `<unknown>` |
|  4.3% |       1 | `ReplacedNodes::clone()`                                            | `<unknown>` |
|  4.3% |       1 | `GraphKit::type_check_receiver(Node*, ciKlass*, float, Node**)`     | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 77.8% |      14 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 16.7% |       3 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |
|  5.6% |       1 | `G1CMRootRegionScanTask::work(unsigned int)`    | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 71.4% |      10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                  | `<unknown>` |
| 21.4% |       3 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                       | `<unknown>` |
|  7.1% |       1 | `G1RemSet::scan_collection_set_code_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
| 16.7% |       2 | `fwd_copy_again`                                                                        | `<unknown>` |
|  8.3% |       1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                          | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 63.6% |       7 | `Type::cmp(Type const*, Type const*)` | `<unknown>` |
|  9.1% |       1 | `Type::uhash(Type const*)`            | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% |      13 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                       |
| 1.6% |      10 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.1% |       7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                      |
| 1.1% |       7 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                               |
| 1.0% |       6 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                      |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                          |
| 1.0% |       6 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                      |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_tree()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                               |
| 0.8% |       5 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                   |
| 0.7% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                      |
| 0.7% |       4 | `PhaseOutput::BuildOopMaps()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                                       |
| 0.7% |       4 | `PhaseCCP::transform(Node*)` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                                     |
| 0.5% |       3 | `IndexSet::initialize(unsigned int)` ← `PhaseIFG::init(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                   |
| 0.5% |       3 | `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                             |
| 0.5% |       3 | `Node_Backward_Iterator::next()` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                     |
| 0.5% |       3 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                        |
| 0.5% |       3 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                  |
| 0.5% |       3 | `PhaseOutput::shorten_branches(unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                      |
| 0.5% |       3 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                            |
