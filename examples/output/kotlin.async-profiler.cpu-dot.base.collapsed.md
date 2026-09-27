# Sampling profile

Collected 1,283 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 48.2% |     619 |
| Native           | 34.8% |     447 |
| Ours             | 11.2% |     144 |
| Standard library |  4.4% |      57 |
| JIT              |  1.2% |      16 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                        | Location    |
| ---: | ------: | ----------------------------------------------- | ----------- |
| 3.9% |      50 | `inflate_fast`                                  | `<unknown>` |
| 1.9% |      24 | `tlv_get_addr`                                  | `<unknown>` |
| 1.3% |      17 | `SymbolTable::do_lookup`                        | `<unknown>` |
| 1.2% |      16 | `_platform_memset`                              | `<unknown>` |
| 1.2% |      15 | `PhaseChaitin::Split`                           | `<unknown>` |
| 1.1% |      14 | `PhaseChaitin::build_ifg_physical`              | `<unknown>` |
| 1.1% |      14 | `IndexSetIterator::advance_and_next`            | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`                 | `<unknown>` |
| 0.8% |      10 | `__psynch_cvwait`                               | `<unknown>` |
| 0.8% |      10 | `PhaseChaitin::gather_lrg_masks`                | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late_post_work`     | `<unknown>` |
| 0.7% |       9 | `__psynch_mutexwait`                            | `<unknown>` |
| 0.7% |       9 | `IntervalWalker::walk_to`                       | `<unknown>` |
| 0.7% |       9 | `_platform_memmove`                             | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute`                            | `<unknown>` |
| 0.7% |       9 | `InstanceKlass::find_method_index`              | `<unknown>` |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`        | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late`               | `<unknown>` |
| 0.6% |       8 | `pthread_jit_write_protect_np`                  | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                        | Location    |
| ---: | ------: | ----------------------------------------------- | ----------- |
| 1.2% |      15 | `PhaseChaitin::Split`                           | `<unknown>` |
| 1.1% |      14 | `PhaseChaitin::build_ifg_physical`              | `<unknown>` |
| 1.1% |      14 | `IndexSetIterator::advance_and_next`            | `<unknown>` |
| 1.0% |      13 | `ciObjectFactory::get_metadata`                 | `<unknown>` |
| 0.8% |      10 | `PhaseChaitin::gather_lrg_masks`                | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late_post_work`     | `<unknown>` |
| 0.7% |       9 | `IntervalWalker::walk_to`                       | `<unknown>` |
| 0.7% |       9 | `PhaseLive::compute`                            | `<unknown>` |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed` | `<unknown>` |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies`        | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late`               | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal`      | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_early`              | `<unknown>` |
| 0.6% |       8 | `LIR_OpVisitState::visit`                       | `<unknown>` |
| 0.5% |       7 | `LinearScan::build_intervals`                   | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::Dominators`                    | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::is_dominator`                  | `<unknown>` |
| 0.5% |       6 | `PhaseChaitin::elide_copy`                      | `<unknown>` |
| 0.5% |       6 | `PhaseLive::add_liveout`                        | `<unknown>` |
| 0.5% |       6 | `Compile::disconnect_useless_nodes`             | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.9% |      50 | `inflate_fast`                                                                                                                                           | `<unknown>` |
| 1.9% |      24 | `tlv_get_addr`                                                                                                                                           | `<unknown>` |
| 1.3% |      17 | `SymbolTable::do_lookup`                                                                                                                                 | `<unknown>` |
| 1.2% |      16 | `_platform_memset`                                                                                                                                       | `<unknown>` |
| 0.8% |      10 | `__psynch_cvwait`                                                                                                                                        | `<unknown>` |
| 0.7% |       9 | `__psynch_mutexwait`                                                                                                                                     | `<unknown>` |
| 0.7% |       9 | `_platform_memmove`                                                                                                                                      | `<unknown>` |
| 0.7% |       9 | `InstanceKlass::find_method_index`                                                                                                                       | `<unknown>` |
| 0.6% |       8 | `pthread_jit_write_protect_np`                                                                                                                           | `<unknown>` |
| 0.6% |       8 | `inflate_table`                                                                                                                                          | `<unknown>` |
| 0.6% |       8 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `<unknown>` |
| 0.6% |       8 | `Arena::contains`                                                                                                                                        | `<unknown>` |
| 0.4% |       5 | `inflate`                                                                                                                                                | `<unknown>` |
| 0.4% |       5 | `sys_icache_invalidate`                                                                                                                                  | `<unknown>` |
| 0.4% |       5 | `_qsort`                                                                                                                                                 | `<unknown>` |
| 0.3% |       4 | `SymbolTable::lookup_only`                                                                                                                               | `<unknown>` |
| 0.3% |       4 | `ClassVerifier::verify_invoke_instructions`                                                                                                              | `<unknown>` |
| 0.3% |       4 | `CodeCache::make_marked_nmethods_deoptimized`                                                                                                            | `<unknown>` |
| 0.3% |       4 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `<unknown>` |
| 0.3% |       4 | `posix_madvise`                                                                                                                                          | `<unknown>` |

##### Ours

|    % | Samples | Function                                                     | Location                                                                                       |
| ---: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `advance`                                                    | `org.jetbrains.kotlin.lexer._JetLexer`                                                         |
| 0.2% |       2 | `readMethod`                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                  |
| 0.1% |       1 | `create`                                                     | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`                                        |
| 0.1% |       1 | `asSingleFqName`                                             | `org.jetbrains.kotlin.name.ClassId`                                                            |
| 0.1% |       1 | `flushLastBuffer`                                            | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                              |
| 0.1% |       1 | `processFunctionsByName`                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                 |
| 0.1% |       1 | `runResolver`                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                |
| 0.1% |       1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`  |
| 0.1% |       1 | `transformFunctionContent`                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| 0.1% |       1 | `parametersCount`                                            | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                               |
| 0.1% |       1 | `accept`                                                     | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`                                       |
| 0.1% |       1 | `readElementValue`                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                  |
| 0.1% |       1 | `getClassLikeSymbolByClassId`                                | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`               |
| 0.1% |       1 | `accept`                                                     | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                       |
| 0.1% |       1 | `check`                                                      | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckVisibility`                                |
| 0.1% |       1 | `completeCall`                                               | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                  |
| 0.1% |       1 | `accept`                                                     | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`                                            |
| 0.1% |       1 | `accept`                                                     | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                               |
| 0.1% |       1 | `analyze`                                                    | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`                |
| 0.1% |       1 | `processDefaultsAndRunChecks`                                | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`                      |

##### Standard library

|    % | Samples | Function                               | Location                                           |
| ---: | ------: | -------------------------------------- | -------------------------------------------------- |
| 0.6% |       8 | `checkNotNullParameter`                | `kotlin.jvm.internal.Intrinsics`                   |
| 0.5% |       6 | `sanitizeStackTrace`                   | `kotlin.jvm.internal.Intrinsics`                   |
| 0.2% |       2 | `hasNext`                              | `kotlin.collections.EmptyIterator`                 |
| 0.1% |       1 | `copyOf`                               | `java.util.Arrays`                                 |
| 0.1% |       1 | `linkCallSiteImpl`                     | `java.lang.invoke.MethodHandleNatives`             |
| 0.1% |       1 | `isEmpty`                              | `kotlin.collections.builders.MapBuilder`           |
| 0.1% |       1 | `remove`                               | `java.util.HashMap`                                |
| 0.1% |       1 | `checkIndex`                           | `java.util.Objects`                                |
| 0.1% |       1 | `valueOf`                              | `java.lang.String`                                 |
| 0.1% |       1 | `checkForComodification$kotlin_stdlib` | `kotlin.collections.builders.MapBuilder$Itr`       |
| 0.1% |       1 | `drop`                                 | `kotlin.collections.CollectionsKt___CollectionsKt` |
| 0.1% |       1 | `hasNext`                              | `java.util.LinkedHashMap$LinkedHashIterator`       |
| 0.1% |       1 | `readFullyAt`                          | `java.util.zip.ZipFile$Source`                     |
| 0.1% |       1 | `get`                                  | `java.lang.ThreadLocal`                            |
| 0.1% |       1 | `<init>`                               | `java.lang.invoke.MemberName`                      |
| 0.1% |       1 | `equals`                               | `java.lang.String`                                 |
| 0.1% |       1 | `size`                                 | `java.util.Collections$SingletonList`              |
| 0.1% |       1 | `nextInt`                              | `kotlin.ranges.IntProgressionIterator`             |
| 0.1% |       1 | `isEmpty`                              | `kotlin.collections.EmptyList`                     |
| 0.1% |       1 | `isWhitespace`                         | `java.lang.Character`                              |

##### JIT

|    % | Samples | Function                        | Location    |
| ---: | ------: | ------------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`         | `<unknown>` |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`        | `<unknown>` |
| 0.2% |       3 | `itable stub`                   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`         | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbebaabaa)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      50 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                    | Location    |
| ---: | ------: | ----------------------------------------- | ----------- |
| 8.3% |       2 | `BlockListBuilder::BlockListBuilder`      | `<unknown>` |
| 8.3% |       2 | `GraphBuilder::invoke`                    | `<unknown>` |
| 8.3% |       2 | `TypeInstPtr::make`                       | `<unknown>` |
| 4.2% |       1 | `PhaseValues::intcon`                     | `<unknown>` |
| 4.2% |       1 | `GraphKit::transfer_exceptions_into_jvms` | `<unknown>` |

