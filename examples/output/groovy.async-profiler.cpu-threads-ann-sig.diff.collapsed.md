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

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                  | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------- | ----------- |
|     new |    +2 | 0.0% → 12.5% |   0 → 2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`    | `<unknown>` |
|     new |    +2 | 0.0% → 12.5% |   0 → 2 | `PhaseChaitin::gather_lrg_masks(bool)`                                  | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `TypeAryPtr::xmeet_helper(Type const*) const`                           | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ciKlass::java_mirror()`                                                | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `LinearScanWalker::LinearScanWalker(LinearScan*, Interval*, Interval*)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +77.8% |    +7 | 100.0% |  9 → 16 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                               | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% → 83.3% |   2 → 5 | `WorkerThread::run()`                                | `<unknown>` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `WorkerThreads::run_task(WorkerTask*, unsigned int)` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                              | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Caller                                                              | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `Node::is_CFG() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
|  +50.0% |    +1 | 40.0% → 37.5% |   2 → 3 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree()`                                    | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `IdealLoopTree::est_loop_clone_sz(unsigned int) const`                 | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`               | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                 | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------ | ----------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `encoding_for_logical_immediate(unsigned long long)`   | `<unknown>` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `LIR_Assembler::emit_profile_type(LIR_OpProfileType*)` | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                        | `<unknown>` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `PhaseIFG::remove_node(unsigned int)`                                                                                       | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `PhaseIFG::SquareUp()`                                                                                                      | `<unknown>` |
|  -33.3% |    -1 | 60.0% → 25.0% |   3 → 2 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                           | `<unknown>` |

##### `_qsort` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                           | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `TypeInterfaces::intersection_with(TypeInterfaces const*) const` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `_qsort`                                                         | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `LinearScan::sort_intervals_after_allocation()`                  | `<unknown>` |

##### `getNode(Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location            |
| -----: | ----: | ------------: | ------: | ------------- | ------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `get(Object)` | `java.util.HashMap` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                        | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `OopRecorder::find_index(Metadata*)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                       | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ----------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                           | Location    |
| ------: | ----: | -----: | ------: | -------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseCFG::global_code_motion()` | `<unknown>` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Caller           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `accept(Object)` | `java.util.stream.ReferencePipeline$2$1` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                   | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Compile::Optimize()`                    | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseMacroExpand::expand_macro_nodes()` | `<unknown>` |

##### `Scheduling::DoScheduling()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                  | Location    |
| -----: | ----: | ------------: | ------: | ----------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseOutput::Output()` | `<unknown>` |

##### `PhaseIterGVN::subsume_node(Node*, Node*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                     | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old(Node*)`                       | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseMacroExpand::process_users_of_allocation(CallNode*)` | `<unknown>` |

##### `Type::hashcons()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                      | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `TypePtr::interfaces(ciKlass*&, bool, bool, bool, Type::InterfaceHandling)` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `TypeInstKlassPtr::as_instance_type(bool) const`                            | `<unknown>` |

##### `ValueStack::values_do(ValueVisitor*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `BlockBegin::state_values_do(ValueVisitor*)`  | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `UseCountComputer::block_do(BlockBegin*)`     | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `Instruction::state_values_do(ValueVisitor*)` | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `SubstitutionResolver::block_do(BlockBegin*)` | `<unknown>` |

##### `PhaseCCP::transform(Node*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCCP::do_transform()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_virtual()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Node::unique_ctrl_out_or_null() const` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                         | Location    |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------- | ----------- |
|    new |    +2 |   0.0% → 50.0% |   0 → 2 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`       | `<unknown>` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `ProjNode::is_uncommon_trap_proj(Deoptimization::DeoptReason)` | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `PathFrequency::to(Node*)`                                     | `<unknown>` |

##### `PhaseIdealLoop::remix_address_expressions(Node*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                            | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)` | `<unknown>` |

##### `PhaseIterGVN::register_new_node_with_optimizer(Node*, Node*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                                                           | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `BarrierSetC2::obj_allocate(PhaseMacroExpand*, Node*, Node*, Node*, Node*&, Node*&, Node*&, Node*&, long) const` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::dominated_by(IfProjNode*, IfNode*, bool, bool)`                                                 | `<unknown>` |

##### `MultiNode::is_CFG() const` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                               | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::build_and_optimize()`                               | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `NTarjan::DFS(NTarjan*, VectorSet&, PhaseIdealLoop*, unsigned int*)` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                  | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&)` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |

##### `_platform_bzero` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                     | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MethodData::allocate(ClassLoaderData*, methodHandle const&, JavaThread*)` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)`                                    | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                           | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `void G1CMTask::process_grey_task_entry<true>(G1TaskQueueEntry)` | `<unknown>` |

##### `Symbol::decrement_refcount()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciObjectFactory::remove_symbols()`                                                       | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassPathImageEntry::open_stream_for_loader(JavaThread*, char const*, ClassLoaderData*)` | `<unknown>` |

##### `InstanceKlass::link_class_impl(JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `InstanceKlass::link_class_impl(JavaThread*)` | `<unknown>` |

##### `nanov2_allocate_outlined` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                    | Location    |
| -----: | ----: | ------------: | ------: | ------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getStringPlatformChars0` | `<unknown>` |

##### `StackMapTable::StackMapTable(StackMapReader*, StackMapFrame*, unsigned short, unsigned short, char*, int, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                           | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)` | `<unknown>` |

##### `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------- | ----------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `NativeCall::set_destination_mt_safe(unsigned char*)` | `<unknown>` |

##### `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                        | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)` | `<unknown>` |

##### `inflate` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                          | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `Dict::Insert(void*, void*, bool)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `TypeInstPtr::add_offset(long) const` | `<unknown>` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `requireNonNull(Object)` (`java.util.Objects`)

| Change | Delta |            % | Samples | Caller                                 | Location                                 |
| -----: | ----: | -----------: | ------: | -------------------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(Sink)`                         | `java.util.stream.Sink$ChainedReference` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `spliterator(Object[], int, int, int)` | `java.util.Spliterators`                 |

##### `substring(int, int)` (`java.lang.String`)

| Change | Delta |            % | Samples | Caller                            | Location                              |
| -----: | ----: | -----------: | ------: | --------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `parseURL(URL, String, int, int)` | `sun.net.www.protocol.jar.Handler`    |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getDescriptor()`                 | `jdk.internal.org.objectweb.asm.Type` |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a80102ac00` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |      % | Samples | Caller           | Location                                            |
| ------: | ----: | -----: | ------: | ---------------- | --------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801089400` |

##### `createWithCustomLookup(Class, MetaClassRegistry)` (`groovy.lang.MetaClassRegistry$MetaClassCreationHandle`)

| Change | Delta |             % | Samples | Caller                             | Location                                                |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `create(Class, MetaClassRegistry)` | `groovy.lang.MetaClassRegistry$MetaClassCreationHandle` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c8800`)

| Change | Delta |             % | Samples | Caller                           | Location                                            |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkToCallSite(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010c8c00` |

##### `visitFile(Path, BasicFileAttributes)` (`org.codehaus.groovy.vmplugin.v9.ClassFinder$1`)

| Change | Delta |             % | Samples | Caller                                   | Location                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitFile(Object, BasicFileAttributes)` | `org.codehaus.groovy.vmplugin.v9.ClassFinder$1` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012b7000`)

