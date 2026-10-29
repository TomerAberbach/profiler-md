# Sampling profile diff

Collected 655 → 599 samples (-56 samples, -8.5%).

| Category          | Change | Delta |             % |   Samples |
| ----------------- | -----: | ----: | ------------: | --------: |
| Compiler          |  +0.3% |    +1 | 54.4% → 59.6% | 356 → 357 |
| Native            | -30.2% |   -64 | 32.4% → 24.7% | 212 → 148 |
| Standard library  |  +4.8% |    +4 | 12.8% → 14.7% |   84 → 88 |
| JIT               | +33.3% |    +1 |   0.5% → 0.7% |     3 → 4 |
| Garbage collector |    new |    +1 |   0.0% → 0.2% |     0 → 1 |
| Ours              |    new |    +1 |   0.0% → 0.2% |     0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 492 → 449 samples (75.1% → 75.0%) Thread::call_run()
│   ├── 469 → 434 samples (71.6% → 72.5%) JavaThread::thread_main_inner()
│   │   └── 469 → 433 samples (71.6% → 72.3%) CompileBroker::compiler_thread_loop()
│   │       ├── 462 → 430 samples (70.5% → 71.8%) CompileBroker::invoke_compiler_on_method(CompileTask*)
│   │       │   ├── 378 → 356 samples (57.7% → 59.4%) C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)
│   │       │   │   └── 376 → 355 samples (57.4% → 59.3%) Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)
│   │       │   │       ├── 187 → 176 samples (28.5% → 29.4%) Compile::Code_Gen()
│   │       │   │       │   ├── 107 → 104 samples (16.3% → 17.4%) PhaseChaitin::Register_Allocate()
│   │       │   │       │   │   ├── 22 → 14 samples (3.4% → 2.3%, self 2.3% → 1.5%) PhaseChaitin::Split(unsigned int, ResourceArea*)
│   │       │   │       │   │   │   └── 7 → 5 samples (1.1% → 0.8%) 7 more callees, led by (0.3% → 0.2%) PhaseChaitin::split_DEF(Node*, Block*, int, unsigned int, Node**, Node**, GrowableArray<unsigned int>, int)
│   │       │   │       │   │   └── 85 → 89 samples (13.0% → 14.9%) 27 more callees, led by (2.4% → 3.3%) PhaseChaitin::build_ifg_physical(ResourceArea*)
│   │       │   │       │   └── 80 → 71 samples (12.2% → 11.9%) 6 more callees, led by (4.9% → 4.8%) Matcher::match()
│   │       │   │       ├── 138 samples (21.1% → 23.0%) Compile::Optimize()
│   │       │   │       │   └── 138 samples (21.1% → 23.0%) 15 more callees, led by (6.7% → 7.3%) PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)
│   │       │   │       └── 51 → 41 samples (7.8% → 6.8%) 6 more callees, led by (6.3% → 6.0%) ParseGenerator::generate(JVMState*)
│   │       │   ├── … 78 → 67 samples (11.9% → 11.2%) Compilation::compile_method()
│   │       │   │   ├── 71 → 58 samples (10.8% → 9.7%) Compilation::compile_java_method()
│   │       │   │   │   ├── 34 → 26 samples (5.2% → 4.3%) Compilation::build_hir()
│   │       │   │   │   │   ├── … 24 → 23 samples (3.7% → 3.8%) GraphBuilder::GraphBuilder(Compilation*, IRScope*)
│   │       │   │   │   │   │   ├── 22 → 20 samples (3.4% → 3.3%) GraphBuilder::iterate_all_blocks(bool)
│   │       │   │   │   │   │   │   └── … 22 → 20 samples (3.4% → 3.3%) GraphBuilder::iterate_bytecodes_for_block(int)
│   │       │   │   │   │   │   │       ├── 18 → 15 samples (2.7% → 2.5%) GraphBuilder::invoke(Bytecodes::Code)
│   │       │   │   │   │   │   │       │   ├── 3 → 4 samples (0.5% → 0.7%) ciBytecodeStream::get_method(bool&, ciSignature**)
│   │       │   │   │   │   │   │       │   │   ├── … 2 → 0 samples (0.3% → 0.0%, self 1.8% → 0.5% globally) InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)
│   │       │   │   │   │   │   │       │   │   └── 1 → 4 samples (0.2% → 0.7%) 2 more callees, led by (0.2% → 0.5%) ciObjectFactory::get_metadata(Metadata*)
│   │       │   │   │   │   │   │       │   └── 15 → 11 samples (2.3% → 1.8%) 9 more callees, led by (1.4% → 1.5%) GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)
│   │       │   │   │   │   │   │       └── 3 → 5 samples (0.5% → 0.8%) 5 more callees, led by (0.3% → 0.2%) GraphBuilder::access_field(Bytecodes::Code)
│   │       │   │   │   │   │   └── 2 → 3 samples (0.3% → 0.5%) BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)
│   │       │   │   │   │   └── 9 → 3 samples (1.4% → 0.5%) 8 more callees, led by (0.6% → 0.0%) GlobalValueNumbering::GlobalValueNumbering(IR*)
│   │       │   │   │   └── 37 → 32 samples (5.6% → 5.3%) 3 more callees, led by (3.4% → 4.2%) Compilation::emit_lir()
│   │       │   │   └── 7 → 9 samples (1.1% → 1.5%) 2 more callees, led by (0.9% → 1.3%) ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)
│   │       │   └── 6 → 7 samples (0.9% → 1.2%) 9 more callees, led by (0.5% → 0.2%) ciEnv::get_method_from_handle(Method*)
│   │       └── 7 → 3 samples (1.1% → 0.5%) CompileQueue::get(CompilerThread*) …
│   └── 23 → 15 samples (3.5% → 2.5%) 2 more callees, led by (3.4% → 2.5%) WorkerThread::run()
├── 145 → 132 samples (22.1% → 22.0%) main(String[]) at org.codenarc.CodeNarc
│   ├── 140 → 127 samples (21.4% → 21.2%) linkToCallSite(Object, Object, Object) at java.lang.invoke.Invokers$Holder
│   │   └── … 140 → 127 samples (21.4% → 21.2%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH
│   │       └── 139 → 127 samples (21.2%) 16 more callees, led by (7.2% → 6.7%) invokeVirtual(Object, Object, int) at java.lang.invoke.LambdaForm$DMH
│   └── 5 samples (0.8%) 2 more callees, led by (0.3% → 0.5%) linkToCallSite(Object, Object) at java.lang.invoke.Invokers$Holder
└── 17 samples (2.6% → 2.8%) 5 more root frames, led by (2.1% → 2.0%) <clinit>() at org.codenarc.CodeNarc
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                 | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 0.5% → 1.3% |   3 → 8 | `Matcher::xform(Node*, int)`                                                             | `<unknown>` |
| +125.0% |    +5 | 0.6% → 1.5% |   4 → 9 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                 | `<unknown>` |
|  +66.7% |    +4 | 0.9% → 1.7% |  6 → 10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                        | `<unknown>` |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)`                | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `SignatureStream::next()`                                                                | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `PhaseIdealLoop::build_loop_tree()`                                                      | `<unknown>` |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                   | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)` | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `Type::cmp(Type const*, Type const*)`                                                    | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseChaitin::stretch_base_pointer_live_ranges(ResourceArea*)`                          | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `TypeNode::bottom_type() const`                                                          | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `_platform_memchr`                                                                       | `<unknown>` |
|  +28.6% |    +2 | 1.1% → 1.5% |   7 → 9 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`             | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIFG::SquareUp()`                                                                   | `<unknown>` |
|  +28.6% |    +2 | 1.1% → 1.5% |   7 → 9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                  | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `inflate_fast`                                                                           | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `Matcher::find_shared(Node*)`                                                            | `<unknown>` |
|  +33.3% |    +2 | 0.9% → 1.3% |   6 → 8 | `_platform_memset`                                                                       | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseChaitin::Select()`                                                                 | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `AddPNode::Opcode() const`                                                               | `<unknown>` |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                     | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 0.5% → 1.3% |   3 → 8 | `Matcher::xform(Node*, int)`                                                 | `<unknown>` |
| +125.0% |    +5 | 0.6% → 1.5% |   4 → 9 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
|  +66.7% |    +4 | 0.9% → 1.7% |  6 → 10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)`    | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `Type::cmp(Type const*, Type const*)`                                        | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseChaitin::stretch_base_pointer_live_ranges(ResourceArea*)`              | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `TypeNode::bottom_type() const`                                              | `<unknown>` |
|  +28.6% |    +2 | 1.1% → 1.5% |   7 → 9 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIFG::SquareUp()`                                                       | `<unknown>` |
|  +28.6% |    +2 | 1.1% → 1.5% |   7 → 9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`      | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `Matcher::find_shared(Node*)`                                                | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseChaitin::Select()`                                                     | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `AddPNode::Opcode() const`                                                   | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseOutput::shorten_branches(unsigned int*)`                               | `<unknown>` |
|  +50.0% |    +2 | 0.6% → 1.0% |   4 → 6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`         | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `PhaseIterGVN::add_users_to_worklist(Node*)`                                 | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Node::remove_dead_region(PhaseGVN*, bool)`                                  | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const`     | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                        | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `SignatureStream::next()`                                                                                       | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)`                        | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `_platform_memchr`                                                                                              | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `inflate_fast`                                                                                                  | `<unknown>` |
|  +33.3% |    +2 | 0.9% → 1.3% |   6 → 8 | `_platform_memset`                                                                                              | `<unknown>` |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `mach_absolute_time`                                                                                            | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `fwd_copy_drain`                                                                                                | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)`                                                         | `<unknown>` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `Instruction::as_Constant()`                                                                                    | `<unknown>` |
|  +20.0% |    +1 | 0.8% → 1.0% |   5 → 6 | `__psynch_cvwait`                                                                                               | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `G1ConcurrentMark::mark_in_bitmap(unsigned int, oopDesc*)`                                                      | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)`                      | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                         | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `ThreadCritical::ThreadCritical()`                                                                              | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `InstanceKlass::find_local_field(Symbol*, Symbol*, fieldDescriptor*) const`                                     | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `JavaThread::pd_last_frame()`                                                                                   | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `LinkResolver::resolve_special_call_or_null(LinkInfo const&)`                                                   | `<unknown>` |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `SymbolTable::lookup_shared(char const*, int, unsigned int)`                                                    | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `nmethod::post_compiled_method(CompileTask*)`                                                                   | `<unknown>` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `LinkResolver::check_method_loader_constraints(LinkInfo const&, methodHandle const&, char const*, JavaThread*)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                     | Location                                                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `resize()`                                                                                   | `java.util.HashMap`                                        |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `cast(Object)`                                                                               | `java.lang.Class`                                          |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `coder()`                                                                                    | `java.lang.String`                                         |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                            | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invoke(Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$MH`                           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `invokeVirtual(Object, Object)`                                                              | `java.lang.invoke.DirectMethodHandle$Holder`               |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `loadClass(String)`                                                                          | `java.lang.ClassLoader`                                    |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `getLocked(boolean)`                                                                         | `org.codehaus.groovy.util.LazyReference`                   |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `getAndPut(String, MemoizeCache$ValueProvider)`                                              | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`        |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `delegate(Object, Object)`                                                                   | `java.lang.invoke.DelegatingMethodHandle$Holder`           |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `<init>(MethodType, LambdaForm)`                                                             | `java.lang.invoke.BoundMethodHandle`                       |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `join(PredictionContext, PredictionContext)`                                                 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `wrapAndCopyInto(Sink, Spliterator)`                                                         | `java.util.stream.AbstractPipeline`                        |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `make(byte, Class, MemberName, Class)`                                                       | `java.lang.invoke.DirectMethodHandle`                      |
|     new |    +1 | 0.0% → 0.2% |   0 → 1 | `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)`                                   | `groovy.lang.MetaClassImpl`                                |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `newInstance(Class, int)`                                                                    | `java.lang.reflect.Array`                                  |
| +100.0% |    +1 | 0.2% → 0.3% |   1 → 2 | `equals(ATNConfig)`                                                                          | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                    | Location                                               |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -75.0% |    -9 | 1.8% → 0.5% |  12 → 3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>`                                            |
|  -87.5% |    -7 | 1.2% → 0.2% |   8 → 1 | `MultiNode::is_CFG() const`                                                                                                                                                 | `<unknown>`                                            |
|  -40.0% |    -6 | 2.3% → 1.5% |  15 → 9 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>`                                            |
|  -45.5% |    -5 | 1.7% → 1.0% |  11 → 6 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>`                                            |
|  -62.5% |    -5 | 1.2% → 0.5% |   8 → 3 | `PhaseIdealLoop::Dominators()`                                                                                                                                              | `<unknown>`                                            |
|  -66.7% |    -4 | 0.9% → 0.3% |   6 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)`                                                               | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
|  -50.0% |    -4 | 1.2% → 0.7% |   8 → 4 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                      | `<unknown>`                                            |
|  -57.1% |    -4 | 1.1% → 0.5% |   7 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>`                                            |
|  -66.7% |    -4 | 0.9% → 0.3% |   6 → 2 | `IndexSet::initialize(unsigned int)`                                                                                                                                        | `<unknown>`                                            |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>`                                            |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `_platform_memmove`                                                                                                                                                         | `<unknown>`                                            |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                                                                                         | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseIFG::effective_degree(unsigned int) const`                                                                                                                            | `<unknown>`                                            |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `PhiNode::Ideal(PhaseGVN*, bool)`                                                                                                                                           | `<unknown>`                                            |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `PhaseIdealLoop::build_loop_tree_impl(Node*, int)`                                                                                                                          | `<unknown>`                                            |
|  -60.0% |    -3 | 0.8% → 0.3% |   5 → 2 | `PhaseLive::compute(unsigned int)`                                                                                                                                          | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)`                                                                                                                    | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseCFG::insert_anti_dependences(Block*, Node*, bool)`                                                                                                                    | `<unknown>`                                            |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `FieldInfoReader::read_field_info(FieldInfo&)`                                                                                                                              | `<unknown>`                                            |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                                  | `<unknown>`                                            |

##### Compiler

