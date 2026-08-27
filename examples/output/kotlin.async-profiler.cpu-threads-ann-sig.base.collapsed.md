# Sampling profile

Collected 1,366 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Compiler          | 45.5% |     622 |
| Native            | 38.9% |     531 |
| Ours              |  9.7% |     132 |
| Standard library  |  4.2% |      58 |
| JIT               |  1.5% |      21 |
| Garbage collector |  0.1% |       1 |
| Unknown           |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 4.0% |      54 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 1.9% |      26 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.5% |      21 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>` |
| 1.3% |      18 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.2% |      17 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                           | `<unknown>` |
| 1.1% |      15 | `IndexSetIterator::advance_and_next()`                                                                                                                                      | `<unknown>` |
| 1.0% |      14 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.7% |      10 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                                      | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::Dominators()`                                                                                                                                              | `<unknown>` |
| 0.7% |       9 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                                            | `<unknown>` |
| 0.7% |       9 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                                  | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                                     | `<unknown>` |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                                  | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                                      | `<unknown>` |
| 0.6% |       8 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.6% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                                                                                                                        | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.5% |      21 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                              | `<unknown>` |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                               | `<unknown>` |
| 1.1% |      15 | `IndexSetIterator::advance_and_next()`                                                                                                                          | `<unknown>` |
| 0.7% |      10 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                          | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::Dominators()`                                                                                                                                  | `<unknown>` |
| 0.7% |       9 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                      | `<unknown>` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                         | `<unknown>` |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                      | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                          | `<unknown>` |
| 0.6% |       8 | `Matcher::xform(Node*, int)`                                                                                                                                    | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal()`                                                                                                                    | `<unknown>` |
| 0.6% |       8 | `LIR_OpVisitState::visit(LIR_Op*)`                                                                                                                              | `<unknown>` |
| 0.6% |       8 | `Unique_Node_List::remove(Node*)`                                                                                                                               | `<unknown>` |
| 0.6% |       8 | `LinearScan::build_intervals()`                                                                                                                                 | `<unknown>` |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)`                                                                                                              | `<unknown>` |
| 0.5% |       7 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                        | `<unknown>` |
| 0.5% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)`                                                                                                                   | `<unknown>` |
| 0.4% |       6 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                                                                             | `<unknown>` |
| 0.4% |       6 | `NodeHash::hash_find_insert(Node*)`                                                                                                                             | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 4.0% |      54 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 1.9% |      26 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.3% |      18 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 1.2% |      17 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.0% |      14 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 0.8% |      11 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 0.7% |      10 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.7% |       9 | `ClassVerifier::verify_method(methodHandle const&, JavaThread*)`                                                                                                            | `<unknown>` |
| 0.6% |       8 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 0.6% |       8 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |
| 0.6% |       8 | `fwd_copy_again`                                                                                                                                                            | `<unknown>` |
| 0.5% |       7 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.5% |       7 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.4% |       6 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)`  | `<unknown>` |
| 0.4% |       6 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                                                               | `<unknown>` |
| 0.4% |       6 | `inflate_table`                                                                                                                                                             | `<unknown>` |
| 0.4% |       5 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)`                                           | `<unknown>` |
| 0.4% |       5 | `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)`                                                                                                  | `<unknown>` |
| 0.4% |       5 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)`                           | `<unknown>` |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                                                                                                                                     | Location                                                                                                     |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| 0.1% |       2 | `requiresEmptyStackOnEntry(MethodNode)`                                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion`                                         |
| 0.1% |       2 | `substitutionSupertypePolicy(RigidTypeMarker)`                                                                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                                             |
| 0.1% |       1 | `getParentNode(Disposable)`                                                                                                                                                                                                                                                                                                                                  | `com.intellij.openapi.util.ObjectTree`                                                                       |
| 0.1% |       1 | `hasExtensionKinds()`                                                                                                                                                                                                                                                                                                                                        | `org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor`                                          |
| 0.1% |       1 | `transformFile(FirFile, Object)`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`     |
| 0.1% |       1 | `<init>(FirProperty, FirMemberDeclaration, FirSession, boolean)`                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.PublishedApiEffectiveVisibilityKt$$Lambda.0x000000e0015f0430` |
| 0.1% |       1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`                                            |
| 0.1% |       1 | `getValue(Object, Object)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`                                        |
| 0.1% |       1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`     |
| 0.1% |       1 | `acceptChildren(IrVisitor, Object)`                                                                                                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                            |
| 0.1% |       1 | `visitBlock(FirBlock, Void)`                                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                            |
| 0.1% |       1 | `mark(Label)`                                                                                                                                                                                                                                                                                                                                                | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`                                                 |
| 0.1% |       1 | `hasNext()`                                                                                                                                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.utils.SmartSet$SingletonIterator`                                                      |
| 0.1% |       1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`                           |
| 0.1% |       1 | `visitWithCallOrAssignment(FirStatement)`                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                            |
| 0.1% |       1 | `isInitialized(Map$Entry)`                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.protobuf.FieldSet`                                                                     |
| 0.1% |       1 | `getTopLevelClassifierNamesInPackage(FqName)`                                                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`    |
| 0.1% |       1 | `writeUntil(int, CodedOutputStream)`                                                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage$ExtensionWriter`                       |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                                                                                                                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                       |
| 0.1% |       1 | `ensureNotFinalizedAndSameThread()`                                                                                                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.util.PerformanceManager`                                                               |

##### Standard library

|    % | Samples | Function                                                         | Location                                                                            |
| ---: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 0.3% |       4 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                                                    |
| 0.1% |       2 | `allocateInstance(Object)`                                       | `java.lang.invoke.DirectMethodHandle`                                               |
| 0.1% |       2 | `getNode(Object)`                                                | `java.util.HashMap`                                                                 |
| 0.1% |       2 | `next()`                                                         | `java.util.ArrayList$Itr`                                                           |
| 0.1% |       2 | `sanitizeStackTrace(Throwable)`                                  | `kotlin.jvm.internal.Intrinsics`                                                    |
| 0.1% |       1 | `listIterator(int)`                                              | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector` |
| 0.1% |       1 | `bindArgumentL(BoundMethodHandle, int, Object)`                  | `java.lang.invoke.LambdaFormEditor`                                                 |
| 0.1% |       1 | `spinInnerClass()`                                               | `java.lang.invoke.InnerClassLambdaMetafactory`                                      |
| 0.1% |       1 | `readAllBytes(Path)`                                             | `java.nio.file.Files`                                                               |
| 0.1% |       1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`    | `java.util.zip.Inflater`                                                            |
| 0.1% |       1 | `<init>()`                                                       | `java.util.AbstractList`                                                            |
| 0.1% |       1 | `assert(boolean)`                                                | `kotlinx.collections.immutable.internal.CommonFunctionsKt`                          |
| 0.1% |       1 | `makeImpl(Class, Class[], boolean)`                              | `java.lang.invoke.MethodType`                                                       |
| 0.1% |       1 | `<init>(int, Object, Object, HashMap$Node)`                      | `java.util.HashMap$Node`                                                            |
| 0.1% |       1 | `<init>(MessageDigestSpi, String, Provider)`                     | `java.security.MessageDigest$Delegate`                                              |
| 0.1% |       1 | `<init>(WeakHashMap)`                                            | `java.util.WeakHashMap$KeyIterator`                                                 |
| 0.1% |       1 | `getZipEntry(String, int)`                                       | `java.util.zip.ZipFile`                                                             |
| 0.1% |       1 | `toMap(Pair[], Map)`                                             | `kotlin.collections.MapsKt__MapsKt`                                                 |
| 0.1% |       1 | `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)` | `kotlin.collections.CollectionsKt__ReversedViewsKt`                                 |
| 0.1% |       1 | `addInitializedType(int)`                                        | `jdk.internal.org.objectweb.asm.Frame`                                              |

##### JIT

|    % | Samples | Function                           | Location    |
| ---: | ------: | ---------------------------------- | ----------- |
| 0.5% |       7 | `I2C/C2I adapters(0xbb)`           | `<unknown>` |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`            | `<unknown>` |
| 0.1% |       2 | `vtable stub`                      | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`            | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbb)`          | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0x)`             | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbbbababab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbba)`       | `<unknown>` |
| 0.1% |       1 | `itable stub`                      | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                      | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      54 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                                                                       | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 7.7% |       2 | `GraphBuilder::try_inline_full(ciMethod*, bool, bool, Bytecodes::Code, Instruction*)`        | `<unknown>` |
| 3.8% |       1 | `PhaseMacroExpand::expand_initialize_membar(AllocateNode*, InitializeNode*, Node*&, Node*&)` | `<unknown>` |
| 3.8% |       1 | `PhaseValues::longcon(long)`                                                                 | `<unknown>` |
| 3.8% |       1 | `Parse::do_instanceof()`                                                                     | `<unknown>` |
| 3.8% |       1 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                            | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      21 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                           | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 77.8% |      14 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const` | `<unknown>` |
| 16.7% |       3 | `InstanceKlass::find_method(Symbol const*, Symbol const*) const`                                                                 | `<unknown>` |
|  5.6% |       1 | `InstanceKlass::initialize_impl(JavaThread*)`                                                                                    | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|     % | Samples | Caller                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 64.7% |      11 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                             | `<unknown>` |
| 23.5% |       4 | `SymbolTable::new_symbol(char const*, int)`                                                             | `<unknown>` |
| 11.8% |       2 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      16 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                                                                                                      | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 20.0% |       3 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)`                                                        | `<unknown>` |
| 20.0% |       3 | `PhaseIFG::re_insert(unsigned int)`                                                                                         | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::Select()`                                                                                                    | `<unknown>` |
| 13.3% |       2 | `PhaseIFG::SquareUp()`                                                                                                      | `<unknown>` |
| 13.3% |       2 | `PhaseChaitin::compute_initial_block_pressure(Block*, IndexSet*, PhaseChaitin::Pressure&, PhaseChaitin::Pressure&, double)` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 14.3% |       2 | `ConstMethod::allocate(ClassLoaderData*, int, InlineTableSizes*, ConstMethod::MethodType, JavaThread*)` | `<unknown>` |
| 14.3% |       2 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  7.1% |       1 | `BlockListBuilder::make_block_at(int, BlockBegin*)`                                                     | `<unknown>` |
|  7.1% |       1 | `MethodData::allocate(ClassLoaderData*, methodHandle const&, JavaThread*)`                              | `<unknown>` |
|  7.1% |       1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep(LoadNode*, Node*, Node*)`                                  | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 54.5% |       6 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 45.5% |       5 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                            | Location                |
| ----: | ------: | ----------------------------------------------------------------- | ----------------------- |
| 20.0% |       2 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)`          | `<unknown>`             |
| 10.0% |       1 | `InterpreterRuntime::ldc(JavaThread*, bool)`                      | `<unknown>`             |
| 10.0% |       1 | `jni_GetStringUTFLength`                                          | `<unknown>`             |
| 10.0% |       1 | `InterpreterRuntime::build_method_counters(JavaThread*, Method*)` | `<unknown>`             |
| 10.0% |       1 | `findLoadedClass0(String)`                                        | `java.lang.ClassLoader` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `ClassVerifier::verify_method(methodHandle const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Caller                                                | Location    |
| ----: | ------: | ----------------------------------------------------- | ----------- |
| 88.9% |       8 | `ClassVerifier::verify_class(JavaThread*)`            | `<unknown>` |
| 11.1% |       1 | `Verifier::verify(InstanceKlass*, bool, JavaThread*)` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       3 | `ciMethod::ensure_method_data(methodHandle const&)`                                       | `<unknown>` |
| 22.2% |       2 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| 11.1% |       1 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                      | `<unknown>` |
| 11.1% |       1 | `ciMethod::method_data()`                                                                 | `<unknown>` |
| 11.1% |       1 | `ciObjectFactory::create_new_metadata(Metadata*)`                                         | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       9 | `LinearScanWalker::alloc_free_reg(Interval*)` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |       8 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 87.5% |       7 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`                                                                         | `<unknown>` |
| 12.5% |       1 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |

##### `Matcher::xform(Node*, int)` (`<unknown>`)

|      % | Samples | Caller             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |       8 | `Matcher::match()` | `<unknown>` |

##### `PhaseChaitin::post_allocate_copy_removal()` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `LIR_OpVisitState::visit(LIR_Op*)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 37.5% |       3 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
| 37.5% |       3 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 25.0% |       2 | `LinearScan::do_linear_scan()`                                         | `<unknown>` |

##### `Unique_Node_List::remove(Node*)` (`<unknown>`)

|     % | Samples | Caller                                           | Location    |
| ----: | ------: | ------------------------------------------------ | ----------- |
| 87.5% |       7 | `PhaseIterGVN::remove_globally_dead_node(Node*)` | `<unknown>` |
| 12.5% |       1 | `Node::remove_dead_region(PhaseGVN*, bool)`      | `<unknown>` |

##### `LinearScan::build_intervals()` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |       8 | `LinearScan::do_linear_scan()` | `<unknown>` |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 62.5% |       5 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| 25.0% |       2 | `CodeBuffer::copy_code_to(CodeBlob*)`                         | `<unknown>` |
| 12.5% |       1 | `LinearScan::compute_global_live_sets()`                      | `<unknown>` |

##### `PhaseAggressiveCoalesce::insert_copies(Matcher&)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` (`<unknown>`)

|     % | Samples | Caller                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 71.4% |       5 | `LIR_Assembler::record_non_safepoint_debug_info()` | `<unknown>` |
| 28.6% |       2 | `NonSafepointEmitter::emit_non_safepoint()`        | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|      % | Samples | Caller                                                                 | Location    |
| -----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 100.0% |       7 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       7 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|     % | Samples | Caller                       | Location    |
| ----: | ------: | ---------------------------- | ----------- |
| 85.7% |       6 | `Matcher::xform(Node*, int)` | `<unknown>` |
| 14.3% |       1 | `Matcher::match()`           | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 42.9% |       3 | `ICStub::finalize()`                                                                                                                                                                                                                                              | `<unknown>` |
| 14.3% |       1 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                                 | `<unknown>` |
| 14.3% |       1 | `I2C/C2I adapters(0xbbb)`                                                                                                                                                                                                                                         | `<unknown>` |
| 14.3% |       1 | `nmethod::oops_do_process_weak(nmethod::OopsDoProcessor*)`                                                                                                                                                                                                        | `<unknown>` |
| 14.3% |       1 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                                                                                                      | Location                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 14.3% |       1 | `visitRichFunctionReference(IrRichFunctionReference)`                                                                                                                                                                                                                                                                                       | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                  |
| 14.3% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirDeclarationStatus, boolean, FirTypeRef, FirReceiverParameter, DeprecationsProvider, DeserializedContainerSource, ConeSimpleKotlinType, List, List, FirBlock, FirContractDescription, Name, FirNamedFunctionSymbol, List, List)` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl` |
| 14.3% |       1 | `visitClass(IrClass, Void)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`                  |
| 14.3% |       1 | `addValueParametersTo(List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List)`                                                                                                                                                                | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`  |
| 14.3% |       1 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`          |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 50.0% |       3 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |
| 50.0% |       3 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |

