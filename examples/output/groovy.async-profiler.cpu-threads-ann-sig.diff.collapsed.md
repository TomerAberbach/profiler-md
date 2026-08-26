# Sampling profile diff

Collected 609 samples → 611 samples (+2 samples, +0.3%).

| Category          |  Change | Delta |             % |   Samples |
| ----------------- | ------: | ----: | ------------: | --------: |
| Compiler          |   -0.3% |    -1 | 56.8% → 56.5% | 346 → 345 |
| Native            |   +1.1% |    +2 | 29.1% → 29.3% | 177 → 179 |
| Standard library  |   +1.3% |    +1 | 12.6% → 12.8% |   77 → 78 |
| JIT               |    0.0% |     0 |          1.3% |         8 |
| Garbage collector |     new |    +1 |   0.0% → 0.2% |     0 → 1 |
| Ours              | removed |    -1 |   0.2% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                             | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| +233.3% |    +7 | 0.5% → 1.6% |  3 → 10 | `__psynch_cvwait`                                                                                    | `<unknown>` |
| +116.7% |    +7 | 1.0% → 2.1% |  6 → 13 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                             | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                      | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `ciObjectFactory::get_metadata(Metadata*)`                                                           | `<unknown>` |
|  +44.4% |    +4 | 1.5% → 2.1% |  9 → 13 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                    | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `Arena::contains(void const*) const`                                                                 | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `PhaseCCP::transform(Node*)`                                                                         | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseOutput::shorten_branches(unsigned int*)`                                                       | `<unknown>` |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                 | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `MultiNode::is_CFG() const`                                                                          | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `Node::is_CFG() const`                                                                               | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `AddPNode::Ideal(PhaseGVN*, bool)`                                                                   | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `vmSymbols::find_sid(Symbol const*)`                                                                 | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)`                                                        | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `ciTypeFlow::df_flow_types(ciTypeFlow::Block*, bool, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `IndexSet::initialize(unsigned int)`                                                                 | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIterGVN::transform_old(Node*)`                                                                 | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Type::hashcons()`                                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Compile::flatten_alias_type(TypePtr const*) const`                                                  | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::Dominators()`                                                                       | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                                             | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| +116.7% |    +7 | 1.0% → 2.1% |  6 → 13 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                             | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                      | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `ciObjectFactory::get_metadata(Metadata*)`                                                           | `<unknown>` |
|  +44.4% |    +4 | 1.5% → 2.1% |  9 → 13 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                    | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `PhaseCCP::transform(Node*)`                                                                         | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseOutput::shorten_branches(unsigned int*)`                                                       | `<unknown>` |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                 | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `MultiNode::is_CFG() const`                                                                          | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `Node::is_CFG() const`                                                                               | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `AddPNode::Ideal(PhaseGVN*, bool)`                                                                   | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseCFG::schedule_pinned_nodes(VectorSet&)`                                                        | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `ciTypeFlow::df_flow_types(ciTypeFlow::Block*, bool, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `IndexSet::initialize(unsigned int)`                                                                 | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIterGVN::transform_old(Node*)`                                                                 | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Type::hashcons()`                                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Compile::flatten_alias_type(TypePtr const*) const`                                                  | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::Dominators()`                                                                       | `<unknown>` |
|  +50.0% |    +2 | 0.7% → 1.0% |   4 → 6 | `PhaseLive::compute(unsigned int)`                                                                   | `<unknown>` |
|  +50.0% |    +2 | 0.7% → 1.0% |   4 → 6 | `PhaseIdealLoop::build_loop_tree()`                                                                  | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)`                            | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                                    | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +233.3% |    +7 | 0.5% → 1.6% |  3 → 10 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Interval::add_use_pos(int, IntervalUseKind)`                                                                                                                               | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `_qsort`                                                                                                                                                                    | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `trampoline_stub_Relocation::get_trampoline_for(unsigned char*, nmethod*)`                                                                                                  | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `MemAllocator::allocate() const`                                                                                                                                            | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)`                                                                                              | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `ClassFileParser::parse_method(ClassFileStream const*, bool, ConstantPool const*, bool*, JavaThread*)`                                                                      | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`                                                                                        | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                                            | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                                                                                                 | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `Chunk::chop()`                                                                                                                                                             | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `G1CardSet::add_card(unsigned int, unsigned int, bool)`                                                                                                                     | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `Metaspace::allocate(ClassLoaderData*, unsigned long, MetaspaceObj::Type, JavaThread*)`                                                                                     | `<unknown>` |
|  +50.0% |    +1 | 0.3% → 0.5% |   2 → 3 | `bsearch`                                                                                                                                                                   | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                 | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `match(Matcher, int, CharSequence)`                                                      | `java.util.regex.Pattern$CharPropertyGreedy`                           |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `equals(Object)`                                                                         | `java.lang.String`                                                     |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `update(int, int)`                                                                       | `groovyjarjarantlr4.v4.runtime.misc.MurmurHash`                        |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `<init>(int)`                                                                            | `java.lang.AbstractStringBuilder`                                      |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                 |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `loadClassOrNull(String, boolean)`                                                       | `jdk.internal.loader.BuiltinClassLoader`                               |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `getCachedContext(PredictionContext, ConcurrentMap, PredictionContext$IdentityHashMap)`  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`                  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `get(Object)`                                                                            | `java.util.HashMap`                                                    |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                | `sun.reflect.annotation.AnnotationParser`                              |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `match(CharStream, int)`                                                                 | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator`                  |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `readUTF(DataInput)`                                                                     | `java.io.DataInputStream`                                              |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `registerMethods(Class, boolean, boolean, Map)`                                          | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `processPropertyDescriptors()`                                                           | `java.beans.Introspector`                                              |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `deserialize(char[])`                                                                    | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer`                    |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `find(int, Object, Class)`                                                               | `java.util.HashMap$TreeNode`                                           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `initCEN()`                                                                              | `jdk.nio.zipfs.ZipFileSystem`                                          |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)`                            | `java.lang.invoke.MethodHandleNatives`                                 |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `findSpecies(Object)`                                                                    | `java.lang.invoke.ClassSpecializer`                                    |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `getProtocol()`                                                                          | `java.net.URL`                                                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `setMetaDataMap(Map)`                                                                    | `org.apache.groovy.parser.antlr4.GroovyParser$GroovyParserRuleContext` |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `itable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -77.8% |    -7 | 1.5% → 0.3% |   9 → 2 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                        | `<unknown>`                                            |
|  -46.2% |    -6 | 2.1% → 1.1% |  13 → 7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                            | `<unknown>`                                            |
|  -75.0% |    -6 | 1.3% → 0.3% |   8 → 2 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                    | `<unknown>`                                            |
|  -38.5% |    -5 | 2.1% → 1.3% |  13 → 8 | `__psynch_mutexwait`                                                                                          | `<unknown>`                                            |
|  -71.4% |    -5 | 1.1% → 0.3% |   7 → 2 | `_platform_memset`                                                                                            | `<unknown>`                                            |
|  -71.4% |    -5 | 1.1% → 0.3% |   7 → 2 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                  | `<unknown>`                                            |
|  -57.1% |    -4 | 1.1% → 0.5% |   7 → 3 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                        | `<unknown>`                                            |
|  -66.7% |    -4 | 1.0% → 0.3% |   6 → 2 | `Node::dominates(Node*, Node_List&)`                                                                          | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `BytecodeStream::next()`                                                                                      | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhiNode::Opcode() const`                                                                                     | `<unknown>`                                            |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `PhaseIFG::effective_degree(unsigned int) const`                                                              | `<unknown>`                                            |
|  -42.9% |    -3 | 1.1% → 0.7% |   7 → 4 | `PhaseOutput::BuildOopMaps()`                                                                                 | `<unknown>`                                            |
|  -50.0% |    -3 | 1.0% → 0.5% |   6 → 3 | `PhaseChaitin::post_allocate_copy_removal()`                                                                  | `<unknown>`                                            |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `Matcher::match_tree(Node const*)`                                                                            | `<unknown>`                                            |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)`                                     | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `RegMask::is_misaligned_pair() const`                                                                         | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `CProjNode::is_CFG() const`                                                                                   | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `Matcher::find_shared(Node*)`                                                                                 | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `semaphore_wait_trap`                                                                                         | `<unknown>`                                            |
|  -50.0% |    -2 | 0.7% → 0.3% |   4 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                     | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  -77.8% |    -7 | 1.5% → 0.3% |   9 → 2 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
|  -46.2% |    -6 | 2.1% → 1.1% |  13 → 7 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
|  -75.0% |    -6 | 1.3% → 0.3% |   8 → 2 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                   | `<unknown>` |
|  -71.4% |    -5 | 1.1% → 0.3% |   7 → 2 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
|  -57.1% |    -4 | 1.1% → 0.5% |   7 → 3 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
|  -66.7% |    -4 | 1.0% → 0.3% |   6 → 2 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhiNode::Opcode() const`                                                    | `<unknown>` |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `PhaseIFG::effective_degree(unsigned int) const`                             | `<unknown>` |
|  -42.9% |    -3 | 1.1% → 0.7% |   7 → 4 | `PhaseOutput::BuildOopMaps()`                                                | `<unknown>` |
|  -50.0% |    -3 | 1.0% → 0.5% |   6 → 3 | `PhaseChaitin::post_allocate_copy_removal()`                                 | `<unknown>` |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `Matcher::match_tree(Node const*)`                                           | `<unknown>` |
|  -75.0% |    -3 | 0.7% → 0.2% |   4 → 1 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)`    | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `RegMask::is_misaligned_pair() const`                                        | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `CProjNode::is_CFG() const`                                                  | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `Matcher::find_shared(Node*)`                                                | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Compile::find_alias_type(TypePtr const*, bool, ciField*)`                   | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Unique_Node_List::remove_useless_nodes(VectorSet&)`                         | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIterGVN::PhaseIterGVN(PhaseGVN*)`                                      | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `CodeBuffer::initialize_section_size(CodeSection*, int)`                     | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::has_local_phi_input(Node*)`                                 | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -38.5% |    -5 | 2.1% → 1.3% |  13 → 8 | `__psynch_mutexwait`                                                                                    | `<unknown>` |
|  -71.4% |    -5 | 1.1% → 0.3% |   7 → 2 | `_platform_memset`                                                                                      | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `BytecodeStream::next()`                                                                                | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `semaphore_wait_trap`                                                                                   | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Dict::doubhash()`                                                                                      | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `SignatureStream::next()`                                                                               | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `NullCheckEliminator::iterate_one(BlockBegin*)`                                                         | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)`              | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `__psynch_mutexdrop`                                                                                    | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `_isort`                                                                                                | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `Method::can_be_statically_bound() const`                                                               | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `CompressedLineNumberWriteStream::write_pair_regular(int, int)`                                         | `<unknown>` |
|  -25.0% |    -1 | 0.7% → 0.5% |   4 → 3 | `Dict::Insert(void*, void*, bool)`                                                                      | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)`                                      | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)`                                  | `<unknown>` |
|   -6.7% |    -1 | 2.5% → 2.3% | 15 → 14 | `tlv_get_addr`                                                                                          | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `__open_nocancel`                                                                                       | `<unknown>` |
|  -25.0% |    -1 | 0.7% → 0.5% |   4 → 3 | `stat64`                                                                                                | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `SymbolTable::lookup_shared(char const*, int, unsigned int)`                                            | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  -50.0% |    -2 | 0.7% → 0.3% |   4 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                             |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `equals(Object)`                                                                                              | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache$PredictionContextAndInt` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `getOptimizedTransition(int)`                                                                                 | `groovyjarjarantlr4.v4.runtime.atn.ATNState`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getReachableTarget(ATNConfig, Transition, int)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                             |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000801093400`                               |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `isLatin1()`                                                                                                  | `java.lang.String`                                                                 |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `visitPathExpression(GroovyParser$PathExpressionContext)`                                                     | `org.apache.groovy.parser.antlr4.AstBuilder`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getMetaClass()`                                                                                              | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector`                          |
|  -50.0% |    -1 | 0.3% → 0.2% |   2 → 1 | `resize()`                                                                                                    | `java.util.HashMap`                                                                |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `equals(ArrayPredictionContext, Set)`                                                                         | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`                         |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)`                                                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                             |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getNode(Object)`                                                                                             | `java.util.HashMap`                                                                |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)`                                                                                    | `org.codehaus.groovy.ast.expr.PropertyExpression`                                  |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)`                                                             | `org.codehaus.groovy.ast.CodeVisitorSupport`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `visitBlockStatement(BlockStatement)`                                                                         | `org.codehaus.groovy.ast.CodeVisitorSupport`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `parseSig(String, Class)`                                                                                     | `sun.reflect.annotation.AnnotationParser`                                          |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `removeIf(Predicate)`                                                                                         | `java.util.Collection`                                                             |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getTargetPropertyInfo()`                                                                                     | `java.beans.Introspector`                                                          |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `compile()`                                                                                                   | `java.util.regex.Pattern`                                                          |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getTargetMethodInfo()`                                                                                       | `java.beans.Introspector`                                                          |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
|  -33.3% |    -1 | 0.5% → 0.3% |   3 → 2 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xb)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |             % |   Samples | Function                                                                                             | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  +13.2% |   +17 | 21.2% → 23.9% | 129 → 146 | `Compile::Optimize()`                                                                                | `<unknown>` |
|  +25.6% |   +11 |   7.1% → 8.8% |   43 → 54 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                               | `<unknown>` |
|  +11.6% |    +8 | 11.3% → 12.6% |   69 → 77 | `PhaseIdealLoop::build_and_optimize()`                                                               | `<unknown>` |
|  +11.6% |    +8 | 11.3% → 12.6% |   69 → 77 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                        | `<unknown>` |
|  +53.3% |    +8 |   2.5% → 3.8% |   15 → 23 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                             | `<unknown>` |
| +233.3% |    +7 |   0.5% → 1.6% |    3 → 10 | `CompileQueue::get(CompilerThread*)`                                                                 | `<unknown>` |
|  +50.0% |    +6 |   2.0% → 2.9% |   12 → 18 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`                                      | `<unknown>` |
|   +7.3% |    +6 | 13.5% → 14.4% |   82 → 88 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                              | `<unknown>` |
|  +35.3% |    +6 |   2.8% → 3.8% |   17 → 23 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                    | `<unknown>` |
|  +54.5% |    +6 |   1.8% → 2.8% |   11 → 17 | `PhaseLive::compute(unsigned int)`                                                                   | `<unknown>` |
|  +55.6% |    +5 |   1.5% → 2.3% |    9 → 14 | `Type::hashcons()`                                                                                   | `<unknown>` |
|     new |    +5 |   0.0% → 0.8% |     0 → 5 | `GraphKit::uncommon_trap(int, ciKlass*, char const*, bool, bool)`                                    | `<unknown>` |
| +100.0% |    +4 |   0.7% → 1.3% |     4 → 8 | `ciTypeFlow::df_flow_types(ciTypeFlow::Block*, bool, ciTypeFlow::StateVector*, ciTypeFlow::JsrSet*)` | `<unknown>` |
|  +66.7% |    +4 |   1.0% → 1.6% |    6 → 10 | `ciTypeFlow::flow_types()`                                                                           | `<unknown>` |
|  +66.7% |    +4 |   1.0% → 1.6% |    6 → 10 | `ciTypeFlow::do_flow()`                                                                              | `<unknown>` |
|  +66.7% |    +4 |   1.0% → 1.6% |    6 → 10 | `ciMethod::get_flow_analysis()`                                                                      | `<unknown>` |
| +133.3% |    +4 |   0.5% → 1.1% |     3 → 7 | `PhaseCCP::transform(Node*)`                                                                         | `<unknown>` |
| +133.3% |    +4 |   0.5% → 1.1% |     3 → 7 | `PhaseCCP::do_transform()`                                                                           | `<unknown>` |
| +133.3% |    +4 |   0.5% → 1.1% |     3 → 7 | `Type::cmp(Type const*, Type const*)`                                                                | `<unknown>` |
|  +30.8% |    +4 |   2.1% → 2.8% |   13 → 17 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                | `<unknown>` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +400.0% |    +8 |   0.3% → 1.6% |    2 → 10 | `Monitor::wait(unsigned long long)`                                                                                                                                                                                                                                 | `<unknown>` |
| +400.0% |    +8 |   0.3% → 1.6% |    2 → 10 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`                                                                                                                                                                                            | `<unknown>` |
| +233.3% |    +7 |   0.5% → 1.6% |    3 → 10 | `__psynch_cvwait`                                                                                                                                                                                                                                                   | `<unknown>` |
| +233.3% |    +7 |   0.5% → 1.6% |    3 → 10 | `PlatformMonitor::wait(unsigned long long)`                                                                                                                                                                                                                         | `<unknown>` |
|   +1.3% |    +6 | 75.0% → 75.8% | 457 → 463 | `_pthread_start`                                                                                                                                                                                                                                                    | `<unknown>` |
|   +1.3% |    +6 | 75.0% → 75.8% | 457 → 463 | `thread_start`                                                                                                                                                                                                                                                      | `<unknown>` |
|  +75.0% |    +6 |   1.3% → 2.3% |    8 → 14 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                                                                                                                                                                                                                     | `<unknown>` |
| +300.0% |    +6 |   0.3% → 1.3% |     2 → 8 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                                                                                                                                                 | `<unknown>` |
| +300.0% |    +6 |   0.3% → 1.3% |     2 → 8 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |
| +300.0% |    +6 |   0.3% → 1.3% |     2 → 8 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)`                                                                                                                                                                                                            | `<unknown>` |
| +300.0% |    +6 |   0.3% → 1.3% |     2 → 8 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                                             | `<unknown>` |
| +300.0% |    +6 |   0.3% → 1.3% |     2 → 8 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)`                                                                                                                                    | `<unknown>` |
|   +1.1% |    +5 | 75.0% → 75.6% | 457 → 462 | `Thread::call_run()`                                                                                                                                                                                                                                                | `<unknown>` |
|   +1.1% |    +5 | 75.0% → 75.6% | 457 → 462 | `thread_native_entry(Thread*)`                                                                                                                                                                                                                                      | `<unknown>` |
|     new |    +5 |   0.0% → 0.8% |     0 → 5 | `Parse::do_get_xxx(Node*, ciField*, bool)`                                                                                                                                                                                                                          | `<unknown>` |
|  +80.0% |    +4 |   0.8% → 1.5% |     5 → 9 | `InterpreterRuntime::_new(JavaThread*, ConstantPool*, int)`                                                                                                                                                                                                         | `<unknown>` |
|  +50.0% |    +4 |   1.3% → 2.0% |    8 → 12 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                                                                                                                       | `<unknown>` |
| +200.0% |    +4 |   0.3% → 1.0% |     2 → 6 | `Arena::contains(void const*) const`                                                                                                                                                                                                                                | `<unknown>` |
|     new |    +4 |   0.0% → 0.7% |     0 → 4 | `InlineTree::check_can_parse(ciMethod*)`                                                                                                                                                                                                                            | `<unknown>` |
|     new |    +4 |   0.0% → 0.7% |     0 → 4 | `CallGenerator::for_inline(ciMethod*, float)`                                                                                                                                                                                                                       | `<unknown>` |

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +131 | 0.0% → 21.4% | 0 → 131 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000c801088800` |
|    new |  +130 | 0.0% → 21.3% | 0 → 130 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010a9400`  |
|    new |  +129 | 0.0% → 21.1% | 0 → 129 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010abc00`  |
|    new |  +129 | 0.0% → 21.1% | 0 → 129 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac400`  |
|    new |  +129 | 0.0% → 21.1% | 0 → 129 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x000000c8010ac800`  |
|    new |  +122 | 0.0% → 20.0% | 0 → 122 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x000000c801092800` |
|    new |  +122 | 0.0% → 20.0% | 0 → 122 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010ab400`  |
|    new |  +122 | 0.0% → 20.0% | 0 → 122 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c801092000`  |
|    new |  +120 | 0.0% → 19.6% | 0 → 120 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010c7000`  |
|    new |  +120 | 0.0% → 19.6% | 0 → 120 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c801096800`  |
|    new |  +120 | 0.0% → 19.6% | 0 → 120 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000c801098000`  |
|    new |  +120 | 0.0% → 19.6% | 0 → 120 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000c801098400`  |
|    new |  +120 | 0.0% → 19.6% | 0 → 120 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010c6400`  |
|    new |  +116 | 0.0% → 19.0% | 0 → 116 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c80102b000`  |
|    new |  +116 | 0.0% → 19.0% | 0 → 116 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c80109a000`  |
|    new |  +111 | 0.0% → 18.2% | 0 → 111 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010d3800`  |
|    new |  +108 | 0.0% → 17.7% | 0 → 108 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010c8000`  |
|    new |  +102 | 0.0% → 16.7% | 0 → 102 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x000000c801093400` |
|    new |   +96 | 0.0% → 15.7% |  0 → 96 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000c8010d2400`  |
|    new |   +93 | 0.0% → 15.2% |  0 → 93 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000c8010d2c00`  |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `itable stub`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Compiler

