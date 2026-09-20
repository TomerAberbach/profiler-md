# Sampling profile

Collected 2,696 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 94.0% |   2,534 |
| Compiler         |  4.2% |     113 |
| Ours             |  1.3% |      34 |
| Unknown          |  0.3% |       7 |
| Standard library |  0.2% |       6 |
| JIT              |  0.1% |       2 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 47.3% |   1,274 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`  |
| 35.9% |     969 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`  |
|  3.4% |      93 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`  |
|  3.4% |      93 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`  |
|  0.3% |       7 | `inflate_fast`                                                                                                                                           | `libzip.dylib`            |
|  0.3% |       7 | `(anonymous)`                                                                                                                                            | `<unknown>`               |
|  0.2% |       6 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`            |
|  0.2% |       6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`            |
|  0.2% |       5 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`  |
|  0.2% |       5 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`            |
|  0.2% |       5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`           |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`            |
|  0.1% |       3 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib` |
|  0.1% |       3 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`            |
|  0.1% |       3 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`            |
|  0.1% |       3 | `PhaseCCP::analyze`                                                                                                                                      | `libjvm.dylib`            |
|  0.1% |       3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`            |
|  0.1% |       3 | `PhaseLive::compute`                                                                                                                                     | `libjvm.dylib`            |
|  0.1% |       3 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`            |
|  0.1% |       2 | `unknown`                                                                                                                                                | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                                                                                                                                 | Location                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 47.3% |   1,274 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 35.9% |     969 | `semaphore_wait_trap`                                                                                                                                    | `libsystem_kernel.dylib`   |
|  3.4% |      93 | `mach_msg2_trap`                                                                                                                                         | `libsystem_kernel.dylib`   |
|  3.4% |      93 | `__ulock_wait`                                                                                                                                           | `libsystem_kernel.dylib`   |
|  0.3% |       7 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  0.2% |       6 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
|  0.2% |       6 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
|  0.2% |       5 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.2% |       5 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
|  0.1% |       3 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
|  0.1% |       3 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       3 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
|  0.1% |       3 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
|  0.1% |       2 | `unknown`                                                                                                                                                | `<unknown>`                |
|  0.1% |       2 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`             |
|  0.1% |       2 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
|  0.1% |       2 | `__psynch_mutexdrop`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  0.1% |       2 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
|  0.1% |       2 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| <0.1% |       1 | `__bsdthread_create`                                                                                                                                     | `libsystem_kernel.dylib`   |

##### Compiler