| Change | Delta |             % | Samples | Caller                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `execATN(CharStream, DFAState)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

| Change | Delta |             % | Samples | Caller                   | Location                                              |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `match(CharStream, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `sync(int)` (`groovyjarjarantlr4.v4.runtime.BufferedTokenStream`)

| Change | Delta |             % | Samples | Caller      | Location                                            |
| -----: | ----: | ------------: | ------: | ----------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `consume()` | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream` |

##### `createAnnotationData(int)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller             | Location          |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `annotationData()` | `java.lang.Class` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                                            | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyWithExtendL(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLL` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012fcc00`)

| Change | Delta |             % | Samples | Caller                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `update(int, Object)` (`groovyjarjarantlr4.v4.runtime.misc.MurmurHash`)

| Change | Delta |             % | Samples | Caller       | Location                                      |
| -----: | ----: | ------------: | ------: | ------------ | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hashCode()` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `checkExactType(MethodHandle, MethodType)` (`java.lang.invoke.Invokers`)

| Change | Delta |             % | Samples | Caller                                   | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                 | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| -66.7% |    -8 | 100.0% |  12 → 4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -46.2% |    -6 | 100.0% |  13 → 7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller             | Location    |
| ------: | ----: | ------------: | ------: | ------------------ | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `Matcher::match()` | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `PhiNode::Opcode() const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim(Node*)`                                                                                     | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Matcher::match()`                                                                                                          | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ConnectionGraph::split_unique_types(GrowableArray<Node*>&, GrowableArray<ArrayCopyNode*>&, GrowableArray<MergeMemNode*>&)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                      | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CompileBroker::update_compile_perf_data(CompilerThread*, methodHandle const&, bool)` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `CodeSection::expand_locs(int)`                                                       | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Node_Array::grow(unsigned int)`                                                      | `<unknown>` |

##### `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Compile::final_graph_reshaping()` | `<unknown>` |

##### `TypeRawPtr::add_offset(long) const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                             | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `MemNode::adr_type() const`                        | `<unknown>` |

##### `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
| removed |    -2 |  66.7% → 0.0% |   2 → 0 | `NonSafepointEmitter::emit_non_safepoint()`                                       | `<unknown>` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseOutput::Process_OopMap_Node(MachNode*, int)`                                | `<unknown>` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `IRScopeDebugInfo::record_debug_info(DebugInformationRecorder*, int, bool, bool)` | `<unknown>` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

| Change | Delta |      % | Samples | Caller                                   | Location                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `PhaseIdealLoop::try_sink_out_of_loop(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)` | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| -75.0% |    -3 | 66.7% → 25.0% |   4 → 1 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |
| +50.0% |    +1 | 33.3% → 75.0% |   2 → 3 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |

##### `match(CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`)

|  Change | Delta |             % | Samples | Caller        | Location                              |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `nextToken()` | `groovyjarjarantlr4.v4.runtime.Lexer` |

##### `branchNode::is_block_proj() const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                             | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate()`                | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |

##### `PhaseChaitin::merge_multidefs()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`                          | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `ComputeLinearScanOrder::ComputeLinearScanOrder(Compilation*, BlockBegin*)`           | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `BlockListBuilder::mark_loops(BlockBegin*, bool)`                                     | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `BlockBegin::try_merge(ValueStack*, bool)`                                            | `<unknown>` |

##### `_isort` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeInterfaces::make(GrowableArray<ciInstanceKlass*>*)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `_qsort`                                                 | `<unknown>` |

##### `Type::cmp(Type const*, Type const*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `ValueStack::ValueStack(ValueStack*, ValueStack::Kind, int)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                             | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::copy_state_before_with_bci(int)`    | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `GraphBuilder::push_scope(ciMethod*, BlockBegin*)` | `<unknown>` |

##### `PhaseCCP::transform_once(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::transform(Node*)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseCCP::do_transform()`   | `<unknown>` |

##### `PhaseCCP::fetch_next_node(Unique_Node_List&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCCP::analyze()` | `<unknown>` |

##### `TypeInterfaces::eq(Type const*) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `TypeInstPtr::eq(Type const*) const` | `<unknown>` |

##### `BoolNode::hash() const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                              | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIterGVN::optimize()`          | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `NodeHash::hash_find_insert(Node*)` | `<unknown>` |

##### `PhaseCFG::select(Block*, Node_List&, GrowableArray<int>&, VectorSet&, unsigned int, long*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)`                                                                    | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `CodeBuffer::copy_code_to(CodeBlob*)`                                                                                                                                                                                                                             | `<unknown>` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `ICStub::finalize()`                                                                                                                                                                                                                                              | `<unknown>` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `VtableStubs::find_stub(bool, int)`                                                                                                                                                                                                                               | `<unknown>` |

##### `InstanceKlass::get_jmethod_id(methodHandle const&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Method::jmethod_id()` | `<unknown>` |

##### `ClassLoaderData::oops_do(OopClosure*, int, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `UTF8::quoted_ascii_length(char const*, int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                         | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Symbol::print_symbol_on(outputStream*) const` | `<unknown>` |

##### `CodeEmitInfo::interpreter_frame_size() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| -25.0% |    -1 | 100.0% |   4 → 3 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `nanov2_find_block_and_allocate` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `nanov2_allocate_outlined` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                                           | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |

##### `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)` | `<unknown>` |

##### `StackMapReader::next(StackMapFrame*, bool, unsigned short, unsigned short, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `StackMapTable::StackMapTable(StackMapReader*, StackMapFrame*, unsigned short, unsigned short, char*, int, JavaThread*)` | `<unknown>` |

##### `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::Dominators()` | `<unknown>` |

##### `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SharedRuntime::resolve_sub_helper_internal(methodHandle, frame const&, CompiledMethod*, bool, bool, Handle, CallInfo&, Bytecodes::Code, JavaThread*)` | `<unknown>` |

##### `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                        | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `CompiledMethod::unload_nmethod_caches(bool)` | `<unknown>` |

##### `ConstantPool::resolve_constant_at_impl(constantPoolHandle const&, int, int, bool*, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ConstantPool::copy_bootstrap_arguments_at_impl(constantPoolHandle const&, int, int, int, objArrayHandle, int, bool, Handle, JavaThread*)` | `<unknown>` |

##### `Rewriter::compute_index_maps()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Rewriter::rewrite_bytecodes(JavaThread*)` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ----------- |
|  -66.7% |    -2 | 37.5% → 14.3% |   3 → 1 | `InterpreterRuntime::ldc(JavaThread*, bool)`                          | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `JVM_IsInterface`                                                     | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `JVM_Clone`                                                           | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `Unsafe_GetInt(JNIEnv_*, _jobject*, _jobject*, long)`                 | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray(JavaThread*, ConstantPool*, int, int)` | `<unknown>` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.ConstructorCallExpression`)

|  Change | Delta |             % | Samples | Caller                                            | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location            |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getNode(Object)` | `java.util.HashMap` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % | Samples | Caller                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |             % | Samples | Caller                     | Location                                      |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `adaptivePredict(TokenStream, int, ParserRuleContext, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                                 | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `adaptivePredict(TokenStream, int, ParserRuleContext)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c7c00`)

|  Change | Delta |             % | Samples | Caller                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `expungeStaleEntries()` (`java.util.WeakHashMap`)

|  Change | Delta |             % | Samples | Caller       | Location                |
| ------: | ----: | ------------: | ------: | ------------ | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getTable()` | `java.util.WeakHashMap` |

##### `getMetaClass(Class)` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`)

|  Change | Delta |             % | Samples | Caller                               | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeConstructorOf(Class, Object)` | `org.codehaus.groovy.runtime.InvokerHelper` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|  Change | Delta |             % | Samples | Caller          | Location                  |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getBeanInfo()` | `java.beans.Introspector` |

##### `setCallSiteTarget()` (`org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`)

|  Change | Delta |             % | Samples | Caller                                                                                       | Location                                        |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                   |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply(Object, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$$Lambda.0x000000a80108f228` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `speciesData()` (`java.lang.invoke.BoundMethodHandle$Species_LLLLL`)

|  Change | Delta |             % | Samples | Caller         | Location                             |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fieldCount()` | `java.lang.invoke.BoundMethodHandle` |

##### `basicTypeSlots()` (`java.lang.invoke.LambdaForm$BasicType`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(String, String, LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `getDefaultPropertyIndex()` (`java.beans.GenericBeanInfo`)

|  Change | Delta |             % | Samples | Caller                             | Location                  |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getPropertyDescriptors(BeanInfo)` | `java.beans.Introspector` |

##### `getChars(int, int, byte[])` (`java.lang.Integer`)

|  Change | Delta |             % | Samples | Caller        | Location                          |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `append(int)` | `java.lang.AbstractStringBuilder` |

##### `byteOffset(long)` (`java.nio.HeapByteBuffer`)

|  Change | Delta |             % | Samples | Caller       | Location                  |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getShort()` | `java.nio.HeapByteBuffer` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c6400`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|     new |  +125 | 0.0% → 100.0% | 0 → 125 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801094400`)

|  Change | Delta |            % | Samples | Callee                                     | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ---------------------------------------------- |
|     new |   +92 | 0.0% → 74.2% |  0 → 92 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$1076`         |
|     new |   +77 | 0.0% → 62.1% |  0 → 77 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|     new |   +51 | 0.0% → 41.1% |  0 → 51 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$251`          |
| removed |   -27 | 96.4% → 0.0% |  27 → 0 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
|     new |   +19 | 0.0% → 15.3% |  0 → 19 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80109bc00`)

|  Change | Delta |              % |  Samples | Callee                     | Location                                            |
| ------: | ----: | -------------: | -------: | -------------------------- | --------------------------------------------------- |
| +202.6% |   +79 | 76.5% → 100.0% | 39 → 118 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801099c00` |
|  -91.7% |   -11 |   23.5% → 0.8% |   12 → 1 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +1 |    0.0% → 0.8% |    0 → 1 | `invoke(Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a80109b800` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010d2400`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +97 | 0.0% → 100.0% |  0 → 97 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801095000` |
| removed |   -27 |  87.1% → 0.0% |  27 → 0 | `invokeVirtual(Object, Object, Object, Object)`           | `java.lang.invoke.LambdaForm$DMH.0x00000070012a0400` |
| removed |    -4 |  12.9% → 0.0% |   4 → 0 | `invokeInterface(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x00000070011b0000` |
| removed |    -3 |   9.7% → 0.0% |   3 → 0 | `invokeSpecial(Object, Object, Object, Object)`           | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80102b000`)

|  Change | Delta |            % | Samples | Callee                          | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------- | ---------------------------------------------------- |
|     new |  +118 | 0.0% → 99.2% | 0 → 118 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -98.1% |   -51 | 98.1% → 0.8% |  52 → 1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |  1.9% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010d3800`)