|  Change | Delta |           % | Samples | Function                                                                                           | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------- | ----------- |
|  -87.5% |    -7 | 1.2% → 0.2% |   8 → 1 | `MultiNode::is_CFG() const`                                                                        | `<unknown>` |
|  -40.0% |    -6 | 2.3% → 1.5% |  15 → 9 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                 | `<unknown>` |
|  -62.5% |    -5 | 1.2% → 0.5% |   8 → 3 | `PhaseIdealLoop::Dominators()`                                                                     | `<unknown>` |
|  -50.0% |    -4 | 1.2% → 0.7% |   8 → 4 | `PhaseChaitin::gather_lrg_masks(bool)`                                                             | `<unknown>` |
|  -66.7% |    -4 | 0.9% → 0.3% |   6 → 2 | `IndexSet::initialize(unsigned int)`                                                               | `<unknown>` |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseIFG::effective_degree(unsigned int) const`                                                   | `<unknown>` |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `PhiNode::Ideal(PhaseGVN*, bool)`                                                                  | `<unknown>` |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `PhaseIdealLoop::build_loop_tree_impl(Node*, int)`                                                 | `<unknown>` |
|  -60.0% |    -3 | 0.8% → 0.3% |   5 → 2 | `PhaseLive::compute(unsigned int)`                                                                 | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseCFG::insert_anti_dependences(Block*, Node*, bool)`                                           | `<unknown>` |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                         | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `MacroAssembler::pd_patch_instruction_size(unsigned char*, unsigned char*)`                        | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Node::add_req(Node*)`                                                                             | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges(LRG&, IndexSet*, unsigned int&)` | `<unknown>` |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `TypeInstPtr::hash() const`                                                                        | `<unknown>` |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `ciObjectFactory::get_metadata(Metadata*)`                                                         | `<unknown>` |
|  -66.7% |    -2 | 0.5% → 0.2% |   3 → 1 | `RegMask::is_aligned_pairs() const`                                                                | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `LinearScan::build_intervals()`                                                                    | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeInt::singleton() const`                                                                       | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                                    | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -75.0% |    -9 | 1.8% → 0.5% |  12 → 3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
|  -45.5% |    -5 | 1.7% → 1.0% |  11 → 6 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
|  -57.1% |    -4 | 1.1% → 0.5% |   7 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `semaphore_wait_trap`                                                                                                                                                       | `<unknown>` |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)`                                                                                                                    | `<unknown>` |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `FieldInfoReader::read_field_info(FieldInfo&)`                                                                                                                              | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `ResourceBitMap::ResourceBitMap(unsigned long, bool)`                                                                                                                       | `<unknown>` |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
|  -16.7% |    -2 | 1.8% → 1.7% | 12 → 10 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)`                                                                                                        | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Continuation::is_return_barrier_entry(unsigned char*)`                                                                                                                     | `<unknown>` |
|  -33.3% |    -2 | 0.9% → 0.7% |   6 → 4 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `__psynch_cvbroad`                                                                                                                                                          | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `_qsort`                                                                                                                                                                    | `<unknown>` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `stub:pthread_jit_write_protect_np`                                                                                                                                         | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `NullCheckEliminator::iterate_one(BlockBegin*)`                                                                                                                             | `<unknown>` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                                                                                 | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                                      | Location                                                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  -66.7% |    -4 | 0.9% → 0.3% |   6 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`   |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `valueOf(long)`                                                                                               | `java.lang.Long`                                         |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `<init>(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)`                              | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL`      |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `getContext()`                                                                                                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`            |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                                                                              | `java.lang.invoke.LambdaForm$MH`                         |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `isEpsilon()`                                                                                                 | `groovyjarjarantlr4.v4.runtime.atn.EpsilonTransition`    |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `execATN(DFA, TokenStream, int, SimulatorState)`                                                              | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`   |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `computeAllFrames()`                                                                                          | `jdk.internal.org.objectweb.asm.MethodWriter`            |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH`                         |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `decompress(ByteBuffer, int)`                                                                                 | `jdk.internal.jimage.ImageLocation`                      |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `execute(Lexer, CharStream, int)`                                                                             | `groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`  |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `getBytes(byte[], int, byte)`                                                                                 | `java.lang.String`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `isInitialized()`                                                                                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `CENFLG(byte[], int)`                                                                                         | `jdk.nio.zipfs.ZipConstants`                             |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `map(Function)`                                                                                               | `java.util.stream.ReferencePipeline`                     |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `forName(String, boolean, ClassLoader, Class)`                                                                | `java.lang.Class`                                        |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `hashCode()`                                                                                                  | `java.lang.String`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `visit(int, int, String, String, String, String[])`                                                           | `jdk.internal.org.objectweb.asm.ClassWriter`             |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `lastIndexOf(int, int)`                                                                                       | `java.lang.String`                                       |
| removed |    -1 | 0.2% → 0.0% |   1 → 0 | `newReflectionData(SoftReference, int)`                                                                       | `java.lang.Class`                                        |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller             | Location    |
| ------: | ----: | -----: | ------: | ------------------ | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `Matcher::match()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                 | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------- | ----------- |
| +200.0% |    +6 | 75.0% → 100.0% |   3 → 9 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                 | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)`              | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)` | `<unknown>` |

##### `SignatureStream::next()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`              | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `void SignatureIterator::do_parameters_on<Fingerprinter>(Fingerprinter*)`               | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                 | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                 | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                 | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                               | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Node_Array::grow(unsigned int)`     | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Node::dominates(Node*, Node_List&)` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Node::out_grow(unsigned int)`       | `<unknown>` |

##### `Type::cmp(Type const*, Type const*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                             | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `Dict::Insert(void*, void*, bool)` | `<unknown>` |

##### `PhaseChaitin::stretch_base_pointer_live_ranges(ResourceArea*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                              | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `TypeNode::bottom_type() const` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                              | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `AddPNode::bottom_type() const`                     | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `CallStaticJavaNode::uncommon_trap_request() const` | `<unknown>` |

