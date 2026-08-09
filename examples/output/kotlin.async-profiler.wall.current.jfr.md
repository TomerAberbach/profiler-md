# Sampling profile

Collected 2,710 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 94.5% |   2,560 |
| Compiler          |  4.1% |     111 |
| Ours              |  0.9% |      24 |
| Standard library  |  0.3% |       9 |
| JIT               |  0.2% |       5 |
| Garbage collector | <0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                               | Location                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------------ | -------------------------------- |
| 48.0% |   1,300 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib`         |
| 36.1% |     978 | `semaphore_wait_trap`                                                                                  | `libsystem_kernel.dylib`         |
|  3.5% |      94 | `mach_msg2_trap`                                                                                       | `libsystem_kernel.dylib`         |
|  3.5% |      94 | `__ulock_wait`                                                                                         | `libsystem_kernel.dylib`         |
|  0.4% |      10 | `inflate_fast`                                                                                         | `libzip.dylib`                   |
|  0.2% |       6 | `SymbolTable::do_lookup`                                                                               | `libjvm.dylib`                   |
|  0.2% |       5 | `PhaseChaitin::Split`                                                                                  | `libjvm.dylib`                   |
|  0.1% |       4 | `tlv_get_addr`                                                                                         | `libdyld.dylib`                  |
|  0.1% |       4 | `I2C/C2I adapters(0xbb)`                                                                               | `<unknown>`                      |
|  0.1% |       4 | `LinearScanWalker::free_collect_inactive_fixed`                                                        | `libjvm.dylib`                   |
|  0.1% |       3 | `inflate_table`                                                                                        | `libzip.dylib`                   |
|  0.1% |       3 | `_platform_memmove`                                                                                    | `libsystem_platform.dylib`       |
|  0.1% |       3 | `PhaseChaitin::gather_lrg_masks`                                                                       | `libjvm.dylib`                   |
|  0.1% |       2 | `ClassVerifier::verify_method`                                                                         | `libjvm.dylib`                   |
|  0.1% |       2 | `SymbolTable::lookup_shared`                                                                           | `libjvm.dylib`                   |
|  0.1% |       2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`                   |
|  0.1% |       2 | `InstanceKlass::find_method_index`                                                                     | `libjvm.dylib`                   |
|  0.1% |       2 | `checkNotNullParameter(Object, String)`                                                                | `kotlin.jvm.internal.Intrinsics` |
|  0.1% |       2 | `pthread_jit_write_protect_np`                                                                         | `libsystem_pthread.dylib`        |
|  0.1% |       2 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib`         |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 48.0% |   1,300 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 36.1% |     978 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.5% |      94 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.5% |      94 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.4% |      10 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       6 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.1% |       4 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       3 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
|  0.1% |       3 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       2 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`             |
|  0.1% |       2 | `SymbolTable::lookup_shared`                                                                                                                             | `libjvm.dylib`             |
|  0.1% |       2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
|  0.1% |       2 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       2 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       2 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       2 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
|  0.1% |       2 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
|  0.1% |       2 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| <0.1% |       1 | `tiny_malloc_from_free_list`                                                                                                                             | `libsystem_malloc.dylib`   |
| <0.1% |       1 | `ClassVerifier::generate_code_data`                                                                                                                      | `libjvm.dylib`             |

##### Compiler

