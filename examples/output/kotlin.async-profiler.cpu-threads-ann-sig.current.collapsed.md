# Sampling profile

Collected 1,319 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 46.9% |     619 |
| Native           | 37.3% |     492 |
| Ours             | 10.8% |     142 |
| Standard library |  4.0% |      53 |
| JIT              |  0.9% |      12 |
| Unknown          |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.9% |      52 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 2.2% |      29 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.7% |      23 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.6% |      21 | `IndexSetIterator::advance_and_next()`                                                                                                                                      | `<unknown>` |
| 1.5% |      20 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 1.4% |      19 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                                          | `<unknown>` |
| 1.3% |      17 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 1.1% |      15 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 1.1% |      14 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                                           | `<unknown>` |
| 1.0% |      13 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.9% |      12 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 0.9% |      12 | `IntervalWalker::walk_to(IntervalState, int)`                                                                                                                               | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                                     | `<unknown>` |
| 0.8% |      10 | `Matcher::match_tree(Node const*)`                                                                                                                                          | `<unknown>` |
| 0.7% |       9 | `bsearch`                                                                                                                                                                   | `<unknown>` |
| 0.7% |       9 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                                  | `<unknown>` |
| 0.7% |       9 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)`             | `<unknown>` |
| 0.7% |       9 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                                  | `<unknown>` |
| 0.6% |       8 | `inflate`                                                                                                                                                                   | `<unknown>` |

#### Categories

##### Compiler

|    % | Samples | Function                                                                                                                                                        | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 1.6% |      21 | `IndexSetIterator::advance_and_next()`                                                                                                                          | `<unknown>` |
| 1.4% |      19 | `PhaseChaitin::Split(unsigned int, ResourceArea*)`                                                                                                              | `<unknown>` |
| 1.1% |      14 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`                                                                                                               | `<unknown>` |
| 0.9% |      12 | `IntervalWalker::walk_to(IntervalState, int)`                                                                                                                   | `<unknown>` |
| 0.8% |      11 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)`                                                                                         | `<unknown>` |
| 0.8% |      10 | `Matcher::match_tree(Node const*)`                                                                                                                              | `<unknown>` |
| 0.7% |       9 | `ciObjectFactory::get_metadata(Metadata*)`                                                                                                                      | `<unknown>` |
| 0.7% |       9 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)`                                                                                                      | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)`                                                                                                        | `<unknown>` |
| 0.6% |       8 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`                                                                                          | `<unknown>` |
| 0.6% |       8 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)`                                                                                    | `<unknown>` |
| 0.6% |       8 | `NodeHash::hash_find_insert(Node*)`                                                                                                                             | `<unknown>` |
| 0.6% |       8 | `LIR_OpVisitState::visit(LIR_Op*)`                                                                                                                              | `<unknown>` |
| 0.6% |       8 | `PhaseLive::compute(unsigned int)`                                                                                                                              | `<unknown>` |
| 0.6% |       8 | `Compile::identify_useful_nodes(Unique_Node_List&)`                                                                                                             | `<unknown>` |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg(Interval*)`                                                                                                                   | `<unknown>` |
| 0.6% |       8 | `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)`                                                                                       | `<unknown>` |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks(bool)`                                                                                                                          | `<unknown>` |
| 0.5% |       6 | `PhaseIdealLoop::Dominators()`                                                                                                                                  | `<unknown>` |

##### Native

|    % | Samples | Function                                                                                                                                                                    | Location    |
| ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 3.9% |      52 | `inflate_fast`                                                                                                                                                              | `<unknown>` |
| 2.2% |      29 | `tlv_get_addr`                                                                                                                                                              | `<unknown>` |
| 1.7% |      23 | `SymbolTable::do_lookup(char const*, int, unsigned long)`                                                                                                                   | `<unknown>` |
| 1.5% |      20 | `__psynch_cvwait`                                                                                                                                                           | `<unknown>` |
| 1.3% |      17 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` | `<unknown>` |
| 1.1% |      15 | `__psynch_mutexwait`                                                                                                                                                        | `<unknown>` |
| 1.0% |      13 | `_platform_memset`                                                                                                                                                          | `<unknown>` |
| 0.9% |      12 | `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)`       | `<unknown>` |
| 0.7% |       9 | `bsearch`                                                                                                                                                                   | `<unknown>` |
| 0.7% |       9 | `sys_icache_invalidate`                                                                                                                                                     | `<unknown>` |
| 0.6% |       8 | `inflate`                                                                                                                                                                   | `<unknown>` |
| 0.6% |       8 | `pthread_jit_write_protect_np`                                                                                                                                              | `<unknown>` |
| 0.5% |       7 | `Dictionary::find(Thread*, Symbol*, Handle)`                                                                                                                                | `<unknown>` |
| 0.5% |       7 | `ClassFileParser::skip_over_field_signature(char const*, bool, unsigned int, JavaThread*) const`                                                                            | `<unknown>` |
| 0.5% |       7 | `CodeCache::make_marked_nmethods_deoptimized()`                                                                                                                             | `<unknown>` |
| 0.5% |       6 | `_platform_memmove`                                                                                                                                                         | `<unknown>` |
| 0.5% |       6 | `vmSymbols::find_sid(Symbol const*)`                                                                                                                                        | `<unknown>` |
| 0.4% |       5 | `fwd_copy_again`                                                                                                                                                            | `<unknown>` |
| 0.4% |       5 | `Arena::contains(void const*) const`                                                                                                                                        | `<unknown>` |
| 0.4% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)`                                                                                     | `<unknown>` |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                                                                        | Location                                                                                      |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 0.2% |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                 |
| 0.2% |       2 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)`                                                                                                                         | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`                         |
| 0.2% |       2 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`       |
| 0.1% |       1 | `build()`                                                                                                                                                                                                                                                                                       | `org.jetbrains.kotlin.fir.expressions.builder.FirPropertyAccessExpressionBuilder`             |
| 0.1% |       1 | `convertFunctionDeclaration(LighterASTNode)`                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`              |
| 0.1% |       1 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                        |
| 0.1% |       1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
| 0.1% |       1 | `configureAnnotationsAndSignature(FirFunctionBuilder, FirFunction, FirFunctionSymbol, List, ConeKotlinType, List, ConeKotlinType, DeferredCallableCopyReturnType, FirDeclarationOrigin, boolean)`                                                                                               | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`                               |
| 0.1% |       1 | `createCopyForFirFunction(FirNamedFunctionSymbol, FirNamedFunction, ConeClassLikeLookupTag, FirSession, FirDeclarationOrigin, boolean, ConeSimpleKotlinType, List, List, ConeKotlinType, List, ConeKotlinType, Modality, Visibility, DeferredCallableCopyReturnType, KtSourceElement, boolean)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`                               |
| 0.1% |       1 | `getPsi(AbstractKtSourceElement)`                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.KtSourceElementKt`                                                      |
| 0.1% |       1 | `write(byte[], int, int)`                                                                                                                                                                                                                                                                       | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                             |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                             |
| 0.1% |       1 | `getResolvePhase()`                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState`                               |
| 0.1% |       1 | `invoke(Object)`                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.scopes.impl.FirClassSubstitutionScope$$Lambda.0x000000700163eb30`   |
| 0.1% |       1 | `getConstraintsFromAllForkPoints()`                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                  |
| 0.1% |       1 | `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)`                                                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl`              |
| 0.1% |       1 | `visitTypeOperatorCall(FirTypeOperatorCall, Object)`                                                                                                                                                                                                                                            | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                |
| 0.1% |       1 | `toConeKotlinTypeForFlexibleBound(JavaClassifierType, FirSession, JavaTypeParameterStack, FirJavaTypeConversionMode, ConeAttributes, KtSourceElement, ConeLookupTagBasedType)`                                                                                                                  | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`                                          |
| 0.1% |       1 | `toFirResolvedTypeRef(JavaType, FirSession, JavaTypeParameterStack, KtSourceElement, FirJavaTypeConversionMode)`                                                                                                                                                                                | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`                                          |
| 0.1% |       1 | `buildPartial()`                                                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$Builder`                    |

##### Standard library

|    % | Samples | Function                                                                                  | Location                                          |
| ---: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| 0.5% |       6 | `checkNotNullParameter(Object, String)`                                                   | `kotlin.jvm.internal.Intrinsics`                  |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                                                           | `kotlin.jvm.internal.Intrinsics`                  |
| 0.2% |       2 | `hasNext()`                                                                               | `java.util.LinkedHashMap$LinkedHashIterator`      |
| 0.2% |       2 | `iterator()`                                                                              | `java.util.ArrayList`                             |
| 0.1% |       1 | `read(byte[], int, int)`                                                                  | `java.util.zip.InflaterInputStream`               |
| 0.1% |       1 | `getNode(Object)`                                                                         | `java.util.HashMap`                               |
| 0.1% |       1 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2`                              |
| 0.1% |       1 | `lazy(Function0)`                                                                         | `kotlin.LazyKt__LazyJVMKt`                        |
| 0.1% |       1 | `addClass(Class)`                                                                         | `java.lang.ClassLoader`                           |
| 0.1% |       1 | `read(byte[], int, int)`                                                                  | `java.io.PushbackInputStream`                     |
| 0.1% |       1 | `<init>(int, int, String, String, String, long)`                                          | `jdk.internal.org.objectweb.asm.Symbol`           |
| 0.1% |       1 | `visitMethodInsn(int, String, String, String, boolean)`                                   | `jdk.internal.org.objectweb.asm.MethodWriter`     |
| 0.1% |       1 | `calculateHashMapCapacity(int)`                                                           | `java.util.HashMap`                               |
| 0.1% |       1 | `entrySet()`                                                                              | `java.util.LinkedHashMap`                         |
| 0.1% |       1 | `equals(Object)`                                                                          | `java.lang.Object`                                |
| 0.1% |       1 | `areEqual(Object, Object)`                                                                | `kotlin.jvm.internal.Intrinsics`                  |
| 0.1% |       1 | `filterNotNull(Object[])`                                                                 | `kotlin.collections.ArraysKt___ArraysKt`          |
| 0.1% |       1 | `get(Class)`                                                                              | `kotlin.reflect.jvm.internal.ClassValueCache`     |
| 0.1% |       1 | `emptyList()`                                                                             | `kotlin.collections.CollectionsKt__CollectionsKt` |
| 0.1% |       1 | `setMajorVersionAndClassName(int, String)`                                                | `jdk.internal.org.objectweb.asm.SymbolTable`      |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      52 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `tlv_get_addr` (`<unknown>`)

