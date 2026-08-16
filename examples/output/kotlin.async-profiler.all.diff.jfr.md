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

Allocated 25.5 MiB → 24.1 MiB (-1.459 MiB, -5.7%) over 1,362 samples → 1,351 samples (19.2 KiB → 18.2 KiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Standard library |  -6.4% |  -1.539 MiB | 93.8% → 93.1% |   24 MiB → 22.4 MiB | 1,051 → 1,025 |
| Ours             |  +5.1% | +81.515 KiB |   6.2% → 6.9% | 1.57 MiB → 1.65 MiB |     311 → 326 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |        Delta |             % |                Size |   Samples | Function                                                                        | Location                                                                       |
| --------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|    +23.8% |     +440 KiB |   7.1% → 9.3% |  1.8 MiB → 2.23 MiB |   82 → 97 | `clone()`                                                                       | `java.lang.Object`                                                             |
|   +434.2% | +343.609 KiB |   0.3% → 1.7% |  79.1 KiB → 423 KiB |     2 → 4 | `readBootstrapMethodsAttribute(int)`                                            | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|       new | +144.664 KiB |   0.0% → 0.6% |       0 B → 145 KiB |     0 → 4 | `read(InputStream, int)`                                                        | `java.nio.file.Files`                                                          |
|     +2.0% | +127.414 KiB | 24.9% → 26.9% | 6.34 MiB → 6.47 MiB | 285 → 275 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                             |
|    +25.6% |  +54.929 KiB |   0.8% → 1.1% |   215 KiB → 270 KiB |         5 | `accept(ClassVisitor, Attribute[], int)`                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|   +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getBufferBytes(ByteBuffer)`                                                    | `jdk.internal.jimage.BasicImageReader`                                         |
|    +41.7% |  +41.609 KiB |   0.4% → 0.6% |  99.7 KiB → 141 KiB |     2 → 5 | `getBytes(int, int)`                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping` |
|       new |  +19.453 KiB |   0.0% → 0.1% |      0 B → 19.5 KiB |     0 → 1 | `<init>(int)`                                                                   | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
| +70633.3% |  +16.554 KiB |  <0.1% → 0.1% |     24 B → 16.6 KiB |     1 → 2 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                                        |
|   +133.3% |  +16.062 KiB |  <0.1% → 0.1% |   12 KiB → 28.1 KiB |     3 → 7 | `<init>(InputStream)`                                                           | `org.jetbrains.kotlin.protobuf.CodedInputStream`                               |
|       new |  +16.015 KiB |   0.0% → 0.1% |        0 B → 16 KiB |     0 → 1 | `enlarge(int)`                                                                  | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
|  +1491.5% |  +15.031 KiB |  <0.1% → 0.1% |   1.01 KiB → 16 KiB |         4 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                                             |
|       new |  +14.796 KiB |   0.0% → 0.1% |      0 B → 14.8 KiB |     0 → 2 | `forceCapacity(int[], int, int)`                                                | `it.unimi.dsi.fastutil.ints.IntArrays`                                         |
|       new |   +8.843 KiB |  0.0% → <0.1% |      0 B → 8.84 KiB |     0 → 1 | `<init>(CharSequence, Lexer)`                                                   | `com.intellij.lang.impl.TokenSequence$Builder`                                 |
|  +1567.7% |   +3.796 KiB |         <0.1% |    248 B → 4.04 KiB |     3 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                        |
|       new |   +2.562 KiB |  0.0% → <0.1% |      0 B → 2.56 KiB |     0 → 2 | `<init>(byte[], int, boolean)`                                                  | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|    +30.1% |   +1.765 KiB |         <0.1% | 5.86 KiB → 7.63 KiB |     7 → 8 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                                    |
|   +583.3% |   +1.093 KiB |         <0.1% |    192 B → 1.28 KiB |     1 → 4 | `toArray()`                                                                     | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                |
|       new |   +1.015 KiB |  0.0% → <0.1% |      0 B → 1.02 KiB |     0 → 1 | `<init>()`                                                                      | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`      |
|    +22.0% |       +912 B |         <0.1% | 4.05 KiB → 4.95 KiB |   38 → 41 | `<init>(int)`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`                              |

##### Standard library

|    Change |        Delta |             % |                Size |   Samples | Function                                                                        | Location                                                      |
| --------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|    +23.8% |     +440 KiB |   7.1% → 9.3% |  1.8 MiB → 2.23 MiB |   82 → 97 | `clone()`                                                                       | `java.lang.Object`                                            |
|       new | +144.664 KiB |   0.0% → 0.6% |       0 B → 145 KiB |     0 → 4 | `read(InputStream, int)`                                                        | `java.nio.file.Files`                                         |
|     +2.0% | +127.414 KiB | 24.9% → 26.9% | 6.34 MiB → 6.47 MiB | 285 → 275 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                            |
|   +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getBufferBytes(ByteBuffer)`                                                    | `jdk.internal.jimage.BasicImageReader`                        |
| +70633.3% |  +16.554 KiB |  <0.1% → 0.1% |     24 B → 16.6 KiB |     1 → 2 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                       |
|  +1491.5% |  +15.031 KiB |  <0.1% → 0.1% |   1.01 KiB → 16 KiB |         4 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                            |
|  +1567.7% |   +3.796 KiB |         <0.1% |    248 B → 4.04 KiB |     3 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                       |
|    +30.1% |   +1.765 KiB |         <0.1% | 5.86 KiB → 7.63 KiB |     7 → 8 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                   |
|   +150.0% |       +528 B |         <0.1% |       352 B → 880 B |    4 → 10 | `createZipEntry(String)`                                                        | `java.util.zip.ZipInputStream`                                |
|   +207.7% |       +432 B |         <0.1% |       208 B → 640 B |    4 → 14 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`                             |
|       new |       +288 B |  0.0% → <0.1% |         0 B → 288 B |     0 → 1 | `getDeclaredConstructors0(boolean)`                                             | `java.lang.Class`                                             |
|    +73.9% |       +272 B |         <0.1% |       368 B → 640 B |    5 → 10 | `<init>(int)`                                                                   | `kotlin.collections.builders.MapBuilder`                      |
|    +41.5% |       +176 B |         <0.1% |       424 B → 600 B |     5 → 9 | `allocateUninitializedArray(Class, int)`                                        | `jdk.internal.misc.Unsafe`                                    |
|   +300.0% |       +168 B |         <0.1% |        56 B → 224 B |     1 → 4 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable`                  |
|       new |       +160 B |  0.0% → <0.1% |         0 B → 160 B |     0 → 2 | `decompress(ByteBuffer, int)`                                                   | `jdk.internal.jimage.ImageLocation`                           |
|       new |       +144 B |  0.0% → <0.1% |         0 B → 144 B |     0 → 1 | `sizeCache(int)`                                                                | `java.lang.ClassValue$ClassValueMap`                          |
|       new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |     0 → 4 | `newInstance(OutputStream, int)`                                                | `kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream` |
|    +50.0% |       +104 B |         <0.1% |       208 B → 312 B |     4 → 6 | `arrayOfUninitializedElements(int)`                                             | `kotlin.collections.builders.ListBuilderKt`                   |
|       new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |     0 → 1 | `<init>()`                                                                      | `kotlin.collections.builders.SetBuilder`                      |
|       new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |     0 → 1 | `mutableMapOf(Pair[])`                                                          | `kotlin.collections.MapsKt__MapsKt`                           |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                                                                                                                    | Location                                                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| +434.2% | +343.609 KiB |  0.3% → 1.7% |  79.1 KiB → 423 KiB |   2 → 4 | `readBootstrapMethodsAttribute(int)`                                                                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  +25.6% |  +54.929 KiB |  0.8% → 1.1% |   215 KiB → 270 KiB |       5 | `accept(ClassVisitor, Attribute[], int)`                                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  +41.7% |  +41.609 KiB |  0.4% → 0.6% |  99.7 KiB → 141 KiB |   2 → 5 | `getBytes(int, int)`                                                                                                        | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping` |
|     new |  +19.453 KiB |  0.0% → 0.1% |      0 B → 19.5 KiB |   0 → 1 | `<init>(int)`                                                                                                               | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
| +133.3% |  +16.062 KiB | <0.1% → 0.1% |   12 KiB → 28.1 KiB |   3 → 7 | `<init>(InputStream)`                                                                                                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                               |
|     new |  +16.015 KiB |  0.0% → 0.1% |        0 B → 16 KiB |   0 → 1 | `enlarge(int)`                                                                                                              | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
|     new |  +14.796 KiB |  0.0% → 0.1% |      0 B → 14.8 KiB |   0 → 2 | `forceCapacity(int[], int, int)`                                                                                            | `it.unimi.dsi.fastutil.ints.IntArrays`                                         |
|     new |   +8.843 KiB | 0.0% → <0.1% |      0 B → 8.84 KiB |   0 → 1 | `<init>(CharSequence, Lexer)`                                                                                               | `com.intellij.lang.impl.TokenSequence$Builder`                                 |
|     new |   +2.562 KiB | 0.0% → <0.1% |      0 B → 2.56 KiB |   0 → 2 | `<init>(byte[], int, boolean)`                                                                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
| +583.3% |   +1.093 KiB |        <0.1% |    192 B → 1.28 KiB |   1 → 4 | `toArray()`                                                                                                                 | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                |
|     new |   +1.015 KiB | 0.0% → <0.1% |      0 B → 1.02 KiB |   0 → 1 | `<init>()`                                                                                                                  | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`      |
|  +22.0% |       +912 B |        <0.1% | 4.05 KiB → 4.95 KiB | 38 → 41 | `<init>(int)`                                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                              |
|     new |       +640 B | 0.0% → <0.1% |         0 B → 640 B |   0 → 1 | `stringsToBytes(String[])`                                                                                                  | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`              |
|  +41.9% |       +352 B |        <0.1% |    840 B → 1.16 KiB |  9 → 13 | `<init>(int, int)`                                                                                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                          |
| +450.0% |       +288 B |        <0.1% |        64 B → 352 B |  2 → 11 | `newOutput()`                                                                                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                     |
|  +75.0% |       +288 B |        <0.1% |       384 B → 672 B |   4 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                |
|     new |       +224 B | 0.0% → <0.1% |         0 B → 224 B |   0 → 1 | `visitMethod(int, String, String, String, String[])`                                                                        | `org.jetbrains.org.objectweb.asm.ClassWriter`                                  |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |   2 → 5 | `getLabel()`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                               |
|     new |       +144 B | 0.0% → <0.1% |         0 B → 144 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                      |
|     new |       +144 B | 0.0% → <0.1% |         0 B → 144 B |   0 → 1 | `createCandidate(CallInfo, FirBasedSymbol, ExplicitReceiverKind, FirScope, FirExpression, FirExpression, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory`            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |   Samples | Function                                                                              | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                                                                         | `java.io.ByteArrayOutputStream`                                   |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `getBufIfOpen(boolean)`                                                               | `java.io.BufferedInputStream`                                     |
|  -36.8% | -435.531 KiB |   4.5% → 3.0% |  1.16 MiB → 749 KiB |     8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
|  -99.9% |  -416.57 KiB |  1.6% → <0.1% |     417 KiB → 560 B |    18 → 7 | `resize()`                                                                            | `java.util.HashMap`                                               |
|   -1.0% |  -40.179 KiB | 15.5% → 16.3% | 3.96 MiB → 3.92 MiB |         5 | `initCEN(int, ZipCoder)`                                                              | `java.util.zip.ZipFile$Source`                                    |
|  -72.1% |  -38.984 KiB |   0.2% → 0.1% | 54.1 KiB → 15.1 KiB |     3 → 1 | `<init>(InputStream, Inflater, int)`                                                  | `java.util.zip.InflaterInputStream`                               |
|  -89.3% |  -29.304 KiB |  0.1% → <0.1% |  32.8 KiB → 3.5 KiB |    10 → 9 | `copyOf(Object[], int)`                                                               | `java.util.Arrays`                                                |
| removed |   -8.015 KiB |  <0.1% → 0.0% |      8.02 KiB → 0 B |     1 → 0 | `<init>(InputStream, int)`                                                            | `java.util.jar.Manifest$FastInputStream`                          |
|  -73.0% |   -5.851 KiB |         <0.1% | 8.02 KiB → 2.16 KiB |     1 → 2 | `read(ByteBuffer)`                                                                    | `java.nio.channels.Channels$ReadableByteChannelImpl`              |
|  -95.8% |   -4.312 KiB |         <0.1% |     4.5 KiB → 192 B |     4 → 6 | `<init>(int)`                                                                         | `java.util.ArrayList`                                             |
|  -86.4% |   -2.234 KiB |         <0.1% |    2.59 KiB → 360 B |    7 → 13 | `newInstance(OutputStream, int)`                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                 |
| removed |   -1.093 KiB |  <0.1% → 0.0% |      1.09 KiB → 0 B |     2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`   |
| removed |   -1.031 KiB |  <0.1% → 0.0% |      1.03 KiB → 0 B |     2 → 0 | `resize(int)`                                                                         | `java.util.IdentityHashMap`                                       |
|  -20.0% |   -1.015 KiB |         <0.1% | 5.08 KiB → 4.06 KiB |     5 → 4 | `<init>(ClassWriter)`                                                                 | `jdk.internal.org.objectweb.asm.SymbolTable`                      |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(int)`                                                                         | `com.fasterxml.aalto.util.XmlCharTypes`                           |
| removed |       -544 B |  <0.1% → 0.0% |         544 B → 0 B |     2 → 0 | `init(int)`                                                                           | `java.util.IdentityHashMap`                                       |
|  -90.0% |       -504 B |         <0.1% |        560 B → 56 B |    10 → 1 | `ensureCapacity()`                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`           |
| removed |       -448 B |  <0.1% → 0.0% |         448 B → 0 B |     2 → 0 | `visitMethod(int, String, String, String, String[])`                                  | `jdk.internal.org.objectweb.asm.ClassWriter`                      |
|  -19.0% |       -256 B |         <0.1% | 1.31 KiB → 1.06 KiB |   42 → 34 | `iterator()`                                                                          | `java.util.ArrayList`                                             |
|  -36.4% |       -256 B |         <0.1% |       704 B → 448 B |    11 → 7 | `<init>(int, float, boolean)`                                                         | `java.util.HashSet`                                               |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                             | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                                                                                        | `java.io.ByteArrayOutputStream`                      |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `getBufIfOpen(boolean)`                                                                              | `java.io.BufferedInputStream`                        |
|  -99.9% |  -416.57 KiB |  1.6% → <0.1% |     417 KiB → 560 B |    18 → 7 | `resize()`                                                                                           | `java.util.HashMap`                                  |
|   -1.0% |  -40.179 KiB | 15.5% → 16.3% | 3.96 MiB → 3.92 MiB |         5 | `initCEN(int, ZipCoder)`                                                                             | `java.util.zip.ZipFile$Source`                       |
|  -72.1% |  -38.984 KiB |   0.2% → 0.1% | 54.1 KiB → 15.1 KiB |     3 → 1 | `<init>(InputStream, Inflater, int)`                                                                 | `java.util.zip.InflaterInputStream`                  |
|  -89.3% |  -29.304 KiB |  0.1% → <0.1% |  32.8 KiB → 3.5 KiB |    10 → 9 | `copyOf(Object[], int)`                                                                              | `java.util.Arrays`                                   |
| removed |   -8.015 KiB |  <0.1% → 0.0% |      8.02 KiB → 0 B |     1 → 0 | `<init>(InputStream, int)`                                                                           | `java.util.jar.Manifest$FastInputStream`             |
|  -73.0% |   -5.851 KiB |         <0.1% | 8.02 KiB → 2.16 KiB |     1 → 2 | `read(ByteBuffer)`                                                                                   | `java.nio.channels.Channels$ReadableByteChannelImpl` |
|  -95.8% |   -4.312 KiB |         <0.1% |     4.5 KiB → 192 B |     4 → 6 | `<init>(int)`                                                                                        | `java.util.ArrayList`                                |
| removed |   -1.031 KiB |  <0.1% → 0.0% |      1.03 KiB → 0 B |     2 → 0 | `resize(int)`                                                                                        | `java.util.IdentityHashMap`                          |
|  -20.0% |   -1.015 KiB |         <0.1% | 5.08 KiB → 4.06 KiB |     5 → 4 | `<init>(ClassWriter)`                                                                                | `jdk.internal.org.objectweb.asm.SymbolTable`         |
| removed |       -544 B |  <0.1% → 0.0% |         544 B → 0 B |     2 → 0 | `init(int)`                                                                                          | `java.util.IdentityHashMap`                          |
| removed |       -448 B |  <0.1% → 0.0% |         448 B → 0 B |     2 → 0 | `visitMethod(int, String, String, String, String[])`                                                 | `jdk.internal.org.objectweb.asm.ClassWriter`         |
|  -19.0% |       -256 B |         <0.1% | 1.31 KiB → 1.06 KiB |   42 → 34 | `iterator()`                                                                                         | `java.util.ArrayList`                                |
|  -36.4% |       -256 B |         <0.1% |       704 B → 448 B |    11 → 7 | `<init>(int, float, boolean)`                                                                        | `java.util.HashSet`                                  |
|  -35.7% |       -200 B |         <0.1% |       560 B → 360 B |    14 → 9 | `newNode(int, Object, Object, HashMap$Node)`                                                         | `java.util.LinkedHashMap`                            |
| removed |       -160 B |  <0.1% → 0.0% |         160 B → 0 B |     1 → 0 | `resolve(byte[], byte[])`                                                                            | `sun.nio.fs.UnixPath`                                |
|  -55.6% |       -120 B |         <0.1% |        216 B → 96 B |     9 → 4 | `newString(byte[], int, int)`                                                                        | `java.lang.StringLatin1`                             |
|  -83.3% |       -120 B |         <0.1% |        144 B → 24 B |     6 → 1 | `to(Object, Object)`                                                                                 | `kotlin.TuplesKt`                                    |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |     1 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                              |

##### Ours

|  Change |        Delta |            % |               Size | Samples | Function                                                                                                                                                                                                                                                                                                                                            | Location                                                                                |
| ------: | -----------: | -----------: | -----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  -36.8% | -435.531 KiB |  4.5% → 3.0% | 1.16 MiB → 749 KiB |   8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                       |
|  -86.4% |   -2.234 KiB |        <0.1% |   2.59 KiB → 360 B |  7 → 13 | `newInstance(OutputStream, int)`                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                       |
| removed |   -1.093 KiB | <0.1% → 0.0% |     1.09 KiB → 0 B |   2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                                                                                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                         |
| removed |   -1.015 KiB | <0.1% → 0.0% |     1.02 KiB → 0 B |   1 → 0 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `com.fasterxml.aalto.util.XmlCharTypes`                                                 |
|  -90.0% |       -504 B |        <0.1% |       560 B → 56 B |  10 → 1 | `ensureCapacity()`                                                                                                                                                                                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                 |
|  -83.3% |       -160 B |        <0.1% |       192 B → 32 B |   6 → 1 | `<init>(String)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.name.FqName`                                                      |
|  -64.3% |       -144 B |        <0.1% |       224 B → 80 B |  14 → 5 | `box-impl(List)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                           |
| removed |       -136 B | <0.1% → 0.0% |        136 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Property$1`                                     |
|  -80.0% |       -128 B |        <0.1% |       160 B → 32 B |   5 → 1 | `getTypeInternal(String, int, int)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.org.objectweb.asm.Type`                                                  |
| removed |       -112 B | <0.1% → 0.0% |        112 B → 0 B |   1 → 0 | `createCopyForFirProperty(FirPropertySymbol, FirProperty, ConeClassLikeLookupTag, FirSession, FirDeclarationOrigin, boolean, ConeSimpleKotlinType, List, ConeKotlinType, List, ConeKotlinType, Modality, Visibility, Visibility, DeferredCallableCopyReturnType, KtSourceElement, FirBackingField, ConeKotlinType, DeferredCallableCopyReturnType)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`                         |
| removed |       -112 B | <0.1% → 0.0% |        112 B → 0 B |   1 → 0 | `buildPartial()`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$Builder`                               |
| removed |        -96 B | <0.1% → 0.0% |         96 B → 0 B |   2 → 0 | `allocateStartMarker()`                                                                                                                                                                                                                                                                                                                             | `com.intellij.lang.impl.MarkerPool`                                                     |
|  -41.4% |        -96 B |        <0.1% |      232 B → 136 B |   4 → 2 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)`                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`            |
|  -40.0% |        -96 B |        <0.1% |      240 B → 144 B |   5 → 3 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                   |
|  -50.0% |        -88 B |        <0.1% |       176 B → 88 B |   2 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`                    |
| removed |        -88 B | <0.1% → 0.0% |         88 B → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes`                        |
| removed |        -88 B | <0.1% → 0.0% |         88 B → 0 B |   1 → 0 | `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`            |
| removed |        -80 B | <0.1% → 0.0% |         80 B → 0 B |   1 → 0 | `invokeSuspend(Object)`                                                                                                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.compiler.CoreEnvironmentUtilsKt$allSourceFilesSequence$1` |
| removed |        -80 B | <0.1% → 0.0% |         80 B → 0 B |   1 → 0 | `createConstraintSystem(Function2)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents`                        |
| removed |        -80 B | <0.1% → 0.0% |         80 B → 0 B |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCallableReferences`        |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                                                           | Location                                                                                                 |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|     new |   +5.907 MiB |  0.0% → 24.5% |      0 B → 5.91 MiB |   0 → 647 | `invokeStatic(Object, Object)`                                                                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                                                     |
|     new |   +5.907 MiB |  0.0% → 24.5% |      0 B → 5.91 MiB |   0 → 647 | `invoke(Object, Object, Object)`                                                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                                                      |
|   +6.8% | +567.484 KiB | 31.9% → 36.2% |  8.15 MiB → 8.7 MiB | 365 → 372 | `copyOf(byte[], int)`                                                                                                                              | `java.util.Arrays`                                                                                       |
|   +6.3% | +522.984 KiB | 31.9% → 35.9% | 8.14 MiB → 8.65 MiB | 348 → 353 | `toByteArray()`                                                                                                                                    | `java.io.ByteArrayOutputStream`                                                                          |
|  +23.8% |     +440 KiB |   7.1% → 9.3% |  1.8 MiB → 2.23 MiB |   82 → 97 | `clone()`                                                                                                                                          | `java.lang.Object`                                                                                       |
| +437.4% | +346.171 KiB |   0.3% → 1.7% |  79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[], int, boolean)`                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +437.4% | +346.171 KiB |   0.3% → 1.7% |  79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[], int, int)`                                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +437.4% | +346.171 KiB |   0.3% → 1.7% |  79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[])`                                                                                                                                   | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +434.2% | +343.609 KiB |   0.3% → 1.7% |  79.1 KiB → 423 KiB |     2 → 4 | `readBootstrapMethodsAttribute(int)`                                                                                                               | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                           |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `invoke(FirScope, Name, Function1)`                                                                                                                | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`             |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `invoke(Object, Object, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`             |
| +258.4% | +276.523 KiB |   0.4% → 1.6% |   107 KiB → 384 KiB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                      |
| +190.4% | +265.578 KiB |   0.5% → 1.6% |   139 KiB → 405 KiB | 212 → 195 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                 |
| +203.0% | +263.023 KiB |   0.5% → 1.6% |   130 KiB → 393 KiB | 169 → 151 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| +200.7% | +262.648 KiB |   0.5% → 1.6% |   131 KiB → 393 KiB | 186 → 172 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                          |
| +200.7% | +262.648 KiB |   0.5% → 1.6% |   131 KiB → 393 KiB | 186 → 172 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)`                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                          |
| +215.8% | +262.398 KiB |   0.5% → 1.6% |   122 KiB → 384 KiB |   76 → 63 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                      |
| +199.8% | +262.289 KiB |   0.5% → 1.6% |   131 KiB → 394 KiB | 190 → 175 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +199.8% | +262.289 KiB |   0.5% → 1.6% |   131 KiB → 394 KiB | 190 → 175 | `transformNamedFunction(FirNamedFunction, Object)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### Standard library

