# Sampling profile diff

1,322 samples.

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
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `I2C/C2I adapters(0xb)`                  | `<unknown>`    |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `LinearScan::build_intervals`            | `libjvm.dylib` |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `ValueStack::values_do`                  | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `LinearScan::add_def`                    | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `RegionNode::Opcode`                     | `libjvm.dylib` |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `PhaseCFG::schedule_pinned_nodes`        | `libjvm.dylib` |

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

| Change | Delta |           % | Samples | Function                   | Location                                                                                   |
| -----: | ----: | ----------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics`                                                           |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `to(Object, Object)`       | `kotlin.TuplesKt`                                                                          |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode(Object[])`       | `java.util.Arrays`                                                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `single(Iterable)`         | `kotlin.collections.CollectionsKt___CollectionsKt`                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `plus(Map, Map)`           | `kotlin.collections.MapsKt__MapsKt`                                                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hashCode()`               | `java.util.AbstractMap`                                                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `next()`                   | `java.util.Collections$1`                                                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasNext()`                | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBaseIterator` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasNext()`                | `kotlin.ranges.IntProgressionIterator`                                                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `equalsIgnoreCase(String)` | `java.lang.String`                                                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `next()`                   | `kotlin.collections.IndexingIterator`                                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `iterator()`               | `java.util.Vector`                                                                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `clear()`                  | `java.util.ArrayList`                                                                      |

##### JIT

|  Change | Delta |           % | Samples | Function                        | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------- | ----------- |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `I2C/C2I adapters(0xb)`         | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xba)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xaa)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbbaab)` | `<unknown>` |

##### Native

| Change | Delta |           % | Samples | Function                       | Location       |
| -----: | ----: | ----------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::newarray` | `libjvm.dylib` |

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
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)`                    | `<unknown>`                      |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`                               | `<unknown>`                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::schedule_late`                   | `libjvm.dylib`                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIterGVN::subsume_node`                | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIFG::SquareUp`                        | `libjvm.dylib`                   |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `Node::is_CFG`                              | `libjvm.dylib`                   |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseChaitin::build_ifg_virtual`           | `libjvm.dylib`                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `GraphBuilder::try_inline_full`             | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `GraphBuilder::append_with_bci`             | `libjvm.dylib`                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LinearScan::eliminate_spill_moves`         | `libjvm.dylib`                   |
|  -25.0% |    -2 | 0.6% → 0.5% |   8 → 6 | `PhaseChaitin::post_allocate_copy_removal`  | `libjvm.dylib`                   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `NTarjan::DFS`                              | `libjvm.dylib`                   |

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

|  Change | Delta |           % | Samples | Function                                | Location                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------- | ------------------------------------------------- |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics`                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(Object)`                           | `java.util.HashMap`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `charAt(int)`                           | `java.lang.String`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>()`                              | `java.util.ArrayDeque`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `valueOf(boolean)`                      | `java.lang.Boolean`                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `listOfNotNull(Object[])`               | `kotlin.collections.CollectionsKt__CollectionsKt` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `replace(char, char)`                   | `java.lang.String`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `remove(int)`                           | `java.util.ArrayList`                             |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`            | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`   | `<unknown>` |

##### Native

