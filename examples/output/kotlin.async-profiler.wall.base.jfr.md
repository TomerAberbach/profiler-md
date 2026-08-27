# Sampling profile

Collected 2,725 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.5% |   2,576 |
| Compiler         |  3.8% |     103 |
| Ours             |  1.0% |      27 |
| Standard library |  0.3% |       8 |
| Unknown          |  0.3% |       8 |
| JIT              |  0.1% |       3 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.7% |   1,299 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 35.9% |     979 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.4% |      94 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.4% |      94 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.3% |       8 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.3% |       8 | `(anonymous)`                                                                                                                                            | `<unknown>`                |
|  0.2% |       6 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.2% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.2% |       5 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.2% |       5 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       4 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
|  0.1% |       4 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
|  0.1% |       4 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       3 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       3 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       3 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
|  0.1% |       3 | `ValueStack::values_do`                                                                                                                                  | `libjvm.dylib`             |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       2 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       2 | `Matcher::xform`                                                                                                                                         | `libjvm.dylib`             |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.7% |   1,299 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 35.9% |     979 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.4% |      94 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.4% |      94 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.3% |       8 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       6 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.2% |       5 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.2% |       5 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.2% |       5 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       4 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
|  0.1% |       4 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       3 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       3 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  0.1% |       2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       2 | `Symbol::Symbol`                                                                                                                                         | `libjvm.dylib`             |
|  0.1% |       2 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`             |
|  0.1% |       2 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |
|  0.1% |       2 | `NativeNMethodBarrier::NativeNMethodBarrier`                                                                                                             | `libjvm.dylib`             |
|  0.1% |       2 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
|  0.1% |       2 | `Symbol::increment_refcount`                                                                                                                             | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                           | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
|  0.1% |       4 | `PhaseChaitin::gather_lrg_masks`                   | `libjvm.dylib` |
|  0.1% |       3 | `ciObjectFactory::get_metadata`                    | `libjvm.dylib` |
|  0.1% |       3 | `ValueStack::values_do`                            | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_early`                 | `libjvm.dylib` |
|  0.1% |       2 | `PhaseAggressiveCoalesce::insert_copies`           | `libjvm.dylib` |
|  0.1% |       2 | `Matcher::xform`                                   | `libjvm.dylib` |
|  0.1% |       2 | `PhaseCFG::partial_latency_of_defs`                | `libjvm.dylib` |
|  0.1% |       2 | `OopFlow::compute_reach`                           | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::Split`                              | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::Dominators`                       | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIFG::re_insert`                              | `libjvm.dylib` |
|  0.1% |       2 | `Node::is_CFG`                                     | `libjvm.dylib` |
|  0.1% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
|  0.1% |       2 | `PhaseLive::compute`                               | `libjvm.dylib` |
|  0.1% |       2 | `OopMapValue::write_on`                            | `libjvm.dylib` |
|  0.1% |       2 | `LinearScan::append_scope_value`                   | `libjvm.dylib` |
|  0.1% |       2 | `IntervalWalker::walk_to`                          | `libjvm.dylib` |
|  0.1% |       2 | `LinearScan::build_intervals`                      | `libjvm.dylib` |
| <0.1% |       1 | `ciObjectFactory::get_symbol`                      | `libjvm.dylib` |
| <0.1% |       1 | `ciTypeFlow::df_flow_types`                        | `libjvm.dylib` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.4% |   1,018 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |      94 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |      94 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |      93 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 90.0% |     881 | `WorkerThread::run`       | `libjvm.dylib` |
|  9.6% |      94 | `os::signal_wait`         | `libjvm.dylib` |
|  0.4% |       4 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      94 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      94 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       6 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 60.0% |       3 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 40.0% |       2 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 80.0% |       4 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 20.0% |       1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       5 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 50.0% |       2 | `nmethod::nmethod`                             | `libjvm.dylib` |
| 25.0% |       1 | `InlineCacheBuffer::create_transition_stub`    | `libjvm.dylib` |
| 25.0% |       1 | `CompiledDirectStaticCall::set_to_interpreted` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 25.0% |       1 | `Matcher::xform`                     | `libjvm.dylib` |
| 25.0% |       1 | `Matcher::ReduceInst`                | `libjvm.dylib` |
| 25.0% |       1 | `LinearScan::do_linear_scan`         | `libjvm.dylib` |
| 25.0% |       1 | `LinearScanWalker::LinearScanWalker` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 33.3% |       1 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
| 33.3% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
| 33.3% |       1 | `Unsafe_AllocateInstance`           | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 33.3% |       1 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 33.3% |       1 | `PhaseIdealLoop::compute_early_ctrl` | `libjvm.dylib` |
| 33.3% |       1 | `ciMethod::get_method_blocks`        | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 66.7% |       2 | `ciBytecodeStream::get_method` | `libjvm.dylib` |
| 33.3% |       1 | `ciMethodData::load_data`      | `libjvm.dylib` |

##### `ValueStack::values_do` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 33.3% |       1 | `BlockBegin::state_values_do`    | `libjvm.dylib` |
| 33.3% |       1 | `Instruction::state_values_do`   | `libjvm.dylib` |
| 33.3% |       1 | `SubstitutionResolver::block_do` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       2 | `Matcher::match` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 50.0% |       1 | `inflate`          | `libzip.dylib` |
| 50.0% |       1 | `Node_Array::grow` | `libjvm.dylib` |

##### `Symbol::Symbol` (`libjvm.dylib`)

|     % | Samples | Caller                                                                                                                                                                                                                                                   | Location       |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| 50.0% |       1 | `SymbolTable::new_symbols`                                                                                                                                                                                                                               | `libjvm.dylib` |
| 50.0% |       1 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>` | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       1 | `InstanceKlass::set_package`   | `libjvm.dylib` |
| 50.0% |       1 | `SignatureStream::find_symbol` | `libjvm.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|      % | Samples | Caller                                           | Location       |
| -----: | ------: | ------------------------------------------------ | -------------- |
| 100.0% |       2 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |

##### `NativeNMethodBarrier::NativeNMethodBarrier` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 50.0% |       1 | `BarrierSetNMethod::guard_value`     | `libjvm.dylib` |
| 50.0% |       1 | `BarrierSetNMethod::set_guard_value` | `libjvm.dylib` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `Symbol::increment_refcount` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `PlaceholderTable::get_entry` | `libjvm.dylib` |
| 50.0% |       1 | `ciSymbol::ciSymbol`          | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `OopFlow::compute_reach` (`libjvm.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       2 | `PhaseOutput::BuildOopMaps` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIFG::re_insert` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Select` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `OopMapValue::write_on` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `OopMap::set_oop`             | `libjvm.dylib` |
| 50.0% |       1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `LinearScan::append_scope_value` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       2 | `IntervalWalker::walk_to` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       2 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `ciObjectFactory::get_symbol` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `ciEnv::get_klass_by_index_impl` | `libjvm.dylib` |