|   Change |        Delta |             % |                Size |   Samples | Function                                         | Location                                              |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------ | ----------------------------------------------------- |
|      new |   +5.907 MiB |  0.0% → 24.5% |      0 B → 5.91 MiB |   0 → 647 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`  |
|      new |   +5.907 MiB |  0.0% → 24.5% |      0 B → 5.91 MiB |   0 → 647 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
|    +6.8% | +567.484 KiB | 31.9% → 36.2% |  8.15 MiB → 8.7 MiB | 365 → 372 | `copyOf(byte[], int)`                            | `java.util.Arrays`                                    |
|    +6.3% | +522.984 KiB | 31.9% → 35.9% | 8.14 MiB → 8.65 MiB | 348 → 353 | `toByteArray()`                                  | `java.io.ByteArrayOutputStream`                       |
|   +23.8% |     +440 KiB |   7.1% → 9.3% |  1.8 MiB → 2.23 MiB |   82 → 97 | `clone()`                                        | `java.lang.Object`                                    |
|  +204.8% | +259.164 KiB |   0.5% → 1.6% |   127 KiB → 386 KiB | 120 → 107 | `resumeWith(Object)`                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|    +3.9% | +225.742 KiB | 22.3% → 24.5% | 5.69 MiB → 5.91 MiB | 637 → 647 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                    |
|    +3.9% | +225.742 KiB | 22.3% → 24.5% | 5.69 MiB → 5.91 MiB | 637 → 647 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|    +3.9% | +225.742 KiB | 22.3% → 24.5% | 5.69 MiB → 5.91 MiB | 637 → 647 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|    +3.9% | +225.742 KiB | 22.3% → 24.5% | 5.69 MiB → 5.91 MiB | 637 → 647 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                            |
|  +676.6% | +186.382 KiB |   0.1% → 0.9% |  27.5 KiB → 214 KiB |     4 → 8 | `readAllBytes(Path)`                             | `java.nio.file.Files`                                 |
|  +192.7% | +171.125 KiB |   0.3% → 1.1% |  88.8 KiB → 260 KiB |   50 → 55 | `getValue()`                                     | `kotlin.SafePublicationLazyImpl`                      |
| +1731.8% | +138.812 KiB |  <0.1% → 0.6% |  8.02 KiB → 147 KiB |     1 → 6 | `read(InputStream, int)`                         | `java.nio.file.Files`                                 |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getBufferBytes(ByteBuffer)`                     | `jdk.internal.jimage.BasicImageReader`                |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getResource(ImageLocation)`                     | `jdk.internal.jimage.BasicImageReader`                |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getResource(ImageReader$Node)`                  | `jdk.internal.jimage.ImageReader$SharedImageReader`   |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getResource(ImageReader$Node)`                  | `jdk.internal.jimage.ImageReader`                     |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getResource(ImageReader$Node)`                  | `jdk.internal.jrtfs.SystemImage$1`                    |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `getFileContent(JrtPath)`                        | `jdk.internal.jrtfs.JrtFileSystem`                    |
|  +243.6% |   +47.57 KiB |   0.1% → 0.3% | 19.5 KiB → 67.1 KiB |     3 → 2 | `newByteChannel(JrtPath, Set, FileAttribute[])`  | `jdk.internal.jrtfs.JrtFileSystem`                    |