##### `NodeHash::hash_find_insert(Node*)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                        | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.7% |       4 | `PhaseIterGVN::transform_old(Node*)`                                                                                                                                          | `<unknown>` |
| 16.7% |       1 | `PhaseValues::uncached_makecon(Type const*)`                                                                                                                                  | `<unknown>` |
| 16.7% |       1 | `LoadNode::make(PhaseGVN&, Node*, Node*, Node*, TypePtr const*, Type const*, BasicType, MemNode::MemOrd, LoadNode::ControlDependency, bool, bool, bool, bool, unsigned char)` | `<unknown>` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>(G1ScanEvacuatedObjClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                                                  | Location    |
| -----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       6 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` | `<unknown>` |

##### `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 50.0% |       3 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)`                                                                   | `<unknown>` |
| 33.3% |       2 | `G1ParScanThreadState::steal_and_trim_queue(GenericTaskQueueSet<OverflowTaskQueue<ScannerTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>*)` | `<unknown>` |
| 16.7% |       1 | `G1ParEvacuateFollowersClosure::do_void()`                                                                                            | `<unknown>` |

##### `inflate_table` (`<unknown>`)

|      % | Samples | Caller    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       6 | `inflate` | `<unknown>` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1CMOopClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                           | Location    |
| -----: | ------: | ---------------------------------------------------------------- | ----------- |
| 100.0% |       5 | `void G1CMTask::process_grey_task_entry<true>(G1TaskQueueEntry)` | `<unknown>` |

##### `resource_allocate_bytes(unsigned long, AllocFailStrategy::AllocFailEnum)` (`<unknown>`)

|     % | Samples | Caller                                                                            | Location    |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------- |
| 20.0% |       1 | `ResourceBitMap::ResourceBitMap(unsigned long, bool)`                             | `<unknown>` |
| 20.0% |       1 | `FrameMap::java_calling_convention(GrowableArray<BasicType> const*, bool)`        | `<unknown>` |
| 20.0% |       1 | `GrowableArrayWithAllocator<Interval*, GrowableArray<Interval*>>::expand_to(int)` | `<unknown>` |
| 20.0% |       1 | `BlockBegin::BlockBegin(int)`                                                     | `<unknown>` |
| 20.0% |       1 | `ciMethodData::data_from(DataLayout*)`                                            | `<unknown>` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>(G1RebuildRemSetClosure*, oopDesc*, Klass*)` (`<unknown>`)

