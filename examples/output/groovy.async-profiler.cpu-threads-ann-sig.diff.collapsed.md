# Sampling profile diff

Collected 613 samples → 630 samples (+17 samples, +2.8%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   -0.6% |    -2 | 57.6% → 55.7% | 353 → 351 |
| Native            |  +13.5% |   +22 | 26.6% → 29.4% | 163 → 185 |
| Standard library  |   -5.4% |    -5 | 15.2% → 14.0% |   93 → 88 |
| JIT               | +100.0% |    +3 |   0.5% → 1.0% |     3 → 6 |
| Garbage collector | removed |    -1 |   0.2% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                     | Location                                               |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +128.6% |    +9 | 1.1% → 2.5% |  7 → 16 | `tlv_get_addr`                                                                               | `<unknown>`                                            |
|  +77.8% |    +7 | 1.5% → 2.5% |  9 → 16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                            | `<unknown>`                                            |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`                       | `<unknown>`                                            |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `semaphore_wait_trap`                                                                        | `<unknown>`                                            |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `Arena::contains(void const*) const`                                                         | `<unknown>`                                            |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                | `<unknown>`                                            |
|  +75.0% |    +3 | 0.7% → 1.1% |   4 → 7 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                       | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +60.0% |    +3 | 0.8% → 1.3% |   5 → 8 | `Node::is_CFG() const`                                                                       | `<unknown>`                                            |
| +300.0% |    +3 | 0.2% → 0.6% |   1 → 4 | `bsearch`                                                                                    | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseIdealLoop::Dominators()`                                                               | `<unknown>`                                            |
|  +60.0% |    +3 | 0.8% → 1.3% |   5 → 8 | `IndexSetIterator::advance_and_next()`                                                       | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `_qsort`                                                                                     | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `getNode(Object)`                                                                            | `java.util.HashMap`                                    |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`      | `<unknown>`                                            |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                      | `<unknown>`                                            |
|  +25.0% |    +2 | 1.3% → 1.6% |  8 → 10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                      | `<unknown>`                                            |
|  +50.0% |    +2 | 0.7% → 1.0% |   4 → 6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                 | `<unknown>`                                            |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)`                                          | `<unknown>`                                            |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `accept(Object)`                                                                             | `java.util.stream.ReferencePipeline$3$1`               |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                     | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  +77.8% |    +7 | 1.5% → 2.5% |  9 → 16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |
|  +75.0% |    +3 | 0.7% → 1.1% |   4 → 7 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
|  +60.0% |    +3 | 0.8% → 1.3% |   5 → 8 | `Node::is_CFG() const`                                                       | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseIdealLoop::Dominators()`                                               | `<unknown>` |
|  +60.0% |    +3 | 0.8% → 1.3% |   5 → 8 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
|  +25.0% |    +2 | 1.3% → 1.6% |  8 → 10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
|  +50.0% |    +2 | 0.7% → 1.0% |   4 → 6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)`                          | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIterGVN::optimize()`                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Scheduling::DoScheduling()`                                                 | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIterGVN::subsume_node(Node*, Node*)`                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Type::hashcons()`                                                           | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `ValueStack::values_do(ValueVisitor*)`                                       | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCCP::transform(Node*)`                                                 | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `PhaseChaitin::build_ifg_virtual()`                                          | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `Node::unique_ctrl_out_or_null() const`                                      | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::remix_address_expressions(Node*)`                           | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIterGVN::register_new_node_with_optimizer(Node*, Node*)`               | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `MultiNode::is_CFG() const`                                                  | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                                   | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +128.6% |    +9 | 1.1% → 2.5% |  7 → 16 | `tlv_get_addr`                                                                                                                                                             | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `semaphore_wait_trap`                                                                                                                                                      | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `Arena::contains(void const*) const`                                                                                                                                       | `<unknown>` |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                              | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.6% |   1 → 4 | `bsearch`                                                                                                                                                                  | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `_qsort`                                                                                                                                                                   | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                    | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`                                                                                       | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `_platform_bzero`                                                                                                                                                          | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)`                                          | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `Symbol::decrement_refcount()`                                                                                                                                             | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `InstanceKlass::link_class_impl(JavaThread*)`                                                                                                                              | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `nanov2_allocate_outlined`                                                                                                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `StackMapTable::StackMapTable(StackMapReader*, StackMapFrame*, unsigned short, unsigned short, char*, int, JavaThread*)`                                                   | `<unknown>` |
|  +50.0% |    +1 | 0.3% → 0.5% |   2 → 3 | `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)`                                                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                                                                                              | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `inflate`                                                                                                                                                                  | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `Dict::Insert(void*, void*, bool)`                                                                                                                                         | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                     | Location                                                |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `getNode(Object)`                                                                            | `java.util.HashMap`                                     |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `accept(Object)`                                                                             | `java.util.stream.ReferencePipeline$3$1`                |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`  |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `requireNonNull(Object)`                                                                     | `java.util.Objects`                                     |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `substring(int, int)`                                                                        | `java.lang.String`                                      |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invokeSpecial(Object, Object, Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`            |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `invokeVirtual(Object, Object)`                                                              | `java.lang.invoke.DirectMethodHandle$Holder`            |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `createWithCustomLookup(Class, MetaClassRegistry)`                                           | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8800`     |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `visitFile(Path, BasicFileAttributes)`                                                       | `org.codehaus.groovy.vmplugin.v9.ClassFinder$1`         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a8012b7000`     |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `execATN(CharStream, DFAState)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `sync(int)`                                                                                  | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`     |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `createAnnotationData(int)`                                                                  | `java.lang.Class`                                       |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                       | `java.lang.invoke.DirectMethodHandle$Holder`            |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invoke(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a8012fcc00`     |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `allocateInstance(Object)`                                                                   | `java.lang.invoke.DirectMethodHandle`                   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `update(int, Object)`                                                                        | `groovyjarjarantlr4.v4.runtime.misc.MurmurHash`         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `checkExactType(MethodHandle, MethodType)`                                                   | `java.lang.invoke.Invokers`                             |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                        | Location                                               |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -66.7% |    -8 | 2.0% → 0.6% |  12 → 4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                        | `<unknown>`                                            |
| removed |    -7 | 1.1% → 0.0% |   7 → 0 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                   | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -46.2% |    -6 | 2.1% → 1.1% |  13 → 7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                              | `<unknown>`                                            |
| removed |    -5 | 0.8% → 0.0% |   5 → 0 | `Matcher::xform(Node*, int)`                                                                                                                                    | `<unknown>`                                            |
|  -83.3% |    -5 | 1.0% → 0.2% |   6 → 1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                                            | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhiNode::Opcode() const`                                                                                                                                       | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_tree()`                                                                                                                             | `<unknown>`                                            |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                       | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `_platform_memmove`                                                                                                                                             | `<unknown>`                                            |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)`                                                             | `<unknown>`                                            |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeRawPtr::add_offset(long) const`                                                                                                                            | `<unknown>`                                            |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>`                                            |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                                                                            | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`  |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::try_sink_out_of_loop(Node*)`                                                                                                                   | `<unknown>`                                            |
|  -33.3% |    -2 | 1.0% → 0.6% |   6 → 4 | `Node_Backward_Iterator::next()`                                                                                                                                | `<unknown>`                                            |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `match(CharStream, int)`                                                                                                                                        | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`  |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `branchNode::is_block_proj() const`                                                                                                                             | `<unknown>`                                            |
|  -50.0% |    -2 | 0.7% → 0.3% |   4 → 2 | `PhaseChaitin::merge_multidefs()`                                                                                                                               | `<unknown>`                                            |
|  -28.6% |    -2 | 1.1% → 0.8% |   7 → 5 | `_platform_memset`                                                                                                                                              | `<unknown>`                                            |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `_isort`                                                                                                                                                        | `<unknown>`                                            |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                                                                                                        | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -8 | 2.0% → 0.6% |  12 → 4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                        | `<unknown>` |
|  -46.2% |    -6 | 2.1% → 1.1% |  13 → 7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                              | `<unknown>` |
| removed |    -5 | 0.8% → 0.0% |   5 → 0 | `Matcher::xform(Node*, int)`                                                                                                                                    | `<unknown>` |
|  -83.3% |    -5 | 1.0% → 0.2% |   6 → 1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                                            | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhiNode::Opcode() const`                                                                                                                                       | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_loop_tree()`                                                                                                                             | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)`                                                             | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeRawPtr::add_offset(long) const`                                                                                                                            | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::try_sink_out_of_loop(Node*)`                                                                                                                   | `<unknown>` |
|  -33.3% |    -2 | 1.0% → 0.6% |   6 → 4 | `Node_Backward_Iterator::next()`                                                                                                                                | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `branchNode::is_block_proj() const`                                                                                                                             | `<unknown>` |
|  -50.0% |    -2 | 0.7% → 0.3% |   4 → 2 | `PhaseChaitin::merge_multidefs()`                                                                                                                               | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Type::cmp(Type const*, Type const*)`                                                                                                                           | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)`                                                                                                    | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseCCP::transform_once(Node*)`                                                                                                                               | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseCCP::fetch_next_node(Unique_Node_List&)`                                                                                                                  | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeInterfaces::eq(Type const*) const`                                                                                                                         | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `BoolNode::hash() const`                                                                                                                                        | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseCFG::select(Block*, Node_List&, GrowableArray<int>&, VectorSet&, unsigned int, long*)`                                                                    | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                              | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                             | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `_platform_memmove`                                                                                                                                                   | `<unknown>` |
|  -28.6% |    -2 | 1.1% → 0.8% |   7 → 5 | `_platform_memset`                                                                                                                                                    | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `_isort`                                                                                                                                                              | `<unknown>` |
|  -40.0% |    -2 | 0.8% → 0.5% |   5 → 3 | `sys_icache_invalidate`                                                                                                                                               | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `InstanceKlass::get_jmethod_id(methodHandle const&)`                                                                                                                  | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `ClassLoaderData::oops_do(OopClosure*, int, bool)`                                                                                                                    | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `UTF8::quoted_ascii_length(char const*, int)`                                                                                                                         | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `CodeEmitInfo::interpreter_frame_size() const`                                                                                                                        | `<unknown>` |
|  -25.0% |    -1 | 0.7% → 0.5% |   4 → 3 | `__psynch_cvwait`                                                                                                                                                     | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `nanov2_find_block_and_allocate`                                                                                                                                      | `<unknown>` |
|  -33.3% |    -1 | 0.5% → 0.3% |   3 → 2 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `StackMapReader::next(StackMapFrame*, bool, unsigned short, unsigned short, JavaThread*)`                                                                             | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)`                                                                                                        | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)`                                                                                   | `<unknown>` |
|  -33.3% |    -1 | 0.5% → 0.3% |   3 → 2 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)`                                                                                                              | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `ConstantPool::resolve_constant_at_impl(constantPoolHandle const&, int, int, bool*, JavaThread*)`                                                                     | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `Rewriter::compute_index_maps()`                                                                                                                                      | `<unknown>` |
|  -12.5% |    -1 | 1.3% → 1.1% |   8 → 7 | `pthread_jit_write_protect_np`                                                                                                                                        | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed |    -7 | 1.1% → 0.0% |   7 → 0 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`         |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `match(CharStream, int)`                                                                                      | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`         |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `visit(GroovyCodeVisitor)`                                                                                    | `org.codehaus.groovy.ast.expr.ConstructorCallExpression`      |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `hash(Object)`                                                                                                | `java.util.HashMap`                                           |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                 | `org.codehaus.groovy.vmplugin.v8.IndyInterface`               |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `invoke(Object, Object[])`                                                                                    | `java.lang.reflect.Method`                                    |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)`                                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7c00`           |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `expungeStaleEntries()`                                                                                       | `java.util.WeakHashMap`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getMetaClass(Class)`                                                                                         | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getTargetPropertyInfo()`                                                                                     | `java.beans.Introspector`                                     |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `setCallSiteTarget()`                                                                                         | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`     |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)`                               | `org.codehaus.groovy.vmplugin.v8.IndyInterface`               |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`        |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `speciesData()`                                                                                               | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`            |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `basicTypeSlots()`                                                                                            | `java.lang.invoke.LambdaForm$BasicType`                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getDefaultPropertyIndex()`                                                                                   | `java.beans.GenericBeanInfo`                                  |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getChars(int, int, byte[])`                                                                                  | `java.lang.Integer`                                           |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `byteOffset(long)`                                                                                            | `java.nio.HeapByteBuffer`                                     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function                                        | Location                                             |
| -------: | ----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------------------- |
| +1288.9% |  +116 |  1.5% → 19.8% |   9 → 125 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`  |
|  +342.9% |   +96 |  4.6% → 19.7% |  28 → 124 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400` |
|  +131.4% |   +67 |  8.3% → 18.7% |  51 → 118 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`  |
|  +212.9% |   +66 |  5.1% → 15.4% |   31 → 97 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2400`  |
|  +124.5% |   +66 |  8.6% → 18.9% |  53 → 119 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a80102b000`  |
|  +135.4% |   +65 |  7.8% → 17.9% |  48 → 113 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010d3800`  |
|  +137.0% |   +63 |  7.5% → 17.3% |  46 → 109 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8000`  |
| +1766.7% |   +53 |   0.5% → 8.9% |    3 → 56 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a80109ac00`  |
|  +114.6% |   +47 |  6.7% → 14.0% |   41 → 88 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a80120f800`  |
|   +49.4% |   +41 | 13.5% → 19.7% |  83 → 124 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a80108e000`  |
|   +35.9% |   +33 | 15.0% → 19.8% |  92 → 125 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7000`  |
|  +118.5% |   +32 |   4.4% → 9.4% |   27 → 59 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801105400`  |
|   +20.5% |   +23 | 18.3% → 21.4% | 112 → 135 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`  |
|  +950.0% |   +19 |   0.3% → 3.3% |    2 → 21 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7c00`  |
|    +3.5% |   +16 | 75.0% → 75.6% | 460 → 476 | `Thread::call_run()`                            | `<unknown>`                                          |
|    +3.5% |   +16 | 75.0% → 75.6% | 460 → 476 | `thread_native_entry(Thread*)`                  | `<unknown>`                                          |
|    +3.5% |   +16 | 75.2% → 75.7% | 461 → 477 | `_pthread_start`                                | `<unknown>`                                          |
|    +3.5% |   +16 | 75.2% → 75.7% | 461 → 477 | `thread_start`                                  | `<unknown>`                                          |
|   +53.3% |   +16 |   4.9% → 7.3% |   30 → 46 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801229800`  |
|   +55.6% |   +15 |   4.4% → 6.7% |   27 → 42 | `PhaseIterGVN::optimize()`                      | `<unknown>`                                          |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                                                                   | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------ | ----------- |
|  +55.6% |   +15 |   4.4% → 6.7% |   27 → 42 | `PhaseIterGVN::optimize()`                                                                 | `<unknown>` |
|  +54.2% |   +13 |   3.9% → 5.9% |   24 → 37 | `PhaseIterGVN::transform_old(Node*)`                                                       | `<unknown>` |
|   +5.9% |    +8 | 22.0% → 22.7% | 135 → 143 | `Compile::Optimize()`                                                                      | `<unknown>` |
| +200.0% |    +6 |   0.5% → 1.4% |     3 → 9 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| +100.0% |    +4 |   0.7% → 1.3% |     4 → 8 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`                     | `<unknown>` |
|  +44.4% |    +4 |   1.5% → 2.1% |    9 → 13 | `Matcher::match_tree(Node const*)`                                                         | `<unknown>` |
| +133.3% |    +4 |   0.5% → 1.1% |     3 → 7 | `PhiNode::Ideal(PhaseGVN*, bool)`                                                          | `<unknown>` |
| +200.0% |    +4 |   0.3% → 1.0% |     2 → 6 | `BlockBegin::iterate_preorder(GrowableArray<bool>&, BlockClosure*)`                        | `<unknown>` |
| +200.0% |    +4 |   0.3% → 1.0% |     2 → 6 | `BlockBegin::iterate_preorder(BlockClosure*)`                                              | `<unknown>` |
| +400.0% |    +4 |   0.2% → 0.8% |     1 → 5 | `PhaseChaitin::Simplify()`                                                                 | `<unknown>` |
| +133.3% |    +4 |   0.5% → 1.1% |     3 → 7 | `Matcher::find_shared(Node*)`                                                              | `<unknown>` |
| +400.0% |    +4 |   0.2% → 0.8% |     1 → 5 | `RegionNode::Ideal(PhaseGVN*, bool)`                                                       | `<unknown>` |
| +400.0% |    +4 |   0.2% → 0.8% |     1 → 5 | `TypeInstPtr::add_offset(long) const`                                                      | `<unknown>` |
|     new |    +4 |   0.0% → 0.6% |     0 → 4 | `GraphKit::cast_not_null(Node*, bool)`                                                     | `<unknown>` |
|     new |    +4 |   0.0% → 0.6% |     0 → 4 | `PhaseIFG::remove_node(unsigned int)`                                                      | `<unknown>` |
|   +0.7% |    +3 | 72.4% → 71.0% | 444 → 447 | `CompileBroker::compiler_thread_loop()`                                                    | `<unknown>` |
|  +33.3% |    +3 |   1.5% → 1.9% |    9 → 12 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                    | `<unknown>` |
|   +6.7% |    +3 |   7.3% → 7.6% |   45 → 48 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                     | `<unknown>` |
|  +12.5% |    +3 |   3.9% → 4.3% |   24 → 27 | `Matcher::match()`                                                                         | `<unknown>` |
|  +60.0% |    +3 |   0.8% → 1.3% |     5 → 8 | `Node::is_CFG() const`                                                                     | `<unknown>` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   +3.5% |   +16 | 75.0% → 75.6% | 460 → 476 | `Thread::call_run()`                                                                                                                                                                                                                                                | `<unknown>` |
|   +3.5% |   +16 | 75.0% → 75.6% | 460 → 476 | `thread_native_entry(Thread*)`                                                                                                                                                                                                                                      | `<unknown>` |
|   +3.5% |   +16 | 75.2% → 75.7% | 461 → 477 | `_pthread_start`                                                                                                                                                                                                                                                    | `<unknown>` |
|   +3.5% |   +16 | 75.2% → 75.7% | 461 → 477 | `thread_start`                                                                                                                                                                                                                                                      | `<unknown>` |
| +107.7% |   +14 |   2.1% → 4.3% |   13 → 27 | `WorkerThread::run()`                                                                                                                                                                                                                                               | `<unknown>` |
|     new |   +13 |   0.0% → 2.1% |    0 → 13 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                                                                                                                                                     | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                                                                                                                       | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                                                                                                                                                 | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)`                                                                                                                                                                                                            | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                                             | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)`                                                                                                                                    | `<unknown>` |
|     new |   +10 |   0.0% → 1.6% |    0 → 10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                                                                                                                                            | `<unknown>` |
| +128.6% |    +9 |   1.1% → 2.5% |    7 → 16 | `tlv_get_addr`                                                                                                                                                                                                                                                      | `<unknown>` |
|     new |    +5 |   0.0% → 0.8% |     0 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                                                                                                             | `<unknown>` |
|  +12.1% |    +4 |   5.4% → 5.9% |   33 → 37 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                                                                                                                                         | `<unknown>` |
|  +12.1% |    +4 |   5.4% → 5.9% |   33 → 37 | `ParseGenerator::generate(JVMState*)`                                                                                                                                                                                                                               | `<unknown>` |
| +100.0% |    +4 |   0.7% → 1.3% |     4 → 8 | `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)`                                                                                                                                                                                                         | `<unknown>` |
| +200.0% |    +4 |   0.3% → 1.0% |     2 → 6 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`                                                                                                                                                                                | `<unknown>` |
| +200.0% |    +4 |   0.3% → 1.0% |     2 → 6 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&)`                                                                                                                                                                                             | `<unknown>` |

