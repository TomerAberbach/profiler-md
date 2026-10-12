# Sampling profile diff

Collected 1,303 samples → 1,315 samples (+12 samples, +0.9%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Compiler         |  -7.8% |   -48 | 47.0% → 42.9% | 612 → 564 |
| Native           |  +9.3% |   +45 | 37.3% → 40.4% | 486 → 531 |
| Ours             |  +9.6% |   +12 |  9.6% → 10.4% | 125 → 137 |
| Standard library | +15.0% |    +9 |   4.6% → 5.2% |   60 → 69 |
| JIT              | -30.0% |    -6 |   1.5% → 1.1% |   20 → 14 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                          | Location                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | ------------------------ |
|  +69.2% |    +9 | 1.0% → 1.7% | 13 → 22 | `PhaseChaitin::build_ifg_physical`                | `libjvm.dylib`           |
|     new |    +7 | 0.0% → 0.5% |   0 → 7 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib`           |
|  +38.9% |    +7 | 1.4% → 1.9% | 18 → 25 | `tlv_get_addr`                                    | `libdyld.dylib`          |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`           |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `__psynch_mutexdrop`                              | `libsystem_kernel.dylib` |
| +250.0% |    +5 | 0.2% → 0.5% |   2 → 7 | `Matcher::xform`                                  | `libjvm.dylib`           |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `PhaseChaitin::gather_lrg_masks`                  | `libjvm.dylib`           |
|  +80.0% |    +4 | 0.4% → 0.7% |   5 → 9 | `PhaseAggressiveCoalesce::insert_copies`          | `libjvm.dylib`           |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `UTF8::is_legal_utf8`                             | `libjvm.dylib`           |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `semaphore_wait_trap`                             | `libsystem_kernel.dylib` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ResourceBitMap::ResourceBitMap`                  | `libjvm.dylib`           |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIdealLoop::build_loop_tree`                 | `libjvm.dylib`           |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseIterGVN::add_users_to_worklist`             | `libjvm.dylib`           |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIterGVN::transform_old`                     | `libjvm.dylib`           |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::build_dominator_tree`                  | `libjvm.dylib`           |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Compile::find_alias_type`                        | `libjvm.dylib`           |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseChaitin::build_ifg_virtual`                 | `libjvm.dylib`           |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `inflate_table`                                   | `libzip.dylib`           |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ClassVerifier::verify_method`                    | `libjvm.dylib`           |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `SymbolTable::lookup_shared`                      | `libjvm.dylib`           |

##### Compiler

|  Change | Delta |           % | Samples | Function                                              | Location       |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------- | -------------- |
|  +69.2% |    +9 | 1.0% → 1.7% | 13 → 22 | `PhaseChaitin::build_ifg_physical`                    | `libjvm.dylib` |
| +250.0% |    +5 | 0.2% → 0.5% |   2 → 7 | `Matcher::xform`                                      | `libjvm.dylib` |
|  +57.1% |    +4 | 0.5% → 0.8% |  7 → 11 | `PhaseChaitin::gather_lrg_masks`                      | `libjvm.dylib` |
|  +80.0% |    +4 | 0.4% → 0.7% |   5 → 9 | `PhaseAggressiveCoalesce::insert_copies`              | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIdealLoop::build_loop_tree`                     | `libjvm.dylib` |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `PhaseIterGVN::add_users_to_worklist`                 | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseIterGVN::transform_old`                         | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `PhaseCFG::build_dominator_tree`                      | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Compile::find_alias_type`                            | `libjvm.dylib` |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseChaitin::build_ifg_virtual`                     | `libjvm.dylib` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `LinearScanWalker::find_optimal_split_pos`            | `libjvm.dylib` |
|  +40.0% |    +2 | 0.4% → 0.5% |   5 → 7 | `LinearScan::build_intervals`                         | `libjvm.dylib` |
|  +40.0% |    +2 | 0.4% → 0.5% |   5 → 7 | `LinearScanWalker::free_collect_inactive_fixed`       | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `LinearScan::append_scope_value`                      | `libjvm.dylib` |
| +100.0% |    +2 | 0.2% → 0.3% |   2 → 4 | `OopMapValue::write_on`                               | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `GraphBuilder::append_with_bci`                       | `libjvm.dylib` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `MethodLiveness::get_liveness_at`                     | `libjvm.dylib` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `BlockBegin::set_end`                                 | `libjvm.dylib` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `MethodLiveness::BasicBlock::compute_gen_kill_single` | `libjvm.dylib` |
|  +25.0% |    +2 | 0.6% → 0.8% |  8 → 10 | `PhaseChaitin::elide_copy`                            | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                          | Location                   |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | -------------------------- |
|     new |    +7 | 0.0% → 0.5% |   0 → 7 | `G1ParScanThreadState::trim_queue_to_threshold`   | `libjvm.dylib`             |
|  +38.9% |    +7 | 1.4% → 1.9% | 18 → 25 | `tlv_get_addr`                                    | `libdyld.dylib`            |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib`             |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `__psynch_mutexdrop`                              | `libsystem_kernel.dylib`   |
| +100.0% |    +4 | 0.3% → 0.6% |   4 → 8 | `UTF8::is_legal_utf8`                             | `libjvm.dylib`             |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `semaphore_wait_trap`                             | `libsystem_kernel.dylib`   |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `ResourceBitMap::ResourceBitMap`                  | `libjvm.dylib`             |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `inflate_table`                                   | `libzip.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `ClassVerifier::verify_method`                    | `libjvm.dylib`             |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `SymbolTable::lookup_shared`                      | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Location::write_on`                              | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `State::MachNodeGenerator`                        | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `State::_sub_Op_AddP`                             | `libjvm.dylib`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `If::input_values_do`                             | `libjvm.dylib`             |
|  +22.2% |    +2 | 0.7% → 0.8% |  9 → 11 | `InstanceKlass::find_method_index`                | `libjvm.dylib`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `compare_immediate_pair`                          | `libjvm.dylib`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `forward_copy_longs`                              | `<unknown>`                |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `ClassVerifier::verify_invoke_instructions`       | `libjvm.dylib`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `_platform_memcmp`                                | `libsystem_platform.dylib` |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `CodeHeap::block_start`                           | `libjvm.dylib`             |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                    | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `buildDefaultFlow(CFGNode, Function2)`                                                                                      | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                               |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                             |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                     | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                         |
|    new |    +2 | 0.0% → 0.2% |   0 → 2 | `getNodeType(AbstractInsnNode)`                                                                                             | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt`                                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `performLexing()`                                                                                                           | `com.intellij.lang.impl.TokenSequence$Builder`                                                           |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `mayHaveTopLevelClassifier(ClassId)`                                                                                        | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                          | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                      |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformFunctionCall(FirFunctionCall, Object)`                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                          | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `requestGroup(TowerGroup, Continuation)`                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)`                                   | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `getResolvedAnnotationClassIds()`                                                                                           | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `transformWhenBranch(FirWhenBranch, Object)`                                                                                | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                            | `org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCallableReferences`                         |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                     | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                                     |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `argumentTypeWithCustomConversion(ConeInferenceContext, FirSession, ConeKotlinType, ConeKotlinType)`                        | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `extractValue(AbstractArrayMapOwner)`                                                                                       | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                               |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `substituteOrNull(ConeKotlinType)`                                                                                          | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`                                  |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `safeSubstitute(TypeSubstitutorMarker, KotlinTypeMarker)`                                                                   | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                                    |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                   | Location                                             |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------- | ---------------------------------------------------- |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `resize()`                                                 | `java.util.HashMap`                                  |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `ensureCapacityInternal(int)`                              | `java.lang.AbstractStringBuilder`                    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `isLatin1()`                                               | `java.lang.String`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(Object)`                                              | `java.util.concurrent.ConcurrentHashMap`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addConstantFieldref(String, String, String)`              | `jdk.internal.org.objectweb.asm.SymbolTable`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `newInvokeSpecial(Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001020400` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `methodType(Class, Class[], boolean)`                      | `java.lang.invoke.MethodType`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getDirectMethodForConstant(byte, Class, MemberName)`      | `java.lang.invoke.MethodHandles$Lookup`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `closeEntry()`                                             | `java.util.zip.ZipInputStream`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextNode()`                                               | `java.util.HashMap$HashIterator`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `initCEN(int, ZipCoder)`                                   | `java.util.zip.ZipFile$Source`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getLongUnaligned(Object, long)`                           | `jdk.internal.misc.Unsafe`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(int, float, int)`                                  | `java.util.concurrent.ConcurrentHashMap`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lastIndexOf(byte[], int, int)`                            | `java.lang.StringLatin1`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `size()`                                                   | `java.util.Collections$EmptyList`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `flip()`                                                   | `java.nio.Buffer`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `startsWith(String)`                                       | `java.lang.String`                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `offer(Object)`                                            | `java.util.concurrent.ConcurrentLinkedQueue`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `constructor-impl(Object)`                                 | `kotlin.Result`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putMethodInfo(ByteVector)`                                | `jdk.internal.org.objectweb.asm.MethodWriter`        |

##### JIT

| Change | Delta |           % | Samples | Function                      | Location    |
| -----: | ----: | ----------: | ------: | ----------------------------- | ----------- |
|    new |    +3 | 0.0% → 0.2% |   0 → 3 | `itable stub`                 | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xaaa)`     | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbabbab)`  | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbba)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                               | Location                 |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------ | ------------------------ |
|  -21.4% |   -12 | 4.3% → 3.3% | 56 → 44 | `inflate_fast`                                                                                         | `libzip.dylib`           |
|  -56.3% |    -9 | 1.2% → 0.5% |  16 → 7 | `IndexSetIterator::advance_and_next`                                                                   | `libjvm.dylib`           |
|  -53.3% |    -8 | 1.2% → 0.5% |  15 → 7 | `__psynch_cvwait`                                                                                      | `libsystem_kernel.dylib` |
|  -57.1% |    -8 | 1.1% → 0.5% |  14 → 6 | `LIR_OpVisitState::visit`                                                                              | `libjvm.dylib`           |
|  -66.7% |    -8 | 0.9% → 0.3% |  12 → 4 | `LinearScanWalker::alloc_free_reg`                                                                     | `libjvm.dylib`           |
|  -33.3% |    -7 | 1.6% → 1.1% | 21 → 14 | `__psynch_mutexwait`                                                                                   | `libsystem_kernel.dylib` |
|  -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `PhaseLive::add_liveout`                                                                               | `libjvm.dylib`           |
|  -54.5% |    -6 | 0.8% → 0.4% |  11 → 5 | `PhaseIdealLoop::build_loop_late`                                                                      | `libjvm.dylib`           |
|  -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`         | `libjvm.dylib`           |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbb)`                                                                               | `<unknown>`              |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `PhaseIdealLoop::Dominators`                                                                           | `libjvm.dylib`           |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xb)`                                                                                | `<unknown>`              |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib`           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Constant::as_Constant`                                                                                | `libjvm.dylib`           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LIR_Assembler::record_non_safepoint_debug_info`                                                       | `libjvm.dylib`           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCFG::hoist_to_cheaper_block`                                                                     | `libjvm.dylib`           |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseCFG::partial_latency_of_defs`                                                                    | `libjvm.dylib`           |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `posix_madvise`                                                                                        | `libsystem_kernel.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node::set_req_X`                                                                                      | `libjvm.dylib`           |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `MachNode::rematerialize`                                                                              | `libjvm.dylib`           |

##### Compiler

|  Change | Delta |           % | Samples | Function                                         | Location       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | -------------- |
|  -56.3% |    -9 | 1.2% → 0.5% |  16 → 7 | `IndexSetIterator::advance_and_next`             | `libjvm.dylib` |
|  -57.1% |    -8 | 1.1% → 0.5% |  14 → 6 | `LIR_OpVisitState::visit`                        | `libjvm.dylib` |
|  -66.7% |    -8 | 0.9% → 0.3% |  12 → 4 | `LinearScanWalker::alloc_free_reg`               | `libjvm.dylib` |
|  -75.0% |    -6 | 0.6% → 0.2% |   8 → 2 | `PhaseLive::add_liveout`                         | `libjvm.dylib` |
|  -54.5% |    -6 | 0.8% → 0.4% |  11 → 5 | `PhaseIdealLoop::build_loop_late`                | `libjvm.dylib` |
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `PhaseIdealLoop::Dominators`                     | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `LIR_Assembler::record_non_safepoint_debug_info` | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseCFG::hoist_to_cheaper_block`               | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseCFG::partial_latency_of_defs`              | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node::set_req_X`                                | `libjvm.dylib` |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `MachNode::rematerialize`                        | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::schedule_early`                       | `libjvm.dylib` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Node::is_CFG`                                   | `libjvm.dylib` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Compile::update_dead_node_list`                 | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `GraphBuilder::iterate_bytecodes_for_block`      | `libjvm.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `LinearScanWalker::split_before_usage`           | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `RelocIterator::advance_over_prefix`             | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `MacroAssembler::ldst_can_merge`                 | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `LIRGenerator::state_for`                        | `libjvm.dylib` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `LinearScan::compute_debug_info_for_scope`       | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
|  -21.4% |   -12 | 4.3% → 3.3% | 56 → 44 | `inflate_fast`                                                                                                                                           | `libzip.dylib`             |
|  -53.3% |    -8 | 1.2% → 0.5% |  15 → 7 | `__psynch_cvwait`                                                                                                                                        | `libsystem_kernel.dylib`   |
|  -33.3% |    -7 | 1.6% → 1.1% | 21 → 14 | `__psynch_mutexwait`                                                                                                                                     | `libsystem_kernel.dylib`   |
|  -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                           | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`                                                   | `libjvm.dylib`             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Constant::as_Constant`                                                                                                                                  | `libjvm.dylib`             |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `posix_madvise`                                                                                                                                          | `libsystem_kernel.dylib`   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `pthread_mutex_lock`                                                                                                                                     | `libsystem_pthread.dylib`  |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ClassFileParser::parse_linenumber_table`                                                                                                                | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `void G1CMTask::process_grey_task_entry<true>`                                                                                                           | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `ClassLoaderData::oops_do`                                                                                                                               | `libjvm.dylib`             |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `G1CardSet::add_card`                                                                                                                                    | `libjvm.dylib`             |
|  -16.7% |    -2 | 0.9% → 0.8% | 12 → 10 | `_platform_memset`                                                                                                                                       | `libsystem_platform.dylib` |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `SymbolTable::new_symbol`                                                                                                                                | `libjvm.dylib`             |
|  -14.3% |    -2 | 1.1% → 0.9% | 14 → 12 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `MethodData::initialize_data`                                                                                                                            | `libjvm.dylib`             |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `bsearch`                                                                                                                                                | `libsystem_c.dylib`        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `Interval::add_use_pos`                                                                                                                                  | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `JavaFrameAnchor::make_walkable`                                                                                                                         | `libjvm.dylib`             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `State::_sub_Op_If`                                                                                                                                      | `libjvm.dylib`             |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                           | Location                                                                                                                                            |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `getConeType()`                                                                                                                                                                                                    | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`                                                                                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)`                                                                                                | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                                                               |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `mergeFrom(ProtoBuf$Annotation)`                                                                                                                                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder`                                                                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `convertFunctionDeclaration(LighterASTNode)`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`                                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doValidityChecks(PsiBuilderImpl$StartMarker, PsiBuilderImpl$StartMarker)`                                                                                                                                         | `com.intellij.lang.impl.PsiBuilderImpl`                                                                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parseFile()`                                                                                                                                                                                                      | `org.jetbrains.kotlin.parsing.KotlinParsing`                                                                                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getChildren(LighterASTNode, Ref)`                                                                                                                                                                                 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                                                                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `removeLast(List)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`                                                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `makeErrorListener(KtSourceFile)`                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`                                                                                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doTravelPath(int, List, int, List)`                                                                                                                                                                               | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                                                                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `processClassifiersByNameWithSubstitution(Name, Function2)`                                                                                                                                                        | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`                                                                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)`                                                       | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                                                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createDeepCopy(FirQualifierPart)`                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitArray(Name)`                                                                                                                                                                                                 | `org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor`                                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getOwnDeprecation(LanguageVersionSettings)`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`                                                                                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `transformLegacyRawContractDescriptionOwner(FirContractDescriptionOwner, FirLegacyRawContractDescription, boolean)`                                                                                                | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `invoke(Object, Object, Object)`                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`                                                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getLazyDeclarationResolver(FirElementWithResolveState)`                                                                                                                                                           | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt`                                                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getDslMarker()`                                                                                                                                                                                                   | `org.jetbrains.kotlin.name.StandardClassIds$Annotations`                                                                                            |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                 | Location                                                                 |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `allowSecurityManager()`                                 | `java.lang.System`                                                       |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `checkNotNullParameter(Object, String)`                  | `kotlin.jvm.internal.Intrinsics`                                         |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `get(int)`                                               | `java.util.ArrayList`                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hashCode()`                                             | `jdk.internal.module.ModuleReferenceImpl`                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `exists()`                                               | `java.io.File`                                                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `reset()`                                                | `java.util.regex.Matcher`                                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Map)`                                            | `java.util.LinkedHashMap`                                                |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `next()`                                                 | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(TypeConstructor, List, TypeAttributes, boolean)` | `kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory$$Lambda$0`     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkForTypeAlias(Class)`                               | `java.lang.invoke.MemberName`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(MethodType, LambdaForm, MemberName, boolean)`    | `java.lang.invoke.DirectMethodHandle`                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hash(int, String, String)`                              | `jdk.internal.org.objectweb.asm.SymbolTable`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `changeReferenceKind(byte, byte)`                        | `java.lang.invoke.MemberName`                                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(String, String, LambdaForm, MethodType)`         | `java.lang.invoke.InvokerBytecodeGenerator`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `compress(char[], int, byte[], int, int)`                | `java.lang.StringUTF16`                                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `calcNext()`                                             | `kotlin.sequences.FilteringSequence$iterator$1`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `iterator()`                                             | `java.util.AbstractList`                                                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `checkFromToIndex(int, int, int, BiFunction)`            | `jdk.internal.util.Preconditions`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(int)`                                            | `java.lang.AbstractStringBuilder`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitEnd()`                                             | `jdk.internal.org.objectweb.asm.MethodWriter`                            |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`            | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `buildDefaultFlow(CFGNode, Function2)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change | Delta |            % | Samples | Location                                                        |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1643` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1670` |

##### `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |            % | Samples | Location                                                                         |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:181` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:189` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |            % | Samples | Location                                                             |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:715` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:723` |

