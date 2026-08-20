# Sampling profile

Collected 1,322 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Compiler         | 46.3% |     612 |
| Native           | 38.6% |     510 |
| Ours             |  9.8% |     130 |
| Standard library |  4.5% |      59 |
| JIT              |  0.8% |      11 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.3% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.0% |      27 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.8% |      24 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.6% |      21 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`             |
| 1.5% |      20 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`             |
| 1.4% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.1% |      15 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`             |
| 1.1% |      14 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 1.0% |      13 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.9% |      12 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`             |
| 0.9% |      12 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`             |
| 0.9% |      12 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`             |
| 0.9% |      12 | `IntervalWalker::walk_to`                                                                                                                                | `libjvm.dylib`             |
| 0.8% |      11 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.8% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      10 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      10 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.8% |      10 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.7% |       9 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`             |

#### Categories

##### Compiler

|    % | Samples | Function                                    | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 1.6% |      21 | `PhaseChaitin::Split`                       | `libjvm.dylib` |
| 1.5% |      20 | `IndexSetIterator::advance_and_next`        | `libjvm.dylib` |
| 1.1% |      15 | `PhaseChaitin::build_ifg_physical`          | `libjvm.dylib` |
| 0.9% |      12 | `PhaseChaitin::gather_lrg_masks`            | `libjvm.dylib` |
| 0.9% |      12 | `ciObjectFactory::get_metadata`             | `libjvm.dylib` |
| 0.9% |      12 | `Node::dominates`                           | `libjvm.dylib` |
| 0.9% |      12 | `IntervalWalker::walk_to`                   | `libjvm.dylib` |
| 0.8% |      10 | `PhaseIdealLoop::build_loop_early`          | `libjvm.dylib` |
| 0.7% |       9 | `PhaseLive::add_liveout`                    | `libjvm.dylib` |
| 0.7% |       9 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 0.7% |       9 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
| 0.7% |       9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
| 0.6% |       8 | `PhaseIdealLoop::Dominators`                | `libjvm.dylib` |
| 0.5% |       7 | `PhaseOutput::BuildOopMaps`                 | `libjvm.dylib` |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies`    | `libjvm.dylib` |
| 0.5% |       7 | `Compile::identify_useful_nodes`            | `libjvm.dylib` |
| 0.5% |       6 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| 0.5% |       6 | `Matcher::match_tree`                       | `libjvm.dylib` |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| 0.5% |       6 | `LinearScan::build_intervals`               | `libjvm.dylib` |

##### Native

|    % | Samples | Function                                                                                                                                                 | Location                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 3.3% |      44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
| 2.0% |      27 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`             |
| 1.8% |      24 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`            |
| 1.4% |      19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| 1.1% |      14 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
| 1.0% |      13 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
| 1.0% |      13 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
| 0.8% |      11 | `pthread_jit_write_protect_np`                                                                                                                           | `libsystem_pthread.dylib`  |
| 0.8% |      11 | `InstanceKlass::find_method_index`                                                                                                                       | `libjvm.dylib`             |
| 0.8% |      10 | `inflate`                                                                                                                                                | `libzip.dylib`             |
| 0.8% |      10 | `inflate_table`                                                                                                                                          | `libzip.dylib`             |
| 0.7% |       9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| 0.5% |       7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`             |
| 0.5% |       7 | `Arena::contains`                                                                                                                                        | `libjvm.dylib`             |
| 0.5% |       7 | `_platform_memmove`                                                                                                                                      | `libsystem_platform.dylib` |
| 0.5% |       6 | `sys_icache_invalidate`                                                                                                                                  | `libsystem_platform.dylib` |
| 0.4% |       5 | `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>`                             | `libjvm.dylib`             |
| 0.4% |       5 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`             |
| 0.3% |       4 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`             |
| 0.3% |       4 | `ClassFileParser::skip_over_field_signature`                                                                                                             | `libjvm.dylib`             |

##### Ours

|    % | Samples | Function                                                                                                                                                                                                                                    | Location                                                                                |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 0.2% |       2 | `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`                    |
| 0.2% |       2 | `getArrayMap()`                                                                                                                                                                                                                             | `org.jetbrains.kotlin.util.ComponentArrayOwner`                                         |
| 0.1% |       1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                  |
| 0.1% |       1 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                                                                                                             | `org.jetbrains.kotlin.protobuf.AbstractParser`                                          |
| 0.1% |       1 | `access$2502(PsiBuilderImpl$StartMarker, PsiBuilderImpl$ProductionMarker)`                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                                     |
| 0.1% |       1 | `prepareLightTree()`                                                                                                                                                                                                                        | `com.intellij.lang.impl.PsiBuilderImpl`                                                 |
| 0.1% |       1 | `getNameConflictsTracker(FirSession)`                                                                                                                                                                                                       | `org.jetbrains.kotlin.fir.FirNameConflictsTrackerKt`                                    |
| 0.1% |       1 | `build()`                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.declarations.builder.FirPropertyBuilder`                      |
| 0.1% |       1 | `initFields()`                                                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                       |
| 0.1% |       1 | `<init>()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.declarations.FirValueParameter`                               |
| 0.1% |       1 | `getAnnotationCount()`                                                                                                                                                                                                                      | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                       |
| 0.1% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                           |
| 0.1% |       1 | `hashCode()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`                                 |
| 0.1% |       1 | `getDeclaredMemberScopeProvider(FirSession)`                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt`                 |
| 0.1% |       1 | `transformChildren(FirTransformer, Object)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`                       |
| 0.1% |       1 | `needResolveNestedClassifiers(FirDeclaration)`                                                                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolveTransformer`             |
| 0.1% |       1 | `enhanceMethod(FirFunction, CallableId, Name, boolean, List)`                                                                                                                                                                               | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement`                     |
| 0.1% |       1 | `runTasks()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                      |
| 0.1% |       1 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                           |
| 0.1% |       1 | `createToFreshVariableSubstitutorAndAddInitialConstraints(ResolutionContext, FirTypeParameterRefsOwner, ConstraintSystemOperation)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |

##### Standard library

|    % | Samples | Function                                                      | Location                                                    |
| ---: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------- |
| 0.3% |       4 | `sanitizeStackTrace(Throwable)`                               | `kotlin.jvm.internal.Intrinsics`                            |
| 0.2% |       2 | `areEqual(Object, Object)`                                    | `kotlin.jvm.internal.Intrinsics`                            |
| 0.2% |       2 | `to(Object, Object)`                                          | `kotlin.TuplesKt`                                           |
| 0.1% |       1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                    |
| 0.1% |       1 | `update(byte[], int, int)`                                    | `java.util.zip.CRC32`                                       |
| 0.1% |       1 | `resize()`                                                    | `java.util.HashMap`                                         |
| 0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                         |
| 0.1% |       1 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`                            |
| 0.1% |       1 | `<init>(StringBuilder)`                                       | `java.lang.String`                                          |
| 0.1% |       1 | `<init>(MethodType, LambdaForm, Object)`                      | `java.lang.invoke.BoundMethodHandle$Species_L`              |
| 0.1% |       1 | `SH(byte[], int)`                                             | `java.util.zip.ZipUtils`                                    |
| 0.1% |       1 | `getName()`                                                   | `java.lang.invoke.MemberName`                               |
| 0.1% |       1 | `visitClassTypeSignature(ClassTypeSignature)`                 | `sun.reflect.generics.visitor.Reifier`                      |
| 0.1% |       1 | `add(Object)`                                                 | `java.util.ArrayList`                                       |
| 0.1% |       1 | `getPackageName()`                                            | `java.lang.Class`                                           |
| 0.1% |       1 | `<init>(int, FieldVisitor)`                                   | `jdk.internal.org.objectweb.asm.FieldVisitor`               |
| 0.1% |       1 | `<init>()`                                                    | `jdk.internal.org.objectweb.asm.ByteVector`                 |
| 0.1% |       1 | `asTypeCached(MethodType)`                                    | `java.lang.invoke.MethodHandle`                             |
| 0.1% |       1 | `get(Class)`                                                  | `kotlin.reflect.jvm.internal.ClassValueCache`               |
| 0.1% |       1 | `<init>(Object, Function0)`                                   | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       4 | `kotlin.jvm.internal.Intrinsics:253` |

##### `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` (`org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`)

|     % | Samples | Location                                                                |
| ----: | ------: | ----------------------------------------------------------------------- |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext:54` |
| 50.0% |       1 | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext:94` |

##### `getArrayMap()` (`org.jetbrains.kotlin.util.ComponentArrayOwner`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       2 | `org.jetbrains.kotlin.util.ComponentArrayOwner:15` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       2 | `kotlin.jvm.internal.Intrinsics:169` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       2 | `kotlin.TuplesKt:44` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:142` |

##### `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.protobuf.AbstractParser:209` |

##### `access$2502(PsiBuilderImpl$StartMarker, PsiBuilderImpl$ProductionMarker)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker:298` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `com.intellij.lang.impl.PsiBuilderImpl:1108` |

##### `getNameConflictsTracker(FirSession)` (`org.jetbrains.kotlin.fir.FirNameConflictsTrackerKt`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.FirNameConflictsTrackerKt:52` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirPropertyBuilder`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.builder.FirPropertyBuilder:70` |

##### `initFields()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:17266` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.FirValueParameter`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.FirValueParameter:29` |

##### `getAnnotationCount()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Location                                                |
| -----: | ------: | ------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:17206` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:4950` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType:128` |

##### `getDeclaredMemberScopeProvider(FirSession)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt:185` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl:58` |

##### `needResolveNestedClassifiers(FirDeclaration)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolveTransformer`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolveTransformer:65` |

##### `enhanceMethod(FirFunction, CallableId, Name, boolean, List)` (`org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement:478` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager:82` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter:80` |

##### `createToFreshVariableSubstitutorAndAddInitialConstraints(ResolutionContext, FirTypeParameterRefsOwner, ConstraintSystemOperation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage:377` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `java.util.zip.CRC32:75` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:713` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:636` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.HashMap$HashIterator:1609` |

##### `<init>(StringBuilder)` (`java.lang.String`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.lang.String:1496` |

##### `<init>(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.BoundMethodHandle$Species_L:210` |

##### `SH(byte[], int)` (`java.util.zip.ZipUtils`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.zip.ZipUtils:207` |

##### `getName()` (`java.lang.invoke.MemberName`)

|      % | Samples | Location                          |
| -----: | ------: | --------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MemberName:102` |

##### `visitClassTypeSignature(ClassTypeSignature)` (`sun.reflect.generics.visitor.Reifier`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `sun.reflect.generics.visitor.Reifier:125` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:495` |