##### `SymbolTable::do_lookup` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 64.7% |      11 | `SymbolTable::lookup_only`                     | `<unknown>` |
| 17.6% |       3 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| 17.6% |       3 | `SymbolTable::new_symbol`                      | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 12.5% |       2 | `GraphBuilder::append_with_bci` | `<unknown>` |
| 12.5% |       2 | `ConNode::make`                 | `<unknown>` |
|  6.3% |       1 | `Matcher::Label_Root`           | `<unknown>` |
|  6.3% |       1 | `Node::Node`                    | `<unknown>` |
|  6.3% |       1 | `MemAllocator::allocate`        | `<unknown>` |

##### `PhaseChaitin::Split` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `IndexSetIterator::advance_and_next` (`<unknown>`)

|     % | Samples | Caller                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 21.4% |       3 | `PhaseLive::add_liveout`                                           | `<unknown>` |
| 14.3% |       2 | `PhaseChaitin::build_ifg_physical`                                 | `<unknown>` |
| 14.3% |       2 | `PhaseIFG::effective_degree`                                       | `<unknown>` |
| 14.3% |       2 | `PhaseChaitin::Simplify`                                           | `<unknown>` |
|  7.1% |       1 | `PhaseChaitin::remove_bound_register_from_interfering_live_ranges` | `<unknown>` |

##### `ciObjectFactory::get_metadata` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 30.8% |       4 | `ciEnv::get_klass_by_index_impl` | `<unknown>` |
| 15.4% |       2 | `ciEnv::get_klass_by_name_impl`  | `<unknown>` |
| 15.4% |       2 | `ciBytecodeStream::get_method`   | `<unknown>` |
| 15.4% |       2 | `ciMethod::ensure_method_data`   | `<unknown>` |
|  7.7% |       1 | `ciEnv::get_method_from_handle`  | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |      10 | `PlatformMonitor::wait` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      10 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`<unknown>`)

|     % | Samples | Caller                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 88.9% |       8 | `PhaseIdealLoop::build_loop_late`    | `<unknown>` |
| 11.1% |       1 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       9 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `IntervalWalker::walk_to` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 77.8% |       7 | `IntervalWalker::walk_to`        | `<unknown>` |
| 11.1% |       1 | `LinearScan::allocate_registers` | `<unknown>` |
| 11.1% |       1 | `LinearScan::compute_oop_map`    | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 22.2% |       2 | `PhaseIdealLoop::set_idom` | `<unknown>` |
| 22.2% |       2 | `PhaseOutput::Output`      | `<unknown>` |
| 11.1% |       1 | `Node_Array::grow`         | `<unknown>` |
| 11.1% |       1 | `VectorSet::grow`          | `<unknown>` |
| 11.1% |       1 | `nmethod::nmethod`         | `<unknown>` |

##### `PhaseLive::compute` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `InstanceKlass::find_method_index` (`<unknown>`)

|     % | Samples | Caller                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 55.6% |       5 | `InstanceKlass::uncached_lookup_method`           | `<unknown>` |
| 11.1% |       1 | `LinkResolver::lookup_instance_method_in_klasses` | `<unknown>` |
| 11.1% |       1 | `InstanceKlass::find_method`                      | `<unknown>` |
| 11.1% |       1 | `InstanceKlass::initialize_impl`                  | `<unknown>` |
| 11.1% |       1 | `InstanceKlass::find_local_method`                | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`<unknown>`)