|     % | Samples | Function                                                           | Location       |
| ----: | ------: | ------------------------------------------------------------------ | -------------- |
|  0.2% |       5 | `PhaseChaitin::elide_copy`                                         | `libjvm.dylib` |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical`                                 | `libjvm.dylib` |
|  0.1% |       3 | `PhaseCCP::analyze`                                                | `libjvm.dylib` |
|  0.1% |       3 | `PhaseLive::compute`                                               | `libjvm.dylib` |
|  0.1% |       3 | `IntervalWalker::walk_to`                                          | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::post_allocate_copy_removal`                         | `libjvm.dylib` |
|  0.1% |       2 | `Node_Backward_Iterator::next`                                     | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_late_post_work`                        | `libjvm.dylib` |
|  0.1% |       2 | `PhaseCFG::partial_latency_of_defs`                                | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::build_loop_early`                                 | `libjvm.dylib` |
|  0.1% |       2 | `PhaseIdealLoop::Dominators`                                       | `libjvm.dylib` |
|  0.1% |       2 | `IndexSetIterator::advance_and_next`                               | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::Split`                                              | `libjvm.dylib` |
|  0.1% |       2 | `LinearScan::append_scope_value`                                   | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `libjvm.dylib` |
|  0.1% |       2 | `PhaseChaitin::gather_lrg_masks`                                   | `libjvm.dylib` |
| <0.1% |       1 | `RelocIterator::set_limits`                                        | `libjvm.dylib` |
| <0.1% |       1 | `DebugInformationRecorder::serialize_scope_values`                 | `libjvm.dylib` |
| <0.1% |       1 | `PhaseOutput::Output`                                              | `libjvm.dylib` |
| <0.1% |       1 | `Node::latency`                                                    | `libjvm.dylib` |

##### Ours

|     % | Samples | Function                                                                                                                                                                     | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  0.1% |       2 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                            |
| <0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                            | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                 |
| <0.1% |       1 | `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)`                                                                                                                 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`                  |
| <0.1% |       1 | `constructType(FirClassifierSymbol, ConeTypeProjection[], boolean, ConeAttributes)`                                                                                          | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                          |
| <0.1% |       1 | `create(List)`                                                                                                                                                               | `org.jetbrains.kotlin.fir.types.ConeAttributes$Companion`                                         |
| <0.1% |       1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                                                                                          | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                      |
| <0.1% |       1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`     |
| <0.1% |       1 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                        |
| <0.1% |       1 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                            |
| <0.1% |       1 | `substituteOrSelf(ConeKotlinType)`                                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty`                             |
| <0.1% |       1 | `getSymbol()`                                                                                                                                                                | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`                                  |
| <0.1% |       1 | `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000000701699e90` |
| <0.1% |       1 | `enqueueResolverTask(TowerGroup, Function1)`                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                |
| <0.1% |       1 | `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)`                          | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`                   |
| <0.1% |       1 | `rigidType(ProtoBuf$Type, ConeAttributes)`                                                                                                                                   | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                    |
| <0.1% |       1 | `exitJump(FirJump)`                                                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`                                |
| <0.1% |       1 | `<init>(TypeVariableMarker)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition`              |
| <0.1% |       1 | `findClass(JavaClassFinder$Request)`                                                                                                                                         | `org.jetbrains.kotlin.load.java.JavaClassFinderImpl`                                              |
| <0.1% |       1 | `addNonLocalTowerDataElements(List)`                                                                                                                                         | `org.jetbrains.kotlin.fir.declarations.FirTowerDataContext`                                       |
| <0.1% |       1 | `getSupertypes()`                                                                                                                                                            | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                        |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % | Samples | Location                                                   |
| ----: | ------: | ---------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:133` |
| 50.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:142` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16542` |

##### `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Location                                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:4740` |

##### `constructType(FirClassifierSymbol, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:52` |

##### `create(List)` (`org.jetbrains.kotlin.fir.types.ConeAttributes$Companion`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeAttributes$Companion:86` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer:694` |

##### `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt:248` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter:186` |

##### `substituteOrSelf(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty`)

|      % | Samples | Location                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty:19` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl:47` |

##### `enqueueResolverTask(TowerGroup, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager:59` |

##### `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer:340` |

##### `rigidType(ProtoBuf$Type, ConeAttributes)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer:214` |

##### `exitJump(FirJump)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder:983` |

##### `<init>(TypeVariableMarker)` (`org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition:26` |

##### `findClass(JavaClassFinder$Request)` (`org.jetbrains.kotlin.load.java.JavaClassFinderImpl`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.java.JavaClassFinderImpl:49` |

##### `addNonLocalTowerDataElements(List)` (`org.jetbrains.kotlin.fir.declarations.FirTowerDataContext`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.FirTowerDataContext:130` |

##### `getSupertypes()` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`)

