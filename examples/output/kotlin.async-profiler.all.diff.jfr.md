# Sampling profile diff

Collected 1,322 samples.

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         |  -0.3% |    -2 | 46.4% → 46.3% | 614 → 612 |
| Native           |  +1.6% |    +8 | 38.0% → 38.6% | 502 → 510 |
| Ours             |  -4.4% |    -6 |  10.3% → 9.8% | 136 → 130 |
| Standard library | +11.3% |    +6 |   4.0% → 4.5% |   53 → 59 |
| JIT              | -35.3% |    -6 |   1.3% → 0.8% |   17 → 11 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location        |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `PhaseIdealLoop::build_loop_early`                                                                                                                       | `libjvm.dylib`  |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `PhaseChaitin::gather_lrg_masks`                                                                                                                         | `libjvm.dylib`  |
|  +28.6% |    +6 | 1.6% → 2.0% | 21 → 27 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`  |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`  |
|  +31.3% |    +5 | 1.2% → 1.6% | 16 → 21 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`  |
|  +35.7% |    +5 | 1.1% → 1.4% | 14 → 19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`  |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`  |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `LinearScan::resolve_data_flow`                                                                                                                          | `libjvm.dylib`  |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `IndexSetIterator::advance_and_next`                                                                                                                     | `libjvm.dylib`  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseIdealLoop::build_loop_tree`                                                                                                                        | `libjvm.dylib`  |
|  +66.7% |    +4 | 0.5% → 0.8% |  6 → 10 | `inflate_table`                                                                                                                                          | `libzip.dylib`  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `RelocIterator::set_limits`                                                                                                                              | `libjvm.dylib`  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                                             | `libjvm.dylib`  |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `PhaseAggressiveCoalesce::insert_copies`                                                                                                                 | `libjvm.dylib`  |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `Type::hashcons`                                                                                                                                         | `libjvm.dylib`  |
|  +14.3% |    +3 | 1.6% → 1.8% | 21 → 24 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib` |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `ciObjectFactory::get_metadata`                                                                                                                          | `libjvm.dylib`  |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `Node::dominates`                                                                                                                                        | `libjvm.dylib`  |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::effective_degree`                                                                                                                             | `libjvm.dylib`  |

##### Compiler

|  Change | Delta |           % | Samples | Function                                 | Location       |
| ------: | ----: | ----------: | ------: | ---------------------------------------- | -------------- |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `PhaseIdealLoop::build_loop_early`       | `libjvm.dylib` |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `PhaseChaitin::gather_lrg_masks`         | `libjvm.dylib` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `PhaseLive::add_liveout`                 | `libjvm.dylib` |
|  +31.3% |    +5 | 1.2% → 1.6% | 16 → 21 | `PhaseChaitin::Split`                    | `libjvm.dylib` |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `LinearScan::resolve_data_flow`          | `libjvm.dylib` |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `IndexSetIterator::advance_and_next`     | `libjvm.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseIdealLoop::build_loop_tree`        | `libjvm.dylib` |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `RelocIterator::set_limits`              | `libjvm.dylib` |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `Type::hashcons`                         | `libjvm.dylib` |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `ciObjectFactory::get_metadata`          | `libjvm.dylib` |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `Node::dominates`                        | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::effective_degree`             | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Compile::remove_speculative_types`      | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `LinearScan::build_intervals`            | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `ValueStack::values_do`                  | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LinearScan::add_def`                    | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `RegionNode::Opcode`                     | `libjvm.dylib` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `PhaseCFG::schedule_pinned_nodes`        | `libjvm.dylib` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `Node::pinned`                           | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location        |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|  +28.6% |    +6 | 1.6% → 2.0% | 21 → 27 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`  |
|  +35.7% |    +5 | 1.1% → 1.4% | 14 → 19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`  |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                   | `libjvm.dylib`  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Dict::Insert`                                                                                                                                           | `libjvm.dylib`  |
|  +66.7% |    +4 | 0.5% → 0.8% |  6 → 10 | `inflate_table`                                                                                                                                          | `libzip.dylib`  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `GlobalValueNumbering::GlobalValueNumbering`                                                                                                             | `libjvm.dylib`  |
|  +14.3% |    +3 | 1.6% → 1.8% | 21 → 24 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `Dictionary::find`                                                                                                                                       | `libjvm.dylib`  |
|  +42.9% |    +3 | 0.5% → 0.8% |  7 → 10 | `inflate`                                                                                                                                                | `libzip.dylib`  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ClassFileParser::parse_constant_pool`                                                                                                                   | `libjvm.dylib`  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `SymbolTable::do_add_if_needed`                                                                                                                          | `libjvm.dylib`  |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Pipeline_Use::full_latency`                                                                                                                             | `libjvm.dylib`  |
|  +40.0% |    +2 | 0.4% → 0.5% |   5 → 7 | `G1ParScanThreadState::do_copy_to_survivor_space`                                                                                                        | `libjvm.dylib`  |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `vmSymbols::find_sid`                                                                                                                                    | `libjvm.dylib`  |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `G1CardSet::add_card`                                                                                                                                    | `libjvm.dylib`  |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `G1CardSet::add_to_howl`                                                                                                                                 | `libjvm.dylib`  |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `ValueRecorder<Metadata*>::maybe_find_index`                                                                                                             | `libjvm.dylib`  |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `ClassVerifier::verify_method`                                                                                                                           | `libjvm.dylib`  |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `Rewriter::Rewriter`                                                                                                                                     | `libjvm.dylib`  |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                                                                                                    | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`                                     |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `getArrayMap()`                                                                                                                                                                                                                             | `org.jetbrains.kotlin.util.ComponentArrayOwner`                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.declarations.FirValueParameter`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `loadAnnotation(ClassId, List)`                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`                                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                                                                                                             | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `enhanceMethod(FirFunction, CallableId, Name, boolean, List)`                                                                                                                                                                               | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `fastPathSkipApproximation(ConeKotlinType, TypeApproximatorConfiguration)`                                                                                                                                                                  | `org.jetbrains.kotlin.fir.types.ConeTypeApproximator`                                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                                                                                      | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(FirVisitor, Object)`                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                   |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformTypeRef(FirTypeRef, ResolutionMode)`                                                                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                                                                                     | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `reversedFilteredLocalScopes_delegate$lambda$0(FirTowerDataContext, Name)`                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName`                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `reduceCandidates(CandidateCollector, ResolutionContext)`                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `createToFreshVariableSubstitutorAndAddInitialConstraints(ResolutionContext, FirTypeParameterRefsOwner, ConstraintSystemOperation)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `configureDeserializedClass(FirRegularClassBuilder, ClassId)`                                                                                                                                                                               | `org.jetbrains.kotlin.fir.java.deserialization.FirJvmDeserializationExtension`                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processPropertiesByName(Name, Function1)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.FirSyntheticPropertiesScope`                                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `containsInternal(KotlinTypeMarker, Function1)`                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getSymbol(FirReference)`                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.references.FirReferenceUtilsKt`                                                |

##### Standard library

