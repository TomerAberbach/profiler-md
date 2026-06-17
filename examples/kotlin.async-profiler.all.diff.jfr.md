# Sampling profile diff

1,322 samples (0 samples, 0.0%).

| Category | Change | Delta |             % |       Samples |
| -------- | -----: | ----: | ------------: | ------------: |
| ours     |  +0.8% |   +11 | 98.0% → 98.9% | 1,296 → 1,307 |
| stdlib   | -42.3% |   -11 |   2.0% → 1.1% |       26 → 15 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                   | Location      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `PhaseIdealLoop::build_loop_early()`                                                                                                                       | libjvm.dylib  |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `PhaseChaitin::gather_lrg_masks()`                                                                                                                         | libjvm.dylib  |
|  +28.6% |    +6 | 1.6% → 2.0% | 21 → 27 | `SymbolTable::do_lookup()`                                                                                                                                 | libjvm.dylib  |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `PhaseLive::add_liveout()`                                                                                                                                 | libjvm.dylib  |
|  +31.3% |    +5 | 1.2% → 1.6% | 16 → 21 | `PhaseChaitin::Split()`                                                                                                                                    | libjvm.dylib  |
|  +35.7% |    +5 | 1.1% → 1.4% | 14 → 19 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>()` | libjvm.dylib  |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `void OopOopIterateDispatch<G1RebuildRemSetClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>()`                                                   | libjvm.dylib  |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `LinearScan::resolve_data_flow()`                                                                                                                          | libjvm.dylib  |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `IndexSetIterator::advance_and_next()`                                                                                                                     | libjvm.dylib  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `Dict::Insert()`                                                                                                                                           | libjvm.dylib  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `PhaseIdealLoop::build_loop_tree()`                                                                                                                        | libjvm.dylib  |
|  +66.7% |    +4 | 0.5% → 0.8% |  6 → 10 | `inflate_table()`                                                                                                                                          | libzip.dylib  |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `RelocIterator::set_limits()`                                                                                                                              | libjvm.dylib  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `GlobalValueNumbering::GlobalValueNumbering()`                                                                                                             | libjvm.dylib  |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `PhaseAggressiveCoalesce::insert_copies()`                                                                                                                 | libjvm.dylib  |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `Type::hashcons()`                                                                                                                                         | libjvm.dylib  |
|  +14.3% |    +3 | 1.6% → 1.8% | 21 → 24 | `tlv_get_addr()`                                                                                                                                           | libdyld.dylib |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `ciObjectFactory::get_metadata()`                                                                                                                          | libjvm.dylib  |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `Node::dominates()`                                                                                                                                        | libjvm.dylib  |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `PhaseIFG::effective_degree()`                                                                                                                             | libjvm.dylib  |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                       | Location                       |
| ------: | ----: | ----------: | ------: | ---------------------------------------------- | ------------------------------ |
|  -47.1% |    -8 | 1.3% → 0.7% |  17 → 9 | `PhaseIdealLoop::build_loop_late()`            | libjvm.dylib                   |
|  -43.8% |    -7 | 1.2% → 0.7% |  16 → 9 | `PhaseChaitin::elide_copy()`                   | libjvm.dylib                   |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `checkNotNullParameter(Object, String)`        | kotlin.jvm.internal.Intrinsics |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `Matcher::xform()`                             | libjvm.dylib                   |
|  -83.3% |    -5 | 0.5% → 0.1% |   6 → 1 | `PhaseIdealLoop::get_early_ctrl()`             | libjvm.dylib                   |
|  -40.0% |    -4 | 0.8% → 0.5% |  10 → 6 | `PhaseIdealLoop::build_loop_late_post_work()`  | libjvm.dylib                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Type::meet_helper()`                          | libjvm.dylib                   |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Node::is_dead_loop_safe()`                    | libjvm.dylib                   |
|  -26.7% |    -4 | 1.1% → 0.8% | 15 → 11 | `InstanceKlass::find_method_index()`           | libjvm.dylib                   |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `__psynch_cvbroad()`                           | libsystem_kernel.dylib         |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `itable stub()`                                | `<unknown>`                    |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseCFG::schedule_late()`                    | libjvm.dylib                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `PhaseIterGVN::subsume_node()`                 | libjvm.dylib                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `PhaseIFG::SquareUp()`                         | libjvm.dylib                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `__psynch_mutexdrop()`                         | libsystem_kernel.dylib         |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `Node::is_CFG()`                               | libjvm.dylib                   |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `PhaseChaitin::build_ifg_virtual()`            | libjvm.dylib                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `semaphore_wait_trap()`                        | libsystem_kernel.dylib         |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `ClassFileParser::skip_over_field_signature()` | libjvm.dylib                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `ImmutableOopMap::update_register_map()`       | libjvm.dylib                   |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                            | Location                                                                                                                                                                     |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |  +350 |  0.0% → 26.5% |   0 → 350 | `invokeStatic(Object, Object)`                                                      | java.lang.invoke.LambdaForm$DMH.0x0000007001008000                                                                                                                           |
|     new |  +350 |  0.0% → 26.5% |   0 → 350 | `invoke(Object, Object, Object)`                                                    | java.lang.invoke.LambdaForm$MH.0x0000007001009400                                                                                                                            |
|     new |   +95 |   0.0% → 7.2% |    0 → 95 | `invoke()`                                                                          | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001653eb8                                                      |
|     new |   +67 |   0.0% → 5.1% |    0 → 67 | `invoke()`                                                                          | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016b4c80                                                      |
|     new |   +25 |   0.0% → 1.9% |    0 → 25 | `invoke()`                                                                          | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x00000070016b5128                                             |
|     new |   +23 |   0.0% → 1.7% |    0 → 23 | `invoke(Object)`                                                                    | org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700166d280                                                                                 |
|     new |   +22 |   0.0% → 1.7% |    0 → 22 | `invoke()`                                                                          | org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer$$Lambda.0x00000070016540f0 |
|  +45.5% |   +20 |   3.3% → 4.8% |   44 → 64 | `WorkerThread::run()`                                                               | libjvm.dylib                                                                                                                                                                 |
|     new |   +17 |   0.0% → 1.3% |    0 → 17 | `analyzeInternal(ConePostponedResolvedAtom, boolean, CollectionLiteralBounds)`      | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$$Lambda.0x0000007001683768                                                                                       |
|     new |   +17 |   0.0% → 1.3% |    0 → 17 | `invoke(Object)`                                                                    | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000007001686db8                                                                              |
|     new |   +16 |   0.0% → 1.2% |    0 → 16 | `invoke()`                                                                          | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016856e8                                                      |
|     new |   +16 |   0.0% → 1.2% |    0 → 16 | `invoke()`                                                                          | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x00000070016854b0                                                                    |
|   +1.7% |   +15 | 66.3% → 67.5% | 877 → 892 | `_pthread_start()`                                                                  | libsystem_pthread.dylib                                                                                                                                                      |
|   +1.7% |   +15 | 66.3% → 67.5% | 877 → 892 | `thread_start()`                                                                    | libsystem_pthread.dylib                                                                                                                                                      |
|   +1.6% |   +14 | 66.3% → 67.4% | 877 → 891 | `Thread::call_run()`                                                                | libjvm.dylib                                                                                                                                                                 |
|   +1.6% |   +14 | 66.3% → 67.4% | 877 → 891 | `thread_native_entry()`                                                             | libjvm.dylib                                                                                                                                                                 |
|     new |   +13 |   0.0% → 1.0% |    0 → 13 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`              | java.lang.invoke.LambdaForm$DMH.0x0000007001230000                                                                                                                           |
| +150.0% |   +12 |   0.6% → 1.5% |    8 → 20 | `G1RebuildRSAndScrubTask::G1RebuildRSAndScrubRegionClosure::scan_and_scrub_to_pb()` | libjvm.dylib                                                                                                                                                                 |
|     new |   +12 |   0.0% → 0.9% |    0 → 12 | `invoke(Object, Object)`                                                            | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$$Lambda.0x0000007001473948                                                                    |
|     new |   +12 |   0.0% → 0.9% |    0 → 12 | `invoke(Object)`                                                                    | org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x00000070015fc020                                                                                 |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                                                                                                                                     | Location                                                                                                                                                                     |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -362 |  27.4% → 0.0% |   362 → 0 | `invokeStatic(Object, Object)`                                                                                                                                               | java.lang.invoke.LambdaForm$DMH.0x0000000801008000                                                                                                                           |
| removed |  -362 |  27.4% → 0.0% |   362 → 0 | `invoke(Object, Object, Object)`                                                                                                                                             | java.lang.invoke.LambdaForm$MH.0x0000000801009400                                                                                                                            |
| removed |  -102 |   7.7% → 0.0% |   102 → 0 | `invoke()`                                                                                                                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000008016540f0                                                      |
| removed |   -74 |   5.6% → 0.0% |    74 → 0 | `invoke()`                                                                                                                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000008016b4c80                                                      |
| removed |   -31 |   2.3% → 0.0% |    31 → 0 | `invoke()`                                                                                                                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x00000008016b5128                                             |
| removed |   -24 |   1.8% → 0.0% |    24 → 0 | `analyzeInternal(ConePostponedResolvedAtom, boolean, CollectionLiteralBounds)`                                                                                               | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$$Lambda.0x0000000801683978                                                                                       |
| removed |   -24 |   1.8% → 0.0% |    24 → 0 | `invoke(Object)`                                                                                                                                                             | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x0000000801686dd8                                                                              |
| removed |   -23 |   1.7% → 0.0% |    23 → 0 | `invoke()`                                                                                                                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer$$Lambda.0x0000000801654328 |
| removed |   -23 |   1.7% → 0.0% |    23 → 0 | `invoke()`                                                                                                                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000008016856e8                                                      |
| removed |   -23 |   1.7% → 0.0% |    23 → 0 | `invoke()`                                                                                                                                                                   | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x00000008016854b0                                                                    |
|  -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletion(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)` | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter                                                                                                         |
|  -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `complete(ConstraintSystemCompletionContext, ConstraintSystemCompletionMode, List, ConeKotlinType, ResolutionContext, ConstraintSystemCompleter$PostponedAtomAnalyzer)`      | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter                                                                                                         |
|  -47.4% |   -18 |   2.9% → 1.5% |   38 → 20 | `runCompletionForCall(Candidate, ConstraintSystemCompletionMode, FirExpression, ConeKotlinType, PostponedArgumentsAnalyzer)`                                                 | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter                                                                                                                  |
|  -38.3% |   -18 |   3.6% → 2.2% |   47 → 29 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                                                       | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter                                                                                                                  |
|   -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::compile_method()`                                                                                                                                              | libjvm.dylib                                                                                                                                                                 |
|   -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compilation::Compilation()`                                                                                                                                                 | libjvm.dylib                                                                                                                                                                 |
|   -6.9% |   -17 | 18.6% → 17.3% | 246 → 229 | `Compiler::compile_method()`                                                                                                                                                 | libjvm.dylib                                                                                                                                                                 |
|   -7.0% |   -16 | 17.2% → 16.0% | 228 → 212 | `Compilation::compile_java_method()`                                                                                                                                         | libjvm.dylib                                                                                                                                                                 |
|   -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `run(String[])`                                                                                                                                                              | org.jetbrains.kotlin.preloading.Preloader                                                                                                                                    |
|   -3.2% |   -14 | 33.2% → 32.1% | 439 → 425 | `main(String[])`                                                                                                                                                             | org.jetbrains.kotlin.preloading.Preloader                                                                                                                                    |


