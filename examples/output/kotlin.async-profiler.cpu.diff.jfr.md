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

|  Change | Delta |           % | Samples | Function                                              | Location                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------- | --------------------------------------------- |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `resize()`                                            | `java.util.HashMap`                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `ensureCapacityInternal(int)`                         | `java.lang.AbstractStringBuilder`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `isLatin1()`                                          | `java.lang.String`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `get(Object)`                                         | `java.util.concurrent.ConcurrentHashMap`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addConstantFieldref(String, String, String)`         | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `methodType(Class, Class[], boolean)`                 | `java.lang.invoke.MethodType`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getDirectMethodForConstant(byte, Class, MemberName)` | `java.lang.invoke.MethodHandles$Lookup`       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `closeEntry()`                                        | `java.util.zip.ZipInputStream`                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextNode()`                                          | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getLongUnaligned(Object, long)`                      | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(int, float, int)`                             | `java.util.concurrent.ConcurrentHashMap`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lastIndexOf(byte[], int, int)`                       | `java.lang.StringLatin1`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `size()`                                              | `java.util.Collections$EmptyList`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `flip()`                                              | `java.nio.Buffer`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `startsWith(String)`                                  | `java.lang.String`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `offer(Object)`                                       | `java.util.concurrent.ConcurrentLinkedQueue`  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `constructor-impl(Object)`                            | `kotlin.Result`                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `putMethodInfo(ByteVector)`                           | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `stringFromByteBuffer(ByteBuffer, int)`               | `jdk.internal.jimage.ImageStringsReader`      |

##### JIT

