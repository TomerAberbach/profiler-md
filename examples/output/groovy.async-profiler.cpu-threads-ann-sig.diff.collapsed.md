# Sampling profile diff

Collected 617 samples → 627 samples (+10 samples, +1.6%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         |  -3.4% |   -12 | 57.1% → 54.2% | 352 → 340 |
| Native           |  +8.6% |   +15 | 28.4% → 30.3% | 175 → 190 |
| Standard library |  +9.8% |    +8 | 13.3% → 14.4% |   82 → 90 |
| JIT              | -37.5% |    -3 |   1.3% → 0.8% |     8 → 5 |
| Ours             |    new |    +2 |   0.0% → 0.3% |     0 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                              | Location                                               |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +325.0% |   +13 | 0.6% → 2.7% |  4 → 17 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>`                                            |
|     new |    +6 | 0.0% → 1.0% |   0 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                         | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +300.0% |    +6 | 0.3% → 1.3% |   2 → 8 | `PhaseIdealLoop::build_loop_tree()`                                                                                                                                   | `<unknown>`                                            |
| +600.0% |    +6 | 0.2% → 1.1% |   1 → 7 | `LinearScanWalker::alloc_free_reg(Interval*)`                                                                                                                         | `<unknown>`                                            |
| +300.0% |    +6 | 0.3% → 1.3% |   2 → 8 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>`                                            |
|  +83.3% |    +5 | 1.0% → 1.8% |  6 → 11 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>`                                            |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `Matcher::xform(Node*, int)`                                                                                                                                          | `<unknown>`                                            |
| +100.0% |    +4 | 0.6% → 1.3% |   4 → 8 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                                    | `<unknown>`                                            |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                                                                                                            | `<unknown>`                                            |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                         | `<unknown>`                                            |
|  +30.0% |    +3 | 1.6% → 2.1% | 10 → 13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                    | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseIFG::effective_degree(unsigned int) const`                                                                                                                      | `<unknown>`                                            |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `Node::is_CFG() const`                                                                                                                                                | `<unknown>`                                            |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                              | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `MacroAssembler::ldst_can_merge(Register, Address const&, unsigned long, bool) const`                                                                                 | `<unknown>`                                            |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Parse::do_call()`                                                                                                                                                    | `<unknown>`                                            |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `Dict::Insert(void*, void*, bool)`                                                                                                                                    | `<unknown>`                                            |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `sys_icache_invalidate`                                                                                                                                               | `<unknown>`                                            |
|  +66.7% |    +2 | 0.5% → 0.8% |   3 → 5 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                            | `<unknown>`                                            |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `MergeMemNode::set_memory_at(unsigned int, Node*)`                                                                                                                    | `<unknown>`                                            |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                              | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +6 | 0.3% → 1.3% |   2 → 8 | `PhaseIdealLoop::build_loop_tree()`                                                   | `<unknown>` |
| +600.0% |    +6 | 0.2% → 1.1% |   1 → 7 | `LinearScanWalker::alloc_free_reg(Interval*)`                                         | `<unknown>` |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `Matcher::xform(Node*, int)`                                                          | `<unknown>` |
| +100.0% |    +4 | 0.6% → 1.3% |   4 → 8 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                    | `<unknown>` |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                            | `<unknown>` |
|  +30.0% |    +3 | 1.6% → 2.1% | 10 → 13 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                    | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseIFG::effective_degree(unsigned int) const`                                      | `<unknown>` |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `Node::is_CFG() const`                                                                | `<unknown>` |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                              | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `MacroAssembler::ldst_can_merge(Register, Address const&, unsigned long, bool) const` | `<unknown>` |
|  +66.7% |    +2 | 0.5% → 0.8% |   3 → 5 | `ciObjectFactory::get_metadata(Metadata*)`                                            | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `MergeMemNode::set_memory_at(unsigned int, Node*)`                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCFG::partial_latency_of_defs(Node*)`                                            | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)`             | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `MachNode::rematerialize() const`                                                     | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)`            | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::build_loop_tree_impl(Node*, int)`                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCCP::push_cast_ii(Unique_Node_List&, Node const*, Node const*) const`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `PhaseIdealLoop::build_and_optimize()`                                                | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `PhaseCCP::transform(Node*)`                                                          | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                                    | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +325.0% |   +13 | 0.6% → 2.7% |  4 → 17 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| +300.0% |    +6 | 0.3% → 1.3% |   2 → 8 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
|  +83.3% |    +5 | 1.0% → 1.8% |  6 → 11 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Parse::do_call()`                                                                                                                                                          | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `Dict::Insert(void*, void*, bool)`                                                                                                                                          | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
|  +18.2% |    +2 | 1.8% → 2.1% | 11 → 13 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `__psynch_mutexdrop`                                                                                                                                                        | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `posix_madvise`                                                                                                                                                             | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `_platform_memcmp`                                                                                                                                                          | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `_qsort`                                                                                                                                                                    | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `Parse::do_one_block()`                                                                                                                                                     | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `klassVtable::initialize_vtable(GrowableArray<InstanceKlass*>*)`                                                                                                            | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `LinkResolver::check_method_accessability(Klass*, Klass*, Klass*, methodHandle const&, JavaThread*)`                                                                        | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `Invariance::visit(Node*, Node*)`                                                                                                                                           | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `LinkedConcreteMethodFinder::find_witness_anywhere(InstanceKlass*)`                                                                                                         | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|     new |    +6 | 0.0% → 1.0% |   0 → 6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `putVal(int, Object, Object, boolean, boolean)`                                                               | `java.util.HashMap`                                        |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `evaluate(TerminalOp)`                                                                                        | `java.util.stream.AbstractPipeline`                        |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `delegate(Object, Object)`                                                                                    | `java.lang.invoke.DelegatingMethodHandle$Holder`           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `delegate(Object, Object, Object, Object, Object)`                                                            | `java.lang.invoke.DelegatingMethodHandle$Holder`           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `equals(Object)`                                                                                              | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `get(Object)`                                                                                                 | `java.util.concurrent.ConcurrentHashMap`                   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `optimizeConfigs(ATNSimulator)`                                                                               | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `putVal(Object, Object, boolean)`                                                                             | `java.util.concurrent.ConcurrentHashMap`                   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `commandExpression()`                                                                                         | `org.apache.groovy.parser.antlr4.GroovyParser`             |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `matcher(CharSequence)`                                                                                       | `java.util.regex.Pattern`                                  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `visitFile(Path, BasicFileAttributes)`                                                                        | `org.codehaus.groovy.vmplugin.v9.ClassFinder$1`            |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)`                     | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `getTargetMethodInfo()`                                                                                       | `java.beans.Introspector`                                  |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `populateMethods(List, CachedClass)`                                                                          | `groovy.lang.MetaClassImpl`                                |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `catchException(MethodHandle, Class, MethodHandle)`                                                           | `java.lang.invoke.MethodHandles`                           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `hashCode()`                                                                                                  | `java.lang.String`                                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `<init>(ProtectionDomain, DomainCombiner, AccessControlContext, AccessControlContext, Permission[])`          | `java.security.AccessControlContext`                       |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `make(byte, Class, MemberName, Class)`                                                                        | `java.lang.invoke.DirectMethodHandle`                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|  -62.5% |    -5 | 1.3% → 0.5% |   8 → 3 | `Node::dominates(Node*, Node_List&)`                                                    | `<unknown>` |
|  -50.0% |    -4 | 1.3% → 0.6% |   8 → 4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                 | `<unknown>` |
|  -42.9% |    -3 | 1.1% → 0.6% |   7 → 4 | `pthread_jit_write_protect_np`                                                          | `<unknown>` |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`    | `<unknown>` |
|  -33.3% |    -3 | 1.5% → 1.0% |   9 → 6 | `PhaseChaitin::gather_lrg_masks(bool)`                                                  | `<unknown>` |
|  -42.9% |    -3 | 1.1% → 0.6% |   7 → 4 | `PhaseLive::compute(unsigned int)`                                                      | `<unknown>` |
|  -37.5% |    -3 | 1.3% → 0.8% |   8 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `RegMask::is_aligned_pairs() const`                                                     | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Type::hashcons()`                                                                      | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhiNode::Value(PhaseGVN*) const`                                                       | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `__open_nocancel`                                                                       | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeLong::eq(Type const*) const`                                                       | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `Type::cmp(Type const*, Type const*)`                                                   | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                 | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhiResolver::create_node(LIR_Opr, bool)`                                               | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `RegionNode::is_unreachable_from_root(PhaseGVN const*) const`                           | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Invariance::compute_invariance(Node*)`                                                 | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`   | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIterGVN::remove_globally_dead_node(Node*)`                                        | `<unknown>` |
|  -28.6% |    -2 | 1.1% → 0.8% |   7 → 5 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`            | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                              | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
|  -62.5% |    -5 | 1.3% → 0.5% |   8 → 3 | `Node::dominates(Node*, Node_List&)`                                                  | `<unknown>` |
|  -50.0% |    -4 | 1.3% → 0.6% |   8 → 4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`               | `<unknown>` |
|  -33.3% |    -3 | 1.5% → 1.0% |   9 → 6 | `PhaseChaitin::gather_lrg_masks(bool)`                                                | `<unknown>` |
|  -42.9% |    -3 | 1.1% → 0.6% |   7 → 4 | `PhaseLive::compute(unsigned int)`                                                    | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `RegMask::is_aligned_pairs() const`                                                   | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Type::hashcons()`                                                                    | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhiNode::Value(PhaseGVN*) const`                                                     | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeLong::eq(Type const*) const`                                                     | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `Type::cmp(Type const*, Type const*)`                                                 | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `RegionNode::is_unreachable_from_root(PhaseGVN const*) const`                         | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIterGVN::remove_globally_dead_node(Node*)`                                      | `<unknown>` |
|  -28.6% |    -2 | 1.1% → 0.8% |   7 → 5 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`          | `<unknown>` |
|  -33.3% |    -2 | 1.0% → 0.6% |   6 → 4 | `PhaseOutput::BuildOopMaps()`                                                         | `<unknown>` |
|  -40.0% |    -2 | 0.8% → 0.5% |   5 → 3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                | `<unknown>` |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `NodeHash::hash_find_insert(Node*)`                                                   | `<unknown>` |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)`                                   | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`                | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `CProjNode::hash() const`                                                             | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `LinearScan::build_intervals()`                                                       | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                          | Location    |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -42.9% |    -3 | 1.1% → 0.6% |   7 → 4 | `pthread_jit_write_protect_np`                                                                                                                                    | `<unknown>` |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`                                                                              | `<unknown>` |
|  -37.5% |    -3 | 1.3% → 0.8% |   8 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                           | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `__open_nocancel`                                                                                                                                                 | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                                                                                           | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhiResolver::create_node(LIR_Opr, bool)`                                                                                                                         | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Invariance::compute_invariance(Node*)`                                                                                                                           | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `ConstantPool::resolve_string_constants_impl(constantPoolHandle const&, JavaThread*)`                                                                             | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                              | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `SymbolTable::lookup_shared(char const*, int, unsigned int)`                                                                                                      | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `methodHandle::~methodHandle()`                                                                                                                                   | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `void UTF8::convert_to_unicode<unsigned short>(char const*, unsigned short*, int)`                                                                                | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<594020ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 594020ull>::oop_access_barrier(void*)` | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `InlineTree::build_inline_tree_for_callee(ciMethod*, JVMState*, int)`                                                                                             | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `klassVtable::update_inherited_vtable(Thread*, methodHandle const&, int, int, GrowableArray<InstanceKlass*>*)`                                                    | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `InstanceKlass::initialize_impl(JavaThread*)`                                                                                                                     | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `stub:pthread_mutex_trylock`                                                                                                                                      | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `ClassVerifier::verify_exception_handler_targets(unsigned short, bool, StackMapFrame*, StackMapTable*, JavaThread*)`                                              | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `State::_sub_Op_AddL(Node const*)`                                                                                                                                | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)`                 | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                             | Location                                                         |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`            |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `cast(Object)`                                                       | `java.lang.Class`                                                |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `matches(int, int, int)`                                             | `groovyjarjarantlr4.v4.runtime.atn.AtomTransition`               |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object, Object)`                              | `java.lang.invoke.DirectMethodHandle$Holder`                     |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `visitChildren(RuleNode)`                                            | `groovyjarjarantlr4.v4.runtime.tree.AbstractParseTreeVisitor`    |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `ofNullable(Object)`                                                 | `java.util.Optional`                                             |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `emitStaticInvoke(MemberName, LambdaForm$Name)`                      | `java.lang.invoke.InvokerBytecodeGenerator`                      |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `block()`                                                            | `org.apache.groovy.parser.antlr4.GroovyParser`                   |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `<init>(long)`                                                       | `java.util.concurrent.atomic.AtomicLong`                         |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `addFirst(Object)`                                                   | `java.util.ArrayDeque`                                           |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `get()`                                                              | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getAndPut(String, MemoizeCache$ValueProvider)`                      | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`              |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `addCount(long, int)`                                                | `java.util.concurrent.ConcurrentHashMap`                         |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `toArray(Object[])`                                                  | `java.util.AbstractCollection`                                   |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `<init>()`                                                           | `java.lang.Number`                                               |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `equals(Object)`                                                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                    |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getLexerActionExecutor()`                                           | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`                    |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `expression(int)`                                                    | `org.apache.groovy.parser.antlr4.GroovyParser`                   |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `<init>(Inflater, ZipFile$CleanableResource)`                        | `java.util.zip.ZipFile$InflaterCleanupAction`                    |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)`           | `org.codehaus.groovy.vmplugin.v9.Java9`                          |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `vtable stub`           | `<unknown>` |
|  -33.3% |    -1 | 0.5% → 0.3% |   3 → 2 | `I2C/C2I adapters(0xb)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |             % |   Samples | Function                                                                                             | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|   +6.7% |   +11 | 26.7% → 28.1% | 165 → 176 | `Compile::Code_Gen()`                                                                                | `<unknown>` |
| +400.0% |    +8 |   0.3% → 1.6% |    2 → 10 | `PhaseIdealLoop::build_loop_tree()`                                                                  | `<unknown>` |
|  +41.2% |    +7 |   2.8% → 3.8% |   17 → 24 | `Matcher::xform(Node*, int)`                                                                         | `<unknown>` |
| +100.0% |    +7 |   1.1% → 2.2% |    7 → 14 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                             | `<unknown>` |
| +700.0% |    +7 |   0.2% → 1.3% |     1 → 8 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)`                                               | `<unknown>` |
| +120.0% |    +6 |   0.8% → 1.8% |    5 → 11 | `LIRGenerator::block_do(BlockBegin*)`                                                                | `<unknown>` |
| +120.0% |    +6 |   0.8% → 1.8% |    5 → 11 | `BlockList::iterate_forward(BlockClosure*)`                                                          | `<unknown>` |
|  +54.5% |    +6 |   1.8% → 2.7% |   11 → 17 | `GraphBuilder::invoke(Bytecodes::Code)`                                                              | `<unknown>` |
| +200.0% |    +6 |   0.5% → 1.4% |     3 → 9 | `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)`                                     | `<unknown>` |
|  +20.8% |    +5 |   3.9% → 4.6% |   24 → 29 | `Matcher::match()`                                                                                   | `<unknown>` |
|  +62.5% |    +5 |   1.3% → 2.1% |    8 → 13 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                                           | `<unknown>` |
|  +83.3% |    +5 |   1.0% → 1.8% |    6 → 11 | `ciObjectFactory::get_metadata(Metadata*)`                                                           | `<unknown>` |
| +166.7% |    +5 |   0.5% → 1.3% |     3 → 8 | `ciObjectFactory::create_new_metadata(Metadata*)`                                                    | `<unknown>` |
|  +83.3% |    +5 |   1.0% → 1.8% |    6 → 11 | `ciTypeFlow::df_flow_types(ciTypeFlow::Block*, bool, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` | `<unknown>` |
|  +83.3% |    +5 |   1.0% → 1.8% |    6 → 11 | `ciTypeFlow::flow_types()`                                                                           | `<unknown>` |
|  +83.3% |    +5 |   1.0% → 1.8% |    6 → 11 | `ciTypeFlow::do_flow()`                                                                              | `<unknown>` |
|  +83.3% |    +5 |   1.0% → 1.8% |    6 → 11 | `ciMethod::get_flow_analysis()`                                                                      | `<unknown>` |
|  +40.0% |    +4 |   1.6% → 2.2% |   10 → 14 | `IntervalWalker::walk_to(int)`                                                                       | `<unknown>` |
|  +36.4% |    +4 |   1.8% → 2.4% |   11 → 15 | `Matcher::match_tree(Node const*)`                                                                   | `<unknown>` |
|  +80.0% |    +4 |   0.8% → 1.4% |     5 → 9 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                   | `<unknown>` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                              | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +325.0% |   +13 |   0.6% → 2.7% |    4 → 17 | `__psynch_mutexwait`                                                                                                                                                  | `<unknown>` |
| +325.0% |   +13 |   0.6% → 2.7% |    4 → 17 | `_pthread_mutex_firstfit_lock_slow`                                                                                                                                   | `<unknown>` |
|  +52.9% |    +9 |   2.8% → 4.1% |   17 → 26 | `WorkerThread::run()`                                                                                                                                                 | `<unknown>` |
|   +1.3% |    +6 | 75.4% → 75.1% | 465 → 471 | `Thread::call_run()`                                                                                                                                                  | `<unknown>` |
|   +1.3% |    +6 | 75.4% → 75.1% | 465 → 471 | `thread_native_entry(Thread*)`                                                                                                                                        | `<unknown>` |
| +600.0% |    +6 |   0.2% → 1.1% |     1 → 7 | `LinkResolver::resolve_static_call(CallInfo&, LinkInfo const&, bool, JavaThread*)`                                                                                    | `<unknown>` |
|  +42.9% |    +6 |   2.3% → 3.2% |   14 → 20 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                                                       | `<unknown>` |
| +300.0% |    +6 |   0.3% → 1.3% |     2 → 8 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
| +100.0% |    +5 |   0.8% → 1.6% |    5 → 10 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)`                                                                                                | `<unknown>` |
|   +1.1% |    +5 | 75.5% → 75.1% | 466 → 471 | `_pthread_start`                                                                                                                                                      | `<unknown>` |
|   +1.1% |    +5 | 75.5% → 75.1% | 466 → 471 | `thread_start`                                                                                                                                                        | `<unknown>` |
|  +83.3% |    +5 |   1.0% → 1.8% |    6 → 11 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>` |
| +500.0% |    +5 |   0.2% → 1.0% |     1 → 6 | `Mutex::lock(Thread*)`                                                                                                                                                | `<unknown>` |
| +166.7% |    +5 |   0.5% → 1.3% |     3 → 8 | `ThreadCritical::ThreadCritical()`                                                                                                                                    | `<unknown>` |
| +250.0% |    +5 |   0.3% → 1.1% |     2 → 7 | `Parse::do_one_bytecode()`                                                                                                                                            | `<unknown>` |
| +250.0% |    +5 |   0.3% → 1.1% |     2 → 7 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
| +500.0% |    +5 |   0.2% → 1.0% |     1 → 6 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)`                                                                                                    | `<unknown>` |
|  +50.0% |    +4 |   1.3% → 1.9% |    8 → 12 | `PlatformMonitor::wait(unsigned long long)`                                                                                                                           | `<unknown>` |
|  +66.7% |    +4 |   1.0% → 1.6% |    6 → 10 | `Monitor::wait(unsigned long long)`                                                                                                                                   | `<unknown>` |
| +400.0% |    +4 |   0.2% → 0.8% |     1 → 5 | `LinkResolver::linktime_resolve_static_method(LinkInfo const&, JavaThread*)`                                                                                          | `<unknown>` |

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +138 | 0.0% → 22.0% | 0 → 138 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|    new |  +137 | 0.0% → 21.9% | 0 → 137 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
|    new |  +136 | 0.0% → 21.7% | 0 → 136 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
|    new |  +136 | 0.0% → 21.7% | 0 → 136 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
|    new |  +136 | 0.0% → 21.7% | 0 → 136 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
|    new |  +128 | 0.0% → 20.4% | 0 → 128 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
|    new |  +128 | 0.0% → 20.4% | 0 → 128 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|    new |  +128 | 0.0% → 20.4% | 0 → 128 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
|    new |  +128 | 0.0% → 20.4% | 0 → 128 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`  |
|    new |  +128 | 0.0% → 20.4% | 0 → 128 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`  |
|    new |  +125 | 0.0% → 19.9% | 0 → 125 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
|    new |  +125 | 0.0% → 19.9% | 0 → 125 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
|    new |  +125 | 0.0% → 19.9% | 0 → 125 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
|    new |  +123 | 0.0% → 19.6% | 0 → 123 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700102b000`  |
|    new |  +122 | 0.0% → 19.5% | 0 → 122 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`  |
|    new |  +117 | 0.0% → 18.7% | 0 → 117 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
|    new |  +114 | 0.0% → 18.2% | 0 → 114 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010c8000`  |
|    new |  +108 | 0.0% → 17.2% | 0 → 108 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
|    new |  +102 | 0.0% → 16.3% | 0 → 102 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400`  |
|    new |  +101 | 0.0% → 16.1% | 0 → 101 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800`  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