##### `getPackageName()` (`java.lang.Class`)

|      % | Samples | Location               |
| -----: | ------: | ---------------------- |
| 100.0% |       1 | `java.lang.Class:1163` |

##### `<init>(int, FieldVisitor)` (`jdk.internal.org.objectweb.asm.FieldVisitor`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.FieldVisitor:98` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.ByteVector:77` |

##### `asTypeCached(MethodType)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Location                            |
| -----: | ------: | ----------------------------------- |
| 100.0% |       1 | `java.lang.invoke.MethodHandle:874` |

##### `get(Class)` (`kotlin.reflect.jvm.internal.ClassValueCache`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.ClassValueCache:62` |

##### `<init>(Object, Function0)` (`kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal:56` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `SymbolTable::do_lookup` (`libjvm.dylib`)

|     % | Samples | Caller                                         | Location       |
| ----: | ------: | ---------------------------------------------- | -------------- |
| 63.0% |      17 | `SymbolTable::lookup_only`                     | `libjvm.dylib` |
| 22.2% |       6 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |
| 14.8% |       4 | `SymbolTable::new_symbol`                      | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|    % | Samples | Caller                                      | Location       |
| ---: | ------: | ------------------------------------------- | -------------- |
| 8.3% |       2 | `PhaseLive::compute`                        | `libjvm.dylib` |
| 8.3% |       2 | `TypeInstPtr::make`                         | `libjvm.dylib` |
| 8.3% |       2 | `GraphKit::clone_map`                       | `libjvm.dylib` |
| 8.3% |       2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
| 8.3% |       2 | `GraphBuilder::invoke`                      | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      21 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 25.0% |       5 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| 25.0% |       5 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| 10.0% |       2 | `PhaseIFG::re_insert`              | `libjvm.dylib` |
| 10.0% |       2 | `PhaseIFG::remove_node`            | `libjvm.dylib` |
| 10.0% |       2 | `PhaseChaitin::Select`             | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

|     % | Samples | Caller                                             | Location       |
| ----: | ------: | -------------------------------------------------- | -------------- |
| 84.2% |      16 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| 15.8% |       3 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      15 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 14.3% |       2 | `PhaseIdealLoop::build_and_optimize`      | `libjvm.dylib` |
|  7.1% |       1 | `MemAllocator::allocate`                  | `libjvm.dylib` |
|  7.1% |       1 | `ClassFileParser::parse_method`           | `libjvm.dylib` |
|  7.1% |       1 | `ClassFileParser::parse_stream`           | `libjvm.dylib` |
|  7.1% |       1 | `GraphKit::transfer_exceptions_into_jvms` | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |      13 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      13 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |      12 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `ciObjectFactory::get_metadata` (`libjvm.dylib`)

|     % | Samples | Caller                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 25.0% |       3 | `ciEnv::get_klass_by_index_impl`       | `libjvm.dylib` |
| 25.0% |       3 | `ciObjectFactory::create_new_metadata` | `libjvm.dylib` |
| 16.7% |       2 | `ciEnv::get_klass_by_name_impl`        | `libjvm.dylib` |
|  8.3% |       1 | `ciBytecodeStream::get_method`         | `libjvm.dylib` |
|  8.3% |       1 | `ciObjectFactory::get`                 | `libjvm.dylib` |

##### `Node::dominates` (`libjvm.dylib`)

|      % | Samples | Caller                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |      12 | `MemNode::all_controls_dominate` | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 75.0% |       9 | `IntervalWalker::walk_to`        | `libjvm.dylib` |
| 16.7% |       2 | `LinearScan::allocate_registers` | `libjvm.dylib` |
|  8.3% |       1 | `LinearScan::compute_oop_map`    | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|    % | Samples | Caller                                      | Location                        |
| ---: | ------: | ------------------------------------------- | ------------------------------- |
| 9.1% |       1 | `jni_ReleasePrimitiveArrayCritical`         | `libjvm.dylib`                  |
| 9.1% |       1 | `InterpreterRuntime::build_method_counters` | `libjvm.dylib`                  |
| 9.1% |       1 | `jni_ExceptionOccurred`                     | `libjvm.dylib`                  |
| 9.1% |       1 | `<init>(PsiAnnotation[])`                   | `com.intellij.psi.PsiType$Stub` |
| 9.1% |       1 | `JVM_DefineClassWithSource`                 | `libjvm.dylib`                  |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 81.8% |       9 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 18.2% |       2 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |      10 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `inflate` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      10 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate_table` (`libzip.dylib`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      10 | `inflate` | `libzip.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|      % | Samples | Caller               | Location       |
| -----: | ------: | -------------------- | -------------- |
| 100.0% |       9 | `PhaseLive::compute` | `libjvm.dylib` |

##### `PhaseLive::compute` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

|      % | Samples | Caller                                     | Location       |
| -----: | ------: | ------------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       9 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                                                   | Location       |
| -----: | ------: | ------------------------------------------------------------------------ | -------------- |
| 100.0% |       9 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       8 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseOutput::BuildOopMaps` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       7 | `PhaseOutput::Output` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       7 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Compile::identify_useful_nodes` (`libjvm.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 71.4% |       5 | `PhaseRemoveUseless::PhaseRemoveUseless`      | `libjvm.dylib` |
| 28.6% |       2 | `Matcher::specialize_generic_vector_operands` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `Arena::contains` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       7 | `Matcher::xform` | `libjvm.dylib` |

##### `_platform_memmove` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 28.6% |       2 | `PhaseOutput::Output`                     | `libjvm.dylib`  |
| 14.3% |       1 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |
| 14.3% |       1 | `Node_Array::grow`                        | `libjvm.dylib`  |
| 14.3% |       1 | `Node::Node`                              | `libjvm.dylib`  |
| 14.3% |       1 | `vframe::java_sender`                     | `libjvm.dylib`  |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|      % | Samples | Caller                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |       6 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `Matcher::match_tree` (`libjvm.dylib`)

|      % | Samples | Caller           | Location       |
| -----: | ------: | ---------------- | -------------- |
| 100.0% |       6 | `Matcher::xform` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late_post_work` (`libjvm.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 50.0% |       3 | `PhaseIdealLoop::build_loop_late`    | `libjvm.dylib` |
| 50.0% |       3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       6 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `sys_icache_invalidate` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                      | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 16.7% |       1 | `CompiledIC::set_to_monomorphic`            | `libjvm.dylib` |
| 16.7% |       1 | `CompiledIC::set_to_megamorphic`            | `libjvm.dylib` |
| 16.7% |       1 | `InlineCacheBuffer::create_transition_stub` | `libjvm.dylib` |
| 16.7% |       1 | `CompiledIC::set_to_clean`                  | `libjvm.dylib` |
| 16.7% |       1 | `CodeBuffer::copy_code_to`                  | `libjvm.dylib` |

##### `void OopOopIterateBackwardsDispatch<G1ScanEvacuatedObjClosure>::Table::oop_oop_iterate_backwards<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                            | Location       |
| -----: | ------: | ------------------------------------------------- | -------------- |
| 100.0% |       5 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |

##### `Dictionary::find` (`libjvm.dylib`)

|     % | Samples | Caller                                                       | Location       |
| ----: | ------: | ------------------------------------------------------------ | -------------- |
| 60.0% |       3 | `SystemDictionary::find_constrained_instance_or_array_klass` | `libjvm.dylib` |
| 40.0% |       2 | `SystemDictionary::resolve_instance_class_or_null`           | `libjvm.dylib` |

##### `Dict::Insert` (`libjvm.dylib`)

|     % | Samples | Caller                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 50.0% |       2 | `Type::hashcons`            | `libjvm.dylib` |
| 25.0% |       1 | `PhaseValues::longcon`      | `libjvm.dylib` |
| 25.0% |       1 | `PhaseOutput::BuildOopMaps` | `libjvm.dylib` |

##### `ClassFileParser::skip_over_field_signature` (`libjvm.dylib`)

|      % | Samples | Caller                                           | Location       |
| -----: | ------: | ------------------------------------------------ | -------------- |
| 100.0% |       4 | `ClassFileParser::verify_legal_method_signature` | `libjvm.dylib` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|      % | Samples | Caller                            | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |       4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` (`org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`)

|      % | Samples | Caller                                                                                                                                                                           | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |       2 | `childContext(List, FirBasedSymbol, NameResolver, TypeTable, FqName, DeserializedContainerSource, FirRegularClassSymbol, AnnotationDeserializer, FirConstDeserializer, boolean)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext` |

##### `getArrayMap()` (`org.jetbrains.kotlin.util.ComponentArrayOwner`)

|      % | Samples | Caller                                | Location                                                                   |
| -----: | ------: | ------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       2 | `extractValue(AbstractArrayMapOwner)` | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

|     % | Samples | Caller           | Location                                                         |
| ----: | ------: | ---------------- | ---------------------------------------------------------------- |
| 50.0% |       1 | `isLocal()`      | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl` |
| 50.0% |       1 | `equals(Object)` | `kotlin.Pair`                                                    |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|      % | Samples | Caller                                                                                 | Location                                 |
| -----: | ------: | -------------------------------------------------------------------------------------- | ---------------------------------------- |
| 100.0% |       2 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)` | `org.jetbrains.kotlin.KtSourceElementKt` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % | Samples | Caller                                                                       | Location                                               |
| -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`)

|      % | Samples | Caller                                          | Location                                       |
| -----: | ------: | ----------------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `parseFrom(InputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.AbstractParser` |

##### `access$2502(PsiBuilderImpl$StartMarker, PsiBuilderImpl$ProductionMarker)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

|      % | Samples | Caller               | Location                                |
| -----: | ------: | -------------------- | --------------------------------------- |
| 100.0% |       1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|      % | Samples | Caller           | Location                                |
| -----: | ------: | ---------------- | --------------------------------------- |
| 100.0% |       1 | `getLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `getNameConflictsTracker(FirSession)` (`org.jetbrains.kotlin.fir.FirNameConflictsTrackerKt`)

|      % | Samples | Caller                                       | Location                                                          |
| -----: | ------: | -------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `recordFile(FirFile, FirProviderImpl$State)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirProviderImpl` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirPropertyBuilder`)