|      % | Samples | Caller                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |       9 | `LinearScanWalker::alloc_free_reg` | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 37.5% |       3 | `JVM_Clone`                     | `<unknown>` |
| 25.0% |       2 | `JVM_IHashCode`                 | `<unknown>` |
| 12.5% |       1 | `jni_GetPrimitiveArrayCritical` | `<unknown>` |
| 12.5% |       1 | `InterpreterRuntime::anewarray` | `<unknown>` |
| 12.5% |       1 | `jni_GetByteArrayRegion`        | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal` (`<unknown>`)

|      % | Samples | Caller                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `LIR_OpVisitState::visit` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 50.0% |       4 | `LinearScan::assign_reg_num`          | `<unknown>` |
| 25.0% |       2 | `LinearScan::compute_local_live_sets` | `<unknown>` |
| 25.0% |       2 | `LinearScan::build_intervals`         | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       8 | `inflate` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 87.5% |       7 | `DebugInformationRecorder::describe_scope`         | `<unknown>` |
| 12.5% |       1 | `DebugInformationRecorder::serialize_scope_values` | `<unknown>` |

##### `Arena::contains` (`<unknown>`)

|     % | Samples | Caller           | Location    |
| ----: | ------: | ---------------- | ----------- |
| 87.5% |       7 | `Matcher::xform` | `<unknown>` |
| 12.5% |       1 | `Matcher::match` | `<unknown>` |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                     | Location                                                           |
| ----: | ------: | -------------------------- | ------------------------------------------------------------------ |
| 12.5% |       1 | `unwrapVariable`           | `org.jetbrains.kotlin.fir.resolve.dfa.Flow`                        |
| 12.5% |       1 | `enqueueResolverTask`      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
| 12.5% |       1 | `visitReturn`              | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                   |
| 12.5% |       1 | `getExtensionFunctionType` | `org.jetbrains.kotlin.fir.types.CompilerConeAttributesKt`          |
| 12.5% |       1 | `getClassId`               | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                   |

##### `LinearScan::build_intervals` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       7 | `LinearScan::do_linear_scan` | `<unknown>` |

##### `PhaseIdealLoop::Dominators` (`<unknown>`)

|      % | Samples | Caller                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `PhaseIdealLoop::is_dominator` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `<unknown>` |

##### `PhaseChaitin::elide_copy` (`<unknown>`)

|      % | Samples | Caller                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       6 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseLive::add_liveout` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       6 | `PhaseLive::compute` | `<unknown>` |

##### `Compile::disconnect_useless_nodes` (`<unknown>`)

|     % | Samples | Caller                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 83.3% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
| 16.7% |       1 | `PhaseCCP::transform`                    | `<unknown>` |

##### `sanitizeStackTrace` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                    | Location                         |
| -----: | ------: | ------------------------- | -------------------------------- |
| 100.0% |       6 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller             | Location                                                                   |
| ----: | ------: | ------------------ | -------------------------------------------------------------------------- |
| 16.7% |       1 | `computeIrOrigin`  | `org.jetbrains.kotlin.fir.backend.utils.OriginUtilsKt`                     |
| 16.7% |       1 | `arguments`        | `java.lang.invoke.LambdaForm`                                              |
| 16.7% |       1 | `check`            | `org.jetbrains.kotlin.fir.resolve.calls.stages.MapArguments`               |
| 16.7% |       1 | `mapRawSignature`  | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |
| 16.7% |       1 | `processCandidate` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`      |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       5 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 40.0% |       2 | `CompiledIC::set_to_monomorphic` | `<unknown>` |
| 20.0% |       1 | `CodeBuffer::copy_code_to`       | `<unknown>` |
| 20.0% |       1 | `nmethod::nmethod`               | `<unknown>` |
| 20.0% |       1 | `CompiledIC::set_to_clean`       | `<unknown>` |

##### `_qsort` (`<unknown>`)

|     % | Samples | Caller                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 60.0% |       3 | `TypeInterfaces::make`          | `<unknown>` |
| 20.0% |       1 | `_qsort`                        | `<unknown>` |
| 20.0% |       1 | `PhaseBlockLayout::grow_traces` | `<unknown>` |

##### `SymbolTable::lookup_only` (`<unknown>`)

|     % | Samples | Caller                                         | Location    |
| ----: | ------: | ---------------------------------------------- | ----------- |
| 75.0% |       3 | `ClassFileParser::parse_constant_pool_entries` | `<unknown>` |
| 25.0% |       1 | `ClassFileParser::parse_constant_pool`         | `<unknown>` |

##### `ClassVerifier::verify_invoke_instructions` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       4 | `ClassVerifier::verify_method` | `<unknown>` |

##### `CodeCache::make_marked_nmethods_deoptimized` (`<unknown>`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       4 | `Deoptimization::deoptimize_all_marked` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`<unknown>`)

|      % | Samples | Caller                                         | Location    |
| -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |       4 | `void G1CMTask::process_grey_task_entry<true>` | `<unknown>` |

##### `posix_madvise` (`<unknown>`)

|      % | Samples | Caller        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       4 | `free_medium` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                                                         |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 25.0% |       1 | `invoke`             | `org.jetbrains.kotlin.backend.common.linkage.issues.SignatureClashDetector$$Lambda.0x00000003018cb2c0`                           |
| 25.0% |       1 | `functionProto`      | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                                                                    |
| 25.0% |       1 | `revert`             | `org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass$NullabilityAssumptions` |
| 25.0% |       1 | `isEnabledByDefault` | `org.jetbrains.kotlin.config.LanguageVersionSettingsKt`                                                                          |

##### `itable stub` (`<unknown>`)

|     % | Samples | Caller                         | Location                                                                                |
| ----: | ------: | ------------------------------ | --------------------------------------------------------------------------------------- |
| 33.3% |       1 | `checkElement`                 | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |
| 33.3% |       1 | `getSubstitutedUnderlyingType` | `org.jetbrains.kotlin.types.ExpandedTypeUtilsKt`                                        |
| 33.3% |       1 | `isIntersection`               | `org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt`                        |

##### `advance` (`org.jetbrains.kotlin.lexer._JetLexer`)

|      % | Samples | Caller        | Location                         |
| -----: | ------: | ------------- | -------------------------------- |
| 100.0% |       2 | `locateToken` | `com.intellij.lexer.FlexAdapter` |

##### `readMethod` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller   | Location                                      |
| -----: | ------: | -------- | --------------------------------------------- |
| 100.0% |       2 | `accept` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `hasNext` (`kotlin.collections.EmptyIterator`)

|     % | Samples | Caller                                  | Location                                                                         |
| ----: | ------: | --------------------------------------- | -------------------------------------------------------------------------------- |
| 50.0% |       1 | `flattenTo`                             | `org.jetbrains.kotlin.utils.addToStdlib.AddToStdlibKt`                           |
| 50.0% |       1 | `loadExperimentalitiesFromAnnotationTo` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker` |

##### `create` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`)

|      % | Samples | Caller            | Location                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `create$lambda$0` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `asSingleFqName` (`org.jetbrains.kotlin.name.ClassId`)

|      % | Samples | Caller                               | Location                                               |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------ |
| 100.0% |       1 | `appendConeType$appendClassLikeType` | `org.jetbrains.kotlin.fir.scopes.jvm.SignatureUtilsKt` |

##### `flushLastBuffer` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Caller         | Location                                          |
| -----: | ------: | -------------- | ------------------------------------------------- |
| 100.0% |       1 | `toByteString` | `org.jetbrains.kotlin.protobuf.ByteString$Output` |

##### `processFunctionsByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`)