|    % | Samples | Caller                                                                                                | Location    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------- | ----------- |
| 6.9% |       2 | `LIRGenerator::do_ProfileInvoke(ProfileInvoke*)`                                                      | `<unknown>` |
| 3.4% |       1 | `PhaseIFG::remove_node(unsigned int)`                                                                 | `<unknown>` |
| 3.4% |       1 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                 | `<unknown>` |
| 3.4% |       1 | `LIRGenerator::increment_event_counter_impl(CodeEmitInfo*, ciMethod*, LIR_Opr, int, int, bool, bool)` | `<unknown>` |
| 3.4% |       1 | `jvmti_GetClassMethods(_jvmtiEnv*, _jclass*, int*, _jmethodID***)`                                    | `<unknown>` |

##### `SymbolTable::do_lookup(char const*, int, unsigned long)` (`<unknown>`)

|     % | Samples | Caller                                                                                                  | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 73.9% |      17 | `SymbolTable::lookup_only(char const*, int, unsigned int&)`                                             | `<unknown>` |
| 17.4% |       4 | `SymbolTable::new_symbol(char const*, int)`                                                             | `<unknown>` |
|  8.7% |       2 | `ClassFileParser::parse_constant_pool_entries(ClassFileStream const*, ConstantPool*, int, JavaThread*)` | `<unknown>` |

##### `IndexSetIterator::advance_and_next()` (`<unknown>`)