|      % | Samples | Caller                                                     | Location                                                                         |
| -----: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `convertPropertyDeclaration(LighterASTNode, ClassWrapper)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `initFields()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Caller                                            | Location                                          |
| -----: | ------: | ------------------------------------------------- | ------------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.FirValueParameter`)

|      % | Samples | Caller                                                                                                                                                                                                                                      | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, FirTypeRef, Name, List, FirValueParameterSymbol, FirExpression, FirBasedSymbol, boolean, boolean, boolean, FirValueParameterKind)` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl` |

##### `getAnnotationCount()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

|      % | Samples | Caller            | Location                                          |
| -----: | ------: | ----------------- | ------------------------------------------------- |
| 100.0% |       1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % | Samples | Caller                                                        | Location                                      |
| -----: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.types.ConeLookupTagBasedType`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |       1 | `hash(Object)` | `java.util.HashMap` |

##### `getDeclaredMemberScopeProvider(FirSession)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt`)

|      % | Samples | Caller                                        | Location                                                                |
| -----: | ------: | --------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 | `nestedClassifierScope(FirSession, FirClass)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`)

|      % | Samples | Caller                                      | Location                                                          |
| -----: | ------: | ------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl` |

##### `needResolveNestedClassifiers(FirDeclaration)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolveTransformer`)

|      % | Samples | Caller                                                                      | Location                                                                            |
| -----: | ------: | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `transformDeclarationContent(FirDeclaration, FirResolvedDeclarationStatus)` | `org.jetbrains.kotlin.fir.resolve.transformers.AbstractFirStatusResolveTransformer` |

##### `enhanceMethod(FirFunction, CallableId, Name, boolean, List)` (`org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement`)

|      % | Samples | Caller                                                                | Location                                                            |
| -----: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% |       1 | `enhance$org_jetbrains_kotlin_fir_jvm(FirFunctionSymbol, Name, List)` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|      % | Samples | Caller                                                                                                | Location                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