|  Change | Delta |              % |  Samples | Callee                             | Location                                            |
| ------: | ----: | -------------: | -------: | ---------------------------------- | --------------------------------------------------- |
| +140.4% |   +66 | 97.9% → 100.0% | 47 → 113 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
| +100.0% |    +1 |    2.1% → 1.8% |    1 → 2 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c8000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |  +109 | 0.0% → 100.0% | 0 → 109 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -46 | 100.0% → 0.0% |  46 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001097c00` |
|     new |    +2 |   0.0% → 1.8% |   0 → 2 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80109ac00`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new |   +45 |  0.0% → 80.4% |  0 → 45 | `reinvoke(Object, Object)`                      | `java.lang.invoke.LambdaForm$MH.0x000000a801099c00`  |
|     new |   +11 |  0.0% → 19.6% |  0 → 11 | `delegate(Object, Object)`                      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80120f800`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +88 | 0.0% → 100.0% |  0 → 88 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -41 | 100.0% → 0.0% |  41 → 0 | `invokeVirtual(Object, Object, int)`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001109400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80108e000`)

|  Change | Delta |             % | Samples | Callee                                                                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +123 |  0.0% → 99.2% | 0 → 123 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
| removed |   -83 | 100.0% → 0.0% |  83 → 0 | `delegate(Object, Object, Object, Object, Object)`                                              | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +2 |   0.0% → 1.6% |   0 → 2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088c00` |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000a801031800`  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c7000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |  +125 | 0.0% → 100.0% | 0 → 125 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
| removed |   -92 | 100.0% → 0.0% |  92 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
|     new |   +86 |  0.0% → 68.8% |  0 → 86 | `delegate(Object, Object, Object)`         | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801105400`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------- |
|     new |   +58 |  0.0% → 98.3% |  0 → 58 | `invokeSpecial(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -27 | 100.0% → 0.0% |  27 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000`  |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `invokeVirtual(Object, Object)`            | `java.lang.invoke.LambdaForm$DMH.0x000000a801105000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010a1800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |  +135 | 0.0% → 100.0% | 0 → 135 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
| removed |  -112 | 100.0% → 0.0% | 112 → 0 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -2 |   1.8% → 0.0% |   2 → 0 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001095800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c7c00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
|     new |   +21 | 0.0% → 100.0% |  0 → 21 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |

##### `Thread::call_run()` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                            | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------- | ----------- |
| +107.7% |   +14 |   2.8% → 5.7% |   13 → 27 | `WorkerThread::run()`             | `<unknown>` |
|   +0.7% |    +3 | 96.7% → 94.1% | 445 → 448 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  -50.0% |    -1 |   0.4% → 0.2% |     2 → 1 | `VMThread::run()`                 | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  +3.5% |   +16 | 100.0% | 460 → 476 | `Thread::call_run()` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |     % |   Samples | Callee                         | Location    |
| -----: | ----: | ----: | --------: | ------------------------------ | ----------- |
|  +3.5% |   +16 | 99.8% | 460 → 476 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  +3.5% |   +16 | 100.0% | 461 → 477 | `_pthread_start` | `<unknown>` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801229800`)

|  Change | Delta |             % | Samples | Callee                                   | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
|     new |   +46 | 0.0% → 100.0% |  0 → 46 | `invokeVirtual(Object, Object, int)`     | `java.lang.invoke.LambdaForm$DMH.0x000000a801109c00` |
| removed |   -30 | 100.0% → 0.0% |  30 → 0 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
|  +54.2% |   +13 | 88.9% → 88.1% | 24 → 37 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `BoolNode::hash() const`             | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `Node::hash() const`                 | `<unknown>` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `IfNode::Ideal(PhaseGVN*, bool)`     | `<unknown>` |
|     new |    +1 |   0.0% → 2.4% |   0 → 1 | `NodeHash::hash_find_insert(Node*)`  | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
| +250.0% |    +5 | 8.3% → 18.9% |   2 → 7 | `PhiNode::Ideal(PhaseGVN*, bool)`          | `<unknown>` |
| +400.0% |    +4 | 4.2% → 13.5% |   1 → 5 | `RegionNode::Ideal(PhaseGVN*, bool)`       | `<unknown>` |
|     new |    +3 |  0.0% → 8.1% |   0 → 3 | `StoreNode::Ideal(PhaseGVN*, bool)`        | `<unknown>` |
|  -40.0% |    -2 | 20.8% → 8.1% |   5 → 3 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
|     new |    +2 |  0.0% → 5.4% |   0 → 2 | `MergeMemNode::Ideal(PhaseGVN*, bool)`     | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                  | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| -83.3% |   -10 |   8.9% → 1.4% |  12 → 2 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |
| +62.5% |   +10 | 11.9% → 18.2% | 16 → 26 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  -9.1% |    -4 | 32.6% → 28.0% | 44 → 40 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
|  +6.7% |    +3 | 33.3% → 33.6% | 45 → 48 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
|    new |    +3 |   0.0% → 2.1% |   0 → 3 | `PhaseMacroExpand::eliminate_macro_nodes()`             | `<unknown>` |

##### `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ----------- |
| +150.0% |    +3 | 66.7% → 55.6% |   2 → 5 | `Compile::identify_useful_nodes(Unique_Node_List&)`                       | `<unknown>` |
|     new |    +2 |  0.0% → 22.2% |   0 → 2 | `Compile::update_dead_node_list(Unique_Node_List&)`                       | `<unknown>` |
| +100.0% |    +1 | 33.3% → 22.2% |   1 → 2 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)` | `<unknown>` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ----------- |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `CodeEmitInfo::interpreter_frame_size() const`                                   | `<unknown>` |
|  +50.0% |    +1 | 50.0% → 37.5% |   2 → 3 | `LinearScan::compute_oop_map(IntervalWalker*, LIR_OpVisitState const&, LIR_Op*)` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +300.0% |    +3 | 11.1% → 30.8% |   1 → 4 | `Matcher::ReduceInst(State*, int, Node*&)` | `<unknown>` |

##### `PhiNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                       | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | ----------- |
| +100.0% |    +1 | 33.3% → 28.6% |   1 → 2 | `RegionNode::is_unreachable_region(PhaseGVN const*)`         | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `PhiNode::wait_for_region_igvn(PhaseGVN*)`                   | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `PhiNode::is_data_loop(RegionNode*, Node*, PhaseGVN const*)` | `<unknown>` |