| Change | Delta |           % | Samples | Function                       | Location                  |
| -----: | ----: | ----------: | ------: | ------------------------------ | ------------------------- |
|  -8.3% |    -1 | 0.9% → 0.8% | 12 → 11 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                                             | Location                                                                                       |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +2.0% |   +11 | 42.1% → 42.9% | 556 → 567 | `Compile::Compile`                                                                                                                                   | `libjvm.dylib`                                                                                 |
|   +7.3% |   +11 | 11.3% → 12.2% | 150 → 161 | `PhaseChaitin::Register_Allocate`                                                                                                                    | `libjvm.dylib`                                                                                 |
|  +21.3% |   +10 |   3.6% → 4.3% |   47 → 57 | `Compile::optimize_loops`                                                                                                                            | `libjvm.dylib`                                                                                 |
|   +1.6% |    +9 | 42.2% → 42.9% | 558 → 567 | `C2Compiler::compile_method`                                                                                                                         | `libjvm.dylib`                                                                                 |
|  +60.0% |    +9 |   1.1% → 1.8% |   15 → 24 | `DebugInformationRecorder::describe_scope`                                                                                                           | `libjvm.dylib`                                                                                 |
|  +13.2% |    +9 |   5.1% → 5.8% |   68 → 77 | `loadClass(String, boolean)`                                                                                                                         | `java.lang.ClassLoader`                                                                        |
|  +64.3% |    +9 |   1.1% → 1.7% |   14 → 23 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
|  +64.3% |    +9 |   1.1% → 1.7% |   14 → 23 | `invoke(Object)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d280` |
| +128.6% |    +9 |   0.5% → 1.2% |    7 → 16 | `processFunctionsByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                 |
| +128.6% |    +9 |   0.5% → 1.2% |    7 → 16 | `invoke(FirScope, Name, Function1)`                                                                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`   |
|  +21.6% |    +8 |   2.8% → 3.4% |   37 → 45 | `PhaseOutput::Output`                                                                                                                                | `libjvm.dylib`                                                                                 |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `PhaseIFG::effective_degree`                                                                                                                         | `libjvm.dylib`                                                                                 |
| +400.0% |    +8 |   0.2% → 0.8% |    2 → 10 | `PhaseIFG::Compute_Effective_Degree`                                                                                                                 | `libjvm.dylib`                                                                                 |
|  +61.5% |    +8 |   1.0% → 1.6% |   13 → 21 | `processSymbolsByName(Name, Function3, Function1)`                                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +38.1% |    +8 |   1.6% → 2.2% |   21 → 29 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                            |
| +100.0% |    +8 |   0.6% → 1.2% |    8 → 16 | `invoke(Object, Object, Object)`                                                                                                                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`   |
| +100.0% |    +8 |   0.6% → 1.2% |    8 → 16 | `processFunctionsByName(Name, Function1)`                                                                                                            | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                            |
|  +38.1% |    +8 |   1.6% → 2.2% |   21 → 29 | `accept(IrVisitor, Object)`                                                                                                                          | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                                 |
|   +6.9% |    +7 |   7.6% → 8.2% | 101 → 108 | `PhaseIdealLoop::build_and_optimize`                                                                                                                 | `libjvm.dylib`                                                                                 |
|   +6.9% |    +7 |   7.6% → 8.2% | 101 → 108 | `PhaseIdealLoop::PhaseIdealLoop`                                                                                                                     | `libjvm.dylib`                                                                                 |

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

|  Change | Delta |           % | Samples | Function                                                         | Location                                                         |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
|  +13.2% |    +9 | 5.1% → 5.8% | 68 → 77 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                                          |
|  +11.3% |    +7 | 4.7% → 5.2% | 62 → 69 | `read(byte[])`                                                   | `java.io.FilterInputStream`                                      |
|  +11.1% |    +7 | 4.8% → 5.3% | 63 → 70 | `defineClass(String, byte[], int, int)`                          | `java.lang.ClassLoader`                                          |
|  +77.8% |    +7 | 0.7% → 1.2% |  9 → 16 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                           |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `put(Object, Object)`                                            | `java.util.HashMap`                                              |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `loadClass(String)`                                              | `java.lang.ClassLoader`                                          |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `linkToTargetMethod(Object, Object)`                             | `java.lang.invoke.Invokers$Holder`                               |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `add(Object)`                                                    | `java.util.HashSet`                                              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `hashCode(Object[])`                                             | `java.util.Arrays`                                               |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `to(Object, Object)`                                             | `kotlin.TuplesKt`                                                |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `getAnnotation(Class)`                                           | `java.lang.reflect.Field`                                        |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `hasNext()`                                                      | `kotlin.sequences.FilteringSequence$iterator$1`                  |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `contains(Object)`                                               | `java.util.HashSet`                                              |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `add(Object)`                                                    | `java.util.ArrayList`                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `next()`                                                         | `java.util.HashMap$ValueIterator`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getMethod(String, Class[])`                                     | `java.lang.Class`                                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forName(String, boolean, ClassLoader)`                          | `java.lang.Class`                                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getDefaultJvmScriptingHostConfiguration()`                      | `kotlin.script.experimental.jvm.JvmScriptingHostConfigurationKt` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getQualifiedName()`                                             | `kotlin.reflect.jvm.internal.KClassImpl`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addAll(Collection, Iterable)`                                   | `kotlin.collections.CollectionsKt__MutableCollectionsKt`         |

##### JIT

|  Change | Delta |           % | Samples | Function                        | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------- | ----------- |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `I2C/C2I adapters(0xb)`         | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xba)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xaa)`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbbaab)` | `<unknown>` |

##### Native

