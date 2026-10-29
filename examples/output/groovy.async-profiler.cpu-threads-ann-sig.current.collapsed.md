# Sampling profile

Collected 599 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 59.6% |     357 |
| Native            | 24.7% |     148 |
| Standard library  | 14.7% |      88 |
| JIT               |  0.7% |       4 |
| Garbage collector |  0.2% |       1 |
| Ours              |  0.2% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 449 samples (75.0%) Thread::call_run()
│   ├── 434 samples (72.5%) JavaThread::thread_main_inner()
│   │   └── 433 samples (72.3%) CompileBroker::compiler_thread_loop()
│   │       ├── 430 samples (71.8%) CompileBroker::invoke_compiler_on_method(CompileTask*)
│   │       │   ├── 356 samples (59.4%) C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)
│   │       │   │   └── 355 samples (59.3%) Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)
│   │       │   │       ├── 176 samples (29.4%) Compile::Code_Gen()
│   │       │   │       │   ├── 104 samples (17.4%) PhaseChaitin::Register_Allocate()
│   │       │   │       │   │   ├── 20 samples (3.3%, self 1.7%) PhaseChaitin::build_ifg_physical(ResourceArea*)
│   │       │   │       │   │   │   ├── 4 samples (0.7%, self 1.7% globally) IndexSetIterator::advance_and_next()
│   │       │   │       │   │   │   └── 6 samples (1.0%) 4 more callees, led by (0.3%) PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)
│   │       │   │       │   │   ├── 14 samples (2.3%, self 1.5%) PhaseChaitin::Split(unsigned int, ResourceArea*)
│   │       │   │       │   │   │   └── 5 samples (0.8%) 4 more callees, led by (0.3%) MachNode::rematerialize() const
│   │       │   │       │   │   ├── 13 samples (2.2%) PhaseChaitin::post_allocate_copy_removal()
│   │       │   │       │   │   │   └── 11 samples (1.8%, self 1.5%) PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)
│   │       │   │       │   │   ├── 4 samples (0.7%) PhaseAggressiveCoalesce::insert_copies(Matcher&)
│   │       │   │       │   │   └── 52 samples (8.7%) 21 more callees, led by (2.5%) PhaseLive::compute(unsigned int)
│   │       │   │       │   ├── 29 samples (4.8%) Matcher::match()
│   │       │   │       │   │   ├── 22 samples (3.7%, self 1.3%) Matcher::xform(Node*, int)
│   │       │   │       │   │   │   └── 14 samples (2.3%) 5 more callees, led by (1.5%) Matcher::match_tree(Node const*)
│   │       │   │       │   │   └── 5 samples (0.8%, self 0.7%) Matcher::find_shared(Node*)
│   │       │   │       │   └── 42 samples (7.0%) 3 more callees, led by (3.8%) PhaseOutput::Output()
│   │       │   │       ├── 138 samples (23.0%) Compile::Optimize()
│   │       │   │       │   ├── … 42 samples (7.0%) PhaseIdealLoop::build_and_optimize()
│   │       │   │       │   │   ├── 14 samples (2.3%, self 0.7%) PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)
│   │       │   │       │   │   │   └── 9 samples (1.5%, self 0.8%, self 1.5% globally) PhaseIdealLoop::build_loop_late_post_work(Node*, bool)
│   │       │   │       │   │   │       └── 2 samples (0.3%) PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)
│   │       │   │       │   │   ├── 5 samples (0.8%, self 1.5% globally) PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)
│   │       │   │       │   │   └── 23 samples (3.8%) 10 more callees, led by (1.2%) PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)
│   │       │   │       │   └── 94 samples (15.7%) 11 more callees, led by (6.7%) Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)
│   │       │   │       └── 41 samples (6.8%) 5 more callees, led by (6.0%) ParseGenerator::generate(JVMState*)
│   │       │   └── 74 samples (12.4%) 8 more callees, led by (11.2%) Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)
│   │       └── … 3 samples (0.5%, self 1.0% globally) __psynch_cvwait
│   └── 15 samples (2.5%) WorkerThread::run()
│       └── 15 samples (2.5%) 4 more callees, led by (1.5%) G1EvacuateRegionsBaseTask::work(unsigned int)
├── 132 samples (22.0%) main(String[]) at org.codenarc.CodeNarc
│   ├── … 127 samples (21.2%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x000000f001088800
│   │   └── 127 samples (21.2%) 2 more callees, led by (19.2%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│   └── 5 samples (0.8%) 2 more callees, led by (0.5%) linkToCallSite(Object, Object) at java.lang.invoke.Invokers$Holder
└── 17 samples (2.8%) 5 more root frames, led by (2.0%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 1.7% |      10 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.7% |      10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.7% |      10 | `tlv_get_addr`                                                               | `<unknown>` |
| 1.5% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.5% |       9 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 1.3% |       8 | `_platform_memset`                                                           | `<unknown>` |
| 1.3% |       8 | `Matcher::xform(Node*, int)`                                                 | `<unknown>` |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`         | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 1.0% |       6 | `__psynch_cvwait`                                                            | `<unknown>` |
| 1.0% |       6 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
| 1.0% |       6 | `pthread_jit_write_protect_np`                                               | `<unknown>` |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| 0.7% |       4 | `__psynch_mutexwait`                                                         | `<unknown>` |
| 0.7% |       4 | `inflate_fast`                                                               | `<unknown>` |
| 0.7% |       4 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                 | `<unknown>` |
| 0.7% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.7% |       4 | `SignatureStream::next()`                                                    | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|    % | Samples | Function                                                                     | Location    |
| ---: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 1.7% |      10 | `IndexSetIterator::advance_and_next()`                                       | `<unknown>` |
| 1.7% |      10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
| 1.5% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| 1.5% |       9 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                           | `<unknown>` |
| 1.5% |       9 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| 1.3% |       8 | `Matcher::xform(Node*, int)`                                                 | `<unknown>` |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`         | `<unknown>` |
| 1.0% |       6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| 1.0% |       6 | `Node::dominates(Node*, Node_List&)`                                         | `<unknown>` |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| 0.7% |       4 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                 | `<unknown>` |
| 0.7% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                           | `<unknown>` |
| 0.7% |       4 | `Matcher::find_shared(Node*)`                                                | `<unknown>` |
| 0.7% |       4 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)`    | `<unknown>` |
| 0.7% |       4 | `Type::cmp(Type const*, Type const*)`                                        | `<unknown>` |
| 0.7% |       4 | `Unique_Node_List::remove(Node*)`                                            | `<unknown>` |
| 0.7% |       4 | `PhaseChaitin::gather_lrg_masks(bool)`                                       | `<unknown>` |
| 0.5% |       3 | `PhaseChaitin::Select()`                                                     | `<unknown>` |
| 0.5% |       3 | `Node::is_CFG() const`                                                       | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.7% |      10 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.3% |       8 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 1.0% |       6 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 1.0% |       6 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.7% |       4 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.7% |       4 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 0.7% |       4 | `SignatureStream::next()`                                                                                                                                                   | `<unknown>` |
| 0.5% |       3 | `mach_absolute_time`                                                                                                                                                        | `<unknown>` |
| 0.5% |       3 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.5% |       3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.5% |       3 | `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)`                                                                                    | `<unknown>` |
| 0.5% |       3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 0.5% |       3 | `_platform_memchr`                                                                                                                                                          | `<unknown>` |
| 0.3% |       2 | `fwd_copy_drain`                                                                                                                                                            | `<unknown>` |
| 0.3% |       2 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)`                                                                                        | `<unknown>` |
| 0.3% |       2 | `posix_madvise`                                                                                                                                                             | `<unknown>` |
| 0.3% |       2 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.3% |       2 | `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)`                                                                                  | `<unknown>` |
| 0.3% |       2 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                                                                                                     | `<unknown>` |
| 0.3% |       2 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |

##### Standard library

|    % | Samples | Function                                                                                                      | Location                                                 |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 0.3% |       2 | `resize()`                                                                                                    | `java.util.HashMap`                                      |
| 0.3% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`   |
| 0.3% |       2 | `join(PredictionContext, PredictionContext, PredictionContextCache)`                                          | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`    |
| 0.3% |       2 | `equals(ATNConfig)`                                                                                           | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`            |
| 0.3% |       2 | `newInstance(Class, int)`                                                                                     | `java.lang.reflect.Array`                                |
| 0.3% |       2 | `cast(Object)`                                                                                                | `java.lang.Class`                                        |
| 0.3% |       2 | `getOptimizedTransition(int)`                                                                                 | `groovyjarjarantlr4.v4.runtime.atn.ATNState`             |
| 0.3% |       2 | `coder()`                                                                                                     | `java.lang.String`                                       |
| 0.2% |       1 | `delegate(Object, Object)`                                                                                    | `java.lang.invoke.DelegatingMethodHandle$Holder`         |
| 0.2% |       1 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| 0.2% |       1 | `invokeVirtual(Object, Object)`                                                                               | `java.lang.invoke.DirectMethodHandle$Holder`             |
| 0.2% |       1 | `visitAnnotations(AnnotatedNode)`                                                                             | `org.codehaus.groovy.ast.ClassCodeVisitorSupport`        |
| 0.2% |       1 | `invoke(Object, Object)`                                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f0012acc00`      |
| 0.2% |       1 | `apply(Object)`                                                                                               | `groovy.lang.MetaClassImpl$$Lambda.0x000000f00103ca50`   |
| 0.2% |       1 | `loadClass(String)`                                                                                           | `java.lang.ClassLoader`                                  |
| 0.2% |       1 | `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)`                                            | `org.codehaus.groovy.vmplugin.v8.IndyInterface`          |
| 0.2% |       1 | `visitCode()`                                                                                                 | `jdk.internal.org.objectweb.asm.MethodWriter`            |
| 0.2% |       1 | `<init>(MethodType, LambdaForm)`                                                                              | `java.lang.invoke.BoundMethodHandle`                     |
| 0.2% |       1 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`                  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`          |
| 0.2% |       1 | `getAndPut(String, MemoizeCache$ValueProvider)`                                                               | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`      |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                               | Location    |
| ----: | ------: | -------------------------------------------------------------------- | ----------- |
| 40.0% |       4 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                    | `<unknown>` |
| 30.0% |       3 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` | `<unknown>` |
| 10.0% |       1 | `PhaseLive::compute(unsigned int)`                                   | `<unknown>` |
| 10.0% |       1 | `PhaseIFG::remove_node(unsigned int)`                                | `<unknown>` |
| 10.0% |       1 | `PhaseChaitin::Simplify()`                                           | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 20.0% |       2 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
| 10.0% |       1 | `InitializeNode::capture_store(StoreNode*, long, PhaseGVN*, bool)`                    | `<unknown>` |
| 10.0% |       1 | `TypeInterfaces::intersection_with(TypeInterfaces const*) const`                      | `<unknown>` |
| 10.0% |       1 | `BlockListBuilder::mark_loops(BlockBegin*, bool)`                                     | `<unknown>` |
| 10.0% |       1 | `SystemDictionary::add_loader_constraint(Symbol*, Klass*, Handle, Handle)`            | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                 | Location    |
| -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 12.5% |       1 | `GraphBuilder::append_with_bci(Instruction*, int)` | `<unknown>` |
| 12.5% |       1 | `MemAllocator::allocate() const`                   | `<unknown>` |
| 12.5% |       1 | `PhaseCFG::build_cfg()`                            | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate()`                | `<unknown>` |
| 12.5% |       1 | `Parse::do_get_xxx(Node*, ciField*, bool)`         | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       8 | `Matcher::match()` | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       6 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       6 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `Node::dominates(Node*, Node_List&)` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       6 | `MemNode::all_controls_dominate(Node*, Node*)` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                       | Location                        |
| ----: | ------: | -------------------------------------------- | ------------------------------- |
| 16.7% |       1 | `InterpreterRuntime::ldc(JavaThread*, bool)` | `<unknown>`                     |
| 16.7% |       1 | `<init>(Set)`                                | `java.util.Properties$EntrySet` |
| 16.7% |       1 | `JVM_IsArrayClass`                           | `<unknown>`                     |
| 16.7% |       1 | `JVM_IHashCode`                              | `<unknown>`                     |
| 16.7% |       1 | `JVM_NewArray`                               | `<unknown>`                     |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       4 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist(Node*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                           | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 50.0% |       2 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                                             | `<unknown>` |
| 25.0% |       1 | `PhaseIdealLoop::clone_loop_handle_data_uses(Node*, Node_List&, IdealLoopTree*, IdealLoopTree*, Node_List*&, Node_List*&, Node_List*&, Node_List&, unsigned int, PhaseIdealLoop::CloneLoopMode)` | `<unknown>` |
| 25.0% |       1 | `PhaseIterGVN::optimize()`                                                                                                                                                                       | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `SignatureStream::next()` (`<unknown>`)

|     % | Samples | Caller                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       2 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |
| 25.0% |       1 | `void SignatureIterator::do_parameters_on<Fingerprinter>(Fingerprinter*)`               | `<unknown>` |
| 25.0% |       1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                 | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       4 | `Matcher::match()` | `<unknown>` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 75.0% |       3 | `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)`              | `<unknown>` |
| 25.0% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)` | `<unknown>` |