|     % | Samples | Caller                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 28.6% |       6 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` | `<unknown>` |
| 14.3% |       3 | `PhaseIFG::effective_degree(unsigned int) const`  | `<unknown>` |
|  9.5% |       2 | `PhaseChaitin::Select()`                          | `<unknown>` |
|  9.5% |       2 | `PhaseChaitin::build_ifg_virtual()`               | `<unknown>` |
|  9.5% |       2 | `PhaseIFG::remove_node(unsigned int)`             | `<unknown>` |

##### `__psynch_cvwait` (`<unknown>`)

|      % | Samples | Caller                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      20 | `PlatformMonitor::wait(unsigned long long)` | `<unknown>` |

##### `PhaseChaitin::Split(unsigned int, ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      19 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>(DIR_Chunk* const&)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 58.8% |      10 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` | `<unknown>` |
| 41.2% |       7 | `DebugInformationRecorder::serialize_scope_values(GrowableArray<ScopeValue*>*)`                                                                                 | `<unknown>` |

##### `__psynch_mutexwait` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      15 | `_pthread_mutex_firstfit_lock_slow` | `<unknown>` |

##### `PhaseChaitin::build_ifg_physical(ResourceArea*)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |      14 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `_platform_memset` (`<unknown>`)

|     % | Samples | Caller                                                                        | Location    |
| ----: | ------: | ----------------------------------------------------------------------------- | ----------- |
| 15.4% |       2 | `InstanceKlass::allocate_instance_klass(ClassFileParser const&, JavaThread*)` | `<unknown>` |
|  7.7% |       1 | `MemAllocator::allocate() const`                                              | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::split_thru_region(Node*, RegionNode*)`                       | `<unknown>` |
|  7.7% |       1 | `Compile::Init(bool)`                                                         | `<unknown>` |
|  7.7% |       1 | `PhaseIdealLoop::build_and_optimize()`                                        | `<unknown>` |

##### `InstanceKlass::find_method_index(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 91.7% |      11 | `InstanceKlass::uncached_lookup_method(Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::PrivateLookupMode) const`                                      | `<unknown>` |
|  8.3% |       1 | `InstanceKlass::find_local_method(Array<Method*> const*, Symbol const*, Symbol const*, Klass::OverpassLookupMode, Klass::StaticLookupMode, Klass::PrivateLookupMode)` | `<unknown>` |

##### `IntervalWalker::walk_to(IntervalState, int)` (`<unknown>`)

|      % | Samples | Caller                         | Location    |
| -----: | ------: | ------------------------------ | ----------- |
| 100.0% |      12 | `IntervalWalker::walk_to(int)` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      11 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `Matcher::match_tree(Node const*)` (`<unknown>`)

|     % | Samples | Caller                                | Location    |
| ----: | ------: | ------------------------------------- | ----------- |
| 90.0% |       9 | `Matcher::xform(Node*, int)`          | `<unknown>` |
| 10.0% |       1 | `Matcher::match_sfpt(SafePointNode*)` | `<unknown>` |

##### `bsearch` (`<unknown>`)

|      % | Samples | Caller                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |       9 | `encoding_for_logical_immediate(unsigned long long)` | `<unknown>` |

##### `ciObjectFactory::get_metadata(Metadata*)` (`<unknown>`)

|     % | Samples | Caller                                                                                    | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------- | ----------- |
| 44.4% |       4 | `ciEnv::get_klass_by_name_impl(ciKlass*, constantPoolHandle const&, ciSymbol*, bool)`     | `<unknown>` |
| 11.1% |       1 | `ciMethod::ensure_method_data(methodHandle const&)`                                       | `<unknown>` |
| 11.1% |       1 | `ciBytecodeStream::get_method(bool&, ciSignature**)`                                      | `<unknown>` |
| 11.1% |       1 | `ciEnv::get_klass_by_index_impl(constantPoolHandle const&, int, bool&, ciInstanceKlass*)` | `<unknown>` |
| 11.1% |       1 | `ciObjectFactory::get(oopDesc*)`                                                          | `<unknown>` |

##### `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` (`<unknown>`)

|     % | Samples | Caller                                                                            | Location    |
| ----: | ------: | --------------------------------------------------------------------------------- | ----------- |
| 66.7% |       6 | `LIR_Assembler::record_non_safepoint_debug_info()`                                | `<unknown>` |
| 22.2% |       2 | `IRScopeDebugInfo::record_debug_info(DebugInformationRecorder*, int, bool, bool)` | `<unknown>` |
| 11.1% |       1 | `NonSafepointEmitter::emit_non_safepoint()`                                       | `<unknown>` |

##### `sys_icache_invalidate` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                            | Location    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 33.3% |       3 | `CompiledIC::set_to_monomorphic(CompiledICInfo&)`                                                                                                                                                                                                                 | `<unknown>` |
| 22.2% |       2 | `nmethod::nmethod(Method*, CompilerType, int, int, int, CodeOffsets*, int, DebugInformationRecorder*, Dependencies*, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, CompLevel, char*, int, JVMCINMethodData*)` | `<unknown>` |
| 11.1% |       1 | `CompiledIC::set_to_megamorphic(CallInfo*, Bytecodes::Code, bool&, JavaThread*)`                                                                                                                                                                                  | `<unknown>` |
| 11.1% |       1 | `InlineCacheBuffer::create_transition_stub(CompiledIC*, void*, unsigned char*)`                                                                                                                                                                                   | `<unknown>` |
| 11.1% |       1 | `CompiledDirectStaticCall::set_to_interpreted(methodHandle const&, unsigned char*)`                                                                                                                                                                               | `<unknown>` |

##### `LinearScanWalker::free_collect_inactive_fixed(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                        | Location    |
| -----: | ------: | --------------------------------------------- | ----------- |
| 100.0% |       9 | `LinearScanWalker::alloc_free_reg(Interval*)` | `<unknown>` |

##### `inflate` (`<unknown>`)

|      % | Samples | Caller                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |       8 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late_post_work(Node*, bool)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 75.0% |       6 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 25.0% |       2 | `PhaseIdealLoop::build_and_optimize()`                                 | `<unknown>` |

##### `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` (`<unknown>`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::post_allocate_copy_removal()` | `<unknown>` |

##### `NodeHash::hash_find_insert(Node*)` (`<unknown>`)

|     % | Samples | Caller                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------- | ----------- |
| 37.5% |       3 | `PhaseIterGVN::transform_old(Node*)`                            | `<unknown>` |
| 37.5% |       3 | `PhaseGVN::transform_no_reclaim(Node*)`                         | `<unknown>` |
| 12.5% |       1 | `PhaseIterGVN::optimize()`                                      | `<unknown>` |
| 12.5% |       1 | `GraphKit::type_check_receiver(Node*, ciKlass*, float, Node**)` | `<unknown>` |

##### `LIR_OpVisitState::visit(LIR_Op*)` (`<unknown>`)

|     % | Samples | Caller                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 37.5% |       3 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
| 37.5% |       3 | `LinearScan::build_intervals()`                                        | `<unknown>` |
| 12.5% |       1 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
| 12.5% |       1 | `LinearScan::do_linear_scan()`                                         | `<unknown>` |

##### `PhaseLive::compute(unsigned int)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       8 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Compile::identify_useful_nodes(Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 75.0% |       6 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| 25.0% |       2 | `Matcher::specialize_generic_vector_operands()`                                            | `<unknown>` |

##### `LinearScanWalker::alloc_free_reg(Interval*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       8 | `LinearScanWalker::activate_current()` | `<unknown>` |

##### `Compile::disconnect_useless_nodes(Unique_Node_List&, Unique_Node_List&)` (`<unknown>`)

|     % | Samples | Caller                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 87.5% |       7 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
| 12.5% |       1 | `PhaseCCP::transform(Node*)`                                                               | `<unknown>` |

##### `pthread_jit_write_protect_np` (`<unknown>`)

|     % | Samples | Caller                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 50.0% |       4 | `jni_GetPrimitiveArrayCritical`                          | `<unknown>` |
| 12.5% |       1 | `JVM_IHashCode`                                          | `<unknown>` |
| 12.5% |       1 | `JVM_InitClassName`                                      | `<unknown>` |
| 12.5% |       1 | `jni_ReleasePrimitiveArrayCritical`                      | `<unknown>` |
| 12.5% |       1 | `Unsafe_AllocateInstance(JNIEnv_*, _jobject*, _jclass*)` | `<unknown>` |

##### `PhaseChaitin::gather_lrg_masks(bool)` (`<unknown>`)

|      % | Samples | Caller                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate()` | `<unknown>` |

##### `Dictionary::find(Thread*, Symbol*, Handle)` (`<unknown>`)

|     % | Samples | Caller                                                                                   | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------- | ----------- |
| 71.4% |       5 | `SystemDictionary::resolve_instance_class_or_null(Symbol*, Handle, Handle, JavaThread*)` | `<unknown>` |
| 28.6% |       2 | `SystemDictionary::find_constrained_instance_or_array_klass(Thread*, Symbol*, Handle)`   | `<unknown>` |

##### `ClassFileParser::skip_over_field_signature(char const*, bool, unsigned int, JavaThread*) const` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                               | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 57.1% |       4 | `ClassFileParser::parse_localvariable_table(ClassFileStream const*, unsigned int, unsigned short, unsigned int, unsigned short*, bool, JavaThread*)` | `<unknown>` |
| 28.6% |       2 | `ClassFileParser::verify_legal_method_signature(Symbol const*, Symbol const*, JavaThread*) const`                                                    | `<unknown>` |
| 14.3% |       1 | `ClassFileParser::verify_legal_field_signature(Symbol const*, Symbol const*, JavaThread*) const`                                                     | `<unknown>` |

##### `CodeCache::make_marked_nmethods_deoptimized()` (`<unknown>`)

|      % | Samples | Caller                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       7 | `Deoptimization::deoptimize_all_marked()` | `<unknown>` |

##### `PhaseIdealLoop::Dominators()` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       6 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |

##### `_platform_memmove` (`<unknown>`)

|     % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| 33.3% |       2 | `bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::internal_insert_get<SymbolTableLookup, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP>(Thread*, SymbolTableLookup&, Symbol const&, bool ConcurrentHashTable<SymbolTableConfig, (MEMFLAGS)11>::insert<SymbolTableLookup>(Thread*, SymbolTableLookup&, Symbol const&, bool*, bool*)::NOP&, bool*, bool*)` | `<unknown>` |
| 16.7% |       1 | `PhaseIdealLoop::set_idom(Node*, Node*, unsigned int)`                                                                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
| 16.7% |       1 | `Node_Array::grow(unsigned int)`                                                                                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| 16.7% |       1 | `VectorSet::grow(unsigned int)`                                                                                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| 16.7% |       1 | `inflate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |

##### `vmSymbols::find_sid(Symbol const*)` (`<unknown>`)

|      % | Samples | Caller                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |       6 | `ciObjectFactory::get_symbol(Symbol*)` | `<unknown>` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller                                                                       | Location                                                                      |
| ----: | ------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 16.7% |       1 | `getValue(AbstractArrayMapOwner, KProperty)`                                 | `org.jetbrains.kotlin.util.NullableArrayMapAccessor`                          |
| 16.7% |       1 | `substituteType(ConeKotlinType)`                                             | `org.jetbrains.kotlin.fir.java.enhancement.EnhancedForWarningConeSubstitutor` |
| 16.7% |       1 | `getUseSiteMemberScope(FirClass, FirSession, ScopeSession, FirResolvePhase)` | `org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider`                      |
| 16.7% |       1 | `isStoreOperation(AbstractInsnNode)`                                         | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt`                     |
| 16.7% |       1 | `getClassId(NameResolver, int)`                                              | `org.jetbrains.kotlin.serialization.deserialization.NameResolverUtilKt`       |

##### `fwd_copy_again` (`<unknown>`)

|     % | Samples | Caller                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 80.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)` | `<unknown>` |
| 20.0% |       1 | `CodeBuffer::copy_code_to(CodeBlob*)`                         | `<unknown>` |

##### `Arena::contains(void const*) const` (`<unknown>`)

|      % | Samples | Caller                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       5 | `Matcher::xform(Node*, int)` | `<unknown>` |

##### `G1ParScanThreadState::do_copy_to_survivor_space(G1HeapRegionAttr, oopDesc*, markWord)` (`<unknown>`)

|     % | Samples | Caller                                                              | Location    |
| ----: | ------: | ------------------------------------------------------------------- | ----------- |
| 80.0% |       4 | `G1ParScanThreadState::trim_queue_to_threshold(unsigned int)`       | `<unknown>` |
| 20.0% |       1 | `G1ScanHRForRegionClosure::scan_memregion(unsigned int, MemRegion)` | `<unknown>` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Caller                                                        | Location                                      |
| -----: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List)` (`org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`)

|      % | Samples | Caller                                                                                                                                                                                            | Location                                                              |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% |       2 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirReceiverParameterSymbol, FirTypeRef, FirBasedSymbol, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`)