|      % | Samples | Caller                                                                                        | Location                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `completeCall$default(FirCallCompleter, FirExpression, ResolutionMode, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `createToFreshVariableSubstitutorAndAddInitialConstraints(ResolutionContext, FirTypeParameterRefsOwner, ConstraintSystemOperation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`)

|      % | Samples | Caller                                                           | Location                                                                                |
| -----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       1 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `update(byte[], int, int)` (`java.util.zip.CRC32`)

|      % | Samples | Caller                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |       1 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |       1 | `put(Object, Object)` | `java.util.HashMap` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `<init>(StringBuilder)` (`java.lang.String`)

|      % | Samples | Caller       | Location                  |
| -----: | ------: | ------------ | ------------------------- |
| 100.0% |       1 | `toString()` | `java.lang.StringBuilder` |

##### `<init>(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`)

|      % | Samples | Caller                                 | Location                                       |
| -----: | ------: | -------------------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `make(MethodType, LambdaForm, Object)` | `java.lang.invoke.BoundMethodHandle$Species_L` |

##### `SH(byte[], int)` (`java.util.zip.ZipUtils`)

|      % | Samples | Caller                | Location                 |
| -----: | ------: | --------------------- | ------------------------ |
| 100.0% |       1 | `CENFLG(byte[], int)` | `java.util.zip.ZipUtils` |

##### `getName()` (`java.lang.invoke.MemberName`)

|      % | Samples | Caller                           | Location                               |
| -----: | ------: | -------------------------------- | -------------------------------------- |
| 100.0% |       1 | `canBeCalledVirtual(MemberName)` | `java.lang.invoke.MethodHandleNatives` |

##### `visitClassTypeSignature(ClassTypeSignature)` (`sun.reflect.generics.visitor.Reifier`)

|      % | Samples | Caller                    | Location                                       |
| -----: | ------: | ------------------------- | ---------------------------------------------- |
| 100.0% |       1 | `accept(TypeTreeVisitor)` | `sun.reflect.generics.tree.ClassTypeSignature` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller              | Location                                    |
| -----: | ------: | ------------------- | ------------------------------------------- |
| 100.0% |       1 | `classData(Object)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `getPackageName()` (`java.lang.Class`)

|      % | Samples | Caller                                     | Location                |
| -----: | ------: | ------------------------------------------ | ----------------------- |
| 100.0% |       1 | `postDefineClass(Class, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>(int, FieldVisitor)` (`jdk.internal.org.objectweb.asm.FieldVisitor`)

|      % | Samples | Caller        | Location                                      |
| -----: | ------: | ------------- | --------------------------------------------- |
| 100.0% |       1 | `<init>(int)` | `jdk.internal.org.objectweb.asm.FieldVisitor` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % | Samples | Caller                | Location                                     |
| -----: | ------: | --------------------- | -------------------------------------------- |
| 100.0% |       1 | `<init>(ClassWriter)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `asTypeCached(MethodType)` (`java.lang.invoke.MethodHandle`)

|      % | Samples | Caller               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |       1 | `asType(MethodType)` | `java.lang.invoke.MethodHandle` |

##### `get(Class)` (`kotlin.reflect.jvm.internal.ClassValueCache`)

|      % | Samples | Caller                          | Location                               |
| -----: | ------: | ------------------------------- | -------------------------------------- |
| 100.0% |       1 | `getOrCreateKotlinClass(Class)` | `kotlin.reflect.jvm.internal.CachesKt` |

##### `<init>(Object, Function0)` (`kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal`)

|      % | Samples | Caller                        | Location                                        |
| -----: | ------: | ----------------------------- | ----------------------------------------------- |
| 100.0% |       1 | `lazySoft(Object, Function0)` | `kotlin.reflect.jvm.internal.ReflectProperties` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 67.5% |     892 | `_pthread_start`                                                                                   | `libsystem_pthread.dylib`                               |
| 67.5% |     892 | `thread_start`                                                                                     | `libsystem_pthread.dylib`                               |
| 67.4% |     891 | `Thread::call_run`                                                                                 | `libjvm.dylib`                                          |
| 67.4% |     891 | `thread_native_entry`                                                                              | `libjvm.dylib`                                          |
| 62.4% |     825 | `JavaThread::thread_main_inner`                                                                    | `libjvm.dylib`                                          |
| 62.3% |     823 | `CompileBroker::compiler_thread_loop`                                                              | `libjvm.dylib`                                          |
| 61.0% |     807 | `CompileBroker::invoke_compiler_on_method`                                                         | `libjvm.dylib`                                          |
| 42.9% |     567 | `Compile::Compile`                                                                                 | `libjvm.dylib`                                          |
| 42.9% |     567 | `C2Compiler::compile_method`                                                                       | `libjvm.dylib`                                          |
| 32.1% |     425 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.1% |     425 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.5% |     350 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.5% |     350 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.5% |     350 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 26.5% |     350 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 26.5% |     350 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 26.5% |     350 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.5% |     350 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 26.5% |     350 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 26.4% |     349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

#### Categories

##### Compiler

|     % | Samples | Function                                    | Location       |
| ----: | ------: | ------------------------------------------- | -------------- |
| 62.3% |     823 | `CompileBroker::compiler_thread_loop`       | `libjvm.dylib` |
| 61.0% |     807 | `CompileBroker::invoke_compiler_on_method`  | `libjvm.dylib` |
| 42.9% |     567 | `Compile::Compile`                          | `libjvm.dylib` |
| 42.9% |     567 | `C2Compiler::compile_method`                | `libjvm.dylib` |
| 21.2% |     280 | `Compile::Code_Gen`                         | `libjvm.dylib` |
| 17.3% |     229 | `Compilation::compile_method`               | `libjvm.dylib` |
| 17.3% |     229 | `Compilation::Compilation`                  | `libjvm.dylib` |
| 16.0% |     212 | `Compilation::compile_java_method`          | `libjvm.dylib` |
| 15.9% |     210 | `Compile::Optimize`                         | `libjvm.dylib` |
| 12.2% |     161 | `PhaseChaitin::Register_Allocate`           | `libjvm.dylib` |
|  9.0% |     119 | `PhaseIdealLoop::optimize`                  | `libjvm.dylib` |
|  8.2% |     108 | `PhaseIdealLoop::build_and_optimize`        | `libjvm.dylib` |
|  8.2% |     108 | `PhaseIdealLoop::PhaseIdealLoop`            | `libjvm.dylib` |
|  6.7% |      88 | `Compilation::build_hir`                    | `libjvm.dylib` |
|  6.2% |      82 | `Compilation::emit_lir`                     | `libjvm.dylib` |
|  5.3% |      70 | `LinearScan::do_linear_scan`                | `libjvm.dylib` |
|  5.1% |      68 | `GraphBuilder::GraphBuilder`                | `libjvm.dylib` |
|  4.5% |      60 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |
|  4.5% |      60 | `GraphBuilder::iterate_all_blocks`          | `libjvm.dylib` |
|  4.3% |      57 | `Compile::optimize_loops`                   | `libjvm.dylib` |

##### Native

|     % | Samples | Function                                        | Location                  |
| ----: | ------: | ----------------------------------------------- | ------------------------- |
| 67.5% |     892 | `_pthread_start`                                | `libsystem_pthread.dylib` |
| 67.5% |     892 | `thread_start`                                  | `libsystem_pthread.dylib` |
| 67.4% |     891 | `Thread::call_run`                              | `libjvm.dylib`            |
| 67.4% |     891 | `thread_native_entry`                           | `libjvm.dylib`            |
| 62.4% |     825 | `JavaThread::thread_main_inner`                 | `libjvm.dylib`            |
| 17.3% |     229 | `Compiler::compile_method`                      | `libjvm.dylib`            |
|  5.4% |      71 | `Java_java_lang_ClassLoader_defineClass1`       | `libjava.dylib`           |
|  5.2% |      69 | `KlassFactory::create_from_stream`              | `libjvm.dylib`            |
|  5.2% |      69 | `JVM_DefineClassWithSource`                     | `libjvm.dylib`            |
|  5.1% |      68 | `SystemDictionary::resolve_class_from_stream`   | `libjvm.dylib`            |
|  5.1% |      68 | `jvm_define_class_common`                       | `libjvm.dylib`            |
|  5.1% |      68 | `IRScope::IRScope`                              | `libjvm.dylib`            |
|  5.1% |      68 | `IR::IR`                                        | `libjvm.dylib`            |
|  5.0% |      66 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib`            |
|  4.9% |      65 | `Parse::Parse`                                  | `libjvm.dylib`            |
|  4.9% |      65 | `ParseGenerator::generate`                      | `libjvm.dylib`            |
|  4.8% |      64 | `WorkerThread::run`                             | `libjvm.dylib`            |
|  4.5% |      60 | `Parse::do_one_block`                           | `libjvm.dylib`            |
|  4.5% |      60 | `Parse::do_all_blocks`                          | `libjvm.dylib`            |
|  4.5% |      59 | `ClassFileParser::ClassFileParser`              | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 32.1% |     425 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 32.1% |     425 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 26.5% |     350 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 26.5% |     350 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 26.4% |     349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.4% |     349 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 26.3% |     348 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.3% |     348 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 26.3% |     348 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 25.9% |     343 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.4% |     336 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.4% |     336 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 25.4% |     336 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 25.3% |     335 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     335 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     335 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.3% |     334 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 25.1% |     332 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.1% |     332 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
| 25.1% |     332 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### Standard library

|     % | Samples | Function                                                                                      | Location                                              |
| ----: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 26.5% |     350 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
| 26.5% |     350 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
| 26.5% |     350 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 26.5% |     350 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.5% |     350 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 26.5% |     350 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
|  5.8% |      77 | `loadClass(String, boolean)`                                                                  | `java.lang.ClassLoader`                               |
|  5.6% |      74 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                     | `java.lang.ClassLoader`                               |
|  5.4% |      72 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                               |
|  5.3% |      70 | `defineClass(String, byte[], int, int)`                                                       | `java.lang.ClassLoader`                               |
|  5.2% |      69 | `read(byte[], int, int)`                                                                      | `java.util.zip.ZipInputStream`                        |
|  5.2% |      69 | `read(byte[])`                                                                                | `java.io.FilterInputStream`                           |
|  5.1% |      67 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                              |
|  5.1% |      67 | `inflate(byte[], int, int)`                                                                   | `java.util.zip.Inflater`                              |
|  5.1% |      67 | `read(byte[], int, int)`                                                                      | `java.util.zip.InflaterInputStream`                   |
|  3.9% |      51 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  1.2% |      16 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`                |
|  1.2% |      16 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                              | `java.lang.invoke.MethodHandleNatives`                |
|  1.1% |      15 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |
|  1.1% |      15 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                    |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 99.9% |     891 | `thread_native_entry` | `libjvm.dylib` |
|  0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     892 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 92.6% |     825 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
|  7.2% |      64 | `WorkerThread::run`             | `libjvm.dylib` |
|  0.2% |       2 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     891 | `Thread::call_run` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 99.8% |     823 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
|  0.1% |       1 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
|  0.1% |       1 | `CompileQueue::get`                                      | `libjvm.dylib` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 98.1% |     807 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  1.8% |      15 | `CompileQueue::get`                        | `libjvm.dylib` |
|  0.1% |       1 | `AbstractCompiler::on_empty_queue`         | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 70.3% |     567 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| 28.4% |     229 | `Compiler::compile_method`      | `libjvm.dylib` |
|  0.4% |       3 | `CompilationLog::log_compile`   | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::ciEnv`                  | `libjvm.dylib` |
|  0.2% |       2 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 49.4% |     280 | `Compile::Code_Gen`                      | `libjvm.dylib` |
| 37.0% |     210 | `Compile::Optimize`                      | `libjvm.dylib` |
| 11.5% |      65 | `ParseGenerator::generate`               | `libjvm.dylib` |
|  1.4% |       8 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |
|  0.4% |       2 | `TypeFunc::make`                         | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     567 | `Compile::Compile` | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 82.4% |     350 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| 17.4% |      74 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  0.2% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`             | `java.lang.invoke.MethodHandleNatives`                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % | Samples | Callee          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |     425 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % | Samples | Callee                          | Location                                                |
| ----: | ------: | ------------------------------- | ------------------------------------------------------- |
| 99.7% |     349 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee           | Location                                               |
| -----: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% |     350 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

|      % | Samples | Callee           | Location                                     |
| -----: | ------: | ---------------- | -------------------------------------------- |
| 100.0% |     350 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

|      % | Samples | Callee                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     350 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Samples | Callee                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |     350 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                                           | Location                           |
| -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |     350 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Samples | Callee                         | Location                                          |
| -----: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |     350 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Callee                     | Location                                          |
| -----: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |     350 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.6% |       2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|     % | Samples | Callee                                                 | Location                                                |
| ----: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 99.7% |     348 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  0.3% |       1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 98.6% |     343 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  1.4% |       5 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                   | Location                                      |
| -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% |     348 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % | Samples | Callee                                         | Location                                      |
| -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% |     348 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % | Samples | Callee                                                          | Location                                      |
| ----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 98.0% |     336 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.0% |       7 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % | Samples | Callee                                                         | Location                                                |
| ----: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% |     335 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.3% |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % | Samples | Callee                                                                | Location                                     |
| -----: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     336 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% |     336 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                         | Location                                                            |
| ----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------- |
| 99.7% |     334 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  0.3% |       1 | `<init>(MessageCollector, boolean, boolean)`   | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     335 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% |     335 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.4% |     332 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.6% |       2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % | Samples | Callee                           | Location                                                              |
| ----: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 68.4% |     227 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 22.6% |      75 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.8% |      26 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  1.2% |       4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % | Samples | Callee                                         | Location                                          |
| -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% |     332 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % | Samples | Callee                              | Location                                                         |
| -----: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| 100.0% |     332 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|   5.4% |      18 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|   1.5% |       5 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 57.5% |     161 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
| 16.1% |      45 | `PhaseOutput::Output`             | `libjvm.dylib` |
| 13.2% |      37 | `Matcher::match`                  | `libjvm.dylib` |
| 11.4% |      32 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  1.4% |       4 | `PhaseOutput::install_code`       | `libjvm.dylib` |

##### `Compilation::compile_method` (`libjvm.dylib`)

|     % | Samples | Callee                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 92.6% |     212 | `Compilation::compile_java_method` | `libjvm.dylib` |
|  6.6% |      15 | `ciEnv::register_method`           | `libjvm.dylib` |
|  0.4% |       1 | `Compilation::build_hir`           | `libjvm.dylib` |
|  0.4% |       1 | `Dependencies::assert_common_1`    | `libjvm.dylib` |

##### `Compilation::Compilation` (`libjvm.dylib`)

|      % | Samples | Callee                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |     229 | `Compilation::compile_method` | `libjvm.dylib` |

##### `Compiler::compile_method` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     229 | `Compilation::Compilation` | `libjvm.dylib` |

##### `Compilation::compile_java_method` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 41.0% |      87 | `Compilation::build_hir`       | `libjvm.dylib` |
| 38.7% |      82 | `Compilation::emit_lir`        | `libjvm.dylib` |
| 17.9% |      38 | `Compilation::emit_code_body`  | `libjvm.dylib` |
|  1.4% |       3 | `ciMethod::ensure_method_data` | `libjvm.dylib` |
|  0.9% |       2 | `FrameMap::FrameMap`           | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 29.5% |      62 | `PhaseIdealLoop::optimize`             | `libjvm.dylib` |
| 27.1% |      57 | `Compile::optimize_loops`              | `libjvm.dylib` |
| 14.8% |      31 | `PhaseIterGVN::optimize`               | `libjvm.dylib` |
|  7.1% |      15 | `PhaseCCP::PhaseCCP`                   | `libjvm.dylib` |
|  5.2% |      11 | `PhaseMacroExpand::expand_macro_nodes` | `libjvm.dylib` |

##### `PhaseChaitin::Register_Allocate` (`libjvm.dylib`)

|     % | Samples | Callee                                     | Location       |
| ----: | ------: | ------------------------------------------ | -------------- |
| 16.8% |      27 | `PhaseChaitin::build_ifg_physical`         | `libjvm.dylib` |
| 16.8% |      27 | `PhaseChaitin::Split`                      | `libjvm.dylib` |
| 13.0% |      21 | `PhaseLive::compute`                       | `libjvm.dylib` |
| 10.6% |      17 | `PhaseChaitin::gather_lrg_masks`           | `libjvm.dylib` |
|  9.9% |      16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `PhaseIdealLoop::optimize` (`libjvm.dylib`)

|     % | Samples | Callee                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 90.8% |     108 | `PhaseIdealLoop::PhaseIdealLoop` | `libjvm.dylib` |
|  8.4% |      10 | `PhaseIterGVN::optimize`         | `libjvm.dylib` |
|  0.8% |       1 | `Chunk::next_chop`               | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

|     % | Samples | Callee                                 | Location       |
| ----: | ------: | -------------------------------------- | -------------- |
| 26.9% |      29 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| 12.0% |      13 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| 11.1% |      12 | `PhaseIdealLoop::build_loop_early`     | `libjvm.dylib` |
| 10.2% |      11 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|  8.3% |       9 | `IdealLoopTree::iteration_split`       | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

|      % | Samples | Callee                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |     108 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|     % | Samples | Callee                                       | Location       |
| ----: | ------: | -------------------------------------------- | -------------- |
| 77.3% |      68 | `IR::IR`                                     | `libjvm.dylib` |
| 13.6% |      12 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|  4.5% |       4 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |
|  3.4% |       3 | `IR::compute_use_counts`                     | `libjvm.dylib` |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 85.4% |      70 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |
| 13.4% |      11 | `BlockList::iterate_forward`          | `libjvm.dylib` |
|  1.2% |       1 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                             | Location                                                 |
| ----: | ------: | ---------------------------------- | -------------------------------------------------------- |
| 92.2% |      71 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  5.2% |       4 | `findClass(String)`                | `java.net.URLClassLoader`                                |
|  3.9% |       3 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                                                          | Location                |
| ----: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| 97.3% |      72 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
|  2.7% |       2 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|     % | Samples | Callee                                    | Location                                                 |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------- |
| 98.6% |      71 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib`                                          |
| 16.7% |      12 | `loadClass(String)`                       | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|     % | Samples | Callee                      | Location                   |
| ----: | ------: | --------------------------- | -------------------------- |
| 97.2% |      69 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
|  1.4% |       1 | `_platform_memmove`         | `libsystem_platform.dylib` |
|  1.4% |       1 | `jni_ExceptionOccurred`     | `libjvm.dylib`             |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|     % | Samples | Callee                                | Location       |
| ----: | ------: | ------------------------------------- | -------------- |
| 35.7% |      25 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
| 22.9% |      16 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
| 17.1% |      12 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  8.6% |       6 | `LinearScan::resolve_data_flow`       | `libjvm.dylib` |
|  5.7% |       4 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|      % | Samples | Callee                                                    | Location                |
| -----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% |      70 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `KlassFactory::create_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                   | Location       |
| ----: | ------: | ---------------------------------------- | -------------- |
| 85.5% |      59 | `ClassFileParser::ClassFileParser`       | `libjvm.dylib` |
| 14.5% |      10 | `ClassFileParser::create_instance_klass` | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 98.6% |      68 | `jvm_define_class_common`      | `libjvm.dylib`            |
|  1.4% |       1 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 95.7% |      66 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|  4.3% |       3 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |

##### `read(byte[])` (`java.io.FilterInputStream`)

|      % | Samples | Callee                   | Location                       |
| -----: | ------: | ------------------------ | ------------------------------ |
| 100.0% |      69 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `GraphBuilder::GraphBuilder` (`libjvm.dylib`)

|     % | Samples | Callee                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 88.2% |      60 | `GraphBuilder::iterate_all_blocks`   | `libjvm.dylib` |
|  5.9% |       4 | `BlockBegin::iterate_preorder`       | `libjvm.dylib` |
|  4.4% |       3 | `BlockListBuilder::BlockListBuilder` | `libjvm.dylib` |
|  1.5% |       1 | `BlockBegin::try_merge`              | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

|     % | Samples | Callee                                    | Location       |
| ----: | ------: | ----------------------------------------- | -------------- |
| 91.2% |      62 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |
|  8.8% |       6 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|      % | Samples | Callee                                        | Location       |
| -----: | ------: | --------------------------------------------- | -------------- |
| 100.0% |      68 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |

##### `IRScope::IRScope` (`libjvm.dylib`)

|      % | Samples | Callee                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |      68 | `GraphBuilder::GraphBuilder` | `libjvm.dylib` |

##### `IR::IR` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      68 | `IRScope::IRScope` | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|     % | Samples | Callee                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 98.5% |      66 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Callee                                                        | Location                 |
| -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |      67 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 98.5% |      66 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
|  1.5% |       1 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|     % | Samples | Callee                              | Location       |
| ----: | ------: | ----------------------------------- | -------------- |
| 66.7% |      44 | `inflate_fast`                      | `libzip.dylib` |
| 30.3% |      20 | `inflate`                           | `libzip.dylib` |
|  3.0% |       2 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|     % | Samples | Callee                    | Location       |
| ----: | ------: | ------------------------- | -------------- |
| 92.3% |      60 | `Parse::do_all_blocks`    | `libjvm.dylib` |
|  6.2% |       4 | `Parse::build_exits`      | `libjvm.dylib` |
|  3.1% |       2 | `Parse::do_exits`         | `libjvm.dylib` |
|  3.1% |       2 | `Parse::create_entry_map` | `libjvm.dylib` |
|  1.5% |       1 | `Parse::do_method_entry`  | `libjvm.dylib` |

##### `ParseGenerator::generate` (`libjvm.dylib`)

|      % | Samples | Callee         | Location       |
| -----: | ------: | -------------- | -------------- |
| 100.0% |      65 | `Parse::Parse` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 37.5% |      24 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib` |
| 31.3% |      20 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib` |
| 12.5% |       8 | `G1ParallelCleaningTask::work`    | `libjvm.dylib` |
| 12.5% |       8 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib` |
|  6.3% |       4 | `G1CMRootRegionScanTask::work`    | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|     % | Samples | Callee                       | Location        |
| ----: | ------: | ---------------------------- | --------------- |
| 83.3% |      50 | `GraphBuilder::invoke`       | `libjvm.dylib`  |
| 10.0% |       6 | `GraphBuilder::access_field` | `libjvm.dylib`  |
|  5.0% |       3 | `GraphBuilder::check_cast`   | `libjvm.dylib`  |
|  5.0% |       3 | `BlockBegin::try_merge`      | `libjvm.dylib`  |
|  3.3% |       2 | `tlv_get_addr`               | `libdyld.dylib` |

##### `GraphBuilder::iterate_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                                      | Location       |
| -----: | ------: | ------------------------------------------- | -------------- |
| 100.0% |      60 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `Parse::do_one_block` (`libjvm.dylib`)

|     % | Samples | Callee                   | Location       |
| ----: | ------: | ------------------------ | -------------- |
| 91.7% |      55 | `Parse::do_call`         | `libjvm.dylib` |
| 21.7% |      13 | `Parse::do_field_access` | `libjvm.dylib` |
| 10.0% |       6 | `Parse::do_one_bytecode` | `libjvm.dylib` |
|  5.0% |       3 | `Parse::do_if`           | `libjvm.dylib` |
|  3.3% |       2 | `Parse::do_instanceof`   | `libjvm.dylib` |

##### `Parse::do_all_blocks` (`libjvm.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |      60 | `Parse::do_one_block`     | `libjvm.dylib` |
|   1.7% |       1 | `JVMState::clone_shallow` | `libjvm.dylib` |

##### `ClassFileParser::ClassFileParser` (`libjvm.dylib`)

|     % | Samples | Callee                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 94.9% |      56 | `ClassFileParser::parse_stream`               | `libjvm.dylib` |
|  3.4% |       2 | `ClassFileParser::post_process_parsed_stream` | `libjvm.dylib` |
|  1.7% |       1 | `Method::sort_methods`                        | `libjvm.dylib` |

##### `Compile::optimize_loops` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |      57 | `PhaseIdealLoop::optimize` | `libjvm.dylib` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % | Samples | Callee                  | Location                                                                                                      |
| ----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| 72.5% |      37 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
| 56.9% |      29 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  5.9% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                      |
|  5.9% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |
|  5.9% |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|     % | Samples | Callee                                                      | Location                    |
| ----: | ------: | ----------------------------------------------------------- | --------------------------- |
| 93.8% |      15 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
|  6.3% |       1 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|      % | Samples | Callee                                                                        | Location                               |
| -----: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| 100.0% |      16 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % | Samples | Callee                                                                                                                   | Location                                       |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 93.3% |      14 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  6.7% |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % | Samples | Callee                                                                 | Location                                             |
| ----: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 86.7% |      13 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
| 13.3% |       2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% |      38 | `inflate_fast` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`              |
| 1.6% |      21 | `PhaseChaitin::Split` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                 |
| 1.1% |      15 | `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                    |
| 0.9% |      12 | `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                      |
| 0.8% |      10 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |       9 | `PhaseLive::add_liveout` (`libjvm.dylib`) ← `PhaseLive::compute` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                       |
| 0.7% |       9 | `PhaseChaitin::elide_copy` (`libjvm.dylib`) ← `PhaseChaitin::post_allocate_copy_removal` ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                               |
| 0.7% |       9 | `PhaseLive::compute` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                  |
| 0.7% |       9 | `inflate` (`libzip.dylib`) ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                   |
| 0.7% |       9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`) ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb` ← `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region` ← `HeapRegionManager::par_iterate` ← `G1RebuildRSAndScrubTask::work` ← `WorkerThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                      |
| 0.5% |       7 | `Arena::contains` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                              |
| 0.5% |       7 | `PhaseOutput::BuildOopMaps` (`libjvm.dylib`) ← `PhaseOutput::Output` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                       |
| 0.5% |       7 | `inflate_table` (`libzip.dylib`) ← `inflate` ← `Java_java_util_zip_Inflater_inflateBytesBytes` ← `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `read(byte[])` (`java.io.FilterInputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| 0.5% |       7 | `IntervalWalker::walk_to` (`libjvm.dylib`) ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                    |
| 0.5% |       6 | `Matcher::match_tree` (`libjvm.dylib`) ← `Matcher::xform` ← `Matcher::match` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                               |
| 0.5% |       6 | `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`) ← `PhaseIdealLoop::build_and_optimize` ← `PhaseIdealLoop::PhaseIdealLoop` ← `PhaseIdealLoop::optimize` ← `Compile::Optimize` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                 |
| 0.5% |       6 | `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`) ← `PhaseChaitin::Register_Allocate` ← `Compile::Code_Gen` ← `Compile::Compile` ← `C2Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                            |
| 0.5% |       6 | `LinearScan::resolve_data_flow` (`libjvm.dylib`) ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                             |
| 0.5% |       6 | `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`) ← `LinearScanWalker::alloc_free_reg` ← `LinearScanWalker::activate_current` ← `IntervalWalker::walk_to` ← `LinearScan::allocate_registers` ← `LinearScan::do_linear_scan` ← `Compilation::emit_lir` ← `Compilation::compile_java_method` ← `Compilation::compile_method` ← `Compilation::Compilation` ← `Compiler::compile_method` ← `CompileBroker::invoke_compiler_on_method` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                  |

# Allocated heap profile

Allocated 679 MiB over 1,351 samples (514 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Standard library | 76.0% | 515 MiB |   1,025 |
| Ours             | 24.0% | 163 MiB |     326 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                                    | Location                                              |
| ----: | -------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------- |
| 23.8% |  161 MiB |     322 | `<init>(int)`                                               | `java.io.ByteArrayOutputStream`                       |
| 20.3% |  137 MiB |     275 | `copyOf(byte[], int)`                                       | `java.util.Arrays`                                    |
|  7.1% | 48.5 MiB |      97 | `clone()`                                                   | `java.lang.Object`                                    |
|  3.0% | 20.5 MiB |      41 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`     |
|  2.5% |   17 MiB |      34 | `iterator()`                                                | `java.util.ArrayList`                                 |
|  2.1% | 14.5 MiB |      29 | `copyOfRangeByte(byte[], int, int)`                         | `java.util.Arrays`                                    |
|  1.2% |    8 MiB |      16 | `grow(int)`                                                 | `java.util.ArrayList`                                 |
|  1.0% |    7 MiB |      14 | `<init>(int)`                                               | `java.lang.AbstractStringBuilder`                     |
|  1.0% |  6.5 MiB |      13 | `newInstance(OutputStream, int)`                            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`     |
|  1.0% |  6.5 MiB |      13 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame` |
|  0.8% |  5.5 MiB |      11 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`            |
|  0.8% | 5.21 MiB |       5 | `initCEN(int, ZipCoder)`                                    | `java.util.zip.ZipFile$Source`                        |
|  0.7% |    5 MiB |      10 | `createZipEntry(String)`                                    | `java.util.zip.ZipInputStream`                        |
|  0.7% |    5 MiB |      10 | `<init>(int)`                                               | `kotlin.collections.builders.MapBuilder`              |
|  0.7% |  4.5 MiB |       9 | `copyOf(Object[], int)`                                     | `java.util.Arrays`                                    |
|  0.7% |  4.5 MiB |       9 | `allocateUninitializedArray(Class, int)`                    | `jdk.internal.misc.Unsafe`                            |
|  0.7% |  4.5 MiB |       9 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.LinkedHashMap`                             |
|  0.6% |    4 MiB |       8 | `enlarge(int)`                                              | `jdk.internal.org.objectweb.asm.ByteVector`           |
|  0.5% |  3.5 MiB |       7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`       |
|  0.5% |  3.5 MiB |       7 | `<init>(InputStream)`                                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`      |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                                        | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| 23.8% |  161 MiB |     322 | `<init>(int)`                                                                   | `java.io.ByteArrayOutputStream`             |
| 20.3% |  137 MiB |     275 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                          |
|  7.1% | 48.5 MiB |      97 | `clone()`                                                                       | `java.lang.Object`                          |
|  2.5% |   17 MiB |      34 | `iterator()`                                                                    | `java.util.ArrayList`                       |
|  2.1% | 14.5 MiB |      29 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                          |
|  1.2% |    8 MiB |      16 | `grow(int)`                                                                     | `java.util.ArrayList`                       |
|  1.0% |    7 MiB |      14 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`           |
|  0.8% | 5.21 MiB |       5 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |
|  0.7% |    5 MiB |      10 | `createZipEntry(String)`                                                        | `java.util.zip.ZipInputStream`              |
|  0.7% |    5 MiB |      10 | `<init>(int)`                                                                   | `kotlin.collections.builders.MapBuilder`    |
|  0.7% |  4.5 MiB |       9 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                          |
|  0.7% |  4.5 MiB |       9 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                  |
|  0.7% |  4.5 MiB |       9 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                   |
|  0.6% |    4 MiB |       8 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector` |
|  0.5% |  3.5 MiB |       7 | `<init>(int, float, boolean)`                                                   | `java.util.HashSet`                         |
|  0.5% |  3.5 MiB |       7 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                  |
|  0.5% |  3.5 MiB |       7 | `resize()`                                                                      | `java.util.HashMap`                         |
|  0.4% |    3 MiB |       6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
|  0.4% |    3 MiB |       6 | `<init>(int)`                                                                   | `java.util.ArrayList`                       |
|  0.4% |    3 MiB |       6 | `arrayOfUninitializedElements(int)`                                             | `kotlin.collections.builders.ListBuilderKt` |