##### Ours

|  Change |        Delta |           % |               Size |   Samples | Function                                                                                                                                           | Location                                                                                                 |
| ------: | -----------: | ----------: | -----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +437.4% | +346.171 KiB | 0.3% → 1.7% | 79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[], int, boolean)`                                                                                                                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +437.4% | +346.171 KiB | 0.3% → 1.7% | 79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[], int, int)`                                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +437.4% | +346.171 KiB | 0.3% → 1.7% | 79.1 KiB → 425 KiB |     2 → 6 | `<init>(byte[])`                                                                                                                                   | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +434.2% | +343.609 KiB | 0.3% → 1.7% | 79.1 KiB → 423 KiB |     2 → 4 | `readBootstrapMethodsAttribute(int)`                                                                                                               | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| +258.4% | +276.523 KiB | 0.4% → 1.6% |  107 KiB → 384 KiB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                           |
| +258.4% | +276.523 KiB | 0.4% → 1.6% |  107 KiB → 384 KiB |   59 → 53 | `invoke(FirScope, Name, Function1)`                                                                                                                | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`             |
| +258.4% | +276.523 KiB | 0.4% → 1.6% |  107 KiB → 384 KiB |   59 → 53 | `invoke(Object, Object, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`             |
| +258.4% | +276.523 KiB | 0.4% → 1.6% |  107 KiB → 384 KiB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                      |
| +190.4% | +265.578 KiB | 0.5% → 1.6% |  139 KiB → 405 KiB | 212 → 195 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                 |
| +203.0% | +263.023 KiB | 0.5% → 1.6% |  130 KiB → 393 KiB | 169 → 151 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| +200.7% | +262.648 KiB | 0.5% → 1.6% |  131 KiB → 393 KiB | 186 → 172 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                          |
| +200.7% | +262.648 KiB | 0.5% → 1.6% |  131 KiB → 393 KiB | 186 → 172 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)`                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                          |
| +215.8% | +262.398 KiB | 0.5% → 1.6% |  122 KiB → 384 KiB |   76 → 63 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                      |
| +199.8% | +262.289 KiB | 0.5% → 1.6% |  131 KiB → 394 KiB | 190 → 175 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +199.8% | +262.289 KiB | 0.5% → 1.6% |  131 KiB → 394 KiB | 190 → 175 | `transformNamedFunction(FirNamedFunction, Object)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +194.7% | +262.078 KiB | 0.5% → 1.6% |  135 KiB → 397 KiB | 215 → 195 | `processFile(FirFile)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                      |
| +195.4% | +261.312 KiB | 0.5% → 1.6% |  134 KiB → 395 KiB | 203 → 185 | `transformChildren(FirTransformer, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                 |
| +195.9% | +261.234 KiB | 0.5% → 1.6% |  133 KiB → 395 KiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +195.9% | +261.234 KiB | 0.5% → 1.6% |  133 KiB → 395 KiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| +195.9% | +261.234 KiB | 0.5% → 1.6% |  133 KiB → 395 KiB | 193 → 176 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                     | Location                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |   -5.687 MiB |  22.3% → 0.0% |      5.69 MiB → 0 B |       637 → 0 | `invokeStatic(Object, Object)`                                               | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000`   |
| removed |   -5.687 MiB |  22.3% → 0.0% |      5.69 MiB → 0 B |       637 → 0 | `invoke(Object, Object, Object)`                                             | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`    |
|   -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|   -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|   -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`            |
|   -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `main(String[])`                                                             | `org.jetbrains.kotlin.preloading.Preloader`            |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB |     342 → 322 | `<init>(int)`                                                                | `java.io.ByteArrayOutputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `getBufIfOpen(boolean)`                                                      | `java.io.BufferedInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `getBufIfOpen()`                                                             | `java.io.BufferedInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `fill()`                                                                     | `java.io.BufferedInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `read1(byte[], int, int)`                                                    | `java.io.BufferedInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `implRead(byte[], int, int)`                                                 | `java.io.BufferedInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `read(byte[], int, int)`                                                     | `java.io.BufferedInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `read(byte[], int, int)`                                                     | `java.io.FilterInputStream`                            |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `read(byte[], int, int)`                                                     | `java.io.PushbackInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |         4 → 3 | `readFully(byte[], int, int)`                                                | `java.util.zip.ZipInputStream`                         |
|  -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |       20 → 17 | `readLOC()`                                                                  | `java.util.zip.ZipInputStream`                         |
|  -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |       20 → 17 | `getNextEntry()`                                                             | `java.util.zip.ZipInputStream`                         |
|  -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |       36 → 21 | `putVal(int, Object, Object, boolean, boolean)`                              | `java.util.HashMap`                                    |
|  -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |       36 → 21 | `put(Object, Object)`                                                        | `java.util.HashMap`                                    |

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                                    | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |   -5.687 MiB |  22.3% → 0.0% |      5.69 MiB → 0 B |   637 → 0 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000` |
| removed |   -5.687 MiB |  22.3% → 0.0% |      5.69 MiB → 0 B |   637 → 0 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`  |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                                                               | `java.io.ByteArrayOutputStream`                      |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `getBufIfOpen(boolean)`                                                     | `java.io.BufferedInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `getBufIfOpen()`                                                            | `java.io.BufferedInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `fill()`                                                                    | `java.io.BufferedInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `read1(byte[], int, int)`                                                   | `java.io.BufferedInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `implRead(byte[], int, int)`                                                | `java.io.BufferedInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `read(byte[], int, int)`                                                    | `java.io.BufferedInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `read(byte[], int, int)`                                                    | `java.io.FilterInputStream`                          |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `read(byte[], int, int)`                                                    | `java.io.PushbackInputStream`                        |
|  -25.0% | -512.015 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |     4 → 3 | `readFully(byte[], int, int)`                                               | `java.util.zip.ZipInputStream`                       |
|  -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |   20 → 17 | `readLOC()`                                                                 | `java.util.zip.ZipInputStream`                       |
|  -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |   20 → 17 | `getNextEntry()`                                                            | `java.util.zip.ZipInputStream`                       |
|  -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |   36 → 21 | `putVal(int, Object, Object, boolean, boolean)`                             | `java.util.HashMap`                                  |
|  -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |   36 → 21 | `put(Object, Object)`                                                       | `java.util.HashMap`                                  |
|  -99.9% |  -416.57 KiB |  1.6% → <0.1% |     417 KiB → 560 B |    18 → 7 | `resize()`                                                                  | `java.util.HashMap`                                  |
|   -1.3% |  -53.523 KiB | 15.7% → 16.5% | 4.02 MiB → 3.97 MiB |   11 → 10 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
|   -1.3% |  -53.523 KiB | 15.7% → 16.5% | 4.02 MiB → 3.97 MiB |   11 → 10 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
|  -51.6% |  -49.898 KiB |   0.4% → 0.2% | 96.7 KiB → 46.8 KiB |     7 → 5 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |

##### Ours

| Change |        Delta |             % |                Size |       Samples | Function                                                                              | Location                                                                                                 |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|  -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`          | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|  -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `run(String[])`                                                                       | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
|  -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `main(String[])`                                                                      | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `invoke(Object)`                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000007001396000`             |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                        |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray(LargeDynamicMappedBuffer, ZipEntryDescription)`                  | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                        |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray(ZipEntryDescription)`                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`                                             |
| -30.7% | -393.992 KiB |   4.9% → 3.6% |  1.25 MiB → 890 KiB |        10 → 8 | `contentsToByteArray()`                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile`                                         |
| -29.5% | -378.203 KiB |   4.9% → 3.7% |  1.25 MiB → 906 KiB |       11 → 12 | `withMappedRange(long, long, Function1)`                                              | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`                                   |
| -29.5% | -378.203 KiB |   4.9% → 3.7% |  1.25 MiB → 906 KiB |       11 → 12 | `withMappedRangeFrom(long, Function1)`                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer`                                   |
| -21.3% |  -277.75 KiB |   5.0% → 4.2% |    1.27 MiB → 1 MiB |        12 → 9 | `contentsToByteArray(boolean)`                                                        | `com.intellij.openapi.vfs.VirtualFile`                                                                   |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformArguments(FirTransformer, Object)`                                          | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformChildren(FirTransformer, Object)`                                           | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformElement(FirElement, Object)`                                                | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transformArgumentList(FirArgumentList, Object)`                                      | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                       |
| -17.4% |     -245 KiB |   5.4% → 4.7% | 1.38 MiB → 1.14 MiB |       71 → 91 | `transform(FirTransformer, Object)`                                                   | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                   |
| -16.7% | -236.695 KiB |   5.4% → 4.8% | 1.38 MiB → 1.15 MiB |       66 → 82 | `computePackagePartInfo(FqName, String)`                                              | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                          |
| -16.7% | -236.695 KiB |   5.4% → 4.8% | 1.38 MiB → 1.15 MiB |       66 → 82 | `computePackagePartsInfos(FqName)`                                                    | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                          |
| -16.7% | -236.695 KiB |   5.4% → 4.8% | 1.38 MiB → 1.15 MiB |       66 → 82 | `tryComputePackagePartInfos(FqName)`                                                  | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                         |
