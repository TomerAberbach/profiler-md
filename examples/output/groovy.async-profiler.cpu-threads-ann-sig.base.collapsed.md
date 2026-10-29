# Sampling profile

Collected 655 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 54.4% |     356 |
| Native           | 32.4% |     212 |
| Standard library | 12.8% |      84 |
| JIT              |  0.5% |       3 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 492 samples (75.1%) Thread::call_run()
│   ├── 469 samples (71.6%) JavaThread::thread_main_inner()
│   │   └── 469 samples (71.6%) CompileBroker::compiler_thread_loop()
│   │       ├── 462 samples (70.5%) CompileBroker::invoke_compiler_on_method(CompileTask*)
│   │       │   ├── 378 samples (57.7%) C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)
│   │       │   │   └── 376 samples (57.4%) Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)
│   │       │   │       ├── 187 samples (28.5%) Compile::Code_Gen()
│   │       │   │       │   ├── 107 samples (16.3%) PhaseChaitin::Register_Allocate()
│   │       │   │       │   │   ├── 22 samples (3.4%, self 2.3%) PhaseChaitin::Split(unsigned int, ResourceArea*)
│   │       │   │       │   │   │   └── 7 samples (1.1%) 5 more callees, led by (0.3%) PhaseChaitin::split_USE(MachSpillCopyNode::SpillType, Node*, Block*, Node*, unsigned int, unsigned int, bool, bool, GrowableArray<unsigned int>, int)
│   │       │   │       │   │   ├── 5 samples (0.8%) PhaseChaitin::Simplify()
│   │       │   │       │   │   │   └── 2 samples (0.3%, self 1.5% globally) IndexSetIterator::advance_and_next()
│   │       │   │       │   │   └── 80 samples (12.2%) 16 more callees, led by (2.4%) PhaseChaitin::build_ifg_physical(ResourceArea*)
│   │       │   │       │   └── 80 samples (12.2%) 6 more callees, led by (4.9%) Matcher::match()
│   │       │   │       ├── 138 samples (21.1%) Compile::Optimize()
│   │       │   │       │   └── 138 samples (21.1%) 13 more callees, led by (6.7%) PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)
│   │       │   │       └── 51 samples (7.8%) 4 more callees, led by (6.3%) ParseGenerator::generate(JVMState*)
│   │       │   ├── … 78 samples (11.9%) Compilation::compile_method()
│   │       │   │   ├── 71 samples (10.8%) Compilation::compile_java_method()
│   │       │   │   │   ├── 34 samples (5.2%) Compilation::build_hir()
│   │       │   │   │   │   ├── … 22 samples (3.4%) GraphBuilder::iterate_bytecodes_for_block(int)
│   │       │   │   │   │   │   └── 18 samples (2.7%) GraphBuilder::invoke(Bytecodes::Code)
│   │       │   │   │   │   │       ├── 9 samples (1.4%) GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)
│   │       │   │   │   │   │       │   └── 9 samples (1.4%) GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)
│   │       │   │   │   │   │       │       ├── … 1 sample (0.2%, self 1.8% globally) tlv_get_addr
│   │       │   │   │   │   │       │       └── 7 samples (1.1%) 5 more callees, led by (0.5%) ciMethod::ensure_method_data()
│   │       │   │   │   │   │       ├── … 2 samples (0.3%, self 1.8% globally) InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)
│   │       │   │   │   │   │       └── 6 samples (0.9%) 6 more callees, led by (0.2%) ciKlass::is_subtype_of(ciKlass*)
│   │       │   │   │   │   └── 9 samples (1.4%) 5 more callees, led by (0.6%) GlobalValueNumbering::GlobalValueNumbering(IR*)
│   │       │   │   │   └── 37 samples (5.6%) 3 more callees, led by (3.4%) Compilation::emit_lir()
│   │       │   │   └── 7 samples (1.1%) 2 more callees, led by (0.9%) ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)
│   │       │   └── 3 samples (0.5%) ciEnv::get_method_from_handle(Method*)
│   │       └── 7 samples (1.1%) CompileQueue::get(CompilerThread*) …
│   └── 22 samples (3.4%) WorkerThread::run()
│       └── 22 samples (3.4%) 4 more callees, led by (1.4%) G1EvacuateRegionsBaseTask::work(unsigned int)
├── 145 samples (22.1%) main(String[]) at org.codenarc.CodeNarc
│   ├── … 140 samples (21.4%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│   │   └── 140 samples (21.4%) 2 more callees, led by (19.8%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│   └── 3 samples (0.5%) linkCallSite(Object, Object, Object, Object, Object, Object[]) at java.lang.invoke.MethodHandleNatives
└── 17 samples (2.6%) 3 more root frames, led by (2.1%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                                    | Location                                               |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 2.3% |      15 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>`                                            |
| 1.8% |      12 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>`                                            |
| 1.8% |      12 | `tlv_get_addr`                                                                                                                                                              | `<unknown>`                                            |
| 1.7% |      11 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>`                                            |
| 1.5% |      10 | `IndexSetIterator::advance_and_next()`                                                                                                                                      | `<unknown>`                                            |
| 1.2% |       8 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                      | `<unknown>`                                            |
| 1.2% |       8 | `MultiNode::is_CFG() const`                                                                                                                                                 | `<unknown>`                                            |
| 1.2% |       8 | `PhaseIdealLoop::Dominators()`                                                                                                                                              | `<unknown>`                                            |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                                | `<unknown>`                                            |
| 1.1% |       7 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                                     | `<unknown>`                                            |
| 1.1% |       7 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>`                                            |
| 1.1% |       7 | `Node::dominates(Node*, Node_List&)`                                                                                                                                        | `<unknown>`                                            |
| 0.9% |       6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 0.9% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                           | `<unknown>`                                            |
| 0.9% |       6 | `_platform_memset`                                                                                                                                                          | `<unknown>`                                            |
| 0.9% |       6 | `IndexSet::initialize(unsigned int)`                                                                                                                                        | `<unknown>`                                            |
| 0.9% |       6 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>`                                            |
| 0.8% |       5 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>`                                            |
| 0.8% |       5 | `PhaseLive::compute(unsigned int)`                                                                                                                                          | `<unknown>`                                            |
| 0.6% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                                          | `<unknown>`                                            |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 2.3% |      15 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.5% |      10 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.2% |       8 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 1.2% |       8 | `MultiNode::is_CFG() const`                                                  | `<unknown>` |
| 1.2% |       8 | `PhaseIdealLoop::Dominators()`                                               | `<unknown>` |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 1.1% |       7 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 1.1% |       7 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
| 0.9% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 0.9% |       6 | `IndexSet::initialize(unsigned int)`                                         | `<unknown>` |
| 0.8% |       5 | `PhaseLive::compute(unsigned int)`                                           | `<unknown>` |
| 0.6% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.6% |       4 | `TypeInstPtr::hash() const`                                                  | `<unknown>` |
| 0.6% |       4 | `ciObjectFactory::get_metadata(Metadata*)`                                   | `<unknown>` |
| 0.6% |       4 | `PhiNode::Ideal(PhaseGVN*, bool)`                                            | `<unknown>` |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_tree_impl(Node*, int)`                           | `<unknown>` |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 0.6% |       4 | `Node_Backward_Iterator::next()`                                             | `<unknown>` |
| 0.6% |       4 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`         | `<unknown>` |
| 0.6% |       4 | `Compile::identify_useful_nodes(Unique_Node_List&)`                          | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.8% |      12 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.8% |      12 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.7% |      11 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 1.1% |       7 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.9% |       6 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.9% |       6 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |       5 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.6% |       4 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.6% |       4 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.6% |       4 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| 0.6% |       4 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>` |
| 0.6% |       4 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
| 0.5% |       3 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)`                                                                                                                    | `<unknown>` |
| 0.5% |       3 | `FieldInfoReader::read_field_info(FieldInfo&)`                                                                                                                              | `<unknown>` |
| 0.3% |       2 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 0.3% |       2 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| 0.3% |       2 | `ResourceBitMap::ResourceBitMap(unsigned long, bool)`                                                                                                                       | `<unknown>` |
| 0.3% |       2 | `bsearch`                                                                                                                                                                   | `<unknown>` |
| 0.3% |       2 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                                        | `<unknown>` |
| 0.3% |       2 | `Continuation::is_return_barrier_entry(unsigned char*)`                                                                                                                     | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                 |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 0.9% |       6 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`   |
| 0.3% |       2 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`    |
| 0.3% |       2 | `valueOf(long)`                                                                                               | `java.lang.Long`                                         |
| 0.3% |       2 | `<init>(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                              | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`      |
| 0.3% |       2 | `getContext()`                                                                                                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`            |
| 0.2% |       1 | `isEpsilon()`                                                                                                 | `groovyjarjarantlr4.v4.runtime.atn.EpsilonTransition`    |
| 0.2% |       1 | `execATN(DFA, TokenStream, int, SimulatorState)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`   |
| 0.2% |       1 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070012b7000`      |
| 0.2% |       1 | `computeAllFrames()`                                                                                          | `jdk.internal.org.objectweb.asm.MethodWriter`            |
| 0.2% |       1 | `decompress(ByteBuffer, int)`                                                                                 | `jdk.internal.jimage.ImageLocation`                      |
| 0.2% |       1 | `execute(Lexer, CharStream, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`  |
| 0.2% |       1 | `getBytes(byte[], int, byte)`                                                                                 | `java.lang.String`                                       |
| 0.2% |       1 | `isInitialized()`                                                                                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| 0.2% |       1 | `CENFLG(byte[], int)`                                                                                         | `jdk.nio.zipfs.ZipConstants`                             |
| 0.2% |       1 | `map(Function)`                                                                                               | `java.util.stream.ReferencePipeline`                     |
| 0.2% |       1 | `forName(String, boolean, ClassLoader, Class)`                                                                | `java.lang.Class`                                        |
| 0.2% |       1 | `hashCode()`                                                                                                  | `java.lang.String`                                       |
| 0.2% |       1 | `visit(int, int, String, String, String, String[])`                                                           | `jdk.internal.org.objectweb.asm.ClassWriter`             |
| 0.2% |       1 | `lastIndexOf(int, int)`                                                                                       | `java.lang.String`                                       |
| 0.2% |       1 | `newReflectionData(SoftReference, int)`                                                                       | `java.lang.Class`                                        |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 91.7% |      11 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
|  8.3% |       1 | `InstanceKlass::find_method(Array<Method*> const*, Symbol const*, Symbol const*)`                                                | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                                                                                                                                                        | Location    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 8.3% |       1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)`                                                                                                             | `<unknown>` |
| 8.3% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                             | `<unknown>` |
| 8.3% |       1 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                          | `<unknown>` |
| 8.3% |       1 | `LoadNode::make(PhaseGVN&, Node*, Node*, Node*, TypePtr const*, Type const*, BasicType, MemNode::MemOrd, LoadNode::ControlDependency, bool, bool, bool, bool, unsigned char)` | `<unknown>` |
| 8.3% |       1 | `PhaseLive::compute(unsigned int)`                                                                                                                                            | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------- | ----------- |
| 27.3% |       3 | `InterpreterRuntime::ldc(JavaThread*, bool)`                          | `<unknown>` |
| 18.2% |       2 | `jni_GetStringUTFLength`                                              | `<unknown>` |
|  9.1% |       1 | `JVM_IHashCode`                                                       | `<unknown>` |
|  9.1% |       1 | `InterpreterRuntime::anewarray(JavaThread*, ConstantPool*, int, int)` | `<unknown>` |
|  9.1% |       1 | `JVM_ReferenceClear`                                                  | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 20.0% |       2 | `PhaseChaitin::Simplify()`                                           | `<unknown>` |
| 20.0% |       2 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |
| 10.0% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 10.0% |       1 | `PhaseIFG::remove_node(unsigned int)`                                | `<unknown>` |
| 10.0% |       1 | `PhaseChaitin::Select()`                                             | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `MultiNode::is_CFG() const` (`<unknown>`)

|     % | Samples | Caller                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 50.0% |       4 | `PhaseIdealLoop::build_and_optimize()`                                  | `<unknown>` |
| 25.0% |       2 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 12.5% |       1 | `RegionNode::is_unreachable_region(PhaseGVN const*)`                    | `<unknown>` |
| 12.5% |       1 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 42.9% |       3 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |
| 42.9% |       3 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 14.3% |       1 | `DebugInformationRecorder::dump_object_pool(GrowableArray<ScopeValue*>*)`                                                                                       | `<unknown>` |

##### `Node::dominates(Node*, Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       7 | `MemNode::all_controls_dominate(Node*, Node*)` | `<unknown>` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.3% |       5 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 16.7% |       1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 33.3% |       2 | `PhaseIdealLoop::build_and_optimize()`       | `<unknown>` |
| 33.3% |       2 | `PhaseChaitin::Register_Allocate()`          | `<unknown>` |
| 16.7% |       1 | `Compilation::build_hir()`                   | `<unknown>` |
| 16.7% |       1 | `PhaseValues::uncached_makecon(Type const*)` | `<unknown>` |

##### `IndexSet::initialize(unsigned int)` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 83.3% |       5 | `PhaseIFG::init(unsigned int)`     | `<unknown>` |
| 16.7% |       1 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       6 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       5 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `TypeInstPtr::hash() const` (`<unknown>`)

|     % | Samples | Caller                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 50.0% |       2 | `PhiNode::hash() const`            | `<unknown>` |
| 25.0% |       1 | `NodeHash::hash_insert(Node*)`     | `<unknown>` |
| 25.0% |       1 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       2 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| 50.0% |       2 | `ciMethod::ensure_method_data(methodHandle const&)`                                       | `<unknown>` |

##### `PhiNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 50.0% |       2 | `PhaseIterGVN::optimize()`           | `<unknown>` |
| 25.0% |       1 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
| 25.0% |       1 | `Parse::do_exits()`                  | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree_impl(Node*, int)` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseIdealLoop::build_loop_tree()`    | `<unknown>` |
| 25.0% |       1 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 25.0% |       1 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |

##### `Node_Backward_Iterator::next()` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 50.0% |       2 | `PhaseCFG::global_code_motion()`                   | `<unknown>` |
| 50.0% |       2 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       4 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 75.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| 25.0% |       1 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 25.0% |       1 | `SharedRuntime::reresolve_call_site(JavaThread*)`                                                                                                                                                                                                                 | `<unknown>` |
| 25.0% |       1 | `CompiledIC::set_to_clean(bool)`                                                                                                                                                                                                                                  | `<unknown>` |
| 25.0% |       1 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                                 | `<unknown>` |
| 25.0% |       1 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       4 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       4 | `WorkerThread::run()` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 25.0% |       1 | `Node_Array::grow(unsigned int)`                       | `<unknown>` |
| 25.0% |       1 | `Type::Initialize(Compile*)`                           | `<unknown>` |
| 25.0% |       1 | `PhaseIdealLoop::set_idom(Node*, Node*, unsigned int)` | `<unknown>` |
| 25.0% |       1 | `outputStream::print(char const*, ...)`                | `<unknown>` |

##### `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       3 | `CompiledMethod::unload_nmethod_caches(bool)` | `<unknown>` |

##### `FieldInfoReader::read_field_info(FieldInfo&)` (`<unknown>`)

|     % | Samples | Caller                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `InstanceKlass::find_local_field(Symbol*, Symbol*, fieldDescriptor*) const` | `<unknown>` |
| 33.3% |       1 | `JavaFieldStream::JavaFieldStream(InstanceKlass const*)`                    | `<unknown>` |
| 33.3% |       1 | `ciInstanceKlass::compute_nonstatic_fields_impl(GrowableArray<ciField*>*)`  | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `ResourceBitMap::ResourceBitMap(unsigned long, bool)` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 50.0% |       1 | `Optimizer::eliminate_null_checks()` | `<unknown>` |
| 50.0% |       1 | `BlockBegin::BlockBegin(int)`        | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |       2 | `encoding_for_logical_immediate(unsigned long long)` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` (`<unknown>`)

|      % | Samples | Caller                                                         | Location    |
| -----: | ------: | -------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` | `<unknown>` |

##### `Continuation::is_return_barrier_entry(unsigned char*)` (`<unknown>`)

|     % | Samples | Caller                                                       | Location    |
| ----: | ------: | ------------------------------------------------------------ | ----------- |
| 50.0% |       1 | `SharedRuntime::resolve_sub_helper(bool, bool, JavaThread*)` | `<unknown>` |
| 50.0% |       1 | `frame::sender_for_compiled_frame(RegisterMap*) const`       | `<unknown>` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       2 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `valueOf(long)` (`java.lang.Long`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       2 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `<init>(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

|      % | Samples | Caller                                                                         | Location                                            |
| -----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% |       2 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL` |

##### `getContext()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|     % | Samples | Caller                                                                                | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 50.0% |       1 | `getEpsilonTarget(CharStream, ATNConfig, Transition, ATNConfigSet, boolean, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |
| 50.0% |       1 | `equals(ATNConfig)`                                                                   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |

##### `isEpsilon()` (`groovyjarjarantlr4.v4.runtime.atn.EpsilonTransition`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `execATN(DFA, TokenStream, int, SimulatorState)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                           | Location                                               |
| -----: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `execDFA(DFA, TokenStream, int, SimulatorState)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070012b7000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `computeAllFrames()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller                | Location                                      |
| -----: | ------: | --------------------- | --------------------------------------------- |
| 100.0% |       1 | `visitMaxs(int, int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

|      % | Samples | Caller               | Location                               |
| -----: | ------: | -------------------- | -------------------------------------- |
| 100.0% |       1 | `getAttributes(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|      % | Samples | Caller                                                        | Location                                              |
| -----: | ------: | ------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% |       1 | `accept(CharStream, LexerActionExecutor, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `getBytes(byte[], int, byte)` (`java.lang.String`)

|      % | Samples | Caller                                        | Location           |
| -----: | ------: | --------------------------------------------- | ------------------ |
| 100.0% |       1 | `join(String, String, String, String[], int)` | `java.lang.String` |

##### `isInitialized()` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|      % | Samples | Caller         | Location                                                 |
| -----: | ------: | -------------- | -------------------------------------------------------- |
| 100.0% |       1 | `initialize()` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |

##### `CENFLG(byte[], int)` (`jdk.nio.zipfs.ZipConstants`)

|      % | Samples | Caller                                            | Location                            |
| -----: | ------: | ------------------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `readCEN(ZipFileSystem, ZipFileSystem$IndexNode)` | `jdk.nio.zipfs.ZipFileSystem$Entry` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `forName(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location          |
| -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% |       1 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

##### `hashCode()` (`java.lang.String`)

|      % | Samples | Caller              | Location                                     |
| -----: | ------: | ------------------- | -------------------------------------------- |
| 100.0% |       1 | `hash(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `visit(int, int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `lastIndexOf(int, int)` (`java.lang.String`)

|      % | Samples | Caller             | Location           |
| -----: | ------: | ------------------ | ------------------ |
| 100.0% |       1 | `lastIndexOf(int)` | `java.lang.String` |

##### `newReflectionData(SoftReference, int)` (`java.lang.Class`)

|      % | Samples | Caller             | Location          |
| -----: | ------: | ------------------ | ----------------- |
| 100.0% |       1 | `reflectionData()` | `java.lang.Class` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.3% |     493 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.3% |     493 | `thread_start`                                                                                | `<unknown>`                                          |
| 75.1% |     492 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.1% |     492 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 71.6% |     469 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 71.6% |     469 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 70.5% |     462 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 57.7% |     378 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 57.4% |     376 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 28.5% |     187 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 22.1% |     145 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 21.7% |     142 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.5% |     141 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 21.4% |     140 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     140 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 21.4% |     140 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.2% |     139 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 21.2% |     139 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 21.2% |     139 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 21.1% |     138 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 71.6% |     469 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 70.5% |     462 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 57.7% |     378 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 57.4% |     376 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 28.5% |     187 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 21.1% |     138 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 16.3% |     107 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 13.3% |      87 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 11.9% |      78 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 11.9% |      78 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 11.3% |      74 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 11.3% |      74 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 10.8% |      71 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  6.6% |      43 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  6.3% |      41 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  5.6% |      37 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  5.2% |      34 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.9% |      32 | `Matcher::match()`                                                                                      | `<unknown>` |
|  3.7% |      24 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                    | `<unknown>` |
|  3.4% |      22 | `Compilation::emit_lir()`                                                                               | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                              | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.3% |     493 | `_pthread_start`                                                                                                                                                      | `<unknown>` |
| 75.3% |     493 | `thread_start`                                                                                                                                                        | `<unknown>` |
| 75.1% |     492 | `Thread::call_run()`                                                                                                                                                  | `<unknown>` |
| 75.1% |     492 | `thread_native_entry(Thread*)`                                                                                                                                        | `<unknown>` |
| 71.6% |     469 | `JavaThread::thread_main_inner()`                                                                                                                                     | `<unknown>` |
| 11.9% |      78 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                               | `<unknown>` |
|  6.3% |      41 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                                           | `<unknown>` |
|  6.3% |      41 | `ParseGenerator::generate(JVMState*)`                                                                                                                                 | `<unknown>` |
|  6.1% |      40 | `Parse::do_all_blocks()`                                                                                                                                              | `<unknown>` |
|  6.0% |      39 | `Parse::do_one_block()`                                                                                                                                               | `<unknown>` |
|  5.2% |      34 | `Parse::do_call()`                                                                                                                                                    | `<unknown>` |
|  4.6% |      30 | `PredictedCallGenerator::generate(JVMState*)`                                                                                                                         | `<unknown>` |
|  3.8% |      25 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                                                                                 | `<unknown>` |
|  3.8% |      25 | `IR::IR(Compilation*, ciMethod*, int)`                                                                                                                                | `<unknown>` |
|  3.4% |      22 | `WorkerThread::run()`                                                                                                                                                 | `<unknown>` |
|  1.8% |      12 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |
|  1.8% |      12 | `tlv_get_addr`                                                                                                                                                        | `<unknown>` |
|  1.7% |      11 | `pthread_jit_write_protect_np`                                                                                                                                        | `<unknown>` |
|  1.7% |      11 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
|  1.7% |      11 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                                                                                         | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 21.7% |     142 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.5% |     141 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| 21.4% |     140 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     140 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| 21.4% |     140 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.2% |     139 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000`  |
| 21.2% |     139 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00`  |
| 21.2% |     139 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800`  |
| 20.3% |     133 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
| 20.3% |     133 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 19.7% |     129 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400`  |
| 19.7% |     129 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.7% |     129 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 19.5% |     128 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000700108e000`  |
| 19.5% |     128 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 19.2% |     126 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001098400`  |
| 19.2% |     126 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00`  |
| 19.2% |     126 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000700109a000`  |
| 18.9% |     124 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 18.9% |     124 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     493 | `thread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |     492 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     492 | `_pthread_start` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |     469 | `JavaThread::thread_main_inner()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     469 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     462 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                   | Location    |
| -----: | ------: | -------------------------------------------------------- | ----------- |
| 100.0% |     378 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                                    | Location    |
| -----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 100.0% |     376 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     187 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.3% |     141 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.4% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.3% |     140 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
| 90.1% |     127 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| 70.9% |     100 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d8c00` |
| 64.5% |      91 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011bb800` |
| 16.3% |      23 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070012de000` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| 100.0% |     140 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|  45.7% |      64 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   0.7% |       1 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     140 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  22.9% |      32 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                   | Location                                                                   |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |     140 | `main(String[])`                         | `org.codenarc.CodeNarc`                                                    |
|  71.4% |     100 | `execute()`                              | `org.codenarc.CodeNarcRunner`                                              |
|  67.9% |      95 | `processDirectory(String, RuleSet)`      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  38.6% |      54 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |
|  37.1% |      52 | `doCall(Object)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     139 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  69.1% |      96 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     139 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  69.1% |      96 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     139 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  92.8% |     129 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
|  84.2% |     117 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
|  41.7% |      58 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00` |
|  31.7% |      44 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |

##### `Compile::Optimize()` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     138 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|      % | Samples | Caller                                           | Location                                            |
| -----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 100.0% |     133 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
|  60.9% |      81 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3000` |
|   1.5% |       2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x00000070010c9c00` |
|   0.8% |       1 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH.0x0000007001209800` |
|   0.8% |       1 | `invoke(Object, Object, int)`                    | `java.lang.invoke.LambdaForm$MH.0x00000070010cc800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     133 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     129 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800` |
|   3.9% |       5 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|   1.6% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001121000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     128 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   0.8% |       1 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 96.9% |     124 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 40.6% |      52 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |
| 15.6% |      20 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 11.7% |      15 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| 11.7% |      15 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  29.4% |      37 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     126 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|  97.6% |     123 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
|  34.9% |      44 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  29.4% |      37 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 95.2% |     118 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c8400` |
| 74.2% |      92 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700120ec00` |
| 18.5% |      23 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012dd800` |
|  5.6% |       7 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070012e4c00` |
|  1.6% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001181c00` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.2% |     123 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 14.5% |      18 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     107 | `Compile::Code_Gen()` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 50.6% |      44 | `Compile::Optimize()`                                  | `<unknown>` |
| 49.4% |      43 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      78 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |      78 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                   | Location    |
| -----: | ------: | -------------------------------------------------------- | ----------- |
| 100.0% |      78 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |      74 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Caller                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      74 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      71 | `Compilation::compile_method()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      43 | `Compile::Optimize()` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Caller                                                    | Location    |
| ----: | ------: | --------------------------------------------------------- | ----------- |
| 58.5% |      24 | `Compile::Optimize()`                                     | `<unknown>` |
| 29.3% |      12 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`   | `<unknown>` |
|  9.8% |       4 | `PhaseMacroExpand::expand_macro_nodes()`                  | `<unknown>` |
|  2.4% |       1 | `Compile::process_for_post_loop_opts_igvn(PhaseIterGVN&)` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      41 | `ParseGenerator::generate(JVMState*)` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |      41 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  73.2% |      30 | `PredictedCallGenerator::generate(JVMState*)`                      | `<unknown>` |
|  26.8% |      11 | `Parse::do_call()`                                                 | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      40 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      39 | `Parse::do_all_blocks()` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      37 | `PhaseIterGVN::optimize()` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      34 | `Compilation::compile_java_method()` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      34 | `Parse::do_one_block()` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      32 | `Compile::Code_Gen()` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      30 | `Parse::do_call()`                            | `<unknown>` |
|  36.7% |      11 | `PredictedCallGenerator::generate(JVMState*)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      25 | `IR::IR(Compilation*, ciMethod*, int)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      25 | `Compilation::build_hir()` | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|      % | Samples | Caller                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      24 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      22 | `Compilation::compile_java_method()` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      22 | `Thread::call_run()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 91.7% |      11 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
|  8.3% |       1 | `InstanceKlass::find_method(Array<Method*> const*, Symbol const*, Symbol const*)`                                                | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                                                                                                                                                        | Location    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 8.3% |       1 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)`                                                                                                             | `<unknown>` |
| 8.3% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                             | `<unknown>` |
| 8.3% |       1 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                          | `<unknown>` |
| 8.3% |       1 | `LoadNode::make(PhaseGVN&, Node*, Node*, Node*, TypePtr const*, Type const*, BasicType, MemNode::MemOrd, LoadNode::ControlDependency, bool, bool, bool, bool, unsigned char)` | `<unknown>` |
| 8.3% |       1 | `PhaseLive::compute(unsigned int)`                                                                                                                                            | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------- | ----------- |
| 27.3% |       3 | `InterpreterRuntime::ldc(JavaThread*, bool)`                          | `<unknown>` |
| 18.2% |       2 | `jni_GetStringUTFLength`                                              | `<unknown>` |
|  9.1% |       1 | `JVM_IHashCode`                                                       | `<unknown>` |
|  9.1% |       1 | `InterpreterRuntime::anewarray(JavaThread*, ConstantPool*, int, int)` | `<unknown>` |
|  9.1% |       1 | `JVM_ReferenceClear`                                                  | `<unknown>` |

##### `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` (`<unknown>`)

|     % | Samples | Caller                                                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------- |
| 72.7% |       8 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                              | `<unknown>` |
| 18.2% |       2 | `LinkResolver::resolve_interface_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                    | `<unknown>` |
|  9.1% |       1 | `klassVtable::needs_new_vtable_entry(Method*, Klass const*, Handle, Symbol*, AccessFlags, unsigned short)` | `<unknown>` |

##### `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

|     % | Samples | Caller                                                                        | Location    |
| ----: | ------: | ----------------------------------------------------------------------------- | ----------- |
| 63.6% |       7 | `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)` | `<unknown>` |
| 18.2% |       2 | `LinkResolver::linktime_resolve_static_method(LinkInfo const&, JavaThread*)`  | `<unknown>` |
|  9.1% |       1 | `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)`      | `<unknown>` |
|  9.1% |       1 | `LinkResolver::linktime_resolve_special_method(LinkInfo const&, JavaThread*)` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     492 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     493 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 95.3% |     469 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  4.5% |      22 | `WorkerThread::run()`             | `<unknown>` |
|  0.2% |       1 | `WatcherThread::run()`            | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     492 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.5% |     462 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  1.5% |       7 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     469 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 81.8% |     378 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 16.9% |      78 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.6% |       3 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.2% |       1 | `ciEnv::ciEnv(CompileTask*)`                                              | `<unknown>` |
|  0.2% |       1 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 99.5% |     376 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  0.3% |       1 | `Compile::~Compile()`                                              | `<unknown>` |
|  0.3% |       1 | `Chunk::next_chop()`                                               | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 49.7% |     187 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 36.7% |     138 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 10.9% |      41 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.3% |       5 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |
|  1.1% |       4 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 57.2% |     107 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 17.1% |      32 | `Matcher::match()`                                                                   | `<unknown>` |
| 11.2% |      21 | `PhaseOutput::Output()`                                                              | `<unknown>` |
| 10.7% |      20 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
|  2.1% |       4 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 96.6% |     140 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  2.1% |       3 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |
|  1.4% |       2 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                                                     | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 98.6% |     140 | `invokeExact_MT(Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                               |
| 20.4% |      29 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
|  0.7% |       1 | `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     141 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  48.9% |      69 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 92.1% |     129 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400` |
| 87.9% |     123 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| 83.6% |     117 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d3c00` |
| 67.9% |      95 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070011b2000` |
| 65.7% |      92 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001205400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     140 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     140 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa000`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 95.7% |     133 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`  |
| 92.8% |     129 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010c6800`  |
| 69.1% |      96 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
| 38.1% |      53 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x0000007001219400`  |
| 33.8% |      47 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700122cc00`  |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aac00`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     139 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  69.1% |      96 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.7% |       1 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH.0x00000070010c6c00` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010aa800`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     139 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |
| 100.0% |     139 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |
|  23.0% |      32 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |
|  16.5% |      23 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012de000` |
|   5.8% |       8 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070012e7400` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 31.9% |      44 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 31.2% |      43 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 17.4% |      24 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  4.3% |       6 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |
|  4.3% |       6 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001094400`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 71.4% |      95 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 60.9% |      81 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 39.1% |      52 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 18.0% |      24 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 10.5% |      14 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a9800`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     133 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7400`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     129 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010aa800` |
|  69.8% |      90 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                 | Location                               |
| -----: | ------: | -------------------------------------- | -------------------------------------- |
| 100.0% |     129 | `execute(String[])`                    | `org.codenarc.CodeNarc`                |
|   3.1% |       4 | `parseArgs(String[])`                  | `org.codenarc.CodeNarc`                |
|   1.6% |       2 | `writeTitle(Writer)`                   | `org.codenarc.report.TextReportWriter` |
|   0.8% |       1 | `registerPluginsForClassNames(String)` | `org.codenarc.CodeNarcRunner`          |
|   0.8% |       1 | `validate(Source)`                     | `javax.xml.validation.Validator`       |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c6800`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     129 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700108e000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 99.2% |     127 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
|  1.6% |       2 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088c00` |
|  0.8% |       1 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     128 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
|   0.8% |       1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b400` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001098400`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 97.6% |     123 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000700102b000` |
| 46.8% |      59 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001105400` |
| 14.3% |      18 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.7% |      16 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  4.0% |       5 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x0000007001018400` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001099c00`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001098400` |
| 100.0% |     126 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |
|   0.8% |       1 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a000`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |
|  29.4% |      37 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee           | Location                                                                    |
| ----: | ------: | ---------------- | --------------------------------------------------------------------------- |
| 76.6% |      95 | `doCall(Object)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| 41.9% |      52 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| 17.7% |      22 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3`  |
| 12.1% |      15 | `doCall(Object)` | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |
| 11.3% |      14 | `doCall(Object)` | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                             |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.2% |     123 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 12.1% |      15 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  0.8% |       1 | `getLines()`              | `org.codenarc.source.AbstractSourceCode`   |
|  0.8% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |
|  0.8% |       1 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 20.6% |      22 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 15.0% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 14.0% |      15 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
| 10.3% |      11 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
|  9.3% |      10 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 85.1% |      74 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 13.8% |      12 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |
|  1.1% |       1 | `Chunk::next_chop()`                                          | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 91.0% |      71 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  7.7% |       6 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  1.3% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      78 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      78 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 18.9% |      14 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 17.6% |      13 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 14.9% |      11 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 10.8% |       8 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  6.8% |       5 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      74 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 47.9% |      34 | `Compilation::build_hir()`       | `<unknown>` |
| 31.0% |      22 | `Compilation::emit_lir()`        | `<unknown>` |
| 18.3% |      13 | `Compilation::emit_code_body()`  | `<unknown>` |
|  2.8% |       2 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      43 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 90.2% |      37 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  4.9% |       2 | `PhiNode::Ideal(PhaseGVN*, bool)`    | `<unknown>` |
|  2.4% |       1 | `StoreNode::Identity(PhaseGVN*)`     | `<unknown>` |
|  2.4% |       1 | `MemBarNode::hash() const`           | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 97.6% |      40 | `Parse::do_all_blocks()`    | `<unknown>` |
|  4.9% |       2 | `Parse::do_exits()`         | `<unknown>` |
|  4.9% |       2 | `Parse::do_method_entry()`  | `<unknown>` |
|  2.4% |       1 | `TypeFunc::make(ciMethod*)` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      41 | `Parse::Parse(JVMState*, ciMethod*, float)`   | `<unknown>` |
|   2.4% |       1 | `Dependencies::assert_evol_method(ciMethod*)` | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 97.5% |      39 | `Parse::do_one_block()`                   | `<unknown>` |
|  2.5% |       1 | `Parse::merge_common(Parse::Block*, int)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 87.2% |      34 | `Parse::do_call()`                    | `<unknown>` |
| 17.9% |       7 | `Parse::do_field_access(bool, bool)`  | `<unknown>` |
|  7.7% |       3 | `Parse::do_if(BoolTest::mask, Node*)` | `<unknown>` |
|  7.7% |       3 | `Parse::do_one_bytecode()`            | `<unknown>` |
|  2.6% |       1 | `Parse::do_new()`                     | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 13.5% |       5 | `NodeHash::hash_find_insert(Node*)`        | `<unknown>` |
| 13.5% |       5 | `RegionNode::Ideal(PhaseGVN*, bool)`       | `<unknown>` |
| 13.5% |       5 | `StoreNode::Ideal(PhaseGVN*, bool)`        | `<unknown>` |
|  8.1% |       3 | `LoadNode::Ideal(PhaseGVN*, bool)`         | `<unknown>` |
|  5.4% |       2 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 73.5% |      25 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
| 11.8% |       4 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  5.9% |       2 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|  2.9% |       1 | `_platform_memset`                                | `<unknown>` |
|  2.9% |       1 | `Constant::hash() const`                          | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 88.2% |      30 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 32.4% |      11 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 29.4% |      10 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  8.8% |       3 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |
|  2.9% |       1 | `GraphKit::kill_dead_locals()`                                                          | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 68.8% |      22 | `Matcher::xform(Node*, int)`                         | `<unknown>` |
| 18.8% |       6 | `Matcher::find_shared(Node*)`                        | `<unknown>` |
|  6.3% |       2 | `Matcher::specialize_generic_vector_operands()`      | `<unknown>` |
|  3.1% |       1 | `MultiNode::match(ProjNode const*, Matcher const*)`  | `<unknown>` |
|  3.1% |       1 | `MemBarNode::match(ProjNode const*, Matcher const*)` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                                          | Location    |
| -----: | ------: | --------------------------------------------------------------- | ----------- |
| 100.0% |      30 | `ParseGenerator::generate(JVMState*)`                           | `<unknown>` |
|  36.7% |      11 | `PredictedCallGenerator::generate(JVMState*)`                   | `<unknown>` |
|   3.3% |       1 | `GraphKit::type_check_receiver(Node*, ciKlass*, float, Node**)` | `<unknown>` |
|   3.3% |       1 | `DirectCallGenerator::generate(JVMState*)`                      | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 96.0% |      24 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      25 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|     % | Samples | Callee                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------- | ----------- |
| 91.7% |      22 | `GraphBuilder::iterate_all_blocks(bool)`                          | `<unknown>` |
|  8.3% |       2 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 90.9% |      20 | `LinearScan::do_linear_scan()`              | `<unknown>` |
|  9.1% |       2 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 40.9% |       9 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 27.3% |       6 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
| 18.2% |       4 | `semaphore_wait_trap`                           | `<unknown>` |
| 13.6% |       3 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |

##### `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      11 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |

##### `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 72.7% |       8 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
|  9.1% |       1 | `LinkResolver::check_method_accessability(Klass*, Klass*, Klass*, methodHandle const&, JavaThread*)`                             | `<unknown>` |
|  9.1% |       1 | `Reflection::verify_member_access(Klass const*, Klass const*, Klass const*, AccessFlags, bool, bool, JavaThread*)`               | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.3% |      15 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                   |
| 1.2% |       8 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                               |
| 1.1% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                          |
| 0.9% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                    |
| 0.8% |       5 | `IndexSet::initialize(unsigned int)` ← `PhaseIFG::init(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                |
| 0.8% |       5 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                   |
| 0.6% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                   |
| 0.6% |       4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                 |
| 0.6% |       4 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                   |
| 0.6% |       4 | `semaphore_wait_trap` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.6% |       4 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                            |
| 0.6% |       4 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                 |
| 0.6% |       4 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                          |
| 0.6% |       4 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` |
| 0.5% |       3 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                         |
| 0.5% |       3 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                        |
| 0.5% |       3 | `Node::dominates(Node*, Node_List&)` ← `MemNode::all_controls_dominate(Node*, Node*)` ← `InitializeNode::detect_init_independence(Node*, PhaseGVN*)` ← `InitializeNode::can_capture_store(StoreNode*, PhaseGVN*, bool)` ← `StoreNode::Ideal(PhaseGVN*, bool)` ← `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                          |
| 0.5% |       3 | `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                           |
| 0.5% |       3 | `PhaseOutput::BuildOopMaps()` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                    |
| 0.5% |       3 | `MultiNode::is_CFG() const` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                             |