|      % | Samples | Caller   | Location                                                                                     |
| -----: | ------: | -------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1` |

##### `runResolver` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

|      % | Samples | Caller        | Location                                                        |
| -----: | ------: | ------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `runResolver` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Caller                  | Location                                                                                      |
| -----: | ------: | ----------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionCall` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformFunctionContent` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|      % | Samples | Caller                                | Location                                                                                       |
| -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionWithGivenSignature` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `parametersCount` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|      % | Samples | Caller             | Location                                     |
| -----: | ------: | ------------------ | -------------------------------------------- |
| 100.0% |       1 | `captureArguments` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt` |

##### `accept` (`org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`)

|      % | Samples | Caller           | Location                                                    |
| -----: | ------: | ---------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `acceptChildren` | `org.jetbrains.kotlin.ir.expressions.IrContainerExpression` |

##### `readElementValue` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % | Samples | Caller              | Location                                      |
| -----: | ------: | ------------------- | --------------------------------------------- |
| 100.0% |       1 | `readElementValues` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `getClassLikeSymbolByClassId` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

|      % | Samples | Caller         | Location                                                                            |
| -----: | ------: | -------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `computeClass` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `accept` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

|      % | Samples | Caller         | Location                                                                                |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |

##### `check` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckVisibility`)

|      % | Samples | Caller          | Location                                                                                 |
| -----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `completeCall` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|      % | Samples | Caller                 | Location                                                      |
| -----: | ------: | ---------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `completeCall$default` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `accept` (`org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`)

|      % | Samples | Caller         | Location                                                                                |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor` |

##### `accept` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

|      % | Samples | Caller   | Location                                        |
| -----: | ------: | -------- | ----------------------------------------------- |
| 100.0% |       1 | `accept` | `org.jetbrains.org.objectweb.asm.tree.InsnList` |

##### `analyze` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`)

|      % | Samples | Caller      | Location                                                                                           |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transform` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `processDefaultsAndRunChecks` (`org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`)

|      % | Samples | Caller         | Location                                                                         |
| -----: | ------: | -------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `mapArguments` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirArgumentsToParametersMapperKt` |

##### `copyOf` (`java.util.Arrays`)

|      % | Samples | Caller                   | Location                          |
| -----: | ------: | ------------------------ | --------------------------------- |
| 100.0% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `linkCallSiteImpl` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Caller         | Location                               |
| -----: | ------: | -------------- | -------------------------------------- |
| 100.0% |       1 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `isEmpty` (`kotlin.collections.builders.MapBuilder`)

|      % | Samples | Caller   | Location                                                                       |
| -----: | ------: | -------- | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `create` | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$Companion` |

##### `remove` (`java.util.HashMap`)

|      % | Samples | Caller   | Location            |
| -----: | ------: | -------- | ------------------- |
| 100.0% |       1 | `remove` | `java.util.HashSet` |

##### `checkIndex` (`java.util.Objects`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |       1 | `get`  | `java.util.ArrayList` |

##### `valueOf` (`java.lang.String`)

|      % | Samples | Caller           | Location                                                                                    |
| -----: | ------: | ---------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `checkLightTree` | `org.jetbrains.kotlin.fir.analysis.checkers.syntax.FirUnderscoredTypeArgumentSyntaxChecker` |

##### `checkForComodification$kotlin_stdlib` (`kotlin.collections.builders.MapBuilder$Itr`)

|      % | Samples | Caller | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |       1 | `next` | `kotlin.collections.builders.MapBuilder$EntriesItr` |

##### `drop` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|      % | Samples | Caller                | Location                                                                    |
| -----: | ------: | --------------------- | --------------------------------------------------------------------------- |
| 100.0% |       1 | `capitalizeFirstWord` | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |

##### `hasNext` (`java.util.LinkedHashMap$LinkedHashIterator`)

|      % | Samples | Caller                  | Location                                                                                                |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `getAssignedProperties` | `org.jetbrains.kotlin.fir.resolve.dfa.FirLocalVariableAssignmentAnalyzer$Companion$VariableAssignments` |

##### `readFullyAt` (`java.util.zip.ZipFile$Source`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |       1 | `initDataOffset` | `java.util.zip.ZipFile$ZipFileInputStream` |

##### `get` (`java.lang.ThreadLocal`)

|      % | Samples | Caller | Location                |
| -----: | ------: | ------ | ----------------------- |
| 100.0% |       1 | `get`  | `java.lang.ThreadLocal` |

##### `<init>` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller                           | Location                               |
| -----: | ------: | -------------------------------- | -------------------------------------- |
| 100.0% |       1 | `varHandleOperationLinkerMethod` | `java.lang.invoke.MethodHandleNatives` |

##### `equals` (`java.lang.String`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |       1 | `getNode` | `java.util.HashMap` |

##### `size` (`java.util.Collections$SingletonList`)

|      % | Samples | Caller    | Location                       |
| -----: | ------: | --------- | ------------------------------ |
| 100.0% |       1 | `isEmpty` | `java.util.AbstractCollection` |

##### `nextInt` (`kotlin.ranges.IntProgressionIterator`)

|      % | Samples | Caller | Location                         |
| -----: | ------: | ------ | -------------------------------- |
| 100.0% |       1 | `next` | `kotlin.collections.IntIterator` |

##### `isEmpty` (`kotlin.collections.EmptyList`)

|      % | Samples | Caller             | Location                                                |
| -----: | ------: | ------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `IrSimpleTypeImpl` | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt` |

##### `isWhitespace` (`java.lang.Character`)

|      % | Samples | Caller         | Location              |
| -----: | ------: | -------------- | --------------------- |
| 100.0% |       1 | `isWhitespace` | `java.lang.Character` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller   | Location                                       |
| -----: | ------: | -------- | ---------------------------------------------- |
| 100.0% |       1 | `<init>` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller   | Location                                 |
| -----: | ------: | -------- | ---------------------------------------- |
| 100.0% |       1 | `<init>` | `kotlin.collections.builders.MapBuilder` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                   | Location                                                |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 66.6% |     855 | `_pthread_start`                           | `<unknown>`                                             |
| 66.6% |     855 | `thread_start`                             | `<unknown>`                                             |
| 66.6% |     854 | `Thread::call_run`                         | `<unknown>`                                             |
| 66.6% |     854 | `thread_native_entry`                      | `<unknown>`                                             |
| 63.0% |     808 | `CompileBroker::compiler_thread_loop`      | `<unknown>`                                             |
| 63.0% |     808 | `JavaThread::thread_main_inner`            | `<unknown>`                                             |
| 61.8% |     793 | `CompileBroker::invoke_compiler_on_method` | `<unknown>`                                             |
| 43.3% |     555 | `C2Compiler::compile_method`               | `<unknown>`                                             |
| 43.2% |     554 | `Compile::Compile`                         | `<unknown>`                                             |
| 32.9% |     422 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.9% |     422 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.1% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.1% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.1% |     348 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000000301008400`    |
| 27.1% |     348 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`     |
| 27.1% |     348 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                      |
| 27.1% |     348 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.1% |     348 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.1% |     348 | `invoke`                                   | `java.lang.reflect.Method`                              |
| 27.0% |     347 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                   | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 63.0% |     808 | `CompileBroker::compiler_thread_loop`      | `<unknown>` |
| 61.8% |     793 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
| 43.3% |     555 | `C2Compiler::compile_method`               | `<unknown>` |
| 43.2% |     554 | `Compile::Compile`                         | `<unknown>` |
| 20.9% |     268 | `Compile::Code_Gen`                        | `<unknown>` |
| 17.8% |     228 | `Compilation::Compilation`                 | `<unknown>` |
| 17.7% |     227 | `Compilation::compile_method`              | `<unknown>` |
| 16.4% |     211 | `Compilation::compile_java_method`         | `<unknown>` |
| 16.0% |     205 | `Compile::Optimize`                        | `<unknown>` |
| 12.1% |     155 | `PhaseChaitin::Register_Allocate`          | `<unknown>` |
|  9.4% |     121 | `PhaseIdealLoop::optimize`                 | `<unknown>` |
|  8.3% |     106 | `PhaseIdealLoop::build_and_optimize`       | `<unknown>` |
|  8.3% |     106 | `PhaseIdealLoop::PhaseIdealLoop`           | `<unknown>` |
|  7.4% |      95 | `Compilation::emit_lir`                    | `<unknown>` |
|  6.5% |      84 | `LinearScan::do_linear_scan`               | `<unknown>` |
|  5.7% |      73 | `Compilation::build_hir`                   | `<unknown>` |
|  4.8% |      62 | `Compile::optimize_loops`                  | `<unknown>` |
|  4.7% |      60 | `PhaseIterGVN::optimize`                   | `<unknown>` |
|  4.4% |      56 | `PhaseIterGVN::transform_old`              | `<unknown>` |
|  4.4% |      56 | `GraphBuilder::GraphBuilder`               | `<unknown>` |