##### `Type::cmp(Type const*, Type const*)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       4 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `Unique_Node_List::remove(Node*)` (`<unknown>`)

|      % | Samples | Caller                                           | Location    |
| -----: | ------: | ------------------------------------------------ | ----------- |
| 100.0% |       4 | `PhaseIterGVN::remove_globally_dead_node(Node*)` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseChaitin::Select()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Node::is_CFG() const` (`<unknown>`)

|     % | Samples | Caller                                                         | Location    |
| ----: | ------: | -------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `ProjNode::is_uncommon_trap_proj(Deoptimization::DeoptReason)` | `<unknown>` |
| 33.3% |       1 | `PhaseIdealLoop::build_loop_tree()`                            | `<unknown>` |
| 33.3% |       1 | `PhaseIdealLoop::Dominators()`                                 | `<unknown>` |

##### `mach_absolute_time` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       3 | `os::elapsed_counter()` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `CompiledIC::set_to_clean(bool)`                                                                                                                                                                                                                                  | `<unknown>` |
| 33.3% |       1 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| 33.3% |       1 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                                 | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.7% |       2 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 33.3% |       1 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 33.3% |       1 | `Node_Array::grow(unsigned int)`     | `<unknown>` |
| 33.3% |       1 | `Node::dominates(Node*, Node_List&)` | `<unknown>` |
| 33.3% |       1 | `Node::out_grow(unsigned int)`       | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|      % | Samples | Caller                                                                                                                           | Location    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       3 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |

##### `_platform_memchr` (`<unknown>`)

|     % | Samples | Caller                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       1 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`              | `<unknown>` |
| 33.3% |       1 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |
| 33.3% |       1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                 | `<unknown>` |