|      % | Samples | Location                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass:24` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 78.3% |     997 | `PlatformMonitor::wait` | `libjvm.dylib`           |
|  7.3% |      93 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  7.2% |      92 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  7.2% |      92 | `Parker::park`          | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.9% |     871 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |      93 | `os::signal_wait`                | `libjvm.dylib` |
|  0.4% |       4 | `WorkerThreads::run_task`        | `libjvm.dylib` |
|  0.1% |       1 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |      93 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      93 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 66.7% |       4 | `SymbolTable::lookup_only` | `libjvm.dylib` |
| 33.3% |       2 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 83.3% |       5 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 16.7% |       1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |       5 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       5 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|     % | Samples | Caller                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 20.0% |       1 | `TypeInterfaces::intersection_with`        | `libjvm.dylib` |
| 20.0% |       1 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 20.0% |       1 | `LinearScanWalker::LinearScanWalker`       | `libjvm.dylib` |
| 20.0% |       1 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| 20.0% |       1 | `LIRGenerator::state_for`                  | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       4 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 33.3% |       1 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
| 33.3% |       1 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |
| 33.3% |       1 | `jni_GetStringUTFRegion`            | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 66.7% |       2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |
| 33.3% |       1 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       3 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       3 | `PhaseCCP::PhaseCCP` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       3 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       3 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 66.7% |       2 | `IntervalWalker::walk_to`     | `libjvm.dylib` |
| 33.3% |       1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       2 | `unknown` | `<unknown>` |

##### `trampoline_stub_Relocation::get_trampoline_for` (`libjvm.dylib`)

|      % | Samples | Caller                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |       2 | `NativeCall::set_destination_mt_safe` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                                | Location                  |
| -----: | ------: | ------------------------------------- | ------------------------- |
| 100.0% |       2 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 50.0% |       1 | `PhaseOutput::Output` | `libjvm.dylib` |
| 50.0% |       1 | `nmethod::nmethod`    | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

|      % | Samples | Caller        | Location                 |
| -----: | ------: | ------------- | ------------------------ |
| 100.0% |       2 | `free_medium` | `libsystem_malloc.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 50.0% |       1 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| 50.0% |       1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_loop_late` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 50.0% |       1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `LinearScan::append_scope_value` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       2 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       2 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `__bsdthread_create` (`libsystem_kernel.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       1 | `os::create_thread` | `libjvm.dylib` |

##### `RelocIterator::set_limits` (`libjvm.dylib`)

|      % | Samples | Caller                                    | Location       |
| -----: | ------: | ----------------------------------------- | -------------- |
| 100.0% |       1 | `CompiledDirectStaticCall::find_stub_for` | `libjvm.dylib` |

