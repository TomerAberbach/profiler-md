# Sampling profile

Collected 5,073 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.7% |   4,806 |
| Compiler         |  3.8% |     195 |
| Ours             |  1.0% |      50 |
| Standard library |  0.4% |      18 |
| JIT              |  0.1% |       4 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 4,207 samples (82.9%) thread_start at libsystem_pthread.dylib
│   └── 4,207 samples (82.9%) _pthread_start
│       ├── 4,032 samples (79.5%) thread_native_entry at libjvm.dylib
│       │   └── 4,032 samples (79.5%) Thread::call_run
│       │       ├── 1,665 samples (32.8%) WorkerThread::run
│       │       │   ├── 1,650 samples (32.5%, self 36.3% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       │   └── … 3 samples (0.1%) swtch_pri at libsystem_kernel.dylib
│       │       ├── 1,497 samples (29.5%) JavaThread::thread_main_inner
│       │       │   ├── 629 samples (12.4%) CompileBroker::compiler_thread_loop
│       │       │   │   ├── 334 samples (6.6%) CompileBroker::invoke_compiler_on_method
│       │       │   │   │   ├── 246 samples (4.8%) C2Compiler::compile_method
│       │       │   │   │   │   └── 245 samples (4.8%) Compile::Compile
│       │       │   │   │   │       ├── 131 samples (2.6%) Compile::Code_Gen
│       │       │   │   │   │       │   ├── 62 samples (1.2%) PhaseChaitin::Register_Allocate
│       │       │   │   │   │       │   │   ├── 10 samples (0.2%) PhaseChaitin::Split
│       │       │   │   │   │       │   │   ├── 8 samples (0.2%) PhaseChaitin::post_allocate_copy_removal
│       │       │   │   │   │       │   │   │   └── 5 samples (0.1%) PhaseChaitin::elide_copy
│       │       │   │   │   │       │   │   ├── 8 samples (0.2%) PhaseChaitin::build_ifg_physical
│       │       │   │   │   │       │   │   ├── 7 samples (0.1%) PhaseLive::compute
│       │       │   │   │   │       │   │   └── 4 samples (0.1%) PhaseChaitin::gather_lrg_masks
│       │       │   │   │   │       │   ├── … 7 samples (0.1%) Arena::contains at libjvm.dylib
│       │       │   │   │   │       │   └── … 6 samples (0.1%) PhaseCFG::schedule_local at libjvm.dylib
│       │       │   │   │   │       └── 114 samples (2.2%) 5 more callees, led by (1.2%) Compile::Optimize
│       │       │   │   │   └── … 76 samples (1.5%) Compilation::compile_java_method at libjvm.dylib
│       │       │   │   │       ├── … 9 samples (0.2%) IntervalWalker::walk_to at libjvm.dylib
│       │       │   │   │       └── 48 samples (0.9%) 3 more callees, led by (0.7%) Compilation::build_hir
│       │       │   │   └── … 287 samples (5.7%) PlatformMonitor::wait at libjvm.dylib
│       │       │   │       ├── 281 samples (5.5%, self 46.6% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │       │   │       └── … 6 samples (0.1%, self 1.3% globally) __psynch_mutexwait at libsystem_kernel.dylib
│       │       │   └── 868 samples (17.1%) 5 more callees, led by (3.4%) MonitorDeflationThread::monitor_deflation_thread_entry
│       │       ├── 522 samples (10.3%) ConcurrentGCThread::run
│       │       │   └── 522 samples (10.3%) 3 more callees, led by (3.4%) G1ConcurrentMarkThread::run_service
│       │       └── 348 samples (6.9%) 2 more callees, led by (3.4%) WatcherThread::run
│       └── … 174 samples (3.4%) __ulock_wait at libsystem_kernel.dylib
├── … 174 samples (3.4%) mach_msg2_trap at libsystem_kernel.dylib
├── 166 samples (3.3%) main(String[]) at org.jetbrains.kotlin.preloading.Preloader
│   └── 166 samples (3.3%) run(String[])
│       ├── 140 samples (2.8%) invoke(Object, Object[]) at java.lang.reflect.Method …
│       └── … 14 samples (0.3%) inflate_fast at libzip.dylib
└── 525 samples (10.3%) 6 more root frames, led by (3.4%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 46.6% |   2,365 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.3% |   1,839 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.4% |     174 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.4% |     174 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  1.3% |      67 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.3% |      14 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       7 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |       7 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       7 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       5 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
|  0.1% |       5 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`             |
|  0.1% |       5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       5 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       5 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
|  0.1% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |       4 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal`                                                                                                               | `libjvm.dylib`             |
|  0.1% |       3 | `PhaseCFG::schedule_local`                                                                                                                               | `libjvm.dylib`             |
|  0.1% |       3 | `Compile::disconnect_useless_nodes`                                                                                                                      | `libjvm.dylib`             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 46.6% |   2,365 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.3% |   1,839 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.4% |     174 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.4% |     174 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  1.3% |      67 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.3% |      14 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       7 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       7 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       5 | `swtch_pri`                                                                                                                                              | `libsystem_kernel.dylib`   |
|  0.1% |       5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       5 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.1% |       3 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`             |
|  0.1% |       3 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       3 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `semaphore_signal_trap`                                                                                                                                  | `libsystem_kernel.dylib`   |
| <0.1% |       2 | `Arena::grow`                                                                                                                                            | `libjvm.dylib`             |
| <0.1% |       2 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| <0.1% |       2 | `JavaFrameAnchor::make_walkable`                                                                                                                         | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                             | Location       |
| ----: | ------: | ---------------------------------------------------- | -------------- |
|  0.1% |       7 | `PhaseChaitin::Split`                                | `libjvm.dylib` |
|  0.1% |       5 | `PhaseChaitin::elide_copy`                           | `libjvm.dylib` |
|  0.1% |       5 | `IntervalWalker::walk_to`                            | `libjvm.dylib` |
|  0.1% |       4 | `PhaseChaitin::gather_lrg_masks`                     | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::post_allocate_copy_removal`           | `libjvm.dylib` |
|  0.1% |       3 | `PhaseCFG::schedule_local`                           | `libjvm.dylib` |
|  0.1% |       3 | `Compile::disconnect_useless_nodes`                  | `libjvm.dylib` |
|  0.1% |       3 | `IndexSetIterator::advance_and_next`                 | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::build_ifg_physical`                   | `libjvm.dylib` |
| <0.1% |       2 | `PhaseLive::compute`                                 | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::build_loop_early`                   | `libjvm.dylib` |
| <0.1% |       2 | `Node_Backward_Iterator::next`                       | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIterGVN::transform_old`                        | `libjvm.dylib` |
| <0.1% |       2 | `Node_Array::insert`                                 | `libjvm.dylib` |
| <0.1% |       2 | `PhaseCFG::schedule_pinned_nodes`                    | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::Dominators`                         | `libjvm.dylib` |
| <0.1% |       2 | `RegMask::clear_to_sets`                             | `libjvm.dylib` |
| <0.1% |       2 | `MergeMemNode::Ideal`                                | `libjvm.dylib` |
| <0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` | `libjvm.dylib` |
| <0.1% |       2 | `ProjNode::Opcode`                                   | `libjvm.dylib` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.0% |   1,845 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |     174 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |     173 | `Parker::park`          | `libjvm.dylib`           |
|  7.3% |     173 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.7% |   1,650 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.5% |     174 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       9 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       6 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     174 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     174 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      67 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      14 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 66.7% |       6 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 11.1% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |
| 11.1% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |
| 11.1% |       1 | `LinkResolver::resolve_method`          | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::xform` | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 42.9% |       3 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |
| 28.6% |       2 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 28.6% |       2 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 80.0% |       4 | `TaskTerminator::offer_termination` | `libjvm.dylib` |
| 20.0% |       1 | `CompileBroker::make_thread`        | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                                                   | Location       |
| ----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 20.0% |       1 | `PhaseLive::compute`                                                     | `libjvm.dylib` |
| 20.0% |       1 | `GraphKit::cast_not_null`                                                | `libjvm.dylib` |
| 20.0% |       1 | `ciBytecodeStream::get_declared_method_holder`                           | `libjvm.dylib` |
| 20.0% |       1 | `GrowableArrayWithAllocator<LIR_Op*, GrowableArray<LIR_Op*>>::expand_to` | `libjvm.dylib` |
| 20.0% |       1 | `TypeOopPtr::make_from_klass_common`                                     | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 20.0% |       1 | `Node::clone`                             | `libjvm.dylib`  |
| 20.0% |       1 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 20.0% |       1 | `SharedRuntime::resolve_sub_helper`       | `libjvm.dylib`  |
| 20.0% |       1 | `PhaseOutput::Output`                     | `libjvm.dylib`  |
| 20.0% |       1 | `Type_Array::grow`                        | `libjvm.dylib`  |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 60.0% |       3 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::allocate_registers` | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 80.0% |       4 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 20.0% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseCFG::schedule_local` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       3 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Compile::disconnect_useless_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                                   | Location       |
| -----: | ------: | ---------------------------------------- | -------------- |
| 100.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `vmSymbols::find_sid` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       3 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 33.3% |       1 | `Unsafe_AllocateInstance`         | `libjvm.dylib` |
| 33.3% |       1 | `InterpreterRuntime::ldc`         | `libjvm.dylib` |
| 33.3% |       1 | `InterpreterRuntime::resolve_ldc` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 66.7% |       2 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 33.3% |       1 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 66.7% |       2 | `WorkerThreads::run_task` | `libjvm.dylib` |
| 33.3% |       1 | `WorkerThread::run`       | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 33.3% |       1 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
| 33.3% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Arena::grow` (`libjvm.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 50.0% |       1 | `PhaseOutput::Output` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIFG::init`      | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Type::hashcons` | `libjvm.dylib` |

##### `JavaFrameAnchor::make_walkable` (`libjvm.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 50.0% |       1 | `ciBytecodeStream::get_field`       | `libjvm.dylib` |
| 50.0% |       1 | `SharedRuntime::resolve_sub_helper` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       2 | `PhaseIterGVN::optimize` | `libjvm.dylib` |

##### `Node_Array::insert` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 50.0% |       1 | `PhaseCFG::schedule_node_into_block` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseCFG::sched_call`               | `libjvm.dylib` |

##### `PhaseCFG::schedule_pinned_nodes` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `RegMask::clear_to_sets` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 50.0% |       1 | `PhaseChaitin::Select`            | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `MergeMemNode::Ideal` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `ProjNode::Opcode` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `ConnectionGraph::add_final_edges` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseIterGVN::transform_old`      | `libjvm.dylib` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.9% |   4,207 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.9% |   4,207 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.5% |   4,032 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.5% |   4,032 | `thread_native_entry`                      | `libjvm.dylib`            |
| 46.6% |   2,365 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 36.5% |   1,852 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 36.3% |   1,839 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.8% |   1,665 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.5% |   1,497 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.3% |   1,384 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.4% |     629 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.3% |     522 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.2% |     469 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     348 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     348 | `main`                                     | `java`                    |
|  6.6% |     334 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  5.8% |     292 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  4.8% |     246 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  4.8% |     245 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.5% |     176 | `unknown`                                  | `<unknown>`               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.9% |   4,207 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.9% |   4,207 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.5% |   4,032 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.5% |   4,032 | `thread_native_entry`                   | `libjvm.dylib`            |
| 46.6% |   2,365 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 36.5% |   1,852 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 36.3% |   1,839 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 32.8% |   1,665 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.5% |   1,497 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 27.3% |   1,384 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.3% |     522 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  9.2% |     469 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.9% |     348 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.9% |     348 | `main`                                  | `java`                    |
|  3.5% |     176 | `unknown`                               | `<unknown>`               |
|  3.4% |     174 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.4% |     174 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.4% |     174 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.4% |     174 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |
|  3.4% |     174 | `__CFRunLoopRun`                        | `CoreFoundation`          |

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 12.4% |     629 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
|  6.6% |     334 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
|  5.8% |     292 | `CompileQueue::get`                         | `libjvm.dylib` |
|  4.8% |     246 | `C2Compiler::compile_method`                | `libjvm.dylib` |
|  4.8% |     245 | `Compile::Compile`                          | `libjvm.dylib` |
|  2.6% |     131 | `Compile::Code_Gen`                         | `libjvm.dylib` |
|  1.6% |      80 | `Compilation::compile_method`               | `libjvm.dylib` |
|  1.6% |      80 | `Compilation::Compilation`                  | `libjvm.dylib` |
|  1.5% |      76 | `Compilation::compile_java_method`          | `libjvm.dylib` |
|  1.2% |      62 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  1.2% |      59 | `Compile::Optimize`                         | `libjvm.dylib` |
|  0.7% |      33 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  0.6% |      30 | `Matcher::match`                            | `libjvm.dylib` |
|  0.6% |      28 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  0.6% |      28 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  0.5% |      27 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  0.5% |      26 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  0.5% |      26 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  0.5% |      23 | `Matcher::xform`                            | `libjvm.dylib` |
|  0.5% |      23 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   4,207 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   4,032 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   4,032 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.0% |   1,845 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.4% |     174 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.3% |     173 | `Parker::park`          | `libjvm.dylib`           |
|  7.3% |     173 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 74.7% |   1,384 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 25.3% |     468 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.7% |   1,650 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.5% |     174 | `os::signal_wait`                | `libjvm.dylib` |
|  0.5% |       9 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       6 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,665 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,497 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.6% |     174 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.6% |     174 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| 12.6% |     174 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| 12.6% |     174 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.5% |     173 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     629 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     522 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 61.4% |     288 | `CompileQueue::get`               | `libjvm.dylib` |
| 37.1% |     174 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.5% |       7 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     348 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |     174 | `unknown`    | `<unknown>`    |
| 50.0% |     174 | `apple_main` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     334 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |     292 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |     246 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |     245 | `C2Compiler::compile_method` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|    % | Samples | Caller                  | Location                 |
| ---: | ------: | ----------------------- | ------------------------ |
| 0.6% |       1 | `unknown`               | `<unknown>`              |
| 0.6% |       1 | `Profiler::dlopen_hook` | `libasyncProfiler.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     174 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Caller     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |     174 | `mach_msg` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |     174 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Caller           | Location         |
| -----: | ------: | ---------------- | ---------------- |
| 100.0% |     174 | `__CFRunLoopRun` | `CoreFoundation` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Caller                 | Location         |
| -----: | ------: | ---------------------- | ---------------- |
| 100.0% |     174 | `CFRunLoopRunSpecific` | `CoreFoundation` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     131 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      80 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      80 | `Compiler::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      76 | `Compilation::compile_method` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      62 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      59 | `Compile::Compile` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      33 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |      30 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.0% |      14 | `Compile::Optimize`       | `libjvm.dylib` |
| 50.0% |      14 | `Compile::optimize_loops` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      28 | `Compilation::compile_java_method` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      27 | `IRScope::IRScope` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |      26 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |      26 | `GraphBuilder::GraphBuilder`    | `libjvm.dylib` |
|  57.7% |      15 | `GraphBuilder::try_inline_full` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |      23 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      23 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   4,032 | `thread_native_entry` | `libjvm.dylib` |
|  4.1% |     174 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   4,207 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.3% |   1,665 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.1% |   1,497 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 12.9% |     522 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.3% |     174 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.3% |     174 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   4,032 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.6% |   1,845 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.4% |       7 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.1% |   1,650 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.4% |       6 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.2% |       4 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.2% |       3 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMRemarkTask::work`            | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 42.0% |     629 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.6% |     174 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.6% |     174 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.6% |     174 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.6% |     173 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,384 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 53.1% |     334 | `CompileBroker::invoke_compiler_on_method`     | `libjvm.dylib` |
| 46.4% |     292 | `CompileQueue::get`                            | `libjvm.dylib` |
|  0.2% |       1 | `Mutex::lock`                                  | `libjvm.dylib` |
|  0.2% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`      | `libjvm.dylib` |
|  0.2% |       1 | `CompileBroker::possibly_add_compiler_threads` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     174 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     174 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     174 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                                                                        | Location       |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 99.8% |     468 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  0.2% |       1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     174 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     174 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     348 | `JLI_Launch` | `libjli.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 73.7% |     246 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 24.0% |      80 | `Compiler::compile_method`      | `libjvm.dylib` |
|  1.2% |       4 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.6% |       2 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |
|  0.6% |       2 | `CompilationLog::log_compile`   | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 98.6% |     288 | `Monitor::wait`                  | `libjvm.dylib` |
|  1.0% |       3 | `Mutex::lock`                    | `libjvm.dylib` |
|  0.3% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 99.6% |     245 | `Compile::Compile`  | `libjvm.dylib` |
|  0.4% |       1 | `Compile::~Compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 53.5% |     131 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 24.1% |      59 | `Compile::Optimize`                      | `libjvm.dylib` |
| 18.4% |      45 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  2.4% |       6 | `CallGenerator::for_inline`              | `libjvm.dylib` |
|  1.2% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                           | Location                                                                          |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------------------- |
| 98.9% |     174 | `main`                           | `java`                                                                            |
|  0.6% |       1 | `unknown`                        | `<unknown>`                                                                       |
|  0.6% |       1 | `visitElement(FirElement, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |     174 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     174 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |     174 | `mach_msg` | `libsystem_kernel.dylib` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Callee                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |     174 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 47.3% |      62 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 22.9% |      30 | `Matcher::match`                  | `libjvm.dylib` |
| 13.7% |      18 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 12.2% |      16 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.5% |       2 | `PhaseCFG::PhaseCFG`              | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 95.0% |      76 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  2.5% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |
|  2.5% |       2 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      80 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 43.4% |      33 | `Compilation::build_hir`       | `libjvm.dylib` |
| 36.8% |      28 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 18.4% |      14 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.3% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 16.1% |      10 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 12.9% |       8 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 12.9% |       8 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 11.3% |       7 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  6.5% |       4 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 23.7% |      14 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 23.7% |      14 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 16.9% |      10 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| 11.9% |       7 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  8.5% |       5 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 81.8% |      27 | `IR::IR`                                     | `libjvm.dylib` |
|  9.1% |       3 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  6.1% |       2 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  3.0% |       1 | `Invoke::visit`                              | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 76.7% |      23 | `Matcher::xform`                              | `libjvm.dylib` |
| 10.0% |       3 | `Matcher::find_shared`                        | `libjvm.dylib` |
|  3.3% |       1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  3.3% |       1 | `Arena::destruct_contents`                    | `libjvm.dylib` |
|  3.3% |       1 | `ConNode::Opcode`                             | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 82.1% |      23 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 17.9% |       5 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 82.1% |      23 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 17.9% |       5 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 96.3% |      26 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |
|  3.7% |       1 | `BlockBegin::iterate_preorder`     | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 88.5% |      23 | `GraphBuilder::invoke`        | `libjvm.dylib` |
| 11.5% |       3 | `GraphBuilder::access_field`  | `libjvm.dylib` |
|  3.8% |       1 | `GraphBuilder::load_constant` | `libjvm.dylib` |
|  3.8% |       1 | `BlockBegin::try_merge`       | `libjvm.dylib` |
|  3.8% |       1 | `GraphBuilder::method_return` | `libjvm.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location                   |
| -----: | ------: | ------------------------------------------- | -------------------------- |
| 100.0% |      26 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib`             |
|   3.8% |       1 | `_platform_memset`                          | `libsystem_platform.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 60.9% |      14 | `Matcher::match_tree`                 | `libjvm.dylib` |
| 30.4% |       7 | `Arena::contains`                     | `libjvm.dylib` |
|  4.3% |       1 | `SharedRuntime::c_calling_convention` | `libjvm.dylib` |
|  4.3% |       1 | `Node::clone`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 30.4% |       7 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 13.0% |       3 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 13.0% |       3 | `IdealLoopTree::loop_predication`      | `libjvm.dylib` |
| 13.0% |       3 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 13.0% |       3 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.5% |   1,650 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  5.5% |     281 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.4% |     174 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% |     174 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.4% |     174 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.4% |     174 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.4% |     174 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.4% |     174 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |     174 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.4% |     174 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.4% |     173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.4% |     173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  3.4% |     173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% |     173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |     173 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.3% |     169 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  3.3% |     169 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% |      13 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.1% |       7 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                      |
|  0.1% |       7 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