##### `fwd_copy_drain` (`<unknown>`)

|     % | Samples | Caller                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 50.0% |       1 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| 50.0% |       1 | `CodeBuffer::copy_code_to(CodeBlob*)`                         | `<unknown>` |

##### `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&)` | `<unknown>` |

##### `posix_madvise` (`<unknown>`)

|      % | Samples | Caller        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       2 | `free_medium` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       2 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|     % | Samples | Caller                                              | Location    |
| ----: | ------: | --------------------------------------------------- | ----------- |
| 50.0% |       1 | `JvmtiExport::post_class_load(JavaThread*, Klass*)` | `<unknown>` |
| 50.0% |       1 | `jni_GetSuperclass`                                 | `<unknown>` |

##### `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                              | Location    |
| ----: | ------: | --------------------------------------------------- | ----------- |
| 50.0% |       1 | `OopRecorder::find_index(Metadata*)`                | `<unknown>` |
| 50.0% |       1 | `MacroAssembler::mov_metadata(Register, Metadata*)` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       2 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|      % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `join(PredictionContext, PredictionContext, PredictionContextCache)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|      % | Samples | Caller                                   | Location                                         |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------ |
| 100.0% |       2 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `equals(ATNConfig)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|      % | Samples | Caller           | Location                                      |
| -----: | ------: | ---------------- | --------------------------------------------- |
| 100.0% |       2 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

|     % | Samples | Caller                                   | Location                                             |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| 50.0% |       1 | `copyOfRange(Object[], int, int, Class)` | `java.util.Arrays`                                   |
| 50.0% |       1 | `invokeStatic(Object, Object, int)`      | `java.lang.invoke.LambdaForm$DMH.0x000000f00102b400` |

##### `cast(Object)` (`java.lang.Class`)