|      % | Samples | Caller                                                                                                | Location    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |       5 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object(HeapRegion*, HeapWordImpl**)` | `<unknown>` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|     % | Samples | Caller                                                                                                              | Location                                                                                                      |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 20.0% |       1 | `getResolvePhase(FirElementWithResolveState)`                                                                       | `org.jetbrains.kotlin.fir.declarations.FirResolveStateKt`                                                     |
| 20.0% |       1 | `writeGenericArguments(TypeSystemCommonBackendContext, JvmSignatureWriter, List, List, TypeMappingMode, Function3)` | `org.jetbrains.kotlin.codegen.state.KotlinTypeMapper$Companion`                                               |
| 20.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)`                                           | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirUpperBoundViolatedQualifiedAccessExpressionChecker` |
| 20.0% |       1 | `check$findCycles(Set, List, List, FirTypeParameterSymbol)`                                                         | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirCyclicTypeBoundsChecker`                           |
| 20.0% |       1 | `isBoxedArray(IrType)`                                                                                              | `org.jetbrains.kotlin.ir.util.IrTypeUtilsKt`                                                                  |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                   | Location                                                                   |
| ----: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 50.0% |       2 | `extractValue(AbstractArrayMapOwner)`                                    | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor` |
| 25.0% |       1 | `areEqualTypeConstructors(TypeConstructorMarker, TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                           |
| 25.0% |       1 | `isEnabled(SessionHolder, LanguageFeature)`                              | `org.jetbrains.kotlin.fir.LanguageVersionUtilsKt`                          |

##### `requiresEmptyStackOnEntry(MethodNode)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion`)

|      % | Samples | Caller                                                                    | Location                                                             |
| -----: | ------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |       2 | `access$requiresEmptyStackOnEntry(IrInlineCodegen$Companion, MethodNode)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen$Companion` |

##### `substitutionSupertypePolicy(RigidTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|      % | Samples | Caller                                                              | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       2 | `getCorrespondingSupertypes(ConeKotlinType, TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.FirCorrespondingSupertypesCache` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller                                     | Location                                     |
| -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 100.0% |       2 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getNode(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                | Location                  |
| ----: | ------: | --------------------- | ------------------------- |
| 50.0% |       1 | `get(Object)`         | `java.util.LinkedHashMap` |
| 50.0% |       1 | `containsKey(Object)` | `java.util.HashMap`       |

##### `next()` (`java.util.ArrayList$Itr`)

|     % | Samples | Caller                              | Location                                                       |
| ----: | ------: | ----------------------------------- | -------------------------------------------------------------- |
| 50.0% |       1 | `acceptChildren(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrMemberAccessExpression` |
| 50.0% |       1 | `next()`                            | `kotlin.collections.IndexingIterator`                          |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       2 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `vtable stub` (`<unknown>`)

|     % | Samples | Caller                      | Location                                                  |
| ----: | ------: | --------------------------- | --------------------------------------------------------- |
| 50.0% |       1 | `hash(Object)`              | `kotlin.collections.builders.MapBuilder`                  |
| 50.0% |       1 | `getDispatchReceiverType()` | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol` |

##### `getParentNode(Disposable)` (`com.intellij.openapi.util.ObjectTree`)

|      % | Samples | Caller                             | Location                               |
| -----: | ------: | ---------------------------------- | -------------------------------------- |
| 100.0% |       1 | `register(Disposable, Disposable)` | `com.intellij.openapi.util.ObjectTree` |

##### `hasExtensionKinds()` (`org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor`)

|      % | Samples | Caller                | Location                                                    |
| -----: | ------: | --------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `hasExtensionKinds()` | `org.jetbrains.kotlin.fir.types.FirFunctionTypeKindService` |

##### `transformFile(FirFile, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Caller                              | Location                                        |
| -----: | ------: | ----------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirFile` |

##### `<init>(FirProperty, FirMemberDeclaration, FirSession, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.PublishedApiEffectiveVisibilityKt$$Lambda.0x000000e0015f0430`)

|      % | Samples | Caller                                                  | Location                                             |
| -----: | ------: | ------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `newInvokeSpecial(Object, Object, Object, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000e0015f4000` |

##### `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` (`org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt`)

|      % | Samples | Caller                                                                                                                                            | Location                                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `classCache$lambda$1(AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper, ClassId, FirRegularClassSymbol, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.AbstractFirBuiltinSymbolProvider$BuiltInsPackageFragmentWrapper` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCacheWithPostCompute`)

|      % | Samples | Caller                                         | Location                                                                         |
| -----: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `getClass(ClassId, FirDeserializationContext)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|      % | Samples | Caller                                                                   | Location                                                                                                 |
| -----: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `acceptChildren(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % | Samples | Caller                                         | Location                                        |
| -----: | ------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `acceptChildrenVoid(IrElement, IrVisitorVoid)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt` |

##### `visitBlock(FirBlock, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|      % | Samples | Caller                         | Location                                                                          |
| -----: | ------: | ------------------------------ | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `mark(Label)` (`org.jetbrains.org.objectweb.asm.commons.InstructionAdapter`)

|      % | Samples | Caller              | Location                                                     |
| -----: | ------: | ------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `visitLabel(Label)` | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `hasNext()` (`org.jetbrains.kotlin.utils.SmartSet$SingletonIterator`)

|      % | Samples | Caller               | Location                       |
| -----: | ------: | -------------------- | ------------------------------ |
| 100.0% |       1 | `addAll(Collection)` | `java.util.AbstractCollection` |

##### `check(CheckerContext, DiagnosticReporter, FirStatement)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`)

|      % | Samples | Caller                                               | Location                                                                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitFunctionCall(FirFunctionCall, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |

##### `visitWithCallOrAssignment(FirStatement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|      % | Samples | Caller                                     | Location                                                                          |
| -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `visitFunctionCall(FirFunctionCall, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `isInitialized(Map$Entry)` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % | Samples | Caller            | Location                                 |
| -----: | ------: | ----------------- | ---------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `getTopLevelClassifierNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`)

|      % | Samples | Caller                               | Location                                                            |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------------------- |
| 100.0% |       1 | `mayHaveTopLevelClassifier(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `writeUntil(int, CodedOutputStream)` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage$ExtensionWriter`)

|      % | Samples | Caller                       | Location                                      |
| -----: | ------: | ---------------------------- | --------------------------------------------- |
| 100.0% |       1 | `writeTo(CodedOutputStream)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `ensureNotFinalizedAndSameThread()` (`org.jetbrains.kotlin.util.PerformanceManager`)

|      % | Samples | Caller                                                                           | Location                                       |
| -----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `listIterator(int)` (`kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector`)

|      % | Samples | Caller                              | Location                                                 |
| -----: | ------: | ----------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `<init>(ReversedListReadOnly, int)` | `kotlin.collections.ReversedListReadOnly$listIterator$1` |

##### `bindArgumentL(BoundMethodHandle, int, Object)` (`java.lang.invoke.LambdaFormEditor`)

|      % | Samples | Caller                       | Location                             |
| -----: | ------: | ---------------------------- | ------------------------------------ |
| 100.0% |       1 | `bindArgumentL(int, Object)` | `java.lang.invoke.BoundMethodHandle` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|      % | Samples | Caller            | Location                                       |
| -----: | ------: | ----------------- | ---------------------------------------------- |
| 100.0% |       1 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `readAllBytes(Path)` (`java.nio.file.Files`)

|      % | Samples | Caller                  | Location                                                  |
| -----: | ------: | ----------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `contentsToByteArray()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       1 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `<init>()` (`java.util.AbstractList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |       1 | `<init>(int)` | `java.util.ArrayList` |

##### `assert(boolean)` (`kotlinx.collections.immutable.internal.CommonFunctionsKt`)

|      % | Samples | Caller          | Location                                                                          |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `hasNextNode()` | `kotlinx.collections.immutable.implementations.immutableMap.TrieNodeBaseIterator` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|      % | Samples | Caller                                | Location                      |
| -----: | ------: | ------------------------------------- | ----------------------------- |
| 100.0% |       1 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `<init>(int, Object, Object, HashMap$Node)` (`java.util.HashMap$Node`)

|      % | Samples | Caller                                       | Location            |
| -----: | ------: | -------------------------------------------- | ------------------- |
| 100.0% |       1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `<init>(MessageDigestSpi, String, Provider)` (`java.security.MessageDigest$Delegate`)

|      % | Samples | Caller                                       | Location                                                 |
| -----: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `<init>(MessageDigestSpi, String, Provider)` | `java.security.MessageDigest$Delegate$CloneableDelegate` |

##### `<init>(WeakHashMap)` (`java.util.WeakHashMap$KeyIterator`)

|      % | Samples | Caller       | Location                       |
| -----: | ------: | ------------ | ------------------------------ |
| 100.0% |       1 | `iterator()` | `java.util.WeakHashMap$KeySet` |

##### `getZipEntry(String, int)` (`java.util.zip.ZipFile`)

|      % | Samples | Caller             | Location                |
| -----: | ------: | ------------------ | ----------------------- |
| 100.0% |       1 | `getEntry(String)` | `java.util.zip.ZipFile` |

##### `toMap(Pair[], Map)` (`kotlin.collections.MapsKt__MapsKt`)

|      % | Samples | Caller          | Location                            |
| -----: | ------: | --------------- | ----------------------------------- |
| 100.0% |       1 | `mapOf(Pair[])` | `kotlin.collections.MapsKt__MapsKt` |

##### `reversePositionIndex$CollectionsKt__ReversedViewsKt(List, int)` (`kotlin.collections.CollectionsKt__ReversedViewsKt`)

|      % | Samples | Caller                                   | Location                                            |
| -----: | ------: | ---------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `access$reversePositionIndex(List, int)` | `kotlin.collections.CollectionsKt__ReversedViewsKt` |

##### `addInitializedType(int)` (`jdk.internal.org.objectweb.asm.Frame`)

|      % | Samples | Caller                                   | Location                               |
| -----: | ------: | ---------------------------------------- | -------------------------------------- |
| 100.0% |       1 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `I2C/C2I adapters(0xa)` (`<unknown>`)

|      % | Samples | Caller                                                                                        | Location                                                   |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `exitVariableInitialization(MutableFlow, FirExpression, FirProperty, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                |
| -----: | ------: | ----------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `isLocal()` | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder` |

##### `I2C/C2I adapters(0x)` (`<unknown>`)

|      % | Samples | Caller                                  | Location          |
| -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% |       1 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

##### `I2C/C2I adapters(0xbbbbbbababab)` (`<unknown>`)

|      % | Samples | Caller                                                                                    | Location                                                   |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `isVisible(FirVisibilityChecker, FirMemberDeclaration, CallInfo, FirExpression, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.VisibilityUtilsKt` |

##### `I2C/C2I adapters(0xbbbbba)` (`<unknown>`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `visitTypeOperator(IrTypeOperatorCall)` | `org.jetbrains.kotlin.backend.jvm.lower.TypeOperatorLowering` |

##### `itable stub` (`<unknown>`)

|      % | Samples | Caller                   | Location                                                       |
| -----: | ------: | ------------------------ | -------------------------------------------------------------- |
| 100.0% |       1 | `getOwnTypeParameters()` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer` |

##### `zero_blocks` (`<unknown>`)

|      % | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                  | Location                                                |
| ----: | ------: | ------------------------------------------------------------------------- | ------------------------------------------------------- |
| 67.3% |     919 | `_pthread_start`                                                          | `<unknown>`                                             |
| 67.3% |     919 | `thread_start`                                                            | `<unknown>`                                             |
| 67.2% |     918 | `Thread::call_run()`                                                      | `<unknown>`                                             |
| 67.2% |     918 | `thread_native_entry(Thread*)`                                            | `<unknown>`                                             |
| 61.2% |     836 | `JavaThread::thread_main_inner()`                                         | `<unknown>`                                             |
| 61.1% |     835 | `CompileBroker::compiler_thread_loop()`                                   | `<unknown>`                                             |
| 60.2% |     822 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                  | `<unknown>`                                             |
| 42.3% |     578 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>`                                             |
| 42.2% |     577 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`        | `<unknown>`                                             |
| 32.1% |     439 | `run(String[])`                                                           | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.1% |     439 | `main(String[])`                                                          | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.4% |     360 | `main(String[])`                                                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.4% |     360 | `main(String[])`                                                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.4% |     360 | `invokeStatic(Object, Object)`                                            | `java.lang.invoke.LambdaForm$DMH.0x000000e001008400`    |
| 26.4% |     360 | `invoke(Object, Object, Object)`                                          | `java.lang.invoke.LambdaForm$MH.0x000000e001009800`     |
| 26.4% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                          | `java.lang.invoke.Invokers$Holder`                      |
| 26.4% |     360 | `invokeImpl(Object, Object[])`                                            | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.4% |     360 | `invoke(Object, Object[])`                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.4% |     360 | `invoke(Object, Object[])`                                                | `java.lang.reflect.Method`                              |
| 26.3% |     359 | `doMain(CLICompiler, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 61.1% |     835 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 60.2% |     822 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 42.3% |     578 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 42.2% |     577 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 20.9% |     286 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 17.3% |     236 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 17.2% |     235 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 15.9% |     217 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 15.3% |     209 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 12.2% |     167 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
|  9.3% |     127 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
|  8.0% |     109 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
|  7.9% |     108 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  7.2% |      99 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  6.0% |      82 | `LinearScan::do_linear_scan()`                                                                          | `<unknown>` |
|  5.2% |      71 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.3% |      59 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`                                                  | `<unknown>` |
|  4.2% |      58 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  4.1% |      56 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                    | `<unknown>` |
|  4.0% |      55 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 67.3% |     919 | `_pthread_start`                                                                                                    | `<unknown>` |
| 67.3% |     919 | `thread_start`                                                                                                      | `<unknown>` |
| 67.2% |     918 | `Thread::call_run()`                                                                                                | `<unknown>` |
| 67.2% |     918 | `thread_native_entry(Thread*)`                                                                                      | `<unknown>` |
| 61.2% |     836 | `JavaThread::thread_main_inner()`                                                                                   | `<unknown>` |
| 17.3% |     236 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                             | `<unknown>` |
|  5.3% |      72 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                         | `<unknown>` |
|  5.3% |      72 | `ParseGenerator::generate(JVMState*)`                                                                               | `<unknown>` |
|  5.2% |      71 | `Parse::do_one_block()`                                                                                             | `<unknown>` |
|  5.2% |      71 | `Parse::do_all_blocks()`                                                                                            | `<unknown>` |
|  5.2% |      71 | `WorkerThread::run()`                                                                                               | `<unknown>` |
|  4.8% |      66 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                                     | `<unknown>` |
|  4.4% |      60 | `Parse::do_call()`                                                                                                  | `<unknown>` |
|  4.3% |      59 | `Java_java_lang_ClassLoader_defineClass1`                                                                           | `<unknown>` |
|  4.1% |      56 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                               | `<unknown>` |
|  4.1% |      56 | `IR::IR(Compilation*, ciMethod*, int)`                                                                              | `<unknown>` |
|  4.0% |      55 | `JVM_DefineClassWithSource`                                                                                         | `<unknown>` |
|  4.0% |      54 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`  | `<unknown>` |
|  4.0% |      54 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|  4.0% |      54 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`     | `<unknown>` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.1% |     439 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.1% |     439 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.4% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.4% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.3% |     359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.2% |     358 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.1% |     357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.8% |     352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.1% |     343 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.1% |     343 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.1% |     343 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.0% |     342 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.0% |     342 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.0% |     342 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.9% |     340 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 24.7% |     338 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 24.7% |     338 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 24.7% |     338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.4% |     360 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x000000e001008400`  |
| 26.4% |     360 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x000000e001009800`   |
| 26.4% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 26.4% |     360 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.4% |     360 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.4% |     360 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
|  5.1% |      70 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  5.1% |      70 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  5.1% |      69 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  5.1% |      69 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.1% |      69 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  5.0% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  4.7% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.7% |      64 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.5% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.2% |      57 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      18 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  1.1% |      15 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                               |
|  0.9% |      12 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  0.8% |      11 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                    | `java.lang.invoke.BootstrapMethodInvoker`             |

##### JIT

|    % | Samples | Function                           | Location    |
| ---: | ------: | ---------------------------------- | ----------- |
| 0.5% |       7 | `I2C/C2I adapters(0xbb)`           | `<unknown>` |
| 0.4% |       5 | `I2C/C2I adapters(0xb)`            | `<unknown>` |
| 0.1% |       2 | `I2C/C2I adapters(0xbbb)`          | `<unknown>` |
| 0.1% |       2 | `vtable stub`                      | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xa)`            | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0x)`             | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbbbababab)` | `<unknown>` |
| 0.1% |       1 | `I2C/C2I adapters(0xbbbbba)`       | `<unknown>` |
| 0.1% |       1 | `itable stub`                      | `<unknown>` |
| 0.1% |       1 | `zero_blocks`                      | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.9% |     918 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     919 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 91.1% |     836 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  7.7% |      71 | `WorkerThread::run()`             | `<unknown>` |
|  1.0% |       9 | `VMThread::run()`                 | `<unknown>` |
|  0.1% |       1 | `WatcherThread::run()`            | `<unknown>` |
|  0.1% |       1 | `ConcurrentGCThread::run()`       | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     918 | `Thread::call_run()` | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|     % | Samples | Callee                                                                             | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------- | ----------- |
| 99.9% |     835 | `CompileBroker::compiler_thread_loop()`                                            | `<unknown>` |
|  0.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry(JavaThread*, JavaThread*)` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 98.4% |     822 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  1.3% |      11 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |
|  0.1% |       1 | `ciEnv::cache_dtrace_flags()`                            | `<unknown>` |
|  0.1% |       1 | `Mutex::lock(Thread*)`                                   | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 70.3% |     578 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 28.7% |     236 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.2% |       2 | `ciEnv::get_method_from_handle(Method*)`                                  | `<unknown>` |
|  0.2% |       2 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                  | `<unknown>` |
|  0.2% |       2 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 99.8% |     577 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  0.2% |       1 | `stringStream::~stringStream()`                                    | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 49.6% |     286 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 36.2% |     209 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 12.1% |      70 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  0.9% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  0.7% |       4 | `CallGenerator::for_inline(ciMethod*, float)`                                              | `<unknown>` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.0% |     360 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.8% |      78 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `addShutdownHook(Thread)`                                                    | `java.lang.Runtime`                                    |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     439 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     359 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     360 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000e001008400`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     360 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000e001009800`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     360 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000e001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000e001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     360 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.3% |       1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |
|   0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                                                             | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     358 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |     352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     357 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     357 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.4% |     343 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.6% |       9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     342 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     343 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     343 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                            |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------- |
| 99.4% |     340 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `disposeRootInWriteAction(Disposable)`         | `org.jetbrains.kotlin.cli.common.UtilsKt`                           |
|  0.3% |       1 | `<init>(MessageCollector, boolean, boolean)`   | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     342 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     342 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     338 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 66.6% |     225 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 24.3% |      82 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.0% |      27 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     338 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     338 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.3% |      18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.8% |       6 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 58.4% |     167 | `PhaseChaitin::Register_Allocate()`             | `<unknown>` |
| 17.1% |      49 | `Matcher::match()`                              | `<unknown>` |
| 10.5% |      30 | `PhaseOutput::Output()`                         | `<unknown>` |
|  9.8% |      28 | `PhaseCFG::do_global_code_motion()`             | `<unknown>` |
|  1.0% |       3 | `PhaseBlockLayout::PhaseBlockLayout(PhaseCFG&)` | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 99.6% |     235 | `Compilation::compile_method()` | `<unknown>` |
|  0.4% |       1 | `ciMethod::can_be_compiled()`   | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |     236 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 92.3% |     217 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  7.2% |      17 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  0.4% |       1 | `DebugInformationRecorder::DebugInformationRecorder(OopRecorder*)`                                                                                                                             | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 45.6% |      99 | `Compilation::emit_lir()`                    | `<unknown>` |
| 32.7% |      71 | `Compilation::build_hir()`                   | `<unknown>` |
| 19.8% |      43 | `Compilation::emit_code_body()`              | `<unknown>` |
|  0.5% |       1 | `FrameMap::FrameMap(ciMethod*, int, int)`    | `<unknown>` |
|  0.5% |       1 | `LIR_Assembler::LIR_Assembler(Compilation*)` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 32.5% |      68 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 28.2% |      59 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 15.8% |      33 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  6.7% |      14 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |
|  4.8% |      10 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 19.2% |      32 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 16.2% |      27 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 10.2% |      17 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
|  8.4% |      14 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |
|  6.6% |      11 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 85.8% |     109 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 13.4% |      17 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |
|  0.8% |       1 | `_platform_memset`                                            | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 99.1% |     108 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |
|  0.9% |       1 | `_platform_memset`                     | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 30.6% |      33 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 21.3% |      23 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 10.2% |      11 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  9.3% |      10 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
|  8.3% |       9 | `PhaseIdealLoop::build_loop_tree()`                                     | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                      | Location    |
| ----: | ------: | ------------------------------------------- | ----------- |
| 82.8% |      82 | `LinearScan::do_linear_scan()`              | `<unknown>` |
| 17.2% |      17 | `BlockList::iterate_forward(BlockClosure*)` | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 42.7% |      35 | `LinearScan::allocate_registers()`                                     | `<unknown>` |
| 17.1% |      14 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 15.9% |      13 | `LinearScan::build_intervals()`                                        | `<unknown>` |
|  9.8% |       8 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
|  3.7% |       3 | `LinearScan::compute_global_live_sets()`                               | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|     % | Samples | Callee                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------- | ----------- |
| 98.6% |      71 | `Parse::do_all_blocks()`                                              | `<unknown>` |
|  1.4% |       1 | `Parse::do_exits()`                                                   | `<unknown>` |
|  1.4% |       1 | `ciMethod::method_data()`                                             | `<unknown>` |
|  1.4% |       1 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)` | `<unknown>` |
|  1.4% |       1 | `Parse::build_exits()`                                                | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      72 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 78.9% |      56 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
|  8.5% |       6 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  4.2% |       3 | `IR::compute_use_counts()`                        | `<unknown>` |
|  4.2% |       3 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|  1.4% |       1 | `IR::optimize_blocks()`                           | `<unknown>` |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 84.5% |      60 | `Parse::do_call()`                    | `<unknown>` |
| 26.8% |      19 | `Parse::do_field_access(bool, bool)`  | `<unknown>` |
|  9.9% |       7 | `Parse::do_one_bytecode()`            | `<unknown>` |
|  5.6% |       4 | `Parse::do_if(BoolTest::mask, Node*)` | `<unknown>` |
|  4.2% |       3 | `Parse::do_exceptions()`              | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |      71 | `Parse::do_one_block()`                   | `<unknown>` |
|   1.4% |       1 | `PhaseGVN::transform_no_reclaim(Node*)`   | `<unknown>` |
|   1.4% |       1 | `Parse::merge_common(Parse::Block*, int)` | `<unknown>` |

##### `WorkerThread::run()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 43.7% |      31 | `G1EvacuateRegionsBaseTask::work(unsigned int)` | `<unknown>` |
| 25.4% |      18 | `G1CMConcurrentMarkingTask::work(unsigned int)` | `<unknown>` |
| 22.5% |      16 | `G1RebuildRSAndScrubTask::work(unsigned int)`   | `<unknown>` |
|  8.5% |       6 | `G1ParallelCleaningTask::work(unsigned int)`    | `<unknown>` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 91.4% |      64 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  4.3% |       3 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
|  2.9% |       2 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  1.4% |       1 | `findLoadedClass(String)`          | `java.lang.ClassLoader`                                  |
|  1.4% |       1 | `loadClass(String, boolean)`       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                                           |
| ----: | ------: | --------------------------- | -------------------------------------------------- |
| 98.6% |      69 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`                           |
|  1.4% |       1 | `fill()`                    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                        | Location                 |
| ----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 98.6% |      68 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |
|  1.4% |       1 | `monitorenter_nofpu Runtime1 stub`                            | `<unknown>`              |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 98.6% |      68 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  1.4% |       1 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                                                        | Location    |
| ----: | ------: | ----------------------------------------------------------------------------- | ----------- |
| 97.1% |      66 | `Java_java_util_zip_Inflater_inflateBytesBytes`                               | `<unknown>` |
|  1.5% |       1 | `InterpreterRuntime::frequency_counter_overflow(JavaThread*, unsigned char*)` | `<unknown>` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                          | Location    |
| ----: | ------: | ------------------------------- | ----------- |
| 81.8% |      54 | `inflate_fast`                  | `<unknown>` |
| 16.7% |      11 | `inflate`                       | `<unknown>` |
|  1.5% |       1 | `jni_GetPrimitiveArrayCritical` | `<unknown>` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 96.9% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  3.1% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.6% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      64 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 95.2% |      59 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 19.4% |      12 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 73.3% |      44 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 66.7% |      40 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 21.7% |      13 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  1.7% |       1 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                    | `<unknown>` |
|  1.7% |       1 | `LibraryIntrinsic::generate(JVMState*)`                                                 | `<unknown>` |

##### `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|      % | Samples | Callee                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |      59 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 93.2% |      55 | `JVM_DefineClassWithSource` | `<unknown>` |
|  1.7% |       1 | `jni_GetStringUTFRegion`    | `<unknown>` |
|  1.7% |       1 | `_platform_memmove`         | `<unknown>` |
|  1.7% |       1 | `free_small`                | `<unknown>` |
|  1.7% |       1 | `jni_GetByteArrayRegion`    | `<unknown>` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 94.8% |      55 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  1.7% |       1 | `ProjNode::hash() const`             | `<unknown>` |
|  1.7% |       1 | `PhiNode::hash() const`              | `<unknown>` |
|  1.7% |       1 | `LoadNode::Identity(PhaseGVN*)`      | `<unknown>` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 64.9% |      37 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 35.1% |      20 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
| 15.8% |       9 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  8.8% |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  3.5% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                      |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|     % | Samples | Callee                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------- | ----------- |
| 92.9% |      52 | `GraphBuilder::iterate_all_blocks(bool)`                          | `<unknown>` |
|  5.4% |       3 | `BlockListBuilder::BlockListBuilder(Compilation*, IRScope*, int)` | `<unknown>` |
|  1.8% |       1 | `BlockBegin::iterate_preorder(BlockClosure*)`                     | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      56 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      56 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 12.7% |       7 | `IfNode::Ideal(PhaseGVN*, bool)`           | `<unknown>` |
|  9.1% |       5 | `RegionNode::Ideal(PhaseGVN*, bool)`       | `<unknown>` |
|  9.1% |       5 | `PhiNode::Value(PhaseGVN*) const`          | `<unknown>` |
|  7.3% |       4 | `PhaseIterGVN::subsume_node(Node*, Node*)` | `<unknown>` |
|  7.3% |       4 | `NodeHash::hash_find_insert(Node*)`        | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|     % | Samples | Callee                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| 98.2% |      54 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` | `<unknown>` |
|  1.8% |       1 | `SystemDictionary::resolve_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`   | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 88.9% |      48 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| 11.1% |       6 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 94.4% |      51 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|  5.6% |       3 | `SystemDictionary::define_instance_class(InstanceKlass*, Handle, JavaThread*)`                                     | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      54 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 50.0% |       9 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 16.7% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000e0015dcda8` |
| 16.7% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000e00165b878`                  |
|  5.6% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x000000e0016d1598`                  |
|  5.6% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e001615430`                       |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.3% |      11 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000e00168e168`                                                                        |
| 13.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000e001675a38`                                                                    |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x000000e00159ac00` |
|  6.7% |       1 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000e001610b38`                                           |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                         |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| 16.7% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000e001614fc0`             |
| 16.7% |       2 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x000000e001144360` |
| 16.7% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000e001758218`                       |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000e001006f30`                         |
|  8.3% |       1 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000e00181e3b8`                |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|     % | Samples | Callee                                                                           | Location                           |
| ----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 90.9% |      10 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |
|  9.1% |       1 | `getClass()`                                                                     | `java.lang.Object`                 |

##### `I2C/C2I adapters(0xbbb)` (`<unknown>`)

|     % | Samples | Callee                  | Location    |
| ----: | ------: | ----------------------- | ----------- |
| 50.0% |       1 | `sys_icache_invalidate` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% |      47 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                   |
| 1.5% |      21 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% |      16 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                     |
| 0.6% |       8 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |       8 | `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       8 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |       8 | `LinearScan::build_intervals()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                               |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies(Matcher&)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |       7 | `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                  |
| 0.4% |       6 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                      |
| 0.4% |       6 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                              |
| 0.4% |       6 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                    |
| 0.4% |       6 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       6 | `inflate_table` ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                      |
| 0.4% |       6 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                     |
| 0.4% |       5 | `PhaseIdealLoop::Dominators()` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                              |
| 0.4% |       5 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `LIR_Assembler::record_non_safepoint_debug_info()` ← `LIR_Assembler::process_debug_info(LIR_Op*)` ← `LIR_Assembler::emit_lir_list(LIR_List*)` ← `LIR_Assembler::emit_code(BlockList*)` ← `Compilation::emit_code_body()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` |
| 0.4% |       5 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                       |