| Change | Delta |             % |   Samples | Function                                                                                                | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -8.2% |   -11 | 21.7% → 19.6% | 134 → 123 | `Compile::Optimize()`                                                                                   | `<unknown>` |
|  -9.6% |    -8 | 13.5% → 12.0% |   83 → 75 | `Compilation::compile_method()`                                                                         | `<unknown>` |
|  -9.6% |    -8 | 13.5% → 12.0% |   83 → 75 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| -37.5% |    -6 |   2.6% → 1.6% |   16 → 10 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                         | `<unknown>` |
| -22.2% |    -6 |   4.4% → 3.3% |   27 → 21 | `LinearScan::do_linear_scan()`                                                                          | `<unknown>` |
|  -8.0% |    -6 | 12.2% → 11.0% |   75 → 69 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| -40.0% |    -6 |   2.4% → 1.4% |    15 → 9 | `PhaseGVN::transform_no_reclaim(Node*)`                                                                 | `<unknown>` |
| -75.0% |    -6 |   1.3% → 0.3% |     8 → 2 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`                                                      | `<unknown>` |
|  -1.1% |    -5 | 71.0% → 69.1% | 438 → 433 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| -11.1% |    -5 |   7.3% → 6.4% |   45 → 40 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
| -62.5% |    -5 |   1.3% → 0.5% |     8 → 3 | `Node::dominates(Node*, Node_List&)`                                                                    | `<unknown>` |
| -62.5% |    -5 |   1.3% → 0.5% |     8 → 3 | `MemNode::all_controls_dominate(Node*, Node*)`                                                          | `<unknown>` |
| -31.3% |    -5 |   2.6% → 1.8% |   16 → 11 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                  | `<unknown>` |
| -36.4% |    -4 |   1.8% → 1.1% |    11 → 7 | `PhaseChaitin::post_allocate_copy_removal()`                                                            | `<unknown>` |
| -80.0% |    -4 |   0.8% → 0.2% |     5 → 1 | `PhiNode::Value(PhaseGVN*) const`                                                                       | `<unknown>` |
| -66.7% |    -4 |   1.0% → 0.3% |     6 → 2 | `PhaseIdealLoop::loop_predication_impl(IdealLoopTree*)`                                                 | `<unknown>` |
| -57.1% |    -4 |   1.1% → 0.5% |     7 → 3 | `Scheduling::DoScheduling()`                                                                            | `<unknown>` |
| -57.1% |    -4 |   1.1% → 0.5% |     7 → 3 | `InitializeNode::detect_init_independence(Node*, PhaseGVN*)`                                            | `<unknown>` |
| -57.1% |    -4 |   1.1% → 0.5% |     7 → 3 | `InitializeNode::can_capture_store(StoreNode*, PhaseGVN*, bool)`                                        | `<unknown>` |
| -57.1% |    -4 |   1.1% → 0.5% |     7 → 3 | `StoreNode::Ideal(PhaseGVN*, bool)`                                                                     | `<unknown>` |

##### Native

|  Change | Delta |             % | Samples | Function                                                                                                                                                                                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -9.6% |    -8 | 13.5% → 12.0% | 83 → 75 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                           | `<unknown>` |
|  -16.7% |    -7 |   6.8% → 5.6% | 42 → 35 | `Parse::do_call()`                                                                                                                                                                                                                                                | `<unknown>` |
|  -55.6% |    -5 |   1.5% → 0.6% |   9 → 4 | `Parse::do_field_access(bool, bool)`                                                                                                                                                                                                                              | `<unknown>` |
|  -45.5% |    -5 |   1.8% → 1.0% |  11 → 6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                                                                                                           | `<unknown>` |
|  -57.1% |    -4 |   1.1% → 0.5% |   7 → 3 | `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)`                                                                                                                                                                          | `<unknown>` |
|  -57.1% |    -4 |   1.1% → 0.5% |   7 → 3 | `SystemDictionary::resolve_or_fail(Symbol*, Handle, Handle, bool, JavaThread*)`                                                                                                                                                                                   | `<unknown>` |
|   -8.5% |    -4 |   7.6% → 6.9% | 47 → 43 | `Parse::do_one_block()`                                                                                                                                                                                                                                           | `<unknown>` |
|   -8.5% |    -4 |   7.6% → 6.9% | 47 → 43 | `Parse::do_all_blocks()`                                                                                                                                                                                                                                          | `<unknown>` |
|   -8.5% |    -4 |   7.6% → 6.9% | 47 → 43 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                                                                                                                                       | `<unknown>` |
|   -8.5% |    -4 |   7.6% → 6.9% | 47 → 43 | `ParseGenerator::generate(JVMState*)`                                                                                                                                                                                                                             | `<unknown>` |
|  -12.9% |    -4 |   5.0% → 4.3% | 31 → 27 | `PredictedCallGenerator::generate(JVMState*)`                                                                                                                                                                                                                     | `<unknown>` |
|  -66.7% |    -4 |   1.0% → 0.3% |   6 → 2 | `IdealLoopTree::loop_predication(PhaseIdealLoop*)`                                                                                                                                                                                                                | `<unknown>` |
|  -66.7% |    -4 |   1.0% → 0.3% |   6 → 2 | `Parse::do_get_xxx(Node*, ciField*, bool)`                                                                                                                                                                                                                        | `<unknown>` |
|  -66.7% |    -4 |   1.0% → 0.3% |   6 → 2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
|  -50.0% |    -3 |   1.0% → 0.5% |   6 → 3 | `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)`                                                                                                                                                                                        | `<unknown>` |
|  -50.0% |    -3 |   1.0% → 0.5% |   6 → 3 | `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)`                                                                                                                                                                                             | `<unknown>` |
| removed |    -3 |   0.5% → 0.0% |   3 → 0 | `ConstantPool::klass_ref_at(int, Bytecodes::Code, JavaThread*)`                                                                                                                                                                                                   | `<unknown>` |
|  -42.9% |    -3 |   1.1% → 0.6% |   7 → 4 | `pthread_jit_write_protect_np`                                                                                                                                                                                                                                    | `<unknown>` |
|  -42.9% |    -3 |   1.1% → 0.6% |   7 → 4 | `InstanceKlass::initialize_impl(JavaThread*)`                                                                                                                                                                                                                     | `<unknown>` |
|  -75.0% |    -3 |   0.6% → 0.2% |   4 → 1 | `SharedRuntime::resolve_opt_virtual_call_C(JavaThread*)`                                                                                                                                                                                                          | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -134 | 21.7% → 0.0% | 134 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
| removed |  -133 | 21.6% → 0.0% | 133 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010a1800`  |
| removed |  -132 | 21.4% → 0.0% | 132 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa000`  |
| removed |  -132 | 21.4% → 0.0% | 132 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c8010aa800`  |
| removed |  -132 | 21.4% → 0.0% | 132 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c8010aac00`  |
| removed |  -124 | 20.1% → 0.0% | 124 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c801094400` |
| removed |  -124 | 20.1% → 0.0% | 124 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9800`  |
| removed |  -122 | 19.8% → 0.0% | 122 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010c7000`  |
| removed |  -122 | 19.8% → 0.0% | 122 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c801098400`  |
| removed |  -122 | 19.8% → 0.0% | 122 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c801099c00`  |
| removed |  -122 | 19.8% → 0.0% | 122 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c80109a000`  |
| removed |  -122 | 19.8% → 0.0% | 122 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c80108e000`  |
| removed |  -122 | 19.8% → 0.0% | 122 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`  |
| removed |  -117 | 19.0% → 0.0% | 117 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c80102b000`  |
| removed |  -117 | 19.0% → 0.0% | 117 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c80109bc00`  |
| removed |  -112 | 18.2% → 0.0% | 112 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010d3800`  |
| removed |  -110 | 17.8% → 0.0% | 110 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010c8000`  |
| removed |  -104 | 16.9% → 0.0% | 104 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c801095000` |
| removed |   -99 | 16.0% → 0.0% |  99 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010d2400`  |
| removed |   -97 | 15.7% → 0.0% |  97 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010d8800`  |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `vtable stub`           | `<unknown>` |