| Change | Delta |           % | Samples | Function                                                      | Location                                                    |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `areEqual(Object, Object)`                                    | `kotlin.jvm.internal.Intrinsics`                            |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `to(Object, Object)`                                          | `kotlin.TuplesKt`                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `update(byte[], int, int)`                                    | `java.util.zip.CRC32`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `toCollection(Iterable, Collection)`                          | `kotlin.collections.CollectionsKt___CollectionsKt`          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(Class)`                                                  | `kotlin.reflect.jvm.internal.ClassValueCache`               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `containsKey(Object)`                                         | `java.util.HashMap`                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(StringBuilder)`                                       | `java.lang.String`                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`                            |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(MethodType, LambdaForm, Object)`                      | `java.lang.invoke.BoundMethodHandle$Species_L`              |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `SH(byte[], int)`                                             | `java.util.zip.ZipUtils`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getName()`                                                   | `java.lang.invoke.MemberName`                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `visitClassTypeSignature(ClassTypeSignature)`                 | `sun.reflect.generics.visitor.Reifier`                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getPackageName()`                                            | `java.lang.Class`                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(int, FieldVisitor)`                                   | `jdk.internal.org.objectweb.asm.FieldVisitor`               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>()`                                                    | `jdk.internal.org.objectweb.asm.ByteVector`                 |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `asTypeCached(MethodType)`                                    | `java.lang.invoke.MethodHandle`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Object, Function0)`                                   | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                        | `java.lang.String`                                          |

##### JIT

|  Change | Delta |           % | Samples | Function                        | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------- | ----------- |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `I2C/C2I adapters(0xb)`         | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xba)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xaa)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbbaab)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                    | Location                         |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | -------------------------------- |
|  -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib`                   |
|  -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib`                   |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `checkNotNullParameter(Object, String)`     | `kotlin.jvm.internal.Intrinsics` |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `Matcher::xform`                            | `libjvm.dylib`                   |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `PhaseIdealLoop::get_early_ctrl`            | `libjvm.dylib`                   |
|  -40.0% |    -4 | 0.8% → 0.5% |  10 → 6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib`                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Type::meet_helper`                         | `libjvm.dylib`                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Node::is_dead_loop_safe`                   | `libjvm.dylib`                   |
|  -26.7% |    -4 | 1.1% → 0.8% | 15 → 11 | `InstanceKlass::find_method_index`          | `libjvm.dylib`                   |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `__psynch_cvbroad`                          | `libsystem_kernel.dylib`         |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)`                    | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`                               | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::schedule_late`                   | `libjvm.dylib`                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIFG::SquareUp`                        | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__psynch_mutexdrop`                        | `libsystem_kernel.dylib`         |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `Node::is_CFG`                              | `libjvm.dylib`                   |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `semaphore_wait_trap`                       | `libsystem_kernel.dylib`         |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `forward_copy_longs`                        | `<unknown>`                      |

##### Compiler

|  Change | Delta |           % | Samples | Function                                    | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | -------------- |
|  -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `PhaseIdealLoop::build_loop_late`           | `libjvm.dylib` |
|  -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `PhaseChaitin::elide_copy`                  | `libjvm.dylib` |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `Matcher::xform`                            | `libjvm.dylib` |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `PhaseIdealLoop::get_early_ctrl`            | `libjvm.dylib` |
|  -40.0% |    -4 | 0.8% → 0.5% |  10 → 6 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Type::meet_helper`                         | `libjvm.dylib` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Node::is_dead_loop_safe`                   | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::schedule_late`                   | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIFG::SquareUp`                        | `libjvm.dylib` |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `Node::is_CFG`                              | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `GraphBuilder::try_inline_full`             | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `GraphBuilder::append_with_bci`             | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LinearScan::eliminate_spill_moves`         | `libjvm.dylib` |
|  -25.0% |    -2 | 0.6% → 0.5% |   8 → 6 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `NTarjan::DFS`                              | `libjvm.dylib` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `Type::cmp`                                 | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `TypeOopPtr::TypeOopPtr`                    | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `MemNode::can_see_stored_value`             | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                 | Location                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------ | ------------------------ |
|  -26.7% |    -4 | 1.1% → 0.8% | 15 → 11 | `InstanceKlass::find_method_index`                                       | `libjvm.dylib`           |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `__psynch_cvbroad`                                                       | `libsystem_kernel.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__psynch_mutexdrop`                                                     | `libsystem_kernel.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `semaphore_wait_trap`                                                    | `libsystem_kernel.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `forward_copy_longs`                                                     | `<unknown>`              |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `ClassFileParser::skip_over_field_signature`                             | `libjvm.dylib`           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ImmutableOopMap::update_register_map`                                   | `libjvm.dylib`           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `MethodData::initialize_data`                                            | `libjvm.dylib`           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                 | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Chunk::operator new`                                                    | `libjvm.dylib`           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `_qsort`                                                                 | `libsystem_c.dylib`      |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `mach_absolute_time`                                                     | `libsystem_kernel.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `StackMapReader::next`                                                   | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `ClassFileParser::parse_method`                                          | `libjvm.dylib`           |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `SymbolTable::lookup_only`                                               | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `PlaceholderTable::get_entry`                                            | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `ClassFileParser::verify_legal_field_name`                               | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Reflection::verify_member_access`                                       | `libjvm.dylib`           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `__semwait_signal`                                                       | `libsystem_kernel.dylib` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                    | Location                                                                                             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                            | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckIncompatibleTypeVariableUpperBounds`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(byte[], int, boolean)`                                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getTokenType()`                                                                            | `org.jetbrains.kotlin.parsing.TruncatedSemanticWhitespaceAwarePsiBuilder`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getTokenType()`                                                                            | `com.intellij.lang.impl.PsiBuilderImpl`                                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parseCallSuffix()`                                                                         | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `insert(int, int, Object)`                                                                  | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`                                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getUsedAsExpression(LighterASTNode)`                                                       | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accepts(Path)`                                                                             | `org.jetbrains.kotlin.fir.deserialization.LibraryPathFilter$LibraryList`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `makeImmutable()`                                                                           | `org.jetbrains.kotlin.protobuf.FieldSet`                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(int[])`                                                                             | `org.jetbrains.kotlin.metadata.deserialization.BinaryVersion`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                           | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `typeAliasNameIndex_delegate$lambda$0(PackagePartsCacheData)`                               | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `directExpansionType(ConeClassLikeType, FirSession, Function1)`                             | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `rigidType(ProtoBuf$Type, ConeAttributes)`                                                  | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getCustom(ConeAttributes)`                                                                 | `org.jetbrains.kotlin.fir.types.CustomAnnotationTypeAttributeKt`                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`               | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getMask()`                                                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirDeclarationStatusImpl$Modifier`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `function(String, String, Function1)`                                                       | `org.jetbrains.kotlin.load.java.typeEnhancement.SignatureEnhancementBuilder$ClassEnhancementBuilder` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `substituteRecursive(ConeKotlinType)`                                                       | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`                              |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                               | Location                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `checkNotNullParameter(Object, String)`                                                                | `kotlin.jvm.internal.Intrinsics`                                  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `size()`                                                                                               | `kotlin.collections.AbstractCollection`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `copyOf(byte[], int)`                                                                                  | `java.util.Arrays`                                                |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `resize()`                                                                                             | `java.util.HashMap`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(Object)`                                                                                          | `java.util.HashMap`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `initialTryLock()`                                                                                     | `java.util.concurrent.locks.ReentrantLock$NonfairSync`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `equals(Object)`                                                                                       | `java.lang.String`                                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkAndAddEntry(int, int, ZipCoder)`                                                                 | `java.util.zip.ZipFile$Source`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(MethodType)`                                                                                   | `java.lang.invoke.MethodTypeForm`                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tableSizeFor(int)`                                                                                    | `java.util.HashMap`                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `asTypeUncached(MethodType)`                                                                           | `java.lang.invoke.MethodHandle`                                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `put(int, long)`                                                                                       | `java.nio.DirectLongBufferU`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                                         | `java.util.concurrent.ConcurrentHashMap`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `isEnabled()`                                                                                          | `jdk.internal.util.ClassFileDumper`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `copyMemory(Object, long, Object, long, long)`                                                         | `jdk.internal.misc.Unsafe`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `fillBuffer()`                                                                                         | `java.util.stream.StreamSpliterators$AbstractWrappingSpliterator` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getCacheCarefully(Class)`                                                                             | `java.lang.ClassValue`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `joinTo(Iterable, Appendable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` | `kotlin.collections.CollectionsKt___CollectionsKt`                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toByteArray()`                                                                                        | `jdk.internal.org.objectweb.asm.ClassWriter`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hash(Object)`                                                                                         | `java.util.HashMap`                                               |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`            | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`   | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                               | Location                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|     new |  +350 |  0.0% → 26.5% |   0 → 350 | `invokeStatic(Object, Object)`                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |
|     new |  +350 |  0.0% → 26.5% |   0 → 350 | `invoke(Object, Object, Object)`                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`  |
|  +45.5% |   +20 |   3.3% → 4.8% |   44 → 64 | `WorkerThread::run`                                                                                    | `libjvm.dylib`                                       |
|   +1.7% |   +15 | 66.3% → 67.5% | 877 → 892 | `_pthread_start`                                                                                       | `libsystem_pthread.dylib`                            |
|   +1.7% |   +15 | 66.3% → 67.5% | 877 → 892 | `thread_start`                                                                                         | `libsystem_pthread.dylib`                            |
|   +1.6% |   +14 | 66.3% → 67.4% | 877 → 891 | `Thread::call_run`                                                                                     | `libjvm.dylib`                                       |
|   +1.6% |   +14 | 66.3% → 67.4% | 877 → 891 | `thread_native_entry`                                                                                  | `libjvm.dylib`                                       |
|     new |   +13 |   0.0% → 1.0% |    0 → 13 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
| +150.0% |   +12 |   0.6% → 1.5% |    8 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                      | `libjvm.dylib`                                       |
|   +2.0% |   +11 | 42.1% → 42.9% | 556 → 567 | `Compile::Compile`                                                                                     | `libjvm.dylib`                                       |
|   +7.3% |   +11 | 11.3% → 12.2% | 150 → 161 | `PhaseChaitin::Register_Allocate`                                                                      | `libjvm.dylib`                                       |
| +122.2% |   +11 |   0.7% → 1.5% |    9 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`                                       |
| +183.3% |   +11 |   0.5% → 1.3% |    6 → 17 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`                                       |
|  +17.5% |   +11 |   4.8% → 5.6% |   63 → 74 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                              | `java.lang.ClassLoader`                              |
|  +21.3% |   +10 |   3.6% → 4.3% |   47 → 57 | `Compile::optimize_loops`                                                                              | `libjvm.dylib`                                       |
| +100.0% |   +10 |   0.8% → 1.5% |   10 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                     | `libjvm.dylib`                                       |
| +100.0% |   +10 |   0.8% → 1.5% |   10 → 20 | `G1RebuildRSAndScrubTask::work`                                                                        | `libjvm.dylib`                                       |
|  +16.4% |   +10 |   4.6% → 5.4% |   61 → 71 | `Java_java_lang_ClassLoader_defineClass1`                                                              | `libjava.dylib`                                      |
|  +16.1% |   +10 |   4.7% → 5.4% |   62 → 72 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                        | `java.lang.ClassLoader`                              |
|   +1.6% |    +9 | 42.2% → 42.9% | 558 → 567 | `C2Compiler::compile_method`                                                                           | `libjvm.dylib`                                       |

##### Compiler

|  Change | Delta |             % |   Samples | Function                                   | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|   +2.0% |   +11 | 42.1% → 42.9% | 556 → 567 | `Compile::Compile`                         | `libjvm.dylib` |
|   +7.3% |   +11 | 11.3% → 12.2% | 150 → 161 | `PhaseChaitin::Register_Allocate`          | `libjvm.dylib` |
|  +21.3% |   +10 |   3.6% → 4.3% |   47 → 57 | `Compile::optimize_loops`                  | `libjvm.dylib` |
|   +1.6% |    +9 | 42.2% → 42.9% | 558 → 567 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  +60.0% |    +9 |   1.1% → 1.8% |   15 → 24 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|  +21.6% |    +8 |   2.8% → 3.4% |   37 → 45 | `PhaseOutput::Output`                      | `libjvm.dylib` |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `PhaseIFG::effective_degree`               | `libjvm.dylib` |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `PhaseIFG::Compute_Effective_Degree`       | `libjvm.dylib` |
|   +6.9% |    +7 |   7.6% → 8.2% | 101 → 108 | `PhaseIdealLoop::build_and_optimize`       | `libjvm.dylib` |
|   +6.9% |    +7 |   7.6% → 8.2% | 101 → 108 | `PhaseIdealLoop::PhaseIdealLoop`           | `libjvm.dylib` |
|  +70.0% |    +7 |   0.8% → 1.3% |   10 → 17 | `Type::hashcons`                           | `libjvm.dylib` |
| +700.0% |    +7 |   0.1% → 0.6% |     1 → 8 | `ciField::ciField`                         | `libjvm.dylib` |
| +700.0% |    +7 |   0.1% → 0.6% |     1 → 8 | `ciEnv::get_field_by_index_impl`           | `libjvm.dylib` |
| +700.0% |    +7 |   0.1% → 0.6% |     1 → 8 | `ciEnv::get_field_by_index`                | `libjvm.dylib` |
| +300.0% |    +6 |   0.2% → 0.6% |     2 → 8 | `PhaseIdealLoop::build_loop_tree`          | `libjvm.dylib` |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `Compile::remove_speculative_types`        | `libjvm.dylib` |
| +100.0% |    +6 |   0.5% → 0.9% |    6 → 12 | `BlockBegin::iterate_preorder`             | `libjvm.dylib` |
| +150.0% |    +6 |   0.3% → 0.8% |    4 → 10 | `LIR_Assembler::process_debug_info`        | `libjvm.dylib` |
|     new |    +6 |   0.0% → 0.5% |     0 → 6 | `GraphKit::uncommon_trap`                  | `libjvm.dylib` |
|   +2.4% |    +5 | 15.5% → 15.9% | 205 → 210 | `Compile::Optimize`                        | `libjvm.dylib` |

##### Native

|  Change | Delta |             % |   Samples | Function                                                                                               | Location                  |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------ | ------------------------- |
|  +45.5% |   +20 |   3.3% → 4.8% |   44 → 64 | `WorkerThread::run`                                                                                    | `libjvm.dylib`            |
|   +1.7% |   +15 | 66.3% → 67.5% | 877 → 892 | `_pthread_start`                                                                                       | `libsystem_pthread.dylib` |
|   +1.7% |   +15 | 66.3% → 67.5% | 877 → 892 | `thread_start`                                                                                         | `libsystem_pthread.dylib` |
|   +1.6% |   +14 | 66.3% → 67.4% | 877 → 891 | `Thread::call_run`                                                                                     | `libjvm.dylib`            |
|   +1.6% |   +14 | 66.3% → 67.4% | 877 → 891 | `thread_native_entry`                                                                                  | `libjvm.dylib`            |
| +150.0% |   +12 |   0.6% → 1.5% |    8 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb`                      | `libjvm.dylib`            |
| +122.2% |   +11 |   0.7% → 1.5% |    9 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object`                               | `libjvm.dylib`            |
| +183.3% |   +11 |   0.5% → 1.3% |    6 → 17 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`            |
| +100.0% |   +10 |   0.8% → 1.5% |   10 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_region`                     | `libjvm.dylib`            |
| +100.0% |   +10 |   0.8% → 1.5% |   10 → 20 | `G1RebuildRSAndScrubTask::work`                                                                        | `libjvm.dylib`            |
|  +16.4% |   +10 |   4.6% → 5.4% |   61 → 71 | `Java_java_lang_ClassLoader_defineClass1`                                                              | `libjava.dylib`           |
|  +81.8% |    +9 |   0.8% → 1.5% |   11 → 20 | `HeapRegionManager::par_iterate`                                                                       | `libjvm.dylib`            |
|  +13.8% |    +8 |   4.4% → 5.0% |   58 → 66 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                        | `libzip.dylib`            |
|     new |    +8 |   0.0% → 0.6% |     0 → 8 | `CodeCacheUnloadingTask::work`                                                                         | `libjvm.dylib`            |
|     new |    +8 |   0.0% → 0.6% |     0 → 8 | `G1ParallelCleaningTask::work`                                                                         | `libjvm.dylib`            |
|  +19.4% |    +7 |   2.7% → 3.3% |   36 → 43 | `ClassFileParser::parse_constant_pool`                                                                 | `libjvm.dylib`            |
|  +14.3% |    +7 |   3.7% → 4.2% |   49 → 56 | `ClassFileParser::parse_stream`                                                                        | `libjvm.dylib`            |
|  +11.3% |    +7 |   4.7% → 5.2% |   62 → 69 | `KlassFactory::create_from_stream`                                                                     | `libjvm.dylib`            |
|  +11.3% |    +7 |   4.7% → 5.2% |   62 → 69 | `JVM_DefineClassWithSource`                                                                            | `libjvm.dylib`            |
|  +22.6% |    +7 |   2.3% → 2.9% |   31 → 38 | `ClassFileParser::parse_constant_pool_entries`                                                         | `libjvm.dylib`            |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                             | Location                                                                                       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  +64.3% |    +9 | 1.1% → 1.7% | 14 → 23 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +64.3% |    +9 | 1.1% → 1.7% | 14 → 23 | `invoke(Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d280` |
| +128.6% |    +9 | 0.5% → 1.2% |  7 → 16 | `processFunctionsByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                 |
| +128.6% |    +9 | 0.5% → 1.2% |  7 → 16 | `invoke(FirScope, Name, Function1)`                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`   |
|  +61.5% |    +8 | 1.0% → 1.6% | 13 → 21 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +38.1% |    +8 | 1.6% → 2.2% | 21 → 29 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
| +100.0% |    +8 | 0.6% → 1.2% |  8 → 16 | `invoke(Object, Object, Object)`                                                                                                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`   |
| +100.0% |    +8 | 0.6% → 1.2% |  8 → 16 | `processFunctionsByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +38.1% |    +8 | 1.6% → 2.2% | 21 → 29 | `accept(IrVisitor, Object)`                                                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                                 |
|  +10.9% |    +7 | 4.8% → 5.4% | 64 → 71 | `findClass(String)`                                                                                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                       |
|  +10.6% |    +7 | 5.0% → 5.5% | 66 → 73 | `loadClass(String, boolean)`                                                                                                                         | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                       |
|  +10.6% |    +7 | 5.0% → 5.5% | 66 → 73 | `loadClass(String)`                                                                                                                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                       |
| +700.0% |    +7 | 0.1% → 0.6% |   1 → 8 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                      | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                 |
| +350.0% |    +7 | 0.2% → 0.7% |   2 → 9 | `buildDefaultFlow(CFGNode, Function2)`                                                                                                               | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                     |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `mergeIncomingFlow(CFGNode, Function2)`                                                                                                              | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                     |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                                                                        | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `invoke(Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x00000070015fc020` |
|  +19.4% |    +6 | 2.3% → 2.8% | 31 → 37 | `accept(IrVisitor, Object)`                                                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                              |
|  +40.0% |    +6 | 1.1% → 1.6% | 15 → 21 | `visitReturn(IrReturn, BlockInfo)`                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                   |
|  +40.0% |    +6 | 1.1% → 1.6% | 15 → 21 | `visitReturn(IrReturn, Object)`                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                   |

##### Standard library

| Change | Delta |            % | Samples | Function                                                                                      | Location                                             |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |  +350 | 0.0% → 26.5% | 0 → 350 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |
|    new |  +350 | 0.0% → 26.5% | 0 → 350 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`  |
|    new |   +13 |  0.0% → 1.0% |  0 → 13 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
| +17.5% |   +11 |  4.8% → 5.6% | 63 → 74 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                     | `java.lang.ClassLoader`                              |
| +16.1% |   +10 |  4.7% → 5.4% | 62 → 72 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                              |
| +15.5% |    +9 |  4.4% → 5.1% | 58 → 67 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                 | `java.util.zip.Inflater`                             |
| +15.5% |    +9 |  4.4% → 5.1% | 58 → 67 | `inflate(byte[], int, int)`                                                                   | `java.util.zip.Inflater`                             |
| +13.2% |    +9 |  5.1% → 5.8% | 68 → 77 | `loadClass(String, boolean)`                                                                  | `java.lang.ClassLoader`                              |
| +11.3% |    +7 |  4.7% → 5.2% | 62 → 69 | `read(byte[])`                                                                                | `java.io.FilterInputStream`                          |
| +11.1% |    +7 |  4.8% → 5.3% | 63 → 70 | `defineClass(String, byte[], int, int)`                                                       | `java.lang.ClassLoader`                              |
| +77.8% |    +7 |  0.7% → 1.2% |  9 → 16 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`               |
| +77.8% |    +7 |  0.7% → 1.2% |  9 → 16 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                              | `java.lang.invoke.MethodHandleNatives`               |
|  +9.8% |    +6 |  4.6% → 5.1% | 61 → 67 | `read(byte[], int, int)`                                                                      | `java.util.zip.InflaterInputStream`                  |
|  +9.5% |    +6 |  4.8% → 5.2% | 63 → 69 | `read(byte[], int, int)`                                                                      | `java.util.zip.ZipInputStream`                       |
| +66.7% |    +6 |  0.7% → 1.1% |  9 → 15 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                 |
| +66.7% |    +6 |  0.7% → 1.1% |  9 → 15 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                   |
| +66.7% |    +6 |  0.7% → 1.1% |  9 → 15 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                  | `java.lang.invoke.BootstrapMethodInvoker`            |
| +66.7% |    +6 |  0.7% → 1.1% |  9 → 15 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                   | `java.lang.invoke.CallSite`                          |
| +55.6% |    +5 |  0.7% → 1.1% |  9 → 14 | `buildCallSite()`                                                                             | `java.lang.invoke.InnerClassLambdaMetafactory`       |
|    new |    +4 |  0.0% → 0.3% |   0 → 4 | `defineClass(String, byte[], int, int, CodeSource)`                                           | `java.security.SecureClassLoader`                    |

##### JIT

|  Change | Delta |           % | Samples | Function                        | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------- | ----------- |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `I2C/C2I adapters(0xb)`         | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xba)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xaa)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbbaab)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                                                                     | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -362 |  27.4% → 0.0% |   362 → 0 | `invokeStatic(Object, Object)`                                                                                                                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000`                   |
| removed |  -362 |  27.4% → 0.0% |   362 → 0 | `invoke(Object, Object, Object)`                                                                                                                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`                    |
|  -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
|  -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
|  -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|  -38.3% |   -18 |   3.6% → 2.2% |   47 → 29 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|   -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::compile_method`                                                                                                                                                | `libjvm.dylib`                                                         |
|   -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::Compilation`                                                                                                                                                   | `libjvm.dylib`                                                         |
|   -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compiler::compile_method`                                                                                                                                                   | `libjvm.dylib`                                                         |
|   -7.0% |   -16 | 17.2% → 16.0% | 228 → 212 | `Compilation::compile_java_method`                                                                                                                                           | `libjvm.dylib`                                                         |
|   -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `run(String[])`                                                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                            |
|   -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  -26.0% |   -13 |   3.8% → 2.8% |   50 → 37 | `Matcher::match`                                                                                                                                                             | `libjvm.dylib`                                                         |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                 |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invokeExact_MT(Object, Object, Object, Object)`                                                                                                                             | `java.lang.invoke.Invokers$Holder`                                     |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invokeImpl(Object, Object[])`                                                                                                                                               | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                                                                                                                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                                                                                                                                   | `java.lang.reflect.Method`                                             |
|  -36.4% |   -12 |   2.5% → 1.6% |   33 → 21 | `InstanceKlass::initialize_impl`                                                                                                                                             | `libjvm.dylib`                                                         |

##### Compiler

| Change | Delta |             % |   Samples | Function                                   | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::compile_method`              | `libjvm.dylib` |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::Compilation`                 | `libjvm.dylib` |
|  -7.0% |   -16 | 17.2% → 16.0% | 228 → 212 | `Compilation::compile_java_method`         | `libjvm.dylib` |
| -26.0% |   -13 |   3.8% → 2.8% |   50 → 37 | `Matcher::match`                           | `libjvm.dylib` |
| -28.9% |   -11 |   2.9% → 2.0% |   38 → 27 | `Matcher::xform`                           | `libjvm.dylib` |
| -22.9% |   -11 |   3.6% → 2.8% |   48 → 37 | `GraphBuilder::try_inline_full`            | `libjvm.dylib` |
| -15.6% |   -10 |   4.8% → 4.1% |   64 → 54 | `PhaseIterGVN::transform_old`              | `libjvm.dylib` |
| -20.8% |   -10 |   3.6% → 2.9% |   48 → 38 | `GraphBuilder::try_inline`                 | `libjvm.dylib` |
| -36.0% |    -9 |   1.9% → 1.2% |   25 → 16 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |
| -15.3% |    -9 |   4.5% → 3.8% |   59 → 50 | `GraphBuilder::invoke`                     | `libjvm.dylib` |
|  -9.9% |    -9 |   6.9% → 6.2% |   91 → 82 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| -12.5% |    -8 |   4.8% → 4.2% |   64 → 56 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| -40.0% |    -8 |   1.5% → 0.9% |   20 → 12 | `PhaseGVN::transform_no_reclaim`           | `libjvm.dylib` |
|  -9.1% |    -7 |   5.8% → 5.3% |   77 → 70 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
| -37.5% |    -6 |   1.2% → 0.8% |   16 → 10 | `PhaseChaitin::elide_copy`                 | `libjvm.dylib` |
| -46.2% |    -6 |   1.0% → 0.5% |    13 → 7 | `PhaseIterGVN::subsume_node`               | `libjvm.dylib` |
| -35.3% |    -6 |   1.3% → 0.8% |   17 → 11 | `PhaseIdealLoop::Dominators`               | `libjvm.dylib` |
| -85.7% |    -6 |   0.5% → 0.1% |     7 → 1 | `PhaseIdealLoop::try_sink_out_of_loop`     | `libjvm.dylib` |
|  -9.1% |    -6 |   5.0% → 4.5% |   66 → 60 | `GraphBuilder::iterate_all_blocks`         | `libjvm.dylib` |
|  -6.4% |    -6 |   7.1% → 6.7% |   94 → 88 | `Compilation::build_hir`                   | `libjvm.dylib` |

##### Native

| Change | Delta |             % |   Samples | Function                                         | Location                 |
| -----: | ----: | ------------: | --------: | ------------------------------------------------ | ------------------------ |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compiler::compile_method`                       | `libjvm.dylib`           |
| -36.4% |   -12 |   2.5% → 1.6% |   33 → 21 | `InstanceKlass::initialize_impl`                 | `libjvm.dylib`           |
| -45.5% |   -10 |   1.7% → 0.9% |   22 → 12 | `Verifier::verify`                               | `libjvm.dylib`           |
| -30.3% |   -10 |   2.5% → 1.7% |   33 → 23 | `InstanceKlass::link_class_impl`                 | `libjvm.dylib`           |
| -47.6% |   -10 |   1.6% → 0.8% |   21 → 11 | `InterpreterRuntime::_new`                       | `libjvm.dylib`           |
| -38.9% |    -7 |   1.4% → 0.8% |   18 → 11 | `ClassVerifier::verify_method`                   | `libjvm.dylib`           |
| -38.9% |    -7 |   1.4% → 0.8% |   18 → 11 | `ClassVerifier::verify_class`                    | `libjvm.dylib`           |
| -63.6% |    -7 |   0.8% → 0.3% |    11 → 4 | `LinkResolver::resolve_field`                    | `libjvm.dylib`           |
| -40.0% |    -6 |   1.1% → 0.7% |    15 → 9 | `LinkResolver::resolve_method`                   | `libjvm.dylib`           |
| -62.5% |    -5 |   0.6% → 0.2% |     8 → 3 | `Chunk::operator new`                            | `libjvm.dylib`           |
| -27.8% |    -5 |   1.4% → 1.0% |   18 → 13 | `nmethod::nmethod`                               | `libjvm.dylib`           |
| -45.5% |    -5 |   0.8% → 0.5% |    11 → 6 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`           |
| -35.7% |    -5 |   1.1% → 0.7% |    14 → 9 | `InstanceKlass::uncached_lookup_method`          | `libjvm.dylib`           |
| -71.4% |    -5 |   0.5% → 0.2% |     7 → 2 | `LinkResolver::linktime_resolve_virtual_method`  | `libjvm.dylib`           |
| -55.6% |    -5 |   0.7% → 0.3% |     9 → 4 | `Optimizer::eliminate_null_checks`               | `libjvm.dylib`           |
| -55.6% |    -5 |   0.7% → 0.3% |     9 → 4 | `IR::eliminate_null_checks`                      | `libjvm.dylib`           |
| -66.7% |    -4 |   0.5% → 0.2% |     6 → 2 | `G1CMTask::drain_local_queue`                    | `libjvm.dylib`           |
| -16.0% |    -4 |   1.9% → 1.6% |   25 → 21 | `InterpreterRuntime::resolve_from_cache`         | `libjvm.dylib`           |
| -26.7% |    -4 |   1.1% → 0.8% |   15 → 11 | `InstanceKlass::find_method_index`               | `libjvm.dylib`           |
| -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `__psynch_cvbroad`                               | `libsystem_kernel.dylib` |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                                                                                                                     | Location                                                               |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
| -38.3% |   -18 |   3.6% → 2.2% |   47 → 29 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|  -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `run(String[])`                                                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                 |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -3.1% |   -11 | 27.2% → 26.4% | 360 → 349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                                                           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  -3.1% |   -11 | 27.2% → 26.4% | 360 → 349 | `doMain(CLICompiler, String[])`                                                                                                                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
| -19.6% |   -11 |   4.2% → 3.4% |   56 → 45 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                                                        | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`               |
|  -2.8% |   -10 | 27.1% → 26.3% | 358 → 348 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  -2.8% |   -10 | 27.1% → 26.3% | 358 → 348 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  -2.8% |   -10 | 27.1% → 26.3% | 358 → 348 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                                                       | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  -2.8% |   -10 | 26.7% → 25.9% | 353 → 343 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                                                  | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  -2.6% |    -9 | 26.1% → 25.4% | 345 → 336 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -2.6% |    -9 | 26.1% → 25.4% | 345 → 336 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                                                       | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -2.6% |    -9 | 26.1% → 25.4% | 345 → 336 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                                                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |
|  -2.6% |    -9 | 26.0% → 25.3% | 344 → 335 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                                                          | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                |
|  -2.6% |    -9 | 26.0% → 25.3% | 344 → 335 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)`                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                               | Location                                             |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -362 |  27.4% → 0.0% |   362 → 0 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000` |
| removed |  -362 |  27.4% → 0.0% |   362 → 0 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`  |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invokeExact_MT(Object, Object, Object, Object)`                       | `java.lang.invoke.Invokers$Holder`                   |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invokeImpl(Object, Object[])`                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                             | `java.lang.reflect.Method`                           |
| removed |    -9 |   0.7% → 0.0% |     9 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801230000` |
|  -47.4% |    -9 |   1.4% → 0.8% |   19 → 10 | `getValue()`                                                           | `kotlin.UnsafeLazyImpl`                              |
|  -54.5% |    -6 |   0.8% → 0.4% |    11 → 5 | `checkNotNullParameter(Object, String)`                                | `kotlin.jvm.internal.Intrinsics`                     |
|  -83.3% |    -5 |   0.5% → 0.1% |     6 → 1 | `copyOf(byte[], int)`                                                  | `java.util.Arrays`                                   |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `toByteArray()`                                                        | `java.io.ByteArrayOutputStream`                      |
|  -25.0% |    -4 |   1.2% → 0.9% |   16 → 12 | `getValue()`                                                           | `kotlin.SafePublicationLazyImpl`                     |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `<init>(int)`                                                          | `java.io.ByteArrayOutputStream`                      |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `clone()`                                                              | `java.lang.Object`                                   |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `read(byte[], int, int)`                                               | `java.io.BufferedInputStream`                        |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `read(byte[], int, int)`                                               | `java.io.FilterInputStream`                          |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `read(byte[], int, int)`                                               | `java.io.PushbackInputStream`                        |
|  -17.6% |    -3 |   1.3% → 1.1% |   17 → 14 | `getValue()`                                                           | `kotlin.SynchronizedLazyImpl`                        |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `getNextEntry()`                                                       | `java.util.zip.ZipInputStream`                       |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `read1(byte[], int, int)`                                              | `java.io.BufferedInputStream`                        |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`            | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`   | `<unknown>` |

