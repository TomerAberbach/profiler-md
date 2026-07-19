# Sampling profile diff

1,307 samples → 1,331 samples (+24 samples, +1.8%).

| Category          |  Change | Delta |             % |       Samples |
| ----------------- | ------: | ----: | ------------: | ------------: |
| native            |   +0.6% |    +7 | 84.8% → 83.8% | 1,108 → 1,115 |
| ours              |   +0.7% |    +1 | 10.4% → 10.3% |     136 → 137 |
| stdlib            |  +25.5% |   +13 |   3.9% → 4.8% |       51 → 64 |
| jit               |  +36.4% |    +4 |   0.8% → 1.1% |       11 → 15 |
| garbage collector | removed |    -1 |   0.1% → 0.0% |         1 → 0 |

Hidden functions account for 86.5% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                 | Location                                                                             |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| +157.1% |   +11 | 0.5% → 1.4% |  7 → 18 | `DIR_Chunk* GrowableArrayWithAllocator<DIR_Chunk*, GrowableArray<DIR_Chunk*>>::insert_sorted<&DIR_Chunk::compare(DIR_Chunk* const&, DIR_Chunk* const&)>` | `libjvm.dylib`                                                                       |
|  +38.1% |    +8 | 1.6% → 2.2% | 21 → 29 | `SymbolTable::do_lookup`                                                                                                                                 | `libjvm.dylib`                                                                       |
| +116.7% |    +7 | 0.5% → 1.0% |  6 → 13 | `LinearScanWalker::free_collect_inactive_fixed`                                                                                                          | `libjvm.dylib`                                                                       |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `PhaseChaitin::build_ifg_physical`                                                                                                                       | `libjvm.dylib`                                                                       |
| +233.3% |    +7 | 0.2% → 0.8% |  3 → 10 | `trampoline_stub_Relocation::get_trampoline_for`                                                                                                         | `libjvm.dylib`                                                                       |
|  +23.8% |    +5 | 1.6% → 2.0% | 21 → 26 | `tlv_get_addr`                                                                                                                                           | `libdyld.dylib`                                                                      |
|  +83.3% |    +5 | 0.5% → 0.8% |  6 → 11 | `PhaseChaitin::elide_copy`                                                                                                                               | `libjvm.dylib`                                                                       |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `I2C/C2I adapters(0xb)`                                                                                                                                  | `<unknown>`                                                                          |
|  +25.0% |    +4 | 1.2% → 1.5% | 16 → 20 | `PhaseChaitin::Split`                                                                                                                                    | `libjvm.dylib`                                                                       |
|  +37.5% |    +3 | 0.6% → 0.8% |  8 → 11 | `PhaseLive::add_liveout`                                                                                                                                 | `libjvm.dylib`                                                                       |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `prepareLightTree()`                                                                                                                                     | `com.intellij.lang.impl.PsiBuilderImpl`                                              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `performLexing()`                                                                                                                                        | `com.intellij.lang.impl.TokenSequence$Builder`                                       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `itable stub`                                                                                                                                            | `<unknown>`                                                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `visitProperty(FirProperty, Void)`                                                                                                                       | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `execute(AbstractInsnNode, Interpreter)`                                                                                                                 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `parametersCount(TypeConstructorMarker)`                                                                                                                 | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                     |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `check(CheckerContext, DiagnosticReporter, FirDeclaration)`                                                                                              | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirExpectConsistencyChecker` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `InterpreterRuntime::resolve_from_cache`                                                                                                                 | `libjvm.dylib`                                                                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `convertLoopOrIfBody(LighterASTNode)`                                                                                                                    | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hasPackage(FqName)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                         | Location                                                        |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------- |
|  -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `__psynch_cvwait`                                                | `libsystem_kernel.dylib`                                        |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                              | `libjvm.dylib`                                                  |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`                             | `libjvm.dylib`                                                  |
|  -33.3% |    -4 | 0.9% → 0.6% |  12 → 8 | `_platform_memset`                                               | `libsystem_platform.dylib`                                      |
|   -7.4% |    -4 | 4.1% → 3.8% | 54 → 50 | `inflate_fast`                                                   | `libzip.dylib`                                                  |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `I2C/C2I adapters(0xbba)`                                        | `<unknown>`                                                     |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `PhaseAggressiveCoalesce::insert_copies`                         | `libjvm.dylib`                                                  |
|  -22.2% |    -2 | 0.7% → 0.5% |   9 → 7 | `PhaseIdealLoop::build_loop_late`                                | `libjvm.dylib`                                                  |
|  -22.2% |    -2 | 0.7% → 0.5% |   9 → 7 | `pthread_jit_write_protect_np`                                   | `libsystem_pthread.dylib`                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `toArgumentToParameterMapping()`                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentMapping` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `prepareType(KotlinTypeMarker)`                                  | `org.jetbrains.kotlin.fir.types.ConeTypePreparator`             |
|  -33.3% |    -2 | 0.5% → 0.3% |   6 → 4 | `checkNotNullParameter(Object, String)`                          | `kotlin.jvm.internal.Intrinsics`                                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `isDataClassCopy(FirCallableSymbol, FirClassSymbol, FirSession)` | `org.jetbrains.kotlin.fir.PrivateToThisUtilsKt`                 |
|  -11.1% |    -1 | 0.7% → 0.6% |   9 → 8 | `PhaseLive::compute`                                             | `libjvm.dylib`                                                  |
|  -11.1% |    -1 | 0.7% → 0.6% |   9 → 8 | `PhaseIdealLoop::build_loop_early`                               | `libjvm.dylib`                                                  |
|   -7.7% |    -1 | 1.0% → 0.9% | 13 → 12 | `__psynch_mutexwait`                                             | `libsystem_kernel.dylib`                                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `toSet(Iterable)`                                                | `kotlin.collections.CollectionsKt___CollectionsKt`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`      | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                 |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I2C/C2I adapters(0xbbbb)`                                       | `<unknown>`                                                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                           | `com.intellij.lang.impl.PsiBuilderImpl`                         |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function                                                                                                                                      | Location                                                                                                                  |
| -------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| +3300.0% |   +66 |   0.2% → 5.1% |    2 → 68 | `invoke()`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016b3090` |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.9% |   +20 | 25.9% → 27.0% | 339 → 359 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +19 | 26.1% → 27.0% | 341 → 360 | `invoke(Object, Object[])`                                                                                                                    | `java.lang.reflect.Method`                                                                                                |
|    +5.7% |   +19 | 25.5% → 26.4% | 333 → 352 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.3% |   +18 | 25.9% → 26.8% | 339 → 357 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.6% |   +18 | 24.8% → 25.7% | 324 → 342 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.2% |   +17 | 24.8% → 25.6% | 324 → 341 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                   |
|    +5.3% |   +17 | 24.6% → 25.4% | 321 → 338 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                               |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                             | Location                                                                                                                  |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -95.2% |   -59 | 4.7% → 0.2% |  62 → 3 | `invoke()`                                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a8016ab9b8` |
|  -42.9% |    -9 | 1.6% → 0.9% | 21 → 12 | `__psynch_cvwait`                                                                                                                                    | `libsystem_kernel.dylib`                                                                                                  |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, Attribute[], int)`                                                                                                             | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -72.7% |    -8 | 0.8% → 0.2% |  11 → 3 | `accept(ClassVisitor, int)`                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraintsIgnoringForksData(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                          | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -88.9% |    -8 | 0.7% → 0.1% |   9 → 1 | `processConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector)`                                           | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -77.8% |    -7 | 0.7% → 0.2% |   9 → 2 | `readMethod(ClassVisitor, Context, int)`                                                                                                             | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                             |
| removed |    -7 | 0.5% → 0.0% |   7 → 0 | `findClass(JavaClassFinder$Request, GlobalSearchScope)`                                                                                              | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                                                      |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `incorporate(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)`                                                                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator`                                          |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `processGivenConstraints(ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, Collection)`                          | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                              |
|  -66.7% |    -6 | 0.7% → 0.2% |   9 → 3 | `MultiNode::is_CFG`                                                                                                                                  | `libjvm.dylib`                                                                                                            |
|  -27.3% |    -6 | 1.7% → 1.2% | 22 → 16 | `IndexSetIterator::advance_and_next`                                                                                                                 | `libjvm.dylib`                                                                                                            |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[])`                                       | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
| removed |    -6 | 0.5% → 0.0% |   6 → 0 | `<init>(VirtualFile, FqName, ClassifierResolutionContext, BinaryClassSignatureParser, int, JavaClass, byte[], int, DefaultConstructorMarker)`        | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass`                                                |
|  -28.6% |    -6 | 1.6% → 1.1% | 21 → 15 | `accept(FirVisitor, Object)`                                                                                                                         | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                                    |
|  -16.1% |    -5 | 2.4% → 2.0% | 31 → 26 | `PhaseIdealLoop::build_loop_late`                                                                                                                    | `libjvm.dylib`                                                                                                            |
|  -71.4% |    -5 | 0.5% → 0.2% |   7 → 2 | `transform(FirTransformer, Object)`                                                                                                                  | `org.jetbrains.kotlin.fir.declarations.FirValueParameter`                                                                 |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `resolveArgumentExpression(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom)`                                                           | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                 |
|  -62.5% |    -5 | 0.6% → 0.2% |   8 → 3 | `resolveArgumentExpression(Candidate, ConeResolutionAtom, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, FirAnonymousFunction)`   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`                                                 |
|  -27.8% |    -5 | 1.4% → 1.0% | 18 → 13 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                                                       |