|     % | Samples | Function                                                           | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
|  0.2% |       5 | `PhaseChaitin::Split`                                              | `libjvm.dylib` |
|  0.1% |       4 | `LinearScanWalker::free_collect_inactive_fixed`                    | `libjvm.dylib` |
|  0.1% |       3 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib` |
|  0.1% |       2 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  0.1% |       2 | `RegionNode::is_unreachable_from_root`                             | `libjvm.dylib` |
|  0.1% |       2 | `Matcher::Label_Root`                                              | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`                        | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal`               | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::compute_lca_of_uses`                              | `libjvm.dylib` |
|  0.1% |       2 | `Node::remove_dead_region`                                         | `libjvm.dylib` |
|  0.1% |       2 | `Node::dominates`                                                  | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
| <0.1% |       1 | `CodeSection::relocate`                                            | `libjvm.dylib` |
| <0.1% |       1 | `Matcher::find_shared`                                             | `libjvm.dylib` |
| <0.1% |       1 | `ciConstantPoolCache::get`                                         | `libjvm.dylib` |
| <0.1% |       1 | `MethodLiveness::get_liveness_at`                                  | `libjvm.dylib` |
| <0.1% |       1 | `ConnectionGraph::compute_escape`                                  | `libjvm.dylib` |
| <0.1% |       1 | `MultiNode::is_CFG`                                                | `libjvm.dylib` |
| <0.1% |       1 | `ciField::will_link`                                               | `libjvm.dylib` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:130` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.5% |   1,021 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.2% |      94 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |      93 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.1% |      92 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.7% |     877 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |      94 | `os::signal_wait`                | `libjvm.dylib` |
|  0.4% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.3% |       3 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

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
| 100.0% |      10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 83.3% |       5 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| 16.7% |       1 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 25.0% |       1 | `SignatureStream::find_symbol`                 | `libjvm.dylib` |
| 25.0% |       1 | `CompressedWriteStream::CompressedWriteStream` | `libjvm.dylib` |
| 25.0% |       1 | `ResourceBitMap::ResourceBitMap`               | `libjvm.dylib` |
| 25.0% |       1 | `PhaseChaitin::split_DEF`                      | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                          | Location                                                                           |
| ----: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 25.0% |       1 | `addTypeStatement(MutableFlow, TypeStatement)`                  | `org.jetbrains.kotlin.fir.resolve.dfa.LogicSystem`                                 |
| 25.0% |       1 | `accept(FirVisitor, Object)`                                    | `org.jetbrains.kotlin.fir.expressions.FirResolvedQualifier`                        |
| 25.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker` |
| 25.0% |       1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`   | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       4 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       3 | `inflate` | `libzip.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                          | Location            |
| ----: | ------: | ------------------------------- | ------------------- |
| 33.3% |       1 | `readBytes`                     | `libjava.dylib`     |
| 33.3% |       1 | `ImmutableOopMapBuilder::build` | `libjvm.dylib`      |
| 33.3% |       1 | `__vfprintf`                    | `libsystem_c.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       2 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       2 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                    | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 50.0% |       1 | `convertAnnotationsToFir(Iterable, FirSession, KtSourceElement, boolean)` | `org.jetbrains.kotlin.fir.java.JavaAnnotationsMappingKt`                    |
| 50.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirTypeRef)`                   | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirSuspendModifierChecker` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 50.0% |       1 | `Unsafe_AllocateInstance` | `libjvm.dylib` |
| 50.0% |       1 | `jni_GetStringUTFLength`  | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       2 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 50.0% |       1 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |
| 50.0% |       1 | `nmethod::nmethod`                            | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

|     % | Samples | Caller                                           | Location       |
| ----: | ------: | ------------------------------------------------ | -------------- |
| 50.0% |       1 | `encoding_for_logical_immediate`                 | `libjvm.dylib` |
| 50.0% |       1 | `Assembler::operand_valid_for_logical_immediate` | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::Simplify`           | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `RegionNode::is_unreachable_from_root` (`libjvm.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       2 | `RegionNode::is_unreachable_region` | `libjvm.dylib` |

##### `Matcher::Label_Root` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       2 | `Matcher::Label_Root` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseIdealLoop::dom_lca_for_get_late_ctrl_internal` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::compute_lca_of_uses` | `libjvm.dylib` |

##### `PhaseIdealLoop::compute_lca_of_uses` (`libjvm.dylib`)

|      % | Samples | Caller                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |

##### `Node::remove_dead_region` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 50.0% |       1 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
| 50.0% |       1 | `CallStaticJavaNode::Ideal`   | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       2 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `tiny_malloc_from_free_list` (`libsystem_malloc.dylib`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       1 | `szone_malloc_should_clear` | `libsystem_malloc.dylib` |

##### `ClassVerifier::generate_code_data` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `ClassVerifier::verify_method` | `libjvm.dylib` |

##### `CodeSection::relocate` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       1 | `MacroAssembler::far_jump` | `libjvm.dylib` |

##### `Matcher::find_shared` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       1 | `Matcher::match` | `libjvm.dylib` |

##### `ciConstantPoolCache::get` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |       1 | `ciEnv::get_field_by_index_impl` | `libjvm.dylib` |

##### `MethodLiveness::get_liveness_at` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `LIRGenerator::state_for` | `libjvm.dylib` |

##### `ConnectionGraph::compute_escape` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |

##### `MultiNode::is_CFG` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `PhaseIdealLoop::Dominators` | `libjvm.dylib` |

##### `ciField::will_link` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       1 | `ciBytecodeStream::get_field` | `libjvm.dylib` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.8% |   2,245 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.8% |   2,245 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.3% |   2,150 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.3% |   2,150 | `thread_native_entry`                      | `libjvm.dylib`            |
| 48.0% |   1,300 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.7% |   1,021 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 36.1% |     978 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.7% |     886 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.3% |     794 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.5% |     745 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.4% |     282 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
| 10.2% |     276 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     188 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     188 | `main`                                     | `java`                    |
|  6.6% |     180 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.4% |     147 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  3.8% |     103 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.8% |     103 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  3.5% |      96 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.8% |   2,245 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.8% |   2,245 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.3% |   2,150 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.3% |   2,150 | `thread_native_entry`                   | `libjvm.dylib`            |
| 48.0% |   1,300 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 37.7% |   1,021 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 36.1% |     978 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 32.7% |     886 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.3% |     794 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 27.5% |     745 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.4% |     282 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
| 10.2% |     276 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.9% |     188 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.9% |     188 | `main`                                  | `java`                    |
|  3.5% |      96 | `unknown`                               | `<unknown>`               |
|  3.5% |      94 | `PlatformEvent::park`                   | `libjvm.dylib`            |
|  3.5% |      94 | `ObjectMonitor::wait`                   | `libjvm.dylib`            |
|  3.5% |      94 | `ObjectSynchronizer::wait`              | `libjvm.dylib`            |
|  3.5% |      94 | `JVM_MonitorWait`                       | `libjvm.dylib`            |
|  3.5% |      94 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.1% |     327 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.6% |     180 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.4% |     147 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  3.8% |     103 | `Compile::Compile`                         | `libjvm.dylib` |
|  3.8% |     103 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  1.8% |      49 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.6% |      43 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.6% |      43 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.5% |      41 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.3% |      35 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  0.9% |      24 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.8% |      23 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.7% |      18 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
|  0.7% |      18 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.6% |      17 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      17 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.5% |      13 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.4% |      11 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.4% |      10 | `Matcher::match`                           | `libjvm.dylib` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   2,150 | `thread_native_entry` | `libjvm.dylib` |
|  4.2% |      94 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,245 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.2% |     886 | `WorkerThread::run`             | `libjvm.dylib` |
| 36.9% |     794 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.1% |     282 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.4% |      94 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.4% |      94 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,150 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |   1,021 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.0% |     877 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.6% |       5 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.2% |       2 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
|  0.2% |       2 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.2% |     327 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |      94 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.8% |      94 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.8% |      94 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.7% |      93 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     745 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 55.0% |     180 | `CompileQueue::get`                        | `libjvm.dylib` |
| 45.0% |     147 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      94 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |      94 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      94 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     276 | `PlatformMonitor::wait` | `libjvm.dylib` |

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
| 100.0% |     180 | `Monitor::wait` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 70.1% |     103 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 29.3% |      43 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.7% |       1 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 47.6% |      49 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 39.8% |      41 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.7% |      12 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.0% |       1 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     103 | `Compile::Compile` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee                                                          | Location                                                                           |
| ----: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 97.9% |      94 | `main`                                                          | `java`                                                                             |
|  1.0% |       1 | `unknown`                                                       | `<unknown>`                                                                        |
|  1.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |      94 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      94 | `PlatformEvent::park` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      94 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      94 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 96.8% |      91 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  3.2% |       3 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 49.0% |      24 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 20.4% |      10 | `Matcher::match`                  | `libjvm.dylib` |
| 14.3% |       7 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 10.2% |       5 | `PhaseOutput::Output`             | `libjvm.dylib` |
|  2.0% |       1 | `branchNode::is_block_proj`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 81.4% |      35 | `Compilation::compile_java_method` | `libjvm.dylib` |
| 18.6% |       8 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      43 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 34.1% |      14 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 24.4% |      10 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
| 22.0% |       9 | `Compile::optimize_loops`              | `libjvm.dylib` |
|  4.9% |       2 | `ConnectionGraph::do_analysis`         | `libjvm.dylib` |
|  4.9% |       2 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 48.6% |      17 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 31.4% |      11 | `Compilation::build_hir`      | `libjvm.dylib` |
| 20.0% |       7 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 29.2% |       7 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 20.8% |       5 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 12.5% |       3 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  8.3% |       2 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
|  4.2% |       1 | `branchConNode::ideal_Opcode`              | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 73.9% |      17 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
| 26.1% |       6 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 16.7% |       3 | `LoadNode::Ideal`      | `libjvm.dylib` |
| 11.1% |       2 | `RegionNode::Ideal`    | `libjvm.dylib` |
|  5.6% |       1 | `MergeMemNode::Ideal`  | `libjvm.dylib` |
|  5.6% |       1 | `CastIINode::Identity` | `libjvm.dylib` |
|  5.6% |       1 | `PhiNode::Ideal`       | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      18 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 47.1% |       8 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 17.6% |       3 | `PhaseIdealLoop::build_loop_tree`      | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.8% |       2 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
|  5.9% |       1 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      17 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 76.5% |      13 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 23.5% |       4 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 61.5% |       8 | `LinearScan::allocate_registers`              | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::resolve_data_flow`               | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::compute_local_live_sets`         | `libjvm.dylib` |
|  7.7% |       1 | `LinearScan::sort_intervals_after_allocation` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 45.5% |       5 | `IR::IR`                                     | `libjvm.dylib` |
| 27.3% |       3 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
| 18.2% |       2 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  9.1% |       1 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|     % | Samples | Callee                 | Location       |
| ----: | ------: | ---------------------- | -------------- |
| 80.0% |       8 | `Matcher::xform`       | `libjvm.dylib` |
| 20.0% |       2 | `Matcher::find_shared` | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.4% |     877 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.6% |     180 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.5% |      94 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.5% |      94 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  3.5% |      94 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.5% |      94 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  3.4% |      91 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |       9 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.2% |       5 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
|  0.1% |       4 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                     |