##### `BlockBegin::iterate_preorder(GrowableArray<bool>&, BlockClosure*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
| +200.0% |    +4 |        100.0% |   2 → 6 | `BlockBegin::iterate_preorder(GrowableArray<bool>&, BlockClosure*)` | `<unknown>` |
| +300.0% |    +3 | 50.0% → 66.7% |   1 → 4 | `SubstitutionResolver::block_do(BlockBegin*)`                       | `<unknown>` |
| +100.0% |    +1 | 50.0% → 33.3% |   1 → 2 | `PhiSimplifier::block_do(BlockBegin*)`                              | `<unknown>` |

##### `BlockBegin::iterate_preorder(BlockClosure*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                                              | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `BlockBegin::iterate_preorder(GrowableArray<bool>&, BlockClosure*)` | `<unknown>` |

##### `PhaseChaitin::Simplify()` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `PhaseIFG::remove_node(unsigned int)` | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ----------- |
| +100.0% |    +1 | 33.3% → 28.6% |   1 → 2 | `Matcher::pd_clone_node(Node*, Node*, Matcher::MStack&)`                         | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `ConvI2LNode::ideal_reg() const`                                                 | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `Matcher::pd_clone_address_expressions(AddPNode*, Matcher::MStack&, VectorSet&)` | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `IfTrueNode::Opcode() const`                                                     | `<unknown>` |

##### `RegionNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                               | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------- | ----------- |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `PhiNode::is_unsafe_data_reference(Node*) const`     | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `RegionNode::is_unreachable_region(PhaseGVN const*)` | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node(Node*)`     | `<unknown>` |

##### `TypeInstPtr::add_offset(long) const` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                                             | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `TypeInstPtr::make(TypePtr::PTR, ciKlass*, TypeInterfaces const*, bool, ciObject*, int, int, TypePtr const*, int)` | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Dict::Insert(void*, void*, bool)`                                                                                 | `<unknown>` |

##### `GraphKit::cast_not_null(Node*, bool)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                  | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `TypePtr::xmeet(Type const*) const`     | `<unknown>` |