# Allocated heap profile diff

Allocated 684 MiB → 679 MiB (-5.313 MiB, -0.8%) over 1,362 samples → 1,351 samples (514 KiB per sample).

| Category         | Change |       Delta |             % |              Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ----------------: | ------------: |
| Standard library |  -2.4% | -12.813 MiB | 77.2% → 76.0% | 528 MiB → 515 MiB | 1,051 → 1,025 |
| Ours             |  +4.8% |  +7.499 MiB | 22.8% → 24.0% | 156 MiB → 163 MiB |     311 → 326 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |           % |               Size | Samples | Function                                                                        | Location                                                                       |
| ------: | -------------: | ----------: | -----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  +18.3% |     +7.499 MiB | 6.0% → 7.1% |  41 MiB → 48.5 MiB | 82 → 97 | `clone()`                                                                       | `java.lang.Object`                                                             |
| +250.0% |     +4.999 MiB | 0.3% → 1.0% |      2 MiB → 7 MiB |  4 → 14 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`                                              |
| +450.0% |     +4.499 MiB | 0.1% → 0.8% | 1024 KiB → 5.5 MiB |  2 → 11 | `newOutput()`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString`                                     |
| +150.0% |     +2.999 MiB | 0.3% → 0.7% |      2 MiB → 5 MiB |  4 → 10 | `createZipEntry(String)`                                                        | `java.util.zip.ZipInputStream`                                                 |
|  +85.7% |     +2.999 MiB | 0.5% → 1.0% |  3.5 MiB → 6.5 MiB |  7 → 13 | `newInstance(OutputStream, int)`                                                | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                              |
|     new |     +2.499 MiB | 0.0% → 0.4% |      0 B → 2.5 MiB |   0 → 5 | `readUtf(int, int, char[])`                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
| +100.0% |     +2.499 MiB | 0.4% → 0.7% |    2.5 MiB → 5 MiB |  5 → 10 | `<init>(int)`                                                                   | `kotlin.collections.builders.MapBuilder`                                       |
|  +80.0% |     +1.999 MiB | 0.4% → 0.7% |  2.5 MiB → 4.5 MiB |   5 → 9 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                                                     |
| +133.3% |     +1.999 MiB | 0.2% → 0.5% |  1.5 MiB → 3.5 MiB |   3 → 7 | `<init>(InputStream)`                                                           | `org.jetbrains.kotlin.protobuf.CodedInputStream`                               |
|     new |     +1.999 MiB | 0.0% → 0.3% |        0 B → 2 MiB |   0 → 4 | `read(InputStream, int)`                                                        | `java.nio.file.Files`                                                          |
|  +44.4% |     +1.999 MiB | 0.7% → 1.0% |  4.5 MiB → 6.5 MiB |  9 → 13 | `<init>(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                          |
|     new |     +1.999 MiB | 0.0% → 0.3% |        0 B → 2 MiB |   0 → 4 | `newInstance(OutputStream, int)`                                                | `kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream`                  |
| +100.0% |     +1.499 MiB | 0.2% → 0.4% |    1.5 MiB → 3 MiB |   3 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                        |
| +300.0% |     +1.499 MiB | 0.1% → 0.3% |    512 KiB → 2 MiB |   1 → 4 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable`                                   |
|   +7.9% |     +1.499 MiB | 2.8% → 3.0% |  19 MiB → 20.5 MiB | 38 → 41 | `<init>(int)`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`                              |
|  +75.0% |     +1.499 MiB | 0.3% → 0.5% |    2 MiB → 3.5 MiB |   4 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                |
| +150.0% |     +1.499 MiB | 0.1% → 0.4% | 1024 KiB → 2.5 MiB |   2 → 5 | `getBytes(int, int)`                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping` |
| +150.0% |     +1.499 MiB | 0.1% → 0.4% | 1024 KiB → 2.5 MiB |   2 → 5 | `getLabel()`                                                                    | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                               |
| +300.0% |     +1.499 MiB | 0.1% → 0.3% |    512 KiB → 2 MiB |   1 → 4 | `toArray()`                                                                     | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                |
|  +40.0% | +1,023.998 KiB | 0.4% → 0.5% |  2.5 MiB → 3.5 MiB |   5 → 7 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                                     |