|      % | Samples | Caller                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |       2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getOptimizedTransition(int)` (`groovyjarjarantlr4.v4.runtime.atn.ATNState`)

|     % | Samples | Caller                                                                                                        | Location                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 50.0% |       1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)`                  | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| 50.0% |       1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `coder()` (`java.lang.String`)

|     % | Samples | Caller                             | Location           |
| ----: | ------: | ---------------------------------- | ------------------ |
| 50.0% |       1 | `length()`                         | `java.lang.String` |
| 50.0% |       1 | `getBytesNoRepl1(String, Charset)` | `java.lang.String` |

##### `delegate(Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

|      % | Samples | Caller                  | Location                                            |
| -----: | ------: | ----------------------- | --------------------------------------------------- |
| 100.0% |       1 | `guard(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001098400` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|      % | Samples | Caller                                   | Location                    |
| -----: | ------: | ---------------------------------------- | --------------------------- |
| 100.0% |       1 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller           | Location                                            |
| -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% |       1 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001089400` |

##### `visitAnnotations(AnnotatedNode)` (`org.codehaus.groovy.ast.ClassCodeVisitorSupport`)

|      % | Samples | Caller                                          | Location                                          |
| -----: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `visitConstructorOrMethod(MethodNode, boolean)` | `org.codehaus.groovy.ast.ClassCodeVisitorSupport` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0012acc00`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `apply(Object)` (`groovy.lang.MetaClassImpl$$Lambda.0x000000f00103ca50`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                      | Location                                             |
| -----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `invokeStatic(Object, Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001086400` |

##### `visitCode()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `clinit(ClassWriter, String, List)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.BoundMethodHandle`)

|      % | Samples | Caller                                   | Location                                       |
| -----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `<init>(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_L` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|      % | Samples | Caller                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |       1 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|      % | Samples | Caller                                                                          | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 75.1% |     450 | `_pthread_start`                                                                              | `<unknown>`                                          |
| 75.1% |     450 | `thread_start`                                                                                | `<unknown>`                                          |
| 75.0% |     449 | `Thread::call_run()`                                                                          | `<unknown>`                                          |
| 75.0% |     449 | `thread_native_entry(Thread*)`                                                                | `<unknown>`                                          |
| 72.5% |     434 | `JavaThread::thread_main_inner()`                                                             | `<unknown>`                                          |
| 72.3% |     433 | `CompileBroker::compiler_thread_loop()`                                                       | `<unknown>`                                          |
| 71.8% |     430 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                      | `<unknown>`                                          |
| 59.4% |     356 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                     | `<unknown>`                                          |
| 59.3% |     355 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                            | `<unknown>`                                          |
| 29.4% |     176 | `Compile::Code_Gen()`                                                                         | `<unknown>`                                          |
| 23.0% |     138 | `Compile::Optimize()`                                                                         | `<unknown>`                                          |
| 22.0% |     132 | `main(String[])`                                                                              | `org.codenarc.CodeNarc`                              |
| 21.7% |     130 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.4% |     128 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     128 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| 21.2% |     127 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`  |
| 21.2% |     127 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.0% |     126 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`  |
| 21.0% |     126 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`  |
| 21.0% |     126 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 72.3% |     433 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 71.8% |     430 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 59.4% |     356 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 59.3% |     355 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 29.4% |     176 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 23.0% |     138 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 17.4% |     104 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
| 13.9% |      83 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
| 13.0% |      78 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
| 13.0% |      78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
| 11.2% |      67 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 11.2% |      67 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
|  9.7% |      58 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
|  6.7% |      40 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  6.5% |      39 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  6.0% |      36 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  4.8% |      29 | `Matcher::match()`                                                                                      | `<unknown>` |
|  4.3% |      26 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.2% |      25 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  4.0% |      24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                  | `<unknown>` |

##### Native

|     % | Samples | Function                                                                | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 75.1% |     450 | `_pthread_start`                                                        | `<unknown>` |
| 75.1% |     450 | `thread_start`                                                          | `<unknown>` |
| 75.0% |     449 | `Thread::call_run()`                                                    | `<unknown>` |
| 75.0% |     449 | `thread_native_entry(Thread*)`                                          | `<unknown>` |
| 72.5% |     434 | `JavaThread::thread_main_inner()`                                       | `<unknown>` |
| 11.2% |      67 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
|  6.2% |      37 | `Parse::Parse(JVMState*, ciMethod*, float)`                             | `<unknown>` |
|  6.2% |      37 | `ParseGenerator::generate(JVMState*)`                                   | `<unknown>` |
|  5.8% |      35 | `Parse::do_one_block()`                                                 | `<unknown>` |
|  5.8% |      35 | `Parse::do_all_blocks()`                                                | `<unknown>` |
|  5.7% |      34 | `Parse::do_call()`                                                      | `<unknown>` |
|  4.2% |      25 | `PredictedCallGenerator::generate(JVMState*)`                           | `<unknown>` |
|  3.8% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`   | `<unknown>` |
|  3.8% |      23 | `IR::IR(Compilation*, ciMethod*, int)`                                  | `<unknown>` |
|  2.5% |      15 | `WorkerThread::run()`                                                   | `<unknown>` |
|  1.7% |      10 | `tlv_get_addr`                                                          | `<unknown>` |
|  1.5% |       9 | `G1EvacuateRegionsBaseTask::work(unsigned int)`                         | `<unknown>` |
|  1.5% |       9 | `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)` | `<unknown>` |
|  1.3% |       8 | `_platform_memset`                                                      | `<unknown>` |
|  1.3% |       8 | `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)`  | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 21.7% |     130 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
| 21.4% |     128 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.4% |     128 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| 21.2% |     127 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`  |
| 21.2% |     127 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                   |
| 21.0% |     126 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`  |
| 21.0% |     126 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`  |
| 21.0% |     126 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`  |
| 19.9% |     119 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f001092000`  |
| 19.9% |     119 | `linkToCallSite(Object, Object)`                                                              | `java.lang.invoke.Invokers$Holder`                   |
| 19.9% |     119 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x000000f001092800` |
| 19.9% |     119 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`  |
| 19.5% |     117 | `guardWithCatch(Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f001096800`  |
| 19.5% |     117 | `guard(Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000f001098400`  |
| 19.5% |     117 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`  |
| 19.5% |     117 | `reinvoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH.0x000000f001098000`  |
| 19.5% |     117 | `invokeVirtual(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 19.5% |     117 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`  |
| 18.9% |     113 | `invokeVirtual(Object, Object)`                                                               | `java.lang.invoke.DirectMethodHandle$Holder`         |
| 18.7% |     112 | `invoke(Object, Object)`                                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f00102b000`  |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|      % | Samples | Caller         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |     450 | `thread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |     449 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     449 | `_pthread_start` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     434 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |     433 | `JavaThread::thread_main_inner()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     430 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                   | Location    |
| -----: | ------: | -------------------------------------------------------- | ----------- |
| 100.0% |     356 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                                    | Location    |
| -----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 100.0% |     355 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     176 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|      % | Samples | Caller                                                             | Location    |
| -----: | ------: | ------------------------------------------------------------------ | ----------- |
| 100.0% |     138 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Caller                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 98.5% |     128 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|  2.3% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088c00` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                                                                           | Location                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| 100.0% |     128 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
|  45.3% |      58 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
|   0.8% |       1 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001088800`)

|     % | Samples | Caller                                           | Location                                            |
| ----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 99.2% |     127 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400` |
| 91.4% |     117 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f001092000` |
| 71.9% |      92 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0010d8800` |
| 66.4% |      85 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001200400` |
| 16.4% |      21 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f0012ddc00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     127 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|  20.5% |      26 | `reinvoke(Object, Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Caller                                   | Location                                                                   |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |     127 | `main(String[])`                         | `org.codenarc.CodeNarc`                                                    |
|  71.7% |      91 | `execute()`                              | `org.codenarc.CodeNarcRunner`                                              |
|  67.7% |      86 | `processDirectory(String, RuleSet)`      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                           |
|  36.2% |      46 | `doCall(Object)`                         | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1` |
|  36.2% |      46 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                             |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
|  68.3% |      86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`)

|      % | Samples | Caller                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
|  68.3% |      86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`)

|      % | Samples | Caller                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800` |
|  92.9% |     117 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7000` |
|  87.3% |     110 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f0010d3800` |
|  42.1% |      53 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f0010dcc00` |
|  34.1% |      43 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f0010ad800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001092000`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     119 | `linkToCallSite(Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   1.7% |       2 | `reinvoke(Object, Object)`       | `java.lang.invoke.LambdaForm$MH.0x000000f001098000` |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Caller                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 95.8% |     114 | `execute(String[])`      | `org.codenarc.CodeNarc`                  |
| 37.8% |      45 | `getAst()`               | `org.codenarc.source.AbstractSourceCode` |
| 15.1% |      18 | `execute()`              | `org.codenarc.CodeNarcRunner`            |
| 10.9% |      13 | `createInitialRuleSet()` | `org.codenarc.CodeNarcRunner`            |
| 10.9% |      13 | `buildRuleSet()`         | `org.codenarc.CodeNarcRunner`            |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001092800`)

|      % | Samples | Caller                                           | Location                                            |
| -----: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| 100.0% |     119 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab400` |
|  61.3% |      73 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010d2c00` |
|   1.7% |       2 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000f0010c9800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     119 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001096800`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001098000` |
|  26.5% |      31 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001098400`)

|      % | Samples | Caller                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001098000` |
|  27.4% |      32 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`)

|      % | Samples | Caller                                   | Location                           |
| -----: | ------: | ---------------------------------------- | ---------------------------------- |
| 100.0% |     117 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001098000`)

|      % | Samples | Caller                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     117 | `guard(Object, Object)`  | `java.lang.invoke.LambdaForm$MH.0x000000f001098400` |
|  95.7% |     112 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00109a000` |
|  40.2% |      47 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001099000` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010c6400` |
|   3.4% |       4 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7400` |
|   1.7% |       2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001121000` |
|   0.9% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0012e0800` |
|   0.9% |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0012e1800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Caller                           | Location                                            |
| ----: | ------: | -------------------------------- | --------------------------------------------------- |
| 99.1% |     112 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f00102b000` |
| 14.2% |      16 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001096800` |
|  0.9% |       1 | `invoke(Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000f001089400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00102b000`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     112 | `guardWithCatch(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f001096800` |
|   0.9% |       1 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |     104 | `Compile::Code_Gen()` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Caller                                                 | Location    |
| ----: | ------: | ------------------------------------------------------ | ----------- |
| 53.0% |      44 | `Compile::Optimize()`                                  | `<unknown>` |
| 47.0% |      39 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |      78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Caller                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      78 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|      % | Samples | Caller                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      67 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                                  | Location    |
| -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 100.0% |      67 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Caller                                                   | Location    |
| -----: | ------: | -------------------------------------------------------- | ----------- |
| 100.0% |      67 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|      % | Samples | Caller                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      58 | `Compilation::compile_method()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      40 | `Compile::Optimize()` | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Caller                                                    | Location    |
| ----: | ------: | --------------------------------------------------------- | ----------- |
| 64.1% |      25 | `Compile::Optimize()`                                     | `<unknown>` |
| 15.4% |       6 | `PhaseMacroExpand::expand_macro_nodes()`                  | `<unknown>` |
| 12.8% |       5 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`   | `<unknown>` |
|  5.1% |       2 | `Compile::process_for_post_loop_opts_igvn(PhaseIterGVN&)` | `<unknown>` |
|  2.6% |       1 | `Compile::remove_speculative_types(PhaseIterGVN&)`        | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Caller                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      37 | `ParseGenerator::generate(JVMState*)` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 97.3% |      36 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
| 62.2% |      23 | `PredictedCallGenerator::generate(JVMState*)`                      | `<unknown>` |
| 40.5% |      15 | `Parse::do_call()`                                                 | `<unknown>` |
|  2.7% |       1 | `CallGenerator::do_late_inline_helper()`                           | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      36 | `PhaseIterGVN::optimize()`         | `<unknown>` |
|   2.8% |       1 | `SubINode::Ideal(PhaseGVN*, bool)` | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      35 | `Parse::do_all_blocks()` | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      35 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      34 | `Parse::do_one_block()` | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      29 | `Compile::Code_Gen()` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      26 | `Compilation::compile_java_method()` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |      25 | `Compilation::compile_java_method()` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |      25 | `Parse::do_call()`                            | `<unknown>` |
|  28.0% |       7 | `PredictedCallGenerator::generate(JVMState*)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      24 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      23 | `IR::IR(Compilation*, ciMethod*, int)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Caller                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      23 | `Compilation::build_hir()` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      15 | `Thread::call_run()` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|     % | Samples | Caller                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------- | ----------- |
| 20.0% |       2 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` | `<unknown>` |
| 10.0% |       1 | `InitializeNode::capture_store(StoreNode*, long, PhaseGVN*, bool)`                    | `<unknown>` |
| 10.0% |       1 | `TypeInterfaces::intersection_with(TypeInterfaces const*) const`                      | `<unknown>` |
| 10.0% |       1 | `BlockListBuilder::mark_loops(BlockBegin*, bool)`                                     | `<unknown>` |
| 10.0% |       1 | `SystemDictionary::add_loader_constraint(Symbol*, Klass*, Handle, Handle)`            | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |       9 | `WorkerThread::run()` | `<unknown>` |

##### `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       9 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 12.5% |       1 | `GraphBuilder::append_with_bci(Instruction*, int)` | `<unknown>` |
| 12.5% |       1 | `MemAllocator::allocate() const`                   | `<unknown>` |
| 12.5% |       1 | `PhaseCFG::build_cfg()`                            | `<unknown>` |
| 12.5% |       1 | `PhaseChaitin::Register_Allocate()`                | `<unknown>` |
| 12.5% |       1 | `Parse::do_get_xxx(Node*, ciField*, bool)`         | `<unknown>` |

##### `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)` (`<unknown>`)

|     % | Samples | Caller                                            | Location                                                                     |
| ----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 12.5% |       1 | `accept(TypeTreeVisitor)`                         | `sun.reflect.generics.tree.IntSignature`                                     |
| 12.5% |       1 | `copyWithExtendL(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLILLLLL`                      |
| 12.5% |       1 | `unmodifiableMap(Map)`                            | `java.util.Collections`                                                      |
| 12.5% |       1 | `<clinit>()`                                      | `groovyjarjarantlr4.v4.runtime.atn.ATNDeserializer$UnicodeDeserializingMode` |
| 12.5% |       1 | `loadRuleScriptElements(Node)`                    | `org.codenarc.ruleset.XmlReaderRuleSet`                                      |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.8% |     449 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.2% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     450 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 96.7% |     434 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  3.3% |      15 | `WorkerThread::run()`             | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     449 | `Thread::call_run()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                                             | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------- | ----------- |
| 99.8% |     433 | `CompileBroker::compiler_thread_loop()`                                            | `<unknown>` |
|  0.2% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 99.3% |     430 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  0.7% |       3 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 82.8% |     356 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 15.6% |      67 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.2% |       1 | `TraceTime::TraceTime(char const*, elapsedTimer*, bool, bool)`            | `<unknown>` |
|  0.2% |       1 | `stringStream::stringStream(char*, unsigned long)`                        | `<unknown>` |
|  0.2% |       1 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 99.7% |     355 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  0.3% |       1 | `Compile::~Compile()`                                              | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 49.6% |     176 | `Compile::Code_Gen()`                         | `<unknown>` |
| 38.9% |     138 | `Compile::Optimize()`                         | `<unknown>` |
| 10.1% |      36 | `ParseGenerator::generate(JVMState*)`         | `<unknown>` |
|  0.6% |       2 | `CallGenerator::for_inline(ciMethod*, float)` | `<unknown>` |
|  0.3% |       1 | `Compile::inline_string_calls(bool)`          | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 59.1% |     104 | `PhaseChaitin::Register_Allocate()`               | `<unknown>` |
| 16.5% |      29 | `Matcher::match()`                                | `<unknown>` |
| 13.1% |      23 | `PhaseOutput::Output()`                           | `<unknown>` |
|  9.7% |      17 | `PhaseCFG::do_global_code_motion()`               | `<unknown>` |
|  1.1% |       2 | `PhaseCFG::PhaseCFG(Arena*, RootNode*, Matcher&)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 31.9% |      44 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 29.0% |      40 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 18.1% |      25 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  5.8% |       8 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
|  5.1% |       7 | `PhaseMacroExpand::expand_macro_nodes()`                | `<unknown>` |

##### `main(String[])` (`org.codenarc.CodeNarc`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 96.2% |     127 | `linkToCallSite(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`     |
|  2.3% |       3 | `linkToCallSite(Object, Object)`                                 | `java.lang.invoke.Invokers$Holder`     |
|  1.5% |       2 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|     % | Samples | Callee                                                  | Location                                        |
| ----: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| 98.5% |     128 | `invokeExact_MT(Object, Object, Object)`                | `java.lang.invoke.Invokers$Holder`              |
| 16.2% |      21 | `doWithCallSite(MutableCallSite, Object[], BiFunction)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                   | Location                                            |
| ----: | ------: | ------------------------ | --------------------------------------------------- |
| 91.4% |     117 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010c7000` |
| 87.5% |     112 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00109a000` |
| 85.9% |     110 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010d3800` |
| 67.2% |      86 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0011ba000` |
| 63.3% |      81 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001205c00` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001088800`)

|      % | Samples | Callee                                                                                           | Location                                        |
| -----: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 100.0% |     128 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  49.2% |      63 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010a9400`)