|  Change | Delta |           % | Samples | Function                                        | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------- |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `_new_instance_Java`                            | `<unknown>`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `BarrierSetNMethod::nmethod_stub_entry_barrier` | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `new_type_array Runtime1 stub`                  | `<unknown>`    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `InterpreterRuntime::resolve_ldc`               | `libjvm.dylib` |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `wrong_method_stub`                             | `<unknown>`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::quicken_io_cc`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::anewarray`                 | `libjvm.dylib` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::newarray`                  | `libjvm.dylib` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                                                                                                                     | Location                                                               |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |
| -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
| -38.3% |   -18 |   3.6% → 2.2% |   47 → 29 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`          |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::compile_method`                                                                                                                                                | `libjvm.dylib`                                                         |
|  -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::Compilation`                                                                                                                                                   | `libjvm.dylib`                                                         |
|  -7.0% |   -16 | 17.2% → 16.0% | 228 → 212 | `Compilation::compile_java_method`                                                                                                                                           | `libjvm.dylib`                                                         |
|  -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `run(String[])`                                                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                            |
|  -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.preloading.Preloader`                            |
| -26.0% |   -13 |   3.8% → 2.8% |   50 → 37 | `Matcher::match`                                                                                                                                                             | `libjvm.dylib`                                                         |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                 |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `main(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                           |
|  -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                                                                                                                                   | `java.lang.reflect.Method`                                             |
| -28.9% |   -11 |   2.9% → 2.0% |   38 → 27 | `Matcher::xform`                                                                                                                                                             | `libjvm.dylib`                                                         |
|  -3.1% |   -11 | 27.2% → 26.4% | 360 → 349 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                                                           | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
|  -3.1% |   -11 | 27.2% → 26.4% | 360 → 349 | `doMain(CLICompiler, String[])`                                                                                                                                              | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                |
| -19.6% |   -11 |   4.2% → 3.4% |   56 → 45 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                                                        | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`               |
| -22.9% |   -11 |   3.6% → 2.8% |   48 → 37 | `GraphBuilder::try_inline_full`                                                                                                                                              | `libjvm.dylib`                                                         |
| -15.6% |   -10 |   4.8% → 4.1% |   64 → 54 | `PhaseIterGVN::transform_old`                                                                                                                                                | `libjvm.dylib`                                                         |
|  -2.8% |   -10 | 27.1% → 26.3% | 358 → 348 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                          |

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

|  Change | Delta |             % |   Samples | Function                                                                                                              | Location                                              |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|   -3.3% |   -12 | 27.4% → 26.5% | 362 → 350 | `invoke(Object, Object[])`                                                                                            | `java.lang.reflect.Method`                            |
|  -47.4% |    -9 |   1.4% → 0.8% |   19 → 10 | `getValue()`                                                                                                          | `kotlin.UnsafeLazyImpl`                               |
|  -54.5% |    -6 |   0.8% → 0.4% |    11 → 5 | `checkNotNullParameter(Object, String)`                                                                               | `kotlin.jvm.internal.Intrinsics`                      |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `toByteArray()`                                                                                                       | `java.io.ByteArrayOutputStream`                       |
|  -25.0% |    -4 |   1.2% → 0.9% |   16 → 12 | `getValue()`                                                                                                          | `kotlin.SafePublicationLazyImpl`                      |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `<init>(int)`                                                                                                         | `java.io.ByteArrayOutputStream`                       |
|  -17.6% |    -3 |   1.3% → 1.1% |   17 → 14 | `getValue()`                                                                                                          | `kotlin.SynchronizedLazyImpl`                         |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `getNextEntry()`                                                                                                      | `java.util.zip.ZipInputStream`                        |
|   -3.8% |    -2 |   4.0% → 3.9% |   53 → 51 | `resumeWith(Object)`                                                                                                  | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `toList(Iterable)`                                                                                                    | `kotlin.collections.CollectionsKt___CollectionsKt`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `joinToString$default(Iterable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1, int, Object)` | `kotlin.collections.CollectionsKt___CollectionsKt`    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `hashCode()`                                                                                                          | `java.lang.Object`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `write(byte[], int, int)`                                                                                             | `java.io.ByteArrayOutputStream`                       |
|  -50.0% |    -1 |   0.2% → 0.1% |     2 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)`                                                         | `java.lang.invoke.MethodHandleNatives`                |
|  -50.0% |    -1 |   0.2% → 0.1% |     2 → 1 | `compile(String)`                                                                                                     | `java.util.regex.Pattern`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `replaceAll(String, String)`                                                                                          | `java.lang.String`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `load(String)`                                                                                                        | `java.lang.System`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putAll(Map)`                                                                                                         | `kotlin.collections.builders.MapBuilder`              |
|  -50.0% |    -1 |   0.2% → 0.1% |     2 → 1 | `arraycopy(Object, int, Object, int, int)`                                                                            | `java.lang.System`                                    |
|  -12.5% |    -1 |   0.6% → 0.5% |     8 → 7 | `getJavaField(KProperty)`                                                                                             | `kotlin.reflect.jvm.ReflectJvmMapping`                |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub`            | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0x)`   | `<unknown>` |

##### Native

| Change | Delta |           % | Samples | Function                                         | Location                  |
| -----: | ----: | ----------: | ------: | ------------------------------------------------ | ------------------------- |
| -47.6% |   -10 | 1.6% → 0.8% | 21 → 11 | `InterpreterRuntime::_new`                       | `libjvm.dylib`            |
| -45.5% |    -5 | 0.8% → 0.5% |  11 → 6 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`            |
| -16.0% |    -4 | 1.9% → 1.6% | 25 → 21 | `InterpreterRuntime::resolve_from_cache`         | `libjvm.dylib`            |
| -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `counter_overflow Runtime1 stub`                 | `<unknown>`               |
| -37.5% |    -3 | 0.6% → 0.4% |   8 → 5 | `resolve_opt_virtual_call`                       | `<unknown>`               |
|  -8.3% |    -1 | 0.9% → 0.8% | 12 → 11 | `pthread_jit_write_protect_np`                   | `libsystem_pthread.dylib` |
| -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `InterpreterRuntime::build_method_counters`      | `libjvm.dylib`            |
| -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `fast_new_instance Runtime1 stub`                | `<unknown>`               |

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