|      % | Samples | Caller                  | Location                                                                                 |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `hasNext()` (`java.util.LinkedHashMap$LinkedHashIterator`)

|     % | Samples | Caller                                                                                                                                | Location                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 50.0% |       1 | `analyzeAndGetLambdaReturnArguments(ConeResolvedLambdaAtom, ConeKotlinType, List, List, ConeKotlinType, Candidate, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl` |
| 50.0% |       1 | `isSyntheticFunctionCallThatShouldUseEqualityConstraint(Candidate, ConeKotlinType)`                                                   | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                    |

##### `iterator()` (`java.util.ArrayList`)

|     % | Samples | Caller                                                            | Location                                                                              |
| ----: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 50.0% |       1 | `check(CheckerContext, DiagnosticReporter, FirResolvedQualifier)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirDeprecatedQualifierChecker` |
| 50.0% |       1 | `<init>(List)`                                                    | `org.jetbrains.kotlin.fir.types.ConeAttributes`                                       |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirPropertyAccessExpressionBuilder`)

|      % | Samples | Caller                                        | Location                                                                        |
| -----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertSimpleNameExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|      % | Samples | Caller                                                                      | Location                                                                         |
| -----: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertDeclarationFromClassBody(LighterASTNode, List, ClassWrapper, List)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

|      % | Samples | Caller                                                                                                                                                                  | Location                                                               |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|      % | Samples | Caller                                                   | Location                                                                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformFunctionCall(FirFunctionCall, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `configureAnnotationsAndSignature(FirFunctionBuilder, FirFunction, FirFunctionSymbol, List, ConeKotlinType, List, ConeKotlinType, DeferredCallableCopyReturnType, FirDeclarationOrigin, boolean)` (`org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`)

|      % | Samples | Caller                                                                                                                                                                                                      | Location                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `configureAnnotationsTypeParametersAndSignature(FirFunctionBuilder, FirSession, FirFunction, List, List, ConeKotlinType, List, ConeKotlinType, DeferredCallableCopyReturnType, FirFunctionSymbol, boolean)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator` |

##### `createCopyForFirFunction(FirNamedFunctionSymbol, FirNamedFunction, ConeClassLikeLookupTag, FirSession, FirDeclarationOrigin, boolean, ConeSimpleKotlinType, List, List, ConeKotlinType, List, ConeKotlinType, Modality, Visibility, DeferredCallableCopyReturnType, KtSourceElement, boolean)` (`org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`)

|      % | Samples | Caller                                                                                                                                                                                                                                                                                                                                         | Location                                                        |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `createCopyForFirFunction$default(FirFakeOverrideGenerator, FirNamedFunctionSymbol, FirNamedFunction, ConeClassLikeLookupTag, FirSession, FirDeclarationOrigin, boolean, ConeSimpleKotlinType, List, List, ConeKotlinType, List, ConeKotlinType, Modality, Visibility, DeferredCallableCopyReturnType, KtSourceElement, boolean, int, Object)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator` |

##### `getPsi(AbstractKtSourceElement)` (`org.jetbrains.kotlin.KtSourceElementKt`)

|      % | Samples | Caller                                    | Location                                                 |
| -----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `toIrConst(FirLiteralExpression, IrType)` | `org.jetbrains.kotlin.fir.backend.utils.ConstantUtilsKt` |

##### `write(byte[], int, int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % | Samples | Caller            | Location                                          |
| -----: | ------: | ----------------- | ------------------------------------------------- |
| 100.0% |       1 | `refreshBuffer()` | `org.jetbrains.kotlin.protobuf.CodedOutputStream` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Caller                                                        | Location                                          |
| -----: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `getResolvePhase()` (`org.jetbrains.kotlin.fir.declarations.FirResolvedToPhaseState`)

|      % | Samples | Caller                                        | Location                                                  |
| -----: | ------: | --------------------------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `getResolvePhase(FirElementWithResolveState)` | `org.jetbrains.kotlin.fir.declarations.FirResolveStateKt` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirClassSubstitutionScope$$Lambda.0x000000700163eb30`)

|      % | Samples | Caller                                                                                                       | Location                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |       1 | `processFunctionsByName$lambda$0(JavaClassMembersEnhancementScope, Name, Function1, FirNamedFunctionSymbol)` | `org.jetbrains.kotlin.fir.java.scopes.JavaClassMembersEnhancementScope` |

##### `getConstraintsFromAllForkPoints()` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|      % | Samples | Caller                           | Location                                                                     |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% |       1 | `resolveForkPointsConstraints()` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl`)