##### Ours

|    % |     Size | Samples | Function                                                                                    | Location                                                                                           |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 3.0% | 20.5 MiB |      41 | `<init>(int)`                                                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| 1.0% |  6.5 MiB |      13 | `newInstance(OutputStream, int)`                                                            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| 1.0% |  6.5 MiB |      13 | `<init>(int, int)`                                                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| 0.8% |  5.5 MiB |      11 | `newOutput()`                                                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                                         |
| 0.5% |  3.5 MiB |       7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
| 0.5% |  3.5 MiB |       7 | `<init>(InputStream)`                                                                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                   |
| 0.5% |  3.5 MiB |       7 | `<init>()`                                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| 0.4% |    3 MiB |       6 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                             |
| 0.4% |    3 MiB |       6 | `newFieldMap(int)`                                                                          | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| 0.4% |  2.5 MiB |       5 | `getBytes(int, int)`                                                                        | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| 0.4% |  2.5 MiB |       5 | `readUtf(int, int, char[])`                                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.4% |  2.5 MiB |       5 | `accept(ClassVisitor, Attribute[], int)`                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.4% |  2.5 MiB |       5 | `box-impl(List)`                                                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| 0.4% |  2.5 MiB |       5 | `getLabel()`                                                                                | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                                   |
| 0.3% | 2.19 MiB |       4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
| 0.3% |    2 MiB |       4 | `readBootstrapMethodsAttribute(int)`                                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
| 0.3% |    2 MiB |       4 | `simplifyTrivialInstructions(MethodNode)`                                                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| 0.3% |    2 MiB |       4 | `toArray()`                                                                                 | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
| 0.2% |  1.5 MiB |       3 | `newFieldSet()`                                                                             | `org.jetbrains.kotlin.protobuf.FieldSet`                                                           |
| 0.2% |  1.5 MiB |       3 | `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                           |

#### Lines

Lines ranked by contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 161 MiB |     322 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Location                |
| ----: | ------: | ------: | ----------------------- |
| 93.1% | 128 MiB |     256 | `java.util.Arrays:3539` |
|  6.9% | 9.5 MiB |      19 | `java.util.Arrays:3541` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|     % |    Size | Samples | Location                                              |
| ----: | ------: | ------: | ----------------------------------------------------- |
| 82.9% |  17 MiB |      34 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| 17.1% | 3.5 MiB |       7 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `iterator()` (`java.util.ArrayList`)

|      % |   Size | Samples | Location                   |
| -----: | -----: | ------: | -------------------------- |
| 100.0% | 17 MiB |      34 | `java.util.ArrayList:1029` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 14.5 MiB |      29 | `java.util.Arrays:3863` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 8 MiB |      16 | `java.util.ArrayList:239` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|      % |  Size | Samples | Location                              |
| -----: | ----: | ------: | ------------------------------------- |
| 100.0% | 7 MiB |      14 | `java.lang.AbstractStringBuilder:101` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|      % |    Size | Samples | Location                                              |
| -----: | ------: | ------: | ----------------------------------------------------- |
| 100.0% | 6.5 MiB |      13 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|      % |    Size | Samples | Location                                                 |
| -----: | ------: | ------: | -------------------------------------------------------- |
| 100.0% | 6.5 MiB |      13 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 5.5 MiB |      11 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|     % |     Size | Samples | Location                            |
| ----: | -------: | ------: | ----------------------------------- |
| 71.2% | 3.71 MiB |       2 | `java.util.zip.ZipFile$Source:1733` |
| 19.2% | 1024 KiB |       2 | `java.util.zip.ZipFile$Source:1744` |
|  9.6% |  512 KiB |       1 | `java.util.zip.ZipFile$Source:1749` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |  Size | Samples | Location                           |
| -----: | ----: | ------: | ---------------------------------- |
| 100.0% | 5 MiB |      10 | `java.util.zip.ZipInputStream:555` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|     % |    Size | Samples | Location                                    |
| ----: | ------: | ------: | ------------------------------------------- |
| 50.0% | 2.5 MiB |       5 | `kotlin.collections.builders.MapBuilder:60` |
| 50.0% | 2.5 MiB |       5 | `kotlin.collections.builders.MapBuilder:59` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 4.5 MiB |       9 | `java.util.Arrays:3482` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 4.5 MiB |       9 | `jdk.internal.misc.Unsafe:1380` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 4.5 MiB |       9 | `java.util.LinkedHashMap:281` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 4 MiB |       8 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |    Size | Samples | Location                                             |
| -----: | ------: | ------: | ---------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |    Size | Samples | Location                                             |
| -----: | ------: | ------: | ---------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 3.5 MiB |       7 | `java.util.HashSet:171` |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 3.5 MiB |       7 | `java.util.HashMap:710` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|     % |    Size | Samples | Location                                                                          |
| ----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 42.9% | 1.5 MiB |       3 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:334` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:330` |
| 14.3% | 512 KiB |       1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:340` |