|  Change |        Delta |            % |                Size | Samples | Function                                                    | Location                                                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  +23.8% |     +440 KiB |  7.1% → 9.3% |  1.8 MiB → 2.23 MiB | 82 → 97 | `clone()`                                                   | `java.lang.Object`                                                             |
| +434.2% | +343.609 KiB |  0.3% → 1.7% |  79.1 KiB → 423 KiB |   2 → 4 | `readBootstrapMethodsAttribute(int)`                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  +25.6% |  +54.929 KiB |  0.8% → 1.1% |   215 KiB → 270 KiB |       5 | `accept(ClassVisitor, Attribute[], int)`                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  +41.7% |  +41.609 KiB |  0.4% → 0.6% |  99.7 KiB → 141 KiB |   2 → 5 | `getBytes(int, int)`                                        | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping` |
|     new |  +19.453 KiB |  0.0% → 0.1% |      0 B → 19.5 KiB |   0 → 1 | `<init>(int)`                                               | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
| +133.3% |  +16.062 KiB | <0.1% → 0.1% |   12 KiB → 28.1 KiB |   3 → 7 | `<init>(InputStream)`                                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                               |
|     new |  +16.015 KiB |  0.0% → 0.1% |        0 B → 16 KiB |   0 → 1 | `enlarge(int)`                                              | `org.jetbrains.org.objectweb.asm.ByteVector`                                   |
|     new |  +14.796 KiB |  0.0% → 0.1% |      0 B → 14.8 KiB |   0 → 2 | `forceCapacity(int[], int, int)`                            | `it.unimi.dsi.fastutil.ints.IntArrays`                                         |
|     new |   +8.843 KiB | 0.0% → <0.1% |      0 B → 8.84 KiB |   0 → 1 | `<init>(CharSequence, Lexer)`                               | `com.intellij.lang.impl.TokenSequence$Builder`                                 |
|     new |   +2.562 KiB | 0.0% → <0.1% |      0 B → 2.56 KiB |   0 → 2 | `<init>(byte[], int, boolean)`                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
| +583.3% |   +1.093 KiB |        <0.1% |    192 B → 1.28 KiB |   1 → 4 | `toArray()`                                                 | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                |
|     new |   +1.015 KiB | 0.0% → <0.1% |      0 B → 1.02 KiB |   0 → 1 | `<init>()`                                                  | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`      |
|  +22.0% |       +912 B |        <0.1% | 4.05 KiB → 4.95 KiB | 38 → 41 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                              |
|     new |       +640 B | 0.0% → <0.1% |         0 B → 640 B |   0 → 1 | `stringsToBytes(String[])`                                  | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`              |
|  +41.9% |       +352 B |        <0.1% |    840 B → 1.16 KiB |  9 → 13 | `<init>(int, int)`                                          | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                          |
| +450.0% |       +288 B |        <0.1% |        64 B → 352 B |  2 → 11 | `newOutput()`                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                     |
|  +75.0% |       +288 B |        <0.1% |       384 B → 672 B |   4 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                |
|     new |       +224 B | 0.0% → <0.1% |         0 B → 224 B |   0 → 1 | `visitMethod(int, String, String, String, String[])`        | `org.jetbrains.org.objectweb.asm.ClassWriter`                                  |
| +150.0% |       +168 B |        <0.1% |       112 B → 280 B |   2 → 5 | `getLabel()`                                                | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                               |
|     new |       +144 B | 0.0% → <0.1% |         0 B → 144 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                      |

##### Standard library

| Change |    Delta |            % |               Size | Samples | Function                     | Location                                           |
| -----: | -------: | -----------: | -----------------: | ------: | ---------------------------- | -------------------------------------------------- |
| +23.8% | +440 KiB |  7.1% → 9.3% | 1.8 MiB → 2.23 MiB | 82 → 97 | `clone()`                    | `java.lang.Object`                                 |
|    new |    +64 B | 0.0% → <0.1% |         0 B → 64 B |   0 → 1 | `mutableMapOf(Pair[])`       | `kotlin.collections.MapsKt__MapsKt`                |
|    new |    +56 B | 0.0% → <0.1% |         0 B → 56 B |   0 → 1 | `<init>(String)`             | `java.text.MessageFormat`                          |
|    new |    +48 B | 0.0% → <0.1% |         0 B → 48 B |   0 → 2 | `plus(Collection, Iterable)` | `kotlin.collections.CollectionsKt___CollectionsKt` |
| +50.0% |    +32 B |        <0.1% |        64 B → 96 B |   2 → 3 | `iterator()`                 | `java.util.LinkedHashMap$LinkedEntrySet`           |
|    new |    +32 B | 0.0% → <0.1% |         0 B → 32 B |   0 → 1 | `subList(int, int)`          | `java.util.AbstractList`                           |
|    new |    +32 B | 0.0% → <0.1% |         0 B → 32 B |   0 → 1 | `getFileName()`              | `jdk.internal.jrtfs.JrtPath`                       |
|    new |    +24 B | 0.0% → <0.1% |         0 B → 24 B |   0 → 1 | `iterator()`                 | `java.util.Arrays$ArrayList`                       |
|    new |    +24 B | 0.0% → <0.1% |         0 B → 24 B |   0 → 1 | `minus(Iterable, Iterable)`  | `kotlin.collections.CollectionsKt___CollectionsKt` |

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

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                                                                                                                                                                                                                                                            | Location                                                                     |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `java.io.ByteArrayOutputStream`                                              |
|  -36.8% | -435.531 KiB |   4.5% → 3.0% |  1.16 MiB → 749 KiB |     8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`            |
|  -89.3% |  -29.304 KiB |  0.1% → <0.1% |  32.8 KiB → 3.5 KiB |    10 → 9 | `copyOf(Object[], int)`                                                                                                                                                                                                                                                                                                                             | `java.util.Arrays`                                                           |
|  -95.8% |   -4.312 KiB |         <0.1% |     4.5 KiB → 192 B |     4 → 6 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `java.util.ArrayList`                                                        |
|  -86.4% |   -2.234 KiB |         <0.1% |    2.59 KiB → 360 B |    7 → 13 | `newInstance(OutputStream, int)`                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                            |
| removed |   -1.093 KiB |  <0.1% → 0.0% |      1.09 KiB → 0 B |     2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                                                                                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`              |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(int)`                                                                                                                                                                                                                                                                                                                                       | `com.fasterxml.aalto.util.XmlCharTypes`                                      |
|  -90.0% |       -504 B |         <0.1% |        560 B → 56 B |    10 → 1 | `ensureCapacity()`                                                                                                                                                                                                                                                                                                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                      |
|  -19.0% |       -256 B |         <0.1% | 1.31 KiB → 1.06 KiB |   42 → 34 | `iterator()`                                                                                                                                                                                                                                                                                                                                        | `java.util.ArrayList`                                                        |
|  -83.3% |       -160 B |         <0.1% |        192 B → 32 B |     6 → 1 | `<init>(String)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.name.FqName`                                           |
|  -64.3% |       -144 B |         <0.1% |        224 B → 80 B |    14 → 5 | `box-impl(List)`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                |
| removed |       -136 B |  <0.1% → 0.0% |         136 B → 0 B |     1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Property$1`                          |
|  -80.0% |       -128 B |         <0.1% |        160 B → 32 B |     5 → 1 | `getTypeInternal(String, int, int)`                                                                                                                                                                                                                                                                                                                 | `org.jetbrains.org.objectweb.asm.Type`                                       |
|  -83.3% |       -120 B |         <0.1% |        144 B → 24 B |     6 → 1 | `to(Object, Object)`                                                                                                                                                                                                                                                                                                                                | `kotlin.TuplesKt`                                                            |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |     1 → 0 | `createCopyForFirProperty(FirPropertySymbol, FirProperty, ConeClassLikeLookupTag, FirSession, FirDeclarationOrigin, boolean, ConeSimpleKotlinType, List, ConeKotlinType, List, ConeKotlinType, Modality, Visibility, Visibility, DeferredCallableCopyReturnType, KtSourceElement, FirBackingField, ConeKotlinType, DeferredCallableCopyReturnType)` | `org.jetbrains.kotlin.fir.scopes.impl.FirFakeOverrideGenerator`              |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |     1 → 0 | `buildPartial()`                                                                                                                                                                                                                                                                                                                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$Builder`                    |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `allocateStartMarker()`                                                                                                                                                                                                                                                                                                                             | `com.intellij.lang.impl.MarkerPool`                                          |
|  -41.4% |        -96 B |         <0.1% |       232 B → 136 B |     4 → 2 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)`                                                                                                                                                                                                                                               | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
|  -40.0% |        -96 B |         <0.1% |       240 B → 144 B |     5 → 3 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                                                                                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                        |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `<init>()`                                                                                                                                                                                                                                                                                                                                          | `java.util.HashSet`                                                          |

##### Standard library

|  Change |       Delta |             % |                Size |   Samples | Function                                | Location                                                                       |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------------------------- | ------------------------------------------------------------------------------ |
|  -13.8% |  -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                           | `java.io.ByteArrayOutputStream`                                                |
|  -89.3% | -29.304 KiB |  0.1% → <0.1% |  32.8 KiB → 3.5 KiB |    10 → 9 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                                             |
|  -95.8% |  -4.312 KiB |         <0.1% |     4.5 KiB → 192 B |     4 → 6 | `<init>(int)`                           | `java.util.ArrayList`                                                          |
|  -19.0% |      -256 B |         <0.1% | 1.31 KiB → 1.06 KiB |   42 → 34 | `iterator()`                            | `java.util.ArrayList`                                                          |
|  -83.3% |      -120 B |         <0.1% |        144 B → 24 B |     6 → 1 | `to(Object, Object)`                    | `kotlin.TuplesKt`                                                              |
| removed |       -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `<init>()`                              | `java.util.HashSet`                                                            |
| removed |       -48 B |  <0.1% → 0.0% |          48 B → 0 B |     2 → 0 | `iterator()`                            | `java.util.Collections$UnmodifiableCollection`                                 |
|  -25.0% |       -48 B |         <0.1% |       192 B → 144 B |     4 → 3 | `builder()`                             | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |
| removed |       -32 B |  <0.1% → 0.0% |          32 B → 0 B |     1 → 0 | `compareAndSet(Object, Object)`         | `java.util.concurrent.atomic.AtomicReference`                                  |
|  -33.3% |       -32 B |         <0.1% |         96 B → 64 B |     3 → 2 | `iterator()`                            | `java.util.AbstractList`                                                       |
|  -20.0% |       -24 B |         <0.1% |        120 B → 96 B |     5 → 4 | `toString()`                            | `java.lang.StringBuilder`                                                      |
| removed |       -24 B |  <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `next()`                                | `kotlin.collections.builders.MapBuilder$EntriesItr`                            |
|  -50.0% |       -24 B |         <0.1% |         48 B → 24 B |     2 → 1 | `lazy(LazyThreadSafetyMode, Function0)` | `kotlin.LazyKt__LazyJVMKt`                                                     |
| removed |       -16 B |  <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `plus(Set, Iterable)`                   | `kotlin.collections.SetsKt___SetsKt`                                           |
| removed |       -16 B |  <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `toSet(Iterable)`                       | `kotlin.collections.CollectionsKt___CollectionsKt`                             |

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
| +194.7% | +262.078 KiB |   0.5% → 1.6% |   135 KiB → 397 KiB | 215 → 195 | `processFile(FirFile)`                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                      |
| +195.4% | +261.312 KiB |   0.5% → 1.6% |   134 KiB → 395 KiB | 203 → 185 | `transformChildren(FirTransformer, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                 |
| +195.9% | +261.234 KiB |   0.5% → 1.6% |   133 KiB → 395 KiB | 193 → 176 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### Standard library

|   Change |        Delta |             % |                Size |   Samples | Function                                                      | Location                                                         |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------- | ---------------------------------------------------------------- |
|    +6.3% | +522.984 KiB | 31.9% → 35.9% | 8.14 MiB → 8.65 MiB | 348 → 353 | `toByteArray()`                                               | `java.io.ByteArrayOutputStream`                                  |
|   +23.8% |     +440 KiB |   7.1% → 9.3% |  1.8 MiB → 2.23 MiB |   82 → 97 | `clone()`                                                     | `java.lang.Object`                                               |
|  +204.8% | +259.164 KiB |   0.5% → 1.6% |   127 KiB → 386 KiB | 120 → 107 | `resumeWith(Object)`                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`            |
|    +3.9% | +225.742 KiB | 22.3% → 24.5% | 5.69 MiB → 5.91 MiB | 637 → 647 | `invoke(Object, Object[])`                                    | `java.lang.reflect.Method`                                       |
|  +676.6% | +186.382 KiB |   0.1% → 0.9% |  27.5 KiB → 214 KiB |     4 → 8 | `readAllBytes(Path)`                                          | `java.nio.file.Files`                                            |
|  +192.7% | +171.125 KiB |   0.3% → 1.1% |  88.8 KiB → 260 KiB |   50 → 55 | `getValue()`                                                  | `kotlin.SafePublicationLazyImpl`                                 |
|  +289.5% |  +25.718 KiB |  <0.1% → 0.1% | 8.88 KiB → 34.6 KiB |   21 → 16 | `getValue()`                                                  | `kotlin.UnsafeLazyImpl`                                          |
| +3849.2% |  +18.945 KiB |  <0.1% → 0.1% |    504 B → 19.4 KiB |     4 → 5 | `append(char)`                                                | `java.lang.StringBuilder`                                        |
|      new |  +16.515 KiB |   0.0% → 0.1% |      0 B → 16.5 KiB |     0 → 1 | `<init>(char[], int, int)`                                    | `java.lang.String`                                               |
|      new |   +9.546 KiB |  0.0% → <0.1% |      0 B → 9.55 KiB |     0 → 1 | `getDefaultJvmScriptingHostConfiguration()`                   | `kotlin.script.experimental.jvm.JvmScriptingHostConfigurationKt` |
| +1494.7% |   +4.437 KiB |         <0.1% |    304 B → 4.73 KiB |     7 → 8 | `hasNext()`                                                   | `kotlin.sequences.FilteringSequence$iterator$1`                  |
|  +873.7% |    +3.89 KiB |         <0.1% |    456 B → 4.34 KiB |    7 → 11 | `defineClass(String, byte[], int, int)`                       | `java.lang.ClassLoader`                                          |
|  +480.0% |    +2.25 KiB |         <0.1% |    480 B → 2.72 KiB |    9 → 15 | `getJavaField(KProperty)`                                     | `kotlin.reflect.jvm.ReflectJvmMapping`                           |
|      new |   +2.148 KiB |  0.0% → <0.1% |      0 B → 2.15 KiB |     0 → 3 | `toList(Sequence)`                                            | `kotlin.sequences.SequencesKt___SequencesKt`                     |
|      new |   +2.031 KiB |  0.0% → <0.1% |      0 B → 2.03 KiB |     0 → 2 | `<init>(ScriptingHostConfiguration[], Function1)`             | `kotlin.script.experimental.host.ScriptingHostConfiguration`     |
| +2510.0% |    +1.96 KiB |         <0.1% |     80 B → 2.04 KiB |         2 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)`   | `java.lang.reflect.Proxy`                                        |
|      new |   +1.015 KiB |  0.0% → <0.1% |      0 B → 1.02 KiB |     0 → 1 | `getThreadMXBean()`                                           | `java.lang.management.ManagementFactory`                         |
|  +175.0% |       +784 B |         <0.1% |     448 B → 1.2 KiB |     2 → 5 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                           |
|      new |       +528 B |  0.0% → <0.1% |         0 B → 528 B |     0 → 1 | `withIndex(Object[])`                                         | `kotlin.collections.ArraysKt___ArraysKt`                         |
|  +150.0% |       +360 B |         <0.1% |       240 B → 600 B |     4 → 5 | `<init>(byte[], int, int, Charset)`                           | `java.lang.String`                                               |

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

| Change |        Delta |             % |                Size |       Samples | Function                                                                              | Location                                                                                                 |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|  -8.5% |    -1.68 MiB | 77.7% → 75.5% | 19.8 MiB → 18.2 MiB |     723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`          | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
|  -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `run(String[])`                                                                       | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
|  -5.7% |   -1.459 MiB |        100.0% | 25.5 MiB → 24.1 MiB | 1,360 → 1,349 | `main(String[])`                                                                      | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB |     342 → 322 | `<init>(int)`                                                                         | `java.io.ByteArrayOutputStream`                                                                          |
| -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |       20 → 17 | `getNextEntry()`                                                                      | `java.util.zip.ZipInputStream`                                                                           |
| -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |       36 → 21 | `put(Object, Object)`                                                                 | `java.util.HashMap`                                                                                      |
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

##### Standard library

|  Change |        Delta |             % |                Size |   Samples | Function                                                         | Location                                           |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------- | -------------------------------------------------- |
|  -13.8% |   -1.284 MiB | 36.4% → 33.3% |    9.29 MiB → 8 MiB | 342 → 322 | `<init>(int)`                                                    | `java.io.ByteArrayOutputStream`                    |
|  -25.0% |     -512 KiB |   7.8% → 6.2% |     2 MiB → 1.5 MiB |   20 → 17 | `getNextEntry()`                                                 | `java.util.zip.ZipInputStream`                     |
|  -99.7% | -416.687 KiB |  1.6% → <0.1% |  418 KiB → 1.05 KiB |   36 → 21 | `put(Object, Object)`                                            | `java.util.HashMap`                                |
|  -51.6% |  -49.867 KiB |   0.4% → 0.2% | 96.7 KiB → 46.9 KiB |     7 → 6 | `loadClass(String)`                                              | `java.lang.ClassLoader`                            |
|  -87.7% |  -28.625 KiB |  0.1% → <0.1% | 32.6 KiB → 4.02 KiB |   43 → 38 | `getValue()`                                                     | `kotlin.SynchronizedLazyImpl`                      |
|  -99.4% |  -25.593 KiB |  0.1% → <0.1% |    25.8 KiB → 160 B |         1 | `newFileSystem(URI, Map)`                                        | `java.nio.file.FileSystems`                        |
|  -58.7% |  -21.453 KiB |          0.1% | 36.6 KiB → 15.1 KiB |         1 | `forName(String, boolean, ClassLoader)`                          | `java.lang.Class`                                  |
|  -28.7% |  -20.617 KiB |   0.3% → 0.2% | 71.9 KiB → 51.3 KiB |   20 → 19 | `loadClass(String, boolean)`                                     | `java.lang.ClassLoader`                            |
|  -42.2% |  -14.289 KiB |          0.1% | 33.8 KiB → 19.6 KiB |   16 → 14 | `copyOf(Object[], int)`                                          | `java.util.Arrays`                                 |
|   -0.3% |   -11.64 KiB | 15.4% → 16.3% | 3.93 MiB → 3.92 MiB |         5 | `getResource(String)`                                            | `java.lang.ClassLoader`                            |
|  -26.9% |   -7.164 KiB |          0.1% | 26.6 KiB → 19.5 KiB |   16 → 18 | `add(Object)`                                                    | `java.util.ArrayList`                              |
|  -98.5% |   -6.484 KiB |         <0.1% |    6.59 KiB → 104 B |     7 → 6 | `addAll(Collection)`                                             | `java.util.ArrayList`                              |
|  -98.9% |    -6.32 KiB |         <0.1% |     6.39 KiB → 72 B |     2 → 3 | `plus(Collection, Iterable)`                                     | `kotlin.collections.CollectionsKt___CollectionsKt` |
| removed |   -4.421 KiB |  <0.1% → 0.0% |      4.42 KiB → 0 B |     2 → 0 | `plus(Collection, Object)`                                       | `kotlin.collections.CollectionsKt___CollectionsKt` |
|  -95.8% |   -4.312 KiB |         <0.1% |     4.5 KiB → 192 B |     4 → 6 | `<init>(int)`                                                    | `java.util.ArrayList`                              |
| removed |   -1.031 KiB |  <0.1% → 0.0% |      1.03 KiB → 0 B |     2 → 0 | `put(Object, Object)`                                            | `java.util.IdentityHashMap`                        |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `runBlocking$default(CoroutineContext, Function2, int, Object)`  | `kotlinx.coroutines.BuildersKt`                    |
|   -8.4% |       -976 B |         <0.1% | 11.3 KiB → 10.4 KiB |   22 → 28 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`             |
| removed |       -544 B |  <0.1% → 0.0% |         544 B → 0 B |     2 → 0 | `<init>()`                                                       | `java.util.IdentityHashMap`                        |
|  -19.0% |       -256 B |         <0.1% | 1.31 KiB → 1.06 KiB |   42 → 34 | `iterator()`                                                     | `java.util.ArrayList`                              |

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