##### `ciTypeFlow::df_flow_types` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       1 | `ciTypeFlow::flow_types` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.6% |   2,251 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.6% |   2,251 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.1% |   2,156 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.1% |   2,156 | `thread_native_entry`                      | `libjvm.dylib`            |
| 47.7% |   1,299 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.4% |   1,019 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.9% |     979 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.6% |     887 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.3% |     799 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.4% |     747 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.1% |     330 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.3% |     282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
| 10.0% |     272 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     188 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     188 | `main`                                     | `java`                    |
|  6.5% |     177 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.6% |     153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.6% |      99 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.6% |      99 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.5% |      95 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.6% |   2,251 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.6% |   2,251 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.1% |   2,156 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.1% |   2,156 | `thread_native_entry`                   | `libjvm.dylib`            |
| 47.7% |   1,299 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 37.4% |   1,019 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.9% |     979 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 32.6% |     887 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.3% |     799 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 27.4% |     747 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.3% |     282 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
| 10.0% |     272 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.9% |     188 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.9% |     188 | `main`                                  | `java`                    |
|  3.5% |      95 | `unknown`                               | `<unknown>`               |
|  3.4% |      94 | `mach_msg2_trap`                        | `libsystem_kernel.dylib`  |
|  3.4% |      94 | `mach_msg_overwrite`                    | `libsystem_kernel.dylib`  |
|  3.4% |      94 | `mach_msg`                              | `libsystem_kernel.dylib`  |
|  3.4% |      94 | `__CFRunLoopServiceMachPort`            | `CoreFoundation`          |
|  3.4% |      94 | `__CFRunLoopRun`                        | `CoreFoundation`          |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.1% |     330 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.5% |     177 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.6% |     153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.6% |      99 | `Compile::Compile`                         | `libjvm.dylib` |
|  3.6% |      99 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  1.9% |      52 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.9% |      52 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.8% |      49 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.7% |      47 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  1.4% |      37 | `Compile::Optimize`                        | `libjvm.dylib` |
|  0.8% |      22 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.7% |      19 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.7% |      19 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.7% |      18 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.7% |      18 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.5% |      13 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.5% |      13 | `Matcher::match`                           | `libjvm.dylib` |
|  0.5% |      13 | `GraphBuilder::GraphBuilder`               | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   2,156 | `thread_native_entry` | `libjvm.dylib` |
|  4.2% |      94 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,251 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.1% |     887 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.1% |     799 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.1% |     282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.4% |      94 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.4% |      94 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,156 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   1,018 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.3% |     881 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.5% |       4 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.1% |       1 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       1 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.3% |     330 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |      94 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
| 11.8% |      94 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.8% |      94 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.8% |      94 | `signal_thread_entry`                                    | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     747 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 53.6% |     177 | `CompileQueue::get`                        | `libjvm.dylib` |
| 46.4% |     153 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      94 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |      94 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      94 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     272 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      94 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      94 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     188 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     177 | `Monitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 64.7% |      99 | `C2Compiler::compile_method`  | `libjvm.dylib` |
| 34.6% |      53 | `Compiler::compile_method`    | `libjvm.dylib` |
|  0.7% |       1 | `CompilationLog::log_compile` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 49.5% |      49 | `Compile::Code_Gen`         | `libjvm.dylib` |
| 37.4% |      37 | `Compile::Optimize`         | `libjvm.dylib` |
|  9.1% |       9 | `ParseGenerator::generate`  | `libjvm.dylib` |
|  4.0% |       4 | `CallGenerator::for_inline` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      99 | `Compile::Compile` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee    | Location    |
| ----: | ------: | --------- | ----------- |
| 98.9% |      94 | `main`    | `java`      |
|  1.1% |       1 | `unknown` | `<unknown>` |

##### `mach_msg_overwrite` (`libsystem_kernel.dylib`)

|      % | Samples | Callee           | Location                 |
| -----: | ------: | ---------------- | ------------------------ |
| 100.0% |      94 | `mach_msg2_trap` | `libsystem_kernel.dylib` |

##### `mach_msg` (`libsystem_kernel.dylib`)

|      % | Samples | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      94 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__CFRunLoopServiceMachPort` (`CoreFoundation`)