##### `<init>(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 3 MiB |       6 | `java.util.ArrayList:156` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

|      % |  Size | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 3 MiB |       6 | `kotlin.collections.builders.ListBuilderKt:624` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |     Size | Samples | Location                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------- |
| 66.7% |    2 MiB |       4 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |
| 33.3% | 1024 KiB |       2 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|      % |    Size | Samples | Location                                                                          |
| -----: | ------: | ------: | --------------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |

##### `getLabel()` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

|      % |    Size | Samples | Location                                            |
| -----: | ------: | ------: | --------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.jetbrains.org.objectweb.asm.tree.LabelNode:61` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |     Size | Samples | Location                                                             |
| -----: | -------: | ------: | -------------------------------------------------------------------- |
| 100.0% | 2.19 MiB |       4 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.ClassReader:3624` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|     % |    Size | Samples | Location                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
| 25.0% | 512 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|      % |  Size | Samples | Location                                            |
| -----: | ----: | ------: | --------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `org.jetbrains.org.objectweb.asm.tree.InsnList:178` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % |    Size | Samples | Location                                    |
| -----: | ------: | ------: | ------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

##### `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:32` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Caller                                                  | Location                                               |
| -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 161 MiB |     322 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Caller                        | Location                          |
| ----: | ------: | ------: | ----------------------------- | --------------------------------- |
| 93.1% | 128 MiB |     256 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
|  5.8% |   8 MiB |      16 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  1.1% | 1.5 MiB |       3 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|      % |     Size | Samples | Caller                | Location           |
| -----: | -------: | ------: | --------------------- | ------------------ |
| 100.0% | 48.5 MiB |      97 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 20.5 MiB |      41 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `iterator()` (`java.util.ArrayList`)

|    % |     Size | Samples | Caller                                                                        | Location                                                         |
| ---: | -------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 8.8% |  1.5 MiB |       3 | `putAll(Map, Iterable)`                                                       | `kotlin.collections.MapsKt__MapsKt`                              |
| 8.8% |  1.5 MiB |       3 | `serializeTypeAnnotations(List, ProtoBuf$Type$Builder)`                       | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |
| 5.9% | 1024 KiB |       2 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`       |
| 5.9% | 1024 KiB |       2 | `getValueParameterSymbols()`                                                  | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`        |
| 5.9% | 1024 KiB |       2 | `acceptChildren(IrVisitor, Object)`                                           | `org.jetbrains.kotlin.ir.expressions.IrContainerExpression`      |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                          | Location           |
| -----: | -------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 14.5 MiB |      29 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |  Size | Samples | Caller   | Location              |
| -----: | ----: | ------: | -------- | --------------------- |
| 100.0% | 8 MiB |      16 | `grow()` | `java.util.ArrayList` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 50.0% | 3.5 MiB |       7 | `<init>(int)` | `java.lang.StringBuilder` |
| 50.0% | 3.5 MiB |       7 | `<init>()`    | `java.lang.StringBuilder` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|     % |    Size | Samples | Caller                                            | Location                                                           |
| ----: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| 38.5% | 2.5 MiB |       5 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
| 23.1% | 1.5 MiB |       3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`            |
|  7.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`             |
|  7.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
|  7.7% | 512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|     % |     Size | Samples | Caller                                           | Location                                                                                          |
| ----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 30.8% |    2 MiB |       4 | `<init>(FixStackAnalyzer, int, int)`             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`               |
| 30.8% |    2 MiB |       4 | `_init_$lambda$0(int, int)`                      | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                             |
| 15.4% | 1024 KiB |       2 | `preprocessNodeBeforeInline$lambda$0(int, int)`  | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                               |
|  7.7% |  512 KiB |       1 | `<init>(int)`                                    | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.StoreLoadFrame`                          |
|  7.7% |  512 KiB |       1 | `<init>(UninitializedStoresProcessor, int, int)` | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|     % |     Size | Samples | Caller                                            | Location                                                           |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| 36.4% |    2 MiB |       4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
| 27.3% |  1.5 MiB |       3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |
| 18.2% | 1024 KiB |       2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                  |
|  9.1% |  512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                |
|  9.1% |  512 KiB |       1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 5.21 MiB |       5 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