##### Native

|     % | Samples | Function                                        | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 66.6% |     855 | `_pthread_start`                                | `<unknown>` |
| 66.6% |     855 | `thread_start`                                  | `<unknown>` |
| 66.6% |     854 | `Thread::call_run`                              | `<unknown>` |
| 66.6% |     854 | `thread_native_entry`                           | `<unknown>` |
| 63.0% |     808 | `JavaThread::thread_main_inner`                 | `<unknown>` |
| 17.8% |     228 | `Compiler::compile_method`                      | `<unknown>` |
|  5.1% |      65 | `Parse::do_one_block`                           | `<unknown>` |
|  5.1% |      65 | `Parse::do_all_blocks`                          | `<unknown>` |
|  5.1% |      65 | `Parse::Parse`                                  | `<unknown>` |
|  5.1% |      65 | `ParseGenerator::generate`                      | `<unknown>` |
|  5.0% |      64 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |
|  4.4% |      56 | `IRScope::IRScope`                              | `<unknown>` |
|  4.4% |      56 | `IR::IR`                                        | `<unknown>` |
|  4.3% |      55 | `Parse::do_call`                                | `<unknown>` |
|  3.9% |      50 | `Java_java_lang_ClassLoader_defineClass1`       | `<unknown>` |
|  3.9% |      50 | `inflate_fast`                                  | `<unknown>` |
|  3.8% |      49 | `jvm_define_class_common`                       | `<unknown>` |
|  3.8% |      49 | `JVM_DefineClassWithSource`                     | `<unknown>` |
|  3.7% |      48 | `SystemDictionary::resolve_class_from_stream`   | `<unknown>` |
|  3.5% |      45 | `KlassFactory::create_from_stream`              | `<unknown>` |

##### Ours

|     % | Samples | Function                                   | Location                                                         |
| ----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| 32.9% |     422 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 32.9% |     422 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                      |
| 27.1% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`           |
| 27.1% |     348 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 27.0% |     347 | `doMainNoExit$default`                     | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 27.0% |     347 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 27.0% |     346 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 27.0% |     346 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`          |
| 26.0% |     333 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                     |
| 26.0% |     333 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                    |
| 25.9% |     332 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.9% |     332 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.9% |     332 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.7% |     330 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`          |
| 25.6% |     329 | `phaseBody`                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
| 25.6% |     329 | `invoke`                                   | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| 25.6% |     329 | `invoke`                                   | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`      |
| 25.6% |     329 | `invokeToplevel`                           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`             |
| 17.1% |     220 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
| 12.2% |     157 | `resolveAndCheckFir`                       | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### Standard library

|     % | Samples | Function                | Location                                              |
| ----: | ------: | ----------------------- | ----------------------------------------------------- |
| 27.1% |     348 | `invokeStatic`          | `java.lang.invoke.LambdaForm$DMH.0x0000000301008400`  |
| 27.1% |     348 | `invoke`                | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`   |
| 27.1% |     348 | `invokeExact_MT`        | `java.lang.invoke.Invokers$Holder`                    |
| 27.1% |     348 | `invokeImpl`            | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.1% |     348 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.1% |     348 | `invoke`                | `java.lang.reflect.Method`                            |
|  5.1% |      65 | `read`                  | `java.util.zip.InflaterInputStream`                   |
|  5.1% |      65 | `read`                  | `java.util.zip.ZipInputStream`                        |
|  5.1% |      65 | `read`                  | `java.io.FilterInputStream`                           |
|  5.0% |      64 | `inflateBytesBytes`     | `java.util.zip.Inflater`                              |
|  5.0% |      64 | `inflate`               | `java.util.zip.Inflater`                              |
|  4.4% |      57 | `loadClass`             | `java.lang.ClassLoader`                               |
|  4.1% |      53 | `defineClass`           | `java.lang.ClassLoader`                               |
|  3.9% |      50 | `defineClass1`          | `java.lang.ClassLoader`                               |
|  3.6% |      46 | `resumeWith`            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.1% |      14 | `getValue`              | `kotlin.SafePublicationLazyImpl`                      |
|  1.1% |      14 | `checkNotNullParameter` | `kotlin.jvm.internal.Intrinsics`                      |
|  1.0% |      13 | `getValue`              | `kotlin.SynchronizedLazyImpl`                         |
|  0.8% |      10 | `linkCallSiteImpl`      | `java.lang.invoke.MethodHandleNatives`                |
|  0.8% |      10 | `linkCallSite`          | `java.lang.invoke.MethodHandleNatives`                |

##### JIT

|    % | Samples | Function                        | Location    |
| ---: | ------: | ------------------------------- | ----------- |
| 0.5% |       6 | `I2C/C2I adapters(0xb)`         | `<unknown>` |
| 0.3% |       4 | `I2C/C2I adapters(0xbb)`        | `<unknown>` |
| 0.2% |       3 | `itable stub`                   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`         | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                   | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbebaabaa)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 99.9% |     854 | `thread_native_entry` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`      | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     855 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 94.6% |     808 | `JavaThread::thread_main_inner` | `<unknown>` |
|  4.9% |      42 | `WorkerThread::run`             | `<unknown>` |
|  0.2% |       2 | `VMThread::run`                 | `<unknown>` |
|  0.2% |       2 | `WatcherThread::run`            | `<unknown>` |

##### `thread_native_entry` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |     854 | `Thread::call_run` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 98.1% |     793 | `CompileBroker::invoke_compiler_on_method` | `<unknown>` |
|  1.7% |      14 | `CompileQueue::get`                        | `<unknown>` |
|  0.1% |       1 | `CompileTaskWrapper::~CompileTaskWrapper`  | `<unknown>` |