|      % | Samples | Caller     | Location                                                                                                    |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x0000007001686af0` |

##### `visitTypeOperatorCall(FirTypeOperatorCall, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

|      % | Samples | Caller                       | Location                                                   |
| -----: | ------: | ---------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirTypeOperatorCall` |

##### `toConeKotlinTypeForFlexibleBound(JavaClassifierType, FirSession, JavaTypeParameterStack, FirJavaTypeConversionMode, ConeAttributes, KtSourceElement, ConeLookupTagBasedType)` (`org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`)

|      % | Samples | Caller                                                                                                                                                                                              | Location                                             |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `toConeKotlinTypeForFlexibleBound$default(JavaClassifierType, FirSession, JavaTypeParameterStack, FirJavaTypeConversionMode, ConeAttributes, KtSourceElement, ConeLookupTagBasedType, int, Object)` | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt` |

##### `toFirResolvedTypeRef(JavaType, FirSession, JavaTypeParameterStack, KtSourceElement, FirJavaTypeConversionMode)` (`org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`)

|      % | Samples | Caller                                                                                                          | Location                                             |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% |       1 | `resolveIfJavaType(FirTypeRef, FirSession, JavaTypeParameterStack, KtSourceElement, FirJavaTypeConversionMode)` | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt` |

##### `buildPartial()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$Builder`)

|      % | Samples | Caller    | Location                                                                   |
| -----: | ------: | --------- | -------------------------------------------------------------------------- |
| 100.0% |       1 | `build()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$Builder` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `getNode(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `containsKey(Object)` | `java.util.HashMap` |

##### `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` (`java.lang.System$2`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |       1 | `defineClass(boolean, Object)` | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner` |

##### `lazy(Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|      % | Samples | Caller                                                                        | Location                                            |
| -----: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% |       1 | `<init>(FirBasedSymbol, boolean, RealVariable, RealVariable, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable` |

##### `addClass(Class)` (`java.lang.ClassLoader`)

|      % | Samples | Caller                                                                          | Location                |
| -----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 100.0% |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `read(byte[], int, int)` (`java.io.PushbackInputStream`)

|      % | Samples | Caller                        | Location                       |
| -----: | ------: | ----------------------------- | ------------------------------ |
| 100.0% |       1 | `readFully(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `<init>(int, int, String, String, String, long)` (`jdk.internal.org.objectweb.asm.Symbol`)

|      % | Samples | Caller                                  | Location                                           |
| -----: | ------: | --------------------------------------- | -------------------------------------------------- |
| 100.0% |       1 | `<init>(int, int, String, String, int)` | `jdk.internal.org.objectweb.asm.SymbolTable$Entry` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|      % | Samples | Caller                                        | Location                                       |
| -----: | ------: | --------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `codeUnwrapReturnValue(MethodVisitor, Class)` | `java.lang.reflect.ProxyGenerator$ProxyMethod` |

##### `calculateHashMapCapacity(int)` (`java.util.HashMap`)

|      % | Samples | Caller               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |       1 | `<init>(Collection)` | `java.util.LinkedHashSet` |

##### `entrySet()` (`java.util.LinkedHashMap`)

|      % | Samples | Caller                          | Location                                                                  |
| -----: | ------: | ------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 | `processDefaultsAndRunChecks()` | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor` |

##### `equals(Object)` (`java.lang.Object`)

|      % | Samples | Caller                     | Location                         |
| -----: | ------: | -------------------------- | -------------------------------- |
| 100.0% |       1 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller           | Location                                 |
| -----: | ------: | ---------------- | ---------------------------------------- |
| 100.0% |       1 | `equals(Object)` | `org.jetbrains.kotlin.name.FqNameUnsafe` |

##### `filterNotNull(Object[])` (`kotlin.collections.ArraysKt___ArraysKt`)

|      % | Samples | Caller                    | Location                                          |
| -----: | ------: | ------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `listOfNotNull(Object[])` | `kotlin.collections.CollectionsKt__CollectionsKt` |

##### `get(Class)` (`kotlin.reflect.jvm.internal.ClassValueCache`)

|      % | Samples | Caller                          | Location                               |
| -----: | ------: | ------------------------------- | -------------------------------------- |
| 100.0% |       1 | `getOrCreateKotlinClass(Class)` | `kotlin.reflect.jvm.internal.CachesKt` |

##### `emptyList()` (`kotlin.collections.CollectionsKt__CollectionsKt`)

|      % | Samples | Caller                               | Location                                                                         |
| -----: | ------: | ------------------------------------ | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `getCallables(FirCache, CallableId)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `setMajorVersionAndClassName(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Caller                                              | Location                                     |
| -----: | ------: | --------------------------------------------------- | -------------------------------------------- |
| 100.0% |       1 | `visit(int, int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 66.9% |     882 | `_pthread_start`                                                                                   | `<unknown>`                                             |
| 66.9% |     882 | `thread_start`                                                                                     | `<unknown>`                                             |
| 66.8% |     881 | `Thread::call_run()`                                                                               | `<unknown>`                                             |
| 66.8% |     881 | `thread_native_entry(Thread*)`                                                                     | `<unknown>`                                             |
| 62.4% |     823 | `CompileBroker::compiler_thread_loop()`                                                            | `<unknown>`                                             |
| 62.4% |     823 | `JavaThread::thread_main_inner()`                                                                  | `<unknown>`                                             |
| 61.0% |     804 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                           | `<unknown>`                                             |
| 42.5% |     561 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                          | `<unknown>`                                             |
| 42.4% |     559 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                 | `<unknown>`                                             |
| 33.0% |     435 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.0% |     435 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.4% |     361 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 27.3% |     360 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.3% |     360 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.3% |     360 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 27.3% |     360 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 27.3% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 27.3% |     360 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.3% |     360 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 27.2% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                                                                                | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 62.4% |     823 | `CompileBroker::compiler_thread_loop()`                                                                 | `<unknown>` |
| 61.0% |     804 | `CompileBroker::invoke_compiler_on_method(CompileTask*)`                                                | `<unknown>` |
| 42.5% |     561 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                               | `<unknown>` |
| 42.4% |     559 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)`                                      | `<unknown>` |
| 20.9% |     276 | `Compile::Code_Gen()`                                                                                   | `<unknown>` |
| 17.7% |     234 | `Compilation::compile_method()`                                                                         | `<unknown>` |
| 17.7% |     234 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |
| 16.5% |     218 | `Compilation::compile_java_method()`                                                                    | `<unknown>` |
| 15.9% |     210 | `Compile::Optimize()`                                                                                   | `<unknown>` |
| 12.1% |     159 | `PhaseChaitin::Register_Allocate()`                                                                     | `<unknown>` |
|  8.1% |     107 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)`                                                 | `<unknown>` |
|  7.3% |      96 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)`                                           | `<unknown>` |
|  7.2% |      95 | `PhaseIdealLoop::build_and_optimize()`                                                                  | `<unknown>` |
|  7.1% |      93 | `Compilation::emit_lir()`                                                                               | `<unknown>` |
|  5.6% |      74 | `LinearScan::do_linear_scan()`                                                                          | `<unknown>` |
|  5.2% |      69 | `Compilation::build_hir()`                                                                              | `<unknown>` |
|  4.7% |      62 | `PhaseIterGVN::optimize()`                                                                              | `<unknown>` |
|  4.2% |      56 | `PhaseIterGVN::transform_old(Node*)`                                                                    | `<unknown>` |
|  4.2% |      55 | `Compilation::emit_code_body()`                                                                         | `<unknown>` |
|  3.7% |      49 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)`                                                    | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                            | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 66.9% |     882 | `_pthread_start`                                                                                                    | `<unknown>` |
| 66.9% |     882 | `thread_start`                                                                                                      | `<unknown>` |
| 66.8% |     881 | `Thread::call_run()`                                                                                                | `<unknown>` |
| 66.8% |     881 | `thread_native_entry(Thread*)`                                                                                      | `<unknown>` |
| 62.4% |     823 | `JavaThread::thread_main_inner()`                                                                                   | `<unknown>` |
| 17.7% |     234 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`                                             | `<unknown>` |
|  5.2% |      69 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                                     | `<unknown>` |
|  4.6% |      61 | `Parse::do_one_block()`                                                                                             | `<unknown>` |
|  4.6% |      61 | `Parse::do_all_blocks()`                                                                                            | `<unknown>` |
|  4.6% |      61 | `Parse::Parse(JVMState*, ciMethod*, float)`                                                                         | `<unknown>` |
|  4.6% |      61 | `ParseGenerator::generate(JVMState*)`                                                                               | `<unknown>` |
|  4.5% |      59 | `Java_java_lang_ClassLoader_defineClass1`                                                                           | `<unknown>` |
|  4.4% |      58 | `JVM_DefineClassWithSource`                                                                                         | `<unknown>` |
|  4.3% |      57 | `Parse::do_call()`                                                                                                  | `<unknown>` |
|  4.3% |      57 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)`  | `<unknown>` |
|  4.3% |      57 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|  4.3% |      57 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)`     | `<unknown>` |
|  3.9% |      52 | `inflate_fast`                                                                                                      | `<unknown>` |
|  3.7% |      49 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)`                                               | `<unknown>` |
|  3.7% |      49 | `IR::IR(Compilation*, ciMethod*, int)`                                                                              | `<unknown>` |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 33.0% |     435 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 33.0% |     435 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 27.3% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 27.3% |     360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 27.2% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.2% |     359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 27.1% |     358 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.1% |     358 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 27.1% |     358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.8% |     353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.2% |     345 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     345 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.2% |     345 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.1% |     344 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.1% |     344 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.1% |     344 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 26.0% |     343 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.9% |     341 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.9% |     341 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.9% |     341 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                        | Location                                              |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 27.4% |     361 | `invoke(Object, Object[])`                                                      | `java.lang.reflect.Method`                            |
| 27.3% |     360 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
| 27.3% |     360 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
| 27.3% |     360 | `invokeExact_MT(Object, Object, Object, Object)`                                | `java.lang.invoke.Invokers$Holder`                    |
| 27.3% |     360 | `invokeImpl(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 27.3% |     360 | `invoke(Object, Object[])`                                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  5.5% |      72 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                   |
|  5.4% |      71 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                        |
|  5.4% |      71 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                           |
|  5.2% |      69 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                              |
|  5.2% |      69 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                              |
|  5.0% |      66 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                               |
|  4.8% |      63 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                               |
|  4.7% |      62 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                               |
|  4.6% |      61 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                               |
|  4.2% |      55 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.3% |      17 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                         |
|  1.1% |      14 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                      |
|  0.8% |      10 | `checkNotNullParameter(Object, String)`                                         | `kotlin.jvm.internal.Intrinsics`                      |
|  0.7% |       9 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`   | `java.lang.invoke.MethodHandleNatives`                |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`<unknown>`)

|     % | Samples | Callee                         | Location    |
| ----: | ------: | ------------------------------ | ----------- |
| 99.9% |     881 | `thread_native_entry(Thread*)` | `<unknown>` |
|  0.1% |       1 | `ThreadJavaMain`               | `<unknown>` |

##### `thread_start` (`<unknown>`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |     882 | `_pthread_start` | `<unknown>` |

##### `Thread::call_run()` (`<unknown>`)

|     % | Samples | Callee                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 93.4% |     823 | `JavaThread::thread_main_inner()` | `<unknown>` |
|  5.2% |      46 | `WorkerThread::run()`             | `<unknown>` |
|  0.8% |       7 | `VMThread::run()`                 | `<unknown>` |
|  0.3% |       3 | `ConcurrentGCThread::run()`       | `<unknown>` |
|  0.2% |       2 | `WatcherThread::run()`            | `<unknown>` |

##### `thread_native_entry(Thread*)` (`<unknown>`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     881 | `Thread::call_run()` | `<unknown>` |

##### `CompileBroker::compiler_thread_loop()` (`<unknown>`)

|     % | Samples | Callee                                                   | Location    |
| ----: | ------: | -------------------------------------------------------- | ----------- |
| 97.7% |     804 | `CompileBroker::invoke_compiler_on_method(CompileTask*)` | `<unknown>` |
|  2.3% |      19 | `CompileQueue::get(CompilerThread*)`                     | `<unknown>` |

##### `JavaThread::thread_main_inner()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |     823 | `CompileBroker::compiler_thread_loop()` | `<unknown>` |

##### `CompileBroker::invoke_compiler_on_method(CompileTask*)` (`<unknown>`)

|     % | Samples | Callee                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------- | ----------- |
| 69.8% |     561 | `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` | `<unknown>` |
| 29.1% |     234 | `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)`   | `<unknown>` |
|  0.5% |       4 | `CompilationLog::log_compile(JavaThread*, CompileTask*)`                  | `<unknown>` |
|  0.4% |       3 | `ciEnv::ciEnv(CompileTask*)`                                              | `<unknown>` |
|  0.2% |       2 | `ciEnv::~ciEnv()`                                                         | `<unknown>` |

##### `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------ | ----------- |
| 99.6% |     559 | `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` | `<unknown>` |
|  0.2% |       1 | `Compile::Optimize()`                                              | `<unknown>` |
|  0.2% |       1 | `Chunk::next_chop()`                                               | `<unknown>` |

##### `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` (`<unknown>`)

|     % | Samples | Callee                                                                                     | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------ | ----------- |
| 49.4% |     276 | `Compile::Code_Gen()`                                                                      | `<unknown>` |
| 37.4% |     209 | `Compile::Optimize()`                                                                      | `<unknown>` |
| 10.6% |      59 | `ParseGenerator::generate(JVMState*)`                                                      | `<unknown>` |
|  1.8% |      10 | `PhaseRemoveUseless::PhaseRemoveUseless(PhaseGVN*, Unique_Node_List&, Phase::PhaseNumber)` | `<unknown>` |
|  0.5% |       3 | `Compile::inline_string_calls(bool)`                                                       | `<unknown>` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 83.0% |     361 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.0% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     435 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 99.7% |     360 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  0.3% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     359 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     360 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     360 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     360 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     360 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     360 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     360 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |     353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.1% |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  0.3% |       1 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     358 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     358 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.7% |     345 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.3% |       8 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     344 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     345 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     345 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                                                | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 99.7% |     343 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`       |
|  0.3% |       1 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     344 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     344 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     341 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.2% |     229 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.2% |      79 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  8.5% |      29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     341 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     341 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.9% |      20 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.5% |       5 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen()` (`<unknown>`)

|     % | Samples | Callee                                                                               | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------- |
| 57.6% |     159 | `PhaseChaitin::Register_Allocate()`                                                  | `<unknown>` |
| 17.8% |      49 | `Matcher::match()`                                                                   | `<unknown>` |
| 11.6% |      32 | `PhaseCFG::do_global_code_motion()`                                                  | `<unknown>` |
|  9.8% |      27 | `PhaseOutput::Output()`                                                              | `<unknown>` |
|  1.1% |       3 | `PhaseOutput::install_code(ciMethod*, int, AbstractCompiler*, bool, bool, RTMState)` | `<unknown>` |

##### `Compilation::compile_method()` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 93.2% |     218 | `Compilation::compile_java_method()`                                                                                                                                                           | `<unknown>` |
|  5.1% |      12 | `ciEnv::register_method(ciMethod*, int, CodeOffsets*, int, CodeBuffer*, int, OopMapSet*, ExceptionHandlerTable*, ImplicitExceptionTable*, AbstractCompiler*, bool, bool, bool, int, RTMState)` | `<unknown>` |
|  1.7% |       4 | `Dependencies::assert_common_1(Dependencies::DepType, ciBaseObject*)`                                                                                                                          | `<unknown>` |

##### `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                          | Location    |
| -----: | ------: | ------------------------------- | ----------- |
| 100.0% |     234 | `Compilation::compile_method()` | `<unknown>` |

##### `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                  | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |     234 | `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` | `<unknown>` |

##### `Compilation::compile_java_method()` (`<unknown>`)

|     % | Samples | Callee                           | Location    |
| ----: | ------: | -------------------------------- | ----------- |
| 42.7% |      93 | `Compilation::emit_lir()`        | `<unknown>` |
| 31.7% |      69 | `Compilation::build_hir()`       | `<unknown>` |
| 25.2% |      55 | `Compilation::emit_code_body()`  | `<unknown>` |
|  0.5% |       1 | `ciMethod::ensure_method_data()` | `<unknown>` |

##### `Compile::Optimize()` (`<unknown>`)

|     % | Samples | Callee                                                  | Location    |
| ----: | ------: | ------------------------------------------------------- | ----------- |
| 31.4% |      66 | `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 19.5% |      41 | `Compile::optimize_loops(PhaseIterGVN&, LoopOptsMode)`  | `<unknown>` |
| 19.0% |      40 | `PhaseIterGVN::optimize()`                              | `<unknown>` |
|  6.7% |      14 | `ConnectionGraph::do_analysis(Compile*, PhaseIterGVN*)` | `<unknown>` |
|  5.7% |      12 | `PhaseCCP::PhaseCCP(PhaseIterGVN*)`                     | `<unknown>` |

##### `PhaseChaitin::Register_Allocate()` (`<unknown>`)

|     % | Samples | Callee                                             | Location    |
| ----: | ------: | -------------------------------------------------- | ----------- |
| 19.5% |      31 | `PhaseChaitin::build_ifg_physical(ResourceArea*)`  | `<unknown>` |
| 17.6% |      28 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` | `<unknown>` |
| 13.2% |      21 | `PhaseLive::compute(unsigned int)`                 | `<unknown>` |
| 11.3% |      18 | `PhaseChaitin::gather_lrg_masks(bool)`             | `<unknown>` |
| 10.1% |      16 | `PhaseChaitin::post_allocate_copy_removal()`       | `<unknown>` |

##### `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                                        | Location    |
| ----: | ------: | ------------------------------------------------------------- | ----------- |
| 89.7% |      96 | `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` | `<unknown>` |
| 10.3% |      11 | `PhaseIterGVN::optimize()`                                    | `<unknown>` |

##### `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 99.0% |      95 | `PhaseIdealLoop::build_and_optimize()` | `<unknown>` |
|  1.0% |       1 | `_platform_memset`                     | `<unknown>` |

##### `PhaseIdealLoop::build_and_optimize()` (`<unknown>`)

|     % | Samples | Callee                                                                  | Location    |
| ----: | ------: | ----------------------------------------------------------------------- | ----------- |
| 30.5% |      29 | `PhaseIdealLoop::build_loop_late(VectorSet&, Node_List&, Node_Stack&)`  | `<unknown>` |
| 16.8% |      16 | `PhaseIdealLoop::split_if_with_blocks(VectorSet&, Node_Stack&)`         | `<unknown>` |
| 14.7% |      14 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` | `<unknown>` |
| 12.6% |      12 | `PhaseIdealLoop::Dominators()`                                          | `<unknown>` |
|  4.2% |       4 | `IdealLoopTree::iteration_split(PhaseIdealLoop*, Node_List&)`           | `<unknown>` |

##### `Compilation::emit_lir()` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 79.6% |      74 | `LinearScan::do_linear_scan()`               | `<unknown>` |
| 19.4% |      18 | `BlockList::iterate_forward(BlockClosure*)`  | `<unknown>` |
|  1.1% |       1 | `ControlFlowOptimizer::optimize(BlockList*)` | `<unknown>` |

##### `LinearScan::do_linear_scan()` (`<unknown>`)

|     % | Samples | Callee                                                                 | Location    |
| ----: | ------: | ---------------------------------------------------------------------- | ----------- |
| 47.3% |      35 | `LinearScan::allocate_registers()`                                     | `<unknown>` |
| 17.6% |      13 | `LinearScan::build_intervals()`                                        | `<unknown>` |
| 16.2% |      12 | `LinearScan::assign_reg_num(GrowableArray<LIR_Op*>*, IntervalWalker*)` | `<unknown>` |
|  8.1% |       6 | `LinearScan::compute_local_live_sets()`                                | `<unknown>` |
|  4.1% |       3 | `LinearScan::sort_intervals_before_allocation()`                       | `<unknown>` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 95.8% |      69 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  2.8% |       2 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 98.6% |      70 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  1.4% |       1 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      71 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `Compilation::build_hir()` (`<unknown>`)

|     % | Samples | Callee                                            | Location    |
| ----: | ------: | ------------------------------------------------- | ----------- |
| 71.0% |      49 | `IR::IR(Compilation*, ciMethod*, int)`            | `<unknown>` |
| 10.1% |       7 | `GlobalValueNumbering::GlobalValueNumbering(IR*)` | `<unknown>` |
|  8.7% |       6 | `IR::eliminate_null_checks()`                     | `<unknown>` |
|  5.8% |       4 | `IR::compute_use_counts()`                        | `<unknown>` |
|  2.9% |       2 | `IR::compute_code()`                              | `<unknown>` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`<unknown>`)

|     % | Samples | Callee                              | Location    |
| ----: | ------: | ----------------------------------- | ----------- |
| 75.4% |      52 | `inflate_fast`                      | `<unknown>` |
| 17.4% |      12 | `inflate`                           | `<unknown>` |
|  5.8% |       4 | `jni_GetPrimitiveArrayCritical`     | `<unknown>` |
|  1.4% |       1 | `jni_ReleasePrimitiveArrayCritical` | `<unknown>` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                          | Location    |
| -----: | ------: | ----------------------------------------------- | ----------- |
| 100.0% |      69 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `<unknown>` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      69 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee              | Location                                                 |
| ----: | ------: | ------------------- | -------------------------------------------------------- |
| 93.9% |      62 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  6.1% |       4 | `findClass(String)` | `java.net.URLClassLoader`                                |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 96.8% |      61 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  4.8% |       3 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |
|  1.6% |       1 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `PhaseIterGVN::optimize()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 90.3% |      56 | `PhaseIterGVN::transform_old(Node*)` | `<unknown>` |
|  3.2% |       2 | `PhiNode::hash() const`              | `<unknown>` |
|  1.6% |       1 | `NodeHash::hash_find_insert(Node*)`  | `<unknown>` |
|  1.6% |       1 | `BoolNode::Ideal(PhaseGVN*, bool)`   | `<unknown>` |
|  1.6% |       1 | `ProjNode::Value(PhaseGVN*) const`   | `<unknown>` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 95.2% |      59 | `Java_java_lang_ClassLoader_defineClass1` | `<unknown>`                                              |
| 12.9% |       8 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  1.6% |       1 | `addClass(Class)`                         | `java.lang.ClassLoader`                                  |
|  1.6% |       1 | `loadClass(String)`                       | `java.lang.ClassLoader`                                  |

##### `Parse::do_one_block()` (`<unknown>`)

|     % | Samples | Callee                               | Location    |
| ----: | ------: | ------------------------------------ | ----------- |
| 93.4% |      57 | `Parse::do_call()`                   | `<unknown>` |
| 14.8% |       9 | `Parse::do_field_access(bool, bool)` | `<unknown>` |
|  6.6% |       4 | `Parse::do_one_bytecode()`           | `<unknown>` |
|  4.9% |       3 | `Parse::array_load(BasicType)`       | `<unknown>` |
|  4.9% |       3 | `Parse::do_new()`                    | `<unknown>` |

##### `Parse::do_all_blocks()` (`<unknown>`)

|      % | Samples | Callee                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |      61 | `Parse::do_one_block()`                 | `<unknown>` |
|   1.6% |       1 | `PhaseGVN::transform_no_reclaim(Node*)` | `<unknown>` |

##### `Parse::Parse(JVMState*, ciMethod*, float)` (`<unknown>`)

|      % | Samples | Callee                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |      61 | `Parse::do_all_blocks()`    | `<unknown>` |
|   4.9% |       3 | `Parse::create_entry_map()` | `<unknown>` |
|   3.3% |       2 | `ciMethod::method_data()`   | `<unknown>` |
|   1.6% |       1 | `Parse::build_exits()`      | `<unknown>` |

##### `ParseGenerator::generate(JVMState*)` (`<unknown>`)

|      % | Samples | Callee                                      | Location    |
| -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% |      61 | `Parse::Parse(JVMState*, ciMethod*, float)` | `<unknown>` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      61 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`<unknown>`)