|      % |  Size | Samples | Caller      | Location                       |
| -----: | ----: | ------: | ----------- | ------------------------------ |
| 100.0% | 5 MiB |      10 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 5 MiB |      10 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                | Location                                                |
| ----: | -------: | ------: | --------------------- | ------------------------------------------------------- |
| 55.6% |  2.5 MiB |       5 | `toArray()`           | `java.util.ArrayList`                                   |
| 22.2% | 1024 KiB |       2 | `grow(int)`           | `java.util.ArrayList`                                   |
| 11.1% |  512 KiB |       1 | `ensureCapacity()`    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
| 11.1% |  512 KiB |       1 | `ensureCapacity(int)` | `org.jetbrains.kotlin.util.ArrayMapImpl`                |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller           | Location                       |
| -----: | ------: | ------: | ---------------- | ------------------------------ |
| 100.0% | 4.5 MiB |       9 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 4.5 MiB |       9 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|     % |    Size | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 87.5% | 3.5 MiB |       7 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| 12.5% | 512 KiB |       1 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|      % |    Size | Samples | Caller                                                      | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

|      % |    Size | Samples | Caller                     | Location                                         |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% | 3.5 MiB |       7 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|     % |    Size | Samples | Caller        | Location                  |
| ----: | ------: | ------: | ------------- | ------------------------- |
| 85.7% |   3 MiB |       6 | `<init>()`    | `java.util.LinkedHashSet` |
| 14.3% | 512 KiB |       1 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |    Size | Samples | Caller                     | Location                              |
| -----: | ------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Caller                                          | Location            |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% | 3.5 MiB |       7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|      % |    Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % |  Size | Samples | Caller                                                    | Location                |
| -----: | ----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% | 3 MiB |       6 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller                                                                                    | Location                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 33.3% | 1024 KiB |       2 | `take(Iterable, int)`                                                                     | `kotlin.collections.CollectionsKt___CollectionsKt`                                        |
| 16.7% |  512 KiB |       1 | `rigidType(ProtoBuf$Type, ConeAttributes)`                                                | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                            |
| 16.7% |  512 KiB |       1 | `parseMethodDescription(String, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
| 16.7% |  512 KiB |       1 | `getTypeParameterSymbols()`                                                               | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol`                                 |
| 16.7% |  512 KiB |       1 | `prepareNode(MethodNode, int)`                                                            | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                       |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

|     % |    Size | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 50.0% | 1.5 MiB |       3 | `<init>(int)` | `kotlin.collections.builders.ListBuilder` |
| 50.0% | 1.5 MiB |       3 | `<init>(int)` | `kotlin.collections.builders.MapBuilder`  |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |  Size | Samples | Caller                                                                       | Location                                               |
| -----: | ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 3 MiB |       6 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|      % |  Size | Samples | Caller     | Location                                 |
| -----: | ----: | ------: | ---------- | ---------------------------------------- |
| 100.0% | 3 MiB |       6 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|     % |    Size | Samples | Caller                                                                                      | Location                                                          |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 80.0% |   2 MiB |       4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| 20.0% | 512 KiB |       1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Caller                 | Location                                      |
| -----: | ------: | ------: | ---------------------- | --------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |    Size | Samples | Caller                      | Location                                      |
| -----: | ------: | ------: | --------------------------- | --------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|     % |     Size | Samples | Caller                               | Location                                                                    |
| ----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| 40.0% | 1024 KiB |       2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`          |
| 20.0% |  512 KiB |       1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| 20.0% |  512 KiB |       1 | `getContextParameters()`             | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`           |
| 20.0% |  512 KiB |       1 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl`          |

##### `getLabel()` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

|      % |    Size | Samples | Caller                  | Location                                         |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.LabelNode` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|      % |     Size | Samples | Caller           | Location                                                                                     |
| -----: | -------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 100.0% | 2.19 MiB |       4 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000007001396000` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|      % |  Size | Samples | Caller                         | Location                                      |
| -----: | ----: | ------: | ------------------------------ | --------------------------------------------- |
| 100.0% | 2 MiB |       4 | `<init>(byte[], int, boolean)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |  Size | Samples | Caller                          | Location                                                                                           |
| -----: | ----: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|     % |    Size | Samples | Caller                          | Location                                                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 25.0% | 512 KiB |       1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`                                               |
| 25.0% | 512 KiB |       1 | `analyze(String, MethodNode)`   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`                                          |
| 25.0% | 512 KiB |       1 | `indexOf(AbstractInsnNode)`     | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                                          |
| 25.0% | 512 KiB |       1 | `collectRewriteActions()`       | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|      % |    Size | Samples | Caller     | Location                                                               |
| -----: | ------: | ------: | ---------- | ---------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|      % |    Size | Samples | Caller                                                                                                           | Location                                                 |
| -----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `constructClassType$default(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes, int, Object)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                                                                           | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 678 MiB |   1,349 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`             |
| 99.9% | 678 MiB |   1,349 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`             |
| 51.8% | 351 MiB |     702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 51.8% | 351 MiB |     702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 48.1% | 326 MiB |     647 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 48.1% | 326 MiB |     647 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 48.1% | 326 MiB |     647 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
| 48.1% | 326 MiB |     647 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
| 48.1% | 326 MiB |     647 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
| 48.1% | 326 MiB |     647 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 48.1% | 326 MiB |     647 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
| 48.1% | 326 MiB |     647 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
| 47.3% | 321 MiB |     642 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.3% | 321 MiB |     642 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.3% | 321 MiB |     642 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 47.3% | 321 MiB |     642 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 47.3% | 321 MiB |     642 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 47.0% | 319 MiB |     638 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 45.9% | 312 MiB |     623 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 45.9% | 312 MiB |     623 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                                                                      | Location                                              |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 48.1% |  326 MiB |     647 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
| 48.1% |  326 MiB |     647 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
| 48.1% |  326 MiB |     647 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                    |
| 48.1% |  326 MiB |     647 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 48.1% |  326 MiB |     647 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
| 48.1% |  326 MiB |     647 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                            |
| 27.4% |  186 MiB |     372 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                                    |
| 26.0% |  176 MiB |     353 | `toByteArray()`                                                                               | `java.io.ByteArrayOutputStream`                       |
| 23.8% |  161 MiB |     322 | `<init>(int)`                                                                                 | `java.io.ByteArrayOutputStream`                       |
|  7.9% | 53.5 MiB |     107 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  7.1% | 48.5 MiB |      97 | `clone()`                                                                                     | `java.lang.Object`                                    |
|  4.1% | 27.5 MiB |      55 | `getValue()`                                                                                  | `kotlin.SafePublicationLazyImpl`                      |
|  2.8% |   19 MiB |      38 | `getValue()`                                                                                  | `kotlin.SynchronizedLazyImpl`                         |
|  2.5% |   17 MiB |      34 | `copyOfRange(byte[], int, int)`                                                               | `java.util.Arrays`                                    |
|  2.5% |   17 MiB |      34 | `iterator()`                                                                                  | `java.util.ArrayList`                                 |
|  2.1% | 14.5 MiB |      29 | `copyOfRangeByte(byte[], int, int)`                                                           | `java.util.Arrays`                                    |
|  2.1% |   14 MiB |      28 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                  |
|  2.1% |   14 MiB |      28 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                    |
|  2.1% |   14 MiB |      28 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                  | `java.lang.invoke.BootstrapMethodInvoker`             |
|  2.1% |   14 MiB |      28 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                   | `java.lang.invoke.CallSite`                           |

##### Ours

|     % |    Size | Samples | Function                                                                                                                                      | Location                                                |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 678 MiB |   1,349 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
| 99.9% | 678 MiB |   1,349 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
| 51.8% | 351 MiB |     702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 51.8% | 351 MiB |     702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`  |
| 48.1% | 326 MiB |     647 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
| 48.1% | 326 MiB |     647 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 47.3% | 321 MiB |     642 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.3% | 321 MiB |     642 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 47.3% | 321 MiB |     642 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 47.3% | 321 MiB |     642 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 47.3% | 321 MiB |     642 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| 47.0% | 319 MiB |     638 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 45.9% | 312 MiB |     623 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 45.9% | 312 MiB |     623 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| 45.9% | 312 MiB |     623 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
| 45.9% | 311 MiB |     622 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 45.9% | 311 MiB |     622 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 45.9% | 311 MiB |     622 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 45.9% | 311 MiB |     622 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| 45.5% | 309 MiB |     617 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|     % |    Size | Samples | Callee                                                                       | Location                                               |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 51.8% | 351 MiB |     702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| 48.2% | 326 MiB |     647 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|      % |    Size | Samples | Callee          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 678 MiB |   1,349 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|     % |    Size | Samples | Callee                | Location                        |
| ----: | ------: | ------: | --------------------- | ------------------------------- |
| 50.3% | 176 MiB |     353 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
| 45.9% | 161 MiB |     322 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
|  2.4% | 8.5 MiB |      17 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|  0.6% |   2 MiB |       4 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|      % |     Size | Samples | Callee                                                                       | Location                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% |  351 MiB |     702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  12.0% | 42.2 MiB |      84 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|     % |     Size | Samples | Callee                          | Location                                                |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------------------- |
| 98.4% |  321 MiB |     642 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  1.6% | 5.21 MiB |       5 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee           | Location                                               |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------ |
| 100.0% | 326 MiB |     647 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

|      % |    Size | Samples | Callee           | Location                                     |
| -----: | ------: | ------: | ---------------- | -------------------------------------------- |
| 100.0% | 326 MiB |     647 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