##### Standard library

|  Change |          Delta |           % |              Size | Samples | Function                                                                        | Location                                                                              |
| ------: | -------------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +18.3% |     +7.499 MiB | 6.0% → 7.1% | 41 MiB → 48.5 MiB | 82 → 97 | `clone()`                                                                       | `java.lang.Object`                                                                    |
| +250.0% |     +4.999 MiB | 0.3% → 1.0% |     2 MiB → 7 MiB |  4 → 14 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`                                                     |
| +150.0% |     +2.999 MiB | 0.3% → 0.7% |     2 MiB → 5 MiB |  4 → 10 | `createZipEntry(String)`                                                        | `java.util.zip.ZipInputStream`                                                        |
| +100.0% |     +2.499 MiB | 0.4% → 0.7% |   2.5 MiB → 5 MiB |  5 → 10 | `<init>(int)`                                                                   | `kotlin.collections.builders.MapBuilder`                                              |
|  +80.0% |     +1.999 MiB | 0.4% → 0.7% | 2.5 MiB → 4.5 MiB |   5 → 9 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                                                            |
|     new |     +1.999 MiB | 0.0% → 0.3% |       0 B → 2 MiB |   0 → 4 | `read(InputStream, int)`                                                        | `java.nio.file.Files`                                                                 |
|     new |     +1.999 MiB | 0.0% → 0.3% |       0 B → 2 MiB |   0 → 4 | `newInstance(OutputStream, int)`                                                | `kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream`                         |
| +100.0% |     +1.499 MiB | 0.2% → 0.4% |   1.5 MiB → 3 MiB |   3 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                               |
| +300.0% |     +1.499 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |   1 → 4 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable`                                          |
|  +40.0% | +1,023.998 KiB | 0.4% → 0.5% | 2.5 MiB → 3.5 MiB |   5 → 7 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                                            |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% | 512 KiB → 1.5 MiB |   1 → 3 | `initClassName()`                                                               | `java.lang.Class`                                                                     |
|  +66.7% | +1,023.998 KiB | 0.2% → 0.4% | 1.5 MiB → 2.5 MiB |   3 → 5 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                                                              |
|  +50.0% | +1,023.998 KiB | 0.3% → 0.4% |     2 MiB → 3 MiB |   4 → 6 | `arrayOfUninitializedElements(int)`                                             | `kotlin.collections.builders.ListBuilderKt`                                           |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% | 512 KiB → 1.5 MiB |   1 → 3 | `<init>(PersistentHashMap)`                                                     | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |
|  +50.0% | +1,023.998 KiB | 0.3% → 0.4% |     2 MiB → 3 MiB |   4 → 6 | `<init>(int)`                                                                   | `java.util.ArrayList`                                                                 |
|     new | +1,023.998 KiB | 0.0% → 0.1% |    0 B → 1024 KiB |   0 → 2 | `plus(Collection, Iterable)`                                                    | `kotlin.collections.CollectionsKt___CollectionsKt`                                    |
|     new | +1,023.998 KiB | 0.0% → 0.1% |    0 B → 1024 KiB |   0 → 2 | `singletonList(Object)`                                                         | `java.util.Collections`                                                               |
|     new | +1,023.998 KiB | 0.0% → 0.1% |    0 B → 1024 KiB |   0 → 2 | `decompress(ByteBuffer, int)`                                                   | `jdk.internal.jimage.ImageLocation`                                                   |
|     new | +1,023.998 KiB | 0.0% → 0.1% |    0 B → 1024 KiB |   0 → 2 | `listIterator(int)`                                                             | `java.util.AbstractList`                                                              |
|  +25.0% |   +511.999 KiB | 0.3% → 0.4% |   2 MiB → 2.5 MiB |   4 → 5 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                                                                    |