|     % | Samples | Callee                      | Location    |
| ----: | ------: | --------------------------- | ----------- |
| 98.3% |      58 | `JVM_DefineClassWithSource` | `<unknown>` |
|  1.7% |       1 | `jni_GetStringUTFLength`    | `<unknown>` |

##### `JVM_DefineClassWithSource` (`<unknown>`)

|     % | Samples | Callee                                                                                                          | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------- | ----------- |
| 98.3% |      57 | `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` | `<unknown>` |
|  1.7% |       1 | `SystemDictionary::resolve_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)`   | `<unknown>` |

##### `Parse::do_call()` (`<unknown>`)

|     % | Samples | Callee                                                                                  | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------- | ----------- |
| 75.4% |      43 | `PredictedCallGenerator::generate(JVMState*)`                                           | `<unknown>` |
| 61.4% |      35 | `ParseGenerator::generate(JVMState*)`                                                   | `<unknown>` |
| 19.3% |      11 | `Compile::call_generator(ciMethod*, int, bool, JVMState*, bool, float, ciKlass*, bool)` | `<unknown>` |
|  3.5% |       2 | `LateInlineVirtualCallGenerator::generate(JVMState*)`                                   | `<unknown>` |
|  1.8% |       1 | `GraphKit::record_profiled_receiver_for_speculation(Node*)`                             | `<unknown>` |