|  Change | Delta |             % |   Samples | Function                                                                                                                                                                                       | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -6.2% |   -11 | 29.1% → 27.2% | 177 → 166 | `Compile::Code_Gen()`                                                                                                                                                                          | `<unknown>` |
| removed |   -10 |   1.6% → 0.0% |    10 → 0 | `TypePtr::xmeet(Type const*) const`                                                                                                                                                            | `<unknown>` |
|  -69.2% |    -9 |   2.1% → 0.7% |    13 → 4 | `LinearScan::allocate_registers()`                                                                                                                                                             | `<unknown>` |
|   -7.8% |    -8 | 16.7% → 15.4% |  102 → 94 | `PhaseChaitin::Register_Allocate()`                                                                                                                                                            | `<unknown>` |
|  -57.1% |    -8 |   2.3% → 1.0% |    14 → 6 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                                                                   | `<unknown>` |
|  -72.7% |    -8 |   1.8% → 0.5% |    11 → 3 | `LinearScanWalker::alloc_free_reg(Interval*)`                                                                                                                                                  | `<unknown>` |
|  -72.7% |    -8 |   1.8% → 0.5% |    11 → 3 | `LinearScanWalker::activate_current()`                                                                                                                                                         | `<unknown>` |
|  -61.5% |    -8 |   2.1% → 0.8% |    13 → 5 | `IntervalWalker::walk_to(int)`                                                                                                                                                                 | `<unknown>` |
|  -58.3% |    -7 |   2.0% → 0.8% |    12 → 5 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)`                                                                                                     | `<unknown>` |
|  -75.0% |    -6 |   1.3% → 0.3% |     8 → 2 | `GraphKit::access_store_at(Node*, Node*, TypePtr const*, Node*, Type const*, BasicType, unsigned long long)`                                                                                   | `<unknown>` |
| removed |    -6 |   1.0% → 0.0% |     6 → 0 | `TypeInstPtr::xmeet_helper(Type const*) const`                                                                                                                                                 | `<unknown>` |
|  -42.9% |    -6 |   2.3% → 1.3% |    14 → 8 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  -50.0% |    -6 |   2.0% → 1.0% |    12 → 6 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                                         | `<unknown>` |
|  -75.0% |    -6 |   1.3% → 0.3% |     8 → 2 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                                                   | `<unknown>` |
|  -75.0% |    -6 |   1.3% → 0.3% |     8 → 2 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                                                     | `<unknown>` |
|  -83.3% |    -5 |   1.0% → 0.2% |     6 → 1 | `StoreNode::Ideal(PhaseGVN*, bool)`                                                                                                                                                            | `<unknown>` |
|  -83.3% |    -5 |   1.0% → 0.2% |     6 → 1 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)`                                                                                                                      | `<unknown>` |
|  -29.4% |    -5 |   2.8% → 2.0% |   17 → 12 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                                             | `<unknown>` |
|  -62.5% |    -5 |   1.3% → 0.5% |     8 → 3 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)`                                                                                                                                             | `<unknown>` |
|  -83.3% |    -5 |   1.0% → 0.2% |     6 → 1 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)`                                                                                                           | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                              | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
|  -78.6% |   -11 | 2.3% → 0.5% |  14 → 3 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)`                | `<unknown>` |
|  -24.3% |    -9 | 6.1% → 4.6% | 37 → 28 | `Parse::do_call()`                                                                    | `<unknown>` |
|  -20.0% |    -9 | 7.4% → 5.9% | 45 → 36 | `Parse::Parse(JVMState*, ciMethod*, float)`                                           | `<unknown>` |
|  -20.0% |    -9 | 7.4% → 5.9% | 45 → 36 | `ParseGenerator::generate(JVMState*)`                                                 | `<unknown>` |
|  -18.2% |    -8 | 7.2% → 5.9% | 44 → 36 | `Parse::do_all_blocks()`                                                              | `<unknown>` |
|  -14.3% |    -6 | 6.9% → 5.9% | 42 → 36 | `Parse::do_one_block()`                                                               | `<unknown>` |
|  -75.0% |    -6 | 1.3% → 0.3% |   8 → 2 | `BarrierSetC2::store_at(C2Access&, C2AccessValue&) const`                             | `<unknown>` |
|  -66.7% |    -6 | 1.5% → 0.5% |   9 → 3 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)`                    | `<unknown>` |
|  -38.5% |    -5 | 2.1% → 1.3% |  13 → 8 | `__psynch_mutexwait`                                                                  | `<unknown>` |
|  -38.5% |    -5 | 2.1% → 1.3% |  13 → 8 | `_pthread_mutex_firstfit_lock_slow`                                                   | `<unknown>` |
|  -62.5% |    -5 | 1.3% → 0.5% |   8 → 3 | `ThreadCritical::ThreadCritical()`                                                    | `<unknown>` |
|  -71.4% |    -5 | 1.1% → 0.3% |   7 → 2 | `_platform_memset`                                                                    | `<unknown>` |
|  -62.5% |    -5 | 1.3% → 0.5% |   8 → 3 | `Parse::do_put_xxx(Node*, ciField*, bool)`                                            | `<unknown>` |
|  -80.0% |    -4 | 0.8% → 0.2% |   5 → 1 | `Chunk::operator new(unsigned long, AllocFailStrategy::AllocFailEnum, unsigned long)` | `<unknown>` |
|  -80.0% |    -4 | 0.8% → 0.2% |   5 → 1 | `Arena::grow(unsigned long, AllocFailStrategy::AllocFailEnum)`                        | `<unknown>` |
|  -14.8% |    -4 | 4.4% → 3.8% | 27 → 23 | `PredictedCallGenerator::generate(JVMState*)`                                         | `<unknown>` |
|  -66.7% |    -4 | 1.0% → 0.3% |   6 → 2 | `ModRefBarrierSetC2::store_at_resolved(C2Access&, C2AccessValue&) const`              | `<unknown>` |
| removed |    -4 | 0.7% → 0.0% |   4 → 0 | `LinkResolver::resolve_static_call(CallInfo&, LinkInfo const&, bool, JavaThread*)`    | `<unknown>` |
| removed |    -4 | 0.7% → 0.0% |   4 → 0 | `FormatStringEventLog<256ul>::log(Thread*, char const*, ...)`                         | `<unknown>` |
| removed |    -4 | 0.7% → 0.0% |   4 → 0 | `nmethod::post_compiled_method(CompileTask*)`                                         | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -132 | 21.7% → 0.0% | 132 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
| removed |  -130 | 21.3% → 0.0% | 130 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010a9400`  |
| removed |  -129 | 21.2% → 0.0% | 129 → 0 | `guardWithCatch(Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00`  |
| removed |  -129 | 21.2% → 0.0% | 129 → 0 | `reinvoke(Object, Object, Object)`                                                          | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400`  |
| removed |  -129 | 21.2% → 0.0% | 129 → 0 | `guard(Object, Object, Object)`                                                             | `java.lang.invoke.LambdaForm$MH.0x00000008010ac800`  |
| removed |  -123 | 20.2% → 0.0% | 123 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801092800` |
| removed |  -123 | 20.2% → 0.0% | 123 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010ab400`  |
| removed |  -121 | 19.9% → 0.0% | 121 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000000801092000`  |
| removed |  -120 | 19.7% → 0.0% | 120 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010c7000`  |
| removed |  -120 | 19.7% → 0.0% | 120 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010c6400`  |
| removed |  -119 | 19.5% → 0.0% | 119 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801096800`  |
| removed |  -119 | 19.5% → 0.0% | 119 → 0 | `guard(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000000801098400`  |
| removed |  -119 | 19.5% → 0.0% | 119 → 0 | `reinvoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x0000000801098000`  |
| removed |  -116 | 19.0% → 0.0% | 116 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080102b000`  |
| removed |  -115 | 18.9% → 0.0% | 115 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000080109a000`  |
| removed |  -113 | 18.6% → 0.0% | 113 → 0 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d3800`  |
| removed |  -108 | 17.7% → 0.0% | 108 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010c8000`  |
| removed |  -103 | 16.9% → 0.0% | 103 → 0 | `invokeInterface(Object, Object, Object, Object, Object)`                                   | `java.lang.invoke.LambdaForm$DMH.0x0000000801093400` |
| removed |   -96 | 15.8% → 0.0% |  96 → 0 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH.0x00000008010d2400`  |
| removed |   -93 | 15.3% → 0.0% |  93 → 0 | `guardWithCatch(Object, Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x00000008010d2c00`  |

##### JIT

|  Change | Delta |           % | Samples | Function                | Location    |
| ------: | ----: | ----------: | ------: | ----------------------- | ----------- |
|  -33.3% |    -1 | 0.5% → 0.3% |   3 → 2 | `I2C/C2I adapters(0xb)` | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xb)` | `<unknown>` |