##### `getNodeType(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.common.UtilKt`)

| Change | Delta |            % | Samples | Location                                                     |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt:70` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt:76` |

##### `performLexing()` (`com.intellij.lang.impl.TokenSequence$Builder`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `com.intellij.lang.impl.TokenSequence$Builder:116` |

##### `mayHaveTopLevelClassifier(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

| Change | Delta |             % | Samples | Location                                                                |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider:104` |

##### `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change | Delta |             % | Samples | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion:85` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Location                                                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:841` |

##### `transformFunctionCall(FirFunctionCall, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Location                                                                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:27` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Location                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner:26` |

##### `requestGroup(TowerGroup, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager:42` |

##### `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

| Change | Delta |             % | Samples | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:165` |

##### `getResolvedAnnotationClassIds()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol:67` |

##### `transformWhenBranch(FirWhenBranch, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Location                                                                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:27` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCallableReferences`)

| Change | Delta |             % | Samples | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCallableReferences:839` |

##### `findClass(JavaClassFinder$Request, GlobalSearchScope)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`)

| Change | Delta |             % | Samples | Location                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl:127` |

##### `argumentTypeWithCustomConversion(ConeInferenceContext, FirSession, ConeKotlinType, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor:599` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

| Change | Delta |             % | Samples | Location                                                                      |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor:26` |

##### `substituteOrNull(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor:36` |

##### `safeSubstitute(TypeSubstitutorMarker, KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change | Delta |             % | Samples | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:447` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `java.util.HashMap:713` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:726` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `java.util.HashMap:684` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.AbstractStringBuilder:243` |

##### `isLatin1()` (`java.lang.String`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.lang.String:4811` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:938` |

##### `addConstantFieldref(String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:558` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodType:371` |

##### `getDirectMethodForConstant(byte, Class, MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandles$Lookup:4314` |

##### `closeEntry()` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % | Samples | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipInputStream:171` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$HashIterator:1608` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipFile$Source:1777` |

##### `getLongUnaligned(Object, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.misc.Unsafe:3522` |

##### `<init>(int, float, int)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:893` |

##### `lastIndexOf(byte[], int, int)` (`java.lang.StringLatin1`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.StringLatin1:285` |

##### `size()` (`java.util.Collections$EmptyList`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Collections$EmptyList:4792` |

##### `flip()` (`java.nio.Buffer`)

| Change | Delta |             % | Samples | Location              |
| -----: | ----: | ------------: | ------: | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.nio.Buffer:486` |

##### `startsWith(String)` (`java.lang.String`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.String:2316` |

##### `offer(Object)` (`java.util.concurrent.ConcurrentLinkedQueue`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ConcurrentLinkedQueue:355` |

##### `putMethodInfo(ByteVector)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.MethodWriter:2257` |

##### `getConeType()` (`org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`)

|  Change | Delta |             % | Samples | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl:29` |

##### `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|  Change | Delta |            % | Samples | Location                                                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:248` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl:267` |

##### `mergeFrom(ProtoBuf$Annotation)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder:4483` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|  Change | Delta |             % | Samples | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:2020` |

##### `doValidityChecks(PsiBuilderImpl$StartMarker, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:955` |

##### `parseFile()` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.KotlinParsing:173` |

##### `getChildren(LighterASTNode, Ref)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1632` |

##### `removeLast(List)` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder:303` |

##### `makeErrorListener(KtSourceFile)` (`org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir:57` |

##### `doTravelPath(int, List, int, List)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl:211` |

##### `processClassifiersByNameWithSubstitution(Name, Function2)` (`org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`)

|  Change | Delta |             % | Samples | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope:85` |

##### `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer:52` |

##### `createDeepCopy(FirQualifierPart)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

|  Change | Delta |             % | Samples | Location                                                                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer:726` |

##### `visitArray(Name)` (`org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor`)

|  Change | Delta |             % | Samples | Location                                                                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor:191` |

##### `getOwnDeprecation(LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol:40` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver:321` |

##### `transformLegacyRawContractDescriptionOwner(FirContractDescriptionOwner, FirLegacyRawContractDescription, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer:532` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`)

|  Change | Delta |             % | Samples | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1:134` |

##### `getLazyDeclarationResolver(FirElementWithResolveState)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt`)

|  Change | Delta |             % | Samples | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt:108` |

##### `getDslMarker()` (`org.jetbrains.kotlin.name.StandardClassIds$Annotations`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.name.StandardClassIds$Annotations:198` |

##### `allowSecurityManager()` (`java.lang.System`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.lang.System:212` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -50.0% |    -2 | 100.0% |   4 → 2 | `kotlin.jvm.internal.Intrinsics:130` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:427` |

##### `hashCode()` (`jdk.internal.module.ModuleReferenceImpl`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.module.ModuleReferenceImpl:160` |

##### `exists()` (`java.io.File`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.io.File:833` |

##### `reset()` (`java.util.regex.Matcher`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.regex.Matcher:461` |

##### `<init>(Map)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.LinkedHashMap:478` |

##### `next()` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator`)

|  Change | Delta |             % | Samples | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator:549` |

##### `checkForTypeAlias(Class)` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MemberName:809` |

##### `<init>(MethodType, LambdaForm, MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.DirectMethodHandle:57` |

##### `hash(int, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change | Delta |             % | Samples | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:1281` |

##### `changeReferenceKind(byte, byte)` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MemberName:328` |

##### `<init>(String, String, LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.InvokerBytecodeGenerator:165` |

##### `compress(char[], int, byte[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringUTF16:383` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.sequences.FilteringSequence$iterator$1:204` |

##### `iterator()` (`java.util.AbstractList`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.AbstractList:301` |

##### `checkFromToIndex(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.util.Preconditions:348` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.AbstractStringBuilder:99` |

##### `visitEnd()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.MethodWriter:1802` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `PhaseChaitin::build_ifg_physical` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +69.2% |    +9 | 100.0% | 13 → 22 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                                              | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------- | -------------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `G1ParScanThreadState::steal_and_trim_queue`                        | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `G1ScanHRForRegionClosure::scan_memregion`                          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `void G1ParCopyClosure<(G1Barrier)0, false>::do_oop_work<oopDesc*>` | `libjvm.dylib` |

##### `tlv_get_addr` (`libdyld.dylib`)

|  Change | Delta |            % | Samples | Caller                                        | Location       |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 8.0% |   0 → 2 | `GraphBuilder::iterate_bytecodes_for_block`   | `libjvm.dylib` |
|     new |    +2 |  0.0% → 8.0% |   0 → 2 | `ciMethod::ensure_method_data`                | `libjvm.dylib` |
|  -50.0% |    -1 | 11.1% → 4.0% |   2 → 1 | `LinearScan::build_intervals`                 | `libjvm.dylib` |
| removed |    -1 |  5.6% → 0.0% |   1 → 0 | `LinearScan::compute_debug_info_for_scope`    | `libjvm.dylib` |
| removed |    -1 |  5.6% → 0.0% |   1 → 0 | `LinearScan::append_scope_value_for_constant` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_copy_to_survivor_space` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                          | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
| +300.0% |    +6 | 66.7% → 100.0% |   2 → 8 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue`    | `libjvm.dylib` |

##### `__psynch_mutexdrop` (`libsystem_kernel.dylib`)

|  Change | Delta |      % | Samples | Caller                                | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `_pthread_mutex_firstfit_unlock_slow` | `libsystem_pthread.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller           | Location       |
| ------: | ----: | -----: | ------: | ---------------- | -------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `Matcher::match` | `libjvm.dylib` |

##### `PhaseChaitin::gather_lrg_masks` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +57.1% |    +4 | 100.0% |  7 → 11 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseAggressiveCoalesce::insert_copies` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                            | Location       |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +80.0% |    +4 | 100.0% |   5 → 9 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `UTF8::is_legal_utf8` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                         | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | -------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `ClassFileParser::parse_constant_pool_entries` | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change | Delta |            % | Samples | Caller                    | Location       |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `WorkerThread::run`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `ResourceBitMap::ResourceBitMap` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                            | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `MethodLiveness::get_liveness_at` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `BlockBegin::BlockBegin`          | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_tree` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                               | Location       |
| ------: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `PhaseIterGVN::add_users_to_worklist` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `PhaseIterGVN::transform_old` | `libjvm.dylib` |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `PhaseIterGVN::PhaseIterGVN`  | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `IfNode::dominated_by`        | `libjvm.dylib` |

##### `PhaseIterGVN::transform_old` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                         | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `IfNode::fold_compares_helper` | `libjvm.dylib` |

##### `PhaseCFG::build_dominator_tree` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                            | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `Compile::find_alias_type` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                        | Location       |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `PhaseIdealLoop::get_late_ctrl_with_anti_dep` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Compile::alias_type`                         | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `MemNode::can_see_stored_value`               | `libjvm.dylib` |

##### `PhaseChaitin::build_ifg_virtual` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                            | Location       |
| ------: | ----: | -----: | ------: | --------------------------------- | -------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `inflate_table` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller    | Location       |
| -----: | ----: | -----: | ------: | --------- | -------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `inflate` | `libzip.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `ClassVerifier::verify_class` | `libjvm.dylib` |

##### `SymbolTable::lookup_shared` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                     | Location       |
| -----: | ----: | -------------: | ------: | -------------------------- | -------------- |
| +66.7% |    +2 | 100.0% → 83.3% |   3 → 5 | `SymbolTable::lookup_only` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 16.7% |   0 → 1 | `SymbolTable::new_symbol`  | `libjvm.dylib` |

##### `LinearScanWalker::find_optimal_split_pos` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `LinearScanWalker::split_before_usage` | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                       | Location       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `LinearScan::do_linear_scan` | `libjvm.dylib` |

##### `LinearScanWalker::free_collect_inactive_fixed` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location       |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +40.0% |    +2 | 100.0% |   5 → 7 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `LinearScan::append_scope_value` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `OopMapValue::write_on` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `OopMap::OopMap`              | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `OopMap::set_oop`             | `libjvm.dylib` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `LinearScan::compute_oop_map` | `libjvm.dylib` |

##### `GraphBuilder::append_with_bci` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `GraphBuilder::iterate_bytecodes_for_block` | `libjvm.dylib` |

##### `MethodLiveness::get_liveness_at` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `LIRGenerator::state_for` | `libjvm.dylib` |

##### `BlockBegin::set_end` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::setup_start_block`  | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `MethodLiveness::BasicBlock::compute_gen_kill_single` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                               | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `MethodLiveness::BasicBlock::compute_gen_kill_range` | `libjvm.dylib` |

##### `PhaseChaitin::elide_copy` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                     | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `PhaseChaitin::post_allocate_copy_removal` | `libjvm.dylib` |

##### `Location::write_on` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                             | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `LocationValue::write_on`                          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `State::MachNodeGenerator` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location       |
| -----: | ----: | ------------: | ------: | --------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Matcher::ReduceInst` | `libjvm.dylib` |

##### `State::_sub_Op_AddP` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller       | Location       |
| -----: | ----: | ------------: | ------: | ------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `State::DFA` | `libjvm.dylib` |

##### `If::input_values_do` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `BlockBegin::iterate_preorder`   | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `SubstitutionResolver::block_do` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|  +25.0% |    +2 | 88.9% → 90.9% |  8 → 10 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `InstanceKlass::find_method`            | `libjvm.dylib` |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |

##### `compare_immediate_pair` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller    | Location            |
| ------: | ----: | -----: | ------: | --------- | ------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `bsearch` | `libsystem_c.dylib` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                     | Location    |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `jbyte_disjoint_arraycopy` | `<unknown>` |

##### `ClassVerifier::verify_invoke_instructions` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                         | Location       |
| ------: | ----: | -----: | ------: | ------------------------------ | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `ClassVerifier::verify_method` | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SymbolTable::lookup_only`                 | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `ImmutableOopMapBuilder::build`            | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `DebugInformationRecorder::describe_scope` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `SymbolTable::new_symbol`                  | `libjvm.dylib` |

##### `CodeHeap::block_start` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `CodeCache::next_blob`                        | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `CodeCache::make_marked_nmethods_deoptimized` | `libjvm.dylib` |

##### `buildDefaultFlow(CFGNode, Function2)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change | Delta |             % | Samples | Caller                                  | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `mergeIncomingFlow(CFGNode, Function2)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Caller                                                                                                                      | Location                                                                     |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Caller                                                                                                                              | Location                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `getNodeType(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.common.UtilKt`)

| Change | Delta |            % | Samples | Caller                                                           | Location                                                                  |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`           |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `transform(String, MethodNode)`                                  | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer` |

##### `performLexing()` (`com.intellij.lang.impl.TokenSequence$Builder`)

| Change | Delta |             % | Samples | Caller                               | Location                               |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `performLexing(CharSequence, Lexer)` | `com.intellij.lang.impl.TokenSequence` |

##### `mayHaveTopLevelClassifier(ClassId)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

| Change | Delta |             % | Samples | Caller                                 | Location                                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                    | Location                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Caller                                                                   | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformPropertyAccessExpression(FirPropertyAccessExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformFunctionCall(FirFunctionCall, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Caller                              | Location                                               |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Caller                                                                                                         | Location                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `requestGroup(TowerGroup, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |             % | Samples | Caller                                                                               | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

| Change | Delta |             % | Samples | Caller                                                         | Location                                                                                  |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformFunctionCall(FirFunctionCall, ExpectedArgumentType)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `getResolvedAnnotationClassIds()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hasOnlyInputTypesAttribute(TypeVariableMarker)` | `org.jetbrains.kotlin.fir.resolve.inference.ConeConstraintSystemUtilContext` |

##### `transformWhenBranch(FirWhenBranch, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |             % | Samples | Caller                              | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCallableReferences`)

| Change | Delta |             % | Samples | Caller                  | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `findClass(JavaClassFinder$Request, GlobalSearchScope)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findClass(JavaClassFinder$Request, GlobalSearchScope)` | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade$CliFinder` |

##### `argumentTypeWithCustomConversion(ConeInferenceContext, FirSession, ConeKotlinType, ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

| Change | Delta |             % | Samples | Caller                                                                                                                              | Location                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

| Change | Delta |             % | Samples | Caller                                       | Location                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getValue(AbstractArrayMapOwner, KProperty)` | `org.jetbrains.kotlin.util.NullableArrayMapAccessor` |

##### `substituteOrNull(ConeKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

| Change | Delta |             % | Samples | Caller                             | Location                                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `substituteOrSelf(ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutor` |

##### `safeSubstitute(TypeSubstitutorMarker, KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change | Delta |             % | Samples | Caller                                                    | Location                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `safeSubstitute(TypeSubstitutorMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.fir.types.ConeInferenceContext` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                                          | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

| Change | Delta |            % | Samples | Caller           | Location                          |
| -----: | ----: | -----------: | ------: | ---------------- | --------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `append(String)` | `java.lang.AbstractStringBuilder` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `append(char)`   | `java.lang.AbstractStringBuilder` |

##### `isLatin1()` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller        | Location           |
| -----: | ----: | ------------: | ------: | ------------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `charAt(int)` | `java.lang.String` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                     | Location                                 |
| -----: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findLoadedModule(String)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `addConstantFieldref(String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Caller                                        | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitFieldInsn(int, String, String, String)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `newInvokeSpecial(Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001020400`)

| Change | Delta |             % | Samples | Caller                                                       | Location                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkToTargetMethod(Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change | Delta |             % | Samples | Caller                          | Location                          |
| -----: | ----: | ------------: | ------: | ------------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `canonicalize(MethodType, int)` | `java.lang.invoke.MethodTypeForm` |

##### `getDirectMethodForConstant(byte, Class, MemberName)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Caller                                                  | Location                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `linkMethodHandleConstant(byte, Class, String, Object)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `closeEntry()` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % | Samples | Caller           | Location                       |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getNextEntry()` | `java.util.zip.ZipInputStream` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller   | Location                          |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Caller                                          | Location                       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `getLongUnaligned(Object, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller                                                     | Location                          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `vectorizedMismatch(Object, long, Object, long, int, int)` | `jdk.internal.util.ArraysSupport` |

##### `<init>(int, float, int)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % | Samples | Caller                      | Location                                                           |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createConcurrentHashMap()` | `kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager` |

##### `lastIndexOf(byte[], int, int)` (`java.lang.StringLatin1`)

| Change | Delta |             % | Samples | Caller                  | Location           |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lastIndexOf(int, int)` | `java.lang.String` |

##### `size()` (`java.util.Collections$EmptyList`)

| Change | Delta |             % | Samples | Caller               | Location                                                  |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getArgumentCount()` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type` |

##### `flip()` (`java.nio.Buffer`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `flip()` | `java.nio.ByteBuffer` |

##### `startsWith(String)` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller                                | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `startsWith(String, String, boolean)` | `kotlin.text.StringsKt__StringsJVMKt` |

##### `offer(Object)` (`java.util.concurrent.ConcurrentLinkedQueue`)

| Change | Delta |             % | Samples | Caller        | Location                                     |
| -----: | ----: | ------------: | ------: | ------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `add(Object)` | `java.util.concurrent.ConcurrentLinkedQueue` |

##### `constructor-impl(Object)` (`kotlin.Result`)

| Change | Delta |             % | Samples | Caller  | Location                            |
| -----: | ----: | ------------: | ------: | ------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `run()` | `kotlinx.coroutines.DispatchedTask` |

##### `putMethodInfo(ByteVector)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Caller          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `itable stub` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                   | Location                                           |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `collectionSizeOrDefault(Iterable, int)` | `kotlin.collections.CollectionsKt__IterablesKt`    |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `zip(Iterable, Iterable)`                | `kotlin.collections.CollectionsKt___CollectionsKt` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `hasNext()`                              | `kotlin.sequences.TransformingSequence$iterator$1` |

##### `I2C/C2I adapters(0xaaa)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                  | Location                  |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `put(byte[], int, int)` | `java.nio.HeapByteBuffer` |

##### `I2C/C2I adapters(0xbabbab)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                       | Location                                               |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall` |

##### `I2C/C2I adapters(0xbbbbbba)` (`<unknown>`)

| Change | Delta |             % | Samples | Caller       | Location                                        |
| -----: | ----: | ------------: | ------: | ------------ | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitEnd()` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `inflate_fast` (`libzip.dylib`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -21.4% |   -12 | 100.0% | 56 → 44 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `IndexSetIterator::advance_and_next` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|  -88.9% |    -8 | 56.3% → 14.3% |   9 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |
| +300.0% |    +3 |  6.3% → 57.1% |   1 → 4 | `PhaseIFG::effective_degree`       | `libjvm.dylib` |
| removed |    -2 |  12.5% → 0.0% |   2 → 0 | `PhaseIFG::SquareUp`               | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `PhaseLive::add_liveout`           | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `PhaseIFG::re_insert`              | `libjvm.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                  | Location       |
| -----: | ----: | -----: | ------: | ----------------------- | -------------- |
| -53.3% |    -8 | 100.0% |  15 → 7 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -5 |  35.7% → 0.0% |   5 → 0 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|  -40.0% |    -2 | 35.7% → 50.0% |   5 → 3 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  -50.0% |    -2 | 28.6% → 33.3% |   4 → 2 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `LinearScan::do_linear_scan`          | `libjvm.dylib` |

##### `LinearScanWalker::alloc_free_reg` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -66.7% |    -8 | 100.0% |  12 → 4 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -33.3% |    -7 | 100.0% | 21 → 14 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `PhaseLive::add_liveout` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                            | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------- | -------------- |
|  -71.4% |    -5 | 87.5% → 100.0% |   7 → 2 | `PhaseLive::compute`              | `libjvm.dylib` |
| removed |    -1 |   12.5% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -54.5% |    -6 | 100.0% |  11 → 5 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                         | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
|  -36.4% |    -4 | 91.7% → 100.0% |  11 → 7 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `G1CMTask::drain_local_queue`                  | `libjvm.dylib` |

##### `I2C/C2I adapters(0xbb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                                                       | Location                                                                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                    |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `<init>(FirClassSymbol, ConeKotlinType, InaccessibleReceiverKind, FirSession, ScopeSession)` | `org.jetbrains.kotlin.fir.resolve.calls.InaccessibleImplicitReceiverValue`                |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `hasNothingSupertype(TypeCheckerState, TypeSystemContext, RigidTypeMarker)`                  | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                          |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `processPropertiesByName(Name, Function1)`                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirLocalScope`                                      |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `removeExactAttribute(ConeKotlinType)`                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `PhaseIdealLoop::Dominators` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `I2C/C2I adapters(0xb)` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                              | Location                                                                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `parseTypeConstraintsGuarded(boolean)`                              | `org.jetbrains.kotlin.parsing.KotlinParsing`                                                 |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `hasExtensionKinds()`                                               | `org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor`                          |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `toResolvedReference(FirNamedReferenceWithCandidate)`               | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`    |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirTypeParameter)`       | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirTypeParameterVarianceChecker`     |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirCallableDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExtensionShadowedByMemberChecker` |

##### `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_object` | `libjvm.dylib` |

##### `Constant::as_Constant` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |

##### `LIR_Assembler::record_non_safepoint_debug_info` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `LIR_Assembler::process_debug_info` | `libjvm.dylib` |

##### `PhaseCFG::hoist_to_cheaper_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCFG::schedule_late` | `libjvm.dylib` |

##### `PhaseCFG::partial_latency_of_defs` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `posix_madvise` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller        | Location                 |
| -----: | ----: | -----: | ------: | ------------- | ------------------------ |
| -75.0% |    -3 | 100.0% |   4 → 1 | `free_medium` | `libsystem_malloc.dylib` |

##### `Node::set_req_X` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                    | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | -------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `Node::replace_edge`                      | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |

##### `MachNode::rematerialize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| -66.7% |    -2 | 60.0% → 50.0% |   3 → 1 | `PhaseChaitin::Split`              | `libjvm.dylib` |
| -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `PhaseChaitin::build_ifg_physical` | `libjvm.dylib` |

##### `PhaseCFG::schedule_early` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                         | Location       |
| -----: | ----: | -----: | ------: | ------------------------------ | -------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Node::is_CFG` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `RegionNode::is_unreachable_region`  | `libjvm.dylib` |
|  -50.0% |    -1 | 50.0% → 100.0% |   2 → 1 | `PhaseIdealLoop::Dominators`         | `libjvm.dylib` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Compile::update_dead_node_list` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseRemoveUseless::PhaseRemoveUseless` | `libjvm.dylib` |

##### `GraphBuilder::iterate_bytecodes_for_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `GraphBuilder::iterate_all_blocks` | `libjvm.dylib` |

##### `LinearScanWalker::split_before_usage` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                             | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `LinearScanWalker::alloc_free_reg` | `libjvm.dylib` |

##### `RelocIterator::advance_over_prefix` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                          | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `nmethod::finalize_relocations` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `nmethod::fix_oop_relocations`  | `libjvm.dylib` |

##### `MacroAssembler::ldst_can_merge` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `MacroAssembler::str` | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LIRGenerator::do_Invoke` | `libjvm.dylib` |

##### `LinearScan::compute_debug_info_for_scope` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                     | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScan::compute_debug_info_for_scope` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScan::assign_reg_num`               | `libjvm.dylib` |

##### `pthread_mutex_lock` (`libsystem_pthread.dylib`)

|  Change | Delta |            % | Samples | Caller                                | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `metaspace::MetaspaceArena::allocate` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ThreadCritical::ThreadCritical`      | `libjvm.dylib` |

##### `ClassFileParser::parse_linenumber_table` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `ClassFileParser::parse_method` | `libjvm.dylib` |

##### `void G1CMTask::process_grey_task_entry<true>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1CMBitMap::iterate` | `libjvm.dylib` |

##### `ClassLoaderData::oops_do` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                         | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `void G1CMTask::process_grey_task_entry<true>` | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1ConcurrentMark::scan_root_region`           | `libjvm.dylib` |

##### `G1CardSet::add_card` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Caller                                                                                                 | Location       |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------ | -------------- |
| -60.0% |    -3 | 100.0% → 66.7% |   5 → 2 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 33.3% |   0 → 1 | `void InstanceRefKlass::oop_oop_iterate<narrowOop, G1RebuildRemSetClosure>`                            | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|  Change | Delta |            % | Samples | Caller                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|     new |    +2 | 0.0% → 20.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |
|     new |    +2 | 0.0% → 20.0% |   0 → 2 | `MarkBitMap::do_clear`               | `libjvm.dylib` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `GraphBuilder::push_scope`           | `libjvm.dylib` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `Matcher::ReduceInst`                | `libjvm.dylib` |
| removed |    -1 |  8.3% → 0.0% |   1 → 0 | `Compile::remove_speculative_types`  | `libjvm.dylib` |

##### `SymbolTable::new_symbol` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                          | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |
|  +50.0% |    +1 | 40.0% → 100.0% |   2 → 3 | `SignatureStream::find_symbol`  | `libjvm.dylib` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `InstanceKlass::set_package`    | `libjvm.dylib` |

##### `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                             | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
| -25.0% |    -3 | 85.7% → 75.0% |  12 → 9 | `DebugInformationRecorder::describe_scope`         | `libjvm.dylib` |
| +50.0% |    +1 | 14.3% → 25.0% |   2 → 3 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `MethodData::initialize_data` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `MethodData::initialize` | `libjvm.dylib` |

##### `bsearch` (`libsystem_c.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `encoding_for_logical_immediate` | `libjvm.dylib` |

##### `Interval::add_use_pos` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                        | Location       |
| ------: | ----: | -----------: | ------: | ----------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScan::do_linear_scan`  | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `LinearScan::build_intervals` | `libjvm.dylib` |

##### `JavaFrameAnchor::make_walkable` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                   | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------- | -------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TypeInstPtr::is_meet_subtype_of_helper` | `libjvm.dylib`             |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `allocateInstance(Class)`                | `jdk.internal.misc.Unsafe` |

##### `State::_sub_Op_If` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller       | Location       |
| ------: | ----: | ------------: | ------: | ------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `State::DFA` | `libjvm.dylib` |

##### `getConeType()` (`org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`)

|  Change | Delta |            % | Samples | Caller                                                          | Location                                                                                                 |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `transformTypeRef(FirTypeRef, ResolutionMode)`                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirProjectionRelationChecker`                           |

##### `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

|  Change | Delta |             % | Samples | Caller                                                                                                        | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `mergeFrom(ProtoBuf$Annotation)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder`)

|  Change | Delta |             % | Samples | Caller                                               | Location                                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `mergeFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Builder` |

##### `convertFunctionDeclaration(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `doValidityChecks(PsiBuilderImpl$StartMarker, PsiBuilderImpl$StartMarker)` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Caller                                                                        | Location                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `processDone(PsiBuilderImpl$StartMarker, String, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `parseFile()` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|  Change | Delta |             % | Samples | Caller                       | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parse(PsiBuilder, boolean)` | `org.jetbrains.kotlin.parsing.KotlinLightParser` |

##### `getChildren(LighterASTNode, Ref)` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getChildren(Object, Ref)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `removeLast(List)` (`org.jetbrains.kotlin.fir.builder.AbstractRawFirBuilder`)

|  Change | Delta |             % | Samples | Caller              | Location    |
| ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `break_stack_range` | `<unknown>` |

##### `makeErrorListener(KtSourceFile)` (`org.jetbrains.kotlin.fir.lightTree.LightTree2Fir`)

|  Change | Delta |             % | Samples | Caller                                                               | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildFirFile(CharSequence, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir` |

##### `doTravelPath(int, List, int, List)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `travelPath(int, FqName, List, int, List)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl` |

##### `processClassifiersByNameWithSubstitution(Name, Function2)` (`org.jetbrains.kotlin.fir.scopes.impl.FirPackageMemberScope`)

|  Change | Delta |             % | Samples | Caller                                                                                   | Location                                                              |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `iterateScopesWithSubstitution(TypeResolutionConfiguration, Name, Function3, Function0)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `<init>(FirModuleData, NameResolver, TypeTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, List, FirTypeDeserializer, FirBasedSymbol)` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                          | Location                                                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createRootContext(NameResolver, TypeTable, FirModuleData, VersionRequirementTable, AnnotationDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirConstDeserializer, FirKDocDeserializer, FqName, FqName, List, DeserializedContainerSource, FirRegularClassSymbol, EffectiveVisibility, FirBasedSymbol)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext$Companion` |

##### `createDeepCopy(FirQualifierPart)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                                                               |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `createDeepCopyOfTypeRef(FirUserTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |

##### `visitArray(Name)` (`org.jetbrains.kotlin.load.kotlin.header.ReadKotlinClassHeaderAnnotationVisitor$KotlinMetadataArgumentVisitor`)

|  Change | Delta |             % | Samples | Caller               | Location                                                  |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `visitArray(String)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$3` |

##### `getOwnDeprecation(LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`)

|  Change | Delta |             % | Samples | Caller                                     | Location                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isDeprecationLevelHidden(FirBasedSymbol)` | `org.jetbrains.kotlin.fir.declarations.FirHiddenDeprecationProvider` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                   | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `transformLegacyRawContractDescriptionOwner(FirContractDescriptionOwner, FirLegacyRawContractDescription, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer`)

|  Change | Delta |             % | Samples | Caller                                                           | Location                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformContractDescriptionOwner(FirContractDescriptionOwner)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt$lazyResolveToPhase$1`)

|  Change | Delta |             % | Samples | Caller                                                                             | Location                                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeLazyResolveToPhase(FirElementWithResolveState, FirResolvePhase, Function3)` | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt` |

##### `getLazyDeclarationResolver(FirElementWithResolveState)` (`org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt`)

|  Change | Delta |             % | Samples | Caller                                                             | Location                                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lazyResolveToPhaseWithCallableMembers(FirClass, FirResolvePhase)` | `org.jetbrains.kotlin.fir.symbols.FirLazyDeclarationResolverKt` |

##### `getDslMarker()` (`org.jetbrains.kotlin.name.StandardClassIds$Annotations`)

|  Change | Delta |             % | Samples | Caller              | Location    |
| ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `break_stack_range` | `<unknown>` |

##### `allowSecurityManager()` (`java.lang.System`)

|  Change | Delta |             % | Samples | Caller                 | Location           |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `getSecurityManager()` | `java.lang.System` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Caller                                                                           | Location                                                                               |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>(ConstraintKind, Set, OnlyInputTypeConstraintPosition, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintContext`            |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `extractValue(AbstractArrayMapOwner)`                                            | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`             |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `checkSyntax(CheckerContext, DiagnosticReporter, FirElement)`                    | `org.jetbrains.kotlin.fir.analysis.checkers.syntax.FirSyntaxChecker`                   |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `addTypeParameters$org_jetbrains_kotlin_frontend_common_jvm(Collection)`         | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.ClassifierResolutionContext` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>(ControlFlowGraph, FirExpression, FirLoop, int)`                          | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.LoopConditionEnterNode`                      |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller           | Location                           |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `hashCode()` (`jdk.internal.module.ModuleReferenceImpl`)

|  Change | Delta |             % | Samples | Caller        | Location                                 |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get(Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `exists()` (`java.io.File`)

|  Change | Delta |             % | Samples | Caller     | Location                            |
| ------: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `exists()` | `jdk.internal.loader.FileURLMapper` |

##### `reset()` (`java.util.regex.Matcher`)

|  Change | Delta |             % | Samples | Caller                          | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Pattern, CharSequence)` | `java.util.regex.Matcher` |

##### `<init>(Map)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `next()` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator`)

|  Change | Delta |             % | Samples | Caller   | Location                                                                 |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `next()` | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator` |

##### `<init>(TypeConstructor, List, TypeAttributes, boolean)` (`kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory$$Lambda$0`)

|  Change | Delta |             % | Samples | Caller                                                                          | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `simpleType(TypeAttributes, TypeConstructor, List, boolean, KotlinTypeRefiner)` | `kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory` |

##### `checkForTypeAlias(Class)` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Caller                                           | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `resolve(byte, MemberName, Class, int, boolean)` | `java.lang.invoke.MemberName$Factory` |

##### `<init>(MethodType, LambdaForm, MemberName, boolean)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |             % | Samples | Caller                                                                   | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(MethodType, LambdaForm, MemberName, boolean, MemberName, Class)` | `java.lang.invoke.DirectMethodHandle$Constructor` |

##### `hash(int, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `changeReferenceKind(byte, byte)` (`java.lang.invoke.MemberName`)

|  Change | Delta |             % | Samples | Caller            | Location                      |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `asConstructor()` | `java.lang.invoke.MemberName` |

##### `<init>(String, String, LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(String, LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `compress(char[], int, byte[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % | Samples | Caller                       | Location                |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compress(char[], int, int)` | `java.lang.StringUTF16` |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

|  Change | Delta |             % | Samples | Caller      | Location                                        |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `iterator()` (`java.util.AbstractList`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(UnmodifiableLazyStringList)` | `org.jetbrains.kotlin.protobuf.UnmodifiableLazyStringList$2` |

##### `checkFromToIndex(int, int, int, BiFunction)` (`jdk.internal.util.Preconditions`)

|  Change | Delta |             % | Samples | Caller                               | Location           |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkBoundsBeginEnd(int, int, int)` | `java.lang.String` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % | Samples | Caller     | Location                  |
| ------: | ----: | ------------: | ------: | ---------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `visitEnd()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change | Delta |             % | Samples | Caller                  | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `zero_blocks` (`<unknown>`)

| Change | Delta |      % | Samples | Caller        | Location                        |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `<init>(int)` | `java.io.ByteArrayOutputStream` |

##### `vtable stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location                                               |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.references.FirThisReference` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                           | Location                                                |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +40.0% |   +24 |   4.6% → 6.4% |   60 → 84 | `WorkerThread::run`                                                                                | `libjvm.dylib`                                          |
|  +95.2% |   +20 |   1.6% → 3.1% |   21 → 41 | `InstanceKlass::link_class_impl`                                                                   | `libjvm.dylib`                                          |
|  +95.0% |   +19 |   1.5% → 3.0% |   20 → 39 | `InstanceKlass::initialize_impl`                                                                   | `libjvm.dylib`                                          |
| +154.5% |   +17 |   0.8% → 2.1% |   11 → 28 | `InterpreterRuntime::resolve_from_cache`                                                           | `libjvm.dylib`                                          |
|   +4.6% |   +16 | 26.6% → 27.5% | 346 → 362 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                              |
|   +4.7% |   +16 | 26.4% → 27.4% | 344 → 360 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|   +4.7% |   +16 | 26.2% → 27.2% | 342 → 358 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|   +4.7% |   +16 | 26.2% → 27.2% | 342 → 358 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|   +4.7% |   +16 | 26.2% → 27.2% | 342 → 358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                      |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|   +4.4% |   +15 | 26.4% → 27.3% | 344 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +187.5% |   +15 |   0.6% → 1.7% |    8 → 23 | `Verifier::verify`                                                                                 | `libjvm.dylib`                                          |
|   +4.1% |   +14 | 26.0% → 26.8% | 339 → 353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +59.1% |   +13 |   1.7% → 2.7% |   22 → 35 | `G1EvacuateRegionsBaseTask::work`                                                                  | `libjvm.dylib`                                          |

##### Compiler

|  Change | Delta |           % | Samples | Function                                           | Location       |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------- |
| +150.0% |   +12 | 0.6% → 1.5% |  8 → 20 | `BlockList::iterate_forward`                       | `libjvm.dylib` |
| +137.5% |   +11 | 0.6% → 1.4% |  8 → 19 | `LIRGenerator::block_do`                           | `libjvm.dylib` |
|  +68.8% |   +11 | 1.2% → 2.1% | 16 → 27 | `ciBytecodeStream::get_method`                     | `libjvm.dylib` |
|  +13.5% |   +10 | 5.7% → 6.4% | 74 → 84 | `Compilation::build_hir`                           | `libjvm.dylib` |
|  +30.3% |   +10 | 2.5% → 3.3% | 33 → 43 | `PhaseOutput::Output`                              | `libjvm.dylib` |
|  +53.3% |    +8 | 1.2% → 1.7% | 15 → 23 | `PhaseIdealLoop::split_if_with_blocks`             | `libjvm.dylib` |
|  +26.7% |    +8 | 2.3% → 2.9% | 30 → 38 | `Matcher::xform`                                   | `libjvm.dylib` |
| +700.0% |    +7 | 0.1% → 0.6% |   1 → 8 | `MethodLiveness::get_liveness_at`                  | `libjvm.dylib` |
| +700.0% |    +7 | 0.1% → 0.6% |   1 → 8 | `PhaseOutput::Process_OopMap_Node`                 | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |
| +200.0% |    +6 | 0.2% → 0.7% |   3 → 9 | `DebugInformationRecorder::create_scope_values`    | `libjvm.dylib` |
| +300.0% |    +6 | 0.2% → 0.6% |   2 → 8 | `GraphBuilder::append_with_bci`                    | `libjvm.dylib` |
|  +85.7% |    +6 | 0.5% → 1.0% |  7 → 13 | `ciObjectFactory::create_new_metadata`             | `libjvm.dylib` |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `ciMethod::ciMethod`                               | `libjvm.dylib` |
|   +7.1% |    +6 | 6.4% → 6.8% | 84 → 90 | `PhaseIdealLoop::build_and_optimize`               | `libjvm.dylib` |
|   +7.1% |    +6 | 6.4% → 6.8% | 84 → 90 | `PhaseIdealLoop::PhaseIdealLoop`                   | `libjvm.dylib` |
|  +45.5% |    +5 | 0.8% → 1.2% | 11 → 16 | `ciEnv::get_method_by_index_impl`                  | `libjvm.dylib` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `LIRGenerator::state_for`                          | `libjvm.dylib` |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `ciSignature::ciSignature`                         | `libjvm.dylib` |
| +166.7% |    +5 | 0.2% → 0.6% |   3 → 8 | `PhaseIdealLoop::split_if_with_blocks_pre`         | `libjvm.dylib` |

##### Native

|  Change | Delta |           % | Samples | Function                                        | Location        |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | --------------- |
|  +40.0% |   +24 | 4.6% → 6.4% | 60 → 84 | `WorkerThread::run`                             | `libjvm.dylib`  |
|  +95.2% |   +20 | 1.6% → 3.1% | 21 → 41 | `InstanceKlass::link_class_impl`                | `libjvm.dylib`  |
|  +95.0% |   +19 | 1.5% → 3.0% | 20 → 39 | `InstanceKlass::initialize_impl`                | `libjvm.dylib`  |
| +154.5% |   +17 | 0.8% → 2.1% | 11 → 28 | `InterpreterRuntime::resolve_from_cache`        | `libjvm.dylib`  |
| +187.5% |   +15 | 0.6% → 1.7% |  8 → 23 | `Verifier::verify`                              | `libjvm.dylib`  |
|  +59.1% |   +13 | 1.7% → 2.7% | 22 → 35 | `G1EvacuateRegionsBaseTask::work`               | `libjvm.dylib`  |
| +325.0% |   +13 | 0.3% → 1.3% |  4 → 17 | `LinkResolver::resolve_invoke`                  | `libjvm.dylib`  |
| +325.0% |   +13 | 0.3% → 1.3% |  4 → 17 | `InterpreterRuntime::resolve_invoke`            | `libjvm.dylib`  |
|     new |   +13 | 0.0% → 1.0% |  0 → 13 | `CodeCacheUnloadingTask::work`                  | `libjvm.dylib`  |
|     new |   +13 | 0.0% → 1.0% |  0 → 13 | `G1ParallelCleaningTask::work`                  | `libjvm.dylib`  |
| +240.0% |   +12 | 0.4% → 1.3% |  5 → 17 | `LinkResolver::resolve_static_call`             | `libjvm.dylib`  |
| +150.0% |   +12 | 0.6% → 1.5% |  8 → 20 | `ClassVerifier::verify_class`                   | `libjvm.dylib`  |
|  +61.1% |   +11 | 1.4% → 2.2% | 18 → 29 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib`  |
| +157.1% |   +11 | 0.5% → 1.4% |  7 → 18 | `ClassVerifier::verify_method`                  | `libjvm.dylib`  |
|  +56.3% |    +9 | 1.2% → 1.9% | 16 → 25 | `InterpreterRuntime::_new`                      | `libjvm.dylib`  |
| +133.3% |    +8 | 0.5% → 1.1% |  6 → 14 | `G1EvacuateRegionsTask::scan_roots`             | `libjvm.dylib`  |
|  +38.9% |    +7 | 1.4% → 1.9% | 18 → 25 | `tlv_get_addr`                                  | `libdyld.dylib` |
| +140.0% |    +7 | 0.4% → 0.9% |  5 → 12 | `LinkResolver::resolve_method`                  | `libjvm.dylib`  |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `SignatureStream::find_symbol`                  | `libjvm.dylib`  |
|  +12.1% |    +7 | 4.5% → 4.9% | 58 → 65 | `Parse::Parse`                                  | `libjvm.dylib`  |

##### Ours

| Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +4.7% |   +16 | 26.4% → 27.4% | 344 → 360 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  +4.7% |   +16 | 26.2% → 27.2% | 342 → 358 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +4.7% |   +16 | 26.2% → 27.2% | 342 → 358 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +4.7% |   +16 | 26.2% → 27.2% | 342 → 358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`  |
|  +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  +4.4% |   +15 | 26.4% → 27.3% | 344 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|  +4.1% |   +14 | 26.0% → 26.8% | 339 → 353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +3.1% |   +13 | 32.4% → 33.1% | 422 → 435 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`             |
|  +3.1% |   +13 | 32.4% → 33.1% | 422 → 435 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`             |
|  +3.9% |   +13 | 25.4% → 26.2% | 331 → 344 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  +3.9% |   +13 | 25.4% → 26.2% | 331 → 344 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
|  +3.9% |   +13 | 25.4% → 26.2% | 331 → 344 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|  +3.9% |   +13 | 25.3% → 26.1% | 330 → 343 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  +3.9% |   +13 | 25.3% → 26.1% | 330 → 343 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  +3.9% |   +13 | 25.3% → 26.1% | 330 → 343 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|  +4.0% |   +13 | 25.2% → 26.0% | 329 → 342 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
| +11.4% |   +13 |   8.7% → 9.7% | 114 → 127 | `transform(FirTransformer, Object)`                                                                                                           | `org.jetbrains.kotlin.fir.declarations.FirFile`         |
|  +3.7% |   +12 | 25.2% → 25.9% | 328 → 340 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |
|  +3.7% |   +12 | 25.2% → 25.9% | 328 → 340 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`       |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                                                                   | Location                                                                                      |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   +4.6% |   +16 | 26.6% → 27.5% | 346 → 362 | `invoke(Object, Object[])`                                                                                                 | `java.lang.reflect.Method`                                                                    |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeStatic(Object, Object)`                                                                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                                          |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invoke(Object, Object, Object)`                                                                                           | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                                           |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeExact_MT(Object, Object, Object, Object)`                                                                           | `java.lang.invoke.Invokers$Holder`                                                            |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeImpl(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                                             |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invoke(Object, Object[])`                                                                                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`                                             |
|  +20.5% |    +9 |   3.4% → 4.0% |   44 → 53 | `resumeWith(Object)`                                                                                                       | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                         |
| +166.7% |    +5 |   0.2% → 0.6% |     3 → 8 | `generateInnerClass()`                                                                                                     | `java.lang.invoke.InnerClassLambdaMetafactory`                                                |
| +166.7% |    +5 |   0.2% → 0.6% |     3 → 8 | `spinInnerClass()`                                                                                                         | `java.lang.invoke.InnerClassLambdaMetafactory`                                                |
|  +83.3% |    +5 |   0.5% → 0.8% |    6 → 11 | `getValue()`                                                                                                               | `kotlin.UnsafeLazyImpl`                                                                       |
| +400.0% |    +4 |   0.1% → 0.4% |     1 → 5 | `put(Object, Object)`                                                                                                      | `java.util.HashMap`                                                                           |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `hash(Object)`                                                                                                             | `java.util.HashMap`                                                                           |
|  +23.1% |    +3 |   1.0% → 1.2% |   13 → 16 | `getValue()`                                                                                                               | `kotlin.SynchronizedLazyImpl`                                                                 |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `resize()`                                                                                                                 | `java.util.HashMap`                                                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `putVal(int, Object, Object, boolean, boolean)`                                                                            | `java.util.HashMap`                                                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `createModuleData(KotlinClassFinder, KotlinClassFinder, JavaClassFinder, String, ErrorReporter, JavaSourceElementFactory)` | `kotlin.reflect.jvm.internal.impl.load.kotlin.DeserializationComponentsForJava$Companion`     |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `create(ClassLoader)`                                                                                                      | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData$Companion` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `getOrCreateModule(Class)`                                                                                                 | `kotlin.reflect.jvm.internal.ModuleByClassLoaderKt`                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `moduleData_delegate$lambda$0(KDeclarationContainerImpl)`                                                                  | `kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data`                                  |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `accessor$KDeclarationContainerImpl$Data$lambda0(KDeclarationContainerImpl)`                                               | `kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data`                                  |

##### JIT

| Change | Delta |           % | Samples | Function                      | Location    |
| -----: | ----: | ----------: | ------: | ----------------------------- | ----------- |
|    new |    +3 | 0.0% → 0.2% |   0 → 3 | `itable stub`                 | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xaaa)`     | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbabbab)`  | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbba)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                      | Location                                                 |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------------------------------------------------- |
|  -3.1% |   -25 | 61.9% → 59.4% | 806 → 781 | `CompileBroker::compiler_thread_loop`                         | `libjvm.dylib`                                           |
|  -3.0% |   -24 | 60.8% → 58.4% | 792 → 768 | `CompileBroker::invoke_compiler_on_method`                    | `libjvm.dylib`                                           |
| -24.5% |   -24 |   7.5% → 5.6% |   98 → 74 | `LinearScan::do_linear_scan`                                  | `libjvm.dylib`                                           |
| -54.5% |   -24 |   3.4% → 1.5% |   44 → 20 | `PhaseCFG::global_code_motion`                                | `libjvm.dylib`                                           |
| -51.1% |   -24 |   3.6% → 1.7% |   47 → 23 | `PhaseCFG::do_global_code_motion`                             | `libjvm.dylib`                                           |
|  -2.9% |   -23 | 61.9% → 59.5% | 806 → 783 | `JavaThread::thread_main_inner`                               | `libjvm.dylib`                                           |
|  -4.2% |   -23 | 41.8% → 39.7% | 545 → 522 | `Compile::Compile`                                            | `libjvm.dylib`                                           |
|  -4.2% |   -23 | 41.9% → 39.8% | 546 → 523 | `C2Compiler::compile_method`                                  | `libjvm.dylib`                                           |
|  -6.3% |   -18 | 21.9% → 20.3% | 285 → 267 | `Compile::Code_Gen`                                           | `libjvm.dylib`                                           |
|  -7.3% |   -14 | 14.8% → 13.6% | 193 → 179 | `Compile::Optimize`                                           | `libjvm.dylib`                                           |
| -16.9% |   -13 |   5.9% → 4.9% |   77 → 64 | `loadClass(String, boolean)`                                  | `java.lang.ClassLoader`                                  |
| -21.4% |   -12 |   4.3% → 3.3% |   56 → 44 | `inflate_fast`                                                | `libzip.dylib`                                           |
| -10.4% |   -11 |   8.1% → 7.2% |  106 → 95 | `Compilation::emit_lir`                                       | `libjvm.dylib`                                           |
| -14.5% |   -11 |   5.8% → 4.9% |   76 → 65 | `loadClass(String, boolean)`                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| -14.5% |   -11 |   5.8% → 4.9% |   76 → 65 | `loadClass(String)`                                           | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| -14.7% |   -10 |   5.2% → 4.4% |   68 → 58 | `Java_java_util_zip_Inflater_inflateBytesBytes`               | `libzip.dylib`                                           |
| -14.7% |   -10 |   5.2% → 4.4% |   68 → 58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                 |
| -13.5% |   -10 |   5.7% → 4.9% |   74 → 64 | `defineClass(String, byte[], int, int, ProtectionDomain)`     | `java.lang.ClassLoader`                                  |
| -13.9% |   -10 |   5.5% → 4.7% |   72 → 62 | `Java_java_lang_ClassLoader_defineClass1`                     | `libjava.dylib`                                          |
| -26.5% |    -9 |   2.6% → 1.9% |   34 → 25 | `LinearScan::allocate_registers`                              | `libjvm.dylib`                                           |

##### Compiler

| Change | Delta |             % |   Samples | Function                                   | Location       |
| -----: | ----: | ------------: | --------: | ------------------------------------------ | -------------- |
|  -3.1% |   -25 | 61.9% → 59.4% | 806 → 781 | `CompileBroker::compiler_thread_loop`      | `libjvm.dylib` |
|  -3.0% |   -24 | 60.8% → 58.4% | 792 → 768 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
| -24.5% |   -24 |   7.5% → 5.6% |   98 → 74 | `LinearScan::do_linear_scan`               | `libjvm.dylib` |
| -54.5% |   -24 |   3.4% → 1.5% |   44 → 20 | `PhaseCFG::global_code_motion`             | `libjvm.dylib` |
| -51.1% |   -24 |   3.6% → 1.7% |   47 → 23 | `PhaseCFG::do_global_code_motion`          | `libjvm.dylib` |
|  -4.2% |   -23 | 41.8% → 39.7% | 545 → 522 | `Compile::Compile`                         | `libjvm.dylib` |
|  -4.2% |   -23 | 41.9% → 39.8% | 546 → 523 | `C2Compiler::compile_method`               | `libjvm.dylib` |
|  -6.3% |   -18 | 21.9% → 20.3% | 285 → 267 | `Compile::Code_Gen`                        | `libjvm.dylib` |
|  -7.3% |   -14 | 14.8% → 13.6% | 193 → 179 | `Compile::Optimize`                        | `libjvm.dylib` |
| -10.4% |   -11 |   8.1% → 7.2% |  106 → 95 | `Compilation::emit_lir`                    | `libjvm.dylib` |
| -26.5% |    -9 |   2.6% → 1.9% |   34 → 25 | `LinearScan::allocate_registers`           | `libjvm.dylib` |
| -56.3% |    -9 |   1.2% → 0.5% |    16 → 7 | `IndexSetIterator::advance_and_next`       | `libjvm.dylib` |
| -56.3% |    -9 |   1.2% → 0.5% |    16 → 7 | `PhaseCFG::schedule_late`                  | `libjvm.dylib` |
| -44.4% |    -8 |   1.4% → 0.8% |   18 → 10 | `LinearScan::build_intervals`              | `libjvm.dylib` |
| -34.8% |    -8 |   1.8% → 1.1% |   23 → 15 | `PhaseLive::compute`                       | `libjvm.dylib` |
| -14.0% |    -8 |   4.4% → 3.7% |   57 → 49 | `PhaseIterGVN::optimize`                   | `libjvm.dylib` |
| -26.7% |    -8 |   2.3% → 1.7% |   30 → 22 | `PhaseIdealLoop::build_loop_late`          | `libjvm.dylib` |
| -50.0% |    -7 |   1.1% → 0.5% |    14 → 7 | `LIR_OpVisitState::visit`                  | `libjvm.dylib` |
| -25.0% |    -7 |   2.1% → 1.6% |   28 → 21 | `LinearScanWalker::activate_current`       | `libjvm.dylib` |
| -19.4% |    -7 |   2.8% → 2.2% |   36 → 29 | `IntervalWalker::walk_to`                  | `libjvm.dylib` |

##### Native

| Change | Delta |             % |   Samples | Function                                                                                       | Location                  |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------- | ------------------------- |
|  -2.9% |   -23 | 61.9% → 59.5% | 806 → 783 | `JavaThread::thread_main_inner`                                                                | `libjvm.dylib`            |
| -21.4% |   -12 |   4.3% → 3.3% |   56 → 44 | `inflate_fast`                                                                                 | `libzip.dylib`            |
| -14.7% |   -10 |   5.2% → 4.4% |   68 → 58 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                | `libzip.dylib`            |
| -13.9% |   -10 |   5.5% → 4.7% |   72 → 62 | `Java_java_lang_ClassLoader_defineClass1`                                                      | `libjava.dylib`           |
| -53.3% |    -8 |   1.2% → 0.5% |    15 → 7 | `__psynch_cvwait`                                                                              | `libsystem_kernel.dylib`  |
| -72.7% |    -8 |   0.8% → 0.2% |    11 → 3 | `ThreadCritical::ThreadCritical`                                                               | `libjvm.dylib`            |
| -11.6% |    -8 |   5.3% → 4.6% |   69 → 61 | `jvm_define_class_common`                                                                      | `libjvm.dylib`            |
| -11.6% |    -8 |   5.3% → 4.6% |   69 → 61 | `JVM_DefineClassWithSource`                                                                    | `libjvm.dylib`            |
| -43.8% |    -7 |   1.2% → 0.7% |    16 → 9 | `void G1CMTask::process_grey_task_entry<true>`                                                 | `libjvm.dylib`            |
| -33.3% |    -7 |   1.6% → 1.1% |   21 → 14 | `__psynch_mutexwait`                                                                           | `libsystem_kernel.dylib`  |
| -33.3% |    -7 |   1.6% → 1.1% |   21 → 14 | `_pthread_mutex_firstfit_lock_slow`                                                            | `libsystem_pthread.dylib` |
| -53.8% |    -7 |   1.0% → 0.5% |    13 → 6 | `Chunk::chop`                                                                                  | `libjvm.dylib`            |
| -63.6% |    -7 |   0.8% → 0.3% |    11 → 4 | `Chunk::next_chop`                                                                             | `libjvm.dylib`            |
| -10.3% |    -7 |   5.2% → 4.6% |   68 → 61 | `SystemDictionary::resolve_class_from_stream`                                                  | `libjvm.dylib`            |
| -30.0% |    -6 |   1.5% → 1.1% |   20 → 14 | `G1CMTask::do_marking_step`                                                                    | `libjvm.dylib`            |
| -30.0% |    -6 |   1.5% → 1.1% |   20 → 14 | `G1CMConcurrentMarkingTask::work`                                                              | `libjvm.dylib`            |
| -35.3% |    -6 |   1.3% → 0.8% |   17 → 11 | `PlatformMonitor::wait`                                                                        | `libjvm.dylib`            |
| -54.5% |    -6 |   0.8% → 0.4% |    11 → 5 | `ClassFileParser::parse_methods`                                                               | `libjvm.dylib`            |
| -75.0% |    -6 |   0.6% → 0.2% |     8 → 2 | `InstanceKlass::add_to_hierarchy_impl`                                                         | `libjvm.dylib`            |
| -41.7% |    -5 |   0.9% → 0.5% |    12 → 7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`            |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                         | Location                                                                                                           |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| -14.5% |   -11 | 5.8% → 4.9% | 76 → 65 | `loadClass(String, boolean)`                                                                                                                                     | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                           |
| -14.5% |   -11 | 5.8% → 4.9% | 76 → 65 | `loadClass(String)`                                                                                                                                              | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                           |
| -12.3% |    -9 | 5.6% → 4.9% | 73 → 64 | `findClass(String)`                                                                                                                                              | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                           |
| -22.6% |    -7 | 2.4% → 1.8% | 31 → 24 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                                         |
| -22.6% |    -7 | 2.4% → 1.8% | 31 → 24 | `generate(ReifiedTypeParametersUsages)`                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                                         |
| -22.6% |    -7 | 2.4% → 1.8% | 31 → 24 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                                         |
| -22.6% |    -7 | 2.4% → 1.8% | 31 → 24 | `generateMethodNode(IrFunction)`                                                                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                            |
| -29.2% |    -7 | 1.8% → 1.3% | 24 → 17 | `generate()`                                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                       |
| -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)`                              | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)`                                                                                           | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| -15.8% |    -6 | 2.9% → 2.4% | 38 → 32 | `accept(IrVisitor, Object)`                                                                                                                                      | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                                  |
| -54.5% |    -6 | 0.8% → 0.4% |  11 → 5 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                       |
| -54.5% |    -6 | 0.8% → 0.4% |  11 → 5 | `visitWhen(IrWhen, Object)`                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                       |
| -26.1% |    -6 | 1.8% → 1.3% | 23 → 17 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                       |
| -26.1% |    -6 | 1.8% → 1.3% | 23 → 17 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                       |
| -26.1% |    -6 | 1.8% → 1.3% | 23 → 17 | `visitBlockBody(IrBlockBody, Object)`                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                       |
| -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                          | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |
| -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                                                                     | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                                                   |
| -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)`            | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
| -55.6% |    -5 | 0.7% → 0.3% |   9 → 4 | `addSubTypeConstraintAndIncorporateIt(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                       |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                        | Location                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
|  -16.9% |   -13 | 5.9% → 4.9% | 77 → 64 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                     |
|  -14.7% |   -10 | 5.2% → 4.4% | 68 → 58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                    |
|  -13.5% |   -10 | 5.7% → 4.9% | 74 → 64 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                     |
|  -13.2% |    -9 | 5.2% → 4.5% | 68 → 59 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                    |
|  -13.0% |    -9 | 5.3% → 4.6% | 69 → 60 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`         |
|  -12.3% |    -9 | 5.6% → 4.9% | 73 → 64 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                     |
|  -11.1% |    -8 | 5.5% → 4.9% | 72 → 64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
|   -7.4% |    -5 | 5.2% → 4.8% | 68 → 63 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`              |
|   -7.4% |    -5 | 5.2% → 4.8% | 68 → 63 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                 |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `generateCustomizedCode(LambdaForm, MethodType)`                                | `java.lang.invoke.InvokerBytecodeGenerator` |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `compileToBytecode()`                                                           | `java.lang.invoke.LambdaForm`               |
| removed |    -5 | 0.4% → 0.0% |   5 → 0 | `findConstructor(Class, MethodType)`                                            | `java.lang.invoke.MethodHandles$Lookup`     |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `make(MemberName)`                                                              | `java.lang.invoke.DirectMethodHandle`       |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                  |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`       |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `getDeclaredMethods0(boolean)`                                                  | `java.lang.Class`                           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `privateGetDeclaredMethods(boolean)`                                            | `java.lang.Class`                           |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`     | `java.security.AccessController`            |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `allowSecurityManager()`                                                        | `java.lang.System`                          |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `getSecurityManager()`                                                          | `java.lang.System`                          |

##### JIT

|  Change | Delta |           % | Samples | Function                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------ | ----------- |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `I2C/C2I adapters(0xbb)` | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xb)`  | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`            | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `WorkerThread::run` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location                 |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
| +59.1% |   +13 | 36.7% → 41.7% | 22 → 35 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|    new |   +13 |  0.0% → 15.5% |  0 → 13 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |
| -30.0% |    -6 | 33.3% → 16.7% | 20 → 14 | `G1CMConcurrentMarkingTask::work` | `libjvm.dylib`           |
| -25.0% |    -4 | 26.7% → 14.3% | 16 → 12 | `G1RebuildRSAndScrubTask::work`   | `libjvm.dylib`           |
|    new |    +3 |   0.0% → 3.6% |   0 → 3 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |

##### `InstanceKlass::link_class_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| +187.5% |   +15 | 38.1% → 56.1% |  8 → 23 | `Verifier::verify`                       | `libjvm.dylib` |
| +133.3% |    +4 | 14.3% → 17.1% |   3 → 7 | `DeoptimizationScope::deoptimize_marked` | `libjvm.dylib` |
| +300.0% |    +3 |   4.8% → 9.8% |   1 → 4 | `InstanceKlass::link_methods`            | `libjvm.dylib` |
|  +66.7% |    +2 | 14.3% → 12.2% |   3 → 5 | `InstanceKlass::link_class_impl`         | `libjvm.dylib` |
|  -25.0% |    -1 |  19.0% → 7.3% |   4 → 3 | `InstanceKlass::rewrite_class`           | `libjvm.dylib` |

##### `InstanceKlass::initialize_impl` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| +95.0% |   +19 | 100.0% | 20 → 39 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_from_cache` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------- |
| +325.0% |   +13 | 36.4% → 60.7% |  4 → 17 | `InterpreterRuntime::resolve_invoke`        | `libjvm.dylib`            |
|     new |    +2 |   0.0% → 7.1% |   0 → 2 | `pthread_jit_write_protect_np`              | `libsystem_pthread.dylib` |
|     new |    +2 |   0.0% → 7.1% |   0 → 2 | `InterpreterRuntime::resolve_invokedynamic` | `libjvm.dylib`            |
|  -14.3% |    -1 | 63.6% → 21.4% |   7 → 6 | `InterpreterRuntime::resolve_get_put`       | `libjvm.dylib`            |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |              % |   Samples | Callee                     | Location                                          |
| -----: | ----: | -------------: | --------: | -------------------------- | ------------------------------------------------- |
|  +4.3% |   +15 | 100.0% → 99.7% | 346 → 361 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |              % |   Samples | Callee                                                                                             | Location                                                |
| -----: | ----: | -------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +4.4% |   +15 | 100.0% → 99.7% | 344 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|    new |    +1 |    0.0% → 0.3% |     0 → 1 | `setupIdeaStandaloneExecution()`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.CompatKt`        |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                                               | Location                                                                |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|  +4.1% |   +14 | 99.1% → 98.6% | 339 → 353 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| +33.3% |    +1 |   0.9% → 1.1% |     3 → 4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | --------: | -------------------------------------------------------- | --------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 342 → 358 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | --------------------------------------------- |
|  +4.7% |   +16 | 100.0% | 342 → 358 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |             % |   Samples | Callee                          | Location                                                |
| -----: | ----: | ------------: | --------: | ------------------------------- | ------------------------------------------------------- |
|  +4.7% |   +16 | 99.4% → 99.7% | 344 → 360 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -50.0% |    -1 |   0.6% → 0.3% |     2 → 1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee           | Location                                               |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------------------ |
|  +4.3% |   +15 | 100.0% | 346 → 361 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

| Change | Delta |      % |   Samples | Callee           | Location                                     |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------- |
|  +4.3% |   +15 | 100.0% | 346 → 361 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

| Change | Delta |      % |   Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +4.3% |   +15 | 100.0% | 346 → 361 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % |   Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | --------: | -------------------------------- | --------------------------------------------------- |
|  +4.3% |   +15 | 100.0% | 346 → 361 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | --------: | ------------------------------------------------ | ---------------------------------- |
|  +4.3% |   +15 | 100.0% | 346 → 361 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------------- |
|  +4.3% |   +15 | 100.0% | 346 → 361 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |             % |   Samples | Callee                                                 | Location                                                |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +4.7% |   +16 | 99.4% → 99.7% | 342 → 358 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -50.0% |    -1 |   0.6% → 0.3% |     2 → 1 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `Verifier::verify` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +150.0% |   +12 | 100.0% → 87.0% |  8 → 20 | `ClassVerifier::verify_class` | `libjvm.dylib` |
|     new |    +3 |   0.0% → 13.0% |   0 → 3 | `Verifier::inference_verify`  | `libjvm.dylib` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |             % |   Samples | Callee                                                          | Location                                      |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  +3.9% |   +13 | 97.6% → 97.5% | 331 → 344 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| +12.5% |    +1 |   2.4% → 2.5% |     8 → 9 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| +133.3% |    +8 | 27.3% → 40.0% |  6 → 14 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |
|  +23.1% |    +3 | 59.1% → 45.7% | 13 → 16 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
|  +66.7% |    +2 | 13.6% → 14.3% |   3 → 5 | `G1RemSet::scan_collection_set_code_roots`     | `libjvm.dylib` |

##### `BlockList::iterate_forward` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                   | Location       |
| ------: | ----: | -------------: | ------: | ------------------------ | -------------- |
| +137.5% |   +11 | 100.0% → 95.0% |  8 → 19 | `LIRGenerator::block_do` | `libjvm.dylib` |
|     new |    +1 |    0.0% → 5.0% |   0 → 1 | `ProfileCall::visit`     | `libjvm.dylib` |

##### `LIRGenerator::block_do` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
|     new |    +5 |  0.0% → 26.3% |   0 → 5 | `LIRGenerator::do_ProfileInvoke`            | `libjvm.dylib` |
| +100.0% |    +3 | 37.5% → 31.6% |   3 → 6 | `LIRGenerator::do_Invoke`                   | `libjvm.dylib` |
|  +50.0% |    +1 | 25.0% → 15.8% |   2 → 3 | `LIRGenerator::do_Base`                     | `libjvm.dylib` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `MacroAssembler::needs_explicit_null_check` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `LIRGenerator::do_ProfileCall`              | `libjvm.dylib` |

##### `ciBytecodeStream::get_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| +120.0% |    +6 | 31.3% → 40.7% |  5 → 11 | `ciObjectFactory::get_metadata`         | `libjvm.dylib` |
|  +36.4% |    +4 | 68.8% → 55.6% | 11 → 15 | `ciEnv::get_method_by_index_impl`       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 3.7% |   0 → 1 | `ciBytecodeStream::has_local_signature` | `libjvm.dylib` |

##### `Compilation::build_hir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|  +57.1% |    +4 |  9.5% → 13.1% |  7 → 11 | `GlobalValueNumbering::GlobalValueNumbering` | `libjvm.dylib` |
|   +5.2% |    +3 | 78.4% → 72.6% | 58 → 61 | `IR::IR`                                     | `libjvm.dylib` |
|     new |    +2 |   0.0% → 2.4% |   0 → 2 | `IR::split_critical_edges`                   | `libjvm.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `IR::optimize_blocks`                        | `libjvm.dylib` |
| +100.0% |    +1 |   1.4% → 2.4% |   1 → 2 | `IR::eliminate_null_checks`                  | `libjvm.dylib` |

##### `PhaseOutput::Output` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location                   |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------------------- |
|  +38.5% |    +5 | 39.4% → 41.9% | 13 → 18 | `PhaseOutput::fill_buffer`      | `libjvm.dylib`             |
| +133.3% |    +4 |  9.1% → 16.3% |   3 → 7 | `PhaseOutput::shorten_branches` | `libjvm.dylib`             |
|  +42.9% |    +3 | 21.2% → 23.3% |  7 → 10 | `Scheduling::DoScheduling`      | `libjvm.dylib`             |
|  -16.7% |    -1 | 18.2% → 11.6% |   6 → 5 | `PhaseOutput::BuildOopMaps`     | `libjvm.dylib`             |
|  -50.0% |    -1 |   6.1% → 2.3% |   2 → 1 | `_platform_memmove`             | `libsystem_platform.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| +166.7% |    +5 | 20.0% → 34.8% |   3 → 8 | `PhaseIdealLoop::split_if_with_blocks_pre`  | `libjvm.dylib` |
| +100.0% |    +4 | 26.7% → 34.8% |   4 → 8 | `PhaseIdealLoop::split_if_with_blocks_post` | `libjvm.dylib` |
|  +50.0% |    +1 | 13.3% → 13.0% |   2 → 3 | `PhaseIdealLoop::do_split_if`               | `libjvm.dylib` |
| removed |    -1 |   6.7% → 0.0% |   1 → 0 | `CheckCastPPNode::Opcode`                   | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                | Location        |
| ------: | ----: | ------------: | ------: | --------------------- | --------------- |
|  +20.0% |    +4 | 66.7% → 63.2% | 20 → 24 | `Matcher::match_tree` | `libjvm.dylib`  |
|  -50.0% |    -1 |   6.7% → 2.6% |   2 → 1 | `Node::clone`         | `libjvm.dylib`  |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `tlv_get_addr`        | `libdyld.dylib` |
|     new |    +1 |   0.0% → 2.6% |   0 → 1 | `CallNode::match`     | `libjvm.dylib`  |

##### `MethodLiveness::get_liveness_at` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|     new |    +3 |   0.0% → 37.5% |   0 → 3 | `ResourceBitMap::ResourceBitMap`              | `libjvm.dylib` |
| +200.0% |    +2 | 100.0% → 37.5% |   1 → 3 | `MethodLiveness::BasicBlock::get_liveness_at` | `libjvm.dylib` |

##### `PhaseOutput::Process_OopMap_Node` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                          | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | -------------- |
|     new |    +5 |   0.0% → 62.5% |   0 → 5 | `DebugInformationRecorder::create_scope_values` | `libjvm.dylib` |
| +100.0% |    +1 | 100.0% → 25.0% |   1 → 2 | `DebugInformationRecorder::describe_scope`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `PhaseOutput::FillLocArray`                     | `libjvm.dylib` |

##### `DebugInformationRecorder::serialize_scope_values` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                   | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
|    new |    +3 |  0.0% → 33.3% |   0 → 3 | `LocationValue::write_on`                                                                                                                                | `libjvm.dylib` |
| +50.0% |    +1 | 66.7% → 33.3% |   2 → 3 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 11.1% |   0 → 1 | `Location::write_on`                                                                                                                                     | `libjvm.dylib` |

##### `DebugInformationRecorder::create_scope_values` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                                             | Location       |
| ------: | ----: | -----: | ------: | -------------------------------------------------- | -------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `DebugInformationRecorder::serialize_scope_values` | `libjvm.dylib` |

##### `GraphBuilder::append_with_bci` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                               | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------------ | -------------- |
|     new |    +2 | 0.0% → 25.0% |   0 → 2 | `ValueStack::ValueStack`             | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ValueMap::kill_memory`              | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ValueMap::kill_field`               | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `Instruction::needs_exception_state` | `libjvm.dylib` |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `ValueMap::find_insert`              | `libjvm.dylib` |

##### `ciObjectFactory::create_new_metadata` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| +100.0% |    +6 | 85.7% → 92.3% |  6 → 12 | `ciMethod::ciMethod`              | `libjvm.dylib` |
|     new |    +1 |   0.0% → 7.7% |   0 → 1 | `JNIHandleBlock::allocate_handle` | `libjvm.dylib` |

##### `ciMethod::ciMethod` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| +125.0% |    +5 | 66.7% → 75.0% |   4 → 9 | `ciSignature::ciSignature`    | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `ciObjectFactory::get_symbol` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_and_optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                 | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| +53.3% |    +8 | 17.9% → 25.6% | 15 → 23 | `PhaseIdealLoop::split_if_with_blocks` | `libjvm.dylib` |
| -26.7% |    -8 | 35.7% → 24.4% | 30 → 22 | `PhaseIdealLoop::build_loop_late`      | `libjvm.dylib` |
| -40.0% |    -6 | 17.9% → 10.0% |  15 → 9 | `PhaseIdealLoop::Dominators`           | `libjvm.dylib` |
|    new |    +3 |   0.0% → 3.3% |   0 → 3 | `IdealLoopTree::iteration_split`       | `libjvm.dylib` |
|    new |    +3 |   0.0% → 3.3% |   0 → 3 | `MultiNode::is_CFG`                    | `libjvm.dylib` |

##### `PhaseIdealLoop::PhaseIdealLoop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                               | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------ | -------------- |
|  +7.1% |    +6 | 100.0% | 84 → 90 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `ciEnv::get_method_by_index_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                     | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| +50.0% |    +3 | 54.5% → 56.3% |   6 → 9 | `ciEnv::lookup_method`                     | `libjvm.dylib` |
|    new |    +1 |   0.0% → 6.3% |   0 → 1 | `ConstantPool::name_and_type_ref_index_at` | `libjvm.dylib` |

##### `LIRGenerator::state_for` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location        |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------- |
| +600.0% |    +6 | 33.3% → 87.5% |   1 → 7 | `MethodLiveness::get_liveness_at` | `libjvm.dylib`  |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `tlv_get_addr`                    | `libdyld.dylib` |

##### `ciSignature::ciSignature` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                          | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------- | -------------- |
| +200.0% |    +4 | 50.0% → 66.7% |   2 → 6 | `ciEnv::get_klass_by_name_impl` | `libjvm.dylib` |
| +100.0% |    +1 | 25.0% → 22.2% |   1 → 2 | `SignatureStream::find_symbol`  | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `ciObjectFactory::get_symbol`   | `libjvm.dylib` |

##### `PhaseIdealLoop::split_if_with_blocks_pre` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 25.0% |   0 → 2 | `PhaseIdealLoop::has_local_phi_input` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `PhaseIdealLoop::split_thru_phi`      | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `PhaseIdealLoop::get_ctrl`            | `libjvm.dylib` |
|    new |    +1 | 0.0% → 12.5% |   0 → 1 | `DecodeNNode::Opcode`                 | `libjvm.dylib` |

##### `LinkResolver::resolve_invoke` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| +700.0% |   +14 | 50.0% → 94.1% |  2 → 16 | `LinkResolver::resolve_static_call`    | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `LinkResolver::resolve_interface_call` | `libjvm.dylib` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `LinkResolver::resolve_virtual_call`   | `libjvm.dylib` |
|     new |    +1 |   0.0% → 5.9% |   0 → 1 | `LinkResolver::resolve_special_call`   | `libjvm.dylib` |

##### `InterpreterRuntime::resolve_invoke` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                              | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------------- | -------------- |
| +300.0% |   +12 | 100.0% → 94.1% |  4 → 16 | `LinkResolver::resolve_invoke`                      | `libjvm.dylib` |
|     new |    +1 |    0.0% → 5.9% |   0 → 1 | `ConstantPoolCacheEntry::set_direct_or_vtable_call` | `libjvm.dylib` |

##### `CodeCacheUnloadingTask::work` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                   | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | -------------- |
|    new |    +7 | 0.0% → 53.8% |   0 → 7 | `nmethod::do_unloading`                  | `libjvm.dylib` |
|    new |    +5 | 0.0% → 38.5% |   0 → 5 | `CodeCacheUnloadingTask::claim_nmethods` | `libjvm.dylib` |
|    new |    +1 |  0.0% → 7.7% |   0 → 1 | `BarrierSetNMethod::set_guard_value`     | `libjvm.dylib` |

##### `G1ParallelCleaningTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |   +13 | 0.0% → 100.0% |  0 → 13 | `CodeCacheUnloadingTask::work` | `libjvm.dylib` |

##### `LinkResolver::resolve_static_call` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | -------------- |
| +450.0% |    +9 | 40.0% → 64.7% |  2 → 11 | `InstanceKlass::initialize_impl`               | `libjvm.dylib` |
| +200.0% |    +4 | 40.0% → 35.3% |   2 → 6 | `LinkResolver::linktime_resolve_static_method` | `libjvm.dylib` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `JfrResolution::on_runtime_resolution`         | `libjvm.dylib` |

##### `ClassVerifier::verify_class` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| +157.1% |   +11 | 87.5% → 90.0% |  7 → 18 | `ClassVerifier::verify_method`         | `libjvm.dylib` |
| +100.0% |    +1 | 12.5% → 10.0% |   1 → 2 | `ClassVerifier::verify_stackmap_table` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                            | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------- | -------------- |
|  +63.6% |    +7 | 61.1% → 62.1% | 11 → 18 | `G1ParScanThreadState::do_copy_to_survivor_space` | `libjvm.dylib` |
|  -20.0% |    -1 | 27.8% → 13.8% |   5 → 4 | `fwd_copy_again`                                  | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `fwd_copy_drain`                                  | `libjvm.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `_Copy_disjoint_words`                            | `libjvm.dylib` |

##### `ClassVerifier::verify_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                      | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| +166.7% |    +5 | 42.9% → 44.4% |   3 → 8 | `ClassVerifier::verify_invoke_instructions` | `libjvm.dylib` |
|     new |    +3 |  0.0% → 16.7% |   0 → 3 | `StackMapFrame::set_locals_from_arg`        | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `ClassVerifier::verify_stackmap_table`      | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `StackMapTable::match_stackmap`             | `libjvm.dylib` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `StackMapTable::StackMapTable`              | `libjvm.dylib` |

##### `InterpreterRuntime::_new` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| +60.0% |    +9 | 93.8% → 96.0% | 15 → 24 | `InstanceKlass::initialize_impl` | `libjvm.dylib` |

##### `G1EvacuateRegionsTask::scan_roots` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
|  +80.0% |    +4 | 83.3% → 64.3% |   5 → 9 | `G1RemSet::scan_heap_roots`       | `libjvm.dylib` |
| +400.0% |    +4 | 16.7% → 35.7% |   1 → 5 | `G1RootProcessor::evacuate_roots` | `libjvm.dylib` |

##### `LinkResolver::resolve_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| +100.0% |    +4 | 80.0% → 66.7% |   4 → 8 | `InstanceKlass::uncached_lookup_method`         | `libjvm.dylib` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `LinkResolver::check_method_loader_constraints` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `LinkResolver::check_method_accessability`      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `SystemDictionary::check_signature_loaders`     | `libjvm.dylib` |

##### `SignatureStream::find_symbol` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| +300.0% |    +6 | 66.7% → 80.0% |   2 → 8 | `SymbolTable::new_symbol` | `libjvm.dylib` |

##### `Parse::Parse` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                    | Location       |
| ------: | ----: | -------------: | ------: | ------------------------- | -------------- |
|   +8.6% |    +5 | 100.0% → 96.9% | 58 → 63 | `Parse::do_all_blocks`    | `libjvm.dylib` |
| +100.0% |    +1 |    1.7% → 3.1% |   1 → 2 | `Parse::create_entry_map` | `libjvm.dylib` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `TypeFunc::make`          | `libjvm.dylib` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `GraphKit::set_map_clone` | `libjvm.dylib` |
|     new |    +1 |    0.0% → 1.5% |   0 → 1 | `Parse::merge_common`     | `libjvm.dylib` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|  Change | Delta |             % |   Samples | Callee                                                                       | Location                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|   +4.3% |   +15 | 82.0% → 83.0% | 346 → 361 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
|   -2.7% |    -2 | 17.8% → 16.8% |   75 → 73 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `getMethod(String, Class[])`                                                 | `java.lang.Class`                                      |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `stream()`                                                                   | `java.util.Collection`                                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |   Samples | Callee          | Location                                    |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------- |
|  +3.1% |   +13 | 100.0% | 422 → 435 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |     % |   Samples | Callee                                                         | Location                                                |
| -----: | ----: | ----: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  +3.9% |   +13 | 99.7% | 330 → 343 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |   Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  +3.9% |   +13 | 100.0% | 331 → 344 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |   Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  +3.9% |   +13 | 100.0% | 331 → 344 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |           % |   Samples | Callee                                                                                                | Location                                                            |
| ------: | ----: | ----------: | --------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|   +4.0% |   +13 |       99.7% | 329 → 342 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
| removed |    -1 | 0.3% → 0.0% |     1 → 0 | `<init>(CommonCompilerArguments, Services, Disposable, GroupingMessageCollector, PerformanceManager)` | `org.jetbrains.kotlin.cli.pipeline.ArgumentsPipelineArtifact`       |
|     new |    +1 | 0.0% → 0.3% |     0 → 1 | `<init>(MessageCollector, boolean, boolean)`                                                          | `org.jetbrains.kotlin.cli.common.messages.GroupingMessageCollector` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +3.9% |   +13 | 100.0% | 330 → 343 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +3.9% |   +13 | 100.0% | 330 → 343 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|  Change | Delta |             % |   Samples | Callee                                                                          | Location                                                                    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|   +3.7% |   +12 | 99.7% → 99.4% | 328 → 340 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| +100.0% |    +1 |   0.3% → 0.6% |     1 → 2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

| Change | Delta |             % |  Samples | Callee                           | Location                                                                                                        |
| -----: | ----: | ------------: | -------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  +9.9% |    +9 | 79.8% → 78.7% | 91 → 100 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`        |
| +30.0% |    +6 | 17.5% → 20.5% |  20 → 26 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirContractResolveTransformerAdapter`                  |
|  +2.9% |    +2 | 60.5% → 55.9% |  69 → 71 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`                   |
|  +8.3% |    +1 | 10.5% → 10.2% |  12 → 13 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`          |
|  +8.3% |    +1 | 10.5% → 10.2% |  12 → 13 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirCompilerRequiredAnnotationsResolveTransformer` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                         |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------------- |
|   +4.6% |   +10 | 66.5% → 67.1% | 218 → 228 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |
|   +2.6% |    +2 | 23.5% → 23.2% |   77 → 79 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`  |
|   +3.6% |    +1 |          8.5% |   28 → 29 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`   |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmWriteOutputsPhase`     |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |   Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------- |
|  +3.7% |   +12 | 100.0% | 328 → 340 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                                               |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
|  +27.8% |    +5 | 40.9% → 43.4% | 18 → 23 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
| +150.0% |    +3 |   4.5% → 9.4% |   2 → 5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3`          |
|   +5.9% |    +2 | 77.3% → 67.9% | 34 → 36 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
|  +50.0% |    +2 |  9.1% → 11.3% |   4 → 6 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
|     new |    +2 |   0.0% → 3.8% |   0 → 2 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Callee                                                         | Location                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +200.0% |    +2 | 33.3% → 37.5% |   1 → 3 | `defineClass(boolean, Object)`                                 | `java.lang.invoke.MethodHandles$Lookup$ClassDefiner`                     |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `toByteArray()`                                                | `jdk.internal.org.objectweb.asm.ClassWriter`                             |
|  -50.0% |    -1 | 66.7% → 12.5% |   2 → 1 | `generateConstructor()`                                        | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `generate(MethodType)`                                         | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `makeHiddenClassDefiner(String, byte[], Set, ClassFileDumper)` | `java.lang.invoke.MethodHandles$Lookup`                                  |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |      % | Samples | Callee                 | Location                                       |
| ------: | ----: | -----: | ------: | ---------------------- | ---------------------------------------------- |
| +166.7% |    +5 | 100.0% |   3 → 8 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                                                                                   |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +133.3% |    +4 | 50.0% → 63.6% |   3 → 7 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x0000007001686d48`                                                                        |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformer$BodyResolveTransformerComponents$$Lambda.0x0000008801596398` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000880160b6c8`                                           |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000880163efa0`                                                                            |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x0000007001670720`                                                                    |

##### `put(Object, Object)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Callee                                          | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------------------- | ------------------- |
| +200.0% |    +2 | 100.0% → 60.0% |   1 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `hash(Object)`                                  | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee       | Location                                                       |
| -----: | ----: | -----------: | ------: | ------------ | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `hashCode()` | `org.jetbrains.kotlin.config.AnalysisFlag`                     |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `hashCode()` | `org.jetbrains.kotlin.fir.resolve.dfa.PersistentTypeStatement` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `hashCode()` | `java.lang.Object`                                             |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |            % | Samples | Callee     | Location                                                                                    |
| ------: | ----: | -----------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 7.7% → 12.5% |   1 → 2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000700137ba80`        |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirEnumEntriesSupport$$Lambda.0x0000008801453498`     |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000880163b700`             |
| removed |    -1 |  7.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.backend.Fir2IrBuiltinSymbolsContainer$$Lambda.0x000000880177efb0` |
| +100.0% |    +1 | 7.7% → 12.5% |   1 → 2 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018913f0`          |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Callee     | Location            |
| ------: | ----: | -----: | ------: | ---------- | ------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `resize()` | `java.util.HashMap` |

##### `createModuleData(KotlinClassFinder, KotlinClassFinder, JavaClassFinder, String, ErrorReporter, JavaSourceElementFactory)` (`kotlin.reflect.jvm.internal.impl.load.kotlin.DeserializationComponentsForJava$Companion`)

|  Change | Delta |              % | Samples | Callee                                                                                                                                                                                                        | Location                                                                          |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `makeDeserializationComponentsForJava(ModuleDescriptor, StorageManager, NotFoundClasses, LazyJavaPackageFragmentProvider, KotlinClassFinder, DeserializedDescriptorResolver, ErrorReporter, MetadataVersion)` | `kotlin.reflect.jvm.internal.impl.load.kotlin.DeserializationComponentsForJavaKt` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `<init>(StorageManager, ModuleDescriptor)`                                                                                                                                                                    | `kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses`                    |

##### `create(ClassLoader)` (`kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData$Companion`)

|  Change | Delta |      % | Samples | Callee                                                                                                                     | Location                                                                                  |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `createModuleData(KotlinClassFinder, KotlinClassFinder, JavaClassFinder, String, ErrorReporter, JavaSourceElementFactory)` | `kotlin.reflect.jvm.internal.impl.load.kotlin.DeserializationComponentsForJava$Companion` |

##### `getOrCreateModule(Class)` (`kotlin.reflect.jvm.internal.ModuleByClassLoaderKt`)

|  Change | Delta |      % | Samples | Callee                | Location                                                                                      |
| ------: | ----: | -----: | ------: | --------------------- | --------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `create(ClassLoader)` | `kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData$Companion` |

##### `moduleData_delegate$lambda$0(KDeclarationContainerImpl)` (`kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data`)

|  Change | Delta |      % | Samples | Callee                     | Location                                            |
| ------: | ----: | -----: | ------: | -------------------------- | --------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `getOrCreateModule(Class)` | `kotlin.reflect.jvm.internal.ModuleByClassLoaderKt` |

##### `accessor$KDeclarationContainerImpl$Data$lambda0(KDeclarationContainerImpl)` (`kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data`)

|  Change | Delta |      % | Samples | Callee                                                    | Location                                                     |
| ------: | ----: | -----: | ------: | --------------------------------------------------------- | ------------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `moduleData_delegate$lambda$0(KDeclarationContainerImpl)` | `kotlin.reflect.jvm.internal.KDeclarationContainerImpl$Data` |

##### `CompileBroker::compiler_thread_loop` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Callee                                     | Location       |
| -----: | ----: | ----: | --------: | ------------------------------------------ | -------------- |
|  -3.0% |   -24 | 98.3% | 792 → 768 | `CompileBroker::invoke_compiler_on_method` | `libjvm.dylib` |
|  -7.1% |    -1 |  1.7% |   14 → 13 | `CompileQueue::get`                        | `libjvm.dylib` |

##### `CompileBroker::invoke_compiler_on_method` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                          | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------- |
|   -4.2% |   -23 | 68.9% → 68.1% | 546 → 523 | `C2Compiler::compile_method`    | `libjvm.dylib` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `TraceTime::~TraceTime`         | `libjvm.dylib` |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `CompilationLog::log_compile`   | `libjvm.dylib` |
| +200.0% |    +2 |   0.1% → 0.4% |     1 → 3 | `ciEnv::get_method_from_handle` | `libjvm.dylib` |
|  -50.0% |    -1 |   0.3% → 0.1% |     2 → 1 | `ciEnv::ciEnv`                  | `libjvm.dylib` |

##### `LinearScan::do_linear_scan` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|  -26.5% |    -9 | 34.7% → 33.8% | 34 → 25 | `LinearScan::allocate_registers`      | `libjvm.dylib` |
|  -44.4% |    -8 | 18.4% → 13.5% | 18 → 10 | `LinearScan::build_intervals`         | `libjvm.dylib` |
|   -8.3% |    -2 | 24.5% → 29.7% | 24 → 22 | `LinearScan::assign_reg_num`          | `libjvm.dylib` |
|  -28.6% |    -2 |   7.1% → 6.8% |   7 → 5 | `LinearScan::compute_local_live_sets` | `libjvm.dylib` |
| removed |    -2 |   2.0% → 0.0% |   2 → 0 | `Constant::as_Constant`               | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| -56.3% |    -9 | 36.4% → 35.0% |  16 → 7 | `PhaseCFG::schedule_late`           | `libjvm.dylib` |
| -62.5% |    -5 | 18.2% → 15.0% |   8 → 3 | `PhaseCFG::partial_latency_of_defs` | `libjvm.dylib` |
| -60.0% |    -3 | 11.4% → 10.0% |   5 → 2 | `PhaseCFG::schedule_local`          | `libjvm.dylib` |
| -75.0% |    -3 |   9.1% → 5.0% |   4 → 1 | `PhaseCFG::schedule_early`          | `libjvm.dylib` |
| -40.0% |    -2 | 11.4% → 15.0% |   5 → 3 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                               | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|  -54.5% |   -24 | 93.6% → 87.0% | 44 → 20 | `PhaseCFG::global_code_motion`       | `libjvm.dylib` |
| +200.0% |    +2 |  2.1% → 13.0% |   1 → 3 | `PhaseCFG::build_dominator_tree`     | `libjvm.dylib` |
| removed |    -2 |   4.3% → 0.0% |   2 → 0 | `PhaseCFG::estimate_block_frequency` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |              % |   Samples | Callee                                | Location       |
| -----: | ----: | -------------: | --------: | ------------------------------------- | -------------- |
|  -3.1% |   -25 | 100.0% → 99.7% | 806 → 781 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |
|    new |    +2 |    0.0% → 0.3% |     0 → 2 | `ServiceThread::service_thread_entry` | `libjvm.dylib` |

##### `Compile::Compile` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                      | Location       |
| ------: | ----: | ------------: | --------: | --------------------------- | -------------- |
|   -6.3% |   -18 | 52.3% → 51.1% | 285 → 267 | `Compile::Code_Gen`         | `libjvm.dylib` |
|   -7.3% |   -14 | 35.4% → 34.3% | 193 → 179 | `Compile::Optimize`         | `libjvm.dylib` |
|  +10.3% |    +6 | 10.6% → 12.3% |   58 → 64 | `ParseGenerator::generate`  | `libjvm.dylib` |
| +300.0% |    +3 |   0.2% → 0.8% |     1 → 4 | `CallGenerator::for_inline` | `libjvm.dylib` |

##### `C2Compiler::compile_method` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Callee             | Location       |
| -----: | ----: | ----: | --------: | ------------------ | -------------- |
|  -4.2% |   -23 | 99.8% | 545 → 522 | `Compile::Compile` | `libjvm.dylib` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -51.1% |   -24 |  16.5% → 8.6% |   47 → 23 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
| +30.3% |   +10 | 11.6% → 16.1% |   33 → 43 | `PhaseOutput::Output`             | `libjvm.dylib` |
| -57.1% |    -4 |   2.5% → 1.1% |     7 → 3 | `PhaseOutput::install_code`       | `libjvm.dylib` |
|  -2.1% |    -3 | 51.2% → 53.6% | 146 → 143 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  +4.2% |    +2 | 16.8% → 18.7% |   48 → 50 | `Matcher::match`                  | `libjvm.dylib` |

##### `Compile::Optimize` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| -22.7% |   -10 | 22.8% → 19.0% | 44 → 34 | `PhaseIterGVN::optimize`       | `libjvm.dylib` |
| +11.4% |    +5 | 22.8% → 27.4% | 44 → 49 | `Compile::optimize_loops`      | `libjvm.dylib` |
| -31.3% |    -5 |   8.3% → 6.1% | 16 → 11 | `PhaseCCP::PhaseCCP`           | `libjvm.dylib` |
| -27.3% |    -3 |   5.7% → 4.5% |  11 → 8 | `ConnectionGraph::do_analysis` | `libjvm.dylib` |
| -50.0% |    -3 |   3.1% → 1.7% |   6 → 3 | `PhaseCCP::do_transform`       | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |              % | Samples | Callee                             | Location                                                 |
| ------: | ----: | -------------: | ------: | ---------------------------------- | -------------------------------------------------------- |
|  -12.3% |    -9 | 94.8% → 100.0% | 73 → 64 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  -50.0% |    -1 |    2.6% → 1.6% |   2 → 1 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |
| removed |    -1 |    1.3% → 0.0% |   1 → 0 | `findClass(String)`                | `java.net.URLClassLoader`                                |
| removed |    -1 |    1.3% → 0.0% |   1 → 0 | `addElapsedTimeFrom(long)`         | `jdk.internal.perf.PerfCounter`                          |

##### `Compilation::emit_lir` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|  -24.5% |   -24 | 92.5% → 77.9% | 98 → 74 | `LinearScan::do_linear_scan`     | `libjvm.dylib` |
| +150.0% |   +12 |  7.5% → 21.1% |  8 → 20 | `BlockList::iterate_forward`     | `libjvm.dylib` |
|     new |    +1 |   0.0% → 1.1% |   0 → 1 | `ControlFlowOptimizer::optimize` | `libjvm.dylib` |

##### `loadClass(String, boolean)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |              % | Samples | Callee                       | Location                                                 |
| -----: | ----: | -------------: | ------: | ---------------------------- | -------------------------------------------------------- |
| -15.8% |   -12 | 100.0% → 98.5% | 76 → 64 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                                  |
|    new |    +2 |    0.0% → 3.1% |   0 → 2 | `loadClass(String)`          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|    new |    +1 |    0.0% → 1.5% |   0 → 1 | `loadClass(String)`          | `java.lang.ClassLoader`                                  |

##### `loadClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |      % | Samples | Callee                       | Location                                                 |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------------------------------------------------- |
| -14.5% |   -11 | 100.0% | 76 → 65 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|  -21.4% |   -12 | 82.4% → 75.9% | 56 → 44 | `inflate_fast`                      | `libzip.dylib` |
|  +71.4% |    +5 | 10.3% → 20.7% |  7 → 12 | `inflate`                           | `libzip.dylib` |
| removed |    -2 |   2.9% → 0.0% |   2 → 0 | `jni_ReleasePrimitiveArrayCritical` | `libjvm.dylib` |
|  -33.3% |    -1 |   4.4% → 3.4% |   3 → 2 | `jni_GetPrimitiveArrayCritical`     | `libjvm.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -14.7% |   -10 | 100.0% | 68 → 58 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |              % | Samples | Callee                                                                          | Location                |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
|  -11.1% |    -8 | 97.3% → 100.0% | 72 → 64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
| removed |    -1 |    1.4% → 0.0% |   1 → 0 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `Java_java_lang_ClassLoader_defineClass1` (`libjava.dylib`)

|  Change | Delta |             % | Samples | Callee                      | Location                   |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------- |
|  -11.6% |    -8 | 95.8% → 98.4% | 69 → 61 | `JVM_DefineClassWithSource` | `libjvm.dylib`             |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `_platform_memmove`         | `libsystem_platform.dylib` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `jni_GetStringLength`       | `libjvm.dylib`             |
|     new |    +1 |   0.0% → 1.6% |   0 → 1 | `jni_GetByteArrayRegion`    | `libjvm.dylib`             |

##### `LinearScan::allocate_registers` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                               | Location       |
| ------: | ----: | -------------: | ------: | ------------------------------------ | -------------- |
|  -24.2% |    -8 | 97.1% → 100.0% | 33 → 25 | `IntervalWalker::walk_to`            | `libjvm.dylib` |
| removed |    -1 |    2.9% → 0.0% |   1 → 0 | `LinearScanWalker::activate_current` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                              | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
| removed |    -6 |  37.5% → 0.0% |   6 → 0 | `PhaseCFG::hoist_to_cheaper_block`  | `libjvm.dylib` |
|  -20.0% |    -1 | 31.3% → 57.1% |   5 → 4 | `Node_Backward_Iterator::next`      | `libjvm.dylib` |
|  +50.0% |    +1 | 12.5% → 42.9% |   2 → 3 | `PhaseCFG::insert_anti_dependences` | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `CProjNode::is_block_proj`          | `libjvm.dylib` |

##### `LinearScan::build_intervals` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                    | Location        |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------- |
| removed |    -5 |  27.8% → 0.0% |   5 → 0 | `LIR_OpVisitState::visit` | `libjvm.dylib`  |
|  -50.0% |    -1 | 11.1% → 10.0% |   2 → 1 | `tlv_get_addr`            | `libdyld.dylib` |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `LinearScan::add_temp`    | `libjvm.dylib`  |
|  -50.0% |    -1 | 11.1% → 10.0% |   2 → 1 | `LinearScan::add_use`     | `libjvm.dylib`  |
| removed |    -1 |   5.6% → 0.0% |   1 → 0 | `Interval::add_use_pos`   | `libjvm.dylib`  |

##### `PhaseLive::compute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                   | Location       |
| ------: | ----: | ------------: | ------: | ------------------------ | -------------- |
|  -66.7% |    -6 | 39.1% → 20.0% |   9 → 3 | `PhaseLive::add_liveout` | `libjvm.dylib` |
| +100.0% |    +1 |  4.3% → 13.3% |   1 → 2 | `IndexSet::initialize`   | `libjvm.dylib` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `IndexSet::free_block`   | `libjvm.dylib` |

##### `PhaseIterGVN::optimize` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                    | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
|  -13.0% |    -7 | 94.7% → 95.9% | 54 → 47 | `PhaseIterGVN::transform_old`             | `libjvm.dylib` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `PhiNode::hash`                           | `libjvm.dylib` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `LoadUBNode::Value`                       | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `PhaseIterGVN::remove_globally_dead_node` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 2.0% |   0 → 1 | `CallNode::Ideal`                         | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_late` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                      | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------------- | -------------- |
| -15.8% |    -3 | 63.3% → 72.7% | 19 → 16 | `PhaseIdealLoop::build_loop_late_post_work` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 4.5% |   0 → 1 | `OpaqueLoopInitNode::Opcode`                | `libjvm.dylib` |

##### `LIR_OpVisitState::visit` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                      | Location       |
| -----: | ----: | -----------: | ------: | --------------------------- | -------------- |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `LIR_OpVisitState::do_temp` | `libjvm.dylib` |

##### `LinearScanWalker::activate_current` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                        | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | -------------- |
|  -30.0% |    -6 | 71.4% → 66.7% | 20 → 14 | `LinearScanWalker::alloc_free_reg`            | `libjvm.dylib` |
|  +33.3% |    +1 | 10.7% → 19.0% |   3 → 4 | `LinearScanWalker::split_and_spill_interval`  | `libjvm.dylib` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `LinearScanWalker::combine_spilled_intervals` | `libjvm.dylib` |
| +100.0% |    +1 |   3.6% → 9.5% |   1 → 2 | `LinearScanWalker::alloc_locked_reg`          | `libjvm.dylib` |
| removed |    -1 |   3.6% → 0.0% |   1 → 0 | `LinearScanWalker::insert_move`               | `libjvm.dylib` |

##### `IntervalWalker::walk_to` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
| -22.2% |    -6 | 75.0% → 72.4% | 27 → 21 | `LinearScanWalker::activate_current` | `libjvm.dylib` |
| -12.5% |    -1 | 22.2% → 24.1% |   8 → 7 | `IntervalWalker::walk_to`            | `libjvm.dylib` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                              | Location                  |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------------- |
|  -70.0% |    -7 | 90.9% → 100.0% |  10 → 3 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |
| removed |    -1 |    9.1% → 0.0% |   1 → 0 | `pthread_mutex_lock`                | `libsystem_pthread.dylib` |

##### `jvm_define_class_common` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                        | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------------- | -------------- |
|  -10.3% |    -7 | 98.6% → 100.0% | 68 → 61 | `SystemDictionary::resolve_class_from_stream` | `libjvm.dylib` |
| removed |    -1 |    1.4% → 0.0% |   1 → 0 | `SystemDictionary::class_name_symbol`         | `libjvm.dylib` |

##### `JVM_DefineClassWithSource` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                    | Location       |
| -----: | ----: | -----: | ------: | ------------------------- | -------------- |
| -11.6% |    -8 | 100.0% | 69 → 61 | `jvm_define_class_common` | `libjvm.dylib` |

##### `void G1CMTask::process_grey_task_entry<true>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                                                         | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | -------------- |
|  -36.4% |    -4 | 68.8% → 77.8% |  11 → 7 | `void OopOopIterateDispatch<G1CMOopClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `ClassLoaderData::oops_do`                                                                     | `libjvm.dylib` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `G1CMObjArrayProcessor::process_slice`                                                         | `libjvm.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `void InstanceMirrorKlass::oop_oop_iterate<narrowOop, G1CMOopClosure>`                         | `libjvm.dylib` |

##### `_pthread_mutex_firstfit_lock_slow` (`libsystem_pthread.dylib`)

| Change | Delta |      % | Samples | Callee               | Location                 |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------ |
| -33.3% |    -7 | 100.0% | 21 → 14 | `__psynch_mutexwait` | `libsystem_kernel.dylib` |

##### `Chunk::chop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                            | Location                 |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------------ |
| -60.0% |    -3 | 38.5% → 33.3% |   5 → 2 | `ThreadCritical::ThreadCritical`  | `libjvm.dylib`           |
| -75.0% |    -3 | 30.8% → 16.7% |   4 → 1 | `free_medium`                     | `libsystem_malloc.dylib` |
| -50.0% |    -2 | 30.8% → 33.3% |   4 → 2 | `ThreadCritical::~ThreadCritical` | `libjvm.dylib`           |

##### `Chunk::next_chop` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee        | Location       |
| -----: | ----: | -----: | ------: | ------------- | -------------- |
| -63.6% |    -7 | 100.0% |  11 → 4 | `Chunk::chop` | `libjvm.dylib` |

##### `SystemDictionary::resolve_class_from_stream` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                    | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------- |
| -50.0% |    -4 |  11.8% → 6.6% |   8 → 4 | `SystemDictionary::define_instance_class` | `libjvm.dylib` |
|  -5.0% |    -3 | 88.2% → 93.4% | 60 → 57 | `KlassFactory::create_from_stream`        | `libjvm.dylib` |

##### `G1CMTask::do_marking_step` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| -57.1% |    -4 | 35.0% → 21.4% |   7 → 3 | `G1CMTask::drain_local_queue` | `libjvm.dylib` |
| -15.4% |    -2 | 65.0% → 78.6% | 13 → 11 | `G1CMBitMap::iterate`         | `libjvm.dylib` |

##### `G1CMConcurrentMarkingTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -30.0% |    -6 | 100.0% | 20 → 14 | `G1CMTask::do_marking_step` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee            | Location                 |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------------ |
| -53.3% |    -8 | 88.2% → 63.6% |  15 → 7 | `__psynch_cvwait` | `libsystem_kernel.dylib` |
|    new |    +2 |  0.0% → 18.2% |   0 → 2 | `__gettimeofday`  | `libsystem_kernel.dylib` |

##### `ClassFileParser::parse_methods` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                          | Location                   |
| ------: | ----: | -------------: | ------: | ------------------------------- | -------------------------- |
|  -50.0% |    -5 | 90.9% → 100.0% |  10 → 5 | `ClassFileParser::parse_method` | `libjvm.dylib`             |
| removed |    -1 |    9.1% → 0.0% |   1 → 0 | `_platform_memmove`             | `libsystem_platform.dylib` |

##### `InstanceKlass::add_to_hierarchy_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|  -66.7% |    -2 | 37.5% → 50.0% |   3 → 1 | `CodeCache::mark_dependents_on`          | `libjvm.dylib` |
| removed |    -2 |  25.0% → 0.0% |   2 → 0 | `Mutex::lock`                            | `libjvm.dylib` |
|  -50.0% |    -1 | 25.0% → 50.0% |   2 → 1 | `DeoptimizationScope::deoptimize_marked` | `libjvm.dylib` |

##### `findClass(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change | Delta |      % | Samples | Callee                                  | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------- | ----------------------- |
| -12.3% |    -9 | 100.0% | 73 → 64 | `defineClass(String, byte[], int, int)` | `java.lang.ClassLoader` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -29.2% |    -7 | 77.4% → 70.8% | 24 → 17 | `generate()`                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  -66.7% |    -4 |  19.4% → 8.3% |   6 → 2 | `mapSignatureWithGeneric(IrFunction)`                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`                           |
| +100.0% |    +1 |   3.2% → 8.3% |   1 → 2 | `getSourceMapper(JvmBackendContext, IrClass)`                 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`      |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `wrapWithMaxLocalCalc(MethodNode)`                            | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change | Delta |      % | Samples | Callee                                    | Location                                                   |
| -----: | ----: | -----: | ------: | ----------------------------------------- | ---------------------------------------------------------- |
| -22.6% |    -7 | 100.0% | 31 → 24 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change | Delta |      % | Samples | Callee                                  | Location                                                   |
| -----: | ----: | -----: | ------: | --------------------------------------- | ---------------------------------------------------------- |
| -22.6% |    -7 | 100.0% | 31 → 24 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change | Delta |           % | Samples | Callee                                                                        | Location                                                   |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -22.6% |    -7 |      100.0% | 31 → 24 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |
| removed |    -1 | 3.2% → 0.0% |   1 → 0 | `cloneMethodNode(MethodNode)`                                                 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change | Delta |              % | Samples | Callee                                             | Location                                                     |
| ------: | ----: | -------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------ |
|  -26.1% |    -6 | 95.8% → 100.0% | 23 → 17 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
| removed |    -1 |    4.2% → 0.0% |   1 → 0 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

| Change | Delta |      % | Samples | Callee                                                                       | Location                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------ |
| -66.7% |    -6 | 100.0% |   9 → 3 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

| Change | Delta |      % | Samples | Callee                                                                                                                              | Location                                                                                                           |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| -66.7% |    -6 | 100.0% |   9 → 3 | `runIsSubtypeOf$isSubtypeOf(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, boolean, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|  Change | Delta |             % | Samples | Callee                                | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------ |
|  -26.1% |    -6 | 60.5% → 53.1% | 23 → 17 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +100.0% |    +2 |  5.3% → 12.5% |   2 → 4 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer`             |
|  -50.0% |    -1 |   5.3% → 3.1% |   2 → 1 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorVoid`             |
|  -20.0% |    -1 | 13.2% → 12.5% |   5 → 4 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrVisitor`                 |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change | Delta |             % | Samples | Callee                                                                                             | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -75.0% |    -3 | 36.4% → 20.0% |   4 → 1 | `accept(IrVisitor, Object)`                                                                        | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  -25.0% |    -1 | 36.4% → 60.0% |   4 → 3 | `accept(IrVisitor, Object)`                                                                        | `org.jetbrains.kotlin.ir.expressions.IrCall`               |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `generate()`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`    |

##### `visitWhen(IrWhen, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change | Delta |      % | Samples | Callee                         | Location                                                     |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------ |
| -54.5% |    -6 | 100.0% |  11 → 5 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change | Delta |             % | Samples | Callee                      | Location                                          |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------- |
| -66.7% |    -4 | 26.1% → 11.8% |   6 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.declarations.IrVariable` |
| -60.0% |    -3 | 21.7% → 11.8% |   5 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`      |
| -11.1% |    -2 | 78.3% → 94.1% | 18 → 16 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn`    |
| -50.0% |    -1 |   8.7% → 5.9% |   2 → 1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`     |
| -50.0% |    -1 |   8.7% → 5.9% |   2 → 1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change | Delta |      % | Samples | Callee                                                     | Location                                                     |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| -26.1% |    -6 | 100.0% | 23 → 17 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change | Delta |      % | Samples | Callee                                   | Location                                                     |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------ |
| -26.1% |    -6 | 100.0% | 23 → 17 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |             % | Samples | Callee                                                                                                      | Location                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| -55.6% |    -5 | 75.0% → 57.1% |   9 → 4 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |      % | Samples | Callee                                                                                                  | Location                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| -41.7% |    -5 | 100.0% |  12 → 7 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector`)

| Change | Delta |      % | Samples | Callee                                                                 | Location                                                                                                           |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| -71.4% |    -5 | 100.0% |   7 → 2 | `runIsSubtypeOf(KotlinTypeMarker, KotlinTypeMarker, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `addSubTypeConstraintAndIncorporateIt(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                | Location                                                                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| -71.4% |    -5 | 77.8% → 50.0% |   7 → 2 | `runIsSubtypeOf$default(ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |              % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------- | ------------------------ |
| -14.7% |   -10 | 100.0% → 98.3% | 68 → 58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |
|    new |    +1 |    0.0% → 1.7% |   0 → 1 | `monitorexit_nofpu Runtime1 stub`                             | `<unknown>`              |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |             % | Samples | Callee                      | Location                            |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------------------------- |
| -11.9% |    -8 | 97.1% → 98.3% | 67 → 59 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
| -50.0% |    -1 |   2.9% → 1.7% |   2 → 1 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                                                    | Location                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------- |
| -12.3% |    -9 | 100.0% | 73 → 64 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change | Delta |              % | Samples | Callee                                    | Location        |
| -----: | ----: | -------------: | ------: | ----------------------------------------- | --------------- |
| -13.9% |   -10 | 100.0% → 96.9% | 72 → 62 | `Java_java_lang_ClassLoader_defineClass1` | `libjava.dylib` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

| Change | Delta |              % | Samples | Callee                     | Location                            |
| -----: | ----: | -------------: | ------: | -------------------------- | ----------------------------------- |
| -11.8% |    -8 | 100.0% → 95.2% | 68 → 60 | `read(byte[], int, int)`   | `java.util.zip.InflaterInputStream` |
|    new |    +2 |    0.0% → 3.2% |   0 → 2 | `update(byte[], int, int)` | `java.util.zip.CRC32`               |
|    new |    +1 |    0.0% → 1.6% |   0 → 1 | `readEnd(ZipEntry)`        | `java.util.zip.ZipInputStream`      |

##### `read(byte[])` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Callee                   | Location                       |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------ |
|  -7.4% |    -5 | 100.0% | 68 → 63 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `generateCustomizedCode(LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

|  Change | Delta |            % | Samples | Callee                          | Location                                    |
| ------: | ----: | -----------: | ------: | ------------------------------- | ------------------------------------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `generateCustomizedCodeBytes()` | `java.lang.invoke.InvokerBytecodeGenerator` |
| removed |    -2 | 33.3% → 0.0% |   2 → 0 | `loadMethod(byte[])`            | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `compileToBytecode()` (`java.lang.invoke.LambdaForm`)

| Change | Delta |      % | Samples | Callee                                           | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `generateCustomizedCode(LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `findConstructor(Class, MethodType)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change | Delta |            % | Samples | Callee                                           | Location                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------ | --------------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `getDirectConstructor(Class, MemberName)`        | `java.lang.invoke.MethodHandles$Lookup` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `resolveOrFail(byte, Class, String, MethodType)` | `java.lang.invoke.MethodHandles$Lookup` |

##### `make(MemberName)` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |            % | Samples | Callee                      | Location                              |
| ------: | ----: | -----------: | ------: | --------------------------- | ------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `makeAllocator(MemberName)` | `java.lang.invoke.DirectMethodHandle` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `make(Class, MemberName)`   | `java.lang.invoke.DirectMethodHandle` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |              % | Samples | Callee                           | Location       |
| ------: | ----: | -------------: | ------: | -------------------------------- | -------------- |
|  -50.0% |    -2 | 66.7% → 100.0% |   4 → 2 | `Unsafe_AllocateInstance`        | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `JNIHandles::make_local`         | `libjvm.dylib` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `JavaFrameAnchor::make_walkable` | `libjvm.dylib` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |      % | Samples | Callee                    | Location                   |
| -----: | ----: | -----: | ------: | ------------------------- | -------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `allocateInstance(Class)` | `jdk.internal.misc.Unsafe` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change | Delta |            % | Samples | Callee              | Location                                                 |
| ------: | ----: | -----------: | ------: | ------------------- | -------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `loadClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`                                  |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Callee                         | Location          |
| ------: | ----: | ------------: | ------: | ------------------------------ | ----------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `getDeclaredMethods0(boolean)` | `java.lang.Class` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change | Delta |            % | Samples | Callee  | Location                                   |
| ------: | ----: | -----------: | ------: | ------- | ------------------------------------------ |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | `run()` | `java.net.URLClassLoader$1`                |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `run()` | `jdk.internal.loader.BuiltinClassLoader$2` |

##### `getSecurityManager()` (`java.lang.System`)

|  Change | Delta |             % | Samples | Callee                   | Location           |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `allowSecurityManager()` | `java.lang.System` |