##### `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                         | Location    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 86.0% |      49 | `ClassFileParser::ClassFileParser(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const*, ClassFileParser::Publicity, JavaThread*)` | `<unknown>` |
| 14.0% |       8 | `ClassFileParser::create_instance_klass(bool, ClassInstanceInfo const&, JavaThread*)`                                                          | `<unknown>` |

##### `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` (`<unknown>`)

|     % | Samples | Callee                                                                                                             | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ----------- |
| 96.5% |      55 | `KlassFactory::create_from_stream(ClassFileStream*, Symbol*, ClassLoaderData*, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |
|  3.5% |       2 | `SystemDictionary::define_instance_class(InstanceKlass*, Handle, JavaThread*)`                                     | `<unknown>` |

##### `jvm_define_class_common(char const*, _jobject*, signed char const*, int, _jobject*, char const*, JavaThread*)` (`<unknown>`)

|      % | Samples | Callee                                                                                                              | Location    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% |      57 | `SystemDictionary::resolve_class_from_stream(ClassFileStream*, Symbol*, Handle, ClassLoadInfo const&, JavaThread*)` | `<unknown>` |

##### `PhaseIterGVN::transform_old(Node*)` (`<unknown>`)

|     % | Samples | Callee                                       | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 14.3% |       8 | `IfNode::Ideal(PhaseGVN*, bool)`             | `<unknown>` |
| 12.5% |       7 | `NodeHash::hash_find_insert(Node*)`          | `<unknown>` |
| 10.7% |       6 | `RegionNode::Ideal(PhaseGVN*, bool)`         | `<unknown>` |
|  7.1% |       4 | `PhaseIterGVN::add_users_to_worklist(Node*)` | `<unknown>` |
|  7.1% |       4 | `StoreNode::Ideal(PhaseGVN*, bool)`          | `<unknown>` |

##### `Compilation::emit_code_body()` (`<unknown>`)

|     % | Samples | Callee                                          | Location    |
| ----: | ------: | ----------------------------------------------- | ----------- |
| 65.5% |      36 | `LIR_Assembler::emit_code(BlockList*)`          | `<unknown>` |
| 34.5% |      19 | `Compilation::emit_code_epilog(LIR_Assembler*)` | `<unknown>` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 74.5% |      41 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 50.9% |      28 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  9.1% |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
|  5.5% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  1.8% |       1 | `invokeSuspend(Object)` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                                            |

##### `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` (`<unknown>`)

|     % | Samples | Callee                                        | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 93.9% |      46 | `GraphBuilder::iterate_all_blocks(bool)`      | `<unknown>` |
|  6.1% |       3 | `BlockBegin::iterate_preorder(BlockClosure*)` | `<unknown>` |

##### `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` (`<unknown>`)

|      % | Samples | Callee                                               | Location    |
| -----: | ------: | ---------------------------------------------------- | ----------- |
| 100.0% |      49 | `GraphBuilder::GraphBuilder(Compilation*, IRScope*)` | `<unknown>` |
|   2.0% |       1 | `tlv_get_addr`                                       | `<unknown>` |

##### `IR::IR(Compilation*, ciMethod*, int)` (`<unknown>`)

|      % | Samples | Callee                                                                | Location    |
| -----: | ------: | --------------------------------------------------------------------- | ----------- |
| 100.0% |      49 | `IRScope::IRScope(Compilation*, IRScope*, int, ciMethod*, int, bool)` | `<unknown>` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % | Samples | Callee     | Location                                                                                         |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| 17.6% |       3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000700163b700`                  |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160fb50`             |
| 11.8% |       2 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000007001753c50`                       |
|  5.9% |       1 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000007001141e48` |
|  5.9% |       1 | `invoke()` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000700100a000`                         |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 50.0% |       7 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
| 28.6% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000700160f2a8`                      |
| 28.6% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000700161dc00`          |
| 28.6% |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000700162fb50`            |
| 14.3% |       2 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015d74a0` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Callee                            | Location                         |
| ----: | ------: | --------------------------------- | -------------------------------- |
| 40.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee                                                      | Location                    |
| ----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 88.9% |       8 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
| 11.1% |       1 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.4% |      45 | `inflate_fast` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                   |
| 1.4% |      19 | `PhaseChaitin::Split(unsigned int, ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% |      16 | `__psynch_cvwait` ← `PlatformMonitor::wait(unsigned long long)` ← `Monitor::wait(unsigned long long)` ← `CompileQueue::get(CompilerThread*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.1% |      14 | `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% |      10 | `IntervalWalker::walk_to(IntervalState, int)` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                           |
| 0.7% |       9 | `Matcher::match_tree(Node const*)` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |       9 | `LinearScanWalker::free_collect_inactive_fixed(Interval*)` ← `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                     |
| 0.6% |       8 | `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |       8 | `LinearScanWalker::alloc_free_reg(Interval*)` ← `LinearScanWalker::activate_current()` ← `IntervalWalker::walk_to(int)` ← `LinearScan::allocate_registers()` ← `LinearScan::do_linear_scan()` ← `Compilation::emit_lir()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                  |
| 0.5% |       7 | `PhaseChaitin::elide_copy(Node*, int, Block*, Node_List*, Node_List*, bool)` ← `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                              |
| 0.5% |       7 | `PhaseChaitin::gather_lrg_masks(bool)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                        |
| 0.5% |       7 | `PhaseIdealLoop::build_loop_early(VectorSet&, Node_List&, Node_Stack&)` ← `PhaseIdealLoop::build_and_optimize()` ← `PhaseIdealLoop::PhaseIdealLoop(PhaseIterGVN&, LoopOptsMode)` ← `PhaseIdealLoop::optimize(PhaseIterGVN&, LoopOptsMode)` ← `Compile::Optimize()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                     |
| 0.5% |       6 | `IndexSetIterator::advance_and_next()` ← `PhaseChaitin::build_ifg_physical(ResourceArea*)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |       6 | `PhaseLive::add_liveout(Block_List&, Block*, IndexSet*, VectorSet&)` ← `PhaseLive::compute(unsigned int)` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                |
| 0.4% |       5 | `Arena::contains(void const*) const` ← `Matcher::xform(Node*, int)` ← `Matcher::match()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |       5 | `PhaseIFG::re_insert(unsigned int)` ← `PhaseChaitin::Select()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |       5 | `PhaseChaitin::post_allocate_copy_removal()` ← `PhaseChaitin::Register_Allocate()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |       5 | `DebugInformationRecorder::describe_scope(int, methodHandle const&, ciMethod*, int, bool, bool, bool, bool, bool, bool, DebugToken*, DebugToken*, DebugToken*)` ← `LIR_Assembler::record_non_safepoint_debug_info()` ← `LIR_Assembler::process_debug_info(LIR_Op*)` ← `LIR_Assembler::emit_lir_list(LIR_List*)` ← `LIR_Assembler::emit_code(BlockList*)` ← `Compilation::emit_code_body()` ← `Compilation::compile_java_method()` ← `Compilation::compile_method()` ← `Compilation::Compilation(AbstractCompiler*, ciEnv*, ciMethod*, int, BufferBlob*, bool, DirectiveSet*)` ← `Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start` |
| 0.4% |       5 | `PhaseCFG::schedule_local(Block*, GrowableArray<int>&, VectorSet&, long*)` ← `PhaseCFG::global_code_motion()` ← `PhaseCFG::do_global_code_motion()` ← `Compile::Code_Gen()` ← `Compile::Compile(ciEnv*, ciMethod*, int, Options, DirectiveSet*)` ← `C2Compiler::compile_method(ciEnv*, ciMethod*, int, bool, DirectiveSet*)` ← `CompileBroker::invoke_compiler_on_method(CompileTask*)` ← `CompileBroker::compiler_thread_loop()` ← `JavaThread::thread_main_inner()` ← `Thread::call_run()` ← `thread_native_entry(Thread*)` ← `_pthread_start` ← `thread_start`                                                                                                                                                                                                                                                                                                                            |