|      % | Samples | Callee                                                                                      | Location                                             |
| -----: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     127 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     127 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400` |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`)

|     % | Samples | Callee                                    | Location                                             |
| ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 94.4% |     119 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`  |
| 92.9% |     117 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`  |
| 69.0% |      87 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001093000` |
| 35.7% |      45 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f00121a000`  |
| 31.7% |      40 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f001229800`  |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
|  68.3% |      86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|   0.8% |       1 | `invokeBasic(Object[])`            | `java.lang.invoke.MethodHandle`                     |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`)

|      % | Samples | Callee                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |     126 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |
| 100.0% |     126 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800` |
|  20.6% |      26 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0010a9400` |
|  16.7% |      21 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0012ddc00` |
|   7.9% |      10 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0012e7400` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001092000`)

|     % | Samples | Callee                                                                                          | Location                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 98.3% |     117 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|  2.5% |       3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088c00` |
|  0.8% |       1 | `collector(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$MH.0x000000f001031800`  |

##### `linkToCallSite(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                   | Location                                            |
| -----: | ------: | ------------------------ | --------------------------------------------------- |
| 100.0% |     119 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001092000` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001092800`)

|     % | Samples | Callee                                   | Location                                       |
| ----: | ------: | ---------------------------------------- | ---------------------------------------------- |
| 72.3% |      86 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
| 61.3% |      73 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| 38.7% |      46 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| 17.6% |      21 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| 10.1% |      12 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ab400`)

|      % | Samples | Callee                                          | Location                                             |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |     119 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001092800` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001096800`)

|     % | Samples | Callee                          | Location                                            |
| ----: | ------: | ------------------------------- | --------------------------------------------------- |
| 95.7% |     112 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f00102b000` |
| 45.3% |      53 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f001105400` |
| 13.7% |      16 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| 12.0% |      14 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|  5.1% |       6 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f001018400` |