##### Ours

|  Change |          Delta |           % |               Size | Samples | Function                                                                                                  | Location                                                                                  |
| ------: | -------------: | ----------: | -----------------: | ------: | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +450.0% |     +4.499 MiB | 0.1% → 0.8% | 1024 KiB → 5.5 MiB |  2 → 11 | `newOutput()`                                                                                             | `org.jetbrains.kotlin.protobuf.ByteString`                                                |
|  +85.7% |     +2.999 MiB | 0.5% → 1.0% |  3.5 MiB → 6.5 MiB |  7 → 13 | `newInstance(OutputStream, int)`                                                                          | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                         |
|     new |     +2.499 MiB | 0.0% → 0.4% |      0 B → 2.5 MiB |   0 → 5 | `readUtf(int, int, char[])`                                                                               | `org.jetbrains.org.objectweb.asm.ClassReader`                                             |
| +133.3% |     +1.999 MiB | 0.2% → 0.5% |  1.5 MiB → 3.5 MiB |   3 → 7 | `<init>(InputStream)`                                                                                     | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                          |
|  +44.4% |     +1.999 MiB | 0.7% → 1.0% |  4.5 MiB → 6.5 MiB |  9 → 13 | `<init>(int, int)`                                                                                        | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                     |
|   +7.9% |     +1.499 MiB | 2.8% → 3.0% |  19 MiB → 20.5 MiB | 38 → 41 | `<init>(int)`                                                                                             | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                         |
|  +75.0% |     +1.499 MiB | 0.3% → 0.5% |    2 MiB → 3.5 MiB |   4 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                           |
| +150.0% |     +1.499 MiB | 0.1% → 0.4% | 1024 KiB → 2.5 MiB |   2 → 5 | `getBytes(int, int)`                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`            |
| +150.0% |     +1.499 MiB | 0.1% → 0.4% | 1024 KiB → 2.5 MiB |   2 → 5 | `getLabel()`                                                                                              | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                          |
| +300.0% |     +1.499 MiB | 0.1% → 0.3% |    512 KiB → 2 MiB |   1 → 4 | `toArray()`                                                                                               | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                           |
|  +50.0% | +1,023.998 KiB | 0.3% → 0.4% |      2 MiB → 3 MiB |   4 → 6 | `newFieldMap(int)`                                                                                        | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                            |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                                 |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `topLevel(FqName)`                                                                                        | `org.jetbrains.kotlin.name.ClassId$Companion`                                             |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `put(Comparable, Object)`                                                                                 | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                            |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                    |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`                             | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% |  512 KiB → 1.5 MiB |   1 → 3 | `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)`               | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                  |
| +100.0% | +1,023.998 KiB | 0.1% → 0.3% |   1024 KiB → 2 MiB |   2 → 4 | `readBootstrapMethodsAttribute(int)`                                                                      | `org.jetbrains.org.objectweb.asm.ClassReader`                                             |
|     new | +1,023.998 KiB | 0.0% → 0.1% |     0 B → 1024 KiB |   0 → 2 | `<init>(byte[], int, boolean)`                                                                            | `org.jetbrains.org.objectweb.asm.ClassReader`                                             |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |   Samples | Function                                                                              | Location                                                                                           |
| ------: | -------------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   -5.7% |     -9.813 MiB | 25.0% → 23.8% |   171 MiB → 161 MiB | 342 → 322 | `<init>(int)`                                                                         | `java.io.ByteArrayOutputStream`                                                                    |
|  -61.1% |     -5.499 MiB |   1.3% → 0.5% |     9 MiB → 3.5 MiB |    18 → 7 | `resize()`                                                                            | `java.util.HashMap`                                                                                |
|   -3.5% |     -4.999 MiB | 20.8% → 20.3% |   142 MiB → 137 MiB | 285 → 275 | `copyOf(byte[], int)`                                                                 | `java.util.Arrays`                                                                                 |
|  -90.0% |     -4.499 MiB |   0.7% → 0.1% |     5 MiB → 512 KiB |    10 → 1 | `ensureCapacity()`                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -64.3% |     -4.499 MiB |   1.0% → 0.4% |     7 MiB → 2.5 MiB |    14 → 5 | `box-impl(List)`                                                                      | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
|  -19.0% |     -3.999 MiB |   3.1% → 2.5% |     21 MiB → 17 MiB |   42 → 34 | `iterator()`                                                                          | `java.util.ArrayList`                                                                              |
|  -55.6% |     -2.499 MiB |   0.7% → 0.3% |     4.5 MiB → 2 MiB |     9 → 4 | `newString(byte[], int, int)`                                                         | `java.lang.StringLatin1`                                                                           |
|  -35.7% |     -2.499 MiB |   1.0% → 0.7% |     7 MiB → 4.5 MiB |    14 → 9 | `newNode(int, Object, Object, HashMap$Node)`                                          | `java.util.LinkedHashMap`                                                                          |
|  -83.3% |     -2.499 MiB |   0.4% → 0.1% |     3 MiB → 512 KiB |     6 → 1 | `<init>(String)`                                                                      | `org.jetbrains.kotlin.name.FqName`                                                                 |
|  -83.3% |     -2.499 MiB |   0.4% → 0.1% |     3 MiB → 512 KiB |     6 → 1 | `to(Object, Object)`                                                                  | `kotlin.TuplesKt`                                                                                  |
|  -12.1% |     -1.999 MiB |   2.4% → 2.1% | 16.5 MiB → 14.5 MiB |   33 → 29 | `copyOfRangeByte(byte[], int, int)`                                                   | `java.util.Arrays`                                                                                 |
|  -44.4% |     -1.999 MiB |   0.7% → 0.4% |   4.5 MiB → 2.5 MiB |     9 → 5 | `allocateInstance(Object)`                                                            | `java.lang.invoke.DirectMethodHandle`                                                              |
|  -47.8% |     -1.999 MiB |   0.6% → 0.3% | 4.19 MiB → 2.19 MiB |     8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
|  -36.4% |     -1.999 MiB |   0.8% → 0.5% |   5.5 MiB → 3.5 MiB |    11 → 7 | `<init>(int, float, boolean)`                                                         | `java.util.HashSet`                                                                                |
|  -80.0% |     -1.999 MiB |   0.4% → 0.1% |   2.5 MiB → 512 KiB |     5 → 1 | `getTypeInternal(String, int, int)`                                                   | `org.jetbrains.org.objectweb.asm.Type`                                                             |
|  -42.9% |     -1.499 MiB |   0.5% → 0.3% |     3.5 MiB → 2 MiB |     7 → 4 | `simplifyTrivialInstructions(MethodNode)`                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -66.7% | -1,023.998 KiB |   0.2% → 0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                      | `java.lang.String`                                                                                 |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `visitMethod(int, String, String, String, String[])`                                  | `jdk.internal.org.objectweb.asm.ClassWriter`                                                       |
|  -66.7% | -1,023.998 KiB |   0.2% → 0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `<init>(InputStream, Inflater, int)`                                                  | `java.util.zip.InflaterInputStream`                                                                |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `allocateStartMarker()`                                                               | `com.intellij.lang.impl.MarkerPool`                                                                |