##### `_platform_memchr` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                                  | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`              | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                 | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                       | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ----------- |
| +28.6% |    +2 | 100.0% |   7 → 9 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseIFG::SquareUp()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +28.6% |    +2 | 100.0% |   7 → 9 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                          | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `Matcher::find_shared(Node*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller             | Location    |
| ------: | ----: | -----: | ------: | ------------------ | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Matcher::match()` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -2 |  33.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize()`             | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `Compilation::build_hir()`                         | `<unknown>` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `PhaseValues::uncached_makecon(Type const*)`       | `<unknown>` |
|  -50.0% |    -1 | 33.3% → 12.5% |   2 → 1 | `PhaseChaitin::Register_Allocate()`                | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `GraphBuilder::append_with_bci(Instruction*, int)` | `<unknown>` |

##### `PhaseChaitin::Select()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `AddPNode::Opcode() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::find_shared(Node*)`                                   | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)` | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)`                         | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks_post(Node*)`              | `<unknown>` |

##### `PhaseOutput::shorten_branches(unsigned int*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                  | Location    |
| -----: | ----: | ------------: | ------: | ----------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseOutput::Output()` | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `PhaseIterGVN::add_users_to_worklist(Node*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                                                                                                                                           | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::clone_loop_handle_data_uses(Node*, Node_List&, IdealLoopTree*, IdealLoopTree*, Node_List*&, Node_List*&, Node_List*&, Node_List&, unsigned int, PhaseIdealLoop::CloneLoopMode)` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIterGVN::optimize()`                                                                                                                                                                       | `<unknown>` |

##### `Node::remove_dead_region(PhaseGVN*, bool)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                  | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `IfNode::Ideal_common(PhaseGVN*, bool)` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |

##### `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                | Location    |
| -----: | ----: | ------------: | ------: | --------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCCP::analyze()` | `<unknown>` |

##### `mach_absolute_time` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                  | Location    |
| ------: | ----: | -----: | ------: | ----------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `os::elapsed_counter()` | `<unknown>` |

##### `fwd_copy_drain` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                        | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CodeBuffer::copy_code_to(CodeBlob*)`                         | `<unknown>` |

##### `ValueRecorder<Metadata*>::maybe_find_index(Metadata*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                              | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `OopRecorder::find_index(Metadata*)`                | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MacroAssembler::mov_metadata(Register, Metadata*)` | `<unknown>` |

##### `Instruction::as_Constant()` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                    | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LIRGenerator::block_do(BlockBegin*)`     | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Canonicalizer::do_NullCheck(NullCheck*)` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +20.0% |    +1 | 100.0% |   5 → 6 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `G1ConcurrentMark::mark_in_bitmap(unsigned int, oopDesc*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                    | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1CMTask::make_reference_grey(oopDesc*)` | `<unknown>` |

##### `JNIHandleBlock::allocate_handle(JavaThread*, oopDesc*, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                              | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciInstanceKlass::ciInstanceKlass(Klass*)`          | `<unknown>` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `JvmtiExport::post_class_load(JavaThread*, Klass*)` | `<unknown>` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `jni_GetSuperclass`                                 | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                        | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------- | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `ThreadCritical::ThreadCritical()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Chunk::operator new(unsigned long, AllocFailStrategy::AllocFailEnum, unsigned long)` | `<unknown>` |

##### `InstanceKlass::find_local_field(Symbol*, Symbol*, fieldDescriptor*) const` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `InstanceKlass::find_field(Symbol*, Symbol*, fieldDescriptor*) const` | `<unknown>` |

##### `JavaThread::pd_last_frame()` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java_lang_Throwable::fill_in_stack_trace(Handle, methodHandle const&, JavaThread*)` | `<unknown>` |

##### `LinkResolver::resolve_special_call_or_null(LinkInfo const&)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciEnv::lookup_method(ciInstanceKlass*, ciKlass*, Symbol*, Symbol*, Bytecodes::Code, constantTag)` | `<unknown>` |

##### `SymbolTable::lookup_shared(char const*, int, unsigned int)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                      | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------- | ----------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `SymbolTable::lookup_only(char const*, int, unsigned int&)` | `<unknown>` |

##### `nmethod::post_compiled_method(CompileTask*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `LinkResolver::check_method_loader_constraints(LinkInfo const&, methodHandle const&, char const*, JavaThread*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `LinkResolver::resolve_interface_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` | `<unknown>` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `cast(Object)` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `coder()` (`java.lang.String`)

| Change | Delta |            % | Samples | Caller                             | Location           |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `length()`                         | `java.lang.String` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getBytesNoRepl1(String, Charset)` | `java.lang.String` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

| Change | Delta |             % | Samples | Caller                                   | Location                    |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `invoke(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % | Samples | Caller                                  | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `guard(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001189000` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller           | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f001089400` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change | Delta |             % | Samples | Caller                                                                          | Location                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `getLocked(boolean)` (`org.codehaus.groovy.util.LazyReference`)

| Change | Delta |             % | Samples | Caller  | Location                                 |
| -----: | ----: | ------------: | ------: | ------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get()` | `org.codehaus.groovy.util.LazyReference` |

##### `fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % | Samples | Caller                                                                                           | Location                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change | Delta |             % | Samples | Caller                                                                          | Location                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Caller                                                                                       | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeTargetState(DFA, DFAState, ParserRuleContext, int, boolean, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `delegate(Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                  | Location                         |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `guard(Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `<init>(MethodType, LambdaForm)` (`java.lang.invoke.BoundMethodHandle`)

| Change | Delta |             % | Samples | Caller                                   | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_L` |

##### `join(PredictionContext, PredictionContext)` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change | Delta |             % | Samples | Caller                                                               | Location                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `join(PredictionContext, PredictionContext, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                                            | Location                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.FindOps$FindOp` |

##### `getEpsilonTarget(ATNConfig, Transition, boolean, boolean, PredictionContextCache, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

| Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                                                                                   | Location                                |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `addMetaMethodToIndex(MetaMethod, MetaMethodIndex$Header)` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % | Samples | Caller                               | Location                    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `populateMethods(List, CachedClass)` | `groovy.lang.MetaClassImpl` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |            % | Samples | Caller                                   | Location           |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `copyOfRange(Object[], int, int, Class)` | `java.util.Arrays` |

##### `equals(ATNConfig)` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |      % | Samples | Caller           | Location                                      |
| ------: | ----: | -----: | ------: | ---------------- | --------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `equals(Object)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                                                           | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -72.7% |    -8 | 91.7% → 100.0% |  11 → 3 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `InstanceKlass::find_method(Array<Method*> const*, Symbol const*, Symbol const*)`                                                | `<unknown>` |

##### `MultiNode::is_CFG() const` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                  | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------- | ----------- |
|  -75.0% |    -3 | 50.0% → 100.0% |   4 → 1 | `PhaseIdealLoop::build_and_optimize()`                                  | `<unknown>` |
| removed |    -2 |   25.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `RegionNode::is_unreachable_region(PhaseGVN const*)`                    | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -40.0% |    -6 | 100.0% |  15 → 9 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                | Location           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ------------------ |
| removed |    -2 |  18.2% → 0.0% |   2 → 0 | `jni_GetStringUTFLength`                                              | `<unknown>`        |
|  -66.7% |    -2 | 27.3% → 16.7% |   3 → 1 | `InterpreterRuntime::ldc(JavaThread*, bool)`                          | `<unknown>`        |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray(JavaThread*, ConstantPool*, int, int)` | `<unknown>`        |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `JVM_ReferenceClear`                                                  | `<unknown>`        |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `arraycopy(Object, int, Object, int, int)`                            | `java.lang.System` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |              % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `closure(ATNConfigSet, ATNConfigSet, boolean, boolean, PredictionContextCache, boolean)`                      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -50.0% |    -4 | 100.0% |   8 → 4 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                          | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -2 | 42.9% → 33.3% |   3 → 1 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |
|  -33.3% |    -1 | 42.9% → 66.7% |   3 → 2 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `DebugInformationRecorder::dump_object_pool(GrowableArray<ScopeValue*>*)`                                                                                       | `<unknown>` |

##### `IndexSet::initialize(unsigned int)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| -80.0% |    -4 | 83.3% → 50.0% |   5 → 1 | `PhaseIFG::init(unsigned int)` | `<unknown>` |

##### `semaphore_wait_trap` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `WorkerThread::run()` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                 | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ----------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Node_Array::grow(unsigned int)`                       | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Type::Initialize(Compile*)`                           | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::set_idom(Node*, Node*, unsigned int)` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `outputStream::print(char const*, ...)`                | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |

##### `PhaseIFG::effective_degree(unsigned int) const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                     | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseIFG::Compute_Effective_Degree()`                                     | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseConservativeCoalesce::copy_copy(Node*, Node*, Block*, unsigned int)` | `<unknown>` |

##### `PhiNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `PhaseIterGVN::optimize()`              | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `Parse::do_exits()`                     | `<unknown>` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree_impl(Node*, int)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                 | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------- | ----------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `PhaseIdealLoop::build_loop_tree()`    | `<unknown>` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `CompiledMethod::unload_nmethod_caches(bool)` | `<unknown>` |

##### `PhaseCFG::insert_anti_dependences(Block*, Node*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` | `<unknown>` |

##### `FieldInfoReader::read_field_info(FieldInfo&)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `InstanceKlass::find_local_field(Symbol*, Symbol*, fieldDescriptor*) const` | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `JavaFieldStream::JavaFieldStream(InstanceKlass const*)`                    | `<unknown>` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ciInstanceKlass::compute_nonstatic_fields_impl(GrowableArray<ciField*>*)`  | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed(Interval*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                        | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `LinearScanWalker::alloc_free_reg(Interval*)` | `<unknown>` |

##### `MacroAssembler::pd_patch_instruction_size(unsigned char*, unsigned char*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `AbstractAssembler::bind(Label&)` | `<unknown>` |

##### `Node::add_req(Node*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                       | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `IdealKit::do_memory_merge(Node*, Node*)`                                                    | `<unknown>` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges(LRG&, IndexSet*, unsigned int&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` | `<unknown>` |

##### `TypeInstPtr::hash() const` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                         | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------ | ----------- |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `PhiNode::hash() const`        | `<unknown>` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `NodeHash::hash_insert(Node*)` | `<unknown>` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `Type::hashcons()`             | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `ciEnv::get_klass_by_name_impl(ciKlass*, constantPoolHandle const&, ciSymbol*, bool)`     | `<unknown>` |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `ciMethod::ensure_method_data(methodHandle const&)`                                       | `<unknown>` |

##### `RegMask::is_aligned_pairs() const` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                       | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `PhaseChaitin::get_spillcopy_wide(MachSpillCopyNode::SpillType, Node*, Node*, unsigned int)` | `<unknown>` |

##### `LinearScan::build_intervals()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                         | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `TypeInt::singleton() const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCCP::transform(Node*)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `ResourceBitMap::ResourceBitMap(unsigned long, bool)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                               | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Optimizer::eliminate_null_checks()` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `BlockBegin::BlockBegin(int)`        | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                        | Location    |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 | 0.0% → 20.0% |   0 → 2 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`                                                                                         | `<unknown>` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)`                                                                                                             | `<unknown>` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                             | `<unknown>` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                          | `<unknown>` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `LoadNode::make(PhaseGVN&, Node*, Node*, Node*, TypePtr const*, Type const*, BasicType, MemNode::MemOrd, LoadNode::ControlDependency, bool, bool, bool, bool, unsigned char)` | `<unknown>` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                         | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` | `<unknown>` |

##### `Continuation::is_return_barrier_entry(unsigned char*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                       | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SharedRuntime::resolve_sub_helper(bool, bool, JavaThread*)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `frame::sender_for_compiled_frame(RegisterMap*) const`       | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `__psynch_cvbroad` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                              | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `CompileBroker::create_compile_task(CompileQueue*, int, methodHandle const&, int, int, methodHandle const&, int, CompileTask::CompileReason, bool)` | `<unknown>` |

##### `_qsort` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                   | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeInterfaces::make(GrowableArray<ciInstanceKlass*>*)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseBlockLayout::grow_traces()`                        | `<unknown>` |

##### `stub:pthread_jit_write_protect_np` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                | Location    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `InterpreterRuntime::anewarray(JavaThread*, ConstantPool*, int, int)` | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `InterpreterRuntime::ldc(JavaThread*, bool)`                          | `<unknown>` |

##### `NullCheckEliminator::iterate_one(BlockBegin*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                               | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Optimizer::eliminate_null_checks()` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ParseGenerator::generate(JVMState*)` | `<unknown>` |

##### `valueOf(long)` (`java.lang.Long`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `add(ATNConfig, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `<init>(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LLLLLL`)

|  Change | Delta |             % | Samples | Caller                                                                         | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `make(MethodType, LambdaForm, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.BoundMethodHandle$Species_LLLLLL` |

##### `getContext()` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |            % | Samples | Caller                                                                                | Location                                              |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getEpsilonTarget(CharStream, ATNConfig, Transition, ATNConfigSet, boolean, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `equals(ATNConfig)`                                                                   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |

##### `isEpsilon()` (`groovyjarjarantlr4.v4.runtime.atn.EpsilonTransition`)

|  Change | Delta |             % | Samples | Caller                                                                                                        | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `closure(ATNConfig, ATNConfigSet, ATNConfigSet, Set, boolean, boolean, PredictionContextCache, int, boolean)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `execATN(DFA, TokenStream, int, SimulatorState)` (`groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `execDFA(DFA, TokenStream, int, SimulatorState)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `computeAllFrames()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change | Delta |             % | Samples | Caller                | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitMaxs(int, int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `invoke(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke_MT(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

|  Change | Delta |             % | Samples | Caller               | Location                               |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAttributes(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `execute(Lexer, CharStream, int)` (`groovyjarjarantlr4.v4.runtime.atn.LexerActionExecutor`)

|  Change | Delta |             % | Samples | Caller                                                        | Location                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(CharStream, LexerActionExecutor, int, int, int, int)` | `groovyjarjarantlr4.v4.runtime.atn.LexerATNSimulator` |

##### `getBytes(byte[], int, byte)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                                        | Location           |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `join(String, String, String, String[], int)` | `java.lang.String` |

##### `isInitialized()` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

|  Change | Delta |             % | Samples | Caller         | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `initialize()` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |

##### `CENFLG(byte[], int)` (`jdk.nio.zipfs.ZipConstants`)

|  Change | Delta |             % | Samples | Caller                                            | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readCEN(ZipFileSystem, ZipFileSystem$IndexNode)` | `jdk.nio.zipfs.ZipFileSystem$Entry` |

##### `map(Function)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Caller              | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `forName(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller                                  | Location          |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

##### `hashCode()` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller              | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hash(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `visit(int, int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change | Delta |             % | Samples | Caller                 | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `lastIndexOf(int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller             | Location           |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lastIndexOf(int)` | `java.lang.String` |

##### `newReflectionData(SoftReference, int)` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller             | Location          |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `reflectionData()` | `java.lang.Class` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % | Samples | Function                                                                                                                                       | Location                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +71.4% |   +10 |   2.1% → 4.0% | 14 → 24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                         | `<unknown>`                                             |
| +140.0% |    +7 |   0.8% → 2.0% |  5 → 12 | `PhaseGVN::transform_no_reclaim(Node*)`                                                                                                        | `<unknown>`                                             |
| +233.3% |    +7 |   0.5% → 1.7% |  3 → 10 | `defineClass(String, byte[], int, int, CodeSource)`                                                                                            | `java.security.SecureClassLoader`                       |
|  +54.5% |    +6 |   1.7% → 2.8% | 11 → 17 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                       | `<unknown>`                                             |
| +200.0% |    +6 |   0.5% → 1.5% |   3 → 9 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                | `java.lang.ClassLoader`                                 |
| +200.0% |    +6 |   0.5% → 1.5% |   3 → 9 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                                                                      | `java.lang.ClassLoader`                                 |
| +166.7% |    +5 |   0.5% → 1.3% |   3 → 8 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                                                                           | `<unknown>`                                             |
| +500.0% |    +5 |   0.2% → 1.0% |   1 → 6 | `matches(SourceCode)`                                                                                                                          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`        |
| +250.0% |    +5 |   0.3% → 1.2% |   2 → 7 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`                                                                         | `<unknown>`                                             |
| +500.0% |    +5 |   0.2% → 1.0% |   1 → 6 | `LIRGenerator::block_do(BlockBegin*)`                                                                                                          | `<unknown>`                                             |
|  +57.1% |    +4 |   1.1% → 1.8% |  7 → 11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                   | `<unknown>`                                             |
|   +5.4% |    +4 | 11.3% → 13.0% | 74 → 78 | `PhaseIdealLoop::build_and_optimize()`                                                                                                         | `<unknown>`                                             |
|   +5.4% |    +4 | 11.3% → 13.0% | 74 → 78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                                                                  | `<unknown>`                                             |
| +133.3% |    +4 |   0.5% → 1.2% |   3 → 7 | `getMetaClass()`                                                                                                                               | `org.codehaus.groovy.vmplugin.v8.Selector$InitSelector` |
| +200.0% |    +4 |   0.3% → 1.0% |   2 → 6 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                                     | `<unknown>`                                             |
| +200.0% |    +4 |   0.3% → 1.0% |   2 → 6 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                            | `<unknown>`                                             |
|  +25.0% |    +4 |   2.4% → 3.3% | 16 → 20 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                              | `<unknown>`                                             |
| +100.0% |    +4 |   0.6% → 1.3% |   4 → 8 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>`                                             |
| +100.0% |    +4 |   0.6% → 1.3% |   4 → 8 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                             | `<unknown>`                                             |
|  +57.1% |    +4 |   1.1% → 1.8% |  7 → 11 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                                           | `<unknown>`                                             |

##### Compiler

|  Change | Delta |             % | Samples | Function                                                                     | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  +71.4% |   +10 |   2.1% → 4.0% | 14 → 24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`       | `<unknown>` |
| +140.0% |    +7 |   0.8% → 2.0% |  5 → 12 | `PhaseGVN::transform_no_reclaim(Node*)`                                      | `<unknown>` |
|  +54.5% |    +6 |   1.7% → 2.8% | 11 → 17 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                     | `<unknown>` |
| +250.0% |    +5 |   0.3% → 1.2% |   2 → 7 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)`       | `<unknown>` |
| +500.0% |    +5 |   0.2% → 1.0% |   1 → 6 | `LIRGenerator::block_do(BlockBegin*)`                                        | `<unknown>` |
|  +57.1% |    +4 |   1.1% → 1.8% |  7 → 11 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` | `<unknown>` |
|   +5.4% |    +4 | 11.3% → 13.0% | 74 → 78 | `PhaseIdealLoop::build_and_optimize()`                                       | `<unknown>` |
|   +5.4% |    +4 | 11.3% → 13.0% | 74 → 78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                | `<unknown>` |
|  +25.0% |    +4 |   2.4% → 3.3% | 16 → 20 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                            | `<unknown>` |
|  +57.1% |    +4 |   1.1% → 1.8% |  7 → 11 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`         | `<unknown>` |
| +200.0% |    +4 |   0.3% → 1.0% |   2 → 6 | `BlockList::iterate_forward(BlockClosure*)`                                  | `<unknown>` |
|     new |    +4 |   0.0% → 0.7% |   0 → 4 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)`    | `<unknown>` |
|  +13.6% |    +3 |   3.4% → 4.2% | 22 → 25 | `Compilation::emit_lir()`                                                    | `<unknown>` |
|  +75.0% |    +3 |   0.6% → 1.2% |   4 → 7 | `PhaseIterGVN::remove_globally_dead_node(Node*)`                             | `<unknown>` |
| +150.0% |    +3 |   0.3% → 0.8% |   2 → 5 | `PhiNode::Value(PhaseGVN*) const`                                            | `<unknown>` |
|  +60.0% |    +3 |   0.8% → 1.3% |   5 → 8 | `PhaseIdealLoop::build_loop_tree()`                                          | `<unknown>` |
| +100.0% |    +3 |   0.5% → 1.0% |   3 → 6 | `LoadNode::Ideal(PhaseGVN*, bool)`                                           | `<unknown>` |
| +150.0% |    +3 |   0.3% → 0.8% |   2 → 5 | `PhaseChaitin::Select()`                                                     | `<unknown>` |
| +100.0% |    +3 |   0.5% → 1.0% |   3 → 6 | `PhaseOutput::shorten_branches(unsigned int*)`                               | `<unknown>` |
| +300.0% |    +3 |   0.2% → 0.7% |   1 → 4 | `ciTypeFlow::StateVector::do_getstatic(ciBytecodeStream*)`                   | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                       | Location    |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 0.5% → 1.3% |   3 → 8 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)`                                                                           | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                                     | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)`                                                            | `<unknown>` |
| +100.0% |    +4 | 0.6% → 1.3% |   4 → 8 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| +100.0% |    +4 | 0.6% → 1.3% |   4 → 8 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`                             | `<unknown>` |
| +200.0% |    +4 | 0.3% → 1.0% |   2 → 6 | `Parse::do_exits()`                                                                                                                            | `<unknown>` |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)`                                                        | `<unknown>` |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `frame::interpreter_callee_receiver(Symbol*)`                                                                                                  | `<unknown>` |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `TaskTerminator::offer_termination(TerminatorTerminator*)`                                                                                     | `<unknown>` |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `G1ParEvacuateFollowersClosure::offer_termination()`                                                                                           | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `SignatureStream::next()`                                                                                                                      | `<unknown>` |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)`                                                       | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)`                                                       | `<unknown>` |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `ArgumentSizeComputer::ArgumentSizeComputer(Symbol*)`                                                                                          | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `MemAllocator::allocate() const`                                                                                                               | `<unknown>` |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `_platform_memchr`                                                                                                                             | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `inflate_fast`                                                                                                                                 | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `Monitor::wait_without_safepoint_check(unsigned long long)`                                                                                    | `<unknown>` |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `SharedRuntime::find_callee_info_helper(vframeStream&, Bytecodes::Code&, CallInfo&, JavaThread*)`                                              | `<unknown>` |
|  +28.6% |    +2 | 1.1% → 1.5% |   7 → 9 | `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)`                                                                        | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                        | Location                                                |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +233.3% |    +7 | 0.5% → 1.7% |  3 → 10 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                       |
| +200.0% |    +6 | 0.5% → 1.5% |   3 → 9 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                 |
| +200.0% |    +6 | 0.5% → 1.5% |   3 → 9 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                 |
| +133.3% |    +4 | 0.5% → 1.2% |   3 → 7 | `getMetaClass()`                                                                | `org.codehaus.groovy.vmplugin.v8.Selector$InitSelector` |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `visitClosureExpression(ClosureExpression)`                                     | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `visit(GroovyCodeVisitor)`                                                      | `org.codehaus.groovy.ast.expr.ClosureExpression`        |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `ensureClassInitialized0(Class)`                                                | `jdk.internal.misc.Unsafe`                              |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `ensureClassInitialized(Class)`                                                 | `jdk.internal.misc.Unsafe`                              |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `makePreparedLambdaForm(MethodType, int)`                                       | `java.lang.invoke.DirectMethodHandle`                   |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `preparedLambdaForm(MethodType, int)`                                           | `java.lang.invoke.DirectMethodHandle`                   |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `preparedLambdaForm(MemberName, boolean)`                                       | `java.lang.invoke.DirectMethodHandle`                   |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `preparedLambdaForm(MemberName)`                                                | `java.lang.invoke.DirectMethodHandle`                   |
|     new |    +4 | 0.0% → 0.7% |   0 → 4 | `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)`                | `java.lang.invoke.MethodHandles`                        |
|  +50.0% |    +3 | 0.9% → 1.5% |   6 → 9 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`   | `java.lang.invoke.MethodHandleNatives`                  |
|  +50.0% |    +3 | 0.9% → 1.5% |   6 → 9 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                | `java.lang.invoke.MethodHandleNatives`                  |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `visitMethodCallExpression(MethodCallExpression)`                               | `org.codehaus.groovy.ast.CodeVisitorSupport`            |
| +150.0% |    +3 | 0.3% → 0.8% |   2 → 5 | `make(byte, Class, MemberName, Class)`                                          | `java.lang.invoke.DirectMethodHandle`                   |
|  +30.0% |    +3 | 1.5% → 2.2% | 10 → 13 | `newInvokeSpecial(Object)`                                                      | `java.lang.invoke.DirectMethodHandle$Holder`            |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `visitListOfExpressions(List)`                                                  | `org.codehaus.groovy.ast.GroovyCodeVisitor`             |
| +100.0% |    +3 | 0.5% → 1.0% |   3 → 6 | `visitTupleExpression(TupleExpression)`                                         | `org.codehaus.groovy.ast.CodeVisitorSupport`            |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function                                                                                    | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -8.7% |   -43 | 75.1% → 75.0% | 492 → 449 | `Thread::call_run()`                                                                        | `<unknown>`                                          |
|  -8.7% |   -43 | 75.1% → 75.0% | 492 → 449 | `thread_native_entry(Thread*)`                                                              | `<unknown>`                                          |
|  -8.7% |   -43 | 75.3% → 75.1% | 493 → 450 | `_pthread_start`                                                                            | `<unknown>`                                          |
|  -8.7% |   -43 | 75.3% → 75.1% | 493 → 450 | `thread_start`                                                                              | `<unknown>`                                          |
|  -7.7% |   -36 | 71.6% → 72.3% | 469 → 433 | `CompileBroker::compiler_thread_loop()`                                                     | `<unknown>`                                          |
|  -7.5% |   -35 | 71.6% → 72.5% | 469 → 434 | `JavaThread::thread_main_inner()`                                                           | `<unknown>`                                          |
|  -6.9% |   -32 | 70.5% → 71.8% | 462 → 430 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                    | `<unknown>`                                          |
|  -5.8% |   -22 | 57.7% → 59.4% | 378 → 356 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                   | `<unknown>`                                          |
|  -5.6% |   -21 | 57.4% → 59.3% | 376 → 355 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                          | `<unknown>`                                          |
| -10.5% |   -14 | 20.3% → 19.9% | 133 → 119 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH`                    |
| -18.3% |   -13 |  10.8% → 9.7% |   71 → 58 | `Compilation::compile_java_method()`                                                        | `<unknown>`                                          |
|  -9.2% |   -13 | 21.5% → 21.4% | 141 → 128 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
|  -9.3% |   -13 | 21.4% → 21.2% | 140 → 127 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH`                     |
|  -9.3% |   -13 | 21.4% → 21.2% | 140 → 127 | `linkToCallSite(Object, Object, Object)`                                                    | `java.lang.invoke.Invokers$Holder`                   |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invokeExact_MT(Object, Object, Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                   |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invokeImpl(Object, Object[])`                                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invoke(Object, Object[])`                                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invoke(Object, Object[])`                                                                  | `java.lang.reflect.Method`                           |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invoke(Object, Object[])`                                                                  | `org.codehaus.groovy.reflection.CachedMethod`        |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `doMethodInvoke(Object, Object[])`                                                          | `groovy.lang.MetaMethod`                             |

##### Compiler

| Change | Delta |             % |   Samples | Function                                                                                                | Location    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -7.7% |   -36 | 71.6% → 72.3% | 469 → 433 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
|  -6.9% |   -32 | 70.5% → 71.8% | 462 → 430 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
|  -5.8% |   -22 | 57.7% → 59.4% | 378 → 356 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
|  -5.6% |   -21 | 57.4% → 59.3% | 376 → 355 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| -18.3% |   -13 |  10.8% → 9.7% |   71 → 58 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| -14.1% |   -11 | 11.9% → 11.2% |   78 → 67 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| -14.1% |   -11 | 11.9% → 11.2% |   78 → 67 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
|  -5.9% |   -11 | 28.5% → 29.4% | 187 → 176 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| -23.5% |    -8 |   5.2% → 4.3% |   34 → 26 | `Compilation::build_hir()`                                                                              | `<unknown>` |
| -36.4% |    -8 |   3.4% → 2.3% |   22 → 14 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                      | `<unknown>` |
| -87.5% |    -7 |   1.2% → 0.2% |     8 → 1 | `MultiNode::is_CFG() const`                                                                             | `<unknown>` |
| -46.2% |    -6 |   2.0% → 1.2% |    13 → 7 | `Compilation::emit_code_body()`                                                                         | `<unknown>` |
| -66.7% |    -6 |   1.4% → 0.5% |     9 → 3 | `ciEnv::get_method_by_index_impl(constantPoolHandle const&, int, Bytecodes::Code, ciInstanceKlass*)`    | `<unknown>` |
| -75.0% |    -6 |   1.2% → 0.3% |     8 → 2 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)`                                               | `<unknown>` |
| -62.5% |    -5 |   1.2% → 0.5% |     8 → 3 | `ciEnv::lookup_method(ciInstanceKlass*, ciKlass*, Symbol*, Symbol*, Bytecodes::Code, constantTag)`      | `<unknown>` |
| -35.7% |    -5 |   2.1% → 1.5% |    14 → 9 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                                    | `<unknown>` |
| -50.0% |    -5 |   1.5% → 0.8% |    10 → 5 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                  | `<unknown>` |
| -41.7% |    -5 |   1.8% → 1.2% |    12 → 7 | `ciObjectFactory::get_metadata(Metadata*)`                                                              | `<unknown>` |
| -28.6% |    -4 |   2.1% → 1.7% |   14 → 10 | `Matcher::match_tree(Node const*)`                                                                      | `<unknown>` |
|  -4.6% |    -4 | 13.3% → 13.9% |   87 → 83 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                                                                                                                                                                                            | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -8.7% |   -43 | 75.1% → 75.0% | 492 → 449 | `Thread::call_run()`                                                                                                                                                                                                                                                | `<unknown>` |
|   -8.7% |   -43 | 75.1% → 75.0% | 492 → 449 | `thread_native_entry(Thread*)`                                                                                                                                                                                                                                      | `<unknown>` |
|   -8.7% |   -43 | 75.3% → 75.1% | 493 → 450 | `_pthread_start`                                                                                                                                                                                                                                                    | `<unknown>` |
|   -8.7% |   -43 | 75.3% → 75.1% | 493 → 450 | `thread_start`                                                                                                                                                                                                                                                      | `<unknown>` |
|   -7.5% |   -35 | 71.6% → 72.5% | 469 → 434 | `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                   | `<unknown>` |
|  -14.1% |   -11 | 11.9% → 11.2% |   78 → 67 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                             | `<unknown>` |
|  -75.0% |    -9 |   1.8% → 0.5% |    12 → 3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`                                                                                               | `<unknown>` |
|  -81.8% |    -9 |   1.7% → 0.3% |    11 → 2 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                                                                                                                                                                                       | `<unknown>` |
|  -72.7% |    -8 |   1.7% → 0.5% |    11 → 3 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                                                                                                                    | `<unknown>` |
|  -31.8% |    -7 |   3.4% → 2.5% |   22 → 15 | `WorkerThread::run()`                                                                                                                                                                                                                                               | `<unknown>` |
|  -85.7% |    -6 |   1.1% → 0.2% |     7 → 1 | `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)`                                                                                                                                                                                       | `<unknown>` |
|  -85.7% |    -6 |   1.1% → 0.2% |     7 → 1 | `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)`                                                                                                                                                                                            | `<unknown>` |
| removed |    -6 |   0.9% → 0.0% |     6 → 0 | `CodeCacheUnloadingTask::work(unsigned int)`                                                                                                                                                                                                                        | `<unknown>` |
| removed |    -6 |   0.9% → 0.0% |     6 → 0 | `G1ParallelCleaningTask::work(unsigned int)`                                                                                                                                                                                                                        | `<unknown>` |
|  -12.5% |    -5 |   6.1% → 5.8% |   40 → 35 | `Parse::do_all_blocks()`                                                                                                                                                                                                                                            | `<unknown>` |
| removed |    -5 |   0.8% → 0.0% |     5 → 0 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                                                                                                                                                 | `<unknown>` |
| removed |    -5 |   0.8% → 0.0% |     5 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |
| removed |    -5 |   0.8% → 0.0% |     5 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)`                                                                                                                                                                                                            | `<unknown>` |
| removed |    -5 |   0.8% → 0.0% |     5 → 0 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)`                                                                                                                                                                                                             | `<unknown>` |
| removed |    -5 |   0.8% → 0.0% |     5 → 0 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)`                                                                                                                                    | `<unknown>` |

##### Standard library

| Change | Delta |             % |   Samples | Function                                                                                      | Location                                                 |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -10.5% |   -14 | 20.3% → 19.9% | 133 → 119 | `invokeVirtual(Object, Object, Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH`                        |
|  -9.2% |   -13 | 21.5% → 21.4% | 141 → 128 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800`     |
|  -9.3% |   -13 | 21.4% → 21.2% | 140 → 127 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH`                         |
|  -9.3% |   -13 | 21.4% → 21.2% | 140 → 127 | `linkToCallSite(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                       |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                       |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                               |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invoke(Object, Object[])`                                                                    | `org.codehaus.groovy.reflection.CachedMethod`            |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `doMethodInvoke(Object, Object[])`                                                            | `groovy.lang.MetaMethod`                                 |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`                             | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `invokeMethod(Object, String, Object[])`                                                      | `groovy.lang.MetaClassImpl`                              |
|  -9.4% |   -13 | 21.2% → 21.0% | 139 → 126 | `guardWithCatch(Object, Object, Object)`                                                      | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`      |
|  -9.4% |   -13 | 21.2% → 21.0% | 139 → 126 | `guard(Object, Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`      |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `call(Object[])`                                                                              | `groovy.lang.Closure`                                    |
|  -9.4% |   -13 | 21.2% → 21.0% | 139 → 126 | `reinvoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`      |
| -10.5% |   -13 | 18.9% → 18.5% | 124 → 111 | `invokeSpecial(Object, Object, Object)`                                                       | `java.lang.invoke.DirectMethodHandle$Holder`             |
| -10.6% |   -13 | 18.8% → 18.4% | 123 → 110 | `call(Object)`                                                                                | `groovy.lang.Closure`                                    |
|  -8.6% |   -12 |         21.4% | 140 → 128 | `invokeExact_MT(Object, Object, Object)`                                                      | `java.lang.invoke.Invokers$Holder`                       |
|  -8.5% |   -12 |         21.7% | 142 → 130 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`          |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +71.4% |   +10 | 100.0% | 14 → 24 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseGVN::transform_no_reclaim(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                         | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 25.0% |   0 → 3 | `Parse::do_exits()`                                                                                            | `<unknown>` |
| +100.0% |    +1 | 20.0% → 16.7% |   1 → 2 | `GraphKit::store_to_memory(Node*, Node*, Node*, BasicType, int, MemNode::MemOrd, bool, bool, bool, bool, int)` | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `Parse::call_register_finalizer()`                                                                             | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `GraphKit::type_check_receiver(Node*, ciKlass*, float, Node**)`                                                | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `GraphKit::cast_not_null(Node*, bool)`                                                                         | `<unknown>` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |      % | Samples | Caller                          | Location                                 |
| ------: | ----: | -----: | ------: | ------------------------------- | ---------------------------------------- |
| +233.3% |    +7 | 100.0% |  3 → 10 | `defineClass(String, Resource)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                 | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------- | ----------- |
|  +70.0% |    +7 | 90.9% → 100.0% | 10 → 17 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| removed |    -1 |    9.1% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Caller                                                    | Location                |
| ------: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Caller                                              | Location                          |
| ------: | ----: | -----: | ------: | --------------------------------------------------- | --------------------------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                                                                                         | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |

##### `matches(SourceCode)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change | Delta |      % | Samples | Caller                                  | Location                          |
| ------: | ----: | -----: | ------: | --------------------------------------- | --------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `invokeVirtual(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                         | Location    |
| ------: | ----: | -----: | ------: | ------------------------------ | ----------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `LIRGenerator::block_do(BlockBegin*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                      | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                       | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ----------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                        | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ----------- |
|  +5.4% |    +4 | 100.0% | 74 → 78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ----------- |
|  +5.4% |    +4 | 100.0% | 74 → 78 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$InitSelector`)

|  Change | Delta |      % | Samples | Caller                | Location                                                  |
| ------: | ----: | -----: | ------: | --------------------- | --------------------------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `setCallSiteTarget()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `G1ParEvacuateFollowersClosure::do_void()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                          | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +25.0% |    +4 | 100.0% | 16 → 20 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                                                                             | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +66.7% |    +2 | 75.0% → 62.5% |   3 → 5 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
| +200.0% |    +2 | 25.0% → 37.5% |   1 → 3 | `ClassLoader::load_class(Symbol*, bool, JavaThread*)`                                                               | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `PhaseLive::compute(unsigned int)` | `<unknown>` |

##### `BlockList::iterate_forward(BlockClosure*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                    | Location    |
| ------: | ----: | -----: | ------: | ------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `Compilation::emit_lir()` | `<unknown>` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                 | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)`              | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)` | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| +13.6% |    +3 | 100.0% | 22 → 25 | `Compilation::compile_java_method()` | `<unknown>` |

##### `PhaseIterGVN::remove_globally_dead_node(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                     | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ----------- |
| +200.0% |    +4 | 50.0% → 85.7% |   2 → 6 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `RegionNode::Ideal(PhaseGVN*, bool)`       | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `split_if(IfNode*, PhaseIterGVN*)`         | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `PhaseIterGVN::optimize()`                 | `<unknown>` |

##### `PhiNode::Value(PhaseGVN*) const` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                  | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------- | ----------- |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`     | `<unknown>` |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |
| -50.0% |    -1 | 100.0% → 20.0% |   2 → 1 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `LoadNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                  | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% → 83.3% |   3 → 5 | `PhaseIterGVN::transform_old(Node*)`    | `<unknown>` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |

##### `PhaseChaitin::Select()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                              | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `PhaseOutput::shorten_branches(unsigned int*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                  | Location    |
| ------: | ----: | -----: | ------: | ----------------------- | ----------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `PhaseOutput::Output()` | `<unknown>` |

##### `ciTypeFlow::StateVector::do_getstatic(ciBytecodeStream*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                                           | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `ciTypeFlow::StateVector::apply_one_bytecode(ciBytecodeStream*)` | `<unknown>` |

##### `Parse::do_exits()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                      | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `ArgumentSizeComputer::ArgumentSizeComputer(Symbol*)` | `<unknown>` |

##### `frame::interpreter_callee_receiver(Symbol*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                             | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)` | `<unknown>` |

##### `TaskTerminator::offer_termination(TerminatorTerminator*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                               | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `G1ParEvacuateFollowersClosure::offer_termination()` | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::offer_termination()` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                     | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `SignatureStream::next()` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`              | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `void SignatureIterator::do_parameters_on<Fingerprinter>(Fingerprinter*)`               | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                 | `<unknown>` |

##### `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                                         | Location    |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% → 83.3% |   3 → 5 | `SystemDictionary::resolve_or_fail(Symbol*, Handle, Handle, bool, JavaThread*)`                | `<unknown>` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `JVM_FindClassFromBootLoader`                                                                  | `<unknown>` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `SystemDictionary::resolve_super_or_fail(Symbol*, Symbol*, Handle, Handle, bool, JavaThread*)` | `<unknown>` |

##### `Arena::Arealloc(void*, unsigned long, unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                  | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `VectorSet::grow(unsigned int)`         | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Node_Array::grow(unsigned int)`        | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Node::dominates(Node*, Node_List&)`    | `<unknown>` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Node::out_grow(unsigned int)`          | `<unknown>` |

##### `ArgumentSizeComputer::ArgumentSizeComputer(Symbol*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                             | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ----------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `frame::interpreter_callee_receiver(Symbol*)`                      | `<unknown>` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_invoke(JavaThread*, Bytecodes::Code)` | `<unknown>` |

##### `MemAllocator::allocate() const` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                         | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------ | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `CollectedHeap::array_allocate(Klass*, unsigned long, int, bool, JavaThread*)` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `InstanceKlass::allocate_instance(oopDesc*, JavaThread*)`                      | `<unknown>` |

##### `_platform_memchr` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                                  | Location    |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`              | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `SignatureStream::SignatureStream(Symbol const*, bool)`                                 | `<unknown>` |

##### `inflate_fast` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                          | Location    |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `Monitor::wait_without_safepoint_check(unsigned long long)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                                             | Location    |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------- | ----------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `TaskTerminator::offer_termination(TerminatorTerminator*)`                         | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `MonitorDeflationThread::monitor_deflation_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `SharedRuntime::find_callee_info_helper(vframeStream&, Bytecodes::Code&, CallInfo&, JavaThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Caller                                                       | Location    |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------ | ----------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `SharedRuntime::resolve_sub_helper(bool, bool, JavaThread*)` | `<unknown>` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `SharedRuntime::handle_ic_miss_helper(JavaThread*)`          | `<unknown>` |

##### `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                  | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| +28.6% |    +2 | 100.0% |   7 → 9 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |

##### `visitClosureExpression(ClosureExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|  Change | Delta |      % | Samples | Caller                     | Location                                         |
| ------: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ClosureExpression` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.ClosureExpression`)

|  Change | Delta |      % | Samples | Caller                         | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `visitListOfExpressions(List)` | `org.codehaus.groovy.ast.GroovyCodeVisitor` |

##### `ensureClassInitialized0(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Caller                          | Location                   |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `ensureClassInitialized(Class)` | `jdk.internal.misc.Unsafe` |

##### `ensureClassInitialized(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |              % | Samples | Caller                                 | Location                                           |
| ------: | ----: | -------------: | ------: | -------------------------------------- | -------------------------------------------------- |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `checkInitialized(MemberName)`         | `java.lang.invoke.DirectMethodHandle`              |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `ensureClassInitialized(Class)`        | `jdk.internal.reflect.MethodHandleAccessorFactory` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `createFormsFor(LambdaForm$BasicType)` | `java.lang.invoke.LambdaForm`                      |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                                | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                                    | Location                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `preparedLambdaForm(MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                           | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `preparedLambdaForm(MemberName)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Caller                                 | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `make(byte, Class, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle` |

##### `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` (`java.lang.invoke.MethodHandles`)

| Change | Delta |            % | Samples | Caller                                                    | Location                         |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------- | -------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `catchException(MethodHandle, Class, MethodHandle)`       | `java.lang.invoke.MethodHandles` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Caller                                                           | Location                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|  Change | Delta |             % | Samples | Caller                                            | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ParameterAssignmentInFilterClosureAstVisitor` |
|  -33.3% |    -1 | 50.0% → 22.2% |   3 → 2 | `main(String[])`                                  | `org.codenarc.CodeNarc`                                                |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `getHeader(Class)`                                | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`                |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `put(Object, MethodNode)`                         | `org.codehaus.groovy.ast.ClassNode$MapOfLists`                         |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `<init>()`                                        | `org.codenarc.CodeNarc`                                                |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

| Change | Delta |              % | Samples | Caller                                                    | Location                                                     |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------ |
| +33.3% |    +1 | 100.0% → 66.7% |   3 → 4 | `visit(GroovyCodeVisitor)`                                | `org.codehaus.groovy.ast.expr.MethodCallExpression`          |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ComparisonOfTwoConstantsAstVisitor` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `super$2$visitMethodCallExpression(MethodCallExpression)` | `org.codenarc.rule.basic.ComparisonWithSelfAstVisitor`       |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |              % | Samples | Caller                                                                                   | Location                                |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------- |
|    new |    +2 |   0.0% → 40.0% |   0 → 2 | `make(Class, MemberName)`                                                                | `java.lang.invoke.DirectMethodHandle`   |
| +50.0% |    +1 | 100.0% → 60.0% |   2 → 3 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `newInvokeSpecial(Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                           | Location                           |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------- |
| +25.0% |    +1 | 40.0% → 38.5% |   4 → 5 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH`   |
| +16.7% |    +1 | 60.0% → 53.8% |   6 → 7 | `invokeExact_MT(Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|    new |    +1 |   0.0% → 7.7% |   0 → 1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH`   |

##### `visitListOfExpressions(List)` (`org.codehaus.groovy.ast.GroovyCodeVisitor`)

|  Change | Delta |      % | Samples | Caller                                  | Location                                     |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `visitTupleExpression(TupleExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `visitTupleExpression(TupleExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|  Change | Delta |      % | Samples | Caller                                                | Location                                     |
| ------: | ----: | -----: | ------: | ----------------------------------------------------- | -------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `visitArgumentlistExpression(ArgumentListExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `Thread::call_run()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
|  -8.7% |   -43 | 100.0% | 492 → 449 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -8.7% |   -43 | 100.0% | 492 → 449 | `_pthread_start` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller         | Location    |
| -----: | ----: | -----: | --------: | -------------- | ----------- |
|  -8.7% |   -43 | 100.0% | 493 → 450 | `thread_start` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                            | Location    |
| -----: | ----: | -----: | --------: | --------------------------------- | ----------- |
|  -7.7% |   -36 | 100.0% | 469 → 433 | `JavaThread::thread_main_inner()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -7.5% |   -35 | 100.0% | 469 → 434 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                  | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
|  -6.9% |   -32 | 100.0% | 462 → 430 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                   | Location    |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | ----------- |
|  -5.8% |   -22 | 100.0% | 378 → 356 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------- | ----------- |
|  -5.6% |   -21 | 100.0% | 376 → 355 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH`)

|  Change | Delta |             % |   Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
|  -10.5% |   -14 |        100.0% | 133 → 119 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH`                    |
|   -9.9% |    -8 | 60.9% → 61.3% |   81 → 73 | `guardWithCatch(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010d2c00` |
|   -7.4% |    -2 | 20.3% → 21.0% |   27 → 25 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `invoke(Object, Object, int, Object)`            | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -1 |   0.8% → 0.0% |     1 → 0 | `invoke(Object, Object, int)`                    | `java.lang.invoke.LambdaForm$MH`                    |

##### `Compilation::compile_java_method()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -18.3% |   -13 | 100.0% | 71 → 58 | `Compilation::compile_method()` | `<unknown>` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001088800`)

| Change | Delta |             % |   Samples | Caller                                           | Location                         |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | -------------------------------- |
|  -9.3% |   -13 | 99.3% → 99.2% | 140 → 127 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH` |
|  -8.6% |   -11 | 90.8% → 91.4% | 128 → 117 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH` |
|  -8.0% |    -8 | 70.9% → 71.9% |  100 → 92 | `invoke(Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH` |
|  -6.6% |    -6 | 64.5% → 66.4% |   91 → 85 | `invoke(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
| -75.0% |    -3 |   2.8% → 0.8% |     4 → 1 | `invoke(Object, Object, int)`                    | `java.lang.invoke.LambdaForm$MH` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % |   Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | --------------------------------------------------- |
|   -9.3% |   -13 |        100.0% | 140 → 127 | `linkToCallSite(Object, Object, Object)`         | `java.lang.invoke.Invokers$Holder`                  |
|  -10.6% |   -13 | 87.9% → 86.6% | 123 → 110 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
|   -9.4% |   -13 | 99.3% → 99.2% | 139 → 126 | `guardWithCatch(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |
|  -11.1% |    -7 | 45.0% → 44.1% |   63 → 56 | `reinvoke(Object, Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `guard(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x00000070010aac00` |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |             % |   Samples | Caller                                   | Location                                         |
| -----: | ----: | ------------: | --------: | ---------------------------------------- | ------------------------------------------------ |
|  -9.3% |   -13 |        100.0% | 140 → 127 | `main(String[])`                         | `org.codenarc.CodeNarc`                          |
|  -9.0% |    -9 | 71.4% → 71.7% |  100 → 91 | `execute()`                              | `org.codenarc.CodeNarcRunner`                    |
|  -9.5% |    -9 | 67.9% → 67.7% |   95 → 86 | `processDirectory(String, RuleSet)`      | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |
| -14.8% |    -8 | 38.6% → 36.2% |   54 → 46 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer`   |
| -12.2% |    -6 | 35.0% → 33.9% |   49 → 43 | `init()`                                 | `org.codenarc.source.AbstractSourceCode`         |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % |   Samples | Caller                     | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------- | --------------------------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Caller                             | Location                 |
| -----: | ----: | -----: | --------: | ---------------------------------- | ------------------------ |
| -10.6% |   -13 | 100.0% | 123 → 110 | `doMethodInvoke(Object, Object[])` | `groovy.lang.MetaMethod` |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

|  Change | Delta |           % |   Samples | Caller                                                              | Location                                                 |
| ------: | ----: | ----------: | --------: | ------------------------------------------------------------------- | -------------------------------------------------------- |
|  -10.6% |   -13 |      100.0% | 123 → 110 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)`   | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| +100.0% |    +1 | 0.8% → 1.8% |     1 → 2 | `doInvokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl`                              |

##### `Compilation::compile_method()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| -14.1% |   -11 | 100.0% | 78 → 67 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                  | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------- | ----------- |
| -14.1% |   -11 | 100.0% | 78 → 67 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

| Change | Delta |      % |   Samples | Caller                                                             | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------ | ----------- |
|  -5.9% |   -11 | 100.0% | 187 → 176 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -23.5% |    -8 | 100.0% | 34 → 26 | `Compilation::compile_java_method()` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -36.4% |    -8 | 100.0% | 22 → 14 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `MultiNode::is_CFG() const` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                  | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------- | ----------- |
|  -75.0% |    -3 | 50.0% → 100.0% |   4 → 1 | `PhaseIdealLoop::build_and_optimize()`                                  | `<unknown>` |
| removed |    -2 |   25.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `RegionNode::is_unreachable_region(PhaseGVN const*)`                    | `<unknown>` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `Compilation::emit_code_body()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                               | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------- |
| -46.2% |    -6 | 100.0% |  13 → 7 | `Compilation::compile_java_method()` | `<unknown>` |

##### `ciEnv::get_method_by_index_impl(constantPoolHandle const&, int, Bytecodes::Code, ciInstanceKlass*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                               | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------- | ----------- |
| -66.7% |    -6 | 100.0% |   9 → 3 | `ciBytecodeStream::get_method(bool&, ciSignature**)` | `<unknown>` |

##### `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                    | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------- |
| -75.0% |    -6 | 100.0% |   8 → 2 | `Matcher::match_tree(Node const*)`                        | `<unknown>` |
| -75.0% |    -3 |  50.0% |   4 → 1 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` | `<unknown>` |

##### `ciEnv::lookup_method(ciInstanceKlass*, ciKlass*, Symbol*, Symbol*, Bytecodes::Code, constantTag)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                               | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `ciEnv::get_method_by_index_impl(constantPoolHandle const&, int, Bytecodes::Code, ciInstanceKlass*)` | `<unknown>` |

##### `ciBytecodeStream::get_method(bool&, ciSignature**)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -50.0% |    -2 | 28.6% → 22.2% |   4 → 2 | `ciMethod::get_method_at_bci(int, bool&, ciSignature**)`                                                | `<unknown>` |
| removed |    -2 |  14.3% → 0.0% |   2 → 0 | `BCEscapeAnalyzer::iterate_one_block(ciBlock*, BCEscapeAnalyzer::StateInfo&, GrowableArray<ciBlock*>&)` | `<unknown>` |
|  +33.3% |    +1 | 21.4% → 44.4% |   3 → 4 | `GraphBuilder::invoke(Bytecodes::Code)`                                                                 | `<unknown>` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `Parse::do_call()`                                                                                      | `<unknown>` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `LIRGenerator::profile_arguments(ProfileCall*)`                                                         | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                              | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------- |
| -50.0% |    -5 | 100.0% |  10 → 5 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                    | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -2 | 25.0% → 14.3% |   3 → 1 | `ciEnv::get_method_from_handle(Method*)`                                                  | `<unknown>` |
| removed |    -2 |  16.7% → 0.0% |   2 → 0 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| removed |    -2 |  16.7% → 0.0% |   2 → 0 | `ciMethod::ensure_method_data(methodHandle const&)`                                       | `<unknown>` |
| +100.0% |    +1 |  8.3% → 28.6% |   1 → 2 | `ciEnv::get_klass_by_name_impl(ciKlass*, constantPoolHandle const&, ciSymbol*, bool)`     | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `ciMethod::resolve_invoke(ciKlass*, ciKlass*, bool, bool)`                                | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| -30.8% |    -4 | 92.9% → 90.0% |  13 → 9 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------- |
|  -9.3% |    -4 | 49.4% → 47.0% | 43 → 39 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                   | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ----------- |
| -14.1% |   -11 | 100.0% | 78 → 67 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                                                           | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -72.7% |    -8 | 91.7% → 100.0% |  11 → 3 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `InstanceKlass::find_method(Array<Method*> const*, Symbol const*, Symbol const*)`                                                | `<unknown>` |

##### `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
|  -85.7% |    -6 | 63.6% → 50.0% |   7 → 1 | `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)`                           | `<unknown>` |
| removed |    -2 |  18.2% → 0.0% |   2 → 0 | `LinkResolver::linktime_resolve_static_method(LinkInfo const&, JavaThread*)`                            | `<unknown>` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)`                                | `<unknown>` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `LinkResolver::linktime_resolve_special_method(LinkInfo const&, JavaThread*)`                           | `<unknown>` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `LinkResolver::resolve_method_statically(Bytecodes::Code, constantPoolHandle const&, int, JavaThread*)` | `<unknown>` |

##### `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -87.5% |    -7 | 72.7% → 33.3% |   8 → 1 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                                               | `<unknown>` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `klassVtable::needs_new_vtable_entry(Method*, Klass const*, Handle, Symbol*, AccessFlags, unsigned short)`                  | `<unknown>` |
|  -50.0% |    -1 | 18.2% → 33.3% |   2 → 1 | `LinkResolver::resolve_interface_method(LinkInfo const&, Bytecodes::Code, JavaThread*)`                                     | `<unknown>` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `LinkResolver::runtime_resolve_interface_method(CallInfo&, methodHandle const&, Klass*, Handle, Klass*, bool, JavaThread*)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -31.8% |    -7 | 100.0% | 22 → 15 | `Thread::call_run()` | `<unknown>` |

##### `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                                              | Location    |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------- | ----------- |
|  -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)`                            | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `LinkResolver::resolve_virtual_call(CallInfo&, Handle, Klass*, LinkInfo const&, bool, JavaThread*)` | `<unknown>` |

##### `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                                                             | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- | ----------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `ciEnv::lookup_method(ciInstanceKlass*, ciKlass*, Symbol*, Symbol*, Bytecodes::Code, constantTag)` | `<unknown>` |

##### `CodeCacheUnloadingTask::work(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `G1ParallelCleaningTask::work(unsigned int)` | `<unknown>` |

##### `G1ParallelCleaningTask::work(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                | Location    |
| ------: | ----: | ------------: | ------: | --------------------- | ----------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `WorkerThread::run()` | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                      | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| -12.5% |    -5 | 100.0% | 40 → 35 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` | `<unknown>` |

##### `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` | `<unknown>` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

| Change | Delta |           % |   Samples | Caller                                                                | Location                    |
| -----: | ----: | ----------: | --------: | --------------------------------------------------------------------- | --------------------------- |
| -10.6% |   -13 |      100.0% | 123 → 110 | `invokeMethod(Object, String, Object[])`                              | `groovy.lang.MetaClassImpl` |
|    new |    +1 | 0.0% → 0.9% |     0 → 1 | `invokePropertyOrMissing(Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

| Change | Delta |             % |   Samples | Caller                                                    | Location                                                 |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------- | -------------------------------------------------------- |
| -10.6% |   -13 |        100.0% | 123 → 110 | `call(Object[])`                                          | `groovy.lang.Closure`                                    |
|  -5.0% |    -5 | 81.3% → 86.4% |  100 → 95 | `invokeInterface(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001093400`     |
|  -7.5% |    -4 | 43.1% → 44.5% |   53 → 49 | `call(Object, Object[])`                                  | `org.codehaus.groovy.runtime.callsite.PogoMetaClassSite` |
| -25.0% |    -2 |   6.5% → 5.5% |     8 → 6 | `invokeMethod(Object, String, Object[])`                  | `groovy.lang.DelegatingMetaClass`                        |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`)

| Change | Delta |             % |   Samples | Caller                             | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|  -9.4% |   -13 |        100.0% | 139 → 126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
| -10.4% |   -10 | 69.1% → 68.3% |   96 → 86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`)

| Change | Delta |             % |   Samples | Caller                             | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|  -9.4% |   -13 |        100.0% | 139 → 126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
| -10.4% |   -10 | 69.1% → 68.3% |   96 → 86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `call(Object[])` (`groovy.lang.Closure`)

|  Change | Delta |           % |   Samples | Caller                                     | Location                                           |
| ------: | ----: | ----------: | --------: | ------------------------------------------ | -------------------------------------------------- |
|  -10.6% |   -13 |      100.0% | 123 → 110 | `call(Object)`                             | `groovy.lang.Closure`                              |
|  +50.0% |    +1 | 1.6% → 2.7% |     2 → 3 | `callClosureForLine(Closure, String, int)` | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |
| removed |    -1 | 0.8% → 0.0% |     1 → 0 | `sum(Iterator, Object, Closure, boolean)`  | `org.codehaus.groovy.runtime.DefaultGroovyMethods` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`)

| Change | Delta |      % |   Samples | Caller                          | Location                                            |
| -----: | ----: | -----: | --------: | ------------------------------- | --------------------------------------------------- |
|  -9.4% |   -13 | 100.0% | 139 → 126 | `guard(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800` |
|  -9.4% |   -13 | 100.0% | 139 → 126 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH`                    |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % |   Samples | Caller                           | Location                         |
| -----: | ----: | ------------: | --------: | -------------------------------- | -------------------------------- |
| -10.6% |   -13 | 99.2% → 99.1% | 123 → 110 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |
|    new |    +2 |   0.0% → 1.8% |     0 → 2 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH` |

##### `call(Object)` (`groovy.lang.Closure`)

| Change | Delta |             % | Samples | Caller                              | Location                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------------------------------------- |
|  -9.5% |    -9 | 77.2% → 78.2% | 95 → 86 | `eachFile(File, FileType, Closure)` | `org.codehaus.groovy.runtime.ResourceGroovyMethods` |
| -12.5% |    -3 | 19.5% → 19.1% | 24 → 21 | `each(Iterator, Closure)`           | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
| -14.3% |    -2 | 11.4% → 10.9% | 14 → 12 | `withReader(Reader, Closure)`       | `org.codehaus.groovy.runtime.IOGroovyMethods`       |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % |   Samples | Caller                                                                                           | Location                                               |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|   -8.6% |   -12 |        100.0% | 140 → 128 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
|   -9.4% |    -6 | 45.7% → 45.3% |   64 → 58 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`        |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `invokeImpl(Object[])`                                                                           | `jdk.internal.reflect.DirectConstructorHandleAccessor` |
|     new |    +1 |   0.0% → 0.8% |     0 → 1 | `invokeImpl(Object, Object[])`                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`      |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % |   Samples | Caller                                                                                          | Location                                             |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -9.2% |   -13 | 99.3% → 98.5% | 141 → 128 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)`     | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| +50.0% |    +1 |   1.4% → 2.3% |     2 → 3 | `invokeStaticInit(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088c00` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
|  +70.0% |    +7 | 71.4% → 70.8% | 10 → 17 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` | `<unknown>` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `BoolNode::Opcode() const`                               | `<unknown>` |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `CallStaticJavaNode::uncommon_trap_request() const`      | `<unknown>` |

##### `PhaseGVN::transform_no_reclaim(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                              | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------- |
| removed |    -3 |  60.0% → 0.0% |   3 → 0 | `NodeHash::hash_find_insert(Node*)` | `<unknown>` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `PhiNode::Value(PhaseGVN*) const`   | `<unknown>` |
| +100.0% |    +1 | 20.0% → 16.7% |   1 → 2 | `StoreNode::Ideal(PhaseGVN*, bool)` | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `AddPNode::Opcode() const`          | `<unknown>` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `LoadNode::Ideal(PhaseGVN*, bool)`  | `<unknown>` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |              % | Samples | Callee                                                    | Location                          |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------- | --------------------------------- |
| +200.0% |    +6 | 100.0% → 90.0% |   3 → 9 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader`           |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | `getProtectionDomain(CodeSource)`                         | `java.security.SecureClassLoader` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
|     new |    +3 |  0.0% → 17.6% |   0 → 3 | `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)`              | `<unknown>` |
|  -33.3% |    -2 | 54.5% → 23.5% |   6 → 4 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)` | `<unknown>` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `Node_Array::grow(unsigned int)`                                       | `<unknown>` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `CallStaticJavaNode::uncommon_trap_request() const`                    | `<unknown>` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |              % | Samples | Callee                                    | Location                |
| -----: | ----: | -------------: | ------: | ----------------------------------------- | ----------------------- |
|    new |    +5 |   0.0% → 55.6% |   0 → 5 | `loadClass(String)`                       | `java.lang.ClassLoader` |
| +66.7% |    +2 | 100.0% → 55.6% |   3 → 5 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`             |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |      % | Samples | Callee                                                                          | Location                |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                        | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +100.0% |    +2 | 66.7% → 50.0% |   2 → 4 | `ClassFileParser::parse_constant_pool(ClassFileStream const*, ConstantPool*, int, JavaThread*)`                                               | `<unknown>` |
| +100.0% |    +1 | 33.3% → 25.0% |   1 → 2 | `ClassFileParser::parse_methods(ClassFileStream const*, bool, bool*, bool*, bool*, JavaThread*)`                                              | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `ClassFileParser::parse_classfile_attributes(ClassFileStream const*, ConstantPool*, ClassFileParser::ClassAnnotationCollector*, JavaThread*)` | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `ConstantPool::allocate(ClassLoaderData*, int, JavaThread*)`                                                                                  | `<unknown>` |

##### `matches(SourceCode)` (`org.codenarc.analyzer.FilesystemSourceAnalyzer`)

|  Change | Delta |      % | Samples | Callee                                   | Location                           |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                              | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 42.9% |   0 → 3 | `LinearScan::compute_debug_info_for_scope(int, IRScope*, ValueStack*, ValueStack*)` | `<unknown>` |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `LIR_OpVisitState::visit(LIR_Op*)`                                                  | `<unknown>` |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `LinearScan::compute_oop_map(IntervalWalker*, LIR_OpVisitState const&, LIR_Op*)`    | `<unknown>` |

##### `LIRGenerator::block_do(BlockBegin*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LIRGenerator::do_ProfileCall(ProfileCall*)`             | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LIRGenerator::do_Base(Base*)`                           | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LIRGenerator::do_Goto(Goto*)`                           | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `Instruction::as_Constant()`                             | `<unknown>` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LIRGenerator::do_ProfileReturnType(ProfileReturnType*)` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

| Change | Delta |           % | Samples | Callee                                                                                         | Location    |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 9.1% |   0 → 1 | `PhaseChaitin::use_prior_register(Node*, unsigned int, Node*, Block*, Node_List*, Node_List*)` | `<unknown>` |
|    new |    +1 | 0.0% → 9.1% |   0 → 1 | `RegMask::num_registers(unsigned int, LRG&)`                                                   | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                 | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
|  +71.4% |   +10 | 18.9% → 30.8% | 14 → 24 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  +60.0% |    +3 |  6.8% → 10.3% |   5 → 8 | `PhaseIdealLoop::build_loop_tree()`                                    | `<unknown>` |
|  -75.0% |    -3 |   5.4% → 1.3% |   4 → 1 | `MultiNode::is_CFG() const`                                            | `<unknown>` |
|  -37.5% |    -3 |  10.8% → 6.4% |   8 → 5 | `PhaseIdealLoop::Dominators()`                                         | `<unknown>` |
| removed |    -2 |   2.7% → 0.0% |   2 → 0 | `CProjNode::is_CFG() const`                                            | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
|  +5.4% |    +4 | 100.0% | 74 → 78 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `getMetaClass()` (`org.codehaus.groovy.vmplugin.v8.Selector$InitSelector`)

|  Change | Delta |      % | Samples | Callee                | Location                                                      |
| ------: | ----: | -----: | ------: | --------------------- | ------------------------------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `getMetaClass(Class)` | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |

##### `G1ParEvacuateFollowersClosure::do_void()` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% → 83.3% |   2 → 5 | `G1ParEvacuateFollowersClosure::offer_termination()`                                                                                  | `<unknown>` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |

##### `G1EvacuateRegionsTask::evacuate_live_objects(G1ParScanThreadState*, unsigned int)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                     | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1ParEvacuateFollowersClosure::do_void()` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +300.0% |    +3 |  6.3% → 20.0% |   1 → 4 | `IndexSetIterator::advance_and_next()`                                                                                      | `<unknown>` |
| removed |    -2 |  12.5% → 0.0% |   2 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges(LRG&, IndexSet*, unsigned int&)`                          | `<unknown>` |
|  -50.0% |    -2 | 25.0% → 10.0% |   4 → 2 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` | `<unknown>` |
|     new |    +2 |  0.0% → 10.0% |   0 → 2 | `Node::rematerialize() const`                                                                                               | `<unknown>` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `tlv_get_addr`                                                                                                              | `<unknown>` |

##### `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                               | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------- | ----------- |
| +166.7% |    +5 | 75.0% → 100.0% |   3 → 8 | `ClassFileParser::parse_stream(ClassFileStream const*, JavaThread*)` | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                                                                                                                         | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |

##### `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                           | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ----------- |
| +50.0% |    +1 | 28.6% → 27.3% |   2 → 3 | `IndexSetIterator::advance_and_next()`           | `<unknown>` |
|    new |    +1 |   0.0% → 9.1% |   0 → 1 | `IndexSet::alloc_block_containing(unsigned int)` | `<unknown>` |

##### `BlockList::iterate_forward(BlockClosure*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------- | ----------- |
| +500.0% |    +5 | 50.0% → 100.0% |   1 → 6 | `LIRGenerator::block_do(BlockBegin*)` | `<unknown>` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `If::visit(InstructionVisitor*)`      | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| +200.0% |    +4 |  9.1% → 24.0% |   2 → 6 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  -10.0% |    -2 | 90.9% → 72.0% | 20 → 18 | `LinearScan::do_linear_scan()`               | `<unknown>` |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `PhaseIterGVN::remove_globally_dead_node(Node*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `Node::replace_edge(Node*, Node*, PhaseGVN*)`     | `<unknown>` |
|  +33.3% |    +1 | 75.0% → 57.1% |   3 → 4 | `Unique_Node_List::remove(Node*)`                 | `<unknown>` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `PhiNode::Opcode() const`                         | `<unknown>` |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `Node::set_req_X(unsigned int, Node*, PhaseGVN*)` | `<unknown>` |

##### `PhiNode::Value(PhaseGVN*) const` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                         | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Type::xmeet(Type const*) const`               | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `Type::filter_helper(Type const*, bool) const` | `<unknown>` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `TypePtr::xmeet(Type const*) const`            | `<unknown>` |

##### `PhaseIdealLoop::build_loop_tree()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                             | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|  -33.3% |    -1 | 60.0% → 25.0% |   3 → 2 | `PhaseIdealLoop::build_loop_tree_impl(Node*, int)` | `<unknown>` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `MultiNode::is_CFG() const`                        | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `RegionNode::Opcode() const`                       | `<unknown>` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `Node::is_CFG() const`                             | `<unknown>` |

##### `LoadNode::Ideal(PhaseGVN*, bool)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                   | Location    |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `MemNode::Ideal_common(PhaseGVN*, bool)` | `<unknown>` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `LoadNode::split_through_phi(PhaseGVN*)` | `<unknown>` |

##### `PhaseChaitin::Select()` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                 | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `IndexSetIterator::advance_and_next()` | `<unknown>` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseIFG::re_insert(unsigned int)`    | `<unknown>` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `PhaseChaitin::bias_color(LRG&, int)`  | `<unknown>` |

##### `PhaseOutput::shorten_branches(unsigned int*)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                                      | Location    |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `MachSpillCopyNode::implementation(CodeBuffer*, PhaseRegAlloc*, bool, outputStream*) const` | `<unknown>` |

##### `ciTypeFlow::StateVector::do_getstatic(ciBytecodeStream*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                               | Location    |
| ------: | ----: | -------------: | ------: | ------------------------------------ | ----------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `ciBytecodeStream::get_field(bool&)` | `<unknown>` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `ciType::is_classless() const`       | `<unknown>` |

##### `Parse::do_exits()` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                               | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | ----------- |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `PhaseGVN::transform_no_reclaim(Node*)`              | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhiNode::Ideal(PhaseGVN*, bool)`                    | `<unknown>` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `AllocateNode::compute_MemBar_redundancy(ciMethod*)` | `<unknown>` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `ReplacedNodes::apply(Node*, unsigned int)`          | `<unknown>` |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `MergeMemNode::iteration_setup(MergeMemNode const*)` | `<unknown>` |

##### `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                    | Location    |
| -----: | ----: | -----------: | ------: | ------------------------- | ----------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `SignatureStream::next()` | `<unknown>` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `_platform_memchr`        | `<unknown>` |

##### `frame::interpreter_callee_receiver(Symbol*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                | Location    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `ArgumentSizeComputer::ArgumentSizeComputer(Symbol*)` | `<unknown>` |

##### `TaskTerminator::offer_termination(TerminatorTerminator*)` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                                      | Location    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------- | ----------- |
| +50.0% |    +1 | 100.0% → 60.0% |   2 → 3 | `Monitor::wait_without_safepoint_check(unsigned long long)` | `<unknown>` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `Mutex::lock_without_safepoint_check()`                     | `<unknown>` |
|    new |    +1 |   0.0% → 20.0% |   0 → 1 | `_pthread_mutex_firstfit_unlock_slow`                       | `<unknown>` |

##### `G1ParEvacuateFollowersClosure::offer_termination()` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                                     | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `TaskTerminator::offer_termination(TerminatorTerminator*)` | `<unknown>` |

##### `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                                                | Location    |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------------- | ----------- |
| +66.7% |    +2 | 100.0% → 83.3% |   3 → 5 | `SystemDictionary::load_instance_class(Symbol*, Handle, JavaThread*)` | `<unknown>` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `Dictionary::find(Thread*, Symbol*, Handle)`                          | `<unknown>` |

##### `ArgumentSizeComputer::ArgumentSizeComputer(Symbol*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                  | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `void SignatureIterator::do_parameters_on<ArgumentSizeComputer>(ArgumentSizeComputer*)` | `<unknown>` |

##### `MemAllocator::allocate() const` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                | Location    |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `_platform_memset`                                    | `<unknown>` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ObjArrayAllocator::initialize(HeapWordImpl**) const` | `<unknown>` |

##### `Monitor::wait_without_safepoint_check(unsigned long long)` (`<unknown>`)

|  Change | Delta |      % | Samples | Callee                                      | Location    |
| ------: | ----: | -----: | ------: | ------------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `SharedRuntime::find_callee_info_helper(vframeStream&, Bytecodes::Code&, CallInfo&, JavaThread*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                            | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ----------- |
| +100.0% |    +1 |        50.0% |   1 → 2 | `Bytecode_invoke::static_target(JavaThread*)`     | `<unknown>` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `CompiledMethod::attached_method(unsigned char*)` | `<unknown>` |

##### `InlineTree::ok_to_inline(ciMethod*, JVMState*, ciCallProfile&, bool&)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                   | Location    |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------- | ----------- |
|  +80.0% |    +4 | 71.4% → 100.0% |   5 → 9 | `ciMethod::get_flow_analysis()`                                                          | `<unknown>` |
| removed |    -2 |   28.6% → 0.0% |   2 → 0 | `InlineTree::try_to_inline(ciMethod*, ciMethod*, int, JVMState*, ciCallProfile&, bool&)` | `<unknown>` |

##### `visitClosureExpression(ClosureExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|  Change | Delta |      % | Samples | Callee                     | Location                                      |
| ------: | ----: | -----: | ------: | -------------------------- | --------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.stmt.BlockStatement` |

##### `visit(GroovyCodeVisitor)` (`org.codehaus.groovy.ast.expr.ClosureExpression`)

|  Change | Delta |      % | Samples | Callee                                      | Location                                     |
| ------: | ----: | -----: | ------: | ------------------------------------------- | -------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `visitClosureExpression(ClosureExpression)` | `org.codehaus.groovy.ast.CodeVisitorSupport` |

##### `ensureClassInitialized0(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |            % | Samples | Callee       | Location                                                            |
| -----: | ----: | -----------: | ------: | ------------ | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `<clinit>()` | `com.sun.org.apache.xerces.internal.impl.dv.xs.SchemaDVFactoryImpl` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `<clinit>()` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                     |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `<clinit>()` | `java.lang.invoke.BoundMethodHandle`                                |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `<clinit>()` | `org.slf4j.LoggerFactory`                                           |

##### `ensureClassInitialized(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Callee                           | Location                   |
| ------: | ----: | -----: | ------: | -------------------------------- | -------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `ensureClassInitialized0(Class)` | `jdk.internal.misc.Unsafe` |

##### `makePreparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |            % | Samples | Callee                | Location                      |
| -----: | ----: | -----------: | ------: | --------------------- | ----------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `compileToBytecode()` | `java.lang.invoke.LambdaForm` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `invokerType()`       | `java.lang.invoke.MethodType` |

##### `preparedLambdaForm(MethodType, int)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Callee                                    | Location                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `makePreparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Callee                                | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `preparedLambdaForm(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |             % | Samples | Callee                                    | Location                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `preparedLambdaForm(MemberName, boolean)` | `java.lang.invoke.DirectMethodHandle` |

##### `dropArgumentsToMatch(MethodHandle, int, Class[], int, boolean)` (`java.lang.invoke.MethodHandles`)

| Change | Delta |            % | Samples | Callee                                             | Location                         |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `dropArgumentsTrusted(MethodHandle, int, Class[])` | `java.lang.invoke.MethodHandles` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `counter_overflow Runtime1 stub`                   | `<unknown>`                      |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `copyOfRange(Object[], int, int)`                  | `java.util.Arrays`               |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |              % | Samples | Callee                                                      | Location                    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------- | --------------------------- |
| +33.3% |    +2 | 100.0% → 88.9% |   6 → 8 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|    new |    +1 |   0.0% → 11.1% |   0 → 1 | `linkToCallSiteMethod(MethodType)`                          | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee                                                                        | Location                               |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `visitMethodCallExpression(MethodCallExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|  Change | Delta |             % | Samples | Callee                     | Location                                              |
| ------: | ----: | ------------: | ------: | -------------------------- | ----------------------------------------------------- |
| +150.0% |    +3 | 66.7% → 83.3% |   2 → 5 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ArgumentListExpression` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `getMethod()`              | `org.codehaus.groovy.ast.expr.MethodCallExpression`   |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.PropertyExpression`     |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `resolve_virtual_call`     | `<unknown>`                                           |

##### `make(byte, Class, MemberName, Class)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |            % | Samples | Callee                                                       | Location                                        |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------ | ----------------------------------------------- |
|     new |    +4 | 0.0% → 80.0% |   0 → 4 | `preparedLambdaForm(MemberName)`                             | `java.lang.invoke.DirectMethodHandle`           |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(MethodType, LambdaForm, MemberName, boolean, Class)` | `java.lang.invoke.DirectMethodHandle$Interface` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getMethodOrFieldType()`                                     | `java.lang.invoke.MemberName`                   |

##### `newInvokeSpecial(Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |             % | Samples | Callee     | Location                                                          |
| ------: | ----: | ------------: | ------: | ---------- | ----------------------------------------------------------------- |
| +100.0% |    +1 | 10.0% → 15.4% |   1 → 2 | `<init>()` | `org.codenarc.CodeNarc`                                           |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `<init>()` | `org.codenarc.rule.basic.HardCodedWindowsFileSeparatorAstVisitor` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `<init>()` | `org.codenarc.rule.basic.ClassForNameAstVisitor`                  |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `<init>()` | `org.codenarc.rule.basic.EmptyWhileStatementAstVisitor`           |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `<init>()` | `org.codenarc.rule.basic.DoubleNegativeAstVisitor`                |

##### `visitListOfExpressions(List)` (`org.codehaus.groovy.ast.GroovyCodeVisitor`)

|  Change | Delta |             % | Samples | Callee                     | Location                                          |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------- |
| +400.0% |    +4 | 33.3% → 83.3% |   1 → 5 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ClosureExpression`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `visit(GroovyCodeVisitor)` | `org.codehaus.groovy.ast.expr.ConstantExpression` |

##### `visitTupleExpression(TupleExpression)` (`org.codehaus.groovy.ast.CodeVisitorSupport`)

|  Change | Delta |      % | Samples | Callee                         | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `visitListOfExpressions(List)` | `org.codehaus.groovy.ast.GroovyCodeVisitor` |

##### `Thread::call_run()` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                            | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------- | ----------- |
|   -7.5% |   -35 | 95.3% → 96.7% | 469 → 434 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  -31.8% |    -7 |   4.5% → 3.3% |   22 → 15 | `WorkerThread::run()`             | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `WatcherThread::run()`            | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -8.7% |   -43 | 100.0% | 492 → 449 | `Thread::call_run()` | `<unknown>` |

##### `_pthread_start` (`<unknown>`)

| Change | Delta |     % |   Samples | Callee                         | Location    |
| -----: | ----: | ----: | --------: | ------------------------------ | ----------- |
|  -8.7% |   -43 | 99.8% | 492 → 449 | `thread_native_entry(Thread*)` | `<unknown>` |

##### `thread_start` (`<unknown>`)

| Change | Delta |      % |   Samples | Callee           | Location    |
| -----: | ----: | -----: | --------: | ---------------- | ----------- |
|  -8.7% |   -43 | 100.0% | 493 → 450 | `_pthread_start` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                                   | Location    |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | ----------- |
|  -6.9% |   -32 | 98.5% → 99.3% | 462 → 430 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
| -57.1% |    -4 |   1.5% → 0.7% |     7 → 3 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

| Change | Delta |              % |   Samples | Callee                                                                             | Location    |
| -----: | ----: | -------------: | --------: | ---------------------------------------------------------------------------------- | ----------- |
|  -7.7% |   -36 | 100.0% → 99.8% | 469 → 433 | `CompileBroker::compiler_thread_loop()`                                            | `<unknown>` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `MonitorDeflationThread::monitor_deflation_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                                                    | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------- | ----------- |
|   -5.8% |   -22 | 81.8% → 82.8% | 378 → 356 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
|  -14.1% |   -11 | 16.9% → 15.6% |   78 → 67 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  -66.7% |    -2 |   0.6% → 0.2% |     3 → 1 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `ciEnv::ciEnv(CompileTask*)`                                              | `<unknown>` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `stringStream::~stringStream()`                                           | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                                             | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------ | ----------- |
|   -5.6% |   -21 | 99.5% → 99.7% | 376 → 355 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `Chunk::next_chop()`                                               | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                                                                     | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------ | ----------- |
|   -5.9% |   -11 | 49.7% → 49.6% | 187 → 176 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
|  -12.2% |    -5 | 10.9% → 10.1% |   41 → 36 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  -60.0% |    -3 |   1.3% → 0.6% |     5 → 2 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |
|  -75.0% |    -3 |   1.1% → 0.3% |     4 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `Type::Initialize(Compile*)`                                                               | `<unknown>` |

##### `invokeVirtual(Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH`)

| Change | Delta |             % | Samples | Callee                                   | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------- |
|  -9.5% |    -9 | 71.4% → 72.3% | 95 → 86 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1076`         |
|  -9.9% |    -8 | 60.9% → 61.3% | 81 → 73 | `collectViolations(SourceCode, RuleSet)` | `org.codenarc.analyzer.AbstractSourceAnalyzer` |
| -11.5% |    -6 | 39.1% → 38.7% | 52 → 46 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$251`          |
| -12.5% |    -3 | 18.0% → 17.6% | 24 → 21 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$207`          |
| -14.3% |    -2 | 10.5% → 10.1% | 14 → 12 | `doMethodInvoke(Object, Object[])`       | `org.codehaus.groovy.runtime.dgm$1008`         |

##### `Compilation::compile_java_method()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------- | ----------- |
|  -23.5% |    -8 | 47.9% → 44.8% | 34 → 26 | `Compilation::build_hir()`       | `<unknown>` |
|  -46.2% |    -6 | 18.3% → 12.1% |  13 → 7 | `Compilation::emit_code_body()`  | `<unknown>` |
|  +13.6% |    +3 | 31.0% → 43.1% | 22 → 25 | `Compilation::emit_lir()`        | `<unknown>` |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001088800`)

| Change | Delta |             % |   Samples | Callee                                                                                           | Location                                        |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
|  -9.2% |   -13 |        100.0% | 141 → 128 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|  -8.7% |    -6 | 48.9% → 49.2% |   69 → 63 | `selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |             % |   Samples | Callee                                                                                      | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| -10.5% |   -14 | 95.0% → 93.7% | 133 → 119 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH`                    |
|  -9.3% |   -13 |        100.0% | 140 → 127 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001088800` |
| -10.6% |   -13 | 87.9% → 86.6% | 123 → 110 | `invokeSpecial(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
|  -9.3% |   -12 |         92.1% | 129 → 117 | `invokeVirtual(Object, Object, Object)`                                                     | `java.lang.invoke.DirectMethodHandle$Holder`         |
| -16.7% |    -8 | 34.3% → 31.5% |   48 → 40 | `invokeVirtual(Object, Object, int)`                                                        | `java.lang.invoke.LambdaForm$DMH`                    |

##### `linkToCallSite(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                         |
| -----: | ----: | -----: | --------: | -------------------------------- | -------------------------------- |
|  -9.3% |   -13 | 100.0% | 140 → 127 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                         |
| -----: | ----: | -----: | --------: | -------------------------------- | -------------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |             % |   Samples | Callee                                                           | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------- |
| -10.6% |   -13 |        100.0% | 123 → 110 | `invokeExact_MT(Object, Object, Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|  -9.4% |    -9 | 78.0% → 79.1% |   96 → 87 | `invokeExact_MT(Object, Object, Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000f001120c00` |
|  -5.8% |    -5 | 69.9% → 73.6% |   86 → 81 | `invokeExact_MT(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f00103c000` |
|    new |    +1 |   0.0% → 0.9% |     0 → 1 | `invokeExact_MT(Object, Object, Object)`                         | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |           % |   Samples | Callee                     | Location                                          |
| ------: | ----: | ----------: | --------: | -------------------------- | ------------------------------------------------- |
|  -10.6% |   -13 |      100.0% | 123 → 110 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| +100.0% |    +1 | 0.8% → 1.8% |     1 → 2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `invoke(Object, Object[])` (`org.codehaus.groovy.reflection.CachedMethod`)

| Change | Delta |      % |   Samples | Callee                     | Location                   |
| -----: | ----: | -----: | --------: | -------------------------- | -------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `doMethodInvoke(Object, Object[])` (`groovy.lang.MetaMethod`)

| Change | Delta |      % |   Samples | Callee                     | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------- | --------------------------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invoke(Object, Object[])` | `org.codehaus.groovy.reflection.CachedMethod` |

##### `Compilation::compile_method()` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                                         | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -18.3% |   -13 | 91.0% → 86.6% | 71 → 58 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
| +33.3% |    +2 |  7.7% → 11.9% |   6 → 8 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -14.1% |   -11 | 100.0% | 78 → 67 | `Compilation::compile_method()` | `<unknown>` |

##### `Compile::Code_Gen()` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                                                               | Location    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------ | ----------- |
| removed |    -4 |   2.1% → 0.0% |     4 → 0 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |
|   -2.8% |    -3 | 57.2% → 59.1% | 107 → 104 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
|   -9.4% |    -3 | 17.1% → 16.5% |   32 → 29 | `Matcher::match()`                                                                   | `<unknown>` |
|  -15.0% |    -3 |  10.7% → 9.7% |   20 → 17 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
|   +9.5% |    +2 | 11.2% → 13.1% |   21 → 23 | `PhaseOutput::Output()`                                                              | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
| removed |    -4 |  11.8% → 0.0% |   4 → 0 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
| removed |    -2 |   5.9% → 0.0% |   2 → 0 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|   -8.0% |    -2 | 73.5% → 88.5% | 25 → 23 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `_platform_memset`                                | `<unknown>` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `Constant::hash() const`                          | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                                                                                                                  | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 |  9.1% → 0.0% |   2 → 0 | `PhaseChaitin::split_USE(MachSpillCopyNode::SpillType, Node*, Block*, Node*, unsigned int, unsigned int, bool, bool, GrowableArray<unsigned int>, int)` | `<unknown>` |
|     new |    +2 | 0.0% → 14.3% |   0 → 2 | `MachNode::rematerialize() const`                                                                                                                       | `<unknown>` |
| removed |    -1 |  4.5% → 0.0% |   1 → 0 | `loadRangeNode::rule() const`                                                                                                                           | `<unknown>` |
|  -50.0% |    -1 |  9.1% → 7.1% |   2 → 1 | `PhaseChaitin::split_DEF(Node*, Block*, int, unsigned int, Node**, Node**, GrowableArray<unsigned int>, int)`                                           | `<unknown>` |
| removed |    -1 |  4.5% → 0.0% |   1 → 0 | `PhaseChaitin::split_Rematerialize(Node*, Block*, unsigned int, unsigned int&, GrowableArray<unsigned int>, int, unsigned int*, Node**, bool)`          | `<unknown>` |

##### `Compilation::emit_code_body()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
|  -42.9% |    -3 | 53.8% → 57.1% |   7 → 4 | `Compilation::emit_code_epilog(LIR_Assembler*)` | `<unknown>` |
|  -40.0% |    -2 | 38.5% → 42.9% |   5 → 3 | `LIR_Assembler::emit_code(BlockList*)`          | `<unknown>` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `LIR_Assembler::LIR_Assembler(Compilation*)`    | `<unknown>` |

##### `ciEnv::get_method_by_index_impl(constantPoolHandle const&, int, Bytecodes::Code, ciInstanceKlass*)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                                             | Location    |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------- |
|  -62.5% |    -5 | 88.9% → 100.0% |   8 → 3 | `ciEnv::lookup_method(ciInstanceKlass*, ciKlass*, Symbol*, Symbol*, Bytecodes::Code, constantTag)` | `<unknown>` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)`          | `<unknown>` |

##### `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
|  -80.0% |    -4 | 62.5% → 50.0% |   5 → 1 | `State::DFA(int, Node const*)`                            | `<unknown>` |
|  -75.0% |    -3 |         50.0% |   4 → 1 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `State::_sub_Op_RegP(Node const*)`                        | `<unknown>` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `TypeInstPtr::add_offset(long) const`                     | `<unknown>` |

##### `ciEnv::lookup_method(ciInstanceKlass*, ciKlass*, Symbol*, Symbol*, Bytecodes::Code, constantTag)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                                     | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ----------- |
| -85.7% |    -6 | 87.5% → 33.3% |   7 → 1 | `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)`   | `<unknown>` |
|    new |    +1 |  0.0% → 33.3% |   0 → 1 | `LinkResolver::linktime_resolve_interface_method_or_null(LinkInfo const&)` | `<unknown>` |

##### `ciBytecodeStream::get_method(bool&, ciSignature**)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                               | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- | ----------- |
|  -66.7% |    -6 | 64.3% → 33.3% |   9 → 3 | `ciEnv::get_method_by_index_impl(constantPoolHandle const&, int, Bytecodes::Code, ciInstanceKlass*)` | `<unknown>` |
| +200.0% |    +2 |  7.1% → 33.3% |   1 → 3 | `ciSignature::ciSignature(ciKlass*, constantPoolHandle const&, ciSymbol*)`                           | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                             | Location    |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- | ----------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `RegMask::is_misaligned_pair() const`              | `<unknown>` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `MachSpillCopyNode::out_RegMask() const`           | `<unknown>` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `MachCallJavaNode::in_RegMask(unsigned int) const` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                            | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | ----------- |
|  -28.6% |    -2 | 58.3% → 71.4% |   7 → 5 | `ciObjectFactory::create_new_metadata(Metadata*)` | `<unknown>` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `tlv_get_addr`                                    | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                    | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
| -75.0% |    -6 | 57.1% → 20.0% |   8 → 2 | `Matcher::Label_Root(Node const*, State*, Node*, Node*&)` | `<unknown>` |
|    new |    +3 |  0.0% → 30.0% |   0 → 3 | `Matcher::ReduceInst(State*, int, Node*&)`                | `<unknown>` |
| -66.7% |    -2 | 21.4% → 10.0% |   3 → 1 | `Chunk::next_chop()`                                      | `<unknown>` |
|    new |    +1 |  0.0% → 10.0% |   0 → 1 | `CallNode::match_edge(unsigned int) const`                | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                        | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|  -58.3% |    -7 |  13.8% → 6.0% |  12 → 5 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |
|   +5.4% |    +4 | 85.1% → 94.0% | 74 → 78 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `Chunk::next_chop()`                                          | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                  | Location    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| -14.1% |   -11 | 100.0% | 78 → 67 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                           | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -87.5% |    -7 | 72.7% → 50.0% |   8 → 1 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `Reflection::verify_member_access(Klass const*, Klass const*, Klass const*, AccessFlags, bool, bool, JavaThread*)`               | `<unknown>` |

##### `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                | Location    |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -72.7% |    -8 | 100.0% |  11 → 3 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                          | Location    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ----------- |
| removed |    -6 |  27.3% → 0.0% |   6 → 0 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |
| removed |    -4 |  18.2% → 0.0% |   4 → 0 | `semaphore_wait_trap`                           | `<unknown>` |
|     new |    +2 |  0.0% → 13.3% |   0 → 2 | `G1CMRootRegionScanTask::work(unsigned int)`    | `<unknown>` |
|     new |    +2 |  0.0% → 13.3% |   0 → 2 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
|  -33.3% |    -1 | 13.6% → 13.3% |   3 → 2 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |

##### `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                                                        | Location    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | ----------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` | `<unknown>` |

##### `LinkResolver::linktime_resolve_virtual_method_or_null(LinkInfo const&)` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                                                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------- | ----------- |
|  -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `LinkResolver::linktime_resolve_virtual_method(LinkInfo const&, JavaThread*)` | `<unknown>` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `LinkResolver::resolve_method(LinkInfo const&, Bytecodes::Code, JavaThread*)` | `<unknown>` |

##### `CodeCacheUnloadingTask::work(unsigned int)` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                                                           | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ----------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `nmethod::do_unloading(bool)`                                    | `<unknown>` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `CodeCacheUnloadingTask::claim_nmethods(CompiledMethod**, int*)` | `<unknown>` |

##### `G1ParallelCleaningTask::work(unsigned int)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `CodeCacheUnloadingTask::work(unsigned int)` | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|  Change | Delta |              % | Samples | Callee                                    | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | ----------- |
|  -10.3% |    -4 | 97.5% → 100.0% | 39 → 35 | `Parse::do_one_block()`                   | `<unknown>` |
| removed |    -1 |    2.5% → 0.0% |   1 → 0 | `Parse::merge_common(Parse::Block*, int)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                        | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                                                                                                              | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` | `<unknown>` |

##### `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                   | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` | `<unknown>` |

##### `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                  | Location    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | ----------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` | `<unknown>` |

##### `invokeMethod(Class, Object, String, Object[], boolean, boolean)` (`org.codehaus.groovy.runtime.metaclass.ClosureMetaClass`)

| Change | Delta |           % |   Samples | Callee                             | Location                                      |
| -----: | ----: | ----------: | --------: | ---------------------------------- | --------------------------------------------- |
| -10.6% |   -13 |      100.0% | 123 → 110 | `doMethodInvoke(Object, Object[])` | `groovy.lang.MetaMethod`                      |
|    new |    +1 | 0.0% → 0.9% |     0 → 1 | `convertToTypeArray(Object[])`     | `org.codehaus.groovy.runtime.MetaClassHelper` |

##### `invokeMethod(Object, String, Object[])` (`groovy.lang.MetaClassImpl`)

| Change | Delta |           % |   Samples | Callee                                                            | Location                                                 |
| -----: | ----: | ----------: | --------: | ----------------------------------------------------------------- | -------------------------------------------------------- |
| -10.6% |   -13 |      100.0% | 123 → 110 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `org.codehaus.groovy.runtime.metaclass.ClosureMetaClass` |
| -12.5% |    -1 | 6.5% → 6.4% |     8 → 7 | `invokeMethod(Class, Object, String, Object[], boolean, boolean)` | `groovy.lang.MetaClassImpl`                              |

##### `guardWithCatch(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010abc00`)

| Change | Delta |             % |   Samples | Callee                                    | Location                          |
| -----: | ----: | ------------: | --------: | ----------------------------------------- | --------------------------------- |
|  -9.4% |   -13 |        100.0% | 139 → 126 | `invoke(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH`  |
|  -9.4% |    -9 | 69.1% → 69.0% |   96 → 87 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH` |

##### `guard(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac800`)

|  Change | Delta |             % |   Samples | Callee                             | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------- | --------------------------------------------------- |
|   -9.4% |   -13 |        100.0% | 139 → 126 | `reinvoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac400` |
|  -10.4% |   -10 | 69.1% → 68.3% |   96 → 86 | `delegate(Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `invoke(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$MH`                    |
|     new |    +1 |   0.0% → 0.8% |     0 → 1 | `invokeBasic(Object[])`            | `java.lang.invoke.MethodHandle`                     |

##### `call(Object[])` (`groovy.lang.Closure`)

| Change | Delta |      % |   Samples | Callee                                   | Location                    |
| -----: | ----: | -----: | --------: | ---------------------------------------- | --------------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `invokeMethod(Object, String, Object[])` | `groovy.lang.MetaClassImpl` |

##### `reinvoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f0010ac400`)

| Change | Delta |             % |   Samples | Callee                                   | Location                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------- | --------------------------------------------------- |
|  -9.4% |   -13 |        100.0% | 139 → 126 | `guardWithCatch(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f0010abc00` |
|  -9.4% |   -13 |        100.0% | 139 → 126 | `guard(Object, Object, Object)`          | `java.lang.invoke.LambdaForm$MH.0x000000f0010ac800` |
| -11.1% |    -7 | 45.3% → 44.4% |   63 → 56 | `invoke(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH`                    |

##### `invokeSpecial(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Callee           | Location                                                                    |
| -----: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------------------------------- |
|  -9.5% |    -9 | 76.6% → 77.5% | 95 → 86 | `doCall(Object)` | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
| -11.5% |    -6 | 41.9% → 41.4% | 52 → 46 | `doCall(Object)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
| -14.3% |    -2 | 11.3% → 10.8% | 14 → 12 | `doCall(Object)` | `org.codenarc.ruleset.XmlFileRuleSet$_closure1`                             |
| -13.3% |    -2 | 12.1% → 11.7% | 15 → 13 | `doCall(Object)` | `org.codenarc.CodeNarcRunner$_createInitialRuleSetFromFiles_closure6`       |
| -25.0% |    -2 |   6.5% → 5.4% |   8 → 6 | `doCall(Object)` | `org.codenarc.ruleset.XmlReaderRuleSet$_loadRuleElements_closure2`          |

##### `call(Object)` (`groovy.lang.Closure`)

| Change | Delta |      % |   Samples | Callee           | Location              |
| -----: | ----: | -----: | --------: | ---------------- | --------------------- |
| -10.6% |   -13 | 100.0% | 123 → 110 | `call(Object[])` | `groovy.lang.Closure` |

##### `invokeExact_MT(Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |           % |   Samples | Callee                          | Location                         |
| ------: | ----: | ----------: | --------: | ------------------------------- | -------------------------------- |
|   -8.6% |   -12 |      100.0% | 140 → 128 | `invoke(Object, Object)`        | `java.lang.invoke.LambdaForm$MH` |
| removed |    -2 | 1.4% → 0.0% |     2 → 0 | `checkCustomized(MethodHandle)` | `java.lang.invoke.Invokers`      |

##### `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % |   Samples | Callee                                                                                     | Location                                                         |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|   -8.6% |   -12 | 98.6% → 98.5% | 140 → 128 | `invokeExact_MT(Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                               |
|  -27.6% |    -8 | 20.4% → 16.2% |   29 → 21 | `doWithCallSite(MutableCallSite, Object[], BiFunction)`                                    | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                  |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `<init>(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface$FallbackSupplier` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +166.7% |    +5 | 0.5% → 1.3% |   3 → 8 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +66.7% |    +4 | 0.9% → 1.7% |  6 → 10 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +400.0% |    +4 | 0.2% → 0.8% |   1 → 5 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                       |
| +300.0% |    +3 | 0.2% → 0.7% |   1 → 4 | `IndexSetIterator::advance_and_next()` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +3 | 0.0% → 0.5% |   0 → 3 | `PhaseChaitin::stretch_base_pointer_live_ranges(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +28.6% |    +2 | 1.1% → 1.5% |   7 → 9 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `Matcher::find_shared(Node*)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                  |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseChaitin::Select()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +50.0% |    +2 | 0.6% → 1.0% |   4 → 6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +100.0% |    +2 | 0.3% → 0.7% |   2 → 4 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                              |
| +200.0% |    +2 | 0.2% → 0.5% |   1 → 3 | `PhaseIFG::SquareUp()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `LIR_OpVisitState::visit(LIR_Op*)` ← `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhiNode::Value(PhaseGVN*) const` ← `PhaseCCP::PhaseCCP(PhaseIterGVN*)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseCCP::push_child_nodes_to_worklist(Unique_Node_List&, Node*) const` ← `PhaseCCP::analyze()` ← `PhaseCCP::PhaseCCP(PhaseIterGVN*)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseOutput::shorten_branches(unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `NonSafepointEmitter::emit_non_safepoint()` ← `NonSafepointEmitter::observe_instruction(Node*, int)` ← `PhaseOutput::fill_buffer(CodeBuffer*, unsigned int*)` ← `PhaseOutput::Output()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                  |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal(Node*, Node*, Node*)` ← `PhaseIdealLoop::compute_lca_of_uses(Node*, Node*, bool)` ← `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` ← `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                               |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `tlv_get_addr` ← `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` ← `GraphBuilder::try_inline(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)` ← `GraphBuilder::invoke(Bytecodes::Code)` ← `GraphBuilder::iterate_bytecodes_for_block(int)` ← `GraphBuilder::iterate_all_blocks(bool)` ← `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` ← `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` ← `IR::IR(Compilation*, ciMethod*, int)` ← `Compilation::build_hir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `PhaseIdealLoop::build_loop_tree()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -40.0% |    -6 | 2.3% → 1.5% |  15 → 9 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -50.0% |    -4 | 1.2% → 0.7% |   8 → 4 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -80.0% |    -4 | 0.8% → 0.2% |   5 → 1 | `IndexSet::initialize(unsigned int)` ← `PhaseIFG::init(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -4 | 0.6% → 0.0% |   4 → 0 | `semaphore_wait_trap` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -60.0% |    -3 | 0.8% → 0.3% |   5 → 2 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `CompiledMethod::cleanup_inline_caches_impl(bool, bool)` ← `CompiledMethod::unload_nmethod_caches(bool)` ← `nmethod::do_unloading(bool)` ← `CodeCacheUnloadingTask::work(unsigned int)` ← `G1ParallelCleaningTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |    -3 | 0.5% → 0.0% |   3 → 0 | `PhaseCFG::insert_anti_dependences(Block*, Node*, bool)` ← `PhaseCFG::schedule_late(VectorSet&, Node_Stack&)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -75.0% |    -3 | 0.6% → 0.2% |   4 → 1 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                   |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()`                                                                                                                                         |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `CProjNode::is_CFG() const` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -50.0% |    -2 | 0.6% → 0.3% |   4 → 2 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges(LRG&, IndexSet*, unsigned int&)` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIFG::effective_degree(unsigned int) const` ← `PhaseIFG::Compute_Effective_Degree()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>(narrowOop*)` ← `G1ParScanThreadState::do_partial_array(PartialArrayScanTask)` ← `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` ← `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>(G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)&&)` ← `G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)` ← `G1ScanHRForRegionClosure::do_heap_region(HeapRegion*)` ← `G1RemSet::scan_heap_roots(G1ParScanThreadState*, unsigned int, G1GCPhaseTimes::GCParPhases, G1GCPhaseTimes::GCParPhases, bool)` ← `G1EvacuateRegionsTask::scan_roots(G1ParScanThreadState*, unsigned int)` ← `G1EvacuateRegionsBaseTask::work(unsigned int)` ← `WorkerThread::run()` |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_tree_impl(Node*, int)` ← `PhaseIdealLoop::build_loop_tree()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                         |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `LinearScan::build_intervals()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `TypeInt::singleton() const` ← `PhaseCCP::transform(Node*)` ← `PhaseCCP::do_transform()` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next()` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `_platform_memset` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