# Allocated heap profile diff

Allocated 26.8 MB → 25.2 MB (-1.53 MB, -5.7%) over 1,362 samples → 1,351 samples (19.7 kB → 18.7 kB per sample).

| Category | Change |    Delta |      % |              Size |       Samples |
| -------- | -----: | -------: | -----: | ----------------: | ------------: |
| ours     |  -5.7% | -1.53 MB | 100.0% | 26.8 MB → 25.2 MB | 1,362 → 1,351 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |    Delta |             % |              Size |   Samples | Function                                                                        | Location                                                                     |
| --------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    +23.8% |  +451 kB |   7.1% → 9.3% | 1.89 MB → 2.34 MB |   82 → 97 | `clone()`                                                                       | java.lang.Object                                                             |
|   +434.2% |  +352 kB |   0.3% → 1.7% |    81 kB → 433 kB |     2 → 4 | `readBootstrapMethodsAttribute(int)`                                            | org.jetbrains.org.objectweb.asm.ClassReader                                  |
|       new |  +148 kB |   0.0% → 0.6% |      0 B → 148 kB |     0 → 4 | `read(InputStream, int)`                                                        | java.nio.file.Files                                                          |
|     +2.0% |  +130 kB | 24.9% → 26.9% | 6.65 MB → 6.78 MB | 285 → 275 | `copyOf(byte[], int)`                                                           | java.util.Arrays                                                             |
|    +25.6% | +56.2 kB |   0.8% → 1.1% |   220 kB → 276 kB |         5 | `accept(ClassVisitor, Attribute[], int)`                                        | org.jetbrains.org.objectweb.asm.ClassReader                                  |
|   +243.6% | +48.7 kB |   0.1% → 0.3% |   20 kB → 68.7 kB |     3 → 2 | `getBufferBytes(ByteBuffer)`                                                    | jdk.internal.jimage.BasicImageReader                                         |
|    +41.7% | +42.6 kB |   0.4% → 0.6% |   102 kB → 145 kB |     2 → 5 | `getBytes(int, int)`                                                            | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping |
|       new | +19.9 kB |   0.0% → 0.1% |     0 B → 19.9 kB |     0 → 1 | `<init>(int)`                                                                   | org.jetbrains.org.objectweb.asm.ByteVector                                   |
| +70633.3% |   +17 kB |   0.0% → 0.1% |      24 B → 17 kB |     1 → 2 | `compress(char[], int, int)`                                                    | java.lang.StringUTF16                                                        |
|   +133.3% | +16.4 kB |   0.0% → 0.1% | 12.3 kB → 28.8 kB |     3 → 7 | `<init>(InputStream)`                                                           | org.jetbrains.kotlin.protobuf.CodedInputStream                               |
|       new | +16.4 kB |   0.0% → 0.1% |     0 B → 16.4 kB |     0 → 1 | `enlarge(int)`                                                                  | org.jetbrains.org.objectweb.asm.ByteVector                                   |
|  +1491.5% | +15.4 kB |   0.0% → 0.1% | 1.03 kB → 16.4 kB |         4 | `copyOf(Object[], int, Class)`                                                  | java.util.Arrays                                                             |
|       new | +15.2 kB |   0.0% → 0.1% |     0 B → 15.2 kB |     0 → 2 | `forceCapacity(int[], int, int)`                                                | it.unimi.dsi.fastutil.ints.IntArrays                                         |
|       new | +9.06 kB |          0.0% |     0 B → 9.06 kB |     0 → 1 | `<init>(CharSequence, Lexer)`                                                   | com.intellij.lang.impl.TokenSequence$Builder                                 |
|  +1567.7% | +3.89 kB |          0.0% |   248 B → 4.14 kB |     3 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | java.lang.ClassLoader                                                        |
|       new | +2.62 kB |          0.0% |     0 B → 2.62 kB |     0 → 2 | `<init>(byte[], int, boolean)`                                                  | org.jetbrains.org.objectweb.asm.ClassReader                                  |
|    +30.1% | +1.81 kB |          0.0% |    6 kB → 7.81 kB |     7 → 8 | `enlarge(int)`                                                                  | jdk.internal.org.objectweb.asm.ByteVector                                    |
|   +583.3% | +1.12 kB |          0.0% |   192 B → 1.31 kB |     1 → 4 | `toArray()`                                                                     | org.jetbrains.org.objectweb.asm.tree.InsnList                                |
|       new | +1.04 kB |          0.0% |     0 B → 1.04 kB |     0 → 1 | `<init>()`                                                                      | org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer      |
|    +22.0% |   +912 B |          0.0% | 4.15 kB → 5.06 kB |   38 → 41 | `<init>(int)`                                                                   | org.jetbrains.kotlin.protobuf.ByteString$Output                              |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                              | Location                                                        |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|  -13.8% | -1.35 MB | 36.4% → 33.3% | 9.74 MB → 8.39 MB | 342 → 322 | `<init>(int)`                                                                         | java.io.ByteArrayOutputStream                                   |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |     4 → 3 | `getBufIfOpen(boolean)`                                                               | java.io.BufferedInputStream                                     |
|  -36.8% |  -446 kB |   4.5% → 3.0% |  1.21 MB → 767 kB |     8 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt |
|  -99.9% |  -427 kB |   1.6% → 0.0% |    427 kB → 560 B |    18 → 7 | `resize()`                                                                            | java.util.HashMap                                               |
|   -1.0% | -41.1 kB | 15.5% → 16.3% | 4.15 MB → 4.11 MB |         5 | `initCEN(int, ZipCoder)`                                                              | java.util.zip.ZipFile$Source                                    |
|  -72.1% | -39.9 kB |   0.2% → 0.1% | 55.4 kB → 15.5 kB |     3 → 1 | `<init>(InputStream, Inflater, int)`                                                  | java.util.zip.InflaterInputStream                               |
|  -89.3% |   -30 kB |   0.1% → 0.0% | 33.6 kB → 3.58 kB |    10 → 9 | `copyOf(Object[], int)`                                                               | java.util.Arrays                                                |
| removed | -8.21 kB |          0.0% |     8.21 kB → 0 B |     1 → 0 | `<init>(InputStream, int)`                                                            | java.util.jar.Manifest$FastInputStream                          |
|  -73.0% | -5.99 kB |          0.0% | 8.21 kB → 2.22 kB |     1 → 2 | `read(ByteBuffer)`                                                                    | java.nio.channels.Channels$ReadableByteChannelImpl              |
|  -95.8% | -4.42 kB |          0.0% |   4.61 kB → 192 B |     4 → 6 | `<init>(int)`                                                                         | java.util.ArrayList                                             |
|  -86.4% | -2.29 kB |          0.0% |   2.65 kB → 360 B |    7 → 13 | `newInstance(OutputStream, int)`                                                      | org.jetbrains.kotlin.protobuf.CodedOutputStream                 |
| removed | -1.12 kB |          0.0% |     1.12 kB → 0 B |     2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`       | org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer   |
| removed | -1.06 kB |          0.0% |     1.06 kB → 0 B |     2 → 0 | `resize(int)`                                                                         | java.util.IdentityHashMap                                       |
|  -20.0% | -1.04 kB |          0.0% |  5.2 kB → 4.16 kB |     5 → 4 | `<init>(ClassWriter)`                                                                 | jdk.internal.org.objectweb.asm.SymbolTable                      |
| removed | -1.04 kB |          0.0% |     1.04 kB → 0 B |     1 → 0 | `<init>(int)`                                                                         | com.fasterxml.aalto.util.XmlCharTypes                           |
| removed |   -544 B |          0.0% |       544 B → 0 B |     2 → 0 | `init(int)`                                                                           | java.util.IdentityHashMap                                       |
|  -90.0% |   -504 B |          0.0% |      560 B → 56 B |    10 → 1 | `ensureCapacity()`                                                                    | com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure           |
| removed |   -448 B |          0.0% |       448 B → 0 B |     2 → 0 | `visitMethod(int, String, String, String, String[])`                                  | jdk.internal.org.objectweb.asm.ClassWriter                      |
|  -19.0% |   -256 B |          0.0% | 1.34 kB → 1.09 kB |   42 → 34 | `iterator()`                                                                          | java.util.ArrayList                                             |
|  -36.4% |   -256 B |          0.0% |     704 B → 448 B |    11 → 7 | `<init>(int, float, boolean)`                                                         | java.util.HashSet                                               |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                                                                                           | Location                                                                                                                |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|     new | +6.19 MB |  0.0% → 24.5% |     0 B → 6.19 MB |   0 → 647 | `invokeStatic(Object, Object)`                                                                                                                     | java.lang.invoke.LambdaForm$DMH.0x0000007001008000                                                                      |
|     new | +6.19 MB |  0.0% → 24.5% |     0 B → 6.19 MB |   0 → 647 | `invoke(Object, Object, Object)`                                                                                                                   | java.lang.invoke.LambdaForm$MH.0x0000007001009400                                                                       |
|     new | +1.35 MB |   0.0% → 5.4% |     0 B → 1.35 MB |    0 → 17 | `invoke()`                                                                                                                                         | org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015c8000                              |
|     new | +1.35 MB |   0.0% → 5.4% |     0 B → 1.35 MB |    0 → 17 | `compute()`                                                                                                                                        | org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015c6558                            |
|     new |  +911 kB |   0.0% → 3.6% |      0 B → 911 kB |     0 → 8 | `invoke(Object)`                                                                                                                                   | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000007001396000                              |
|   +6.8% |  +581 kB | 31.9% → 36.2% | 8.54 MB → 9.12 MB | 365 → 372 | `copyOf(byte[], int)`                                                                                                                              | java.util.Arrays                                                                                                        |
|   +6.3% |  +536 kB | 31.9% → 35.9% | 8.54 MB → 9.07 MB | 348 → 353 | `toByteArray()`                                                                                                                                    | java.io.ByteArrayOutputStream                                                                                           |
|  +23.8% |  +451 kB |   7.1% → 9.3% | 1.89 MB → 2.34 MB |   82 → 97 | `clone()`                                                                                                                                          | java.lang.Object                                                                                                        |
|     new |  +404 kB |   0.0% → 1.6% |      0 B → 404 kB |   0 → 176 | `invoke()`                                                                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001653eb8 |
|     new |  +397 kB |   0.0% → 1.6% |      0 B → 397 kB |   0 → 149 | `invoke()`                                                                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016b4c80 |
| +437.4% |  +354 kB |   0.3% → 1.7% |    81 kB → 436 kB |     2 → 6 | `<init>(byte[], int, boolean)`                                                                                                                     | org.jetbrains.org.objectweb.asm.ClassReader                                                                             |
| +437.4% |  +354 kB |   0.3% → 1.7% |    81 kB → 436 kB |     2 → 6 | `<init>(byte[], int, int)`                                                                                                                         | org.jetbrains.org.objectweb.asm.ClassReader                                                                             |
| +437.4% |  +354 kB |   0.3% → 1.7% |    81 kB → 436 kB |     2 → 6 | `<init>(byte[])`                                                                                                                                   | org.jetbrains.org.objectweb.asm.ClassReader                                                                             |
| +434.2% |  +352 kB |   0.3% → 1.7% |    81 kB → 433 kB |     2 → 4 | `readBootstrapMethodsAttribute(int)`                                                                                                               | org.jetbrains.org.objectweb.asm.ClassReader                                                                             |
| +258.4% |  +283 kB |   0.4% → 1.6% |   110 kB → 393 kB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope                                            |
| +258.4% |  +283 kB |   0.4% → 1.6% |   110 kB → 393 kB |   59 → 53 | `invoke(FirScope, Name, Function1)`                                                                                                                | org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1                              |
| +258.4% |  +283 kB |   0.4% → 1.6% |   110 kB → 393 kB |   59 → 53 | `invoke(Object, Object, Object)`                                                                                                                   | org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1                              |
| +258.4% |  +283 kB |   0.4% → 1.6% |   110 kB → 393 kB |   59 → 53 | `processFunctionsByName(Name, Function1)`                                                                                                          | org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope                                                       |
| +190.4% |  +272 kB |   0.5% → 1.6% |   143 kB → 415 kB | 212 → 195 | `transform(FirTransformer, Object)`                                                                                                                | org.jetbrains.kotlin.fir.declarations.FirNamedFunction                                                                  |
| +203.0% |  +269 kB |   0.5% → 1.6% |   133 kB → 402 kB | 169 → 151 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer                             |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                                                     | Location                                                                                     |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| removed | -5.96 MB |  22.3% → 0.0% |     5.96 MB → 0 B |       637 → 0 | `invokeStatic(Object, Object)`                                               | java.lang.invoke.LambdaForm$DMH.0x0000000801008000                                           |
| removed | -5.96 MB |  22.3% → 0.0% |     5.96 MB → 0 B |       637 → 0 | `invoke(Object, Object, Object)`                                             | java.lang.invoke.LambdaForm$MH.0x0000000801009400                                            |
|   -8.5% | -1.76 MB | 77.7% → 75.5% |   20.8 MB → 19 MB |     723 → 702 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                         |
|   -8.5% | -1.76 MB | 77.7% → 75.5% |   20.8 MB → 19 MB |     723 → 702 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                         |
|   -5.7% | -1.53 MB |        100.0% | 26.8 MB → 25.2 MB | 1,360 → 1,349 | `run(String[])`                                                              | org.jetbrains.kotlin.preloading.Preloader                                                    |
|   -5.7% | -1.53 MB |        100.0% | 26.8 MB → 25.2 MB | 1,360 → 1,349 | `main(String[])`                                                             | org.jetbrains.kotlin.preloading.Preloader                                                    |
| removed | -1.47 MB |   5.5% → 0.0% |     1.47 MB → 0 B |        19 → 0 | `compute()`                                                                  | org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000008015c6c78 |
| removed | -1.47 MB |   5.5% → 0.0% |     1.47 MB → 0 B |        18 → 0 | `invoke()`                                                                   | org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000008015c8700   |
| -100.0% | -1.43 MB |   5.3% → 0.0% |   1.43 MB → 144 B |        57 → 1 | `transformAnnotations(FirTransformer, Object)`                               | org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl                               |
|  -13.8% | -1.35 MB | 36.4% → 33.3% | 9.74 MB → 8.39 MB |     342 → 322 | `<init>(int)`                                                                | java.io.ByteArrayOutputStream                                                                |
| removed | -1.31 MB |   4.9% → 0.0% |     1.31 MB → 0 B |        10 → 0 | `invoke(Object)`                                                             | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000000801396000   |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `getBufIfOpen(boolean)`                                                      | java.io.BufferedInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `getBufIfOpen()`                                                             | java.io.BufferedInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `fill()`                                                                     | java.io.BufferedInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `read1(byte[], int, int)`                                                    | java.io.BufferedInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `implRead(byte[], int, int)`                                                 | java.io.BufferedInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `read(byte[], int, int)`                                                     | java.io.BufferedInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `read(byte[], int, int)`                                                     | java.io.FilterInputStream                                                                    |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `read(byte[], int, int)`                                                     | java.io.PushbackInputStream                                                                  |
|  -25.0% |  -524 kB |   7.8% → 6.2% |  2.1 MB → 1.57 MB |         4 → 3 | `readFully(byte[], int, int)`                                                | java.util.zip.ZipInputStream                                                                 |