##### Standard library

|  Change |          Delta |             % |                Size |   Samples | Function                                             | Location                                       |
| ------: | -------------: | ------------: | ------------------: | --------: | ---------------------------------------------------- | ---------------------------------------------- |
|   -5.7% |     -9.813 MiB | 25.0% → 23.8% |   171 MiB → 161 MiB | 342 → 322 | `<init>(int)`                                        | `java.io.ByteArrayOutputStream`                |
|  -61.1% |     -5.499 MiB |   1.3% → 0.5% |     9 MiB → 3.5 MiB |    18 → 7 | `resize()`                                           | `java.util.HashMap`                            |
|   -3.5% |     -4.999 MiB | 20.8% → 20.3% |   142 MiB → 137 MiB | 285 → 275 | `copyOf(byte[], int)`                                | `java.util.Arrays`                             |
|  -19.0% |     -3.999 MiB |   3.1% → 2.5% |     21 MiB → 17 MiB |   42 → 34 | `iterator()`                                         | `java.util.ArrayList`                          |
|  -55.6% |     -2.499 MiB |   0.7% → 0.3% |     4.5 MiB → 2 MiB |     9 → 4 | `newString(byte[], int, int)`                        | `java.lang.StringLatin1`                       |
|  -35.7% |     -2.499 MiB |   1.0% → 0.7% |     7 MiB → 4.5 MiB |    14 → 9 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.LinkedHashMap`                      |
|  -83.3% |     -2.499 MiB |   0.4% → 0.1% |     3 MiB → 512 KiB |     6 → 1 | `to(Object, Object)`                                 | `kotlin.TuplesKt`                              |
|  -12.1% |     -1.999 MiB |   2.4% → 2.1% | 16.5 MiB → 14.5 MiB |   33 → 29 | `copyOfRangeByte(byte[], int, int)`                  | `java.util.Arrays`                             |
|  -44.4% |     -1.999 MiB |   0.7% → 0.4% |   4.5 MiB → 2.5 MiB |     9 → 5 | `allocateInstance(Object)`                           | `java.lang.invoke.DirectMethodHandle`          |
|  -36.4% |     -1.999 MiB |   0.8% → 0.5% |   5.5 MiB → 3.5 MiB |    11 → 7 | `<init>(int, float, boolean)`                        | `java.util.HashSet`                            |
|  -66.7% | -1,023.998 KiB |   0.2% → 0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `newStringUTF8NoRepl(byte[], int, int, boolean)`     | `java.lang.String`                             |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`   |
|  -66.7% | -1,023.998 KiB |   0.2% → 0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`            |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `makeImpl(Class, Class[], boolean)`                  | `java.lang.invoke.MethodType`                  |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `iterator()`                                         | `java.util.Collections$UnmodifiableCollection` |
|  -66.7% | -1,023.998 KiB |   0.2% → 0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `iterator()`                                         | `java.util.LinkedHashMap$LinkedKeySet`         |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `<init>()`                                           | `java.util.HashSet`                            |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `init(int)`                                          | `java.util.IdentityHashMap`                    |
| removed | -1,023.998 KiB |   0.1% → 0.0% |      1024 KiB → 0 B |     2 → 0 | `resize(int)`                                        | `java.util.IdentityHashMap`                    |
|  -25.0% |   -512.015 KiB |   0.3% → 0.2% |     2 MiB → 1.5 MiB |     4 → 3 | `getBufIfOpen(boolean)`                              | `java.io.BufferedInputStream`                  |

##### Ours

|  Change |          Delta |           % |                Size | Samples | Function                                                                                              | Location                                                                                                           |
| ------: | -------------: | ----------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
|  -90.0% |     -4.499 MiB | 0.7% → 0.1% |     5 MiB → 512 KiB |  10 → 1 | `ensureCapacity()`                                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                                            |
|  -64.3% |     -4.499 MiB | 1.0% → 0.4% |     7 MiB → 2.5 MiB |  14 → 5 | `box-impl(List)`                                                                                      | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                                      |
|  -83.3% |     -2.499 MiB | 0.4% → 0.1% |     3 MiB → 512 KiB |   6 → 1 | `<init>(String)`                                                                                      | `org.jetbrains.kotlin.name.FqName`                                                                                 |
|  -47.8% |     -1.999 MiB | 0.6% → 0.3% | 4.19 MiB → 2.19 MiB |   8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                                  |
|  -80.0% |     -1.999 MiB | 0.4% → 0.1% |   2.5 MiB → 512 KiB |   5 → 1 | `getTypeInternal(String, int, int)`                                                                   | `org.jetbrains.org.objectweb.asm.Type`                                                                             |
|  -42.9% |     -1.499 MiB | 0.5% → 0.3% |     3.5 MiB → 2 MiB |   7 → 4 | `simplifyTrivialInstructions(MethodNode)`                                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`                 |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `allocateStartMarker()`                                                                               | `com.intellij.lang.impl.MarkerPool`                                                                                |
|  -50.0% | -1,023.998 KiB | 0.3% → 0.1% |    2 MiB → 1024 KiB |   4 → 2 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                                       |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `iterator()`                                                                                          | `org.jetbrains.kotlin.utils.SmartList`                                                                             |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)`                 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`                              |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `parseTypeString(CharacterIterator, ClassifierResolutionContext)`                                     | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`                              |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `build()`                                                                                             | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`                                 |
|  -40.0% | -1,023.998 KiB | 0.4% → 0.2% |   2.5 MiB → 1.5 MiB |   5 → 3 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                   | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                                              |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% |   1.5 MiB → 512 KiB |   3 → 1 | `addNewIncorporatedConstraint(TypeVariableMarker, KotlinTypeMarker, ConstraintContext)`               | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% |   1.5 MiB → 512 KiB |   3 → 1 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)`            | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                                                             |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                                    |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `newValue(Type)`                                                                                      | `org.jetbrains.kotlin.codegen.optimization.common.OptimizationBasicInterpreter`                                    |
| removed | -1,023.998 KiB | 0.1% → 0.0% |      1024 KiB → 0 B |   2 → 0 | `getObjectType(String)`                                                                               | `org.jetbrains.org.objectweb.asm.Type`                                                                             |
|  -14.3% |   -511.999 KiB | 0.5% → 0.4% |     3.5 MiB → 3 MiB |   7 → 6 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                             |
| removed |   -511.999 KiB | 0.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                                         | `com.fasterxml.aalto.util.XmlCharTypes`                                                                            |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |            % |                Size |  Samples | Function                                                               | Location                                                                                                 |
| -------: | -----------: | -----------: | ------------------: | -------: | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|      new | +326.391 MiB | 0.0% → 48.1% |       0 B → 326 MiB |  0 → 647 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                                                     |
|      new | +326.391 MiB | 0.0% → 48.1% |       0 B → 326 MiB |  0 → 647 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                                                      |
|   +39.2% |  +15.499 MiB |  5.8% → 8.1% |   39.5 MiB → 55 MiB | 79 → 110 | `parsePartialFrom(InputStream, ExtensionRegistryLite)`                 | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                           |
|   +40.5% |  +14.999 MiB |  5.4% → 7.7% |     37 MiB → 52 MiB | 74 → 104 | `parseFrom(InputStream, ExtensionRegistryLite)`                        | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                           |
|   +37.3% |  +13.999 MiB |  5.5% → 7.6% | 37.5 MiB → 51.5 MiB | 75 → 103 | `readMessage(Parser, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                         |
|      new |  +12.999 MiB |  0.0% → 1.9% |        0 B → 13 MiB |   0 → 26 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000`                                                     |
| +2300.0% |  +11.499 MiB |  0.1% → 1.8% |    512 KiB → 12 MiB |   1 → 24 | `invoke(Object)`                                                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d280`           |
|   +55.6% |   +9.999 MiB |  2.6% → 4.1% |     18 MiB → 28 MiB |  36 → 56 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`            | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                          |
|   +44.4% |   +9.999 MiB |  3.3% → 4.8% | 22.5 MiB → 32.5 MiB |  45 → 65 | `parseFrom(InputStream, ExtensionRegistryLite)`                        | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                         |
|   +28.0% |   +9.999 MiB |  5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformArguments(FirTransformer, Object)`                           | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
|   +28.0% |   +9.999 MiB |  5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformChildren(FirTransformer, Object)`                            | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
|   +28.0% |   +9.999 MiB |  5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformElement(FirElement, Object)`                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|   +28.0% |   +9.999 MiB |  5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformArgumentList(FirArgumentList, Object)`                       | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                       |
|   +28.0% |   +9.999 MiB |  5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transform(FirTransformer, Object)`                                    | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                   |
|   +59.4% |   +9.499 MiB |  2.3% → 3.8% |   16 MiB → 25.5 MiB |  32 → 51 | `<init>(CodedInputStream, ExtensionRegistryLite)`                      | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |
|   +59.4% |   +9.499 MiB |  2.3% → 3.8% |   16 MiB → 25.5 MiB |  32 → 51 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`          | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |
|   +34.6% |   +8.999 MiB |  3.8% → 5.2% |     26 MiB → 35 MiB |  52 → 70 | `<init>(CodedInputStream, ExtensionRegistryLite)`                      | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                        |
|   +34.6% |   +8.999 MiB |  3.8% → 5.2% |     26 MiB → 35 MiB |  52 → 70 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`          | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                        |
|   +33.3% |   +8.999 MiB |  3.9% → 5.3% |     27 MiB → 36 MiB |  54 → 72 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`            | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                                      |
|   +36.0% |   +8.999 MiB |  3.7% → 5.0% |     25 MiB → 34 MiB |  50 → 68 | `readPackageDataFrom(String[], String[])`                              | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                      |

##### Standard library

|  Change |        Delta |             % |              Size |   Samples | Function                                                               | Location                                                    |
| ------: | -----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
|     new | +326.391 MiB |  0.0% → 48.1% |     0 B → 326 MiB |   0 → 647 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`        |
|     new | +326.391 MiB |  0.0% → 48.1% |     0 B → 326 MiB |   0 → 647 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`         |
|     new |  +12.999 MiB |   0.0% → 1.9% |      0 B → 13 MiB |    0 → 26 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000`        |
|  +18.3% |   +7.499 MiB |   6.0% → 7.1% | 41 MiB → 48.5 MiB |   82 → 97 | `clone()`                                                              | `java.lang.Object`                                          |
|   +1.6% |   +4.999 MiB | 47.0% → 48.1% | 321 MiB → 326 MiB | 637 → 647 | `invokeExact_MT(Object, Object, Object, Object)`                       | `java.lang.invoke.Invokers$Holder`                          |
|   +1.6% |   +4.999 MiB | 47.0% → 48.1% | 321 MiB → 326 MiB | 637 → 647 | `invokeImpl(Object, Object[])`                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`           |
|   +1.6% |   +4.999 MiB | 47.0% → 48.1% | 321 MiB → 326 MiB | 637 → 647 | `invoke(Object, Object[])`                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`           |
|   +1.6% |   +4.999 MiB | 47.0% → 48.1% | 321 MiB → 326 MiB | 637 → 647 | `invoke(Object, Object[])`                                             | `java.lang.reflect.Method`                                  |
| +250.0% |   +4.999 MiB |   0.3% → 1.0% |     2 MiB → 7 MiB |    4 → 14 | `<init>(int)`                                                          | `java.lang.AbstractStringBuilder`                           |
| +266.7% |   +3.999 MiB |   0.2% → 0.8% | 1.5 MiB → 5.5 MiB |    3 → 11 | `addConstantMemberReference(int, String, String, String)`              | `jdk.internal.org.objectweb.asm.SymbolTable`                |
| +400.0% |   +3.999 MiB |   0.1% → 0.7% |  1024 KiB → 5 MiB |    2 → 10 | `addConstantMethodref(String, String, String, boolean)`                | `jdk.internal.org.objectweb.asm.SymbolTable`                |
|   +1.9% |   +3.499 MiB | 26.7% → 27.4% | 182 MiB → 186 MiB | 365 → 372 | `copyOf(byte[], int)`                                                  | `java.util.Arrays`                                          |
|  +77.8% |   +3.499 MiB |   0.7% → 1.2% |   4.5 MiB → 8 MiB |    9 → 16 | `invoke()`                                                             | `kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal` |
|  +77.8% |   +3.499 MiB |   0.7% → 1.2% |   4.5 MiB → 8 MiB |    9 → 16 | `getValue(Object, Object)`                                             | `kotlin.reflect.jvm.internal.ReflectProperties$Val`         |
| +700.0% |   +3.499 MiB |   0.1% → 0.6% |   512 KiB → 4 MiB |     1 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`            | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1` |
| +233.3% |   +3.499 MiB |   0.2% → 0.7% |   1.5 MiB → 5 MiB |    3 → 10 | `visitMethodInsn(int, String, String, String, boolean)`                | `jdk.internal.org.objectweb.asm.MethodWriter`               |
| +116.7% |   +3.499 MiB |   0.4% → 1.0% |   3 MiB → 6.5 MiB |    6 → 13 | `<init>(int)`                                                          | `kotlin.collections.builders.MapBuilder`                    |
| +116.7% |   +3.499 MiB |   0.4% → 1.0% |   3 MiB → 6.5 MiB |    6 → 13 | `<init>()`                                                             | `kotlin.collections.builders.MapBuilder`                    |
|     new |   +3.499 MiB |   0.0% → 0.5% |     0 B → 3.5 MiB |     0 → 7 | `<init>(CodedInputStream, ExtensionRegistryLite)`                      | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`   |
|     new |   +3.499 MiB |   0.0% → 0.5% |     0 B → 3.5 MiB |     0 → 7 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`          | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`   |

##### Ours

|   Change |       Delta |           % |                Size |  Samples | Function                                                                                                      | Location                                                                                                 |
| -------: | ----------: | ----------: | ------------------: | -------: | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|   +39.2% | +15.499 MiB | 5.8% → 8.1% |   39.5 MiB → 55 MiB | 79 → 110 | `parsePartialFrom(InputStream, ExtensionRegistryLite)`                                                        | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                           |
|   +40.5% | +14.999 MiB | 5.4% → 7.7% |     37 MiB → 52 MiB | 74 → 104 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                               | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                           |
|   +37.3% | +13.999 MiB | 5.5% → 7.6% | 37.5 MiB → 51.5 MiB | 75 → 103 | `readMessage(Parser, ExtensionRegistryLite)`                                                                  | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                         |
| +2300.0% | +11.499 MiB | 0.1% → 1.8% |    512 KiB → 12 MiB |   1 → 24 | `invoke(Object)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d280`           |
|   +55.6% |  +9.999 MiB | 2.6% → 4.1% |     18 MiB → 28 MiB |  36 → 56 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                          |
|   +44.4% |  +9.999 MiB | 3.3% → 4.8% | 22.5 MiB → 32.5 MiB |  45 → 65 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                               | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                         |
|   +28.0% |  +9.999 MiB | 5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformArguments(FirTransformer, Object)`                                                                  | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
|   +28.0% |  +9.999 MiB | 5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformChildren(FirTransformer, Object)`                                                                   | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
|   +28.0% |  +9.999 MiB | 5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformElement(FirElement, Object)`                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|   +28.0% |  +9.999 MiB | 5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transformArgumentList(FirArgumentList, Object)`                                                              | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                       |
|   +28.0% |  +9.999 MiB | 5.2% → 6.7% | 35.7 MiB → 45.7 MiB |  71 → 91 | `transform(FirTransformer, Object)`                                                                           | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                   |
|   +59.4% |  +9.499 MiB | 2.3% → 3.8% |   16 MiB → 25.5 MiB |  32 → 51 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |
|   +59.4% |  +9.499 MiB | 2.3% → 3.8% |   16 MiB → 25.5 MiB |  32 → 51 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                            |
|   +34.6% |  +8.999 MiB | 3.8% → 5.2% |     26 MiB → 35 MiB |  52 → 70 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                        |
|   +34.6% |  +8.999 MiB | 3.8% → 5.2% |     26 MiB → 35 MiB |  52 → 70 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                                        |
|   +33.3% |  +8.999 MiB | 3.9% → 5.3% |     27 MiB → 36 MiB |  54 → 72 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                                      |
|   +36.0% |  +8.999 MiB | 3.7% → 5.0% |     25 MiB → 34 MiB |  50 → 68 | `readPackageDataFrom(String[], String[])`                                                                     | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                      |
|   +26.3% |  +8.999 MiB | 5.0% → 6.4% | 34.2 MiB → 43.2 MiB |  68 → 86 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|   +34.0% |  +8.499 MiB | 3.7% → 4.9% |   25 MiB → 33.5 MiB |  50 → 67 | `readPackageDataFrom(byte[], String[])`                                                                       | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                      |
|   +37.8% |  +8.499 MiB | 3.3% → 4.6% |   22.5 MiB → 31 MiB |  45 → 62 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                         |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                                                           | Location                                                                                                                  |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| removed | -321.391 MiB |  47.0% → 0.0% |       321 MiB → 0 B |   637 → 0 | `invokeStatic(Object, Object)`                                                                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000`                                                                      |
| removed | -321.391 MiB |  47.0% → 0.0% |       321 MiB → 0 B |   637 → 0 | `invoke(Object, Object, Object)`                                                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`                                                                       |
|  -16.0% |  -12.499 MiB |  11.4% → 9.7% |   78 MiB → 65.5 MiB | 156 → 131 | `transformFunctionCall(FirFunctionCall, ResolutionMode)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -16.0% |  -12.499 MiB |  11.4% → 9.7% |   78 MiB → 65.5 MiB | 156 → 131 | `transformFunctionCall(FirFunctionCall, Object)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|   -6.9% |  -11.999 MiB | 25.5% → 24.0% |   175 MiB → 163 MiB | 349 → 325 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                   | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                            |
|  -88.9% |  -11.999 MiB |   2.0% → 0.2% |  13.5 MiB → 1.5 MiB |    27 → 3 | `invoke(Object)`                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d4b8`                            |
| removed |  -10.999 MiB |   1.6% → 0.0% |        11 MiB → 0 B |    22 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                                                                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801230000`                                                                      |
|  -14.0% |  -10.999 MiB |  11.5% → 9.9% | 78.5 MiB → 67.5 MiB | 157 → 135 | `transformFunctionCall(FirFunctionCall, ResolutionMode)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -14.0% |  -10.999 MiB |  11.5% → 9.9% | 78.5 MiB → 67.5 MiB | 157 → 135 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                                    |
|   -2.9% |  -10.313 MiB | 52.9% → 51.8% |   361 MiB → 351 MiB | 723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|   -2.9% |  -10.313 MiB | 52.9% → 51.8% |   361 MiB → 351 MiB | 723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|   -9.3% |   -9.999 MiB | 15.7% → 14.4% |  107 MiB → 97.5 MiB | 215 → 195 | `processFile(FirFile)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                                       |
|   -5.7% |   -9.813 MiB | 25.0% → 23.8% |   171 MiB → 161 MiB | 342 → 322 | `<init>(int)`                                                                                                                                      | `java.io.ByteArrayOutputStream`                                                                                           |
|   -8.9% |   -8.999 MiB | 14.8% → 13.6% |  101 MiB → 92.5 MiB | 203 → 185 | `transformChildren(FirTransformer, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
|  -10.7% |   -8.999 MiB | 12.4% → 11.1% | 84.5 MiB → 75.5 MiB | 169 → 151 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|   -8.0% |   -8.499 MiB | 15.5% → 14.4% |  106 MiB → 97.5 MiB | 212 → 195 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                                  |
|   -8.8% |   -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|   -8.8% |   -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|   -8.8% |   -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|   -8.8% |   -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `invoke()`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001653eb8` |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                               | Location                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| removed | -321.391 MiB |  47.0% → 0.0% |       321 MiB → 0 B |   637 → 0 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000`  |
| removed | -321.391 MiB |  47.0% → 0.0% |       321 MiB → 0 B |   637 → 0 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`   |
| removed |  -10.999 MiB |   1.6% → 0.0% |        11 MiB → 0 B |    22 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000801230000`  |
|   -5.7% |   -9.813 MiB | 25.0% → 23.8% |   171 MiB → 161 MiB | 342 → 322 | `<init>(int)`                                                          | `java.io.ByteArrayOutputStream`                       |
|  -41.7% |   -7.499 MiB |   2.6% → 1.5% |   18 MiB → 10.5 MiB |   36 → 21 | `putVal(int, Object, Object, boolean, boolean)`                        | `java.util.HashMap`                                   |
|  -41.7% |   -7.499 MiB |   2.6% → 1.5% |   18 MiB → 10.5 MiB |   36 → 21 | `put(Object, Object)`                                                  | `java.util.HashMap`                                   |
|  -10.8% |   -6.499 MiB |   8.8% → 7.9% |   60 MiB → 53.5 MiB | 120 → 107 | `resumeWith(Object)`                                                   | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  -61.1% |   -5.499 MiB |   1.3% → 0.5% |     9 MiB → 3.5 MiB |    18 → 7 | `resize()`                                                             | `java.util.HashMap`                                   |
|  -66.7% |   -3.999 MiB |   0.9% → 0.3% |       6 MiB → 2 MiB |    12 → 4 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                       | `java.lang.String`                                    |
|  -66.7% |   -3.999 MiB |   0.9% → 0.3% |       6 MiB → 2 MiB |    12 → 4 | `newStringUTF8NoRepl(byte[], int, int)`                                | `java.lang.System$2`                                  |
|  -66.7% |   -3.999 MiB |   0.9% → 0.3% |       6 MiB → 2 MiB |    12 → 4 | `toString(byte[], int, int)`                                           | `java.util.zip.ZipCoder$UTF8ZipCoder`                 |
|  -66.7% |   -3.999 MiB |   0.9% → 0.3% |       6 MiB → 2 MiB |    12 → 4 | `toStringUTF8(byte[], int)`                                            | `java.util.zip.ZipCoder`                              |
|  -19.0% |   -3.999 MiB |   3.1% → 2.5% |     21 MiB → 17 MiB |   42 → 34 | `iterator()`                                                           | `java.util.ArrayList`                                 |
|  -11.6% |   -2.499 MiB |   3.1% → 2.8% |   21.5 MiB → 19 MiB |   43 → 38 | `getValue()`                                                           | `kotlin.SynchronizedLazyImpl`                         |
|  -35.7% |   -2.499 MiB |   1.0% → 0.7% |     7 MiB → 4.5 MiB |    14 → 9 | `newNode(int, Object, Object, HashMap$Node)`                           | `java.util.LinkedHashMap`                             |
|  -23.8% |   -2.499 MiB |   1.5% → 1.2% |    10.5 MiB → 8 MiB |   21 → 16 | `getValue()`                                                           | `kotlin.UnsafeLazyImpl`                               |
|  -83.3% |   -2.499 MiB |   0.4% → 0.1% |     3 MiB → 512 KiB |     6 → 1 | `to(Object, Object)`                                                   | `kotlin.TuplesKt`                                     |
|  -12.1% |   -1.999 MiB |   2.4% → 2.1% | 16.5 MiB → 14.5 MiB |   33 → 29 | `copyOfRangeByte(byte[], int, int)`                                    | `java.util.Arrays`                                    |
|  -21.1% |   -1.999 MiB |   1.4% → 1.1% |   9.5 MiB → 7.5 MiB |   19 → 15 | `substring(int, int)`                                                  | `java.lang.String`                                    |
|  -36.4% |   -1.999 MiB |   0.8% → 0.5% |   5.5 MiB → 3.5 MiB |    11 → 7 | `<init>(int, float, boolean)`                                          | `java.util.HashSet`                                   |

##### Ours

| Change |       Delta |             % |                Size |   Samples | Function                                                                                                                                           | Location                                                                                                                  |
| -----: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| -16.0% | -12.499 MiB |  11.4% → 9.7% |   78 MiB → 65.5 MiB | 156 → 131 | `transformFunctionCall(FirFunctionCall, ResolutionMode)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| -16.0% | -12.499 MiB |  11.4% → 9.7% |   78 MiB → 65.5 MiB | 156 → 131 | `transformFunctionCall(FirFunctionCall, Object)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -6.9% | -11.999 MiB | 25.5% → 24.0% |   175 MiB → 163 MiB | 349 → 325 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                   | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                            |
| -88.9% | -11.999 MiB |   2.0% → 0.2% |  13.5 MiB → 1.5 MiB |    27 → 3 | `invoke(Object)`                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d4b8`                            |
| -14.0% | -10.999 MiB |  11.5% → 9.9% | 78.5 MiB → 67.5 MiB | 157 → 135 | `transformFunctionCall(FirFunctionCall, ResolutionMode)`                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| -14.0% | -10.999 MiB |  11.5% → 9.9% | 78.5 MiB → 67.5 MiB | 157 → 135 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                                    |
|  -2.9% | -10.313 MiB | 52.9% → 51.8% |   361 MiB → 351 MiB | 723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|  -2.9% | -10.313 MiB | 52.9% → 51.8% |   361 MiB → 351 MiB | 723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|  -9.3% |  -9.999 MiB | 15.7% → 14.4% |  107 MiB → 97.5 MiB | 215 → 195 | `processFile(FirFile)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                                       |
|  -8.9% |  -8.999 MiB | 14.8% → 13.6% |  101 MiB → 92.5 MiB | 203 → 185 | `transformChildren(FirTransformer, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
| -10.7% |  -8.999 MiB | 12.4% → 11.1% | 84.5 MiB → 75.5 MiB | 169 → 151 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -8.0% |  -8.499 MiB | 15.5% → 14.4% |  106 MiB → 97.5 MiB | 212 → 195 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                                  |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `invoke()`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001653eb8` |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `doTransformFile(FirFile, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformFile(FirFile, ResolutionMode)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformFile(FirFile, ResolutionMode)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -8.8% |  -8.499 MiB | 14.1% → 13.0% |   96.5 MiB → 88 MiB | 193 → 176 | `transformFile(FirFile, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