|      % | Samples | Callee     | Location                 |
| -----: | ------: | ---------- | ------------------------ |
| 100.0% |      94 | `mach_msg` | `libsystem_kernel.dylib` |

##### `__CFRunLoopRun` (`CoreFoundation`)

|      % | Samples | Callee                       | Location         |
| -----: | ------: | ---------------------------- | ---------------- |
| 100.0% |      94 | `__CFRunLoopServiceMachPort` | `CoreFoundation` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 90.4% |      47 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  7.7% |       4 | `ciEnv::register_method`           | `libjvm.dylib` |
|  1.9% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      52 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 44.9% |      22 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 26.5% |      13 | `Matcher::match`                  | `libjvm.dylib` |
| 12.2% |       6 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 10.2% |       5 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  4.1% |       2 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 40.4% |      19 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 38.3% |      18 | `Compilation::build_hir`       | `libjvm.dylib` |
| 19.1% |       9 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  2.1% |       1 | `ciMethod::ensure_method_data` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 27.0% |      10 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 24.3% |       9 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 21.6% |       8 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  8.1% |       3 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |
|  5.4% |       2 | `PhaseRenumberLive::PhaseRenumberLive` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 18.2% |       4 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
| 18.2% |       4 | `PhaseChaitin::Select`                   | `libjvm.dylib` |
| 13.6% |       3 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
|  9.1% |       2 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
|  9.1% |       2 | `PhaseLive::compute`                     | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.5% |      17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 10.5% |       2 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 94.7% |      18 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
|  5.3% |       1 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 72.2% |      13 | `IR::IR`                                     | `libjvm.dylib` |
| 22.2% |       4 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  5.6% |       1 | `RangeCheckElimination::eliminate`           | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location        |
| ----: | ------: | --------------------------------------------- | --------------- |
| 44.4% |       8 | `LinearScan::assign_reg_num`                  | `libjvm.dylib`  |
| 16.7% |       3 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib`  |
| 16.7% |       3 | `LinearScan::allocate_registers`              | `libjvm.dylib`  |
| 16.7% |       3 | `LinearScan::build_intervals`                 | `libjvm.dylib`  |
|  5.6% |       1 | `tlv_get_addr`                                | `libdyld.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 17.6% |       3 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.6% |       3 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 17.6% |       3 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 11.8% |       2 | `Node::is_CFG`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 92.3% |      12 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|  7.7% |       1 | `Type::singleton`             | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 69.2% |       9 | `Matcher::xform`                              | `libjvm.dylib` |
|  7.7% |       1 | `Node_Array::grow`                            | `libjvm.dylib` |
|  7.7% |       1 | `LoadBNode::Opcode`                           | `libjvm.dylib` |
|  7.7% |       1 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |
|  7.7% |       1 | `Matcher::find_shared`                        | `libjvm.dylib` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 92.3% |      12 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  7.7% |       1 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.3% |     881 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.5% |     176 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.4% |      94 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      94 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.4% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.4% |      94 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  3.3% |      91 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |       7 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.1% |       4 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                         |
|  0.1% |       2 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                 |