|      % |    Size | Samples | Callee                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 326 MiB |     647 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |    Size | Samples | Callee                           | Location                                            |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 326 MiB |     647 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |
|   0.2% | 512 KiB |       1 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x00000070017f8c00` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                                           | Location                           |
| -----: | ------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 326 MiB |     647 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |    Size | Samples | Callee                         | Location                                          |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 326 MiB |     647 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Samples | Callee                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% |  326 MiB |     647 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|   0.3% | 1024 KiB |       2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |
|   0.2% |  512 KiB |       1 | `isCallerSensitive()`      | `java.lang.reflect.Method`                        |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                                               | Location                                                                |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 99.4% | 319 MiB |     638 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  0.6% |   2 MiB |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                   | Location                                      |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 321 MiB |     642 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                         | Location                                      |
| -----: | ------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| 100.0% | 321 MiB |     642 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                 | Location                                                |
| -----: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 321 MiB |     642 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|      % |    Size | Samples | Callee                                                                                             | Location                                                |
| -----: | ------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 321 MiB |     642 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|     % |    Size | Samples | Callee                                                          | Location                                      |
| ----: | ------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| 97.7% | 312 MiB |     623 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
|  2.3% | 7.5 MiB |      15 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|     % |    Size | Samples | Callee                                                         | Location                                                |
| ----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 99.8% | 311 MiB |     622 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  0.2% | 512 KiB |       1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Size | Samples | Callee                                                                | Location                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 312 MiB |     623 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|      % |    Size | Samples | Callee                                                                 | Location                                     |
| -----: | ------: | ------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 312 MiB |     623 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|     % |    Size | Samples | Callee                                                                          | Location                                                                    |
| ----: | ------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 99.2% | 309 MiB |     617 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
|  0.8% | 2.5 MiB |       5 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                         | Location                                                |
| -----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 311 MiB |     622 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                              | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 311 MiB |     622 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Size | Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 311 MiB |     622 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|     % |     Size | Samples | Callee                           | Location                                                              |
| ----: | -------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
| 67.9% |  210 MiB |     419 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| 23.5% | 72.5 MiB |     145 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  7.9% | 24.5 MiB |      49 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|  0.5% |  1.5 MiB |       3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  0.2% |  512 KiB |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`          |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee    | Location           |
| ----: | -------: | ------: | --------- | ------------------ |
| 26.1% | 48.5 MiB |      97 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|      % |    Size | Samples | Callee                | Location           |
| -----: | ------: | ------: | --------------------- | ------------------ |
| 100.0% | 176 MiB |     353 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|     % |     Size | Samples | Callee                  | Location                                                                                 |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 80.4% |   43 MiB |      86 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |
| 34.6% | 18.5 MiB |      37 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
|  4.7% |  2.5 MiB |       5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2` |
|  2.8% |  1.5 MiB |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1` |
|  2.8% |  1.5 MiB |       3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|     % |    Size | Samples | Callee     | Location                                                                                                   |
| ----: | ------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 54.5% |  15 MiB |      30 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015d6d10` |
| 27.3% | 7.5 MiB |      15 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|  7.3% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x0000007001627938`          |
|  7.3% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000070016559e8`                  |
|  7.3% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000700162f4e8`            |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |    Size | Samples | Callee     | Location                                                                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| 31.6% |   6 MiB |      12 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x00000070017539f8`                       |
| 26.3% |   5 MiB |      10 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000700137ba80`             |
| 13.2% | 2.5 MiB |       5 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000007001141e48` |
| 10.5% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160f730`             |
| 10.5% |   2 MiB |       4 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000007001819420`                |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee                              | Location           |
| ----: | -------: | ------: | ----------------------------------- | ------------------ |
| 85.3% | 14.5 MiB |      29 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|     % |  Size | Samples | Callee                                                                                                                   | Location                                       |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| 64.3% | 9 MiB |      18 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
| 35.7% | 5 MiB |      10 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|     % |     Size | Samples | Callee                                                                 | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| 92.9% |   13 MiB |      26 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
|  7.1% | 1024 KiB |       2 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|      % |   Size | Samples | Callee                                                                           | Location                           |
| -----: | -----: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| 100.0% | 14 MiB |      28 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

|      % |   Size | Samples | Callee                                                       | Location                                  |
| -----: | -----: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| 100.0% | 14 MiB |      28 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.8% |  141 MiB |     282 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 18.9% |  128 MiB |     256 | `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  4.4% |   30 MiB |      60 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  3.0% | 20.2 MiB |      40 | `<init>(int)` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.7% | 18.5 MiB |      37 | `clone()` (`java.lang.Object`) ← `copyOf(byte[], int)` (`java.util.Arrays`) ← `toByteArray()` (`java.io.ByteArrayOutputStream`) ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.8% | 5.21 MiB |       5 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `findResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$2`) ← `run()` ← `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedAction, AccessControlContext)` ← `findResource(String)` (`java.net.URLClassLoader`) ← `getResource(String)` (`java.lang.ClassLoader`) ← `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`) ← `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% |    3 MiB |       6 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% |    3 MiB |       6 | `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% |    2 MiB |       4 | `createZipEntry(String)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |    2 MiB |       4 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% |    2 MiB |       4 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% |    2 MiB |       4 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) |
|  0.3% |    2 MiB |       4 | `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |  1.5 MiB |       3 | `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`) ← `putVal(int, Object, Object, boolean, boolean)` ← `put(Object, Object)` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.2% |  1.5 MiB |       3 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`) ← `newStringUTF8NoRepl(byte[], int, int)` (`java.lang.System$2`) ← `toString(byte[], int, int)` (`java.util.zip.ZipCoder$UTF8ZipCoder`) ← `toStringUTF8(byte[], int)` (`java.util.zip.ZipCoder`) ← `readLOC()` (`java.util.zip.ZipInputStream`) ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |  1.5 MiB |       3 | `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`) ← `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  1.5 MiB |       3 | `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`) ← `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`) ← `readPackageDataFrom(String[], String[])` ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.2% |  1.5 MiB |       3 | `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`) ← `<init>()` (`org.jetbrains.kotlin.protobuf.FieldSet`) ← `newFieldSet()` ← `<init>()` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `readMessage(Parser, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`) ← `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment$1`) ← `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` ← `parsePartialFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`) ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` ← `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment`) ← `readBuiltinsPackageFragment(InputStream)` (`org.jetbrains.kotlin.metadata.builtins.ReadPackageFragmentKt`) ← `create(FqName, StorageManager, ModuleDescriptor, InputStream, boolean)` (`org.jetbrains.kotlin.serialization.deserialization.builtins.BuiltInsPackageFragmentImpl$Companion`) ← `createBuiltInPackageFragmentProvider(StorageManager, ModuleDescriptor, Set, Iterable, PlatformDependentDeclarationFilter, AdditionalClassPartsProvider, boolean, Function1)` (`org.jetbrains.kotlin.serialization.deserialization.builtins.BuiltInsLoaderImpl`) ← `createPackageFragmentProvider(StorageManager, ModuleDescriptor, Iterable, PlatformDependentDeclarationFilter, AdditionalClassPartsProvider, boolean)` ← `createBuiltInsModule(boolean)` (`org.jetbrains.kotlin.builtins.KotlinBuiltIns`) ← `<init>(boolean)` (`org.jetbrains.kotlin.builtins.DefaultBuiltIns`) ← `<init>(boolean, int, DefaultConstructorMarker)` ← `Instance_delegate$lambda$0()` ← `invoke()` (`org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x00000070017539f8`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getInstance()` (`org.jetbrains.kotlin.builtins.DefaultBuiltIns$Companion`) ← `convertToIrAndActualizeForJvm-_I1IR-w(List, Fir2IrExtensions, CompilerConfiguration, BaseDiagnosticsCollector, Collection)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`) ← `executePhase(JvmFrontendPipelineArtifact, List)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`) ← `executePhase(JvmFrontendPipelineArtifact)` ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.2% | 1.19 MiB |       2 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000007001396000`) ← `withMappedRange(long, long, Function1)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`) ← `withMappedRangeFrom(long, Function1)` ← `contentsToByteArray(LargeDynamicMappedBuffer, ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`) ← `contentsToByteArray(ZipEntryDescription)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`) ← `contentsToByteArray()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`) ← `contentsToByteArray(boolean)` (`com.intellij.openapi.vfs.VirtualFile`) ← `create$lambda$0(VirtualFile, byte[], MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `invoke()` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015c8000`) ← `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManagerKt`) ← `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`) ← `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `compute()` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015c6558`) ← `runReadAction(Computable)` (`com.intellij.mock.MockApplication`) ← `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`) ← `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` ← `findKotlinClassOrContent(ClassId, MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`) ← `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`) ← `computePackagePartsInfos(FqName)` ← `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`) ← `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`) ← `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`) ← `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`) ← `invoke(Object, Object)` ← `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`) ← `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`) ← `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`) ← `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`) ← `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`) ← `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`) ← `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`) ← `invoke(Object, Object, Object)` ← `processSymbolsByName(Name, Function3, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`) ← `processPropertiesByName(Name, Function1)` ← `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`) ← `resolveFromImportScope(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `resolveQualifiedAccessAndSelectCandidate(FirQualifiedAccessExpression, boolean, boolean, FirElement, ResolutionMode)` ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`) ← `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` ← `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformChildren(FirTransformer, Object)` ← `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformElement(FirElement, Object)` ← `transformArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`) ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`) ← `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl`) ← `transformChildren(FirTransformer, Object)` ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`) ← `transformAnnotation(FirAnnotation, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`) ← `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformAnnotationCall(FirAnnotationCall, Void)` ← `transformAnnotationCall(FirAnnotationCall, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformInplace-aLnlfrU(List, FirTransformer, Object)` ← `transformAnnotations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`) ← `transformAnnotations(FirTransformer, Object)` ← `transformAnnotationContainer(FirAnnotationContainer, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformDeclaration(FirDeclaration, Void)` ← `transformRegularClass(FirRegularClass, Void)` ← `transformRegularClass(FirRegularClass, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`) ← `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`) ← `transformDeclarations(FirTransformer, Object)` ← `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$transformFile$$inlined$resolveFile$1`) ← `invoke()` ← `withFileAndFileScopes(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `resolveAnnotations(FirFile)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer`) ← `transformFile(FirFile, Void)` ← `transformFile(FirFile, Object)` ← `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`) ← `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`) ← `process(Collection)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor`) ← `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`) ← `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`) ← `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`) ← `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |    1 MiB |       2 | `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`) ← `getBufIfOpen()` ← `fill()` ← `read1(byte[], int, int)` ← `implRead(byte[], int, int)` ← `read(byte[], int, int)` ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `read(byte[], int, int)` (`java.io.PushbackInputStream`) ← `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`) ← `readLOC()` ← `getNextEntry()` ← `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`) ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` ← `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