##### `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       1 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       1 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `Node::latency` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |       1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Caller                                                        | Location                                          |
| -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller                                                        | Location                                                                         |
| -----: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertTypeParameters(LighterASTNode, List, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `constructType(FirClassifierSymbol, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|      % | Samples | Caller                                                                                                              | Location                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       1 | `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `create(List)` (`org.jetbrains.kotlin.fir.types.ConeAttributes$Companion`)

|      % | Samples | Caller               | Location                                        |
| -----: | ------: | -------------------- | ----------------------------------------------- |
| 100.0% |       1 | `add(ConeAttribute)` | `org.jetbrains.kotlin.fir.types.ConeAttributes` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|      % | Samples | Caller                                           | Location                                                                     |
| -----: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `newTypeCheckerState(boolean, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Caller                                                   | Location                                                                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionCall(FirFunctionCall, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

|      % | Samples | Caller                                                                                | Location                                                                                      |
| -----: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|      % | Samples | Caller                                                                                                                                                                  | Location                                                               |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `substituteOrSelf(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor$Empty`)

|      % | Samples | Caller                                                       | Location                                                                                  |
| -----: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `substituteType(ConeKotlinType, Candidate, ConeSubstitutor)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `getSymbol()` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`)

|      % | Samples | Caller        | Location                                                         |
| -----: | ------: | ------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `getSymbol()` | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl` |

##### `<init>(ConstraintSystemCompleter, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000000701699e90`)

|      % | Samples | Caller                                     | Location                                     |
| -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `enqueueResolverTask(TowerGroup, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|      % | Samples | Caller                                                                                 | Location                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `enqueueResolverTask$default(TowerResolveManager, TowerGroup, Function1, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer`)

|      % | Samples | Caller                                                                                  | Location                                                         |
| -----: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `rigidType(ProtoBuf$Type, ConeAttributes)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|      % | Samples | Caller                                | Location                                                       |
| -----: | ------: | ------------------------------------- | -------------------------------------------------------------- |
| 100.0% |       1 | `type(ProtoBuf$Type, ConeAttributes)` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer` |

##### `exitJump(FirJump)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `exitJump(FirJump)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `<init>(TypeVariableMarker)` (`org.jetbrains.kotlin.fir.resolve.inference.model.ConeFixVariableConstraintPosition`)

|      % | Samples | Caller                                                                    | Location                                                               |
| -----: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `fixVariable(ConstraintSystemCompletionContext, VariableWithConstraints)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `findClass(JavaClassFinder$Request)` (`org.jetbrains.kotlin.load.java.JavaClassFinderImpl`)

|      % | Samples | Caller                       | Location                                      |
| -----: | ------: | ---------------------------- | --------------------------------------------- |
| 100.0% |       1 | `findClass(ClassId, byte[])` | `org.jetbrains.kotlin.fir.java.FirJavaFacade` |

##### `addNonLocalTowerDataElements(List)` (`org.jetbrains.kotlin.fir.declarations.FirTowerDataContext`)

|      % | Samples | Caller                                             | Location                                                                        |
| -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `addNonLocalTowerDataElement(FirTowerDataElement)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |

##### `getSupertypes()` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`)

|      % | Samples | Caller                              | Location                                                  |
| -----: | ------: | ----------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `computeSuperTypeRefsByJavaClass()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                  |
| ----: | ------: | ------------------------------------------ | ------------------------- |
| 82.6% |   2,228 | `_pthread_start`                           | `libsystem_pthread.dylib` |
| 82.6% |   2,228 | `thread_start`                             | `libsystem_pthread.dylib` |
| 79.2% |   2,134 | `Thread::call_run`                         | `libjvm.dylib`            |
| 79.2% |   2,134 | `thread_native_entry`                      | `libjvm.dylib`            |
| 47.3% |   1,274 | `__psynch_cvwait`                          | `libsystem_kernel.dylib`  |
| 37.0% |     997 | `PlatformMonitor::wait`                    | `libjvm.dylib`            |
| 35.9% |     969 | `semaphore_wait_trap`                      | `libsystem_kernel.dylib`  |
| 32.6% |     878 | `WorkerThread::run`                        | `libjvm.dylib`            |
| 29.3% |     791 | `JavaThread::thread_main_inner`            | `libjvm.dylib`            |
| 27.4% |     738 | `Monitor::wait_without_safepoint_check`    | `libjvm.dylib`            |
| 12.2% |     328 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib`            |
| 10.3% |     279 | `ConcurrentGCThread::run`                  | `libjvm.dylib`            |
|  9.6% |     259 | `Monitor::wait`                            | `libjvm.dylib`            |
|  6.9% |     186 | `JLI_Launch`                               | `libjli.dylib`            |
|  6.9% |     186 | `main`                                     | `java`                    |
|  6.2% |     168 | `CompileQueue::get`                        | `libjvm.dylib`            |
|  5.9% |     160 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib`            |
|  4.2% |     114 | `C2Compiler::compile_method`               | `libjvm.dylib`            |
|  4.2% |     113 | `Compile::Compile`                         | `libjvm.dylib`            |
|  3.5% |      95 | `unknown`                                  | `<unknown>`               |

#### Categories

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 82.6% |   2,228 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 82.6% |   2,228 | `thread_start`                          | `libsystem_pthread.dylib` |
| 79.2% |   2,134 | `Thread::call_run`                      | `libjvm.dylib`            |
| 79.2% |   2,134 | `thread_native_entry`                   | `libjvm.dylib`            |
| 47.3% |   1,274 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 37.0% |     997 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 35.9% |     969 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 32.6% |     878 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 29.3% |     791 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| 27.4% |     738 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 10.3% |     279 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  9.6% |     259 | `Monitor::wait`                         | `libjvm.dylib`            |
|  6.9% |     186 | `JLI_Launch`                            | `libjli.dylib`            |
|  6.9% |     186 | `main`                                  | `java`                    |
|  3.5% |      95 | `unknown`                               | `<unknown>`               |
|  3.4% |      93 | `ServiceThread::service_thread_entry`   | `libjvm.dylib`            |
|  3.4% |      93 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib`            |
|  3.4% |      93 | `VMThread::run`                         | `libjvm.dylib`            |
|  3.4% |      93 | `os::signal_wait`                       | `libjvm.dylib`            |
|  3.4% |      93 | `signal_thread_entry`                   | `libjvm.dylib`            |

##### Compiler

|     % | Samples | Function                                   | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 12.2% |     328 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  6.2% |     168 | `CompileQueue::get`                        | `libjvm.dylib` |
|  5.9% |     160 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  4.2% |     114 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  4.2% |     113 | `Compile::Compile`                         | `libjvm.dylib` |
|  2.1% |      57 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  1.6% |      43 | `Compilation::compile_method`              | `libjvm.dylib` |
|  1.6% |      43 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  1.6% |      42 | `Compile::Optimize`                        | `libjvm.dylib` |
|  1.5% |      41 | `Compilation::compile_java_method`         | `libjvm.dylib` |
|  1.2% |      33 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  0.8% |      21 | `PhaseIdealLoop::optimize`                 | `libjvm.dylib` |
|  0.7% |      20 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|  0.7% |      20 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  0.6% |      17 | `Compilation::emit_lir`                    | `libjvm.dylib` |
|  0.5% |      13 | `Compilation::build_hir`                   | `libjvm.dylib` |
|  0.4% |      11 | `PhaseCCP::PhaseCCP`                       | `libjvm.dylib` |
|  0.4% |      11 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
|  0.4% |      11 | `Compilation::emit_code_body`              | `libjvm.dylib` |
|  0.3% |       9 | `PhaseCCP::analyze`                        | `libjvm.dylib` |

##### Ours

|    % | Samples | Function                                                                                                                                      | Location                                                    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 3.3% |      90 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 3.3% |      90 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                 |
| 2.8% |      75 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.8% |      75 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.8% |      75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| 2.8% |      75 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| 2.7% |      73 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.7% |      73 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.7% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| 2.7% |      72 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| 2.6% |      70 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| 2.6% |      70 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| 2.6% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| 2.6% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| 2.6% |      70 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| 2.6% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.6% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.6% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.6% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| 2.6% |      70 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.8% |   2,134 | `thread_native_entry` | `libjvm.dylib` |
|  4.2% |      93 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   2,228 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 41.1% |     878 | `WorkerThread::run`             | `libjvm.dylib` |
| 37.1% |     791 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.1% |     279 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.4% |      93 | `VMThread::run`                 | `libjvm.dylib` |
|  4.4% |      93 | `WatcherThread::run`            | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,134 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |     997 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.2% |     871 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.5% |       4 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|  0.3% |       3 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 41.5% |     328 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 11.8% |      93 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 11.8% |      93 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 11.8% |      93 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 11.6% |      92 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     738 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 51.2% |     168 | `CompileQueue::get`                        | `libjvm.dylib` |
| 48.8% |     160 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |      93 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |      93 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |      93 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |     259 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |      93 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |      93 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     186 | `JLI_Launch` | `libjli.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 98.8% |     166 | `Monitor::wait`                  | `libjvm.dylib` |
|  0.6% |       1 | `Mutex::lock`                    | `libjvm.dylib` |
|  0.6% |       1 | `CompilationPolicy::select_task` | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 71.3% |     114 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 26.9% |      43 | `Compiler::compile_method`      | `libjvm.dylib` |
|  1.3% |       2 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  0.6% |       1 | `ciEnv::~ciEnv`                 | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 99.1% |     113 | `Compile::Compile` | `libjvm.dylib` |
|  0.9% |       1 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 50.4% |      57 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 37.2% |      42 | `Compile::Optimize`                      | `libjvm.dylib` |
|  9.7% |      11 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.8% |       2 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.9% |       1 | `Compile::Init`                          | `libjvm.dylib` |

##### `unknown` (`<unknown>`)

|     % | Samples | Callee    | Location    |
| ----: | ------: | --------- | ----------- |
| 97.9% |      93 | `main`    | `java`      |
|  2.1% |       2 | `unknown` | `<unknown>` |

##### `ServiceThread::service_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |      93 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `G1ConcurrentMarkThread::run_service` (`libjvm.dylib`)

|     % | Samples | Callee                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 94.6% |      88 | `Monitor::wait_without_safepoint_check`            | `libjvm.dylib` |
|  5.4% |       5 | `G1ConcurrentMarkThread::concurrent_mark_cycle_do` | `libjvm.dylib` |

##### `VMThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 98.9% |      92 | `VMThread::wait_for_operation` | `libjvm.dylib` |
|  1.1% |       1 | `VMThread::inner_execute`      | `libjvm.dylib` |

##### `os::signal_wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |      93 | `semaphore_wait_trap` | `libsystem_kernel.dylib` |

##### `signal_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |      93 | `os::signal_wait` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.3% |      75 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 16.7% |      15 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |      90 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 97.3% |      73 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  2.7% |       2 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      75 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|      % | Samples | Callee                          | Location                                                |
| -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 100.0% |      75 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |      75 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |      72 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       1 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |      73 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |      73 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.2% |      70 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.8% |       2 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 65.7% |      46 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 24.3% |      17 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.6% |       6 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.4% |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |      70 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |      70 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.3% |       3 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   4.3% |       3 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee                                                     | Location                                                |
| -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee                                                     | Location                                                    |
| -----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |      70 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                               | Location                                             |
| -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |      70 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                         | Location                                                |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                         | Location                                                |
| -----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |      70 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 57.9% |      33 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 14.0% |       8 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 14.0% |       8 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| 14.0% |       8 | `Matcher::match`                  | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 95.3% |      41 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  4.7% |       2 | `ciEnv::register_method`           | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |      43 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                     | Location       |
| ----: | ------: | -------------------------- | -------------- |
| 38.1% |      16 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |
| 26.2% |      11 | `PhaseCCP::PhaseCCP`       | `libjvm.dylib` |
| 11.9% |       5 | `Compile::optimize_loops`  | `libjvm.dylib` |
|  9.5% |       4 | `PhaseCCP::do_transform`   | `libjvm.dylib` |
|  7.1% |       3 | `PhaseIterGVN::optimize`   | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 41.5% |      17 | `Compilation::emit_lir`       | `libjvm.dylib` |
| 31.7% |      13 | `Compilation::build_hir`      | `libjvm.dylib` |
| 26.8% |      11 | `Compilation::emit_code_body` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 24.2% |       8 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 21.2% |       7 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| 12.1% |       4 | `PhaseLive::compute`                       | `libjvm.dylib` |
|  6.1% |       2 | `PhaseIFG::Compute_Effective_Degree`       | `libjvm.dylib` |
|  6.1% |       2 | `PhaseChaitin::Split`                      | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 95.2% |      20 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  4.8% |       1 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 25.0% |       5 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 15.0% |       3 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 15.0% |       3 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
| 10.0% |       2 | `IdealLoopTree::loop_predication`      | `libjvm.dylib` |
| 10.0% |       2 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      20 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 64.7% |      11 | `LinearScan::do_linear_scan` | `libjvm.dylib` |
| 35.3% |       6 | `BlockList::iterate_forward` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 61.5% |       8 | `IR::IR`                                     | `libjvm.dylib` |
| 15.4% |       2 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  7.7% |       1 | `IR::compute_code`                           | `libjvm.dylib` |
|  7.7% |       1 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  7.7% |       1 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `PhaseCCP::PhaseCCP` (`libjvm.dylib`)

|     % | Samples | Callee              | Location       |
| ----: | ------: | ------------------- | -------------- |
| 81.8% |       9 | `PhaseCCP::analyze` | `libjvm.dylib` |
|  9.1% |       1 | `ProjNode::Value`   | `libjvm.dylib` |
|  9.1% |       1 | `AddPNode::Value`   | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 36.4% |       4 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 27.3% |       3 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 18.2% |       2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|  9.1% |       1 | `LinearScan::init_compute_oop_maps`   | `libjvm.dylib` |
|  9.1% |       1 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |

##### `Compilation::emit_code_body` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 54.5% |       6 | `Compilation::emit_code_epilog` | `libjvm.dylib` |
| 45.5% |       5 | `LIR_Assembler::emit_code`      | `libjvm.dylib` |

##### `PhaseCCP::analyze` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 33.3% |       3 | `PhaseCCP::push_child_nodes_to_worklist` | `libjvm.dylib` |
| 11.1% |       1 | `CmpPNode::sub`                          | `libjvm.dylib` |
| 11.1% |       1 | `LoadRangeNode::Opcode`                  | `libjvm.dylib` |
| 11.1% |       1 | `BoolNode::bottom_type`                  | `libjvm.dylib` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.3% |     871 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  6.2% |     166 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                      |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% |      93 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      93 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                 |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                           |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                              |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                        |
|  3.4% |      93 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                   |
|  3.4% |      93 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                  |
|  3.4% |      92 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                          |
|  3.3% |      88 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |       7 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  0.2% |       5 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                  |
|  0.1% |       4 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