##### `PhaseIFG::remove_node(unsigned int)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                 | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `IndexSetIterator::advance_and_next()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                                   | Location    |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | ----------- |
|  +0.5% |    +2 | 99.3% → 99.1% | 441 → 443 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
| +33.3% |    +1 |   0.7% → 0.9% |     3 → 4 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 11.1% → 0.0% |   1 → 0 | `Node::pinned() const`       | `<unknown>` |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `ProjNode::pinned() const`   | `<unknown>` |
|     new |    +1 |  0.0% → 8.3% |   0 → 1 | `RegionNode::is_CFG() const` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ----------- |
|  +6.7% |    +3 | 100.0% | 45 → 48 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| +133.3% |    +4 | 12.5% → 25.9% |   3 → 7 | `Matcher::find_shared(Node*)`                   | `<unknown>` |
|  +11.8% |    +2 | 70.8% → 70.4% | 17 → 19 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
|  -50.0% |    -1 |   8.3% → 3.7% |   2 → 1 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `PhiNode::Opcode() const`                       | `<unknown>` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `Matcher::Fixup_Save_On_Entry()`                | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|     new |   +13 |  0.0% → 48.1% |  0 → 13 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| +150.0% |    +3 | 15.4% → 18.5% |   2 → 5 | `semaphore_wait_trap`                           | `<unknown>` |
|  -12.5% |    -1 | 61.5% → 25.9% |   8 → 7 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `G1BatchedTask::work(unsigned int)`             | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                                                                    | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 76.9% |  0 → 10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                  | `<unknown>` |
|    new |    +3 | 0.0% → 23.1% |   0 → 3 | `G1RemSet::scan_collection_set_code_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                  | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +5 | 0.0% → 50.0% |   0 → 5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)`                          | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                        | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                              | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                                                                                                              | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                   | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` | `<unknown>` |

##### `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                  | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                           | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                                                                                                     | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                      | Location    |
| ------: | ----: | -------------: | ------: | --------------------------- | ----------- |
|   +9.1% |    +3 | 100.0% → 97.3% | 33 → 36 | `Parse::do_all_blocks()`    | `<unknown>` |
| removed |    -1 |    3.0% → 0.0% |   1 → 0 | `Parse::build_exits()`      | `<unknown>` |
| removed |    -1 |    3.0% → 0.0% |   1 → 0 | `ciMethod::method_data()`   | `<unknown>` |
| removed |    -1 |    3.0% → 0.0% |   1 → 0 | `Parse::create_entry_map()` | `<unknown>` |
|     new |    +1 |    0.0% → 2.7% |   0 → 1 | `Parse::do_method_entry()`  | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +12.1% |    +4 | 100.0% | 33 → 37 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)` (`<unknown>`)

|  Change | Delta |     % | Samples | Callee                                                                     | Location    |
| ------: | ----: | ----: | ------: | -------------------------------------------------------------------------- | ----------- |
| +100.0% |    +3 | 75.0% |   3 → 6 | `InstanceKlass::initialize_impl(JavaThread*)`                              | `<unknown>` |
| +100.0% |    +1 | 25.0% |   1 → 2 | `ConstantPool::klass_at_impl(constantPoolHandle const&, int, JavaThread*)` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                 | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
| +100.0% |    +1 | 50.0% → 33.3% |   1 → 2 | `BacktraceBuilder::push(Method*, int, JavaThread*)`    | `<unknown>` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `Method::bci_from(unsigned char*) const`               | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `frame::sender_raw(RegisterMap*) const`                | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `frame::sender_for_compiled_frame(RegisterMap*) const` | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                                                               | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` | `<unknown>` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801121000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
|     new |   +15 |  0.0% → 88.2% |  0 → 15 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801084000` |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010d3400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +22 | 0.0% → 100.0% |  0 → 22 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a8010d2400`  |
| removed |   -11 | 100.0% → 0.0% |  11 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `execDFA(DFA, TokenStream, int, SimulatorState)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Callee                                           | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
|  +31.8% |    +7 | 95.7% → 93.5% | 22 → 29 | `execATN(DFA, TokenStream, int, SimulatorState)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +100.0% |    +1 |   4.3% → 6.5% |   1 → 2 | `consume()`                                      | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801104000`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
|     new |   +14 |  0.0% → 93.3% |  0 → 14 | `newInvokeSpecial(Object, Object)`                        | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001095000` |
|     new |    +2 |  0.0% → 13.3% |   0 → 2 | `invokeStaticInit(Object, Object)`                        | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `execATN(DFA, TokenStream, int, SimulatorState)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Callee                                                                       | Location                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +23.8% |    +5 | 95.5% → 89.7% | 21 → 26 | `computeReachSet(DFA, SimulatorState, int, PredictionContextCache)`          | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| +100.0% |    +1 |   4.5% → 6.9% |   1 → 2 | `consume()`                                                                  | `groovyjarjarantlr4.v4.runtime.BufferedTokenStream`    |
|     new |    +1 |   0.0% → 3.4% |   0 → 1 | `evalSemanticContext(DFAState$PredPrediction[], ParserRuleContext, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012da800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -127 | 100.0% → 0.0% | 127 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|     new |   +23 | 0.0% → 100.0% |  0 → 23 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a8012ac000`)

|  Change | Delta |            % | Samples | Callee                                     | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ---------------------------------------------- |
| removed |   -92 | 72.4% → 0.0% |  92 → 0 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$1076`         |
| removed |   -78 | 61.4% → 0.0% |  78 → 0 | `collectViolations(SourceCode, RuleSet)`   | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| removed |   -48 | 37.8% → 0.0% |  48 → 0 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$251`          |
|     new |   +25 | 0.0% → 96.2% |  0 → 25 | `measureRuleProcessingTime(Rule, Closure)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| removed |   -21 | 16.5% → 0.0% |  21 → 0 | `doMethodInvoke(Object, Object[])`         | `org.codehaus.groovy.runtime.dgm$207`          |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012da000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |  -124 | 100.0% → 0.0% | 124 → 0 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |   +23 | 0.0% → 100.0% |  0 → 23 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010abc00`)

|  Change | Delta |           % |  Samples | Callee                             | Location                                            |
| ------: | ----: | ----------: | -------: | ---------------------------------- | --------------------------------------------------- |
|  -71.9% |   -82 |      100.0% | 114 → 32 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
| removed |    -3 | 2.6% → 0.0% |    3 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010dcc00`)