##### `JavaThread::thread_main_inner` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |     808 | `CompileBroker::compiler_thread_loop` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 70.0% |     555 | `C2Compiler::compile_method`    | `<unknown>` |
| 28.8% |     228 | `Compiler::compile_method`      | `<unknown>` |
|  0.4% |       3 | `ciEnv::get_method_from_handle` | `<unknown>` |
|  0.3% |       2 | `ciEnv::ciEnv`                  | `<unknown>` |
|  0.3% |       2 | `ciEnv::~ciEnv`                 | `<unknown>` |

##### `C2Compiler::compile_method` (`<unknown>`)

|     % | Samples | Callee             | Location    |
| ----: | ------: | ------------------ | ----------- |
| 99.8% |     554 | `Compile::Compile` | `<unknown>` |
|  0.2% |       1 | `Chunk::next_chop` | `<unknown>` |

##### `Compile::Compile` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 48.4% |     268 | `Compile::Code_Gen`                      | `<unknown>` |
| 37.0% |     205 | `Compile::Optimize`                      | `<unknown>` |
| 11.2% |      62 | `ParseGenerator::generate`               | `<unknown>` |
|  1.6% |       9 | `PhaseRemoveUseless::PhaseRemoveUseless` | `<unknown>` |
|  0.7% |       4 | `CallGenerator::for_inline`              | `<unknown>` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 82.5% |     348 | `invoke`         | `java.lang.reflect.Method`                             |
| 17.5% |      74 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |     422 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee   | Location                                                |
| ----: | ------: | -------- | ------------------------------------------------------- |
| 99.7% |     347 | `doMain` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee | Location                                               |
| -----: | ------: | ------ | ------------------------------------------------------ |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000000301008400`)

|      % | Samples | Callee | Location                                     |
| -----: | ------: | ------ | -------------------------------------------- |
| 100.0% |     348 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000301009800`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000301008400` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     348 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x0000000301009800`  |
|   1.7% |       6 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000301234000` |
|   0.6% |       2 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |     348 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee       | Location                                          |
| -----: | ------: | ------------ | ------------------------------------------------- |
| 100.0% |     348 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

|      % | Samples | Callee                  | Location                                          |
| -----: | ------: | ----------------------- | ------------------------------------------------- |
| 100.0% |     348 | `invoke`                | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.6% |       2 | `acquireMethodAccessor` | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                   | Location                                                |
| ----: | ------: | ------------------------ | ------------------------------------------------------- |
| 99.7% |     346 | `doMainNoExit`           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                 | Location                                                |
| -----: | ------: | ---------------------- | ------------------------------------------------------- |
| 100.0% |     347 | `doMainNoExit$default` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                   | Location                                                                |
| -----: | ------: | ---------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |     346 | `exec`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  96.2% |     333 | `execImpl`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|   2.0% |       7 | `<clinit>`                               | `org.jetbrains.kotlin.cli.common.ArgumentsKt`                           |
|   1.2% |       4 | `parseCommandLineArguments$default`      | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   0.3% |       1 | `InterpreterRuntime::resolve_from_cache` | `<unknown>`                                                             |

##### `doMainNoExit` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee | Location                                      |
| -----: | ------: | ------ | --------------------------------------------- |
| 100.0% |     346 | `exec` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doExecutePhased` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |     333 | `doExecutePhased`              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  99.7% |     332 | `execute`                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|   0.3% |       1 | `getDefaultPerformanceManager` | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `execImpl` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee            | Location                                     |
| -----: | ------: | ----------------- | -------------------------------------------- |
| 100.0% |     333 | `doExecutePhased` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                      |
| ----: | ------: | -------------------------- | ------------------------------------------------------------- |
| 99.4% |     330 | `runPhasedPipeline`        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>`                   | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |
|  0.3% |       1 | `disposeRootInWriteAction` | `org.jetbrains.kotlin.cli.common.UtilsKt`                     |

##### `executeAndReturnPipeLineArtifact$default` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                             | Location                                                |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------- |
| 100.0% |     332 | `executeAndReturnPipeLineArtifact` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                     | Location                                                |
| -----: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| 100.0% |     332 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                     | Location                                                                    |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------------- |
| 99.7% |     329 | `invokeToplevel`           | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.3% |       1 | `reportToMessageCollector` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee         | Location                                                              |
| -----: | ------: | -------------- | --------------------------------------------------------------------- |
| 100.0% |     329 | `phaseBody`    | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                     |
|  66.9% |     220 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  22.8% |      75 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|   8.8% |      29 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   1.2% |       4 | `executePhase` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `invoke` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee      | Location                                                         |
| -----: | ------: | ----------- | ---------------------------------------------------------------- |
| 100.0% |     329 | `phaseBody` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   4.9% |      16 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.8% |       6 | `phaseBody` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
|   0.3% |       1 | `isEnabled` | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `invoke` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % | Samples | Callee   | Location                                                |
| -----: | ------: | -------- | ------------------------------------------------------- |
| 100.0% |     329 | `invoke` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % | Samples | Callee   | Location                                                    |
| -----: | ------: | -------- | ----------------------------------------------------------- |
| 100.0% |     329 | `invoke` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `Compile::Code_Gen` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 57.8% |     155 | `PhaseChaitin::Register_Allocate` | `<unknown>` |
| 14.2% |      38 | `Matcher::match`                  | `<unknown>` |
| 13.1% |      35 | `PhaseOutput::Output`             | `<unknown>` |
| 12.7% |      34 | `PhaseCFG::do_global_code_motion` | `<unknown>` |
|  1.1% |       3 | `PhaseOutput::install_code`       | `<unknown>` |

##### `Compilation::Compilation` (`<unknown>`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 99.6% |     227 | `Compilation::compile_method` | `<unknown>` |

##### `Compiler::compile_method` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |     228 | `Compilation::Compilation` | `<unknown>` |

##### `Compilation::compile_method` (`<unknown>`)

|     % | Samples | Callee                             | Location    |
| ----: | ------: | ---------------------------------- | ----------- |
| 93.0% |     211 | `Compilation::compile_java_method` | `<unknown>` |
|  7.0% |      16 | `ciEnv::register_method`           | `<unknown>` |

##### `executePhase` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|      % | Samples | Callee                        | Location                                                         |
| -----: | ------: | ----------------------------- | ---------------------------------------------------------------- |
| 100.0% |     220 | `executePhase`                | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|  71.4% |     157 | `resolveAndCheckFir`          | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|   9.5% |      21 | `createEnvironmentAndSources` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   8.2% |      18 | `prepareJvmSessions`          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   7.3% |      16 | `buildFirViaLightTree`        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |

##### `Compilation::compile_java_method` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 45.0% |      95 | `Compilation::emit_lir`        | `<unknown>` |
| 34.6% |      73 | `Compilation::build_hir`       | `<unknown>` |
| 19.9% |      42 | `Compilation::emit_code_body`  | `<unknown>` |
|  0.5% |       1 | `ciMethod::ensure_method_data` | `<unknown>` |

##### `Compile::Optimize` (`<unknown>`)

|     % | Samples | Callee                     | Location    |
| ----: | ------: | -------------------------- | ----------- |
| 30.2% |      62 | `Compile::optimize_loops`  | `<unknown>` |
| 28.8% |      59 | `PhaseIdealLoop::optimize` | `<unknown>` |
| 16.6% |      34 | `PhaseIterGVN::optimize`   | `<unknown>` |
|  6.8% |      14 | `PhaseCCP::PhaseCCP`       | `<unknown>` |
|  3.9% |       8 | `PhaseCCP::do_transform`   | `<unknown>` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

|     % | Samples | Callee          | Location                                      |
| ----: | ------: | --------------- | --------------------------------------------- |
| 75.2% |     118 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| 24.8% |      39 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `PhaseChaitin::Register_Allocate` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 19.4% |      30 | `PhaseChaitin::build_ifg_physical`         | `<unknown>` |
| 14.2% |      22 | `PhaseChaitin::Split`                      | `<unknown>` |
| 13.5% |      21 | `PhaseLive::compute`                       | `<unknown>` |
| 11.6% |      18 | `PhaseChaitin::gather_lrg_masks`           | `<unknown>` |
|  9.0% |      14 | `PhaseChaitin::post_allocate_copy_removal` | `<unknown>` |

##### `PhaseIdealLoop::optimize` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 87.6% |     106 | `PhaseIdealLoop::PhaseIdealLoop` | `<unknown>` |
| 12.4% |      15 | `PhaseIterGVN::optimize`         | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 37.7% |      40 | `PhaseIdealLoop::build_loop_late`      | `<unknown>` |
| 17.9% |      19 | `PhaseIdealLoop::split_if_with_blocks` | `<unknown>` |
| 11.3% |      12 | `PhaseIdealLoop::build_loop_early`     | `<unknown>` |
|  8.5% |       9 | `PhaseIdealLoop::Dominators`           | `<unknown>` |
|  4.7% |       5 | `PhaseIdealLoop::build_loop_tree`      | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |     106 | `PhaseIdealLoop::build_and_optimize` | `<unknown>` |

##### `Compilation::emit_lir` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 88.4% |      84 | `LinearScan::do_linear_scan` | `<unknown>` |
| 11.6% |      11 | `BlockList::iterate_forward` | `<unknown>` |

##### `LinearScan::do_linear_scan` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 41.7% |      35 | `LinearScan::allocate_registers`      | `<unknown>` |
| 19.0% |      16 | `LinearScan::assign_reg_num`          | `<unknown>` |
| 17.9% |      15 | `LinearScan::build_intervals`         | `<unknown>` |
|  7.1% |       6 | `LinearScan::compute_local_live_sets` | `<unknown>` |
|  2.4% |       2 | `LinearScan::eliminate_spill_moves`   | `<unknown>` |

##### `Compilation::build_hir` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 76.7% |      56 | `IR::IR`                                     | `<unknown>` |
|  6.8% |       5 | `IR::compute_use_counts`                     | `<unknown>` |
|  5.5% |       4 | `IR::eliminate_null_checks`                  | `<unknown>` |
|  5.5% |       4 | `IR::compute_code`                           | `<unknown>` |
|  4.1% |       3 | `GlobalValueNumbering::GlobalValueNumbering` | `<unknown>` |

##### `Parse::do_one_block` (`<unknown>`)

|     % | Samples | Callee                   | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 84.6% |      55 | `Parse::do_call`         | `<unknown>` |
| 15.4% |      10 | `Parse::do_field_access` | `<unknown>` |
|  6.2% |       4 | `Parse::do_one_bytecode` | `<unknown>` |
|  4.6% |       3 | `Parse::do_if`           | `<unknown>` |
|  3.1% |       2 | `Parse::array_load`      | `<unknown>` |

##### `Parse::do_all_blocks` (`<unknown>`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |      65 | `Parse::do_one_block` | `<unknown>` |
|   1.5% |       1 | `Parse::merge_common` | `<unknown>` |

##### `Parse::Parse` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      65 | `Parse::do_all_blocks`    | `<unknown>` |
|   1.5% |       1 | `Parse::do_exits`         | `<unknown>` |
|   1.5% |       1 | `GraphKit::set_map_clone` | `<unknown>` |
|   1.5% |       1 | `Parse::build_exits`      | `<unknown>` |
|   1.5% |       1 | `ciMethod::method_data`   | `<unknown>` |

##### `ParseGenerator::generate` (`<unknown>`)

|      % | Samples | Callee         | Location    |
| -----: | ------: | -------------- | ----------- |
| 100.0% |      65 | `Parse::Parse` | `<unknown>` |

##### `read` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee    | Location                                           |
| ----: | ------: | --------- | -------------------------------------------------- |
| 98.5% |      64 | `inflate` | `java.util.zip.Inflater`                           |
|  1.5% |       1 | `fill`    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `read` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 98.5% |      64 | `read`   | `java.util.zip.InflaterInputStream` |
|  1.5% |       1 | `update` | `java.util.zip.CRC32`               |

##### `read` (`java.io.FilterInputStream`)

|      % | Samples | Callee | Location                       |
| -----: | ------: | ------ | ------------------------------ |
| 100.0% |      65 | `read` | `java.util.zip.ZipInputStream` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 78.1% |      50 | `inflate_fast`                  | `<unknown>` |
| 20.3% |      13 | `inflate`                       | `<unknown>` |
|  1.6% |       1 | `jni_GetPrimitiveArrayCritical` | `<unknown>` |

##### `inflateBytesBytes` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      64 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `inflate` (`java.util.zip.Inflater`)

|      % | Samples | Callee              | Location                 |
| -----: | ------: | ------------------- | ------------------------ |
| 100.0% |      64 | `inflateBytesBytes` | `java.util.zip.Inflater` |

##### `Compile::optimize_loops` (`<unknown>`)

|      % | Samples | Callee                     | Location    |
| -----: | ------: | -------------------------- | ----------- |
| 100.0% |      62 | `PhaseIdealLoop::optimize` | `<unknown>` |

##### `PhaseIterGVN::optimize` (`<unknown>`)

|     % | Samples | Callee                                    | Location    |
| ----: | ------: | ----------------------------------------- | ----------- |
| 93.3% |      56 | `PhaseIterGVN::transform_old`             | `<unknown>` |
|  1.7% |       1 | `PhaseIterGVN::remove_globally_dead_node` | `<unknown>` |
|  1.7% |       1 | `LoadNode::Value`                         | `<unknown>` |

##### `loadClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee                     | Location                                                 |
| ----: | ------: | -------------------------- | -------------------------------------------------------- |
| 94.7% |      54 | `findClass`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.8% |       1 | `findClass`                | `java.net.URLClassLoader`                                |
|  1.8% |       1 | `loadClass`                | `java.lang.ClassLoader`                                  |
|  1.8% |       1 | `findBootstrapClassOrNull` | `java.lang.ClassLoader`                                  |
|  1.8% |       1 | `loadClass`                | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader`   |

##### `PhaseIterGVN::transform_old` (`<unknown>`)

|     % | Samples | Callee                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 10.7% |       6 | `RegionNode::Ideal`          | `<unknown>` |
|  8.9% |       5 | `IfNode::Ideal`              | `<unknown>` |
|  7.1% |       4 | `PhaseIterGVN::subsume_node` | `<unknown>` |
|  7.1% |       4 | `NodeHash::hash_find_insert` | `<unknown>` |
|  7.1% |       4 | `MergeMemNode::Ideal`        | `<unknown>` |

##### `GraphBuilder::GraphBuilder` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 92.9% |      52 | `GraphBuilder::iterate_all_blocks`   | `<unknown>` |
|  5.4% |       3 | `BlockListBuilder::BlockListBuilder` | `<unknown>` |
|  1.8% |       1 | `BlockBegin::iterate_preorder`       | `<unknown>` |

##### `IRScope::IRScope` (`<unknown>`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |      56 | `GraphBuilder::GraphBuilder` | `<unknown>` |

##### `IR::IR` (`<unknown>`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |      56 | `IRScope::IRScope` | `<unknown>` |

##### `Parse::do_call` (`<unknown>`)

|     % | Samples | Callee                                               | Location    |
| ----: | ------: | ---------------------------------------------------- | ----------- |
| 69.1% |      38 | `PredictedCallGenerator::generate`                   | `<unknown>` |
| 56.4% |      31 | `ParseGenerator::generate`                           | `<unknown>` |
| 20.0% |      11 | `Compile::call_generator`                            | `<unknown>` |
|  3.6% |       2 | `GraphKit::record_profiled_receiver_for_speculation` | `<unknown>` |
|  1.8% |       1 | `Compile::optimize_inlining`                         | `<unknown>` |

##### `defineClass` (`java.lang.ClassLoader`)

|     % | Samples | Callee            | Location                |
| ----: | ------: | ----------------- | ----------------------- |
| 98.1% |      52 | `defineClass`     | `java.lang.ClassLoader` |
| 94.3% |      50 | `defineClass1`    | `java.lang.ClassLoader` |
|  3.8% |       2 | `postDefineClass` | `java.lang.ClassLoader` |
|  1.9% |       1 | `preDefineClass`  | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 98.0% |      49 | `JVM_DefineClassWithSource` | `<unknown>` |
|  2.0% |       1 | `jni_GetByteArrayRegion`    | `<unknown>` |

##### `defineClass1` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |      50 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
|  12.0% |       6 | `loadClass`                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `jvm_define_class_common` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 98.0% |      48 | `SystemDictionary::resolve_class_from_stream` | `<unknown>` |
|  2.0% |       1 | `SymbolTable::new_symbol`                     | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      49 | `jvm_define_class_common` | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 89.6% |      43 | `KlassFactory::create_from_stream`         | `<unknown>` |
|  8.3% |       4 | `SystemDictionary::define_instance_class`  | `<unknown>` |
|  2.1% |       1 | `SystemDictionary::is_system_class_loader` | `<unknown>` |

##### `resumeWith` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee          | Location                                                                                                               |
| ----: | ------: | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 69.6% |      32 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
| 50.0% |      23 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
|  4.3% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
|  4.3% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                               |
|  4.3% |       2 | `invokeSuspend` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `KlassFactory::create_from_stream` (`<unknown>`)

|     % | Samples | Callee                                   | Location    |
| ----: | ------: | ---------------------------------------- | ----------- |
| 93.3% |      42 | `ClassFileParser::ClassFileParser`       | `<unknown>` |
|  6.7% |       3 | `ClassFileParser::create_instance_klass` | `<unknown>` |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee   | Location                                                                                                   |
| ----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 50.0% |       7 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 21.4% |       3 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000003015dcda8` |
| 14.3% |       2 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000030165b878`                  |
|  7.1% |       1 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000000301614718`                      |
|  7.1% |       1 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000030162d058`          |

##### `checkNotNullParameter` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee                    | Location                         |
| ----: | ------: | ------------------------- | -------------------------------- |
| 42.9% |       6 | `throwParameterIsNullNPE` | `kotlin.jvm.internal.Intrinsics` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee   | Location                                                                                         |
| ----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| 15.4% |       2 | `invoke` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x0000000301388ad0`             |
| 15.4% |       2 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000000301614fc0`             |
| 15.4% |       2 | `invoke` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000000301757b38`                       |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000000301144360` |
|  7.7% |       1 | `invoke` | `org.jetbrains.kotlin.fir.backend.Fir2IrBuiltinSymbolsContainer$$Lambda.0x0000000301784528`      |

##### `linkCallSiteImpl` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee               | Location                    |
| ----: | ------: | -------------------- | --------------------------- |
| 80.0% |       8 | `makeSite`           | `java.lang.invoke.CallSite` |
| 10.0% |       1 | `linkToTargetMethod` | `java.lang.invoke.Invokers` |

##### `linkCallSite` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Callee             | Location                               |
| -----: | ------: | ------------------ | -------------------------------------- |
| 100.0% |      10 | `linkCallSiteImpl` | `java.lang.invoke.MethodHandleNatives` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.5% |      45 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                        |
| 1.2% |      15 | `PhaseChaitin::Split` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                |
| 1.1% |      14 | `PhaseChaitin::build_ifg_physical` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                   |
| 0.8% |      10 | `PhaseChaitin::gather_lrg_masks` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                     |
| 0.7% |       9 | `__psynch_cvwait` ← `PlatformMonitor::wait` ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                             |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed` ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start` |
| 0.7% |       9 | `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                 |
| 0.7% |       9 | `PhaseAggressiveCoalesce::insert_copies` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                             |
| 0.6% |       8 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                           |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                           |
| 0.5% |       7 | `LinearScan::build_intervals` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                              |
| 0.5% |       7 | `Arena::contains` ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                  |
| 0.5% |       6 | `PhaseChaitin::elide_copy` ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                              |
| 0.5% |       6 | `IntervalWalker::walk_to` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                   |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_early` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                |
| 0.5% |       6 | `PhaseLive::add_liveout` ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                      |
| 0.5% |       6 | `PhaseIdealLoop::is_dominator` ← `PhaseIdealLoop::get_late_ctrl_with_anti_dep` ← `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`      |
| 0.4% |       5 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes` (`java.util.zip.Inflater`) ← `inflate` ← `read` (`java.util.zip.InflaterInputStream`) ← `read` (`java.util.zip.ZipInputStream`) ← `read` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses` ← `run` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main`                                                                                                                                                             |
| 0.4% |       5 | `Compile::disconnect_useless_nodes` ← `PhaseRemoveUseless::PhaseRemoveUseless` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                 |
| 0.4% |       5 | `PhaseIdealLoop::build_loop_late_post_work` ← `PhaseIdealLoop::build_loop_late` ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::optimize_loops` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` ← `thread_start`                                                                                       |