##### `guard(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001098400`)

|      % | Samples | Callee                     | Location                                            |
| -----: | ------: | -------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `reinvoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001098000` |
|  27.4% |      32 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c7000`)

|      % | Samples | Callee                             | Location                                            |
| -----: | ------: | ---------------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
|  68.4% |      80 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `reinvoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001098000`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     117 | `guardWithCatch(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001096800` |
| 100.0% |     117 | `guard(Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f001098400` |
|   1.7% |       2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f001092000` |
|   0.9% |       1 | `maybeStopCounting(Object)`      | `java.lang.invoke.MethodHandleImpl$CountingWrapper` |

##### `invokeVirtual(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|      % | Samples | Callee                                                    | Location                                                     |
| -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |     117 | `execute(String[])`                                       | `org.codenarc.CodeNarc`                                      |
|   2.6% |       3 | `parseArgs(String[])`                                     | `org.codenarc.CodeNarc`                                      |
|   1.7% |       2 | `writeTitle(Writer)`                                      | `org.codenarc.report.TextReportWriter`                       |
|   0.9% |       1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor` |
|   0.9% |       1 | `validate(Source)`                                        | `javax.xml.validation.Validator`                             |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010c6400`)

|      % | Samples | Callee                                  | Location                                     |
| -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% |     117 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|     % | Samples | Callee                    | Location                                   |
| ----: | ------: | ------------------------- | ------------------------------------------ |
| 99.1% |     112 | `execute()`               | `org.codenarc.CodeNarcRunner`              |
| 11.5% |      13 | `createInitialRuleSet()`  | `org.codenarc.CodeNarcRunner`              |
|  1.8% |       2 | `getFormattedTimestamp()` | `org.codenarc.report.AbstractReportWriter` |
|  0.9% |       1 | `createSourceAnalyzer()`  | `org.codenarc.CodeNarc`                    |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f00102b000`)

|      % | Samples | Callee                          | Location                                            |
| -----: | ------: | ------------------------------- | --------------------------------------------------- |
| 100.0% |     112 | `invokeVirtual(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|   0.9% |       1 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH.0x000000f00102ac00` |
|   0.9% |       1 | `invokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 19.2% |      20 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 14.4% |      15 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
| 13.5% |      14 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 12.5% |      13 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
|  4.8% |       5 | `PhaseChaitin::Select()`                           | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 94.0% |      78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
|  6.0% |       5 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 30.8% |      24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 19.2% |      15 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 12.8% |      10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 10.3% |       8 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |
|  6.4% |       5 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      78 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 86.6% |      58 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
| 11.9% |       8 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  1.5% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      67 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      67 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 44.8% |      26 | `Compilation::build_hir()`      | `<unknown>` |
| 43.1% |      25 | `Compilation::emit_lir()`       | `<unknown>` |
| 12.1% |       7 | `Compilation::emit_code_body()` | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 97.5% |      39 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
|  2.5% |       1 | `Compile::print_method(CompilerPhaseType, int, Node*)`  | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 92.3% |      36 | `PhaseIterGVN::transform_old(Node*)`             | `<unknown>` |
|  2.6% |       1 | `PhaseIterGVN::remove_globally_dead_node(Node*)` | `<unknown>` |
|  2.6% |       1 | `PhaseIterGVN::add_users_to_worklist(Node*)`     | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 94.6% |      35 | `Parse::do_all_blocks()`   | `<unknown>` |
| 16.2% |       6 | `Parse::do_exits()`        | `<unknown>` |
|  2.7% |       1 | `GraphKit::reset_memory()` | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      37 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 13.9% |       5 | `LoadNode::Ideal(PhaseGVN*, bool)`   | `<unknown>` |
| 11.1% |       4 | `StoreNode::Ideal(PhaseGVN*, bool)`  | `<unknown>` |
| 11.1% |       4 | `IfNode::Ideal(PhaseGVN*, bool)`     | `<unknown>` |
|  8.3% |       3 | `RegionNode::Ideal(PhaseGVN*, bool)` | `<unknown>` |
|  8.3% |       3 | `NodeHash::hash_find_insert(Node*)`  | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 97.1% |      34 | `Parse::do_call()`                   | `<unknown>` |
| 14.3% |       5 | `Parse::do_field_access(bool, bool)` | `<unknown>` |
|  5.7% |       2 | `Parse::return_current(Node*)`       | `<unknown>` |
|  5.7% |       2 | `Parse::do_one_bytecode()`           | `<unknown>` |
|  5.7% |       2 | `Parse::do_checkcast()`              | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      35 | `Parse::do_one_block()` | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 73.5% |      25 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 44.1% |      15 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 26.5% |       9 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  5.9% |       2 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |
|  2.9% |       1 | `GraphKit::record_profiled_arguments_for_speculation(ciMethod*, Bytecodes::Code)`       | `<unknown>` |

##### `Matcher::match()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 75.9% |      22 | `Matcher::xform(Node*, int)`                    | `<unknown>` |
| 17.2% |       5 | `Matcher::find_shared(Node*)`                   | `<unknown>` |
|  6.9% |       2 | `Matcher::specialize_generic_vector_operands()` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 88.5% |      23 | `IR::IR(Compilation*, ciMethod*, int)`  | `<unknown>` |
|  3.8% |       1 | `IR::compute_code()`                    | `<unknown>` |
|  3.8% |       1 | `IR::split_critical_edges()`            | `<unknown>` |
|  3.8% |       1 | `RangeCheckElimination::eliminate(IR*)` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 72.0% |      18 | `LinearScan::do_linear_scan()`               | `<unknown>` |
| 24.0% |       6 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  4.0% |       1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `PredictedCallGenerator::generate(JVMState*)` (`<unknown>`)

|     % | Samples | Callee                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 92.0% |      23 | `ParseGenerator::generate(JVMState*)`                               | `<unknown>` |
| 28.0% |       7 | `PredictedCallGenerator::generate(JVMState*)`                       | `<unknown>` |
|  4.0% |       1 | `GraphKit::null_check_common(Node*, BasicType, bool, Node**, bool)` | `<unknown>` |
|  4.0% |       1 | `TypeInstPtr::remove_speculative() const`                           | `<unknown>` |
|  4.0% |       1 | `UncommonTrapCallGenerator::generate(JVMState*)`                    | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 70.8% |      17 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |
|  4.2% |       1 | `CallStaticJavaNode::uncommon_trap_request() const`      | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      23 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      23 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 60.0% |       9 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 13.3% |       2 | `G1CMRootRegionScanTask::work(unsigned int)`    | `<unknown>` |
| 13.3% |       2 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |
| 13.3% |       2 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |

##### `G1EvacuateRegionsBaseTask::work(unsigned int)` (`<unknown>`)

|     % | Samples | Callee                                                                              | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| 66.7% |       6 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>` |
| 33.3% |       3 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)`            | `<unknown>` |

##### `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |       9 | `ciMethod::get_flow_analysis()` | `<unknown>` |

##### `InterpreterRuntime::resolve_from_cache(JavaThread*, Bytecodes::Code)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 87.5% |       7 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)` | `<unknown>` |
| 12.5% |       1 | `InterpreterRuntime::resolve_invokehandle(JavaThread*)`            | `<unknown>` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.7% |      10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                       |
| 1.5% |       9 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                             |
| 1.5% |       9 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                      |
| 1.3% |       8 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                                             |
| 1.0% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                               |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                    |
| 0.8% |       5 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                          |
| 0.7% |       4 | `IndexSetIterator::advance_and_next()` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                              |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                           |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` |
| 0.7% |       4 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                      |
| 0.7% |       4 | `Matcher::find_shared(Node*)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                                            |
| 0.7% |       4 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                  |
| 0.7% |       4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                     |
| 0.5% |       3 | `PhaseChaitin::stretch_base_pointer_live_ranges(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                         |
| 0.5% |       3 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% |       3 | `Node::dominates(Node*, Node_List&)` ← `MemNode::all_controls_dominate(Node*, Node*)` ← `InitializeNode::detect_init_independence(Node*, PhaseGVN*)` ← `InitializeNode::can_capture_store(StoreNode*, PhaseGVN*, bool)` ← `StoreNode::Ideal(PhaseGVN*, bool)` ← `PhaseIterGVN::transform_old(Node*)` ← `PhaseIterGVN::optimize()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                             |
| 0.5% |       3 | `IndexSetIterator::advance_and_next()` ← `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                      |
| 0.5% |       3 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                        |
| 0.5% |       3 | `PhaseIFG::SquareUp()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                                                                                                                                                                                                                                                                  |