|  Change | Delta |            % |  Samples | Callee                             | Location                                            |
| ------: | ----: | -----------: | -------: | ---------------------------------- | --------------------------------------------------- |
| removed |   -85 | 68.5% → 0.0% |   85 → 0 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|  -53.2% |   -66 |       100.0% | 124 → 58 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a8010aa800` |
|     new |    +1 |  0.0% → 1.7% |    0 → 1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x000000a8010ab000` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8011b0400`)

|  Change | Delta |             % | Samples | Callee                                            | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed |   -92 | 100.0% → 0.0% |  92 → 0 | `invoke(Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d2800`  |
|     new |   +25 |  0.0% → 92.6% |  0 → 25 | `invokeVirtual(Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000a8012ac000` |
|     new |    +2 |   0.0% → 7.4% |   0 → 2 | `invokeSpecial(Object, Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |   0.0% → 7.4% |   0 → 2 | `invokeInterface(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a8011b0000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012e4000`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |   -85 |  98.8% → 0.0% |  85 → 0 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -79 |  91.9% → 0.0% |  79 → 0 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001189000` |
|     new |   +23 | 0.0% → 100.0% |  0 → 23 | `delegate(Object, Object)`                 | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80121a000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                             |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------- |
| removed |   -88 | 100.0% → 0.0% |  88 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +51 | 0.0% → 100.0% |  0 → 51 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801097c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801212400`)

|  Change | Delta |             % | Samples | Callee                                             | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------- |
| removed |  -118 | 100.0% → 0.0% | 118 → 0 | `reinvoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|     new |   +81 | 0.0% → 100.0% |  0 → 81 | `delegate(Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801205c00`)

|  Change | Delta |            % | Samples | Callee                                     | Location                                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |  -118 | 99.2% → 0.0% | 118 → 0 | `invokeVirtual(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |   +85 | 0.0% → 97.7% |  0 → 85 | `delegate(Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |   +79 | 0.0% → 90.8% |  0 → 79 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801188c00` |
| removed |    -1 |  0.8% → 0.0% |   1 → 0 | `invokeSpecial(Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8011ba000`)

|  Change | Delta |             % | Samples | Callee                                                                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -123 |  99.2% → 0.0% | 123 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |   +92 | 0.0% → 100.0% |  0 → 92 | `reinvoke(Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000a801188c00`  |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012acc00`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------------- |
| removed |   -52 | 100.0% → 0.0% |  52 → 0 | `reinvoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|     new |   +25 | 0.0% → 100.0% |  0 → 25 | `reinvoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801188c00` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c9800`)

|  Change | Delta |             % | Samples | Callee                                          | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| removed |   -23 | 100.0% → 0.0% |  23 → 0 | `reinvoke(Object, Object, Object)`              | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010ab000`)

|  Change | Delta |             % | Samples | Callee                                  | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------- |
| removed |   -22 | 100.0% → 0.0% |  22 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `collector(Object, Object, Object)`     | `java.lang.invoke.LambdaForm$MH.0x000000a8010a1000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801181400`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -22 | 100.0% → 0.0% |  22 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |    +7 | 0.0% → 100.0% |   0 → 7 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000a801095000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8012e8000`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -16 |  88.9% → 0.0% |  16 → 0 | `newInvokeSpecial(Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -13 |  72.2% → 0.0% |  13 → 0 | `invokeStaticInit(Object, Object)`                                                          | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `invokeStatic(Object, Object)`                                                              | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010a9800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -135 | 100.0% → 0.0% | 135 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |  +123 | 0.0% → 100.0% | 0 → 123 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000a801094400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a80112c000`)

|  Change | Delta |             % | Samples | Callee                             | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| removed |   -14 |  93.3% → 0.0% |  14 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `invokeStatic(Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000a80102a000` |
| removed |    -2 |  13.3% → 0.0% |   2 → 0 | `invokeStaticInit(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `Compile::Code_Gen()` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                          | Location    |
| -----: | ----: | ------------: | --------: | ----------------------------------------------- | ----------- |
| -20.0% |    -6 | 16.4% → 14.0% |   30 → 24 | `PhaseCFG::do_global_code_motion()`             | `<unknown>` |
|  -2.9% |    -3 | 56.8% → 58.7% | 104 → 101 | `PhaseChaitin::Register_Allocate()`             | `<unknown>` |
| +12.5% |    +3 | 13.1% → 15.7% |   24 → 27 | `Matcher::match()`                              | `<unknown>` |
| -66.7% |    -2 |   1.6% → 0.6% |     3 → 1 | `PhaseBlockLayout::PhaseBlockLayout(PhaseCFG&)` | `<unknown>` |
|  -5.9% |    -1 |          9.3% |   17 → 16 | `PhaseOutput::Output()`                         | `<unknown>` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801208800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -97 | 100.0% → 0.0% |  97 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|     new |   +86 | 0.0% → 100.0% |  0 → 86 | `invokeSpecial(Object, Object, Object, Object)`                                             | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `ConnectionGraph::compute_escape()` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                                                    | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -75.0% |    -3 | 33.3% → 100.0% |   4 → 1 | `ConnectionGraph::split_unique_types(GrowableArray<Node*>&, GrowableArray<ArrayCopyNode*>&, GrowableArray<MergeMemNode*>&)`                                               | `<unknown>` |
| removed |    -3 |   25.0% → 0.0% |   3 → 0 | `ConnectionGraph::complete_connection_graph(GrowableArray<PointsToNode*>&, GrowableArray<JavaObjectNode*>&, GrowableArray<JavaObjectNode*>&, GrowableArray<FieldNode*>&)` | `<unknown>` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `ConnectionGraph::add_call_node(CallNode*)`                                                                                                                               | `<unknown>` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `BoolNode::Opcode() const`                                                                                                                                                | `<unknown>` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `ConnectionGraph::add_node_to_connection_graph(Node*, Unique_Node_List*)`                                                                                                 | `<unknown>` |

##### `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                                    | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------- | ----------- |
| -91.7% |   -11 | 100.0% → 50.0% |  12 → 1 | `ConnectionGraph::compute_escape()`                       | `<unknown>` |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `ConnectionGraph::add_edge(PointsToNode*, PointsToNode*)` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                                                                                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +200.0% |    +2 | 5.6% → 30.0% |   1 → 3 | `PhaseChaitin::split_DEF(Node*, Block*, int, unsigned int, Node**, Node**, GrowableArray<unsigned int>, int)`                                           | `<unknown>` |
| removed |    -1 |  5.6% → 0.0% |   1 → 0 | `CProjNode::is_block_proj() const`                                                                                                                      | `<unknown>` |
| removed |    -1 |  5.6% → 0.0% |   1 → 0 | `PhaseChaitin::split_USE(MachSpillCopyNode::SpillType, Node*, Block*, Node*, unsigned int, unsigned int, bool, bool, GrowableArray<unsigned int>, int)` | `<unknown>` |
| removed |    -1 |  5.6% → 0.0% |   1 → 0 | `branchNode::is_block_proj() const`                                                                                                                     | `<unknown>` |
| removed |    -1 |  5.6% → 0.0% |   1 → 0 | `Node::rematerialize() const`                                                                                                                           | `<unknown>` |

##### `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
|  -75.0% |    -3 | 33.3% → 20.0% |   4 → 1 | `Node_Backward_Iterator::next()`                          | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `TypeRawPtr::add_offset(long) const`                      | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `MachCallNode::bottom_type() const`                       | `<unknown>` |
|  -33.3% |    -1 | 25.0% → 40.0% |   3 → 2 | `PhaseCFG::hoist_to_cheaper_block(Block*, Block*, Node*)` | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `PhaseCFG::insert_anti_dependences(Block*, Node*, bool)`  | `<unknown>` |

##### `PhaseCFG::do_global_code_motion()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
|  -14.8% |    -4 | 90.0% → 95.8% | 27 → 23 | `PhaseCFG::global_code_motion()`       | `<unknown>` |
|  -50.0% |    -1 |   6.7% → 4.2% |   2 → 1 | `PhaseCFG::build_dominator_tree()`     | `<unknown>` |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `PhaseCFG::estimate_block_frequency()` | `<unknown>` |

##### `PhaseIdealLoop::try_sink_out_of_loop(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                             | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::ctrl_of_all_uses_out_of_loop(Node const*, Node*, IdealLoopTree*)` | `<unknown>` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::compute_early_ctrl(Node*, Node*)`                                 | `<unknown>` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `XorLNode::Opcode() const`                                                         | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks_post(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                           | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | ----------- |
| removed |    -6 | 85.7% → 0.0% |   6 → 0 | `PhaseIdealLoop::try_sink_out_of_loop(Node*)`    | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::try_merge_identical_ifs(Node*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ----------- |
|  -41.7% |    -5 |  15.0% → 9.3% |  12 → 7 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
|  -66.7% |    -4 |   7.5% → 2.7% |   6 → 2 | `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)`           | `<unknown>` |
|  -66.7% |    -4 |   7.5% → 2.7% |   6 → 2 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |
|  +33.3% |    +3 | 11.3% → 16.0% |  9 → 12 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| +100.0% |    +3 |   3.8% → 8.0% |   3 → 6 | `IdealLoopTree::loop_predication(PhaseIdealLoop*)`                      | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                 | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
| +66.7% |    +2 | 14.3% → 31.3% |   3 → 5 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)` | `<unknown>` |
| -66.7% |    -2 |  14.3% → 6.3% |   3 → 1 | `ProjNode::is_uncommon_trap_proj(Deoptimization::DeoptReason)`         | `<unknown>` |
|    new |    +2 |  0.0% → 12.5% |   0 → 2 | `Node::unique_ctrl_out_or_null() const`                                | `<unknown>` |
| -33.3% |    -1 | 14.3% → 12.5% |   3 → 2 | `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)`              | `<unknown>` |
|    new |    +1 |   0.0% → 6.3% |   0 → 1 | `Compile::can_alias(TypePtr const*, int)`                              | `<unknown>` |

##### `ciBytecodeStream::get_method(bool&, ciSignature**)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -60.0% |    -3 | 50.0% → 40.0% |   5 → 2 | `ciEnv::get_method_by_index_impl(constantPoolHandle const&, int, Bytecodes::Code, ciInstanceKlass*)` | `<unknown>` |
|  -66.7% |    -2 | 30.0% → 20.0% |   3 → 1 | `ciObjectFactory::get_metadata(Metadata*)`                                                           | `<unknown>` |
| +100.0% |    +1 | 10.0% → 40.0% |   1 → 2 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`                           | `<unknown>` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `ciBytecodeStream::has_local_signature()`                                                            | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
|  -25.0% |    -4 | 21.9% → 17.6% | 16 → 12 | `Compilation::emit_code_body()`                          | `<unknown>` |
|     new |    +2 |   0.0% → 2.9% |   0 → 2 | `ciMethod::ensure_method_data()`                         | `<unknown>` |
|   -3.4% |    -1 | 39.7% → 41.2% | 29 → 28 | `Compilation::emit_lir()`                                | `<unknown>` |
|   -3.7% |    -1 | 37.0% → 38.2% | 27 → 26 | `Compilation::build_hir()`                               | `<unknown>` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `CodeBuffer::initialize_section_size(CodeSection*, int)` | `<unknown>` |

##### `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                           | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ----------- |
|  -85.7% |    -6 | 58.3% → 14.3% |   7 → 1 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`               | `<unknown>` |
| +150.0% |    +3 | 16.7% → 71.4% |   2 → 5 | `PhaseIdealLoop::split_if_with_blocks_pre(Node*)`                | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `SafePointScalarObjectNode::Opcode() const`                      | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::do_split_if(Node*, RegionNode**, RegionNode**)` | `<unknown>` |

##### `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                        | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `ciTypeFlow::StateVector::do_new(ciBytecodeStream*)`          | `<unknown>` |
|  -50.0% |    -1 | 28.6% → 50.0% |   2 → 1 | `ciTypeFlow::StateVector::do_invoke(ciBytecodeStream*, bool)` | `<unknown>` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `ciTypeFlow::StateVector::do_getstatic(ciBytecodeStream*)`    | `<unknown>` |

##### `ciTypeFlow::flow_block(ciTypeFlow::Block*, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                           | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- | ----------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)` | `<unknown>` |

##### `ciTypeFlow::flow_types()` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                               | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -4 | 85.7% → 100.0% |   6 → 2 | `ciTypeFlow::df_flow_types(ciTypeFlow::Block*, bool, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `ciTypeFlow::flow_block(ciTypeFlow::Block*, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)`          | `<unknown>` |

##### `ciTypeFlow::do_flow()` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                     | Location    |
| -----: | ----: | -----: | ------: | -------------------------- | ----------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `ciTypeFlow::flow_types()` | `<unknown>` |

##### `ciMethod::get_flow_analysis()` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------- | ----------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `ciTypeFlow::do_flow()` | `<unknown>` |

##### `GraphBuilder::invoke(Bytecodes::Code)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                          | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | ----------- |
| -33.3% |    -5 | 88.2% → 83.3% | 15 → 10 | `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                | `<unknown>` |
| -50.0% |    -1 |  11.8% → 8.3% |   2 → 1 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                            | `<unknown>` |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `ciObjectFactory::get_metadata(Metadata*)`                                                      | `<unknown>` |
|    new |    +1 |   0.0% → 8.3% |   0 → 1 | `ciMethod::find_monomorphic_target(ciInstanceKlass*, ciInstanceKlass*, ciInstanceKlass*, bool)` | `<unknown>` |

##### `GraphBuilder::iterate_bytecodes_for_block(int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -29.4% |    -5 | 81.0% → 75.0% | 17 → 12 | `GraphBuilder::invoke(Bytecodes::Code)`       | `<unknown>` |
|  -42.9% |    -3 | 33.3% → 25.0% |   7 → 4 | `GraphBuilder::access_field(Bytecodes::Code)` | `<unknown>` |
| +100.0% |    +1 |  4.8% → 12.5% |   1 → 2 | `BlockBegin::try_merge(ValueStack*, bool)`    | `<unknown>` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `GraphBuilder::instance_of(int)`              | `<unknown>` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `GraphBuilder::check_cast(int)`               | `<unknown>` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -71.4% |    -5 | 58.3% → 50.0% |   7 → 2 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                               | `<unknown>` |
|  -75.0% |    -3 | 33.3% → 25.0% |   4 → 1 | `ClassFileParser::parse_methods(ClassFileStream const*, bool, bool*, bool*, bool*, JavaThread*)`                                              | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`                                                                                  | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `ClassFileParser::parse_classfile_attributes(ClassFileStream const*, ConstantPool*, ClassFileParser::ClassAnnotationCollector*, JavaThread*)` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                         | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -38.5% |    -5 | 86.7% → 100.0% |  13 → 8 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| removed |    -2 |   13.3% → 0.0% |   2 → 0 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -4 | 75.0% → 100.0% |   6 → 2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `CodeCache::allocate(int, CodeBlobType, bool, CodeBlobType)`                                                                                                                                                                                                      | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `InstanceKlass::add_dependent_nmethod(nmethod*)`                                                                                                                                                                                                                  | `<unknown>` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                      | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------- | ----------- |
| -66.7% |    -8 | 92.3% → 50.0% |  12 → 4 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`        | `<unknown>` |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `FieldLayoutBuilder::build_layout()`                                        | `<unknown>` |
|    new |    +1 |  0.0% → 12.5% |   0 → 1 | `ClassFileParser::parse_super_class(ConstantPool*, int, bool, JavaThread*)` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- | ----------- |
|  -52.9% |    -9 | 54.8% → 30.8% |  17 → 8 | `ParseGenerator::generate(JVMState*)`                                             | `<unknown>` |
| removed |    -3 |   9.7% → 0.0% |   3 → 0 | `GraphKit::kill_dead_locals()`                                                    | `<unknown>` |
| +300.0% |    +3 |  3.2% → 15.4% |   1 → 4 | `GraphKit::record_profiled_arguments_for_speculation(ciMethod*, Bytecodes::Code)` | `<unknown>` |
|  -66.7% |    -2 |   9.7% → 3.8% |   3 → 1 | `LibraryIntrinsic::generate(JVMState*)`                                           | `<unknown>` |
| removed |    -2 |   6.5% → 0.0% |   2 → 0 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                              | `<unknown>` |

##### `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -80.0% |    -4 | 71.4% → 50.0% |   5 → 1 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                                           | `<unknown>` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `SymbolTable::new_symbols(ClassLoaderData*, constantPoolHandle const&, int, char const**, int*, int*, unsigned int*)` | `<unknown>` |

##### `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                               | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------- | ----------- |
| -17.4% |    -4 | 100.0% | 23 → 19 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------- | ----------- |
| -17.4% |    -4 | 100.0% | 23 → 19 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `CodeBuffer::copy_code_to(CodeBlob*)`                                                                                         | `<unknown>` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `sys_icache_invalidate`                                                                                                       | `<unknown>` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `G1CollectedHeap::register_nmethod(nmethod*)`                                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `CompiledMethod::CompiledMethod(Method*, char const*, CompilerType, int, int, CodeBuffer*, int, int, OopMapSet*, bool, bool)` | `<unknown>` |

##### `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                        | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | ----------- |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `IdealLoopTree::adjust_loop_exit_prob(PhaseIdealLoop*)`       | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `CmpINode::Opcode() const`                                    | `<unknown>` |
|  -33.3% |    -1 | 50.0% → 100.0% |   3 → 2 | `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)` | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::do_unswitching(IdealLoopTree*, Node_List&)`  | `<unknown>` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `CmpPNode::Opcode() const`                                    | `<unknown>` |

##### `SymbolTable::lookup_only(char const*, int, unsigned int&)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                       | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------ | ----------- |
|  -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `SymbolTable::do_lookup(char const*, int, unsigned long)`    | `<unknown>` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `SymbolTable::lookup_shared(char const*, int, unsigned int)` | `<unknown>` |

##### `InterpreterRuntime::ldc(JavaThread*, bool)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                     | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `pthread_jit_write_protect_np`                                             | `<unknown>` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `ConstantPool::klass_at_impl(constantPoolHandle const&, int, JavaThread*)` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -3.8% |    -3 | 100.0% | 79 → 76 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                             | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
|  -44.4% |    -4 | 90.0% → 71.4% |   9 → 5 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
| +100.0% |    +1 | 10.0% → 28.6% |   1 → 2 | `SystemDictionary::find_or_define_helper(Symbol*, Handle, InstanceKlass*, JavaThread*)`                            | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                              | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| -30.0% |    -3 | 100.0% |  10 → 7 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                          | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| -30.0% |    -3 | 100.0% |  10 → 7 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` | `<unknown>` |

##### `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                         | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ----------- |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `CodeCache::find_blob(void*)`                                  | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `CompiledIC::ic_destination() const`                           | `<unknown>` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `RelocIterator::advance_over_prefix()`                         | `<unknown>` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)` | `<unknown>` |

##### `InterpreterRuntime::frequency_counter_overflow_inner(JavaThread*, unsigned char*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `CompilationPolicy::event(methodHandle const&, methodHandle const&, int, int, CompLevel, CompiledMethod*, JavaThread*)` | `<unknown>` |

##### `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)` | `<unknown>` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a8010c8800`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -21 | 100.0% → 0.0% |  21 → 0 | `delegate(Object, Object)`                                                                  | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +8 |  0.0% → 80.0% |   0 → 8 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801088800` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000a801087400`  |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +77.8% |    +7 | 1.5% → 2.5% |  9 → 16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                        |
|     new |    +4 | 0.0% → 0.6% |   0 → 4 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `semaphore_wait_trap` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` ← `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `NonSafepointEmitter::emit_non_safepoint()` ← `NonSafepointEmitter::observe_instruction(Node*, int)` ← `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                     |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                                                                                                              |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `PhaseCFG::schedule_early(VectorSet&, Node_Stack&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +50.0% |    +2 | 0.7% → 1.0% |   4 → 6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +100.0% |    +2 | 0.3% → 0.6% |   2 → 4 | `PhaseChaitin::build_ifg_virtual()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::remix_address_expressions(Node*)` ← `PhaseIdealLoop::split_if_with_blocks_pre(Node*)` ← `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` ← `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Scheduling::DoScheduling()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `RegMask::is_aligned_pairs() const` ← `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` ← `PhaseChaitin::split_DEF(Node*, Block*, int, unsigned int, Node**, Node**, GrowableArray<unsigned int>, int)` ← `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Node::is_CFG() const` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)` ← `OopRecorder::find_index(Metadata*)` ← `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `LIR_Assembler::record_non_safepoint_debug_info()` ← `LIR_Assembler::process_debug_info(LIR_Op*)` ← `LIR_Assembler::emit_lir_list(LIR_List*)` ← `LIR_Assembler::emit_code(BlockList*)` ← `Compilation::emit_code_body()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                             |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCCP::transform(Node*)` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhiNode::Ideal(PhaseGVN*, bool)` ← `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -46.2% |    -6 | 2.1% → 1.1% |  13 → 7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -5 | 0.8% → 0.0% |   5 → 0 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -62.5% |    -5 | 1.3% → 0.5% |   8 → 3 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -83.3% |    -5 | 1.0% → 0.2% |   6 → 1 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` ← `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `LIR_Assembler::record_non_safepoint_debug_info()` ← `LIR_Assembler::process_debug_info(LIR_Op*)` ← `LIR_Assembler::emit_lir_list(LIR_List*)` ← `LIR_Assembler::emit_code(BlockList*)` ← `Compilation::emit_code_body()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `Node_Backward_Iterator::next()` ← `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `Compile::final_graph_reshaping_walk(Node_Stack&, Node*, Final_Reshape_Counts&, Unique_Node_List&)` ← `Compile::final_graph_reshaping()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Compile::identify_useful_nodes(Unique_Node_List&)` ← `Matcher::specialize_generic_vector_operands()` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -50.0% |    -2 | 0.7% → 0.3% |   4 → 2 | `PhaseChaitin::merge_multidefs()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::try_sink_out_of_loop(Node*)` ← `PhaseIdealLoop::split_if_with_blocks_post(Node*)` ← `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_tree()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseCCP::fetch_next_node(Unique_Node_List&)` ← `PhaseCCP::analyze()` ← `PhaseCCP::PhaseCCP(PhaseIterGVN*)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `sys_icache_invalidate` ← `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` ← `nmethod::new_nmethod(methodHandle const&, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` ← `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseCFG::select(Block*, Node_List&, GrowableArray<int>&, VectorSet&, unsigned int, long*)` ← `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Node::unique_ctrl_out_or_null() const` ← `ProjNode::is_uncommon_trap_proj(Deoptimization::DeoptReason)` ← `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `CProjNode::is_block_proj() const` ← `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `Symbol::decrement_refcount()` ← `ClassPathImageEntry::open_stream_for_loader(JavaThread*, char const*, ClassLoaderData*)` ← `ClassLoader::load_class(Symbol*, bool, JavaThread*)` ← `SystemDictionary::load_instance_class_impl(Symbol*, Handle, JavaThread*)` ← `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)` ← `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)` ← `SystemDictionary::resolve_or_fail(Symbol*, Handle, Handle, bool, JavaThread*)` ← `ConstantPool::klass_at_impl(constantPoolHandle const&, int, JavaThread*)` ← `InterpreterRuntime::ldc(JavaThread*, bool)` ← `<init>(Class, Class)` (`java.beans.BeanDescriptor`) ← `getTargetBeanDescriptor()` (`java.beans.Introspector`) ← `getBeanInfo()` ← `getBeanInfo(Class)` ← `getBeanInfo(Class, Class, int)` ← `<init>(Class, Class, int)` ← `getBeanInfo(Class)` ← `getBeanInfo(Class, Class, int)` ← `<init>(Class, Class, int)` ← `getBeanInfo(Class)` ← `lambda$addProperties$25()` (`groovy.lang.MetaClassImpl`) ← `run()` (`groovy.lang.MetaClassImpl$$Lambda.0x000000700103fb70`) ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction)` ← `doPrivileged(PrivilegedExceptionAction)` (`groovy.lang.MetaClassImpl`) ← `addProperties()` ← `reinitialize()` ← `initialize()` ← `<init>(int, boolean)` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`) ← `<init>()` ← `<clinit>()` (`groovy.lang.GroovySystem`) ← `<clinit>()` (`org.codehaus.groovy.runtime.InvokerHelper`) ← `getDefaultMetaClass()` (`groovy.lang.GroovyObjectSupport`) ← `<init>()` ← `<init>(Object, Object)` (`groovy.lang.Closure`) ← `<init>(Object)` ← `<init>(Object)` (`groovy.lang.Closure$1`) ← `<clinit>()` (`groovy.lang.Closure`) ← `<clinit>()` (`org.codenarc.CodeNarc`) |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `MachSpillCopyNode::ideal_reg() const` ← `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` ← `PhaseChaitin::split_DEF(Node*, Block*, int, unsigned int, Node**, Node**, GrowableArray<unsigned int>, int)` ← `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