##### Standard library

|   Change | Delta |             % |   Samples | Function                                         | Location                                               |
| -------: | ----: | ------------: | --------: | ------------------------------------------------ | ------------------------------------------------------ |
| +1288.9% |  +116 |  1.5% → 19.8% |   9 → 125 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`    |
|  +342.9% |   +96 |  4.6% → 19.7% |  28 → 124 | `invokeVirtual(Object, Object, Object, Object)`  | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400`   |
|  +131.4% |   +67 |  8.3% → 18.7% |  51 → 118 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`    |
|  +212.9% |   +66 |  5.1% → 15.4% |   31 → 97 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2400`    |
|  +124.5% |   +66 |  8.6% → 18.9% |  53 → 119 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80102b000`    |
|  +135.4% |   +65 |  7.8% → 17.9% |  48 → 113 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8010d3800`    |
|  +137.0% |   +63 |  7.5% → 17.3% |  46 → 109 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8000`    |
| +1766.7% |   +53 |   0.5% → 8.9% |    3 → 56 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80109ac00`    |
|  +114.6% |   +47 |  6.7% → 14.0% |   41 → 88 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a80120f800`    |
|   +49.4% |   +41 | 13.5% → 19.7% |  83 → 124 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a80108e000`    |
|   +35.9% |   +33 | 15.0% → 19.8% |  92 → 125 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7000`    |
|  +118.5% |   +32 |   4.4% → 9.4% |   27 → 59 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a801105400`    |
|   +20.5% |   +23 | 18.3% → 21.4% | 112 → 135 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`    |
|  +950.0% |   +19 |   0.3% → 3.3% |    2 → 21 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000a8010c7c00`    |
|   +53.3% |   +16 |   4.9% → 7.3% |   30 → 46 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801229800`    |
|  +325.0% |   +13 |   0.7% → 2.7% |    4 → 17 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801121000`    |
|  +100.0% |   +11 |   1.8% → 3.5% |   11 → 22 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a8010d3400`    |
|   +34.8% |    +8 |   3.8% → 4.9% |   23 → 31 | `execDFA(DFA, TokenStream, int, SimulatorState)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  +114.3% |    +8 |   1.1% → 2.4% |    7 → 15 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801104000`    |
|   +31.8% |    +7 |   3.6% → 4.6% |   22 → 29 | `execATN(DFA, TokenStream, int, SimulatorState)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                        | Location                                             |
| -----: | ----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------------------- |
| -81.9% |  -104 |  20.7% → 3.7% |  127 → 23 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8012da800`  |
| -79.5% |  -101 |  20.7% → 4.1% |  127 → 26 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8012ac000` |
| -81.5% |  -101 |  20.2% → 3.7% |  124 → 23 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8012da000`  |
| -71.9% |   -82 |  18.6% → 5.1% |  114 → 32 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010abc00`  |
| -53.2% |   -66 |  20.2% → 9.2% |  124 → 58 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010dcc00`  |
| -70.7% |   -65 |  15.0% → 4.3% |   92 → 27 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a8011b0400`  |
| -73.3% |   -63 |  14.0% → 3.7% |   86 → 23 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8012e4000`  |
| -42.0% |   -37 |  14.4% → 8.1% |   88 → 51 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a80121a000`  |
| -31.4% |   -37 | 19.2% → 12.9% |  118 → 81 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801212400`  |
| -26.9% |   -32 | 19.4% → 13.8% |  119 → 87 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801205c00`  |
| -25.8% |   -32 | 20.2% → 14.6% |  124 → 92 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8011ba000`  |
| -51.9% |   -27 |   8.5% → 4.0% |   52 → 25 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8012acc00`  |
| -91.3% |   -21 |   3.8% → 0.3% |    23 → 2 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010c9800`  |
| -95.5% |   -21 |   3.6% → 0.2% |    22 → 1 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010ab000`  |
| -68.2% |   -15 |   3.6% → 1.1% |    22 → 7 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801181400`  |
| -72.2% |   -13 |   2.9% → 0.8% |    18 → 5 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8012e8000`  |
|  -8.9% |   -12 | 22.0% → 19.5% | 135 → 123 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`  |
| -80.0% |   -12 |   2.4% → 0.5% |    15 → 3 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a80112c000`  |
|  -6.0% |   -11 | 29.9% → 27.3% | 183 → 172 | `Compile::Code_Gen()`                           | `<unknown>`                                          |
| -11.3% |   -11 | 15.8% → 13.7% |   97 → 86 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a801208800`  |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                                                                    | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ----------- |
|   -6.0% |   -11 | 29.9% → 27.3% | 183 → 172 | `Compile::Code_Gen()`                                                                       | `<unknown>` |
|  -91.7% |   -11 |   2.0% → 0.2% |    12 → 1 | `ConnectionGraph::compute_escape()`                                                         | `<unknown>` |
|  -83.3% |   -10 |   2.0% → 0.3% |    12 → 2 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)`                                     | `<unknown>` |
|  -44.4% |    -8 |   2.9% → 1.6% |   18 → 10 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                          | `<unknown>` |
|  -58.3% |    -7 |   2.0% → 0.8% |    12 → 5 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                                          | `<unknown>` |
|  -20.0% |    -6 |   4.9% → 3.8% |   30 → 24 | `PhaseCFG::do_global_code_motion()`                                                         | `<unknown>` |
| removed |    -6 |   1.0% → 0.0% |     6 → 0 | `PhaseIdealLoop::try_sink_out_of_loop(Node*)`                                               | `<unknown>` |
|  -85.7% |    -6 |   1.1% → 0.2% |     7 → 1 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`                                          | `<unknown>` |
|   -6.3% |    -5 | 13.1% → 11.9% |   80 → 75 | `PhaseIdealLoop::build_and_optimize()`                                                      | `<unknown>` |
|  -23.8% |    -5 |   3.4% → 2.5% |   21 → 16 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                    | `<unknown>` |
|  -50.0% |    -5 |   1.6% → 0.8% |    10 → 5 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                        | `<unknown>` |
|   -6.8% |    -5 | 11.9% → 10.8% |   73 → 68 | `Compilation::compile_java_method()`                                                        | `<unknown>` |
|  -41.7% |    -5 |   2.0% → 1.1% |    12 → 7 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                             | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |     7 → 2 | `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)`                            | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |     7 → 2 | `ciTypeFlow::flow_block(ciTypeFlow::Block*, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |     7 → 2 | `ciTypeFlow::flow_types()`                                                                  | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |     7 → 2 | `ciTypeFlow::do_flow()`                                                                     | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |     7 → 2 | `ciMethod::get_flow_analysis()`                                                             | `<unknown>` |
|  -29.4% |    -5 |   2.8% → 1.9% |   17 → 12 | `GraphBuilder::invoke(Bytecodes::Code)`                                                     | `<unknown>` |
|  -23.8% |    -5 |   3.4% → 2.5% |   21 → 16 | `GraphBuilder::iterate_bytecodes_for_block(int)`                                            | `<unknown>` |

##### Native

|  Change | Delta |             % | Samples | Function                                                                                                                                                                                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -8 |   2.0% → 0.6% |  12 → 4 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                                                                                                                                                                                              | `<unknown>` |
|  -46.7% |    -7 |   2.4% → 1.3% |  15 → 8 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                                                                                                                                                | `<unknown>` |
|  -75.0% |    -6 |   1.3% → 0.3% |   8 → 2 | `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)`    | `<unknown>` |
|  -38.5% |    -5 |   2.1% → 1.3% |  13 → 8 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)`                                                                                                                    | `<unknown>` |
|  -16.1% |    -5 |   5.1% → 4.1% | 31 → 26 | `Parse::do_call()`                                                                                                                                                                                                                                                | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |   7 → 2 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                                                                                                                           | `<unknown>` |
|  -71.4% |    -5 |   1.1% → 0.3% |   7 → 2 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                                                                                                                                                   | `<unknown>` |
|  -17.4% |    -4 |   3.8% → 3.0% | 23 → 19 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                                                                                                                                                                             | `<unknown>` |
|  -17.4% |    -4 |   3.8% → 3.0% | 23 → 19 | `IR::IR(Compilation*, ciMethod*, int)`                                                                                                                                                                                                                            | `<unknown>` |
|  -66.7% |    -4 |   1.0% → 0.3% |   6 → 2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
|  -66.7% |    -4 |   1.0% → 0.3% |   6 → 2 | `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)`                                                                                                                                                                                                     | `<unknown>` |
|  -80.0% |    -4 |   0.8% → 0.2% |   5 → 1 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                                                                                                                                                                                       | `<unknown>` |
|  -75.0% |    -3 |   0.7% → 0.2% |   4 → 1 | `InterpreterRuntime::ldc(JavaThread*, bool)`                                                                                                                                                                                                                      | `<unknown>` |
|   -3.8% |    -3 | 12.9% → 12.1% | 79 → 76 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                           | `<unknown>` |
|  -30.0% |    -3 |   1.6% → 1.1% |  10 → 7 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`                                                                                                                                               | `<unknown>` |
|  -30.0% |    -3 |   1.6% → 1.1% |  10 → 7 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`                                                                                                                                                   | `<unknown>` |
|  -30.0% |    -3 |   1.6% → 1.1% |  10 → 7 | `JVM_DefineClassWithSource`                                                                                                                                                                                                                                       | `<unknown>` |
|  -42.9% |    -3 |   1.1% → 0.6% |   7 → 4 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)`                                                                                                                                                                                                          | `<unknown>` |
|  -60.0% |    -3 |   0.8% → 0.3% |   5 → 2 | `InterpreterRuntime::frequency_counter_overflow_inner(JavaThread*, unsigned char*)`                                                                                                                                                                               | `<unknown>` |
| removed |    -3 |   0.5% → 0.0% |   3 → 0 | `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)`                                                                                                                                                                                          | `<unknown>` |