| Change | Delta |           % | Samples | Function                      | Location    |
| -----: | ----: | ----------: | ------: | ----------------------------- | ----------- |
|    new |    +3 | 0.0% → 0.2% |   0 → 3 | `itable stub`                 | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbabbab)`  | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbba)` | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |

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
|  -57.1% |    -4 | 0.5% → 0.2% |   7 → 3 | `PhaseIdealLoop::Dominators`                                                                           | `libjvm.dylib`           |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `I2C/C2I adapters(0xbbb)`                                                                              | `<unknown>`              |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbbbbb)`                                                                            | `<unknown>`              |
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

|  Change | Delta |           % | Samples | Function                    | Location    |
| ------: | ----: | ----------: | ------: | --------------------------- | ----------- |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`               | `<unknown>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `I2C/C2I adapters(0xaaa)`   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`               | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                           | Location                                                |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new |  +361 |  0.0% → 27.5% |   0 → 361 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`    |
|     new |  +361 |  0.0% → 27.5% |   0 → 361 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`     |
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
|     new |  +361 |  0.0% → 27.5% |   0 → 361 | `invokeStatic(Object, Object)`                                                                                             | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                                          |
|     new |  +361 |  0.0% → 27.5% |   0 → 361 | `invoke(Object, Object, Object)`                                                                                           | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                                           |
|   +4.6% |   +16 | 26.6% → 27.5% | 346 → 362 | `invoke(Object, Object[])`                                                                                                 | `java.lang.reflect.Method`                                                                    |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeExact_MT(Object, Object, Object, Object)`                                                                           | `java.lang.invoke.Invokers$Holder`                                                            |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invokeImpl(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                                             |
|   +4.3% |   +15 | 26.6% → 27.5% | 346 → 361 | `invoke(Object, Object[])`                                                                                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`                                             |
|  +20.5% |    +9 |   3.4% → 4.0% |   44 → 53 | `resumeWith(Object)`                                                                                                       | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                         |
|     new |    +9 |   0.0% → 0.7% |     0 → 9 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000`                                          |
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

##### JIT

| Change | Delta |           % | Samples | Function                      | Location    |
| -----: | ----: | ----------: | ------: | ----------------------------- | ----------- |
|    new |    +3 | 0.0% → 0.2% |   0 → 3 | `itable stub`                 | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbabbab)`  | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbbbbbba)` | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `I2C/C2I adapters(0xbb)`      | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                               | Location                                                 |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| removed |  -346 |  26.6% → 0.0% |   346 → 0 | `invokeStatic(Object, Object)`                                         | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000`     |
| removed |  -346 |  26.6% → 0.0% |   346 → 0 | `invoke(Object, Object, Object)`                                       | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`      |
|   -3.1% |   -25 | 61.9% → 59.4% | 806 → 781 | `CompileBroker::compiler_thread_loop`                                  | `libjvm.dylib`                                           |
|   -3.0% |   -24 | 60.8% → 58.4% | 792 → 768 | `CompileBroker::invoke_compiler_on_method`                             | `libjvm.dylib`                                           |
|  -24.5% |   -24 |   7.5% → 5.6% |   98 → 74 | `LinearScan::do_linear_scan`                                           | `libjvm.dylib`                                           |
|  -54.5% |   -24 |   3.4% → 1.5% |   44 → 20 | `PhaseCFG::global_code_motion`                                         | `libjvm.dylib`                                           |
|  -51.1% |   -24 |   3.6% → 1.7% |   47 → 23 | `PhaseCFG::do_global_code_motion`                                      | `libjvm.dylib`                                           |
|   -2.9% |   -23 | 61.9% → 59.5% | 806 → 783 | `JavaThread::thread_main_inner`                                        | `libjvm.dylib`                                           |
|   -4.2% |   -23 | 41.8% → 39.7% | 545 → 522 | `Compile::Compile`                                                     | `libjvm.dylib`                                           |
|   -4.2% |   -23 | 41.9% → 39.8% | 546 → 523 | `C2Compiler::compile_method`                                           | `libjvm.dylib`                                           |
|   -6.3% |   -18 | 21.9% → 20.3% | 285 → 267 | `Compile::Code_Gen`                                                    | `libjvm.dylib`                                           |
|   -7.3% |   -14 | 14.8% → 13.6% | 193 → 179 | `Compile::Optimize`                                                    | `libjvm.dylib`                                           |
|  -16.9% |   -13 |   5.9% → 4.9% |   77 → 64 | `loadClass(String, boolean)`                                           | `java.lang.ClassLoader`                                  |
|  -21.4% |   -12 |   4.3% → 3.3% |   56 → 44 | `inflate_fast`                                                         | `libzip.dylib`                                           |
| removed |   -12 |   0.9% → 0.0% |    12 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000008801230000`     |
|  -10.4% |   -11 |   8.1% → 7.2% |  106 → 95 | `Compilation::emit_lir`                                                | `libjvm.dylib`                                           |
|  -14.5% |   -11 |   5.8% → 4.9% |   76 → 65 | `loadClass(String, boolean)`                                           | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  -14.5% |   -11 |   5.8% → 4.9% |   76 → 65 | `loadClass(String)`                                                    | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  -14.7% |   -10 |   5.2% → 4.4% |   68 → 58 | `Java_java_util_zip_Inflater_inflateBytesBytes`                        | `libzip.dylib`                                           |
|  -14.7% |   -10 |   5.2% → 4.4% |   68 → 58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`          | `java.util.zip.Inflater`                                 |

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

|  Change | Delta |            % | Samples | Function                                                                        | Location                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |  -346 | 26.6% → 0.0% | 346 → 0 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000008801008000` |
| removed |  -346 | 26.6% → 0.0% | 346 → 0 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000008801009400`  |
|  -16.9% |   -13 |  5.9% → 4.9% | 77 → 64 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                              |
| removed |   -12 |  0.9% → 0.0% |  12 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`          | `java.lang.invoke.LambdaForm$DMH.0x0000008801230000` |
|  -14.7% |   -10 |  5.2% → 4.4% | 68 → 58 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                             |
|  -13.5% |   -10 |  5.7% → 4.9% | 74 → 64 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                              |
|  -13.2% |    -9 |  5.2% → 4.5% | 68 → 59 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                             |
|  -13.0% |    -9 |  5.3% → 4.6% | 69 → 60 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                  |
|  -12.3% |    -9 |  5.6% → 4.9% | 73 → 64 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                              |
|  -11.1% |    -8 |  5.5% → 4.9% | 72 → 64 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                              |
|   -7.4% |    -5 |  5.2% → 4.8% | 68 → 63 | `read(byte[], int, int)`                                                        | `java.util.zip.ZipInputStream`                       |
|   -7.4% |    -5 |  5.2% → 4.8% | 68 → 63 | `read(byte[])`                                                                  | `java.io.FilterInputStream`                          |
|  -83.3% |    -5 |  0.5% → 0.1% |   6 → 1 | `generateCustomizedCode(LambdaForm, MethodType)`                                | `java.lang.invoke.InvokerBytecodeGenerator`          |
|  -83.3% |    -5 |  0.5% → 0.1% |   6 → 1 | `compileToBytecode()`                                                           | `java.lang.invoke.LambdaForm`                        |
| removed |    -5 |  0.4% → 0.0% |   5 → 0 | `findConstructor(Class, MethodType)`                                            | `java.lang.invoke.MethodHandles$Lookup`              |
| removed |    -4 |  0.3% → 0.0% |   4 → 0 | `make(MemberName)`                                                              | `java.lang.invoke.DirectMethodHandle`                |
|  -66.7% |    -4 |  0.5% → 0.2% |   6 → 2 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                           |
|  -66.7% |    -4 |  0.5% → 0.2% |   6 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`                |
| removed |    -3 |  0.2% → 0.0% |   3 → 0 | `getDeclaredMethods0(boolean)`                                                  | `java.lang.Class`                                    |
| removed |    -3 |  0.2% → 0.0% |   3 → 0 | `privateGetDeclaredMethods(boolean)`                                            | `java.lang.Class`                                    |

##### JIT

|  Change | Delta |           % | Samples | Function                    | Location    |
| ------: | ----: | ----------: | ------: | --------------------------- | ----------- |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `I2C/C2I adapters(0xbbb)`   | `<unknown>` |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `I2C/C2I adapters(0xbbbbb)` | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `zero_blocks`               | `<unknown>` |
|  -50.0% |    -1 | 0.2% → 0.1% |   2 → 1 | `I2C/C2I adapters(0xaaa)`   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `vtable stub`               | `<unknown>` |
