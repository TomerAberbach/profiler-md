# Sampling profile diff

Collected 6,374 → 2,902 samples (-3,472 samples, -54.5%).

| Category         | Change |  Delta |             % |       Samples |
| ---------------- | -----: | -----: | ------------: | ------------: |
| Native           | -55.9% | -3,351 | 94.1% → 91.2% | 5,998 → 2,647 |
| Compiler         | -40.2% |   -107 |   4.2% → 5.5% |     266 → 159 |
| Standard library | -39.2% |    -38 |   1.5% → 2.0% |       97 → 59 |
| Unknown          |    new |    +32 |   0.0% → 1.1% |        0 → 32 |
| Ours             | -33.3% |     -2 |          0.1% |         6 → 4 |
| JIT              | -85.7% |     -6 |  0.1% → <0.1% |         7 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 5,321 → 2,392 samples (83.5% → 82.4%) thread_start at libsystem_pthread.dylib
│   └── 5,321 → 2,392 samples (83.5% → 82.4%) _pthread_start
│       ├── 5,109 → 2,295 samples (80.2% → 79.1%) thread_native_entry at libjvm.dylib
│       │   └── 5,109 → 2,295 samples (80.2% → 79.1%) Thread::call_run
│       │       ├── 2,159 → 965 samples (33.9% → 33.3%) WorkerThread::run
│       │       │   └── 2,143 → 959 samples (33.6% → 33.0%, self 37.0% → 36.5% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 1,895 → 856 samples (29.7% → 29.5%) JavaThread::thread_main_inner
│       │       │   ├── 841 → 382 samples (13.2%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── … 464 → 177 samples (7.3% → 6.1%, self 47.0% → 45.3% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │   └── 369 → 204 samples (5.8% → 7.0%) CompileBroker::invoke_compiler_on_method
│       │       │   │       ├── 320 → 172 samples (5.0% → 5.9%) C2Compiler::compile_method
│       │       │   │       │   └── 316 → 171 samples (5.0% → 5.9%) Compile::Compile
│       │       │   │       │       ├── 145 → 80 samples (2.3% → 2.8%) Compile::Code_Gen
│       │       │   │       │       │   ├── 77 → 45 samples (1.2% → 1.6%) PhaseChaitin::Register_Allocate
│       │       │   │       │       │   │   ├── 13 → 5 samples (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │       │       │   │   ├── … 4 → 0 samples (0.1% → 0.0%, self 1.1% → 0.2% globally) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   │       │       │   │   └── 60 → 40 samples (0.9% → 1.4%) 21 more callees, led by (0.2% → 0.4%) PhaseChaitin::Split
│       │       │   │       │       │   ├── … 4 → 1 sample (0.1% → <0.1%) Node_Backward_Iterator::next at libjvm.dylib
│       │       │   │       │       │   ├── … 5 → 0 samples (0.1% → 0.0%) Pipeline_Use::full_latency at libjvm.dylib
│       │       │   │       │       │   └── 30 → 16 samples (0.5% → 0.6%) 5 more callees, led by (0.4% → 0.5%) Matcher::match
│       │       │   │       │       ├── 121 → 68 samples (1.9% → 2.3%) Compile::Optimize
│       │       │   │       │       │   ├── … 36 → 18 samples (0.6%) PhaseIdealLoop::build_and_optimize at libjvm.dylib
│       │       │   │       │       │   │   └── 10 → 4 samples (0.2% → 0.1%) PhaseIdealLoop::build_loop_late
│       │       │   │       │       │   │       └── 8 → 3 samples (0.1%) PhaseIdealLoop::build_loop_late_post_work
│       │       │   │       │       │   └── 81 → 48 samples (1.3% → 1.7%) 12 more callees, led by (0.5% → 0.7%) PhaseIdealLoop::optimize
│       │       │   │       │       └── 50 → 23 samples (0.8%) 9 more callees, led by (0.6%) ParseGenerator::generate
│       │       │   │       └── 49 → 32 samples (0.8% → 1.1%) 3 more callees, led by (0.7% → 1.1%) Compiler::compile_method
│       │       │   └── 1,054 → 474 samples (16.5% → 16.3%) 5 more callees, led by (3.3%) signal_thread_entry
│       │       ├── 633 → 282 samples (9.9% → 9.7%) ConcurrentGCThread::run
│       │       │   └── 633 → 282 samples (9.9% → 9.7%) 3 more callees, led by (3.3%) G1ConcurrentMarkThread::run_service
│       │       └── 422 → 192 samples (6.6%) 2 more callees, led by (3.3%) VMThread::run
│       └── … 211 → 96 samples (3.3%) __ulock_wait at libsystem_kernel.dylib
├── … 211 → 96 samples (3.3%) mach_msg2_trap at libsystem_kernel.dylib
├── … 194 → 89 samples (3.0% → 3.1%) invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001088800
│   ├── … 55 → 32 samples (0.9% → 1.1%) selectMethod(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
│   │   └── 44 → 23 samples (0.7% → 0.8%) fallback(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])
│   │       └── … 16 → 7 samples (0.3% → 0.2%) java_lang_Throwable::fill_in_stack_trace at libjvm.dylib
│   └── 137 → 57 samples (2.1% → 2.0%) 2 more callees, led by (2.1% → 2.0%) fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[]) at org.codehaus.groovy.vmplugin.v8.IndyInterface
├── 0 → 32 samples (0.0% → 1.1%) (anonymous)
└── 640 → 290 samples (10.0%) 6 more root frames, led by (3.3%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                                     | Location                                     |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|     new |   +32 |  0.0% → 1.1% |  0 → 32 | `(anonymous)`                                                                                                                | `<unknown>`                                  |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseIdealLoop::Dominators`                                                                                                 | `libjvm.dylib`                               |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `MultiNode::is_CFG`                                                                                                          | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_tree`                                                                                            | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::subsume_node`                                                                                                 | `libjvm.dylib`                               |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `DebugInformationRecorder::describe_scope`                                                                                   | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `invokeVirtual(Object, Object)`                                                                                              | `java.lang.invoke.DirectMethodHandle$Holder` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `CollectedHeap::array_allocate`                                                                                              | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `NodeHash::hash_find_insert`                                                                                                 | `libjvm.dylib`                               |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `MergeMemNode::Ideal`                                                                                                        | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::pd_clone_node`                                                                                                     | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `IfFalseNode::Opcode`                                                                                                        | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `forceInterpretation()`                                                                                                      | `java.lang.invoke.LambdaForm`                |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegMask::is_UP`                                                                                                             | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::get_ctrl_no_update`                                                                                         | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `BlockListBuilder::set_leaders`                                                                                              | `libjvm.dylib`                               |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseCFG::schedule_early`                                                                                                   | `libjvm.dylib`                               |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIdealLoop::split_if_with_blocks`                                                                                       | `libjvm.dylib`                               |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `Matcher::Label_Root`                                                                                                        | `libjvm.dylib`                               |

##### Native

| Change | Delta |            % | Samples | Function                                                                                                                     | Location                  |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
|    new |    +2 |  0.0% → 0.1% |   0 → 2 | `CollectedHeap::array_allocate`                                                                                              | `libjvm.dylib`            |
|    new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Parse::do_one_bytecode`                                                                                                     | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `SymbolTable::lookup_only`                                                                                                   | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries`                                                                               | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassFileParser::parse_constant_pool`                                                                                       | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `SystemDictionary::find_method_handle_type`                                                                                  | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `SymbolTable::new_symbol`                                                                                                    | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Optimizer::eliminate_null_checks`                                                                                           | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                 | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `IdealLoopTree::record_for_igvn`                                                                                             | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `pthread_mutex_lock`                                                                                                         | `libsystem_pthread.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `State::_sub_Op_AndL`                                                                                                        | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `MachOper::reg`                                                                                                              | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `JVM_GetClassAccessFlags`                                                                                                    | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `pthread_mutex_unlock`                                                                                                       | `libsystem_pthread.dylib` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `jbyte_disjoint_arraycopy`                                                                                                   | `<unknown>`               |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `PackedTableLookup::search`                                                                                                  | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `Rewriter::scan_method`                                                                                                      | `libjvm.dylib`            |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `small_free_list_add_ptr`                                                                                                    | `libsystem_malloc.dylib`  |

##### Compiler

|  Change | Delta |            % | Samples | Function                                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `MultiNode::is_CFG`                        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_tree`          | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIterGVN::subsume_node`               | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `NodeHash::hash_find_insert`               | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `MergeMemNode::Ideal`                      | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::pd_clone_node`                   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `IfFalseNode::Opcode`                      | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegMask::is_UP`                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::get_ctrl_no_update`       | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `BlockListBuilder::set_leaders`            | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseCFG::schedule_early`                 | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIdealLoop::split_if_with_blocks`     | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `Matcher::Label_Root`                      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `TypeOopPtr::make_from_klass_common`       | `libjvm.dylib` |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIterGVN::add_users_to_worklist`      | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseChaitin::split_USE`                  | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `RegionNode::Ideal`                        | `libjvm.dylib` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `Compile::final_graph_reshaping_walk`      | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                  | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `invokeVirtual(Object, Object)`                                                           | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `forceInterpretation()`                                                                   | `java.lang.invoke.LambdaForm`                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `forEachRemaining(Consumer)`                                                              | `java.util.Spliterators$ArraySpliterator`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `findLoadedModule(String)`                                                                | `jdk.internal.loader.BuiltinClassLoader`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                              | `java.lang.invoke.BootstrapMethodInvoker`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `getAndPut(String, MemoizeCache$ValueProvider)`                                           | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `doMethodInvoke(Object, Object[])`                                                        | `org.codehaus.groovy.runtime.dgm$207`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `maybeCustomize(MethodHandle)`                                                            | `java.lang.invoke.Invokers`                          |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `checkCustomized(MethodHandle)`                                                           | `java.lang.invoke.Invokers`                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000700109a400`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invokeStatic(Object, Object, Object)`                                                    | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `computeIfAbsent(Object, Function)`                                                       | `java.util.concurrent.ConcurrentHashMap`             |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `invokeStatic(Object, Object, int)`                                                       | `java.lang.invoke.LambdaForm$DMH.0x000000700102b400` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `make(MethodType, LambdaForm, Object, Object)`                                            | `java.lang.invoke.BoundMethodHandle$Species_LL`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `catchException(MethodHandle, Class, MethodHandle)`                                       | `java.lang.invoke.MethodHandles`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `newArray(Class, int)`                                                                    | `java.lang.reflect.Array`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `collector(Object, Object)`                                                               | `java.lang.invoke.LambdaForm$MH.0x0000007001031800`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `invoke(Object, Object)`                                                                  | `java.lang.invoke.LambdaForm$MH.0x000000700102ac00`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `bindTo(Object)`                                                                          | `java.lang.invoke.MethodHandle`                      |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|    new |   +32 | 0.0% → 1.1% |  0 → 32 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |  Delta |             % |       Samples | Function                                    | Location                         |
| ------: | -----: | ------------: | ------------: | ------------------------------------------- | -------------------------------- |
|  -56.1% | -1,679 | 47.0% → 45.3% | 2,994 → 1,315 | `__psynch_cvwait`                           | `libsystem_kernel.dylib`         |
|  -55.2% | -1,302 | 37.0% → 36.5% | 2,360 → 1,058 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib`         |
|  -54.5% |   -115 |          3.3% |      211 → 96 | `__ulock_wait`                              | `libsystem_kernel.dylib`         |
|  -54.5% |   -115 |          3.3% |      211 → 96 | `mach_msg2_trap`                            | `libsystem_kernel.dylib`         |
|  -93.1% |    -67 |   1.1% → 0.2% |        72 → 5 | `__psynch_mutexwait`                        | `libsystem_kernel.dylib`         |
|  -85.7% |     -6 |  0.1% → <0.1% |         7 → 1 | `InstanceKlass::find_method_index`          | `libjvm.dylib`                   |
| removed |     -5 |   0.1% → 0.0% |         5 → 0 | `Pipeline_Use::full_latency`                | `libjvm.dylib`                   |
|  -83.3% |     -5 |  0.1% → <0.1% |         6 → 1 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib`        |
|  -83.3% |     -5 |  0.1% → <0.1% |         6 → 1 | `java_lang_Throwable::fill_in_stack_trace`  | `libjvm.dylib`                   |
|  -66.7% |     -4 |          0.1% |         6 → 2 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib`                   |
|  -80.0% |     -4 |  0.1% → <0.1% |         5 → 1 | `Node_Backward_Iterator::next`              | `libjvm.dylib`                   |
|  -66.7% |     -4 |          0.1% |         6 → 2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                   |
|  -80.0% |     -4 |  0.1% → <0.1% |         5 → 1 | `sys_icache_invalidate`                     | `libsystem_platform.dylib`       |
| removed |     -4 |   0.1% → 0.0% |         4 → 0 | `I2C/C2I adapters`                          | `<unknown>`                      |
| removed |     -4 |   0.1% → 0.0% |         4 → 0 | `_platform_memset`                          | `libsystem_platform.dylib`       |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib`                   |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `Compile::identify_useful_nodes`            | `libjvm.dylib`                   |
|  -60.0% |     -3 |          0.1% |         5 → 2 | `invoke(Object, Object)`                    | `java.lang.invoke.LambdaForm$MH` |
| removed |     -3 |  <0.1% → 0.0% |         3 → 0 | `invoke(Object, Object, Object)`            | `java.lang.invoke.LambdaForm$MH` |
|  -18.2% |     -2 |   0.2% → 0.3% |        11 → 9 | `PhaseChaitin::Split`                       | `libjvm.dylib`                   |

##### Native

|  Change |  Delta |             % |       Samples | Function                                   | Location                   |
| ------: | -----: | ------------: | ------------: | ------------------------------------------ | -------------------------- |
|  -56.1% | -1,679 | 47.0% → 45.3% | 2,994 → 1,315 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`   |
|  -55.2% | -1,302 | 37.0% → 36.5% | 2,360 → 1,058 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`   |
|  -54.5% |   -115 |          3.3% |      211 → 96 | `__ulock_wait`                             | `libsystem_kernel.dylib`   |
|  -54.5% |   -115 |          3.3% |      211 → 96 | `mach_msg2_trap`                           | `libsystem_kernel.dylib`   |
|  -93.1% |    -67 |   1.1% → 0.2% |        72 → 5 | `__psynch_mutexwait`                       | `libsystem_kernel.dylib`   |
|  -85.7% |     -6 |  0.1% → <0.1% |         7 → 1 | `InstanceKlass::find_method_index`         | `libjvm.dylib`             |
| removed |     -5 |   0.1% → 0.0% |         5 → 0 | `Pipeline_Use::full_latency`               | `libjvm.dylib`             |
|  -83.3% |     -5 |  0.1% → <0.1% |         6 → 1 | `pthread_jit_write_protect_np`             | `libsystem_pthread.dylib`  |
|  -83.3% |     -5 |  0.1% → <0.1% |         6 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib`             |
|  -80.0% |     -4 |  0.1% → <0.1% |         5 → 1 | `sys_icache_invalidate`                    | `libsystem_platform.dylib` |
| removed |     -4 |   0.1% → 0.0% |         4 → 0 | `_platform_memset`                         | `libsystem_platform.dylib` |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `swtch_pri`                                | `libsystem_kernel.dylib`   |
|  -66.7% |     -2 |         <0.1% |         3 → 1 | `_platform_bzero`                          | `libsystem_platform.dylib` |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `__mmap`                                   | `libsystem_kernel.dylib`   |
|  -66.7% |     -2 |         <0.1% |         3 → 1 | `frame::sender_for_compiled_frame`         | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `BacktraceBuilder::push`                   | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `SymbolTable::lookup_shared`               | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `SharedRuntime::find_callee_info_helper`   | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `vmSymbols::find_sid`                      | `libjvm.dylib`             |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `Parse::init_blocks`                       | `libjvm.dylib`             |

##### Compiler

|  Change | Delta |            % | Samples | Function                                    | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
|  -66.7% |    -4 |         0.1% |   6 → 2 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
|  -80.0% |    -4 | 0.1% → <0.1% |   5 → 1 | `Node_Backward_Iterator::next`              | `libjvm.dylib` |
|  -66.7% |    -4 |         0.1% |   6 → 2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|  -60.0% |    -3 |         0.1% |   5 → 2 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
|  -60.0% |    -3 |         0.1% |   5 → 2 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
|  -18.2% |    -2 |  0.2% → 0.3% |  11 → 9 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::latency`                             | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::partial_latency_of_defs`         | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Node::pinned`                              | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
|  -50.0% |    -2 |         0.1% |   4 → 2 | `PhaseIterGVN::transform_old`               | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::schedule_local`                  | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Unique_Node_List::remove_useless_nodes`    | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `StorePNode::Opcode`                        | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `ProjNode::Opcode`                          | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::schedule_pinned_nodes`           | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Matcher::find_shared`                      | `libjvm.dylib` |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `Type::cmp`                                 | `libjvm.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `CallStaticJavaNode::Opcode`                | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                    | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -60.0% |    -3 |         0.1% |   5 → 2 | `invoke(Object, Object)`                                                                    | `java.lang.invoke.LambdaForm$MH`                     |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH`                     |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `forEachWithCancel(Spliterator, Sink)`                                                      | `java.util.stream.ReferencePipeline`                 |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `asCollectorType(Class, int, int)`                                                          | `java.lang.invoke.MethodType`                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `equals(Object, Object)`                                                                    | `java.util.Objects`                                  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)`                                  | `org.codehaus.groovy.vmplugin.v9.Java9`              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `cast(Object)`                                                                              | `java.lang.Class`                                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getZipEntry(String, int)`                                                                  | `java.util.zip.ZipFile`                              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Object, Object)`                                                                    | `groovy.lang.Closure`                                |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `get(Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isResolved()`                                                                              | `java.lang.invoke.MemberName`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hashCode()`                                                                                | `java.lang.invoke.MemberName`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `populateMethods(List, CachedClass)`                                                        | `groovy.lang.MetaClassImpl`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800`  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(Charset, byte[], int, int)`                                                         | `java.lang.String`                                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `replaceParameterTypes(int, int, Class[])`                                                  | `java.lang.invoke.MethodType`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `asSpreader(int, Class, int)`                                                               | `java.lang.invoke.MethodHandle`                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `guardWithCatch(Object, Object)`                                                            | `java.lang.invoke.LambdaForm$MH.0x00000070010ca400`  |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `forceInterpretation()` (`java.lang.invoke.LambdaForm`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.invoke.LambdaForm:923` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Spliterators$ArraySpliterator:1024` |

##### `findLoadedModule(String)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.loader.BuiltinClassLoader:710` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.BootstrapMethodInvoker:61` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change | Delta |             % | Samples | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite:74` |

##### `maybeCustomize(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.Invokers:633` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.Invokers:627` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `java.lang.invoke.Invokers:623` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `java.lang.invoke.Invokers:626` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.codehaus.groovy.vmplugin.v8.IndyInterface:230` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1739` |

##### `catchException(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandles`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandles:6407` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandle:1618` |

##### `forEachWithCancel(Spliterator, Sink)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.ReferencePipeline:129` |

##### `asCollectorType(Class, int, int)` (`java.lang.invoke.MethodType`)

|  Change | Delta |            % | Samples | Location                          |
| ------: | ----: | -----------: | ------: | --------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodType:647` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodType:654` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location               |
| -----: | ----: | -----: | ------: | ---------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java.util.Objects:64` |

##### `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)` (`org.codehaus.groovy.vmplugin.v9.Java9`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.codehaus.groovy.vmplugin.v9.Java9:252` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.lang.Class:4068` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.zip.ZipFile:703` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `groovy.lang.Closure:215` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:936` |

##### `isResolved()` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MemberName:798` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MemberName:723` |

##### `populateMethods(List, CachedClass)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % | Samples | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `groovy.lang.MetaClassImpl:413` |

##### `<init>(Charset, byte[], int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:531` |

##### `replaceParameterTypes(int, int, Class[])` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodType:568` |

##### `asSpreader(int, Class, int)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandle:1112` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `RegionNode::is_unreachable_region`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::subsume_node` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `DebugInformationRecorder::describe_scope` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `NonSafepointEmitter::emit_non_safepoint`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `PhaseOutput::Process_OopMap_Node`               | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |

##### `invokeVirtual(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller           | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invoke(Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001089400` |

##### `CollectedHeap::array_allocate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `java_lang_Class::allocate_mirror` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `BacktraceBuilder::push`           | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseValues::uncached_makecon` | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Matcher::pd_clone_node` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::find_shared` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::match`       | `libjvm.dylib` |

##### `IfFalseNode::Opcode` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCCP::transform`         | `libjvm.dylib` |

##### `forceInterpretation()` (`java.lang.invoke.LambdaForm`)

| Change | Delta |             % | Samples | Caller      | Location                      |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `prepare()` | `java.lang.invoke.LambdaForm` |

##### `RegMask::is_UP` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::raise_pressure`     | `libjvm.dylib` |

##### `PhaseIdealLoop::get_ctrl_no_update` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::get_ctrl` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `BlockListBuilder::set_leaders` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `PhaseCFG::schedule_early` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::Label_Root` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::match_tree` | `libjvm.dylib` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Parse::do_one_block` | `libjvm.dylib` |

##### `SymbolTable::lookup_only` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                         | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `SystemDictionary::find_method_handle_type` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `BootstrapInfo::resolve_bsm` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |

##### `Optimizer::eliminate_null_checks` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `IR::eliminate_null_checks` | `libjvm.dylib` |

##### `GlobalValueNumbering::GlobalValueNumbering` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compilation::build_hir` | `libjvm.dylib` |

##### `IdealLoopTree::record_for_igvn` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIdealLoop::do_peeling` | `libjvm.dylib` |

##### `pthread_mutex_lock` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ThreadCritical::ThreadCritical` | `libjvm.dylib` |

##### `State::_sub_Op_AndL` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller       | Location       |
| -----: | ----: | ------------: | ------: | ------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `State::DFA` | `libjvm.dylib` |

##### `MachOper::reg` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `storePNode::emit` | `libjvm.dylib` |

##### `JVM_GetClassAccessFlags` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location    |
| -----: | ----: | ------------: | ------: | ------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `break_stack_range` | `<unknown>` |

##### `pthread_mutex_unlock` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PlatformMonitor::PlatformMonitor` | `libjvm.dylib` |

##### `jbyte_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                        | Location           |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getBytes(byte[], int, byte)` | `java.lang.String` |

##### `PackedTableLookup::search` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `FieldInfoReader::search_table_lookup` | `libjvm.dylib` |

##### `Rewriter::scan_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Rewriter::rewrite_bytecodes` | `libjvm.dylib` |

##### `small_free_list_add_ptr` (`libsystem_malloc.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location                 |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `small_malloc_from_free_list` | `libsystem_malloc.dylib` |

##### `TypeOopPtr::make_from_klass_common` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `TypeTuple::make_domain` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseMacroExpand::expand_unlock_node`        | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old`                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::clone_loop_handle_data_uses` | `libjvm.dylib` |

##### `PhaseChaitin::split_USE` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Split` | `libjvm.dylib` |

##### `RegionNode::Ideal` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `Compile::final_graph_reshaping_walk` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Compile::final_graph_reshaping` | `libjvm.dylib` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `findLoadedModule(String)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change | Delta |             % | Samples | Caller                             | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change | Delta |             % | Samples | Caller                                                      | Location                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `getAndPut(String, MemoizeCache$ValueProvider)` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

| Change | Delta |             % | Samples | Caller                                                                          | Location                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$fromCache$2(IndyInterface$FallbackSupplier, CacheableCallSite, Object)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `doMethodInvoke(Object, Object[])` (`org.codehaus.groovy.runtime.dgm$207`)

| Change | Delta |             % | Samples | Caller                                          | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeVirtual(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |

##### `maybeCustomize(MethodHandle)` (`java.lang.invoke.Invokers`)

| Change | Delta |             % | Samples | Caller                          | Location                    |
| -----: | ----: | ------------: | ------: | ------------------------------- | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkCustomized(MethodHandle)` | `java.lang.invoke.Invokers` |

##### `checkCustomized(MethodHandle)` (`java.lang.invoke.Invokers`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                         | `java.lang.invoke.LambdaForm$MH.0x000000700109a400` |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `invokeExact_MT(Object, Object)`                 | `java.lang.invoke.Invokers$Holder`                  |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700109a400`)

| Change | Delta |             % | Samples | Caller                  | Location                                            |
| -----: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `guard(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109a000` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |             % | Samples | Caller                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `realBootstrap(MethodHandles$Lookup, String, int, MethodType, boolean, boolean, boolean)` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

| Change | Delta |             % | Samples | Caller                                                             | Location                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `bootstrap(MethodHandles$Lookup, String, MethodType, String, int)` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                | Location                            |
| -----: | ----: | ------------: | ------: | --------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findSpecies(Object)` | `java.lang.invoke.ClassSpecializer` |

##### `invokeStatic(Object, Object, int)` (`java.lang.invoke.LambdaForm$DMH.0x000000700102b400`)

|  Change | Delta |      % | Samples | Caller                | Location                                            |
| ------: | ----: | -----: | ------: | --------------------- | --------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `invoke(Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |

##### `make(MethodType, LambdaForm, Object, Object)` (`java.lang.invoke.BoundMethodHandle$Species_LL`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `catchException(MethodHandle, Class, MethodHandle)` (`java.lang.invoke.MethodHandles`)

| Change | Delta |             % | Samples | Caller                  | Location                                                  |
| -----: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addExceptionHandler()` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |             % | Samples | Caller                    | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `collector(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001031800`)

| Change | Delta |             % | Samples | Caller                   | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700109b800` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700102ac00`)

| Change | Delta |             % | Samples | Caller                | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |             % | Samples | Caller              | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |       Samples | Caller                  | Location                 |
| -----: | -----: | ------------: | ------------: | ----------------------- | ------------------------ |
| -56.5% | -1,334 | 78.9% → 78.2% | 2,362 → 1,028 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| -54.5% |   -115 |   7.0% → 7.3% |      211 → 96 | `PlatformEvent::park`   | `libjvm.dylib`           |
| -54.8% |   -115 |   7.0% → 7.2% |      210 → 95 | `Parker::park`          | `libjvm.dylib`           |
| -54.5% |   -115 |   7.0% → 7.3% |      211 → 96 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |     Samples | Caller                           | Location       |
| -----: | -----: | ------------: | ----------: | -------------------------------- | -------------- |
| -55.2% | -1,184 | 90.8% → 90.6% | 2,143 → 959 | `WorkerThread::run`              | `libjvm.dylib` |
| -54.5% |   -115 |   8.9% → 9.1% |    211 → 96 | `os::signal_wait`                | `libjvm.dylib` |
| -50.0% |     -2 |          0.2% |       4 → 2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
| -50.0% |     -1 |          0.1% |       2 → 1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                    | Location       |
| -----: | ----: | -----: | -------: | ------------------------- | -------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller               | Location                 |
| -----: | ----: | -----: | -------: | -------------------- | ------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -93.1% |   -67 | 100.0% |  72 → 5 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
|  -83.3% |    -5 | 85.7% → 100.0% |   6 → 1 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -1 |   14.3% → 0.0% |   1 → 0 | `LinkResolver::resolve_method`          | `libjvm.dylib` |

##### `Pipeline_Use::full_latency` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `Scheduling::AddNodeToBundle` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |              % | Samples | Caller                                      | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `SharedRuntime::resolve_opt_virtual_call_C` | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `JVM_Clone`                                 | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `JVM_GetClassConstantPool`                  | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `InterpreterRuntime::ldc`                   | `libjvm.dylib` |
|  -50.0% |    -1 | 33.3% → 100.0% |   2 → 1 | `JVM_NewArray`                              | `libjvm.dylib` |

##### `java_lang_Throwable::fill_in_stack_trace` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                         | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------- |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -60.0% |    -3 | 83.3% → 100.0% |   5 → 2 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -4 |  80.0% → 0.0% |   4 → 0 | `nmethod::oops_do_process_weak`  | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `CompiledIC::set_to_megamorphic` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `CompiledIC::set_to_monomorphic` | `libjvm.dylib` |

##### `I2C/C2I adapters` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                   | Location                                               |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `copyFields(Field[])`                                    | `java.lang.Class`                                      |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `addDFAState(DFA, ATNConfigSet, PredictionContextCache)` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`                                 | `java.lang.invoke.LambdaForm$MH`                       |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `MemAllocator::allocate`             | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Method::print_short_name`           | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate`    | `libjvm.dylib` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::compute_early_ctrl` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  -33.3% |    -1 | 60.0% → 100.0% |   3 → 2 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |

##### `invoke(Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |              % | Samples | Caller                                   | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------- | --------------------------------------------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `invokeExact_MT(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `reinvoke(Object, Object)`               | `java.lang.invoke.LambdaForm$MH.0x0000007001099c00` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Caller                                           | Location                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `GlobalCounter::write_synchronize` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `Matcher::xform`                  | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `Matcher::Label_Root`             | `libjvm.dylib` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_thru_phi`  | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `__mmap` (`libsystem_kernel.dylib`)

|  Change | Delta |            % | Samples | Caller                   | Location       |
| ------: | ----: | -----------: | ------: | ------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `os::pd_commit_memory`   | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `frame::sender_for_compiled_frame` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `BacktraceBuilder::push` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                     | Location       |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `SharedRuntime::find_callee_info_helper` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                              | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `SharedRuntime::find_callee_method` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `Parse::init_blocks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Parse::Parse` | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node::pinned` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Unique_Node_List::remove_useless_nodes` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compile::Compile`                       | `libjvm.dylib` |

##### `StorePNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Matcher::find_shared`                 | `libjvm.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `IdealLoopTree::policy_range_check`    | `libjvm.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller           | Location       |
| ------: | ----: | ------------: | ------: | ---------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Matcher::match` | `libjvm.dylib` |

##### `Type::cmp` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller         | Location       |
| -----: | ----: | -----: | ------: | -------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Dict::Insert` | `libjvm.dylib` |

##### `CallStaticJavaNode::Opcode` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                      | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Compile::final_graph_reshaping_impl`       | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `forEachWithCancel(Spliterator, Sink)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % | Samples | Caller                                  | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `copyIntoWithCancel(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001088800`)

|  Change | Delta |            % | Samples | Caller                           | Location                                            |
| ------: | ----: | -----------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x000000700108e000` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `asCollectorType(Class, int, int)` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Caller                         | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------------ | ------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `asCollector(int, Class, int)` | `java.lang.invoke.MethodHandle` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|  Change | Delta |             % | Samples | Caller                           | Location                                            |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070010a1800` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller           | Location                               |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `equals(Object)` | `jdk.internal.util.StrongReferenceKey` |

##### `getOrTransformMetaMethod(MetaClass, Class, CachedMethod)` (`org.codehaus.groovy.vmplugin.v9.Java9`)

|  Change | Delta |             % | Samples | Caller                                              | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `transformMetaMethod(MetaClass, MetaMethod, Class)` | `org.codehaus.groovy.vmplugin.v9.Java9` |

##### `cast(Object)` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|  Change | Delta |             % | Samples | Caller             | Location                |
| ------: | ----: | ------------: | ------: | ------------------ | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getEntry(String)` | `java.util.zip.ZipFile` |

##### `<init>(Object, Object)` (`groovy.lang.Closure`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Object, Object, Reference)` | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure3$_closure7` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                     | Location                                 |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findLoadedModule(String)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `isResolved()` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Caller                                               | Location                              |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `resolveOrFail(byte, MemberName, Class, int, Class)` | `java.lang.invoke.MemberName$Factory` |

##### `hashCode()` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Caller        | Location                                 |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `populateMethods(List, CachedClass)` (`groovy.lang.MetaClassImpl`)

|  Change | Delta |             % | Samples | Caller              | Location                    |
| ------: | ----: | ------------: | ------: | ------------------- | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fillMethodIndex()` | `groovy.lang.MetaClassImpl` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1800`)

|  Change | Delta |             % | Samples | Caller                                   | Location                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkToCallSite(Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `<init>(Charset, byte[], int, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                    | Location           |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(byte[], Charset)` | `java.lang.String` |

##### `replaceParameterTypes(int, int, Class[])` (`java.lang.invoke.MethodType`)

|  Change | Delta |             % | Samples | Caller                        | Location                        |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `asSpreader(int, Class, int)` | `java.lang.invoke.MethodHandle` |

##### `asSpreader(int, Class, int)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |             % | Samples | Caller                   | Location                        |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `asSpreader(Class, int)` | `java.lang.invoke.MethodHandle` |

##### `guardWithCatch(Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010ca400`)

|  Change | Delta |             % | Samples | Caller                     | Location                                         |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `delegate(Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location                                            |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|     new |   +32 |  0.0% → 1.1% |  0 → 32 | `(anonymous)`                                                                                                                                                   | `<unknown>`                                         |
| +130.0% |   +13 |  0.2% → 0.8% | 10 → 23 | `invoke(Object, Object, Object)`                                                                                                                                | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib`                                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib`                                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib`                                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib`                                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib`                                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib`                                      |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib`                                      |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Parse::do_one_bytecode`                                                                                                                                        | `libjvm.dylib`                                      |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `ClassFileParser::parse_constant_pool`                                                                                                                          | `libjvm.dylib`                                      |
| +150.0% |    +3 | <0.1% → 0.2% |   2 → 5 | `LIRGenerator::block_do`                                                                                                                                        | `libjvm.dylib`                                      |
| +150.0% |    +3 | <0.1% → 0.2% |   2 → 5 | `BlockList::iterate_forward`                                                                                                                                    | `libjvm.dylib`                                      |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                                                    | `libjvm.dylib`                                      |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib`                                      |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `NodeHash::hash_find_insert`                                                                                                                                    | `libjvm.dylib`                                      |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `MultiNode::is_CFG`                                                                                                                                             | `libjvm.dylib`                                      |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `NonSafepointEmitter::emit_non_safepoint`                                                                                                                       | `libjvm.dylib`                                      |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `NonSafepointEmitter::observe_instruction`                                                                                                                      | `libjvm.dylib`                                      |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `reinvoke(Object, Object, int)`                                                                                                                                 | `java.lang.invoke.LambdaForm$MH.0x00000070010d1400` |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                               | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ScanHRForRegionClosure::scan_memregion`                                                                                                                      | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ScanHRForRegionClosure::scan_heap_roots`                                                                                                                     | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1ScanHRForRegionClosure::do_heap_region`                                                                                                                      | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1RemSet::scan_heap_roots`                                                                                                                                     | `libjvm.dylib` |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `G1EvacuateRegionsTask::scan_roots`                                                                                                                             | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `Parse::do_one_bytecode`                                                                                                                                        | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `ClassFileParser::parse_constant_pool`                                                                                                                          | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                                                    | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                                                                 | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `NonSafepointEmitter::emit_non_safepoint`                                                                                                                       | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `NonSafepointEmitter::observe_instruction`                                                                                                                      | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `ClassFileParser::parse_constant_pool_entries`                                                                                                                  | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `MethodData::allocate`                                                                                                                                          | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Method::build_profiling_method_data`                                                                                                                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Rewriter::scan_method`                                                                                                                                         | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `InstanceKlass::allocate_objArray`                                                                                                                              | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `frame::sender_for_interpreter_frame`                                                                                                                           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                                    | `libjvm.dylib` |

##### Compiler

|  Change | Delta |            % | Samples | Function                             | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
| +150.0% |    +3 | <0.1% → 0.2% |   2 → 5 | `LIRGenerator::block_do`             | `libjvm.dylib` |
| +150.0% |    +3 | <0.1% → 0.2% |   2 → 5 | `BlockList::iterate_forward`         | `libjvm.dylib` |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `NodeHash::hash_find_insert`         | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `MultiNode::is_CFG`                  | `libjvm.dylib` |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `ciMethod::ensure_method_data`       | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseIdealLoop::build_loop_tree`    | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `IntervalWalker::walk_to`            | `libjvm.dylib` |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `PhaseChaitin::Simplify`             | `libjvm.dylib` |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `MergeMemNode::Ideal`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `ciMethod::get_method_at_bci`        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::pd_clone_node`             | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseValues::uncached_makecon`      | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseCFG::implicit_null_check`      | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `IfFalseNode::Opcode`                | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `RegMask::is_UP`                     | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::get_ctrl_no_update` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseIdealLoop::get_ctrl`           | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `BlockBegin::state_values_do`        | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `BlockListBuilder::set_leaders`      | `libjvm.dylib` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                  | Location                                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| +130.0% |   +13 |  0.2% → 0.8% | 10 → 23 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x00000070010c7800`                  |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `reinvoke(Object, Object, int)`                                           | `java.lang.invoke.LambdaForm$MH.0x00000070010d1400`                  |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `getDeclaredMethods0(boolean)`                                            | `java.lang.Class`                                                    |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `privateGetDeclaredMethods(boolean)`                                      | `java.lang.Class`                                                    |
|  +50.0% |    +2 |  0.1% → 0.2% |   4 → 6 | `collector(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`                  |
|  +50.0% |    +2 |  0.1% → 0.2% |   4 → 6 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl`                                  |
|  +50.0% |    +2 |  0.1% → 0.2% |   4 → 6 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)`         | `java.lang.invoke.MethodHandleImpl`                                  |
|  +50.0% |    +2 |  0.1% → 0.2% |   4 → 6 | `makePairwiseConvert(MethodHandle, MethodType, boolean)`                  | `java.lang.invoke.MethodHandleImpl`                                  |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `invoke(Object, Object, int)`                                             | `java.lang.invoke.LambdaForm$MH`                                     |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `guard(Object, Object, int)`                                              | `java.lang.invoke.LambdaForm$MH.0x00000070010d1800`                  |
| +100.0% |    +2 | <0.1% → 0.1% |   2 → 4 | `linkToCallSite(Object, int, Object)`                                     | `java.lang.invoke.Invokers$Holder`                                   |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `bindTo(Object)`                                                          | `java.lang.invoke.MethodHandle`                                      |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `invokeStatic(Object, Object, Object, Object, Object, Object)`            | `java.lang.invoke.DirectMethodHandle$Holder`                         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `generateInnerClass()`                                                    | `java.lang.invoke.InnerClassLambdaMetafactory`                       |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `spinInnerClass()`                                                        | `java.lang.invoke.InnerClassLambdaMetafactory`                       |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `castToType(Object, Class)`                                               | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `invokeStatic(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$DMH.0x0000007001028000`                 |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `guardWithTest(MethodHandle, MethodHandle)`                               | `java.lang.invoke.SwitchPoint`                                       |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `forceInterpretation()`                                                   | `java.lang.invoke.LambdaForm`                                        |
|  +50.0% |    +1 | <0.1% → 0.1% |   2 → 3 | `getTargetPropertyInfo()`                                                 | `java.beans.Introspector`                                            |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
|    new |   +32 | 0.0% → 1.1% |  0 → 32 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change |  Delta |             % |       Samples | Function                                   | Location                  |
| -----: | -----: | ------------: | ------------: | ------------------------------------------ | ------------------------- |
| -55.0% | -2,929 | 83.5% → 82.4% | 5,321 → 2,392 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| -55.0% | -2,929 | 83.5% → 82.4% | 5,321 → 2,392 | `thread_start`                             | `libsystem_pthread.dylib` |
| -55.1% | -2,814 | 80.2% → 79.1% | 5,109 → 2,295 | `Thread::call_run`                         | `libjvm.dylib`            |
| -55.1% | -2,814 | 80.2% → 79.1% | 5,109 → 2,295 | `thread_native_entry`                      | `libjvm.dylib`            |
| -56.1% | -1,679 | 47.0% → 45.3% | 2,994 → 1,315 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| -56.5% | -1,338 | 37.1% → 35.5% | 2,367 → 1,029 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| -55.2% | -1,302 | 37.0% → 36.5% | 2,360 → 1,058 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| -55.3% | -1,194 | 33.9% → 33.3% |   2,159 → 965 | `WorkerThread::run`                        | `libjvm.dylib`            |
| -54.8% | -1,039 | 29.7% → 29.5% |   1,895 → 856 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| -55.2% |   -929 | 26.4% → 26.0% |   1,683 → 754 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| -54.6% |   -459 |         13.2% |     841 → 382 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| -59.8% |   -409 |  10.7% → 9.5% |     684 → 275 | `Monitor::wait`                            | `libjvm.dylib`            |
| -55.5% |   -351 |   9.9% → 9.7% |     633 → 282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
| -62.3% |   -294 |   7.4% → 6.1% |     472 → 178 | `CompileQueue::get`                        | `libjvm.dylib`            |
| -54.5% |   -230 |          6.6% |     422 → 192 | `JLI_Launch`                               | `libjli.dylib`            |
| -54.5% |   -230 |          6.6% |     422 → 192 | `main`                                     | `java`                    |
| -44.7% |   -165 |   5.8% → 7.0% |     369 → 204 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
| -46.3% |   -148 |   5.0% → 5.9% |     320 → 172 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
| -45.9% |   -145 |   5.0% → 5.9% |     316 → 171 | `Compile::Compile`                         | `libjvm.dylib`            |
| -57.3% |   -121 |   3.3% → 3.1% |      211 → 90 | `G1ConcurrentRefineThread::run_service`    | `libjvm.dylib`            |

##### Native

| Change |  Delta |             % |       Samples | Function                                                      | Location                  |
| -----: | -----: | ------------: | ------------: | ------------------------------------------------------------- | ------------------------- |
| -55.0% | -2,929 | 83.5% → 82.4% | 5,321 → 2,392 | `_pthread_start`                                              | `libsystem_pthread.dylib` |
| -55.0% | -2,929 | 83.5% → 82.4% | 5,321 → 2,392 | `thread_start`                                                | `libsystem_pthread.dylib` |
| -55.1% | -2,814 | 80.2% → 79.1% | 5,109 → 2,295 | `Thread::call_run`                                            | `libjvm.dylib`            |
| -55.1% | -2,814 | 80.2% → 79.1% | 5,109 → 2,295 | `thread_native_entry`                                         | `libjvm.dylib`            |
| -56.1% | -1,679 | 47.0% → 45.3% | 2,994 → 1,315 | `__psynch_cvwait`                                             | `libsystem_kernel.dylib`  |
| -56.5% | -1,338 | 37.1% → 35.5% | 2,367 → 1,029 | `PlatformMonitor::wait`                                       | `libjvm.dylib`            |
| -55.2% | -1,302 | 37.0% → 36.5% | 2,360 → 1,058 | `semaphore_wait_trap`                                         | `libsystem_kernel.dylib`  |
| -55.3% | -1,194 | 33.9% → 33.3% |   2,159 → 965 | `WorkerThread::run`                                           | `libjvm.dylib`            |
| -54.8% | -1,039 | 29.7% → 29.5% |   1,895 → 856 | `JavaThread::thread_main_inner`                               | `libjvm.dylib`            |
| -55.2% |   -929 | 26.4% → 26.0% |   1,683 → 754 | `Monitor::wait_without_safepoint_check`                       | `libjvm.dylib`            |
| -59.8% |   -409 |  10.7% → 9.5% |     684 → 275 | `Monitor::wait`                                               | `libjvm.dylib`            |
| -55.5% |   -351 |   9.9% → 9.7% |     633 → 282 | `ConcurrentGCThread::run`                                     | `libjvm.dylib`            |
| -54.5% |   -230 |          6.6% |     422 → 192 | `JLI_Launch`                                                  | `libjli.dylib`            |
| -54.5% |   -230 |          6.6% |     422 → 192 | `main`                                                        | `java`                    |
| -57.3% |   -121 |   3.3% → 3.1% |      211 → 90 | `G1ConcurrentRefineThread::run_service`                       | `libjvm.dylib`            |
| -56.9% |   -120 |   3.3% → 3.1% |      211 → 91 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib`            |
| -54.9% |   -117 |          3.3% |      213 → 96 | `unknown`                                                     | `<unknown>`               |
| -56.5% |   -117 |   3.2% → 3.1% |      207 → 90 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib`            |
| -54.5% |   -115 |          3.3% |      211 → 96 | `__ulock_wait`                                                | `libsystem_kernel.dylib`  |
| -54.5% |   -115 |          3.3% |      211 → 96 | `CallJavaMainInNewThread`                                     | `libjli.dylib`            |

##### Compiler

| Change | Delta |           % |   Samples | Function                                   | Location       |
| -----: | ----: | ----------: | --------: | ------------------------------------------ | -------------- |
| -54.6% |  -459 |       13.2% | 841 → 382 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
| -62.3% |  -294 | 7.4% → 6.1% | 472 → 178 | `CompileQueue::get`                        | `libjvm.dylib` |
| -44.7% |  -165 | 5.8% → 7.0% | 369 → 204 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| -46.3% |  -148 | 5.0% → 5.9% | 320 → 172 | `C2Compiler::compile_method`               | `libjvm.dylib` |
| -45.9% |  -145 | 5.0% → 5.9% | 316 → 171 | `Compile::Compile`                         | `libjvm.dylib` |
| -44.8% |   -65 | 2.3% → 2.8% |  145 → 80 | `Compile::Code_Gen`                        | `libjvm.dylib` |
| -43.8% |   -53 | 1.9% → 2.3% |  121 → 68 | `Compile::Optimize`                        | `libjvm.dylib` |
| -41.6% |   -32 | 1.2% → 1.6% |   77 → 45 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
| -44.3% |   -31 | 1.1% → 1.3% |   70 → 39 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
| -42.4% |   -25 | 0.9% → 1.2% |   59 → 34 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
| -41.4% |   -24 | 0.9% → 1.2% |   58 → 34 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
| -50.0% |   -20 | 0.6% → 0.7% |   40 → 20 | `Compile::optimize_loops`                  | `libjvm.dylib` |
| -42.9% |   -15 | 0.5% → 0.7% |   35 → 20 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| -44.1% |   -15 | 0.5% → 0.7% |   34 → 19 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| -59.1% |   -13 |        0.3% |    22 → 9 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
| -30.2% |   -13 | 0.7% → 1.0% |   43 → 30 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| -28.9% |   -13 | 0.7% → 1.1% |   45 → 32 | `Compilation::compile_method`              | `libjvm.dylib` |
| -28.9% |   -13 | 0.7% → 1.1% |   45 → 32 | `Compilation::Compilation`                 | `libjvm.dylib` |
| -54.5% |   -12 |        0.3% |   22 → 10 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
| -44.4% |   -12 | 0.4% → 0.5% |   27 → 15 | `Matcher::match`                           | `libjvm.dylib` |

##### Standard library

| Change | Delta |    % |  Samples | Function                        | Location                                                                |
| -----: | ----: | ---: | -------: | ------------------------------- | ----------------------------------------------------------------------- |
| -54.5% |  -115 | 3.3% | 211 → 96 | `wait0(long)`                   | `java.lang.Object`                                                      |
| -54.5% |  -115 | 3.3% | 211 → 96 | `wait(long)`                    | `java.lang.Object`                                                      |
| -54.5% |  -115 | 3.3% | 211 → 96 | `wait()`                        | `java.lang.Object`                                                      |
| -54.5% |  -115 | 3.3% | 211 → 96 | `await()`                       | `java.lang.ref.NativeReferenceQueue`                                    |
| -54.5% |  -115 | 3.3% | 211 → 96 | `remove0()`                     | `java.lang.ref.ReferenceQueue`                                          |
| -54.5% |  -115 | 3.3% | 211 → 96 | `remove()`                      | `java.lang.ref.NativeReferenceQueue`                                    |
| -54.5% |  -115 | 3.3% | 211 → 96 | `run()`                         | `java.lang.ref.Finalizer$FinalizerThread`                               |
| -54.5% |  -115 | 3.3% | 211 → 96 | `waitForReferencePendingList()` | `java.lang.ref.Reference`                                               |
| -54.5% |  -115 | 3.3% | 211 → 96 | `processPendingReferences()`    | `java.lang.ref.Reference`                                               |
| -54.5% |  -115 | 3.3% | 211 → 96 | `run()`                         | `java.lang.ref.Reference$ReferenceHandler`                              |
| -54.8% |  -115 | 3.3% | 210 → 95 | `park(boolean, long)`           | `jdk.internal.misc.Unsafe`                                              |
| -54.8% |  -115 | 3.3% | 210 → 95 | `parkNanos(Object, long)`       | `java.util.concurrent.locks.LockSupport`                                |
| -54.8% |  -115 | 3.3% | 210 → 95 | `await(long, TimeUnit)`         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -54.8% |  -115 | 3.3% | 210 → 95 | `await(long)`                   | `java.lang.ref.ReferenceQueue`                                          |
| -54.8% |  -115 | 3.3% | 210 → 95 | `remove0(long)`                 | `java.lang.ref.ReferenceQueue`                                          |
| -54.8% |  -115 | 3.3% | 210 → 95 | `remove(long)`                  | `java.lang.ref.ReferenceQueue`                                          |
| -54.8% |  -115 | 3.3% | 210 → 95 | `run()`                         | `jdk.internal.ref.CleanerImpl`                                          |
| -54.8% |  -115 | 3.3% | 210 → 95 | `runWith(Object, Runnable)`     | `java.lang.Thread`                                                      |
| -54.8% |  -115 | 3.3% | 210 → 95 | `run()`                         | `java.lang.Thread`                                                      |
| -54.8% |  -115 | 3.3% | 210 → 95 | `run()`                         | `jdk.internal.misc.InnocuousThread`                                     |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7800`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------- |
|     new |   +23 | 0.0% → 100.0% |  0 → 23 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| removed |   -10 | 100.0% → 0.0% |  10 → 0 | `guardWithCatch(Object, Object, Object)`         | `java.lang.invoke.LambdaForm$MH.0x00000070010aa000` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1RemSet::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1EvacuateRegionsTask::scan_roots` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                | Location       |
| ------: | ----: | -----: | ------: | --------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `Parse::do_one_block` | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                          | Location       |
| ------: | ----: | -----: | ------: | ------------------------------- | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `ClassFileParser::parse_stream` | `libjvm.dylib` |

##### `LIRGenerator::block_do` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                       | Location       |
| ------: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `BlockList::iterate_forward` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                  | Location       |
| ------: | ----: | -----: | ------: | ----------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `Compilation::emit_lir` | `libjvm.dylib` |

##### `GlobalValueNumbering::GlobalValueNumbering` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `Compilation::build_hir` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::scan_memregion`   | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `PhaseIterGVN::transform_old`    | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseGVN::transform_no_reclaim` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseValues::uncached_makecon`  | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `RegionNode::is_unreachable_region`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `RegionNode::is_unreachable_from_root` | `libjvm.dylib` |

##### `NonSafepointEmitter::emit_non_safepoint` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `NonSafepointEmitter::observe_instruction` | `libjvm.dylib` |

##### `NonSafepointEmitter::observe_instruction` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseOutput::fill_buffer` | `libjvm.dylib` |

##### `reinvoke(Object, Object, int)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d1400`)

| Change | Delta |             % | Samples | Caller                       | Location                                            |
| -----: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `invoke(Object, Object)`     | `java.lang.invoke.LambdaForm$MH`                    |
|    new |    +2 |  0.0% → 66.7% |   0 → 2 | `guard(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d1800` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                 | Location       |
| ------: | ----: | -----: | ------: | -------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ClassFileParser::parse_constant_pool` | `libjvm.dylib` |

##### `MethodData::allocate` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Method::build_profiling_method_data` | `libjvm.dylib` |

##### `Method::build_profiling_method_data` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CompilationPolicy::create_mdo` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciMethod::ensure_method_data`  | `libjvm.dylib` |

##### `Rewriter::scan_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Rewriter::rewrite_bytecodes` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                     | Location       |
| -----: | ----: | -----------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `OptoRuntime::new_array_C` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `JVM_NewArray`             | `libjvm.dylib` |

##### `frame::sender_for_interpreter_frame` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java_lang_Throwable::fill_in_stack_trace` | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ciMethod::ensure_method_data`     | `libjvm.dylib` |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `Compilation::compile_java_method` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::try_inline_full`    | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
| +100.0% |    +2 |       100.0% |   2 → 4 | `LinearScan::allocate_registers` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `IntervalWalker::walk_to`        | `libjvm.dylib` |

##### `PhaseChaitin::Simplify` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                        | Location       |
| ------: | ----: | -----: | ------: | ----------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `ciMethod::get_method_at_bci` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `DirectCallGenerator::generate`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `LibraryCallKit::LibraryCallKit` | `libjvm.dylib` |

##### `Matcher::pd_clone_node` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::find_shared` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Matcher::match`       | `libjvm.dylib` |

##### `PhaseValues::uncached_makecon` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                 | Location       |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseValues::intcon`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseValues::longcon` | `libjvm.dylib` |

##### `PhaseCFG::implicit_null_check` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `IfFalseNode::Opcode` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCCP::transform`         | `libjvm.dylib` |

##### `RegMask::is_UP` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseChaitin::raise_pressure`     | `libjvm.dylib` |

##### `PhaseIdealLoop::get_ctrl_no_update` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::get_ctrl` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_ctrl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                 | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIdealLoop::try_sink_out_of_loop` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `IdealLoopTree::is_invariant`          | `libjvm.dylib` |

##### `BlockBegin::state_values_do` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `SubstitutionResolver::block_do` | `libjvm.dylib` |

##### `BlockListBuilder::set_leaders` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

##### `BlockListBuilder::BlockListBuilder` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `GraphBuilder::push_scope` | `libjvm.dylib` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Caller                               | Location          |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

| Change | Delta |            % | Samples | Caller                                          | Location          |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | ----------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `getDeclaredPublicMethods(String, Class[])`     | `java.lang.Class` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

| Change | Delta |            % | Samples | Caller                        | Location                                            |
| -----: | ----: | -----------: | ------: | ----------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke(Object, int, int)`    | `java.lang.invoke.LambdaForm$MH.0x0000007001386400` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `invoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH`                    |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Caller                                                            | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Caller                                                   | Location                            |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `makePairwiseConvert(MethodHandle, MethodType, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `makePairwiseConvert(MethodHandle, MethodType, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |              % | Samples | Caller                                            | Location                         |
| -----: | ----: | -------------: | ------: | ------------------------------------------------- | -------------------------------- |
| +25.0% |    +1 | 100.0% → 83.3% |   4 → 5 | `asTypeUncached(MethodType)`                      | `java.lang.invoke.MethodHandle`  |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `explicitCastArguments(MethodHandle, MethodType)` | `java.lang.invoke.MethodHandles` |

##### `invoke(Object, Object, int)` (`java.lang.invoke.LambdaForm$MH`)

| Change | Delta |              % | Samples | Caller                                | Location                                            |
| -----: | ----: | -------------: | ------: | ------------------------------------- | --------------------------------------------------- |
|    new |    +4 |  0.0% → 100.0% |   0 → 4 | `linkToCallSite(Object, int, Object)` | `java.lang.invoke.Invokers$Holder`                  |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `guardWithCatch(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d0c00` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `guard(Object, Object, int)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d1800` |

##### `guard(Object, Object, int)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d1800`)

| Change | Delta |              % | Samples | Caller                          | Location                                            |
| -----: | ----: | -------------: | ------: | ------------------------------- | --------------------------------------------------- |
|    new |    +3 |   0.0% → 75.0% |   0 → 3 | `reinvoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d1400` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `delegate(Object, Object, int)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `linkToCallSite(Object, int, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |            % | Samples | Caller                                        | Location                                                                   |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `visitVariableExpression(VariableExpression)` | `org.codenarc.rule.unused.UnusedPrivateMethodAstVisitor`                   |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `line(int)`                                   | `org.codenarc.rule.size.GMetricsSourceCodeAdapter`                         |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `doCall(Object)`                              | `org.codenarc.CodeNarc$_parseArgs_closure3`                                |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `visitField(FieldNode)`                       | `org.codenarc.rule.unnecessary.UnnecessaryDefInFieldDeclarationAstVisitor` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `applyTo(SourceCode, List)`                   | `org.codenarc.rule.formatting.BlankLineBeforePackageRule`                  |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

| Change | Delta |            % | Samples | Caller                                                                    | Location                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |            % | Samples | Caller                                                     | Location                                         |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `delegate(Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DelegatingMethodHandle$Holder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `copyWithExtendL(MethodType, LambdaForm, Object)`          | `java.lang.invoke.BoundMethodHandle$Species_LL`  |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller             | Location                                       |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `spinInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller            | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `castToType(Object, Class)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

| Change | Delta |             % | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invokeStatic(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001028000`)

| Change | Delta |             % | Samples | Caller                                   | Location                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `invoke(Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH` |

##### `guardWithTest(MethodHandle, MethodHandle)` (`java.lang.invoke.SwitchPoint`)

| Change | Delta |             % | Samples | Caller              | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------- | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `setGuards(Object)` | `org.codehaus.groovy.vmplugin.v8.Selector$MethodSelector` |

##### `forceInterpretation()` (`java.lang.invoke.LambdaForm`)

| Change | Delta |             % | Samples | Caller      | Location                      |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `prepare()` | `java.lang.invoke.LambdaForm` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

| Change | Delta |      % | Samples | Caller          | Location                  |
| -----: | ----: | -----: | ------: | --------------- | ------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `getBeanInfo()` | `java.beans.Introspector` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Caller         | Location                  |
| -----: | -----: | -----: | ------------: | -------------- | ------------------------- |
| -55.0% | -2,929 | 100.0% | 5,321 → 2,392 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller                | Location       |
| -----: | -----: | -----: | ------------: | --------------------- | -------------- |
| -55.1% | -2,814 | 100.0% | 5,109 → 2,295 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -55.1% | -2,814 | 100.0% | 5,109 → 2,295 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |       Samples | Caller                  | Location                 |
| -----: | -----: | ------------: | ------------: | ----------------------- | ------------------------ |
| -56.5% | -1,334 | 78.9% → 78.2% | 2,362 → 1,028 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| -54.5% |   -115 |   7.0% → 7.3% |      211 → 96 | `PlatformEvent::park`   | `libjvm.dylib`           |
| -54.8% |   -115 |   7.0% → 7.2% |      210 → 95 | `Parker::park`          | `libjvm.dylib`           |
| -54.5% |   -115 |   7.0% → 7.3% |      211 → 96 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |     Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ----------: | --------------------------------------- | -------------- |
| -55.2% |  -929 | 71.1% → 73.3% | 1,683 → 754 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| -59.8% |  -409 | 28.9% → 26.7% |   684 → 275 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |     Samples | Caller                           | Location       |
| -----: | -----: | ------------: | ----------: | -------------------------------- | -------------- |
| -55.2% | -1,184 | 90.8% → 90.6% | 2,143 → 959 | `WorkerThread::run`              | `libjvm.dylib` |
| -54.5% |   -115 |   8.9% → 9.1% |    211 → 96 | `os::signal_wait`                | `libjvm.dylib` |
| -50.0% |     -2 |          0.2% |       4 → 2 | `WorkerThreads::run_task`        | `libjvm.dylib` |
| -50.0% |     -1 |          0.1% |       2 → 1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change |  Delta |      % |     Samples | Caller             | Location       |
| -----: | -----: | -----: | ----------: | ------------------ | -------------- |
| -55.3% | -1,194 | 100.0% | 2,159 → 965 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change |  Delta |      % |     Samples | Caller             | Location       |
| -----: | -----: | -----: | ----------: | ------------------ | -------------- |
| -54.8% | -1,039 | 100.0% | 1,895 → 856 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Caller                                                        | Location       |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------- | -------------- |
| -56.9% |  -120 | 12.5% → 12.1% | 211 → 91 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| -56.5% |  -117 | 12.3% → 11.9% | 207 → 90 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| -54.5% |  -115 | 12.5% → 12.7% | 211 → 96 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| -54.5% |  -115 | 12.5% → 12.7% | 211 → 96 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| -54.8% |  -115 | 12.5% → 12.6% | 210 → 95 | `VMThread::wait_for_operation`                                | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
| -54.6% |  -459 | 100.0% | 841 → 382 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -62.0% |  -291 | 68.6% → 64.7% | 469 → 178 | `CompileQueue::get`               | `libjvm.dylib` |
| -54.5% |  -115 | 30.8% → 34.9% |  211 → 96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
| -75.0% |    -3 |   0.6% → 0.4% |     4 → 1 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -55.5% |  -351 | 100.0% | 633 → 282 | `Thread::call_run` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
| -62.3% |  -294 | 100.0% | 472 → 178 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |      % |   Samples | Caller | Location |
| -----: | ----: | -----: | --------: | ------ | -------- |
| -54.5% |  -230 | 100.0% | 422 → 192 | `main` | `java`   |

##### `main` (`java`)

| Change | Delta |     % |  Samples | Caller       | Location       |
| -----: | ----: | ----: | -------: | ------------ | -------------- |
| -54.5% |  -115 | 50.0% | 211 → 96 | `apple_main` | `libjli.dylib` |
| -54.5% |  -115 | 50.0% | 211 → 96 | `unknown`    | `<unknown>`    |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------- | -------------- |
| -44.7% |  -165 | 100.0% | 369 → 204 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                                     | Location       |
| -----: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
| -46.3% |  -148 | 100.0% | 320 → 172 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                       | Location       |
| -----: | ----: | -----: | --------: | ---------------------------- | -------------- |
| -45.9% |  -145 | 100.0% | 316 → 171 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `G1ConcurrentRefineThread::run_service` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                    | Location       |
| -----: | ----: | -----: | -------: | ------------------------- | -------------- |
| -57.3% |  -121 | 100.0% | 211 → 90 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                          | Location       |
| -----: | ----: | -----: | -------: | ------------------------------- | -------------- |
| -56.9% |  -120 | 100.0% | 211 → 91 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller                                  | Location       |
| -----: | ----: | -----: | -------: | --------------------------------------- | -------------- |
| -56.5% |  -117 | 100.0% | 207 → 90 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |  Samples | Caller                    | Location       |
| -----: | ----: | -----: | -------: | ------------------------- | -------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

| Change | Delta |      % |  Samples | Caller                | Location       |
| -----: | ----: | -----: | -------: | --------------------- | -------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `ContinueInNewThread` | `libjli.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller             | Location       |
| -----: | ----: | -----: | -------: | ------------------ | -------------- |
| -44.8% |   -65 | 100.0% | 145 → 80 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Caller             | Location       |
| -----: | ----: | -----: | -------: | ------------------ | -------------- |
| -43.8% |   -53 | 100.0% | 121 → 68 | `Compile::Compile` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -41.6% |   -32 | 100.0% | 77 → 45 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
| -50.0% |   -20 | 57.1% → 51.3% | 40 → 20 | `Compile::optimize_loops` | `libjvm.dylib` |
| -36.7% |   -11 | 42.9% → 48.7% | 30 → 19 | `Compile::Optimize`       | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -42.4% |   -25 | 100.0% | 59 → 34 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -41.4% |   -24 | 100.0% | 58 → 34 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -50.0% |   -20 | 100.0% | 40 → 20 | `Compile::Optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| -38.1% |    -8 | 60.0% → 65.0% | 21 → 13 | `Compile::Optimize`                    | `libjvm.dylib` |
| -50.0% |    -5 | 28.6% → 25.0% |  10 → 5 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| -75.0% |    -3 |  11.4% → 5.0% |   4 → 1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 5.0% |   0 → 1 | `Compile::remove_speculative_types`    | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -44.1% |   -15 | 100.0% | 34 → 19 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| -59.1% |   -13 | 100.0% |  22 → 9 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -30.2% |   -13 | 100.0% | 43 → 30 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -28.9% |   -13 | 100.0% | 45 → 32 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -28.9% |   -13 | 100.0% | 45 → 32 | `Compiler::compile_method` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -54.5% |   -12 | 100.0% | 22 → 10 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -44.4% |   -12 | 100.0% | 27 → 15 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `wait0(long)` (`java.lang.Object`)

| Change | Delta |      % |  Samples | Caller       | Location           |
| -----: | ----: | -----: | -------: | ------------ | ------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

| Change | Delta |      % |  Samples | Caller   | Location           |
| -----: | ----: | -----: | -------: | -------- | ------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

| Change | Delta |      % |  Samples | Caller    | Location                             |
| -----: | ----: | -----: | -------: | --------- | ------------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

| Change | Delta |      % |  Samples | Caller      | Location                       |
| -----: | ----: | -----: | -------: | ----------- | ------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Caller     | Location                             |
| -----: | ----: | -----: | -------: | ---------- | ------------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

| Change | Delta |      % |  Samples | Caller  | Location                                  |
| -----: | ----: | -----: | -------: | ------- | ----------------------------------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `run()` | `java.lang.ref.Finalizer$FinalizerThread` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

| Change | Delta |      % |  Samples | Caller                       | Location                  |
| -----: | ----: | -----: | -------: | ---------------------------- | ------------------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

| Change | Delta |      % |  Samples | Caller  | Location                                   |
| -----: | ----: | -----: | -------: | ------- | ------------------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % |  Samples | Caller                    | Location                                 |
| -----: | ----: | -----: | -------: | ------------------------- | ---------------------------------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |  Samples | Caller                  | Location                                                                |
| -----: | ----: | -----: | -------: | ----------------------- | ----------------------------------------------------------------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change | Delta |      % |  Samples | Caller        | Location                       |
| -----: | ----: | -----: | -------: | ------------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Caller          | Location                       |
| -----: | ----: | -----: | -------: | --------------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Caller         | Location                       |
| -----: | ----: | -----: | -------: | -------------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Caller  | Location                       |
| -----: | ----: | -----: | -------: | ------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change | Delta |      % |  Samples | Caller                      | Location           |
| -----: | ----: | -----: | -------: | --------------------------- | ------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change | Delta |      % |  Samples | Caller  | Location           |
| -----: | ----: | -----: | -------: | ------- | ------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

| Change | Delta |      % |  Samples | Caller  | Location                            |
| -----: | ----: | -----: | -------: | ------- | ----------------------------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `run()` | `jdk.internal.misc.InnocuousThread` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010c7800`)

|  Change | Delta |             % | Samples | Callee                                    | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ---------------------------------------------------- |
|     new |   +23 | 0.0% → 100.0% |  0 → 23 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -7 |  70.0% → 0.0% |   7 → 0 | `invokeSpecial(Object, Object, Object)`   | `java.lang.invoke.LambdaForm$DMH.0x0000007001084000` |
| removed |    -3 |  30.0% → 0.0% |   3 → 0 | `invokeVirtual(Object, Object, Object)`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `invokeInterface(Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001125400` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                                                                                                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                                     | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_memregion` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::scan_memregion` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                          | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` | `libjvm.dylib` |

##### `G1ScanHRForRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::scan_heap_roots` | `libjvm.dylib` |

##### `G1RemSet::scan_heap_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ScanHRForRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1RemSet::scan_heap_roots` | `libjvm.dylib` |

##### `Parse::do_one_bytecode` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `GraphKit::null_check_oop` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Parse::do_ifnull`         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `PhaseValues::intcon`      | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `Parse::add_safepoint`     | `libjvm.dylib` |

##### `ClassFileParser::parse_constant_pool` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% → 75.0% |   1 → 3 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `LIRGenerator::block_do` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                           | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|     new |    +2 | 0.0% → 40.0% |   0 → 2 | `LIRGenerator::do_ProfileInvoke` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LIRGenerator::do_ProfileCall`   | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `LIRGenerator::do_CheckCast`     | `libjvm.dylib` |
|     new |    +1 | 0.0% → 20.0% |   0 → 1 | `LIRGenerator::do_Goto`          | `libjvm.dylib` |

##### `BlockList::iterate_forward` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `LIRGenerator::block_do` | `libjvm.dylib` |

##### `GlobalValueNumbering::GlobalValueNumbering` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                         | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------- |
| +100.0% |    +1 | 100.0% → 50.0% |   1 → 2 | `BlockBegin::iterate_preorder` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 25.0% |   0 → 1 | `LoadField::hash`              | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                            | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `NodeHash::hash_find_insert` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee           | Location       |
| -----: | ----: | -----------: | ------: | ---------------- | -------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `BoolNode::hash` | `libjvm.dylib` |

##### `NonSafepointEmitter::emit_non_safepoint` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `NonSafepointEmitter::observe_instruction` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `NonSafepointEmitter::emit_non_safepoint` | `libjvm.dylib` |

##### `reinvoke(Object, Object, int)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d1400`)

| Change | Delta |             % | Samples | Callee                                | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------- | --------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `guard(Object, Object, int)`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d1800` |
|    new |    +2 |  0.0% → 66.7% |   0 → 2 | `guardWithCatch(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d0c00` |

##### `ClassFileParser::parse_constant_pool_entries` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `UTF8::is_legal_utf8` | `libjvm.dylib` |

##### `MethodData::allocate` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                   | Location       |
| -----: | ----: | -----------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Mutex::Mutex`           | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `MethodData::initialize` | `libjvm.dylib` |

##### `Method::build_profiling_method_data` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `MethodData::allocate` | `libjvm.dylib` |

##### `Rewriter::scan_method` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                      | Location       |
| -----: | ----: | -----------: | ------: | --------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `InstanceKlass::find_field` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                          | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CollectedHeap::array_allocate` | `libjvm.dylib` |

##### `frame::sender_for_interpreter_frame` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `CodeHeap::find_blob` | `libjvm.dylib` |

##### `ciMethod::ensure_method_data` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ciMethod::ensure_method_data`        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ciObjectFactory::get_metadata`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Method::build_profiling_method_data` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `SafepointMechanism::process`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                 | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `RegionNode::is_CFG`                   | `libjvm.dylib` |
| +100.0% |    +1 |        50.0% |   1 → 2 | `PhaseIdealLoop::build_loop_tree_impl` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                               | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| +50.0% |    +1 | 100.0% → 75.0% |   2 → 3 | `LinearScanWalker::activate_current` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `IntervalWalker::walk_to`            | `libjvm.dylib` |

##### `PhaseChaitin::Simplify` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                               | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `IndexSetIterator::advance_and_next` | `libjvm.dylib` |

##### `ciMethod::get_method_at_bci` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciEnv::get_method_by_index_impl` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ciBytecodeStream::get_method`    | `libjvm.dylib` |

##### `PhaseValues::uncached_makecon` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                       | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ConLNode::Opcode`           | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `NodeHash::hash_find_insert` | `libjvm.dylib` |

##### `PhaseCFG::implicit_null_check` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Node::Opcode`                | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseCFG::latency_from_uses` | `libjvm.dylib` |

##### `PhaseIdealLoop::get_ctrl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::get_ctrl_no_update` | `libjvm.dylib` |

##### `BlockBegin::state_values_do` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                  | Location       |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ValueStack::values_do` | `libjvm.dylib` |

##### `BlockListBuilder::BlockListBuilder` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                          | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `BlockListBuilder::set_leaders` | `libjvm.dylib` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change | Delta |              % | Samples | Callee                        | Location                |
| ------: | ----: | -------------: | ------: | ----------------------------- | ----------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `JVM_GetClassDeclaredMethods` | `libjvm.dylib`          |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `loadClass(String)`           | `java.lang.ClassLoader` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change | Delta |      % | Samples | Callee                         | Location          |
| ------: | ----: | -----: | ------: | ------------------------------ | ----------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `getDeclaredMethods0(boolean)` | `java.lang.Class` |

##### `collector(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x00000070010a1000`)

|  Change | Delta |              % | Samples | Callee                | Location                                            |
| ------: | ----: | -------------: | ------: | --------------------- | --------------------------------------------------- |
| +200.0% |    +4 | 50.0% → 100.0% |   2 → 6 | `invoke(Object, int)` | `java.lang.invoke.LambdaForm$MH.0x0000007001031400` |

##### `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |            % | Samples | Callee                                                              | Location                            |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------- | ----------------------------------- |
|     new |    +2 | 0.0% → 33.3% |   0 → 2 | `bindTo(Object)`                                                    | `java.lang.invoke.MethodHandle`     |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `wrong_method_stub`                                                 | `<unknown>`                         |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `computeValueConversions(MethodType, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `next()`                                                            | `java.util.HashMap$EntryIterator`   |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `viewAsType(MethodType, boolean)`                                   | `java.lang.invoke.MethodHandle`     |

##### `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Callee                                                                    | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `makePairwiseConvertByEditor(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `makePairwiseConvert(MethodHandle, MethodType, boolean)` (`java.lang.invoke.MethodHandleImpl`)

| Change | Delta |      % | Samples | Callee                                                            | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `makePairwiseConvert(MethodHandle, MethodType, boolean, boolean)` | `java.lang.invoke.MethodHandleImpl` |

##### `invoke(Object, Object, int)` (`java.lang.invoke.LambdaForm$MH`)

|  Change | Delta |             % | Samples | Callee                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `invokeStatic(Object, Object, Object, Object, int, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001088800` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `invokeVirtual(Object, Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001094400` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `collector(Object, Object, Object)`                                                         | `java.lang.invoke.LambdaForm$MH.0x00000070010a1000`  |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, Object, Object)`                                                    | `java.lang.invoke.LambdaForm$MH`                     |

##### `guard(Object, Object, int)` (`java.lang.invoke.LambdaForm$MH.0x00000070010d1800`)

| Change | Delta |              % | Samples | Callee                          | Location                                            |
| -----: | ----: | -------------: | ------: | ------------------------------- | --------------------------------------------------- |
|    new |    +2 |   0.0% → 50.0% |   0 → 2 | `reinvoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010d1400` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `delegate(Object, Object, int)` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|    new |    +1 |   0.0% → 25.0% |   0 → 1 | `invoke(Object, Object, int)`   | `java.lang.invoke.LambdaForm$MH`                    |

##### `linkToCallSite(Object, int, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Callee                        | Location                                            |
| ------: | ----: | ------------: | ------: | ----------------------------- | --------------------------------------------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `invoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH`                    |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object, Object, int)` | `java.lang.invoke.LambdaForm$MH.0x00000070010cbc00` |

##### `bindTo(Object)` (`java.lang.invoke.MethodHandle`)

|  Change | Delta |              % | Samples | Callee                       | Location                        |
| ------: | ----: | -------------: | ------: | ---------------------------- | ------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `bindArgumentL(int, Object)` | `java.lang.invoke.MethodHandle` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

| Change | Delta |            % | Samples | Callee                                                                                | Location                                         |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `makeConcatWithConstants(MethodHandles$Lookup, String, MethodType, String, Object[])` | `java.lang.invoke.StringConcatFactory`           |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `make(MethodType, LambdaForm, Object, Object, Object)`                                | `java.lang.invoke.BoundMethodHandle$Species_LLL` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |            % | Samples | Callee                                               | Location                                             |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `defineClass(boolean, Object)`                       | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`         |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Callee                 | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `castToType(Object, Class)` (`org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation`)

| Change | Delta |            % | Samples | Callee                                    | Location                                                             |
| -----: | ----: | -----------: | ------: | ----------------------------------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `continueCastOnCollection(Object, Class)` | `org.codehaus.groovy.runtime.typehandling.DefaultTypeTransformation` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toString(Object)`                        | `org.codehaus.groovy.runtime.FormatHelper`                           |

##### `invokeStatic(Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001028000`)

| Change | Delta |             % | Samples | Callee                              | Location                                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `suppressException(Class, Closure)` | `org.codenarc.rule.unnecessary.UnnecessaryGStringAstVisitor` |

##### `guardWithTest(MethodHandle, MethodHandle)` (`java.lang.invoke.SwitchPoint`)

| Change | Delta |             % | Samples | Callee                                                    | Location                         |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `guardWithTest(MethodHandle, MethodHandle, MethodHandle)` | `java.lang.invoke.MethodHandles` |

##### `getTargetPropertyInfo()` (`java.beans.Introspector`)

|  Change | Delta |            % | Samples | Callee                                         | Location                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | ------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getProperties()`                              | `com.sun.beans.introspect.ClassInfo` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `addPropertyDescriptors(PropertyDescriptor[])` | `java.beans.Introspector`            |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `processPropertyDescriptors()`                 | `java.beans.Introspector`            |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |             % |       Samples | Callee                | Location       |
| -----: | -----: | ------------: | ------------: | --------------------- | -------------- |
| -55.1% | -2,814 | 96.0% → 95.9% | 5,109 → 2,295 | `thread_native_entry` | `libjvm.dylib` |
| -54.5% |   -115 |          4.0% |      211 → 96 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Callee           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -55.0% | -2,929 | 100.0% | 5,321 → 2,392 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |  Delta |             % |     Samples | Callee                          | Location       |
| -----: | -----: | ------------: | ----------: | ------------------------------- | -------------- |
| -55.3% | -1,194 | 42.3% → 42.0% | 2,159 → 965 | `WorkerThread::run`             | `libjvm.dylib` |
| -54.8% | -1,039 | 37.1% → 37.3% | 1,895 → 856 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -55.5% |   -351 | 12.4% → 12.3% |   633 → 282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| -54.5% |   -115 |   4.1% → 4.2% |    211 → 96 | `WatcherThread::run`            | `libjvm.dylib` |
| -54.5% |   -115 |   4.1% → 4.2% |    211 → 96 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Callee             | Location       |
| -----: | -----: | -----: | ------------: | ------------------ | -------------- |
| -55.1% | -2,814 | 100.0% | 5,109 → 2,295 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change |  Delta |             % |       Samples | Callee               | Location                  |
| -----: | -----: | ------------: | ------------: | -------------------- | ------------------------- |
| -56.5% | -1,334 | 99.8% → 99.9% | 2,362 → 1,028 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
| -80.0% |     -4 |   0.2% → 0.1% |         5 → 1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change |  Delta |             % |     Samples | Callee                            | Location                 |
| ------: | -----: | ------------: | ----------: | --------------------------------- | ------------------------ |
|  -55.2% | -1,184 | 99.3% → 99.4% | 2,143 → 959 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  -60.0% |     -6 |   0.5% → 0.4% |      10 → 4 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
| removed |     -2 |   0.1% → 0.0% |       2 → 0 | `G1BatchedTask::work`             | `libjvm.dylib`           |
|  -66.7% |     -2 |          0.1% |       3 → 1 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
| -54.6% |  -459 | 44.4% → 44.6% | 841 → 382 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| -56.9% |  -120 | 11.1% → 10.6% |  211 → 91 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| -54.5% |  -115 | 11.1% → 11.2% |  211 → 96 | `signal_thread_entry`                                    | `libjvm.dylib` |
| -54.5% |  -115 | 11.1% → 11.2% |  211 → 96 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| -54.8% |  -115 |         11.1% |  210 → 95 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |      % |     Samples | Callee                  | Location       |
| -----: | ----: | -----: | ----------: | ----------------------- | -------------- |
| -55.2% |  -929 | 100.0% | 1,683 → 754 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
| -62.3% |  -294 | 56.1% → 46.6% | 472 → 178 | `CompileQueue::get`                        | `libjvm.dylib` |
| -44.7% |  -165 | 43.9% → 53.4% | 369 → 204 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                  | Location       |
| -----: | ----: | -----: | --------: | ----------------------- | -------------- |
| -59.8% |  -409 | 100.0% | 684 → 275 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                                  | Location       |
| -----: | ----: | ------------: | -------: | --------------------------------------- | -------------- |
| -57.3% |  -121 | 33.3% → 31.9% | 211 → 90 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| -54.5% |  -115 | 33.3% → 34.0% | 211 → 96 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| -54.5% |  -115 | 33.3% → 34.0% | 211 → 96 | `G1ServiceThread::run_service`          | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|  Change | Delta |              % |   Samples | Callee          | Location       |
| ------: | ----: | -------------: | --------: | --------------- | -------------- |
|  -62.0% |  -291 | 99.4% → 100.0% | 469 → 178 | `Monitor::wait` | `libjvm.dylib` |
| removed |    -3 |    0.6% → 0.0% |     3 → 0 | `Mutex::lock`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % |  Samples | Callee                       | Location       |
| -----: | ----: | ----: | -------: | ---------------------------- | -------------- |
| -54.5% |  -115 | 50.0% | 211 → 96 | `ContinueInNewThread`        | `libjli.dylib` |
| -54.5% |  -115 | 50.0% | 211 → 96 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
| -54.5% |  -230 | 100.0% | 422 → 192 | `JLI_Launch` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                        | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------- | -------------- |
|  -46.3% |  -148 | 86.7% → 84.3% | 320 → 172 | `C2Compiler::compile_method`  | `libjvm.dylib` |
|  -28.9% |   -13 | 12.2% → 15.7% |   45 → 32 | `Compiler::compile_method`    | `libjvm.dylib` |
| removed |    -3 |   0.8% → 0.0% |     3 → 0 | `ciEnv::ciEnv`                | `libjvm.dylib` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                         | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------ | -------------- |
|  -45.9% |  -145 | 98.8% → 99.4% | 316 → 171 | `Compile::Compile`             | `libjvm.dylib` |
| removed |    -3 |   0.9% → 0.0% |     3 → 0 | `Compile::~Compile`            | `libjvm.dylib` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `PhaseValues::init_con_caches` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `Chunk::next_chop`             | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

| Change | Delta |             % |  Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | -------: | ---------------------------------------- | -------------- |
| -44.8% |   -65 | 45.9% → 46.8% | 145 → 80 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| -43.8% |   -53 | 38.3% → 39.8% | 121 → 68 | `Compile::Optimize`                      | `libjvm.dylib` |
| -55.0% |   -22 | 12.7% → 10.5% |  40 → 18 | `ParseGenerator::generate`               | `libjvm.dylib` |
| -66.7% |    -2 |   0.9% → 0.6% |    3 → 1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
| -66.7% |    -2 |   0.9% → 0.6% |    3 → 1 | `CallGenerator::for_inline`              | `libjvm.dylib` |

##### `G1ConcurrentRefineThread::run_service` (`libjvm.dylib`)

|  Change | Delta |              % |  Samples | Callee                                                        | Location       |
| ------: | ----: | -------------: | -------: | ------------------------------------------------------------- | -------------- |
|  -56.5% |  -117 | 98.1% → 100.0% | 207 → 90 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |    1 → 0 | `SuspendibleThreadSet::join`                                  | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |    1 → 0 | `G1PrimaryConcurrentRefineThread::do_refinement_step`         | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |    1 → 0 | `G1ConcurrentRefine::reduce_threads_wanted`                   | `libjvm.dylib` |
| removed |    -1 |    0.5% → 0.0% |    1 → 0 | `ConcurrentGCThread::should_terminate`                        | `libjvm.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee                                  | Location       |
| -----: | ----: | -----: | -------: | --------------------------------------- | -------------- |
| -56.9% |  -120 | 100.0% | 211 → 91 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|  Change | Delta |              % |  Samples | Callee                                                                                        | Location                                          |
| ------: | ----: | -------------: | -------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|  -54.5% |  -115 | 99.1% → 100.0% | 211 → 96 | `main`                                                                                        | `java`                                            |
| removed |    -1 |    0.5% → 0.0% |    1 → 0 | `fromCache(MutableCallSite, Class, String, int, Boolean, Boolean, Boolean, Object, Object[])` | `org.codehaus.groovy.vmplugin.v8.IndyInterface`   |
| removed |    -1 |    0.5% → 0.0% |    1 → 0 | `applyTo(SourceCode, List)`                                                                   | `org.codenarc.rule.imports.NoWildcardImportsRule` |

##### `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` (`libjvm.dylib`)

| Change | Delta |      % |  Samples | Callee                                  | Location       |
| -----: | ----: | -----: | -------: | --------------------------------------- | -------------- |
| -56.5% |  -117 | 100.0% | 207 → 90 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

| Change | Delta |      % |  Samples | Callee         | Location                 |
| -----: | ----: | -----: | -------: | -------------- | ------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|  -41.6% |   -32 | 53.1% → 56.3% | 77 → 45 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  -54.5% |   -12 | 15.2% → 12.5% | 22 → 10 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  -44.4% |   -12 | 18.6% → 18.8% | 27 → 15 | `Matcher::match`                  | `libjvm.dylib` |
|  -43.8% |    -7 | 11.0% → 11.3% |  16 → 9 | `PhaseOutput::Output`             | `libjvm.dylib` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `PhaseCFG::fixup_flow`            | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| -50.0% |   -20 | 33.1% → 29.4% | 40 → 20 | `Compile::optimize_loops`              | `libjvm.dylib` |
| -36.7% |   -11 | 24.8% → 27.9% | 30 → 19 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| -38.1% |    -8 | 17.4% → 19.1% | 21 → 13 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| -83.3% |    -5 |   5.0% → 1.5% |   6 → 1 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
| -37.5% |    -3 |   6.6% → 7.4% |   8 → 5 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                           | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------- |
|  -61.5% |    -8 | 16.9% → 11.1% |  13 → 5 | `PhaseChaitin::build_ifg_physical`               | `libjvm.dylib` |
|  -62.5% |    -5 |  10.4% → 6.7% |   8 → 3 | `PhaseChaitin::post_allocate_copy_removal`       | `libjvm.dylib` |
| removed |    -4 |   5.2% → 0.0% |   4 → 0 | `Chunk::next_chop`                               | `libjvm.dylib` |
|  -60.0% |    -3 |   6.5% → 4.4% |   5 → 2 | `PhaseChaitin::gather_lrg_masks`                 | `libjvm.dylib` |
| removed |    -2 |   2.6% → 0.0% |   2 → 0 | `PhaseChaitin::stretch_base_pointer_live_ranges` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -42.4% |   -25 | 84.3% → 87.2% | 59 → 34 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  -50.0% |    -5 | 14.3% → 12.8% |  10 → 5 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -41.4% |   -24 | 98.3% → 100.0% | 58 → 34 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `Arena::grow`                        | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|  -55.6% |   -10 | 31.0% → 23.5% |  18 → 8 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
|  -23.1% |    -3 | 22.4% → 29.4% | 13 → 10 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| +100.0% |    +2 |  3.4% → 11.8% |   2 → 4 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| removed |    -2 |   3.4% → 0.0% |   2 → 0 | `Node::pinned`                         | `libjvm.dylib` |
|  -66.7% |    -2 |   5.2% → 2.9% |   3 → 1 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                     | Location       |
| -----: | ----: | -----: | ------: | -------------------------- | -------------- |
| -50.0% |   -20 | 100.0% | 40 → 20 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  -44.1% |   -15 | 97.1% → 95.0% | 34 → 19 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `StoreNode::hash`             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.0% |   0 → 1 | `PhiNode::hash`               | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------- |
|     new |    +3 | 0.0% → 15.8% |   0 → 3 | `NodeHash::hash_find_insert` | `libjvm.dylib` |
| removed |    -2 |  5.9% → 0.0% |   2 → 0 | `CallDynamicJavaNode::Ideal` | `libjvm.dylib` |
| removed |    -2 |  5.9% → 0.0% |   2 → 0 | `MemBarNode::Ideal`          | `libjvm.dylib` |
| removed |    -2 |  5.9% → 0.0% |   2 → 0 | `StoreNode::Ideal`           | `libjvm.dylib` |
| removed |    -2 |  5.9% → 0.0% |   2 → 0 | `LoadNode::Ideal`            | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -5 |  22.7% → 0.0% |   5 → 0 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
|  -66.7% |    -4 | 27.3% → 22.2% |   6 → 2 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
|  -75.0% |    -3 | 18.2% → 11.1% |   4 → 1 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |
|  -66.7% |    -2 | 13.6% → 11.1% |   3 → 1 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
| removed |    -2 |   9.1% → 0.0% |   2 → 0 | `PhaseCFG::schedule_pinned_nodes`   | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| -84.6% |   -11 |  30.2% → 6.7% |  13 → 2 | `Compilation::emit_code_body`  | `libjvm.dylib` |
| -26.3% |    -5 | 44.2% → 46.7% | 19 → 14 | `Compilation::build_hir`       | `libjvm.dylib` |
|    new |    +2 |   0.0% → 6.7% |   0 → 2 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  +9.1% |    +1 | 25.6% → 40.0% | 11 → 12 | `Compilation::emit_lir`        | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| -30.2% |   -13 | 95.6% → 93.8% | 43 → 30 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                        | Location       |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------- |
| -28.9% |   -13 | 100.0% | 45 → 32 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                           | Location       |
| -----: | ----: | -------------: | ------: | -------------------------------- | -------------- |
| -59.1% |   -13 | 100.0% → 90.0% |  22 → 9 | `PhaseCFG::global_code_motion`   | `libjvm.dylib` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `PhaseCFG::build_dominator_tree` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  -45.0% |    -9 | 74.1% → 73.3% | 20 → 11 | `Matcher::xform`                              | `libjvm.dylib` |
| removed |    -3 |  11.1% → 0.0% |   3 → 0 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  -33.3% |    -1 | 11.1% → 13.3% |   3 → 2 | `Matcher::find_shared`                        | `libjvm.dylib` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `PhiNode::Opcode`                             | `libjvm.dylib` |
|     new |    +1 |   0.0% → 6.7% |   0 → 1 | `Matcher::pd_clone_node`                      | `libjvm.dylib` |

##### `wait0(long)` (`java.lang.Object`)

| Change | Delta |      % |  Samples | Callee            | Location       |
| -----: | ----: | -----: | -------: | ----------------- | -------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

| Change | Delta |      % |  Samples | Callee        | Location           |
| -----: | ----: | -----: | -------: | ------------- | ------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

| Change | Delta |      % |  Samples | Callee       | Location           |
| -----: | ----: | -----: | -------: | ------------ | ------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

| Change | Delta |      % |  Samples | Callee   | Location           |
| -----: | ----: | -----: | -------: | -------- | ------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Callee    | Location                             |
| -----: | ----: | -----: | -------: | --------- | ------------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

| Change | Delta |      % |  Samples | Callee      | Location                       |
| -----: | ----: | -----: | -------: | ----------- | ------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`java.lang.ref.Finalizer$FinalizerThread`)

| Change | Delta |      % |  Samples | Callee     | Location                             |
| -----: | ----: | -----: | -------: | ---------- | ------------------------------------ |
| -54.5% |  -115 | 100.0% | 211 → 96 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

| Change | Delta |      % |  Samples | Callee                            | Location       |
| -----: | ----: | -----: | -------: | --------------------------------- | -------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

| Change | Delta |      % |  Samples | Callee                          | Location                  |
| -----: | ----: | -----: | -------: | ------------------------------- | ------------------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

| Change | Delta |      % |  Samples | Callee                       | Location                  |
| -----: | ----: | -----: | -------: | ---------------------------- | ------------------------- |
| -54.5% |  -115 | 100.0% | 211 → 96 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % |  Samples | Callee        | Location       |
| -----: | ----: | -----: | -------: | ------------- | -------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `Unsafe_Park` | `libjvm.dylib` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |  Samples | Callee                | Location                   |
| -----: | ----: | -----: | -------: | --------------------- | -------------------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change | Delta |      % |  Samples | Callee                    | Location                                 |
| -----: | ----: | -----: | -------: | ------------------------- | ---------------------------------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Callee                  | Location                                                                |
| -----: | ----: | -----: | -------: | ----------------------- | ----------------------------------------------------------------------- |
| -54.8% |  -115 | 100.0% | 210 → 95 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Callee        | Location                       |
| -----: | ----: | -----: | -------: | ------------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change | Delta |      % |  Samples | Callee          | Location                       |
| -----: | ----: | -----: | -------: | --------------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change | Delta |      % |  Samples | Callee         | Location                       |
| -----: | ----: | -----: | -------: | -------------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change | Delta |      % |  Samples | Callee  | Location                       |
| -----: | ----: | -----: | -------: | ------- | ------------------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

| Change | Delta |      % |  Samples | Callee                      | Location           |
| -----: | ----: | -----: | -------: | --------------------------- | ------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change | Delta |      % |  Samples | Callee  | Location           |
| -----: | ----: | -----: | -------: | ------- | ------------------ |
| -54.8% |  -115 | 100.0% | 210 → 95 | `run()` | `java.lang.Thread` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `Thread::call_run` (`libjvm.dylib`) ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |    +3 |  0.0% → 0.1% |   0 → 3 | `PhaseIdealLoop::Dominators` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +200.0% |    +2 | <0.1% → 0.1% |   1 → 3 | `MergeMemNode::Ideal` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `Matcher::Label_Root` (`libjvm.dylib`) ← `Matcher::Label_Root` ← `Matcher::Label_Root` ← `Matcher::match_tree` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `IndexSetIterator::advance_and_next` (`libjvm.dylib`) ← `PhaseChaitin::Simplify` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `DebugInformationRecorder::describe_scope` (`libjvm.dylib`) ← `NonSafepointEmitter::emit_non_safepoint` ← `NonSafepointEmitter::observe_instruction` ← `PhaseOutput::fill_buffer` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1ParScanThreadState::do_copy_to_survivor_space` ← `G1ParScanThreadState::trim_queue_to_threshold` ← `G1ScanHRForRegionClosure::scan_memregion` ← `void G1ScanHRForRegionClosure::ChunkScanner::on_dirty_cards<G1ScanHRForRegionClosure::scan_heap_roots(HeapRegion*)::'lambda'(unsigned char*, unsigned char*)>` ← `G1ScanHRForRegionClosure::scan_heap_roots` ← `G1ScanHRForRegionClosure::do_heap_region` ← `G1RemSet::scan_heap_roots` ← `G1EvacuateRegionsTask::scan_roots` ← `G1EvacuateRegionsBaseTask::work` ← `WorkerThread::run`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `MethodLiveness::get_liveness_at` (`libjvm.dylib`) ← `LIRGenerator::state_for` ← `LIRGenerator::do_ProfileInvoke` ← `LIRGenerator::block_do` ← `BlockList::iterate_forward` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +2 |  0.0% → 0.1% |   0 → 2 | `PhaseCFG::schedule_early` (`libjvm.dylib`) ← `PhaseCFG::global_code_motion` ← `PhaseCFG::do_global_code_motion` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +100.0% |    +1 | <0.1% → 0.1% |   1 → 2 | `PhaseIdealLoop::is_dominator` (`libjvm.dylib`) ← `PhaseIdealLoop::compute_early_ctrl` ← `PhaseIdealLoop::try_sink_out_of_loop` ← `PhaseIdealLoop::split_if_with_blocks_post` ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MultiNode::is_CFG` (`libjvm.dylib`) ← `PhaseIdealLoop::split_if_with_blocks` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `tlv_get_addr` (`libdyld.dylib`) ← `TypePtr::xmeet` (`libjvm.dylib`) ← `TypePtr::xmeet` ← `Parse::sharpen_type_after_if` ← `Parse::adjust_map_after_if` ← `Parse::do_ifnull` ← `Parse::do_one_bytecode` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `IdealLoopTree::record_for_igvn` (`libjvm.dylib`) ← `PhaseIdealLoop::do_peeling` ← `IdealLoopTree::iteration_split_impl` ← `IdealLoopTree::iteration_split` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ciEnv::get_method_by_index_impl` (`libjvm.dylib`) ← `ciMethod::get_method_at_bci` ← `DirectCallGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `PredictedCallGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `NTarjan::DFS` (`libjvm.dylib`) ← `PhaseIdealLoop::Dominators` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `pthread_mutex_lock` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::operator new` ← `Arena::grow` ← `JVMState::clone_shallow` ← `JVMState::clone_deep` ← `GraphKit::add_safepoint_edges` ← `GraphKit::set_output_for_allocation` ← `Parse::do_new` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Parse::do_call` ← `Parse::do_one_block` ← `Parse::do_all_blocks` ← `Parse::Parse` ← `ParseGenerator::generate` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhiNode::hash` (`libjvm.dylib`) ← `PhaseIterGVN::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `NodeHash::hash_find_insert` (`libjvm.dylib`) ← `PhaseIterGVN::transform_old` ← `PhaseIterGVN::optimize` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change |  Delta |             % |     Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -55.2% | -1,184 | 33.6% → 33.0% | 2,143 → 959 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                       |
|  -61.9% |   -287 |   7.3% → 6.1% |   464 → 177 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                     |
|  -56.9% |   -120 |   3.3% → 3.1% |    211 → 91 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                |
|  -56.5% |   -117 |   3.2% → 3.1% |    207 → 90 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                       |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                               |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                   |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                 |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                  |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                             |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                          |
|  -54.8% |   -115 |          3.3% |    210 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                          |
|  -54.8% |   -115 |          3.3% |    210 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`) |
|  -54.8% |   -115 |          3.3% |    210 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                         |
|  -54.5% |   -115 |          3.3% |    211 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                               |
|  -54.3% |   -114 |          3.3% |    210 → 96 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                             |
|  -54.3% |   -113 |          3.3% |    208 → 95 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                         |
| removed |     -5 |   0.1% → 0.0% |       5 → 0 | `Pipeline_Use::full_latency` (`libjvm.dylib`) ← `Scheduling::AddNodeToBundle` ← `Scheduling::DoScheduling` ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                           |
|  -66.7% |     -4 |          0.1% |       6 → 2 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                      |
| removed |     -4 |   0.1% → 0.0% |       4 → 0 | `__psynch_mutexwait` (`libsystem_kernel.dylib`) ← `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`) ← `ThreadCritical::ThreadCritical` (`libjvm.dylib`) ← `Chunk::chop` ← `Chunk::next_chop` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`               |