##### Standard library

| Change | Delta |             % |   Samples | Function                                        | Location                                             |
| -----: | ----: | ------------: | --------: | ----------------------------------------------- | ---------------------------------------------------- |
| -81.9% |  -104 |  20.7% → 3.7% |  127 → 23 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8012da800`  |
| -79.5% |  -101 |  20.7% → 4.1% |  127 → 26 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8012ac000` |
| -81.5% |  -101 |  20.2% → 3.7% |  124 → 23 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8012da000`  |
| -71.9% |   -82 |  18.6% → 5.1% |  114 → 32 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010abc00`  |
| -53.2% |   -66 |  20.2% → 9.2% |  124 → 58 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010dcc00`  |
| -70.7% |   -65 |  15.0% → 4.3% |   92 → 27 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a8011b0400`  |
| -73.3% |   -63 |  14.0% → 3.7% |   86 → 23 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8012e4000`  |
| -42.0% |   -37 |  14.4% → 8.1% |   88 → 51 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a80121a000`  |
| -31.4% |   -37 | 19.2% → 12.9% |  118 → 81 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801212400`  |
| -26.9% |   -32 | 19.4% → 13.8% |  119 → 87 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a801205c00`  |
| -25.8% |   -32 | 20.2% → 14.6% |  124 → 92 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8011ba000`  |
| -51.9% |   -27 |   8.5% → 4.0% |   52 → 25 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8012acc00`  |
| -91.3% |   -21 |   3.8% → 0.3% |    23 → 2 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010c9800`  |
| -95.5% |   -21 |   3.6% → 0.2% |    22 → 1 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010ab000`  |
| -68.2% |   -15 |   3.6% → 1.1% |    22 → 7 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a801181400`  |
| -72.2% |   -13 |   2.9% → 0.8% |    18 → 5 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8012e8000`  |
|  -8.9% |   -12 | 22.0% → 19.5% | 135 → 123 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`  |
| -80.0% |   -12 |   2.4% → 0.5% |    15 → 3 | `invoke(Object, Object, Object)`                | `java.lang.invoke.LambdaForm$MH.0x000000a80112c000`  |
| -11.3% |   -11 | 15.8% → 13.7% |   97 → 86 | `invoke(Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000a801208800`  |
| -52.4% |   -11 |   3.4% → 1.6% |   21 → 10 | `invoke(Object, Object)`                        | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8800`  |
